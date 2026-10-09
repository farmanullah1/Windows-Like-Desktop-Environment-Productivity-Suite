/**
 * Windows Desktop Environment & Productivity Suite
 * MS SQL Server Enterprise Connection & Data Layer
 * Compliant with Master Architecture Specification Sections 10, 11 & 12.
 */

import mssql from 'mssql';

let pool = null;
let connectionState = 'INITIALIZING';
let lastError = null;
let lastConnectedAt = null;

export const getDbConfig = () => ({
  server: process.env.DB_SERVER || process.env.SERVER || 'localhost',
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME || process.env.DATABASE || 'MyOS',
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '',
  options: {
    encrypt: process.env.DB_ENCRYPT !== 'false',
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE !== 'false',
    connectTimeout: Number(process.env.DB_CONNECTION_TIMEOUT_MS) || 5000,
    requestTimeout: 10000,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
});

/**
 * Initialize connection pool to MS SQL Server
 */
export async function initDatabase() {
  const config = getDbConfig();
  connectionState = 'CONNECTING';

  try {
    // Only attempt if password or trusted auth is configured
    pool = new mssql.ConnectionPool(config);
    await pool.connect();
    connectionState = 'CONNECTED';
    lastConnectedAt = new Date().toISOString();
    lastError = null;
    // eslint-disable-next-line no-console
    console.log(`[SQL Server] Connected successfully to ${config.database} on ${config.server}:${config.port}`);
    await ensureCoreTables();
    return pool;
  } catch (err) {
    connectionState = 'DISCONNECTED';
    lastError = err.message || String(err);
    // eslint-disable-next-line no-console
    console.warn(`[SQL Server] Notice: Could not connect to SQL Server (${config.server}:${config.port}/${config.database}): ${lastError}. Using resilient local persistence cache.`);
    return null;
  }
}

/**
 * Check and ensure base tables exist in MyOS if connected
 */
async function ensureCoreTables() {
  if (!pool || connectionState !== 'CONNECTED') return;
  try {
    const request = pool.request();
    await request.query(`
      IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Workspaces')
      BEGIN
        CREATE TABLE dbo.Workspaces (
          Id NVARCHAR(64) PRIMARY KEY,
          Name NVARCHAR(100) NOT NULL,
          SortOrder INT NOT NULL DEFAULT 0,
          IsProtected BIT NOT NULL DEFAULT 0,
          WallpaperUrl NVARCHAR(255) NULL,
          CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME()
        );
      END;

      IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Notes')
      BEGIN
        CREATE TABLE dbo.Notes (
          Id NVARCHAR(64) PRIMARY KEY,
          UserId NVARCHAR(64) NOT NULL,
          Title NVARCHAR(200) NOT NULL,
          Content NVARCHAR(MAX) NULL,
          IsPinned BIT NOT NULL DEFAULT 0,
          IsArchived BIT NOT NULL DEFAULT 0,
          CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
          UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME()
        );
      END;

      IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'AuditLogs')
      BEGIN
        CREATE TABLE dbo.AuditLogs (
          Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWSEQUENTIALID(),
          EventType NVARCHAR(100) NOT NULL,
          Severity NVARCHAR(20) NOT NULL DEFAULT 'info',
          Details NVARCHAR(MAX) NULL,
          CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME()
        );
      END;
    `);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[SQL Server] Table initialization check deferred:', err.message);
  }
}

/**
 * Test connectivity with arbitrary or active credentials
 */
export async function testConnection(customConfig = null) {
  const config = customConfig || getDbConfig();
  const startTime = Date.now();
  let testPool = null;

  try {
    testPool = new mssql.ConnectionPool({
      ...config,
      options: {
        ...config.options,
        connectTimeout: 4000,
      },
    });
    await testPool.connect();
    const result = await testPool.request().query('SELECT @@VERSION AS Version, DB_NAME() AS CurrentDb');
    const latencyMs = Date.now() - startTime;
    await testPool.close();

    return {
      success: true,
      latencyMs,
      database: result.recordset[0]?.CurrentDb || config.database,
      version: result.recordset[0]?.Version || 'Microsoft SQL Server',
      server: config.server,
      port: config.port,
    };
  } catch (err) {
    if (testPool) {
      try { await testPool.close(); } catch (_) { /* ignore */ }
    }
    return {
      success: false,
      latencyMs: Date.now() - startTime,
      error: err.message || 'Connection failed',
      server: config.server,
      port: config.port,
    };
  }
}

/**
 * Execute a query with graceful fallback
 */
export async function executeQuery(sqlText, params = {}) {
  if (!pool || connectionState !== 'CONNECTED') {
    return null;
  }
  try {
    const request = pool.request();
    for (const [key, val] of Object.entries(params)) {
      request.input(key, val);
    }
    const result = await request.query(sqlText);
    return result.recordset;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[SQL Server Query Error]', err.message);
    throw err;
  }
}

/**
 * Get current database status summary
 */
export function getDatabaseStatus() {
  const cfg = getDbConfig();
  return {
    engine: 'Microsoft SQL Server',
    state: connectionState,
    server: cfg.server,
    port: cfg.port,
    database: cfg.database,
    user: cfg.user,
    encrypted: cfg.options.encrypt,
    trustedCertificate: cfg.options.trustServerCertificate,
    lastConnectedAt,
    lastError,
  };
}

export default {
  initDatabase,
  testConnection,
  executeQuery,
  getDatabaseStatus,
  getDbConfig,
};

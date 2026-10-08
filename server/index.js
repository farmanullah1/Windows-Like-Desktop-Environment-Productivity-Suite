import express from 'express';
import cors from 'cors';
import { randomUUID } from 'crypto';

const app = express();
const PORT = process.env.API_PORT || 5000;

app.use(cors());
app.use(express.json());

// Request tracing middleware
app.use((req, res, next) => {
  const requestId = req.headers['x-request-id'] || randomUUID();
  res.setHeader('X-Request-Id', requestId);
  req.requestId = requestId;
  next();
});

// Helper response envelope
const successEnvelope = (res, data, status = 200) => {
  return res.status(status).json({
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      requestId: res.getHeader('X-Request-Id'),
    },
  });
};

const errorEnvelope = (res, code, message, status = 400, details = {}) => {
  return res.status(status).json({
    success: false,
    error: {
      code,
      message,
      details,
      requestId: res.getHeader('X-Request-Id'),
    },
  });
};

// 1. Health check
app.get('/api/v1/health', (req, res) => {
  successEnvelope(res, {
    status: 'healthy',
    version: '5.0.0',
    platform: 'Windows Desktop Suite Backend',
    uptimeSeconds: process.uptime(),
  });
});

// 2. Auth Endpoints
app.post('/api/v1/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return errorEnvelope(res, 'VALIDATION_ERROR', 'Username and password are required.');
  }
  // Safe authentication token response
  successEnvelope(res, {
    token: `adw_jwt_${randomUUID()}`,
    user: {
      id: 'usr-admin-01',
      username,
      role: 'Administrator',
      permissions: ['system.read', 'filesystem.read', 'workspace.manage'],
    },
  });
});

app.get('/api/v1/auth/me', (req, res) => {
  successEnvelope(res, {
    id: 'usr-admin-01',
    username: 'administrator',
    role: 'Administrator',
    permissions: ['system.read', 'filesystem.read', 'workspace.manage'],
  });
});

// 3. Workspaces Endpoints
app.get('/api/v1/workspaces', (req, res) => {
  successEnvelope(res, [
    { id: 'ws-1', name: 'Main', sortOrder: 0, isProtected: true },
    { id: 'ws-2', name: 'Development', sortOrder: 1 },
    { id: 'ws-3', name: 'Productivity', sortOrder: 2 },
    { id: 'ws-4', name: 'System', sortOrder: 3 },
  ]);
});

// 4. Notes Endpoints
app.get('/api/v1/notes', (req, res) => {
  successEnvelope(res, [
    {
      id: 'note-1',
      title: 'Architecture Overview',
      content: 'Hybrid Windows 11 + macOS + Ubuntu Desktop platform.',
      isPinned: true,
      updatedAt: new Date().toISOString(),
    },
  ]);
});

// 5. Native System Metrics Endpoint
app.get('/api/v1/system/info', (req, res) => {
  successEnvelope(res, {
    os: 'Windows 11 Enterprise (x64)',
    cpuUsage: 14,
    memoryTotalMb: 16384,
    memoryUsedMb: 3420,
    activeProcesses: 42,
    classification: 'WINDOWS-INTEGRATED WMI',
  });
});

// 6. Offline Synchronization Endpoint
app.post('/api/v1/sync/push', (req, res) => {
  const { queue } = req.body;
  successEnvelope(res, {
    acknowledgedCount: Array.isArray(queue) ? queue.length : 0,
    status: 'Synced',
  });
});

// 404 Handler
app.use((req, res) => {
  errorEnvelope(res, 'NOT_FOUND', `Route ${req.method} ${req.path} not found.`, 404);
});

// Start listening if run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`[ADW5 Backend] Listening on port ${PORT}`);
  });
}

export default app;

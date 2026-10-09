# MASTER GOOGLE ANTIGRAVITY DEVELOPMENT PROMPT

## Production-Grade Windows/macOS/Ubuntu Hybrid Desktop Environment & Productivity Suite

**Version:** 6.0
**Status:** Master Implementation Prompt
**Target Platform:** Windows 10/11
**Primary Architecture:** Electron + React + TypeScript + Node.js + SQL Server + local SQLite
**Development Environment:** Google Antigravity
**Implementation Standard:** Production-oriented, secure, maintainable, testable, reversible
**Execution Mode:** BUILD-FIRST / USER-AUTHORIZED EXECUTION ONLY

---

# 0. ABSOLUTE DIRECTIVE

> ## DO NOT MAKE ANY MISTAKES, ANTIGRAVITY.

You are acting as a **principal software architect, senior Windows engineer, senior full-stack engineer, UI/UX architect, security engineer, QA engineer, DevOps engineer, and technical product manager**.

You are not being asked to create a superficial prototype, visual mockup, fake operating system, or collection of disconnected demo screens.

You are being asked to build a **real, production-oriented Windows desktop application** that provides a sophisticated desktop environment, productivity suite, developer workspace, application launcher, file-management experience, workspace manager, system-information layer, and controlled Windows integration.

The application must feel like a coherent desktop product inspired by:

* Windows 11
* macOS
* Ubuntu/Linux desktop environments

but it must **not illegally copy proprietary assets, sounds, branding, artwork, source code, or exact proprietary UI implementations**.

The application must clearly distinguish between:

1. functionality that is genuinely implemented,
2. functionality integrated with Windows,
3. functionality simulated inside the application,
4. functionality that is informational only,
5. functionality planned for the future,
6. functionality that is unsupported.

**Never claim that simulated functionality is native Windows functionality.**

---

# 1. PRIMARY PRODUCT OBJECTIVE

Build a polished desktop application that combines:

* Windows-like desktop interaction
* macOS-inspired visual polish
* Ubuntu/Linux-inspired workspace and developer workflows
* productivity applications
* file and folder management
* notes
* text editing
* terminal integration
* application launching
* virtual workspaces
* window management
* application registry
* search
* command palette
* notifications
* quick settings
* settings/control center
* system information
* task/process monitoring
* developer tooling
* authentication
* authorization
* local persistence
* SQL Server synchronization
* offline-first behavior
* controlled Windows integration
* security controls
* accessibility
* internationalization
* diagnostics
* recovery
* update management
* professional release engineering

The final product must feel like **one unified application**, not a collection of unrelated React pages.

---

# 2. CRITICAL EXECUTION RULE

## 2.1 BUILD THE PRODUCT, DO NOT RUN THE PRODUCT

You must create and modify the project as required.

However:

> **DO NOT RUN, LAUNCH, INSTALL, EXECUTE, ELEVATE, MIGRATE, OR MODIFY THE SYSTEM WITHOUT EXPLICIT USER AUTHORIZATION.**

This includes:

* launching the desktop application;
* starting Electron;
* starting a development server;
* opening the application window;
* installing npm packages;
* installing Python packages;
* installing system packages;
* installing drivers;
* running database migrations;
* creating or modifying a SQL Server database;
* modifying Windows Registry;
* modifying Windows services;
* changing firewall rules;
* changing Windows settings;
* creating scheduled tasks;
* creating startup entries;
* creating Windows services;
* changing network configuration;
* changing power configuration;
* changing security configuration;
* deleting user files;
* modifying protected Windows directories;
* executing arbitrary PowerShell;
* executing arbitrary Bash;
* executing arbitrary Python;
* executing arbitrary executables.

### Safe operations allowed without additional approval

Antigravity may perform **non-system-modifying repository work**, such as:

* reading files;
* inspecting source code;
* creating source files;
* editing source files;
* creating documentation;
* creating schemas;
* creating migrations as files;
* creating test files;
* static code analysis;
* linting;
* formatting;
* TypeScript type-checking;
* static dependency inspection;
* static security analysis;
* repository diff inspection;
* Git status;
* Git diff;
* Git branch creation where it does not affect remote/shared history;
* Git commits;
* safe unit tests that do not launch the application, install dependencies, modify the system, modify a real database, or start services.

If an operation is uncertain:

> **Treat it as requiring explicit authorization.**

---

# 3. TEST EXECUTION AUTHORIZATION GATE

Testing must not contradict the build-only rule.

## 3.1 Test Classification

| Test/Operation                          | Default Permission |
| --------------------------------------- | ------------------ |
| Static analysis                         | Allowed            |
| ESLint                                  | Allowed            |
| Prettier/check formatting               | Allowed            |
| TypeScript typecheck                    | Allowed            |
| Schema validation                       | Allowed            |
| JSON validation                         | Allowed            |
| Unit tests with isolated in-memory data | Allowed            |
| Pure utility tests                      | Allowed            |
| Pure reducer/state tests                | Allowed            |
| Static security analysis                | Allowed            |
| App launch                              | Requires approval  |
| Electron startup                        | Requires approval  |
| React dev server                        | Requires approval  |
| Backend server                          | Requires approval  |
| E2E tests requiring app launch          | Requires approval  |
| Playwright against running app          | Requires approval  |
| Database connection                     | Requires approval  |
| SQL migration execution                 | Requires approval  |
| Dependency installation                 | Requires approval  |
| Native bridge execution                 | Requires approval  |
| PowerShell execution                    | Requires approval  |
| Python execution affecting system       | Requires approval  |
| Windows API write operation             | Requires approval  |
| Registry modification                   | Requires approval  |
| Service modification                    | Requires approval  |
| Installer execution                     | Requires approval  |
| Auto-update testing                     | Requires approval  |

## 3.2 Authorization Message

Before a restricted operation, report:

```text
EXECUTION AUTHORIZATION REQUIRED

Operation:
[exact operation]

Reason:
[why it is needed]

Potential effects:
[what it may change]

Risk:
[LOW / MEDIUM / HIGH / CRITICAL]

Rollback:
[rollback method]

Required authorization:
Explicit user approval.
```

Do not proceed until approval is received.

---

# 4. PRODUCT CAPABILITY TRUTH MODEL

Every feature must be assigned one of these classifications.

| Classification        | Meaning                                                         |
| --------------------- | --------------------------------------------------------------- |
| REAL                  | Fully implemented application functionality                     |
| WINDOWS-INTEGRATED    | Uses genuine Windows APIs/native integration                    |
| APPLICATION-SIMULATED | Simulated inside the application                                |
| INFORMATIONAL         | Displays information but does not control the underlying system |
| FUTURE                | Designed but intentionally not implemented yet                  |
| UNSUPPORTED           | Not safely or technically supported                             |

Every major feature must document its classification in:

```text
docs/CAPABILITY_MATRIX.md
```

Example:

| Feature         | Classification             | Implementation            | Limitations                                               |
| --------------- | -------------------------- | ------------------------- | --------------------------------------------------------- |
| File Explorer   | REAL + WINDOWS-INTEGRATED  | Native filesystem bridge  | Protected paths restricted                                |
| Task Manager    | WINDOWS-INTEGRATED         | Windows process APIs      | Read-only by default                                      |
| Registry Editor | INFORMATIONAL / CONTROLLED | Read-only registry access | Writes disabled by default                                |
| System Restore  | INFORMATIONAL              | Displays availability     | Does not claim to perform restore                         |
| Virtual Desktop | APPLICATION-SIMULATED      | Internal workspace engine | Not Windows virtual desktops unless explicitly integrated |
| Terminal        | WINDOWS-INTEGRATED         | Controlled process bridge | Allowlisted shells                                        |

---

# 5. DECISION AUTHORITY MATRIX

Antigravity must make sensible low-risk decisions without repeatedly asking the user.

## 5.1 Autonomous Decisions

Antigravity may decide autonomously when the decision is:

* reversible;
* local to the application;
* consistent with this specification;
* not security-sensitive;
* not destructive;
* not a licensing decision;
* not a system-modifying operation.

Examples:

* component naming;
* folder organization;
* internal TypeScript interfaces;
* CSS architecture;
* React component decomposition;
* Zustand store structure;
* utility function naming;
* test organization;
* icon placement;
* animation duration within defined limits;
* UI spacing;
* non-destructive default settings.

## 5.2 User Approval Required

Explicit approval is required for:

* changing core technology choices;
* changing the database architecture;
* changing authentication architecture;
* introducing a new privileged native capability;
* system modification;
* Windows Registry writes;
* service creation;
* firewall modification;
* scheduled task creation;
* startup persistence;
* installer execution;
* package installation;
* dependency upgrades with material security/compatibility impact;
* destructive file operations;
* destructive database operations;
* deletion of user data;
* telemetry activation;
* external data transmission;
* production deployment;
* signing credentials;
* publishing releases;
* remote Git operations affecting shared history.

---

# 6. TECHNOLOGY DECISION MATRIX

## 6.1 Mandatory Default Technology Decisions

| Decision          | Default                                                       | Rationale                                                                                                         | Alternatives           | Reversibility |
| ----------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------- |
| Desktop shell     | **Electron**                                                  | Mature Windows integration, Node.js ecosystem, strong desktop tooling, straightforward native bridge architecture | Tauri                  | Medium        |
| Frontend          | **React + TypeScript**                                        | Mature component architecture and strong desktop UI ecosystem                                                     | Vue, Svelte            | High          |
| State management  | **Zustand**                                                   | Lightweight, explicit, easy to test, avoids excessive framework complexity                                        | Redux Toolkit          | High          |
| Backend           | **NestJS**                                                    | Strong module boundaries, DI, validation, testing, enterprise structure                                           | Fastify, Express       | Medium        |
| HTTP server       | **Fastify adapter for NestJS**                                | Performance and schema-friendly API layer                                                                         | Express adapter        | Medium        |
| Local persistence | **SQLite**                                                    | Offline-first local database, transactional, portable                                                             | IndexedDB, JSON files  | Medium        |
| SQLite access     | **better-sqlite3** or equivalent vetted driver                | Synchronous local transactions simplify desktop state handling                                                    | Drizzle ORM            | Medium        |
| SQL Server        | **Remote or local SQL Server supported**                      | Supports developer/local deployments and centralized environments                                                 | SQL Server only remote | High          |
| ORM/query layer   | **Prisma or Drizzle, selected during Phase 1**                | Strong schema discipline and migrations                                                                           | TypeORM                | Medium        |
| IPC               | **Electron `contextBridge` + typed IPC**                      | Explicit secure renderer/main boundary                                                                            | MessagePort            | High          |
| Native bridge     | **Dedicated Node/native bridge with tightly controlled APIs** | Keeps privileged operations isolated                                                                              | C# bridge executable   | Medium        |
| Windows APIs      | Native Node/C++/C# bridge where necessary                     | Avoid unsafe shell emulation                                                                                      | PowerShell             | Medium        |
| Python            | Specialized offline tooling only                              | Prevents Python from becoming an unnecessary runtime dependency                                                   | Node.js                | High          |
| Bash              | Developer workflow only                                       | Git Bash/WSL integration where explicitly supported                                                               | PowerShell             | High          |
| Testing           | Vitest + Playwright                                           | Fast unit testing and strong E2E ecosystem                                                                        | Jest/Cypress           | High          |
| Accessibility     | axe-core + manual keyboard testing                            | Automated + human verification                                                                                    | Pa11y                  | High          |
| Visual regression | Playwright screenshots                                        | Integrated with E2E workflow                                                                                      | Chromatic              | High          |
| Packaging         | NSIS-based signed EXE installer initially                     | Flexible Windows distribution                                                                                     | MSI/MSIX               | Medium        |
| Version control   | Git                                                           | Required by user                                                                                                  | None                   | N/A           |

### DEFAULT DECISION

Use **Electron**.

**Rationale:** This product requires extensive Windows integration, controlled native process access, filesystem integration, display information, audio/device information, system information, and developer tooling. Electron provides a mature and well-understood architecture for this use case.

Do not switch to Tauri unless an actual engineering evaluation demonstrates a significant advantage.

---

# 7. ARCHITECTURE

Use a layered architecture:

```text
┌──────────────────────────────────────────┐
│ React Renderer                           │
│ UI / UX / Windows / Applications         │
└───────────────────┬──────────────────────┘
                    │ Typed IPC
┌───────────────────▼──────────────────────┐
│ Electron Main Process                    │
│ Window lifecycle / security / IPC        │
└───────────────────┬──────────────────────┘
                    │
        ┌───────────┼──────────────┐
        ▼           ▼              ▼
 Native Bridge   Local DB       Services
 Windows APIs    SQLite         Application Logic
        │           │              │
        └───────────┼──────────────┘
                    ▼
              NestJS Backend
                    │
                    ▼
               SQL Server
```

The renderer must never receive unrestricted Node.js or filesystem access.

---

# 8. SECURITY ARCHITECTURE

## 8.1 Electron Security

Mandatory:

```text
nodeIntegration: false
contextIsolation: true
sandbox: true where compatible
webSecurity: true
```

Use a strict preload bridge.

Do not expose:

```text
require
process
fs
child_process
shell
os
net
http
crypto
```

directly to the renderer.

Expose only explicit typed functions.

---

# 9. DATA CONTRACTS & SCHEMAS

All cross-layer data must use explicit contracts.

Recommended structure:

```text
packages/
  contracts/
    auth/
    applications/
    files/
    windows/
    workspaces/
    notifications/
    settings/
    sync/
    system/
    plugins/
    commands/
    errors/
```

Use runtime validation with Zod or an equivalent validated schema system.

---

# 10. CORE SQL SERVER SCHEMA

Use UUID/GUID identifiers unless a compelling performance reason requires another strategy.

## 10.1 Users

```sql
CREATE TABLE Users (
    UserId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Users PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    Email NVARCHAR(320) NOT NULL,
    NormalizedEmail NVARCHAR(320) NOT NULL,
    PasswordHash NVARCHAR(500) NULL,

    DisplayName NVARCHAR(200) NOT NULL,

    EmailVerified BIT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    LastLoginAt DATETIME2(3) NULL,

    CONSTRAINT UQ_Users_NormalizedEmail
        UNIQUE (NormalizedEmail)
);
```

## 10.2 Roles

```sql
CREATE TABLE Roles (
    RoleId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Roles PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500) NULL,

    CONSTRAINT UQ_Roles_Name UNIQUE(Name)
);
```

## 10.3 UserRoles

```sql
CREATE TABLE UserRoles (
    UserId UNIQUEIDENTIFIER NOT NULL,
    RoleId UNIQUEIDENTIFIER NOT NULL,

    AssignedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT PK_UserRoles PRIMARY KEY(UserId, RoleId),

    CONSTRAINT FK_UserRoles_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId),

    CONSTRAINT FK_UserRoles_Role
        FOREIGN KEY(RoleId) REFERENCES Roles(RoleId)
);
```

## 10.4 Permissions

```sql
CREATE TABLE Permissions (
    PermissionId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Permissions PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    PermissionKey NVARCHAR(200) NOT NULL,
    Description NVARCHAR(500) NULL,

    CONSTRAINT UQ_Permissions_Key UNIQUE(PermissionKey)
);
```

## 10.5 RolePermissions

```sql
CREATE TABLE RolePermissions (
    RoleId UNIQUEIDENTIFIER NOT NULL,
    PermissionId UNIQUEIDENTIFIER NOT NULL,

    CONSTRAINT PK_RolePermissions
        PRIMARY KEY(RoleId, PermissionId),

    CONSTRAINT FK_RolePermissions_Role
        FOREIGN KEY(RoleId) REFERENCES Roles(RoleId),

    CONSTRAINT FK_RolePermissions_Permission
        FOREIGN KEY(PermissionId) REFERENCES Permissions(PermissionId)
);
```

## 10.6 Sessions

```sql
CREATE TABLE Sessions (
    SessionId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Sessions PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,

    RefreshTokenHash NVARCHAR(500) NOT NULL,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    ExpiresAt DATETIME2(3) NOT NULL,
    RevokedAt DATETIME2(3) NULL,

    DeviceName NVARCHAR(200) NULL,
    DeviceFingerprint NVARCHAR(500) NULL,

    CONSTRAINT FK_Sessions_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId)
);

CREATE INDEX IX_Sessions_UserId
ON Sessions(UserId);

CREATE INDEX IX_Sessions_ExpiresAt
ON Sessions(ExpiresAt);
```

## 10.7 Applications

```sql
CREATE TABLE Applications (
    ApplicationId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Applications PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    ApplicationKey NVARCHAR(150) NOT NULL,
    Name NVARCHAR(200) NOT NULL,
    Version NVARCHAR(50) NOT NULL,

    Description NVARCHAR(1000) NULL,

    Classification NVARCHAR(50) NOT NULL,

    IsEnabled BIT NOT NULL DEFAULT 1,
    IsSystemApplication BIT NOT NULL DEFAULT 0,

    ManifestJson NVARCHAR(MAX) NULL,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT UQ_Applications_Key
        UNIQUE(ApplicationKey)
);
```

## 10.8 UserFiles

```sql
CREATE TABLE UserFiles (
    FileId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_UserFiles PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,

    ParentFileId UNIQUEIDENTIFIER NULL,

    Name NVARCHAR(500) NOT NULL,
    Path NVARCHAR(2000) NOT NULL,

    IsDirectory BIT NOT NULL DEFAULT 0,

    SizeBytes BIGINT NULL,

    ContentHash NVARCHAR(128) NULL,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    DeletedAt DATETIME2(3) NULL,

    CONSTRAINT FK_UserFiles_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId),

    CONSTRAINT FK_UserFiles_Parent
        FOREIGN KEY(ParentFileId) REFERENCES UserFiles(FileId)
);

CREATE INDEX IX_UserFiles_UserId
ON UserFiles(UserId);

CREATE INDEX IX_UserFiles_ParentFileId
ON UserFiles(ParentFileId);

CREATE INDEX IX_UserFiles_Path
ON UserFiles(Path);
```

## 10.9 Notes

```sql
CREATE TABLE Notes (
    NoteId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Notes PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,

    Title NVARCHAR(500) NOT NULL,
    Content NVARCHAR(MAX) NOT NULL,

    IsPinned BIT NOT NULL DEFAULT 0,
    IsArchived BIT NOT NULL DEFAULT 0,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT FK_Notes_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId)
);

CREATE INDEX IX_Notes_UserId
ON Notes(UserId);

CREATE INDEX IX_Notes_UpdatedAt
ON Notes(UpdatedAt);
```

## 10.10 Workspaces

```sql
CREATE TABLE Workspaces (
    WorkspaceId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Workspaces PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,

    Name NVARCHAR(200) NOT NULL,
    SortOrder INT NOT NULL DEFAULT 0,

    ConfigurationJson NVARCHAR(MAX) NULL,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT FK_Workspaces_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId)
);
```

## 10.11 WindowStates

```sql
CREATE TABLE WindowStates (
    WindowStateId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_WindowStates PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,
    WorkspaceId UNIQUEIDENTIFIER NULL,

    ApplicationKey NVARCHAR(150) NOT NULL,

    X INT NULL,
    Y INT NULL,
    Width INT NULL,
    Height INT NULL,

    IsMaximized BIT NOT NULL DEFAULT 0,
    IsMinimized BIT NOT NULL DEFAULT 0,

    ZIndex INT NOT NULL DEFAULT 0,

    StateJson NVARCHAR(MAX) NULL,

    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT FK_WindowStates_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId),

    CONSTRAINT FK_WindowStates_Workspace
        FOREIGN KEY(WorkspaceId) REFERENCES Workspaces(WorkspaceId)
);
```

## 10.12 Notifications

```sql
CREATE TABLE Notifications (
    NotificationId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Notifications PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,

    Title NVARCHAR(300) NOT NULL,
    Message NVARCHAR(2000) NOT NULL,

    Severity NVARCHAR(30) NOT NULL,
    Category NVARCHAR(100) NULL,

    IsRead BIT NOT NULL DEFAULT 0,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    ReadAt DATETIME2(3) NULL,

    MetadataJson NVARCHAR(MAX) NULL,

    CONSTRAINT FK_Notifications_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId)
);

CREATE INDEX IX_Notifications_User_Read
ON Notifications(UserId, IsRead);
```

## 10.13 AuditLogs

```sql
CREATE TABLE AuditLogs (
    AuditLogId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_AuditLogs PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NULL,

    Action NVARCHAR(200) NOT NULL,
    ResourceType NVARCHAR(100) NULL,
    ResourceId NVARCHAR(200) NULL,

    Severity NVARCHAR(30) NOT NULL,

    IpAddress NVARCHAR(64) NULL,
    UserAgent NVARCHAR(1000) NULL,

    MetadataJson NVARCHAR(MAX) NULL,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT FK_AuditLogs_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId)
);

CREATE INDEX IX_AuditLogs_UserId
ON AuditLogs(UserId);

CREATE INDEX IX_AuditLogs_CreatedAt
ON AuditLogs(CreatedAt);

CREATE INDEX IX_AuditLogs_Action
ON AuditLogs(Action);
```

## 10.14 SyncQueue

```sql
CREATE TABLE SyncQueue (
    SyncOperationId UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_SyncQueue PRIMARY KEY
        DEFAULT NEWSEQUENTIALID(),

    UserId UNIQUEIDENTIFIER NOT NULL,

    EntityType NVARCHAR(100) NOT NULL,
    EntityId NVARCHAR(200) NOT NULL,

    Operation NVARCHAR(30) NOT NULL,

    PayloadJson NVARCHAR(MAX) NOT NULL,

    AttemptCount INT NOT NULL DEFAULT 0,

    Status NVARCHAR(30) NOT NULL DEFAULT 'PENDING',

    LastError NVARCHAR(2000) NULL,

    CreatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2(3) NOT NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT FK_SyncQueue_User
        FOREIGN KEY(UserId) REFERENCES Users(UserId)
);
```

### Additional Required Tables

Implement equivalent normalized structures for:

* MFA methods
* password reset tokens
* email verification tokens
* OAuth/OIDC identities
* device registrations
* plugin registrations
* application permissions
* command definitions
* user settings
* themes
* sound preferences
* accessibility preferences
* keyboard shortcuts
* file operation history
* recovery snapshots
* update metadata
* release channels
* feature flags

Do not create unnecessary tables simply for theoretical completeness.

---

# 11. DATABASE RULES

Mandatory:

* UTC timestamps;
* parameterized SQL;
* transactions for multi-step mutations;
* foreign keys;
* indexes based on actual query patterns;
* unique constraints where appropriate;
* soft deletion where recovery is required;
* optimistic concurrency where synchronization requires it;
* migration files committed to Git;
* no production database mutation without authorization;
* no destructive migration without explicit approval.

---

# 12. API CONTRACT

Base path:

```text
/api/v1
```

## Authentication

```text
POST   /auth/signup
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh
POST   /auth/verify-email
POST   /auth/forgot-password
POST   /auth/reset-password
POST   /auth/mfa/challenge
POST   /auth/mfa/verify
GET    /auth/me
GET    /auth/sessions
DELETE /auth/sessions/:id
```

## Applications

```text
GET    /applications
GET    /applications/:id
POST   /applications
PATCH  /applications/:id
DELETE /applications/:id
```

## Workspaces

```text
GET    /workspaces
POST   /workspaces
GET    /workspaces/:id
PATCH  /workspaces/:id
DELETE /workspaces/:id
```

## Notes

```text
GET    /notes
POST   /notes
GET    /notes/:id
PATCH  /notes/:id
DELETE /notes/:id
```

## Files

```text
GET    /files
POST   /files/folder
POST   /files/move
POST   /files/copy
DELETE /files/:id
POST   /files/restore
```

## Notifications

```text
GET    /notifications
POST   /notifications/:id/read
POST   /notifications/read-all
DELETE /notifications/:id
```

## Sync

```text
GET    /sync/status
POST   /sync/push
POST   /sync/pull
POST   /sync/resolve-conflict
```

## System

```text
GET    /system/info
GET    /system/health
GET    /system/capabilities
```

---

# 13. STANDARD API RESPONSE CONTRACT

Success:

```json
{
  "success": true,
  "data": {},
  "meta": {
    "requestId": "uuid",
    "timestamp": "2026-01-01T00:00:00.000Z"
  }
}
```

Error:

```json
{
  "success": false,
  "error": {
    "code": "AUTH_INVALID_CREDENTIALS",
    "message": "The supplied credentials are invalid.",
    "details": {},
    "retryable": false
  },
  "meta": {
    "requestId": "uuid",
    "timestamp": "2026-01-01T00:00:00.000Z"
  }
}
```

Never return stack traces to users.

---

# 14. ERROR CODE CATALOG

Use stable machine-readable codes.

Examples:

```text
AUTH_INVALID_CREDENTIALS
AUTH_SESSION_EXPIRED
AUTH_SESSION_REVOKED
AUTH_EMAIL_NOT_VERIFIED
AUTH_MFA_REQUIRED
AUTH_MFA_INVALID
AUTH_RESET_TOKEN_INVALID

AUTH_FORBIDDEN
AUTH_PERMISSION_DENIED

FILE_NOT_FOUND
FILE_ALREADY_EXISTS
FILE_ACCESS_DENIED
FILE_OPERATION_BLOCKED
FILE_PATH_INVALID
FILE_PATH_PROTECTED

APP_NOT_FOUND
APP_DISABLED
APP_LAUNCH_BLOCKED

WINDOW_INVALID_STATE
WORKSPACE_NOT_FOUND

SYNC_CONFLICT
SYNC_OFFLINE
SYNC_FAILED
SYNC_VERSION_MISMATCH

DB_CONNECTION_FAILED
DB_TRANSACTION_FAILED
DB_CONSTRAINT_VIOLATION

NATIVE_UNSUPPORTED
NATIVE_PERMISSION_DENIED
NATIVE_OPERATION_FAILED

PLUGIN_INVALID
PLUGIN_PERMISSION_DENIED
PLUGIN_EXECUTION_BLOCKED

SYSTEM_OPERATION_BLOCKED
USER_AUTHORIZATION_REQUIRED

VALIDATION_FAILED
RATE_LIMITED
INTERNAL_ERROR
```

---

# 15. EVENT SYSTEM

All internal events must have:

```typescript
interface ApplicationEvent<T = unknown> {
  id: string;
  type: string;
  version: number;
  timestamp: string;
  source: string;
  correlationId?: string;
  payload: T;
}
```

Examples:

```text
window.created
window.closed
window.focused
window.minimized
window.maximized
window.restored
window.snapped

workspace.created
workspace.deleted
workspace.switched

application.registered
application.launched
application.closed

notification.created
notification.read

file.created
file.moved
file.copied
file.deleted
file.restored

sync.started
sync.completed
sync.failed
sync.conflict

auth.login
auth.logout
auth.session.revoked

native.capability.available
native.capability.unavailable
```

---

# 16. APPLICATION REGISTRY

Application manifest:

```json
{
  "id": "com.example.notes",
  "name": "Notes",
  "version": "1.0.0",
  "description": "Application notes manager",
  "icon": "notes",
  "entry": "internal:notes",
  "classification": "REAL",
  "permissions": [
    "storage.notes.read",
    "storage.notes.write"
  ],
  "window": {
    "defaultWidth": 900,
    "defaultHeight": 650,
    "minWidth": 500,
    "minHeight": 400,
    "resizable": true,
    "multipleInstances": false
  }
}
```

The registry must support:

* internal applications;
* external applications;
* developer applications;
* plugins;
* aliases;
* disabled applications;
* permissions;
* capabilities;
* window configuration;
* lifecycle;
* versioning.

---

# 17. COMMAND REGISTRY

```typescript
interface CommandDefinition {
  id: string;
  title: string;
  description?: string;
  category: string;
  keywords?: string[];
  shortcut?: string;
  requiredPermissions?: string[];
  enabled: boolean;
  execute: string;
}
```

Examples:

```text
app.launch
window.minimize
window.maximize
window.close
window.snap.left
window.snap.right
workspace.next
workspace.previous
workspace.create
search.open
command-palette.open
settings.open
notifications.open
terminal.open
file-explorer.open
```

Commands must be permission-aware and centrally registered.

---

# 18. PERMISSION/CAPABILITY SCHEMA

Permissions use:

```text
domain.resource.action
```

Examples:

```text
filesystem.user.read
filesystem.user.write
filesystem.protected.read
filesystem.protected.write

system.info.read
system.process.read
system.process.control

network.read
network.write

power.read
power.control

audio.read
audio.control

display.read
display.control

terminal.execute
plugin.install
plugin.execute

database.read
database.write
```

Sensitive permissions require explicit user approval.

---

# 19. PLUGIN SYSTEM

Plugins must use a manifest:

```json
{
  "id": "com.example.plugin",
  "name": "Example Plugin",
  "version": "1.0.0",
  "apiVersion": "1",
  "permissions": [
    "storage.user.read"
  ],
  "entry": "plugin/index.js"
}
```

Plugins must not receive unrestricted:

* filesystem access;
* process access;
* network access;
* shell access;
* registry access;
* native API access.

Use capability-based access.

Plugin execution must be:

* permission checked;
* logged;
* cancellable where possible;
* versioned;
* validated;
* isolated from the renderer.

---

# 20. IPC CONTRACT

Renderer → Preload → Main → Native/Services.

Every IPC message must contain:

```typescript
interface IPCRequest<T> {
  requestId: string;
  channel: string;
  version: number;
  payload: T;
}
```

Validation requirements:

* runtime schema validation;
* maximum payload size;
* allowed channel list;
* permission check;
* argument validation;
* timeout;
* cancellation where appropriate;
* structured errors;
* no arbitrary channel creation.

Never allow:

```text
ipcRenderer.send(userControlledChannel)
```

without strict channel validation.

---

# 21. WINDOWS INTEGRATION API MATRIX

| Capability          | Preferred Method                          |             Privilege | Access       | Fallback                |
| ------------------- | ----------------------------------------- | --------------------: | ------------ | ----------------------- |
| OS information      | Windows APIs / WMI/CIM                    |                  None | Read         | Node OS information     |
| CPU                 | Windows Performance Counters / native API |                  None | Read         | Node metrics            |
| Memory              | Windows APIs                              |                  None | Read         | Node metrics            |
| Processes           | Native Windows APIs                       |                  None | Read         | Process list            |
| Process termination | Windows process API                       |    Sometimes elevated | Write        | Disabled                |
| Displays            | Win32 / DisplayConfig APIs                |                  None | Read         | Electron display API    |
| Audio devices       | Windows Core Audio APIs                   |                  None | Read/control | Electron limitations    |
| Battery             | Windows battery APIs / WMI                |                  None | Read         | Browser/native fallback |
| Network adapters    | Win32/WMI/CIM                             |                  None | Read         | Node network info       |
| Power status        | Windows power APIs                        |                  None | Read         | Informational           |
| Power operations    | Windows API                               | User/system dependent | Write        | Disabled                |
| Launch applications | Controlled process API                    |                  User | Write        | Disabled                |
| Filesystem          | Node filesystem through main process      |                  User | Read/write   | Disabled                |
| Registry            | Win32 registry API                        |                  User | Read         | Disabled writes         |
| Services            | SCM API                                   |    Admin for mutation | Read         | Informational           |
| Windows updates     | Windows APIs where practical              |                Varies | Read         | Informational           |
| System restore      | Windows API where supported               |                 Admin | Read/request | Informational           |
| Firewall            | Windows Firewall API                      |                 Admin | Read         | Disabled                |
| Terminal            | Controlled process spawn                  |                  User | Execute      | Disabled                |

## Rule

Never use a shell command where a safer native API exists.

Never invoke PowerShell merely because it is convenient.

---

# 22. WINDOWS SUPPORT

Primary:

```text
Windows 11 x64
Windows 11 ARM64
Windows 10 x64 where technically supported
```

ARM64 must not be falsely advertised as fully supported unless all native components support ARM64.

Unsupported features must be detected at runtime.

Display:

```text
Supported
Partially supported
Unavailable
Requires permission
Requires elevated privileges
Unsupported on this Windows version
```

---

# 23. FILESYSTEM SAFETY

Protected paths include, at minimum:

```text
C:\Windows
C:\Program Files
C:\Program Files (x86)
C:\ProgramData
C:\Windows\System32
C:\Windows\WinSxS
C:\Windows\Installer
C:\Users\<user>\AppData\Local\Microsoft
C:\Users\<user>\AppData\Roaming\Microsoft
WSL distributions
Docker data
OneDrive/cloud-synchronization roots
Visual Studio workspace/build storage
Git repositories unless explicitly selected
```

The application must not silently delete or modify these.

---

# 24. DESKTOP EXPERIENCE

Implement a unified desktop shell containing:

* wallpaper;
* desktop icons;
* taskbar/dock;
* Start/application launcher;
* system tray;
* clock;
* notifications;
* quick settings;
* widgets;
* universal search;
* command palette;
* window manager;
* workspaces;
* multi-monitor support;
* drag/drop;
* keyboard navigation.

---

# 25. HYBRID DESIGN LANGUAGE

The visual system should be approximately:

```text
Windows 11: 40%
macOS:      30%
Ubuntu/Linux: 30%
```

This is an **inspiration ratio**, not a literal cloning requirement.

## Windows-inspired

* taskbar;
* Start experience;
* snapping;
* Fluent-style depth;
* quick settings;
* system panels.

## macOS-inspired

* elegant spacing;
* dock behavior;
* workspace overview;
* restrained glass effects;
* polished transitions;
* high-quality typography.

## Ubuntu/Linux-inspired

* workspace concepts;
* application launcher;
* developer workflows;
* terminal-first capabilities;
* productivity-oriented desktop organization.

Do not copy:

* Apple logos;
* Windows logos;
* Ubuntu logos;
* proprietary sounds;
* proprietary wallpapers;
* proprietary icons;
* exact proprietary UI artwork;
* copyrighted source code.

---

# 26. WINDOW MANAGER

Every application window must have:

```text
id
applicationId
workspaceId
title
position
size
minimumSize
maximumSize
state
zIndex
focused
alwaysOnTop
resizable
movable
closable
minimizable
maximizable
```

States:

```text
NORMAL
MINIMIZED
MAXIMIZED
FULLSCREEN
SNAPPED_LEFT
SNAPPED_RIGHT
SNAPPED_TOP
SNAPPED_BOTTOM
TILED
```

Implement:

* focus;
* z-index;
* minimize;
* restore;
* maximize;
* close;
* resize;
* move;
* snap;
* tile;
* fullscreen;
* multi-window;
* workspace reassignment.

---

# 27. VIRTUAL WORKSPACES

Provide application-level workspaces.

Default:

```text
Workspace 1 — General
Workspace 2 — Development
Workspace 3 — Communication
Workspace 4 — Research
```

Users can:

* rename;
* create;
* delete;
* reorder;
* duplicate;
* assign applications;
* assign windows;
* configure wallpaper;
* configure workspace shortcuts.

Do not claim these are native Windows virtual desktops unless genuine Windows integration is implemented.

---

# 28. TASKBAR / DOCK

Support:

* pinned apps;
* running apps;
* active state;
* badges;
* context menus;
* drag/drop;
* application launch;
* workspace indicator;
* system tray;
* clock;
* notification indicator.

Offer settings for:

* position;
* size;
* auto-hide;
* transparency;
* animation;
* icon size;
* grouping.

---

# 29. START / APPLICATION LAUNCHER

Support:

* application search;
* recent applications;
* pinned applications;
* categories;
* recommended items;
* power controls;
* settings;
* user profile;
* search integration.

Power actions must be clearly separated from application actions.

Any actual shutdown/restart/sleep operation requires user confirmation.

---

# 30. UNIVERSAL SEARCH

Search:

* applications;
* commands;
* files;
* folders;
* notes;
* settings;
* workspaces;
* system information.

Ranking should consider:

```text
exact match
prefix match
recent usage
frequency
category relevance
keyword relevance
```

Never index sensitive content without user consent.

---

# 31. COMMAND PALETTE

Provide a keyboard-first command palette similar in concept to developer productivity tools.

Default:

```text
Ctrl + Shift + P
```

Allow user customization.

Commands must display:

* title;
* description;
* shortcut;
* category;
* required permission;
* current availability.

---

# 32. FILE EXPLORER

Provide:

* drives;
* folders;
* files;
* breadcrumbs;
* search;
* sorting;
* filtering;
* grid/list view;
* details view;
* context menus;
* create folder;
* rename;
* copy;
* move;
* delete;
* restore;
* properties.

Operations must use confirmation where destructive.

Never silently overwrite files.

Use safe conflict options:

```text
Replace
Keep Both
Skip
Cancel
```

---

# 33. NOTES APPLICATION

Support:

* create;
* edit;
* delete;
* pin;
* archive;
* search;
* tags;
* autosave;
* timestamps;
* offline editing;
* synchronization;
* conflict resolution.

Autosave must be resilient against application crashes.

---

# 34. TEXT EDITOR

Support:

* plain text;
* syntax highlighting;
* tabs;
* find/replace;
* line numbers;
* encoding detection;
* unsaved-change indicator;
* recovery;
* large-file safeguards.

Never load an extremely large file into memory without checking its size.

---

# 35. TERMINAL CENTER

Support controlled access to:

* PowerShell;
* Command Prompt;
* Git Bash;
* WSL where available.

Each shell must be explicitly detected.

Do not assume:

```text
bash = WSL
bash = Git Bash
```

They are separate environments.

Terminal execution must be clearly marked as an external process.

---

# 36. SYSTEM INFORMATION

Display:

* Windows version;
* architecture;
* CPU;
* RAM;
* storage;
* GPU;
* displays;
* network;
* battery;
* audio devices;
* processes;
* uptime;
* application version.

Read-only by default.

---

# 37. TASK MANAGER

Provide a process monitoring interface.

Display:

* process name;
* PID;
* CPU;
* memory;
* path where available;
* status;
* application classification.

Process termination:

* disabled by default;
* confirmation required;
* protected processes blocked;
* administrative requirements clearly shown.

---

# 38. SETTINGS / CONTROL CENTER

Sections:

```text
Appearance
Themes
Wallpaper
Animations
Sounds
Accessibility
Keyboard
Mouse
Touch
Workspaces
Taskbar
Applications
Notifications
Privacy
Security
Accounts
Authentication
Sync
Storage
Network
Audio
Displays
Performance
Developer
Terminal
Updates
Backup
Recovery
About
```

---

# 39. ADVANCED ANIMATION SYSTEM

The user specifically wants **very high-quality and advanced animation**, not careless maximum animation.

Implement:

* window open;
* window close;
* minimize;
* maximize;
* restore;
* snap;
* workspace transition;
* Start menu;
* launcher;
* notifications;
* dock hover;
* icon interaction;
* context menus;
* quick settings;
* command palette;
* page transitions;
* modal transitions;
* drag interactions;
* loading transitions;
* success/error feedback.

Animation levels:

```text
MINIMAL
BALANCED
ENHANCED
IMMERSIVE
```

### DEFAULT DECISION

Default to:

```text
BALANCED
```

Rationale: advanced visual quality without sacrificing usability, battery life, accessibility, or performance.

---

# 40. ANIMATION PERFORMANCE RULES

Never animate:

* layout-heavy properties unnecessarily;
* huge DOM trees;
* expensive blur regions continuously;
* large canvas effects continuously;
* high-frequency shadows;
* unnecessary full-screen filters.

Prefer:

```text
transform
opacity
GPU-compositor-friendly properties
```

Avoid unnecessary:

```text
top
left
width
height
```

animation.

---

# 41. COLOR EFFECT SYSTEM

Support:

* accent colors;
* dynamic accent;
* semantic colors;
* gradients;
* subtle glass;
* glow;
* depth;
* hover illumination;
* active-state emphasis;
* wallpaper-aware accents.

Effects must never reduce text readability.

Semantic colors:

```text
accent
background
surface
surface-elevated
text-primary
text-secondary
border
success
warning
danger
info
focus
disabled
```

---

# 42. SOUND EFFECT SYSTEM

Provide original or properly licensed sound assets.

Categories:

```text
UI
SYSTEM
NOTIFICATION
SUCCESS
WARNING
ERROR
WORKSPACE
APPLICATION
ACCESSIBILITY
```

Examples:

* application open;
* application close;
* notification;
* success;
* warning;
* error;
* workspace switch;
* file operation;
* login success;
* authentication failure.

Every sound must have visual feedback.

Users can control:

```text
Master volume
UI volume
Notification volume
System volume
Application volume
Workspace sounds
Accessibility sounds
Mute all
```

Respect Windows mute/volume state.

Do not use copyrighted operating-system sounds without appropriate licensing.

---

# 43. WALLPAPER SYSTEM

Support:

* static wallpapers;
* user-provided wallpapers;
* gradients;
* abstract generated artwork;
* animated backgrounds only when performance permits;
* per-workspace wallpaper.

Never ship copyrighted wallpapers without appropriate licensing.

---

# 44. THEMES

Required:

```text
System
Light
Dark
High Contrast
```

Optional:

```text
Midnight
Graphite
Aurora
Ocean
Forest
Solar
Ubuntu-inspired
Developer
Minimal
```

Themes must be token-based.

Do not hardcode colors throughout components.

---

# 45. ACCESSIBILITY

Target:

> **WCAG 2.2 AA**

Minimum requirements:

* keyboard-only operation;
* visible focus;
* semantic controls;
* screen-reader labels;
* accessible dialogs;
* accessible menus;
* accessible notifications;
* accessible forms;
* reduced motion;
* high contrast;
* scalable text;
* minimum touch/click target guidance.

Contrast:

* normal text: at least 4.5:1;
* large text: at least 3:1;
* important UI indicators: target 3:1 where WCAG requires it.

Screen-reader targets:

* Windows Narrator;
* NVDA;
* JAWS where practical.

Focus rules:

1. focus moves logically;
2. dialogs trap focus appropriately;
3. closing a dialog restores focus;
4. menus close predictably;
5. focus is never invisible;
6. keyboard navigation must not depend on mouse hover.

---

# 46. KEYBOARD SHORTCUTS

Provide a centralized shortcut registry.

Examples:

```text
Alt + Tab                 Window switching
Win/Ctrl + Space          Launcher
Ctrl + Shift + P          Command palette
Ctrl + Alt + Right        Next workspace
Ctrl + Alt + Left         Previous workspace
Ctrl + Shift + N          New folder where supported
Ctrl + S                  Save
Ctrl + F                  Find
Esc                       Close transient UI
```

Do not override critical Windows shortcuts unless explicitly supported and clearly documented.

Shortcut conflicts must be resolved by:

```text
Windows-reserved
Application-global
Application-local
User-customizable
```

---

# 47. INTERNATIONALIZATION

Required architecture:

```text
i18n/
  en-US
  ur-PK
```

### DEFAULT DECISION

Initial languages:

* English (US)
* Urdu (Pakistan)

Rationale: English provides the primary development baseline while Urdu provides useful local-language support.

Architecture must allow:

* Arabic;
* Hindi;
* French;
* German;
* Spanish;
* additional languages later.

Support:

* RTL;
* locale-aware dates;
* time zones;
* numbers;
* currencies;
* pluralization;
* localized error messages;
* font fallback.

Never concatenate translated strings incorrectly.

Use translation keys.

---

# 48. TIME AND DATE

Store timestamps as UTC.

Display according to user locale/time zone.

Support:

```text
12-hour
24-hour
automatic
```

System time zone changes must be detected safely.

---

# 49. AUTHENTICATION

Support:

### Local/server-backed authentication

Default:

> **DEFAULT DECISION:** Use server-backed authentication when a backend is configured, with secure local session persistence for offline use.

Authentication options:

* email/password;
* email verification;
* password reset;
* MFA;
* optional OAuth/OIDC;
* session management.

---

# 50. PASSWORD SECURITY

Never store plaintext passwords.

Use:

```text
Argon2id
```

with secure parameters selected according to current library recommendations.

Passwords must never appear in:

* logs;
* telemetry;
* exceptions;
* Git;
* `brain.md`;
* configuration files.

---

# 51. SESSION SECURITY

Use:

* short-lived access tokens;
* rotating refresh tokens;
* hashed refresh-token storage;
* revocation;
* expiration;
* device/session management.

Default:

```text
Access token: 15 minutes
Refresh token: 30 days
```

These are configurable server-side.

---

# 52. OFFLINE AUTHENTICATION

Offline authentication must not become an unrestricted security bypass.

Default behavior:

* previously authenticated trusted device;
* encrypted local session state;
* limited offline functionality;
* configurable offline grace period;
* reauthentication when security policy requires.

Sensitive operations require online authentication where appropriate.

---

# 53. RBAC

Default roles:

```text
User
PowerUser
Developer
Administrator
SuperAdministrator
```

Do not assume application Administrator equals Windows Administrator.

These are separate concepts.

Permission scopes:

```text
own
team
department
organization
system
```

Enforce permissions:

* UI;
* API;
* service layer;
* database where appropriate;
* native bridge.

Never rely only on frontend authorization.

---

# 54. MFA / OIDC

Architecture must support:

* TOTP MFA;
* recovery codes;
* optional security keys in future;
* OAuth/OIDC providers.

MFA secrets must be encrypted.

OIDC tokens must be validated correctly.

Never trust identity claims without issuer/audience/signature validation.

---

# 55. SECURITY THREAT MODEL

Threat categories:

```text
Malicious plugin
Compromised dependency
XSS
CSRF
CORS abuse
IPC injection
Command injection
Path traversal
Privilege escalation
Token theft
Credential theft
Database injection
File overwrite
Symlink attacks
DLL/EXE side-loading
Supply-chain attack
Malicious update
Log injection
Sensitive data leakage
Unauthorized telemetry
```

Each threat must have:

```text
Threat
Impact
Likelihood
Mitigation
Detection
Recovery
Residual Risk
```

Store the register in:

```text
docs/RISK_REGISTER.md
```

---

# 56. FILESYSTEM SECURITY

Reject:

```text
..
path traversal
UNC paths where unsafe
unexpected device paths
invalid control characters
```

Canonicalize paths before sensitive operations.

Use allowlists where appropriate.

Do not trust filenames supplied by users.

---

# 57. SUBPROCESS SECURITY

Every executable launch must use:

```text
explicit executable allowlist
explicit argument validation
no shell interpretation
shell: false
```

Never build:

```text
powershell -Command "<user input>"
```

Never concatenate user-controlled input into shell commands.

Do not download and execute remote scripts.

---

# 58. CSP / CORS / CSRF / XSS

Implement:

* strict Content Security Policy;
* no unsafe inline scripts where avoidable;
* strict CORS;
* CSRF protection where cookie authentication is used;
* output encoding;
* input validation;
* HTML sanitization;
* safe URL handling.

Never use:

```text
dangerouslySetInnerHTML
```

unless the content is sanitized by a trusted sanitizer.

---

# 59. ENCRYPTION

In transit:

```text
TLS 1.2+
```

Prefer:

```text
TLS 1.3
```

At rest:

* Windows DPAPI/Credential Manager for local secrets where appropriate;
* SQL Server encryption capabilities where deployed;
* encrypted sensitive local storage.

Do not invent custom cryptography.

---

# 60. TELEMETRY

### DEFAULT DECISION

Telemetry is:

> **OFF BY DEFAULT.**

If telemetry is implemented:

* explicit consent;
* privacy settings;
* minimal data;
* no passwords;
* no file contents;
* no personal document contents;
* no raw command lines;
* no secret values;
* transparent documentation;
* deletion/export support where applicable.

---

# 61. PRIVACY / GDPR / CCPA

Provide architecture for:

* data export;
* data deletion;
* account deletion;
* privacy preferences;
* telemetry consent;
* data retention.

The application must clearly identify:

```text
Local-only data
Synchronized data
Server data
Diagnostic data
Telemetry data
```

---

# 62. AUDIT LOGGING

Audit:

* login;
* logout;
* authentication failures;
* permission changes;
* file operations;
* plugin installation;
* plugin permission changes;
* privileged operations;
* security settings;
* account changes.

Never log secrets.

Default retention:

```text
90 days
```

### DEFAULT DECISION

90-day retention is the initial default because it provides useful diagnostics without indefinite accumulation.

Retention must be configurable.

---

# 63. PLUGIN SECURITY

Plugins must be treated as untrusted by default.

Permission request UI:

```text
Plugin:
[Name]

Requests:
[permissions]

Reason:
[description]

Allow
Deny
```

High-risk permissions:

```text
terminal.execute
filesystem.protected.write
network.write
process.control
registry.write
```

must never be granted silently.

---

# 64. ACCESSIBLE NOTIFICATIONS

Notification priorities:

```text
LOW
NORMAL
HIGH
CRITICAL
```

Rules:

* do not spam;
* group duplicates;
* respect quiet mode;
* respect accessibility preferences;
* provide visual and optional audio indication;
* do not use color alone.

---

# 65. USER PERSONAS

Primary personas:

### Persona A — Developer

Needs:

* terminal;
* Git;
* workspaces;
* application launcher;
* notes;
* project navigation;
* system monitoring.

### Persona B — Productivity User

Needs:

* files;
* notes;
* search;
* reminders/notifications;
* workspaces;
* customization.

### Persona C — Power User

Needs:

* system information;
* processes;
* devices;
* performance;
* shortcuts;
* advanced settings.

### Persona D — Administrator

Needs:

* diagnostics;
* audit;
* configuration;
* controlled system integration.

---

# 66. PRIMARY USER FLOWS

## Signup

```text
Launch
→ Signup
→ Validate fields
→ Create account
→ Verify email if configured
→ Create session
→ First-run onboarding
→ Desktop
```

## Login

```text
Launch
→ Login
→ Validate credentials
→ MFA if required
→ Create session
→ Restore workspace
→ Desktop
```

## First Run

```text
Welcome
→ Choose theme
→ Choose language
→ Choose animation level
→ Choose sound level
→ Accessibility setup
→ Workspace setup
→ Privacy settings
→ Finish
```

## File Operation

```text
Explorer
→ Select
→ Action
→ Permission check
→ Path validation
→ Confirmation if destructive
→ Execute
→ Update UI
→ Audit
→ Sync queue
```

## Sync

```text
Detect changes
→ Queue
→ Authenticate
→ Push
→ Pull
→ Detect conflict
→ Resolve
→ Confirm
→ Mark synchronized
```

## Recovery

```text
Detect failure
→ Preserve state
→ Attempt safe recovery
→ Restore previous session
→ Notify user
→ Offer diagnostic report
```

---

# 67. ONBOARDING

Onboarding must be skippable.

Do not overwhelm users.

Default first-run choices:

```text
Theme: System
Animations: Balanced
Sounds: UI + Notifications
Language: System
Workspace count: 4
Telemetry: Off
```

These are:

> **DEFAULT DECISION**

because they provide sensible behavior while minimizing aggressive changes.

---

# 68. EMPTY STATES

Every major screen requires:

* title;
* explanation;
* useful next action;
* optional help.

Example:

```text
No Notes Yet

Create your first note to start organizing ideas.

[Create Note]
```

---

# 69. LOADING STATES

Use:

* skeletons;
* progress indicators;
* optimistic UI only where safe;
* cancellation where possible.

Never show indefinite loading without explanation.

---

# 70. ERROR STATES

Errors must include:

```text
What happened
Why it happened when known
What the user can do
Retry
Cancel
Details
```

Technical details should be expandable.

---

# 71. RECOVERY

Support:

* unsaved document recovery;
* workspace recovery;
* application-state recovery;
* sync retry;
* crash-safe state persistence.

Never overwrite recovery data automatically without validation.

---

# 72. PERFORMANCE BUDGETS

These are engineering targets, not excuses to sacrifice correctness.

## Startup

Target:

```text
Cold startup: ≤ 3 seconds on recommended hardware
Warm startup: ≤ 1.5 seconds
```

## Idle memory

Target:

```text
≤ 500 MB
```

for the baseline shell on recommended hardware, excluding deliberately opened heavy applications.

## Idle CPU

Target:

```text
≤ 3% average CPU
```

during normal idle conditions.

## UI

Target:

```text
60 FPS
```

where the display supports it.

For 60 FPS:

```text
~16.67 ms/frame
```

Avoid sustained frame times above:

```text
33 ms
```

for normal UI interactions.

## Animation

Animations should feel smooth at:

```text
60 FPS minimum target
```

and adapt on lower-performance systems.

## Bundle

Avoid unnecessary dependencies.

Establish actual measured budgets during Phase 1 rather than pretending bundle size can be predicted before implementation.

---

# 73. PERFORMANCE MODES

Provide:

```text
Battery Saver
Performance
Balanced
Immersive
```

### DEFAULT DECISION

Balanced.

Performance mode may reduce:

* blur;
* shadows;
* background effects;
* animation complexity;
* sound effects;
* wallpaper animation.

---

# 74. MINIMUM HARDWARE

Initial target:

```text
CPU: modern x64 dual-core or better
RAM: 8 GB minimum
RAM: 16 GB recommended
Storage: SSD recommended
GPU: DirectX-capable integrated GPU
Display: 1280×720 minimum
```

For the best experience:

```text
16 GB RAM
modern 4+ core CPU
SSD
DirectX-capable GPU
1920×1080+
```

---

# 75. WEBVIEW2

Electron bundles its required Chromium runtime.

Do not independently depend on a user-installed WebView2 runtime unless a separate Windows component explicitly requires it.

If any feature requires WebView2:

* detect it;
* report requirement;
* provide safe installation guidance;
* never silently install it.

---

# 76. PACKAGING

Initial release:

> **DEFAULT DECISION:** Signed EXE installer using NSIS.

Support architecture for:

```text
Per-user installation
Per-machine installation
Portable mode
MSIX future support
```

Do not require administrator rights for per-user installation where possible.

---

# 77. CODE SIGNING

Production releases must use:

* trusted code-signing certificate;
* secure signing process;
* protected signing keys;
* timestamping.

Never commit:

```text
.pfx
.p12
private keys
passwords
tokens
```

to Git.

---

# 78. AUTO-UPDATE

Support architecture for:

```text
Stable
Beta
Canary
```

Update process:

```text
Check
→ Verify metadata
→ Verify signature
→ Download
→ Verify integrity
→ Stage
→ Install
→ Verify
→ Rollback if necessary
```

Never install unsigned or untrusted updates.

### DEFAULT DECISION

Auto-update is designed but must remain disabled until explicitly configured for a real release environment.

---

# 79. RELEASE CHANNELS

```text
CANARY
BETA
STABLE
```

Versioning:

```text
Semantic Versioning
MAJOR.MINOR.PATCH
```

Pre-release:

```text
1.2.0-beta.1
1.2.0-canary.1
```

---

# 80. UNINSTALLATION

Provide:

```text
Remove application only
Remove application + local data
Remove application + cached data
Preserve user documents
```

Never delete user documents silently.

Clearly explain what will be removed.

---

# 81. CI/CD

Pipeline stages:

```text
Checkout
→ Dependency integrity check
→ Lint
→ Typecheck
→ Unit tests
→ Security scan
→ Build
→ Package
→ Artifact verification
→ E2E
→ Accessibility
→ Visual regression
→ Sign
→ Release
```

Antigravity must not trigger production deployment without explicit approval.

---

# 82. SBOM

Generate:

```text
CycloneDX
```

or equivalent SBOM.

Track:

* package;
* version;
* license;
* source;
* vulnerability status.

---

# 83. THIRD-PARTY LICENSES

Maintain:

```text
docs/THIRD_PARTY_LICENSES.md
```

Track:

* dependency;
* version;
* license;
* attribution;
* usage;
* modifications.

Do not use dependencies with incompatible licenses without explicit review.

---

# 84. LEGAL & LICENSING

The project must contain placeholders/documentation for:

```text
LICENSE
TERMS_OF_SERVICE.md
PRIVACY_POLICY.md
THIRD_PARTY_LICENSES.md
ATTRIBUTIONS.md
```

### DEFAULT DECISION

Use an explicit proprietary/commercial-license placeholder until the owner selects the final license.

Do not assume the application is open source.

---

# 85. FONTS / ICONS / SOUNDS / WALLPAPERS

Every external asset must have:

```text
source
license
attribution requirement
modification permission
distribution permission
```

Do not use proprietary operating-system assets merely because they are visually convenient.

---

# 86. EXPORT COMPLIANCE

Maintain documentation identifying:

* cryptographic libraries;
* encryption features;
* third-party services;
* jurisdictional considerations.

Do not make unsupported legal claims.

---

# 87. DATA PROCESSING AGREEMENTS

If external processors are introduced, document:

* provider;
* data processed;
* purpose;
* retention;
* geographic location;
* security controls;
* deletion behavior.

---

# 88. UI DESIGN SYSTEM

Create:

```text
src/ui/
  tokens/
  components/
  primitives/
  layouts/
  overlays/
  motion/
  themes/
  accessibility/
```

Tokens include:

```text
spacing
radius
typography
elevation
motion
opacity
colors
z-index
breakpoints
```

No random values unless justified.

---

# 89. RESPONSIVE DESKTOP LAYOUT

Support:

* 1280×720;
* 1366×768;
* 1920×1080;
* 2560×1440;
* 3840×2160;
* multi-monitor configurations.

UI must not break at common DPI scaling levels.

Test:

```text
100%
125%
150%
175%
200%
```

---

# 90. HIGH-DPI / DISPLAY SUPPORT

Support:

* DPI scaling;
* mixed-DPI monitors;
* monitor changes;
* orientation changes;
* display disconnect/reconnect;
* fullscreen transitions.

---

# 91. MULTI-MONITOR

Support:

* monitor detection;
* primary display;
* window restoration;
* workspace placement;
* DPI-aware positioning;
* disconnected-monitor recovery.

Never restore a window outside the visible desktop.

---

# 92. NOTIFICATION CENTER

Support:

* categories;
* grouping;
* priority;
* timestamps;
* read/unread;
* actions;
* dismiss;
* quiet mode;
* sound preferences.

---

# 93. QUICK SETTINGS

Provide configurable controls for available capabilities such as:

* Wi-Fi status;
* Bluetooth status;
* volume;
* brightness where supported;
* battery;
* dark/light mode;
* performance mode;
* notifications;
* airplane-mode status where available.

Unavailable controls must be clearly marked.

Never fake a toggle.

---

# 94. WIDGETS

Widgets may include:

* clock;
* calendar;
* system performance;
* battery;
* storage;
* network;
* notes;
* workspace summary.

Widgets must be:

* removable;
* reorderable;
* resizable where practical;
* performance-conscious.

---

# 95. SYSTEM APPLICATIONS

Provide:

```text
File Explorer
Notes
Text Editor
Terminal
Calculator
Clock
Settings
Task Manager
System Information
Notification Center
Command Palette
Application Launcher
Performance Dashboard
```

Potential future applications:

```text
Paint
Device Manager
Disk Management
Services
Event Viewer
Registry Viewer
Network Center
Backup/Recovery
Security Center
Update Center
```

Only implement features to the extent they can be done honestly and safely.

---

# 96. SECURITY CENTER

Display:

* application security status;
* authentication status;
* session status;
* update status;
* plugin security;
* permission status;
* telemetry status.

Do not claim to replace Microsoft Defender or Windows Security.

---

# 97. DEVICE MANAGER

Initial implementation may be:

> INFORMATIONAL

Display available device information.

Do not claim to replace Device Manager unless genuine device-control functionality exists.

---

# 98. DISK MANAGEMENT

Initial implementation may be:

> INFORMATIONAL

Display:

* disks;
* partitions;
* volumes;
* capacity;
* free space.

Disk modifications require explicit authorization and should remain disabled unless fully engineered.

---

# 99. SERVICES

Initial implementation:

> INFORMATIONAL / READ-ONLY

Display:

* service;
* state;
* startup type;
* description.

Changing services requires explicit authorization and administrative privileges.

---

# 100. EVENT VIEWER

Support safe viewing of relevant application/system events where technically available.

Do not expose arbitrary privileged logs without authorization.

---

# 101. REGISTRY VIEWER

Default:

> READ-ONLY.

Never provide registry write functionality as an ordinary user action.

If registry editing is eventually implemented:

* explicit warning;
* backup;
* confirmation;
* elevation;
* allowlist;
* rollback.

---

# 102. BACKUP / RECOVERY

Support:

* application settings backup;
* workspace configuration backup;
* notes backup;
* export;
* restore.

Do not claim to provide full Windows system backup unless genuinely implemented.

---

# 103. CRASH RECOVERY

On crash:

* preserve safe state;
* recover windows;
* recover notes;
* preserve unsaved work where possible;
* produce diagnostics;
* never expose secrets in crash reports.

---

# 104. SYNC ARCHITECTURE

Use:

```text
Local First
→ Change Queue
→ Server Sync
→ Conflict Detection
→ Conflict Resolution
```

Sync states:

```text
LOCAL_ONLY
PENDING
SYNCING
SYNCED
CONFLICT
FAILED
OFFLINE
```

---

# 105. CONFLICT RESOLUTION

Default strategy:

```text
Detect
→ Preserve both versions
→ Inform user
→ Offer resolution
```

Never silently overwrite user data.

Possible strategies:

```text
Keep Local
Keep Server
Keep Both
Merge
Cancel
```

---

# 106. OFFLINE MODE

The application must remain useful when the backend is unavailable.

Offline-capable:

* notes;
* local files;
* workspaces;
* settings;
* application registry;
* local search;
* UI configuration.

Online-required:

* server account creation;
* remote sync;
* account security operations;
* server-only data.

---

# 107. SEARCH INDEXING PRIVACY

Do not index:

* passwords;
* authentication tokens;
* private keys;
* sensitive system secrets.

Allow users to exclude:

* folders;
* file extensions;
* applications;
* notes.

---

# 108. DEFAULT SETTINGS

```text
Theme = System
Animation = Balanced
Performance = Balanced
Sounds = Enabled
Telemetry = Disabled
Auto-update = Disabled until configured
Notifications = Normal
High-contrast = System
Reduced-motion = System preference
Workspace count = 4
Offline mode = Enabled
```

These are:

> **DEFAULT DECISION**

because they provide conservative, accessible defaults.

---

# 109. BRAIN.MD — MANDATORY ENGINEERING MEMORY

Create:

```text
/brain.md
```

at repository root.

This is mandatory.

It must be updated after every meaningful implementation unit.

It must contain:

```text
# Project Identity
# Product Vision
# Current Project Status
# Current Phase
# Current Task
# Current Architecture
# Technology Stack
# Directory Structure
# Implemented Features
# Features In Progress
# Features Not Implemented
# Future Features
# Unsupported Features
# Capability Matrix Summary
# Windows Integration Status
# Desktop Shell Status
# Window Manager Status
# Workspace Status
# Application Registry Status
# Authentication Architecture
# Authorization Architecture
# Database Architecture
# Database Migration Status
# API Architecture
# Offline Architecture
# Synchronization Architecture
# Conflict Resolution
# UI/UX Architecture
# Design System
# Theme System
# Animation System
# Sound System
# Accessibility System
# Internationalization
# Security Decisions
# Performance Decisions
# Important Constraints
# Things That Must NOT Be Changed
# Known Bugs
# Resolved Bugs
# Failed Approaches
# Decisions and Reasons
# Assumptions
# Technical Debt
# Testing Status
# Performance Findings
# Security Findings
# Git Development History Summary
# Remaining Work
# Last Completed Task
# Last Git Commit
# Next Recommended Task
# Last Updated
```

Do not put secrets in `brain.md`.

Do not turn `brain.md` into a copy of this prompt.

It is an engineering memory, not a specification dump.

---

# 110. ASSUMPTIONS REGISTER

Maintain:

```text
docs/ASSUMPTIONS.md
```

Every non-trivial assumption must contain:

```text
ID:
Date:
Assumption:
Reason:
Impact:
Risk:
Validation Method:
Status:
```

Example:

```text
ASM-001

Assumption:
SQLite will be the local persistence layer.

Reason:
Offline-first desktop operation requires transactional local storage.

Impact:
Local data layer is designed around SQLite.

Risk:
Medium.

Validation:
Benchmark startup, query performance, and migration behavior.

Status:
Accepted.
```

---

# 111. DECISION LOG

Maintain:

```text
docs/DECISIONS.md
```

Format:

```text
Decision ID:
Date:
Decision:
Context:
Options:
Chosen Option:
Reason:
Consequences:
Reversible:
Approval Required:
Status:
```

---

# 112. IMPLEMENTATION STATUS

Maintain:

```text
docs/IMPLEMENTATION_STATUS.md
```

Statuses:

```text
NOT_STARTED
PLANNED
IN_PROGRESS
IMPLEMENTED
TESTED
PARTIALLY_IMPLEMENTED
BLOCKED
UNSUPPORTED
FUTURE
```

Never mark something `IMPLEMENTED` merely because a UI exists.

---

# 113. CHANGELOG

Maintain:

```text
docs/CHANGELOG.md
```

Use Keep-a-Changelog-style organization:

```text
Added
Changed
Fixed
Security
Performance
Deprecated
Removed
```

---

# 114. DEFINITION OF DONE

A feature is complete only when:

* implementation exists;
* architecture is documented;
* contracts exist;
* validation exists;
* errors are handled;
* security is reviewed;
* accessibility is considered;
* performance is considered;
* tests exist where appropriate;
* documentation is updated;
* capability classification is updated;
* `brain.md` is updated;
* `IMPLEMENTATION_STATUS.md` is updated;
* Git diff is reviewed;
* secrets are checked;
* a meaningful Git commit is created.

---

# 115. GIT DEVELOPMENT POLICY

Git is mandatory.

## After every meaningful implementation unit:

```text
Inspect status
→ Inspect diff
→ Review files
→ Check secrets
→ Validate
→ Update documentation
→ Commit
```

Every meaningful implementation must result in a Git commit.

Examples:

```text
feat(shell): implement desktop shell
feat(window-manager): add window lifecycle
feat(workspaces): implement workspace state
feat(auth): implement session architecture
feat(notes): add notes persistence
feat(sync): implement offline queue
feat(native): add system information bridge
feat(ui): implement theme system
feat(motion): add workspace transitions
feat(sound): add notification sound engine
test(shell): add desktop shell tests
fix(auth): prevent refresh token reuse
docs(brain): update engineering memory
```

---

# 116. GIT SAFETY

Never:

```text
git reset --hard
git clean -fd
git push --force
git rebase shared history
delete remote branches
overwrite unrelated user changes
```

unless explicitly authorized.

Never commit:

```text
.env
.env.local
credentials
API keys
private keys
passwords
certificates
tokens
database secrets
```

unless they are explicitly documented non-secret examples.

---

# 117. BRANCHING

Default:

```text
main
feature/*
fix/*
security/*
docs/*
```

Use feature branches for meaningful isolated work.

Do not create dozens of unnecessary branches for trivial changes.

---

# 118. COMMIT GRANULARITY

A commit should represent a coherent implementation unit.

Bad:

```text
feat: update everything
```

Good:

```text
feat(shell): establish desktop shell architecture
feat(window-manager): implement window state machine
feat(workspaces): persist workspace configuration
```

---

# 119. BRANCH PROTECTION

For a production repository, recommend:

* protected main branch;
* required review;
* required CI;
* signed commits where practical;
* no force pushes;
* status checks;
* security scanning.

Do not configure remote branch protection without explicit authorization.

---

# 120. COMMIT SIGNING

### DEFAULT DECISION

Support commit signing documentation, but do not create or access signing keys automatically.

Never generate or store a user's private signing key without explicit instruction.

---

# 121. DESIGN DOCUMENTATION

Maintain:

```text
docs/
  ARCHITECTURE.md
  CAPABILITY_MATRIX.md
  SECURITY.md
  THREAT_MODEL.md
  PERFORMANCE.md
  ACCESSIBILITY.md
  INTERNATIONALIZATION.md
  MOTION.md
  SOUND.md
  THEMES.md
  WINDOWS_INTEGRATION.md
  API.md
  DATABASE.md
  TESTING.md
  RELEASE.md
  INSTALLATION.md
  PRIVACY.md
  THIRD_PARTY_LICENSES.md
  ASSUMPTIONS.md
  DECISIONS.md
  IMPLEMENTATION_STATUS.md
  CHANGELOG.md
  RISK_REGISTER.md
```

---

# 122. PROJECT STRUCTURE

Recommended:

```text
project/
│
├── apps/
│   ├── desktop/
│   │   ├── electron/
│   │   ├── preload/
│   │   └── renderer/
│   │
│   └── server/
│
├── packages/
│   ├── contracts/
│   ├── ui/
│   ├── config/
│   ├── validation/
│   ├── database/
│   ├── security/
│   └── utilities/
│
├── native/
│   └── windows/
│
├── scripts/
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schemas/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   ├── accessibility/
│   ├── visual/
│   └── security/
│
├── assets/
│   ├── icons/
│   ├── sounds/
│   ├── wallpapers/
│   └── fonts/
│
├── docs/
│
├── brain.md
├── README.md
├── LICENSE
├── TERMS_OF_SERVICE.md
├── PRIVACY_POLICY.md
├── package.json
└── .gitignore
```

Adapt this structure to the existing repository rather than destroying a functioning project.

---

# 123. EXISTING PROJECT RULE

Before changing anything:

1. inspect repository;
2. inspect package files;
3. inspect source structure;
4. inspect existing configuration;
5. inspect Git status;
6. inspect existing documentation;
7. inspect existing database files;
8. inspect existing tests;
9. identify working functionality;
10. identify broken functionality;
11. identify architectural debt;
12. update `brain.md`.

Do not blindly regenerate the project.

Do not replace working code merely because another architecture looks cleaner.

---

# 124. NO UNNECESSARY REWRITES

Preserve working functionality.

If refactoring is necessary:

```text
Existing
→ Compatibility plan
→ Migration
→ Validation
→ Remove old code
```

Do not perform massive rewrites without documenting why.

---

# 125. PHASED IMPLEMENTATION

## Phase 0 — Discovery

Deliver:

* repository analysis;
* architecture analysis;
* risk analysis;
* capability inventory;
* technology decision matrix;
* assumptions register;
* initial `brain.md`;
* implementation roadmap.

Do not execute the application.

---

## Phase 1 — Architecture

Implement/document:

* repository structure;
* contracts;
* configuration;
* security boundaries;
* database architecture;
* IPC architecture;
* native bridge architecture.

Exit criteria:

* architecture documented;
* no unresolved critical contradiction;
* security boundaries defined.

---

## Phase 2 — Design System

Implement:

* tokens;
* typography;
* themes;
* colors;
* accessibility primitives;
* motion system;
* sound system;
* UI primitives.

Exit criteria:

* reusable design system;
* accessible components;
* no random styling architecture.

---

## Phase 3 — Desktop Shell

Implement:

* desktop;
* wallpaper;
* taskbar/dock;
* Start;
* system tray;
* notifications;
* quick settings.

Exit criteria:

* shell state model;
* keyboard support;
* accessibility;
* responsive desktop layout.

---

## Phase 4 — Window Manager

Implement:

* window state;
* focus;
* z-index;
* resize;
* move;
* minimize;
* maximize;
* restore;
* snap.

Exit criteria:

* deterministic window behavior;
* tests for state transitions.

---

## Phase 5 — Workspaces

Implement:

* workspace creation;
* deletion;
* switching;
* assignment;
* persistence;
* shortcuts.

Exit criteria:

* workspace state survives restart after authorized testing.

---

## Phase 6 — Application System

Implement:

* registry;
* manifests;
* lifecycle;
* launcher;
* command palette;
* app permissions.

---

## Phase 7 — Storage

Implement:

* local database;
* file management;
* notes;
* text editor;
* recovery.

---

## Phase 8 — Authentication

Implement:

* signup;
* login;
* sessions;
* email verification architecture;
* password reset;
* MFA architecture;
* RBAC.

---

## Phase 9 — Database

Implement:

* SQL schema;
* migrations;
* indexes;
* constraints;
* seed strategy.

Do not execute migrations without authorization.

---

## Phase 10 — API

Implement:

* NestJS modules;
* validation;
* error contracts;
* authentication;
* authorization;
* rate limiting;
* logging.

---

## Phase 11 — Offline / Sync

Implement:

* queue;
* sync states;
* conflict detection;
* conflict resolution;
* retry behavior.

---

## Phase 12 — Windows Integration

Implement read-only capabilities first:

* system;
* processes;
* displays;
* audio;
* battery;
* network;
* filesystem.

Then carefully evaluate writable capabilities.

---

## Phase 13 — System Applications

Implement:

* Task Manager;
* System Information;
* Settings;
* Terminal;
* Calculator;
* Clock;
* Performance Dashboard;
* Notifications.

---

## Phase 14 — Visual Polish

Implement:

* advanced animations;
* color effects;
* sound effects;
* wallpapers;
* transitions;
* microinteractions;
* accessibility polish.

Do not sacrifice performance.

---

## Phase 15 — Testing

Implement:

* unit;
* integration;
* security;
* accessibility;
* visual;
* performance;
* E2E architecture.

Execute only tests permitted by the Test Execution Authorization Gate.

---

## Phase 16 — Release Readiness

Review:

* security;
* licensing;
* packaging;
* signing;
* update system;
* rollback;
* accessibility;
* performance;
* documentation;
* Git cleanliness.

Do not publish or deploy without authorization.

---

# 126. TEST STRATEGY

## Unit Coverage Target

### DEFAULT DECISION

Target:

```text
≥ 80% meaningful business-logic coverage
```

Do not inflate coverage with meaningless tests.

Prioritize:

* security;
* authentication;
* authorization;
* filesystem validation;
* synchronization;
* conflict resolution;
* state machines;
* command registry;
* permission checks.

---

# 127. INTEGRATION TESTS

Test:

* API contracts;
* database repositories;
* authentication;
* sync;
* permission enforcement;
* IPC validation.

Use isolated test environments.

Never connect tests to production databases.

---

# 128. E2E TESTS

Use Playwright or equivalent.

Cover:

```text
signup
login
first run
desktop
launcher
application launch
window lifecycle
workspace switching
notes
file operations
settings
notifications
logout
recovery
```

E2E execution requires explicit authorization if it launches the application.

---

# 129. VISUAL REGRESSION

Capture screenshots for:

* light theme;
* dark theme;
* high contrast;
* launcher;
* desktop;
* settings;
* notes;
* file explorer;
* notifications;
* workspace overview.

Check:

* layout;
* typography;
* overflow;
* contrast;
* alignment;
* animation end states.

---

# 130. ACCESSIBILITY TESTING

Use:

* axe-core;
* keyboard-only tests;
* screen-reader smoke testing;
* focus-order testing;
* high-contrast testing;
* reduced-motion testing;
* zoom testing.

---

# 131. SECURITY TESTING

Test:

* XSS;
* path traversal;
* command injection;
* IPC injection;
* privilege bypass;
* authorization bypass;
* token replay;
* refresh-token reuse;
* plugin permission bypass;
* malicious filenames;
* malformed IPC payloads.

---

# 132. PERFORMANCE TESTING

Measure:

* startup;
* memory;
* CPU;
* frame time;
* animation smoothness;
* search latency;
* filesystem operation latency;
* sync throughput.

Do not fabricate performance numbers.

---

# 133. PHASE EXIT CRITERIA

Every phase must satisfy:

```text
Implementation complete
Documentation complete
Tests created
Known limitations documented
Security reviewed
Accessibility considered
Performance considered
brain.md updated
Implementation status updated
Git diff reviewed
Git commit created
```

---

# 134. RISK REGISTER

Every major risk must have:

```text
Risk ID
Description
Likelihood
Impact
Severity
Mitigation
Owner
Status
Contingency
```

Critical unresolved risks block release readiness.

---

# 135. RELEASE APPROVAL GATES

Explicit approval required before:

```text
production database migration
production deployment
installer publication
auto-update activation
system-level installer testing
code-signing release
telemetry activation
remote release upload
Windows system modification
```

---

# 136. DANGEROUS OPERATION GATE

Any operation involving:

* deletion;
* privilege escalation;
* Windows modification;
* service creation;
* Registry modification;
* firewall changes;
* scheduled tasks;
* startup persistence;
* database destruction;
* external upload;
* installation;
* execution of unknown code;

must stop and request approval.

---

# 137. DO NOT INVENT FUNCTIONALITY

Never write:

```text
"Windows Firewall successfully configured"
```

if the app only displays a simulated interface.

Never write:

```text
"System Restore completed"
```

unless it genuinely completed.

Never write:

```text
"Process terminated"
```

unless the native operation succeeded.

Use honest statuses:

```text
SIMULATED
INFORMATIONAL
UNAVAILABLE
UNSUPPORTED
REQUIRES ADMINISTRATOR
REQUIRES USER AUTHORIZATION
FAILED
SUCCESS
```

---

# 138. NO FAKE BACKEND

Do not create:

```text
fake API success
fake authentication
fake database records
fake sync
fake system state
```

for production functionality.

Mocks are permitted only inside controlled tests.

---

# 139. NO HARDCODED SECRETS

Never hardcode:

* passwords;
* API keys;
* JWT secrets;
* database passwords;
* OAuth secrets;
* signing keys.

Use environment configuration and secure secret storage.

---

# 140. CONFIGURATION

Use:

```text
.env.example
```

with placeholders only.

Example:

```env
NODE_ENV=development
API_PORT=3000
DATABASE_URL=
SQL_SERVER_HOST=
SQL_SERVER_DATABASE=
SQL_SERVER_USER=
SQL_SERVER_PASSWORD=
JWT_SECRET=
```

Never commit real `.env`.

---

# 141. DATABASE DEPLOYMENT MODEL

Support:

```text
Local SQL Server
Remote SQL Server
```

### DEFAULT DECISION

Development should support:

```text
Local SQL Server Developer/Express where available
```

Production should support:

```text
Remote SQL Server
```

The application must not assume SQL Server is always running locally.

---

# 142. PYTHON POLICY

Python is not a mandatory runtime dependency.

Use Python only when it provides a clear advantage for:

* offline data processing;
* specialized utilities;
* analysis;
* asset processing;
* development tooling.

Do not create a Python dependency merely because Python is available.

---

# 143. BASH POLICY

Bash may be used for developer workflows:

* Git Bash;
* WSL.

Always identify the environment.

Never assume Bash means WSL.

---

# 144. NATIVE BRIDGE POLICY

Native operations must live behind a narrow abstraction:

```text
NativeCapabilities
SystemInfo
ProcessService
DisplayService
AudioService
BatteryService
NetworkService
PowerService
FilesystemService
ApplicationLauncher
```

The renderer must never call native Windows APIs directly.

---

# 145. CAPABILITY DETECTION

At startup, determine supported capabilities.

Example:

```json
{
  "systemInfo": {
    "supported": true
  },
  "processControl": {
    "supported": true,
    "requiresElevation": true
  },
  "battery": {
    "supported": false
  }
}
```

The UI must react to capability availability.

---

# 146. STATE MACHINES

Use explicit state machines for:

* authentication;
* application lifecycle;
* windows;
* workspaces;
* synchronization;
* update lifecycle;
* file operations;
* notifications.

Avoid scattered boolean flags when state transitions become complex.

---

# 147. OBSERVABILITY

Provide structured logs:

```text
DEBUG
INFO
WARN
ERROR
SECURITY
AUDIT
```

Use correlation IDs.

Never log:

* passwords;
* tokens;
* private keys;
* sensitive file contents.

---

# 148. DIAGNOSTICS

Provide a diagnostic export containing:

* app version;
* OS version;
* architecture;
* enabled capabilities;
* performance summary;
* recent non-sensitive errors;
* configuration summary.

Allow users to review the report before exporting.

---

# 149. HELP SYSTEM

Provide:

* contextual help;
* keyboard shortcut reference;
* feature explanations;
* permission explanations;
* troubleshooting;
* diagnostic guidance.

Avoid unnecessary technical jargon for ordinary users.

---

# 150. CONTENT PRINCIPLES

UI copy must be:

* concise;
* clear;
* respectful;
* actionable;
* non-alarming unless necessary.

Do not use fake marketing claims such as:

```text
"Ultimate AI-powered revolutionary operating system"
```

The product should communicate what it actually does.

---

# 151. UI QUALITY RULES

Avoid:

* excessive gradients;
* excessive glowing;
* oversized rounded cards everywhere;
* excessive glassmorphism;
* constant animation;
* low-contrast text;
* fake 3D effects;
* unnecessary visual noise.

Use visual effects intentionally.

The result should feel:

```text
Premium
Professional
Modern
Fast
Calm
Technical
Cohesive
```

---

# 152. ANIMATION QUALITY RULES

Animation should communicate:

* hierarchy;
* continuity;
* cause/effect;
* focus;
* state changes.

Never animate merely because animation is possible.

---

# 153. SOUND QUALITY RULES

Sound must be:

* subtle;
* short;
* consistent;
* optional;
* accessible;
* original or licensed.

Never create an annoying soundscape.

---

# 154. DESIGN INSPIRATION MATRIX

| Source         | Borrow                                   | Do Not Copy               |
| -------------- | ---------------------------------------- | ------------------------- |
| Windows 11     | Start, snapping, taskbar concepts, depth | Microsoft branding/assets |
| macOS          | Dock, spacing, workspace polish          | Apple branding/assets     |
| Ubuntu/Linux   | workspace/developer concepts             | Ubuntu branding/assets    |
| Developer IDEs | command palette, keyboard workflows      | proprietary artwork       |

---

# 155. DOCUMENTATION QUALITY

Every major architectural decision must be documented.

Documentation must explain:

```text
What
Why
How
Limitations
Security implications
Performance implications
Future migration path
```

---

# 156. BUILD ORDER

Do not attempt to implement every feature simultaneously.

Use vertical slices.

Recommended first slice:

```text
Desktop Shell
+
Window Manager
+
Application Registry
+
Notes
+
Settings
+
Local Persistence
```

Then progressively integrate backend, authentication, synchronization, and Windows capabilities.

---

# 157. IMPLEMENTATION LOOP

For every meaningful task, execute this logical workflow:

```text
1. READ
2. INSPECT
3. UNDERSTAND
4. CHECK brain.md
5. CHECK IMPLEMENTATION_STATUS.md
6. CHECK ASSUMPTIONS
7. CHECK DECISIONS
8. PLAN
9. IMPLEMENT
10. VALIDATE STATICALLY
11. RUN ONLY AUTHORIZED TESTS
12. SECURITY REVIEW
13. ACCESSIBILITY REVIEW
14. PERFORMANCE REVIEW
15. UPDATE DOCUMENTATION
16. UPDATE brain.md
17. UPDATE IMPLEMENTATION_STATUS.md
18. UPDATE CHANGELOG.md if appropriate
19. REVIEW Git diff
20. CHECK FOR SECRETS
21. CREATE MEANINGFUL GIT COMMIT
22. RECORD COMMIT IN brain.md
23. CONTINUE TO NEXT SAFE TASK
```

---

# 158. DO NOT WAIT FOR ANOTHER PROMPT FOR LOW-RISK WORK

If a reasonable implementation decision is covered by:

* this master prompt;
* the Decision Authority Matrix;
* an accepted assumption;
* an existing architectural decision;

proceed without asking.

Do not repeatedly ask:

> "What should I implement next?"

Determine the next safe task from:

```text
brain.md
IMPLEMENTATION_STATUS.md
remaining phase work
dependency order
risk
```

---

# 159. WHEN TO STOP AND ASK

Stop only when:

* explicit approval is required;
* requirements genuinely conflict;
* a destructive decision is unavoidable;
* security policy requires user choice;
* legal/licensing approval is required;
* credentials are required;
* a production decision is required;
* multiple high-risk architectural options exist without a safe default.

For low-risk decisions, use the documented defaults.

---

# 160. FINAL REVIEW

Before declaring the project complete, verify:

## Architecture

* [ ] layered architecture
* [ ] secure IPC
* [ ] native isolation
* [ ] database architecture
* [ ] API contracts

## Functionality

* [ ] desktop
* [ ] taskbar/dock
* [ ] Start
* [ ] search
* [ ] command palette
* [ ] windows
* [ ] workspaces
* [ ] applications
* [ ] files
* [ ] notes
* [ ] settings
* [ ] notifications
* [ ] system information

## Security

* [ ] authentication
* [ ] authorization
* [ ] secure tokens
* [ ] IPC validation
* [ ] path validation
* [ ] subprocess allowlist
* [ ] CSP
* [ ] CORS
* [ ] CSRF
* [ ] XSS protection
* [ ] plugin permissions
* [ ] audit logging
* [ ] secrets management

## UX

* [ ] keyboard navigation
* [ ] accessibility
* [ ] themes
* [ ] animations
* [ ] sounds
* [ ] reduced motion
* [ ] high contrast
* [ ] responsive desktop layouts
* [ ] high DPI

## Engineering

* [ ] tests
* [ ] documentation
* [ ] brain.md
* [ ] assumptions
* [ ] decisions
* [risk register
* [ ] implementation status
* [ ] changelog
* [ ] Git history
* [ ] no secrets
* [ ] clean repository

---

# 161. FINAL ENGINEERING REPORT

At the end of the current authorized implementation phase, provide:

```text
Implementation Summary
Completed Features
Partially Completed Features
Unsupported Features
Known Limitations
Security Review
Accessibility Review
Performance Review
Test Results
Git Commits Created
Documentation Updated
Database Status
Windows Integration Status
Remaining Work
Required User Approvals
Recommended Next Task
Execution Status
```

---

# 162. FINAL EXECUTION STATUS

Always clearly report:

```text
APPLICATION EXECUTED: NO
DEV SERVER STARTED: NO
DEPENDENCIES INSTALLED: NO
DATABASE MIGRATIONS EXECUTED: NO
WINDOWS MODIFICATIONS PERFORMED: NO
ELEVATION REQUESTED: NO
PRODUCTION DEPLOYMENT PERFORMED: NO
```

If any operation was explicitly authorized and performed, report it accurately.

Never claim otherwise.

---

# 163. FINAL STOP CONDITION

After completing all currently authorized work:

1. save files;
2. validate static code;
3. update documentation;
4. update `brain.md`;
5. update implementation status;
6. inspect Git diff;
7. check for secrets;
8. create the required meaningful Git commit;
9. report what was completed;
10. stop.

Do not launch the application automatically.

Do not start servers automatically.

Do not install dependencies automatically.

Do not perform migrations automatically.

Do not modify Windows automatically.

Wait for explicit authorization before those actions.

---

# 164. MASTER PRODUCT VISION

The final product should feel like a carefully engineered desktop environment combining:

**Windows 11**
for familiarity and desktop interaction,

**macOS**
for polish, spacing, animation quality, and workspace ergonomics,

**Ubuntu/Linux**
for developer workflows, workspace concepts, terminal integration, and technical flexibility.

It must be:

```text
Production-oriented
Secure
Transparent
Reversible
Accessible
Fast
Beautiful
Extensible
Maintainable
Offline-capable
Windows-aware
Developer-friendly
```

But above all:

> **DO NOT MAKE ANY MISTAKES, ANTIGRAVITY.**

Do not invent functionality.

Do not silently execute dangerous operations.

Do not pretend simulated functionality is native.

Do not destroy existing working code.

Do not expose secrets.

Do not bypass security controls.

Do not install or execute anything without authorization.

Do not leave meaningful implementation work uncommitted.

Use `brain.md` to maintain engineering memory.

Use the Decision Authority Matrix to make safe decisions without unnecessary questions.

Use the Assumptions Register to make assumptions visible.

Use the capability model to maintain technical honesty.

Use Git after every meaningful implementation unit.

Build the product incrementally and professionally.

**Begin with Phase 0 — Discovery.**

Do not launch the application.

Do not start a development server.

Do not install dependencies.

Do not execute migrations.

Do not modify Windows.

Do not ask what to build next unless the decision genuinely requires user authorization.

Proceed with safe, documented, reversible repository work.

---

# REVISION NOTES

## 1. Technology Architecture

The previous architecture allowed Electron/Tauri, Express/Fastify/NestJS, and several persistence choices. This revision establishes concrete defaults:

* Electron
* React + TypeScript
* Zustand
* NestJS + Fastify
* SQLite for local persistence
* SQL Server for centralized persistence
* typed Electron IPC
* isolated native bridge

This removes ambiguity while preserving alternative paths where migration remains realistic.

## 2. Test Execution Contradiction Resolved

The previous requirement to build tests while also prohibiting execution could be interpreted inconsistently.

This revision introduces the explicit **Test Execution Authorization Gate**.

Static validation and safe isolated tests may proceed.

Application launches, E2E tests, migrations, dependency installation, server startup, and system integration require explicit approval.

## 3. Decision Authority Added

Antigravity is now explicitly allowed to make low-risk reversible engineering decisions without repeatedly asking the user.

High-risk, destructive, system-modifying, security-sensitive, legal, credential-related, and production decisions require approval.

## 4. Assumptions Register Added

A dedicated:

```text
docs/ASSUMPTIONS.md
```

was added so assumptions are visible rather than silently embedded in implementation.

## 5. Decision Log Added

A dedicated:

```text
docs/DECISIONS.md
```

was added to distinguish architectural decisions from assumptions.

## 6. Data Contracts Expanded

The revision adds:

* SQL schema;
* API endpoint catalog;
* API response contracts;
* event contracts;
* application manifests;
* command registry;
* permission schema;
* plugin manifest;
* IPC contracts;
* error codes.

## 7. Authentication Expanded

The revision explicitly defines:

* local/server-backed authentication;
* session lifecycle;
* refresh-token rotation;
* revocation;
* password reset;
* email verification;
* MFA;
* OAuth/OIDC architecture;
* RBAC;
* offline authentication boundaries.

## 8. Windows Integration Expanded

A Windows Integration API Matrix now specifies:

* preferred technology;
* privilege requirements;
* read/write classification;
* fallback;
* unsupported behavior.

This prevents Antigravity from implementing arbitrary PowerShell commands simply because they are convenient.

## 9. Security Expanded

The revision adds:

* threat modeling;
* plugin isolation;
* subprocess allowlists;
* argument validation;
* IPC validation;
* encryption;
* CSP;
* CORS;
* CSRF;
* XSS controls;
* audit retention;
* telemetry policy;
* privacy controls;
* SBOM;
* license tracking.

## 10. Accessibility Made Measurable

Accessibility is now explicitly based on:

> WCAG 2.2 AA

with measurable contrast targets, screen-reader targets, focus rules, reduced-motion behavior, keyboard requirements, and scalable UI requirements.

## 11. Internationalization Added

The architecture now includes English and Urdu initially, with RTL and future-language support built into the design rather than added later.

## 12. Performance Budgets Added

The revision introduces measurable engineering targets for:

* startup;
* memory;
* CPU;
* frame rate;
* animation frame time.

These are treated as engineering targets rather than fabricated guarantees.

## 13. Packaging and Release Engineering Added

The revision specifies:

* signed EXE/NSIS as the initial installer;
* per-user installation;
* future MSIX support;
* release channels;
* semantic versioning;
* update verification;
* rollback;
* code signing;
* SBOM;
* CI/CD.

## 14. Legal and Licensing Added

The revision explicitly covers:

* application licensing;
* fonts;
* icons;
* sounds;
* wallpapers;
* third-party dependencies;
* attribution;
* privacy policy;
* terms;
* data processing;
* export-compliance considerations.

## 15. Git Requirement Strengthened

The user's requirement that every meaningful implementation be committed has been made a mandatory engineering rule.

The implementation loop now explicitly requires:

```text
IMPLEMENT
→ VALIDATE
→ DOCUMENT
→ UPDATE brain.md
→ REVIEW DIFF
→ CHECK SECRETS
→ COMMIT
→ RECORD COMMIT
```

## 16. `brain.md` Expanded

`brain.md` remains the persistent engineering memory and now records:

* implementation state;
* architecture;
* decisions;
* assumptions;
* security;
* performance;
* testing;
* Git history;
* remaining work.

It must not become a duplicate of the master prompt.

## 17. Animation Requirement Clarified

The original request for very high animations has been preserved as:

> **very high-quality, advanced animations**

rather than indiscriminately maximizing animation.

The product now supports:

```text
Minimal
Balanced
Enhanced
Immersive
```

plus performance-aware behavior and reduced-motion support.

## 18. Sound System Expanded

A centralized sound architecture was added with:

* categories;
* volume controls;
* accessibility behavior;
* licensing requirements;
* visual equivalents;
* workspace/application/system events.

## 19. Capability Honesty Strengthened

The REAL / WINDOWS-INTEGRATED / APPLICATION-SIMULATED / INFORMATIONAL / FUTURE / UNSUPPORTED classification is now required throughout the product.

This prevents the application from pretending to replace actual Windows components when it only provides a visual or informational equivalent.

## 20. Existing Project Preservation Strengthened

Antigravity must inspect the existing repository before changing it and must not blindly regenerate working code.

This is especially important if the master prompt is used against an already-developed project.

## 21. Release and Destructive Operation Gates Added

Production deployment, database migrations, Windows modifications, installer execution, signing, telemetry activation, and other high-impact operations now have explicit approval gates.

## 22. Sensible Defaults Added

The revision explicitly establishes defaults for:

* theme;
* animation;
* sound;
* telemetry;
* update behavior;
* workspaces;
* local persistence;
* authentication;
* SQL Server deployment;
* language;
* performance mode.

Every such default is marked **DEFAULT DECISION** where introduced.

## 23. No-Unnecessary-Questions Rule Clarified

Antigravity should not repeatedly ask the user for decisions that are already covered by:

* this master prompt;
* the Decision Authority Matrix;
* documented defaults;
* accepted assumptions;
* existing architectural decisions.

Only genuinely high-risk or approval-dependent decisions should interrupt implementation.







# MASTER GOOGLE ANTIGRAVITY DEVELOPMENT PROMPT

## Hybrid Desktop Environment, Productivity Suite & Developer Workspace

### Production Engineering Edition — Version 6.0

**MANDATORY DIRECTIVE: DO NOT MAKE MISTAKES, ANTIGRAVITY.**

Build a coherent, secure, production-oriented desktop application inspired by Windows 11, macOS, and Ubuntu Linux. Deliver real functionality, excellent usability, sophisticated animations, a consistent visual design system, reliable data handling, and maintainable architecture.

Every meaningful implementation unit must be reviewed, validated within the permitted execution rules, documented, and committed to Git.

**Do not launch the application, start a development server, install dependencies, run database migrations, elevate privileges, modify Windows settings, or execute system-changing scripts until I explicitly authorize the relevant action.**

This document is the authoritative product and engineering specification. Read it completely before implementation. Follow its requirements, document assumptions, resolve low-risk uncertainties using the defaults below, and do not repeatedly ask what to build next.

---

# 1. Product Vision and Objectives

## 1.1 Product vision

Create a Windows desktop application that combines:

* A polished desktop shell and application launcher.
* Window management and virtual workspaces.
* File and folder management.
* Notes, documents, search, and productivity tools.
* Developer utilities and workspace management.
* System information and carefully controlled Windows integrations.
* User accounts, secure settings, local persistence, and optional synchronization.
* Advanced animation, visual effects, themes, and sound effects.
* Recovery, diagnostics, accessibility, privacy, and security controls.

The result should feel like a cohesive desktop environment rather than a collection of unrelated web pages.

This is a desktop application running on Windows, **not a replacement operating system**. Never claim that application-simulated functionality changes the actual Windows operating system.

## 1.2 Product objectives

1. Make the interface visually polished, intuitive, and responsive.
2. Make every implemented feature perform its advertised action.
3. Provide a consistent experience across all screens and application windows.
4. Support keyboard, mouse, touch-compatible layouts, and assistive technology where practical.
5. Preserve user data and prevent accidental destructive operations.
6. Keep idle resource consumption low.
7. Provide a clear separation between UI, application logic, persistence, backend services, and native Windows integrations.
8. Maintain a reliable engineering record through `brain.md`, implementation tracking, and Git commits.
9. Make the project extensible without introducing unnecessary complexity.
10. Prefer complete, tested feature slices over many unfinished features.

## 1.3 Product capability classifications

Every feature must be classified internally and in relevant documentation as one of the following:

| Classification          | Meaning                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `REAL`                  | Implemented and working within the application.                                    |
| `WINDOWS_INTEGRATED`    | Uses a real Windows API or verified operating-system capability.                   |
| `APPLICATION_SIMULATED` | Works inside the application's own environment but does not modify Windows itself. |
| `INFORMATIONAL`         | Displays information without performing the underlying action.                     |
| `FUTURE`                | Planned but not implemented.                                                       |
| `UNSUPPORTED`           | Cannot be supported under the current architecture or platform constraints.        |

Never represent a simulated task manager, virtual desktop, recycle bin, lock screen, system setting, or power control as a genuine Windows capability.

Do not show fake progress, fabricated system information, misleading success messages, or controls that appear functional but have no implementation.

---

# 2. Decision Authority Matrix

Antigravity must distinguish ordinary engineering decisions from operations requiring approval.

| Decision or action                                                      | Authority                  | Rule                                                                        |
| ----------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| Inspect existing files, architecture, Git history, and project status   | Autonomous                 | Read before modifying.                                                      |
| Improve component structure and remove duplication                      | Autonomous                 | Preserve existing behavior.                                                 |
| Select spacing, typography, layout, and animation defaults              | Autonomous                 | Follow this specification.                                                  |
| Implement low-risk UI improvements                                      | Autonomous                 | Keep changes focused and reversible.                                        |
| Choose a library within the approved technology stack                   | Autonomous                 | Check maintenance, security, licensing, and bundle cost first.              |
| Create or update documentation and `brain.md`                           | Autonomous                 | Never include secrets.                                                      |
| Run permitted static checks                                             | Autonomous                 | Only if they do not install, launch, or modify the system.                  |
| Run safe, isolated unit tests                                           | Autonomous                 | Must satisfy the Test Execution Authorization Gate.                         |
| Create a local Git branch                                               | Autonomous                 | Inspect repository state first.                                             |
| Create meaningful local Git commits                                     | Authorized                 | The user explicitly requires commits after meaningful implementation units. |
| Install packages or update lockfiles through package-manager execution  | Requires approval          | Do not execute installation commands without authorization.                 |
| Start a development server or launch the app                            | Requires explicit approval | No exceptions.                                                              |
| Execute E2E tests that launch the application                           | Requires explicit approval | Explain the scope before requesting approval.                               |
| Run database migrations or seed a real database                         | Requires explicit approval | Never against production by default.                                        |
| Modify Windows registry, services, power settings, or security settings | Requires explicit approval | Prefer read-only integration.                                               |
| Delete, reset, or overwrite user work                                   | Requires explicit approval | Preserve uncommitted changes.                                               |
| Access external accounts, deploy, publish, or transmit user data        | Requires explicit approval | No automatic deployment.                                                    |
| Sign releases or publish an installer                                   | Requires explicit approval | Signing keys must remain protected.                                         |
| Perform an irreversible or high-risk operation                          | Requires explicit approval | Provide a risk explanation and rollback plan.                               |

### 2.1 Default decisions

**DEFAULT DECISION:** When a decision is low-risk, reversible, and within the product vision, choose a sensible option and document it.

**DEFAULT DECISION:** When multiple implementations are possible, prefer the simplest secure architecture that meets the requirement.

**DEFAULT DECISION:** When a requirement is ambiguous but noncritical, use a reasonable default and record the assumption.

**DEFAULT DECISION:** When an operation could lose data, weaken security, modify Windows, incur a cost, or expose private information, stop and request explicit approval.

Do not use the instruction to avoid unnecessary questions as permission to perform dangerous actions.

---

# 3. Assumptions Register and Engineering Memory

## 3.1 Required files

Maintain these files at the repository root or in the appropriate documentation directory:

* `brain.md`
* `README.md`
* `IMPLEMENTATION_STATUS.md`
* `docs/ARCHITECTURE.md`
* `docs/DECISIONS.md`
* `docs/SECURITY.md`
* `docs/TESTING.md`
* `docs/ACCESSIBILITY.md`
* `docs/ANIMATIONS_AND_EFFECTS.md`
* `docs/SOUND_DESIGN.md`
* `docs/RELEASE_PLAN.md`
* `docs/RISK_REGISTER.md`
* `docs/CHANGELOG.md`

Create or update files incrementally. Do not overwrite valuable existing documentation without reviewing it.

## 3.2 Assumptions Register

Maintain a section in `brain.md` and, if needed, a more detailed `docs/DECISIONS.md`.

Each assumption must contain:

| Field            | Description                                  |
| ---------------- | -------------------------------------------- |
| ID               | Unique identifier such as `ASM-001`.         |
| Assumption       | What is being assumed.                       |
| Reason           | Why a default is necessary.                  |
| Risk             | Low, Medium, High, or Critical.              |
| Reversibility    | Easy, Moderate, or Difficult.                |
| Decision owner   | Antigravity or User.                         |
| Status           | Proposed, Accepted, Rejected, or Superseded. |
| Review condition | When the assumption should be revisited.     |

Do not silently convert uncertain assumptions into facts.

## 3.3 `brain.md` maintenance

`brain.md` is the persistent engineering memory for the project. Keep it accurate, concise, and useful.

It must record:

* Product vision and boundaries.
* Current implementation phase.
* Technology stack and architecture.
* Directory structure.
* Implemented, incomplete, planned, and unsupported features.
* Current UI/UX and design-system decisions.
* Animation and sound architecture.
* State management and persistence decisions.
* Authentication and authorization.
* Database and API status.
* Windows integration capabilities.
* Known bugs and technical debt.
* Security and performance findings.
* Important constraints that must not change.
* Assumptions and unresolved decisions.
* Recent meaningful Git commits.
* Last completed task and next recommended task.
* Validation performed and its result.
* Whether application execution has been authorized.

Update `brain.md` after every meaningful implementation unit. Do not record a feature as completed merely because code was generated.

Never store passwords, access tokens, private keys, database credentials, or other secrets in `brain.md`.

---

# 4. Technology Decision Matrix

Use this matrix unless repository inspection establishes a compelling compatibility constraint.

| Decision                | Default                                                               | Rationale                                                                                          | Alternatives                                                               | Reversibility |
| ----------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- |
| Desktop shell           | Electron                                                              | Mature Windows desktop ecosystem, broad tooling, React integration, and reliable desktop packaging | Tauri                                                                      | Moderate      |
| Frontend                | React + TypeScript                                                    | Component reuse, type safety, maintainability                                                      | Vue, other established frameworks                                          | Moderate      |
| Styling                 | CSS Modules or organized vanilla CSS with design tokens               | Predictable styling, explicit control, reduced utility-class sprawl                                | Tailwind CSS for suitable parts                                            | Easy          |
| Backend                 | Node.js + Fastify                                                     | Structured validation, good performance, clear API boundaries                                      | Express, NestJS                                                            | Moderate      |
| UI state                | Zustand with local component state where appropriate                  | Simple shared state without unnecessary complexity                                                 | Redux Toolkit, Context for small scopes                                    | Easy          |
| Server-state management | TanStack Query                                                        | Cache invalidation, loading/error states, retries, query lifecycle                                 | Equivalent established query library                                       | Moderate      |
| Local persistence       | SQLite through a vetted native integration, with versioned migrations | Reliable local relational storage and offline operation                                            | IndexedDB for browser-only prototypes; encrypted files for narrow settings | Moderate      |
| Remote database         | Microsoft SQL Server                                                  | Fits the intended database ecosystem                                                               | Other relational database only with approval                               | Moderate      |
| IPC                     | Electron context-isolated IPC using narrow, validated channels        | Explicit main/renderer boundaries                                                                  | Tauri command bridge if shell changes                                      | Moderate      |
| Native Windows bridge   | C#/.NET helper or narrowly scoped native Node integration             | Typed Windows integration and maintainable interop                                                 | PowerShell for restricted administrative tasks                             | Moderate      |
| Python                  | Optional isolated helper for specialized processing                   | Avoids adding another runtime to ordinary UI operations                                            | Node.js or C# implementation                                               | Easy          |
| Unit testing            | Vitest or compatible established runner                               | Fast isolated tests                                                                                | Jest                                                                       | Easy          |
| UI component testing    | React Testing Library                                                 | Tests user-visible behavior                                                                        | Equivalent accessible component-testing library                            | Easy          |
| E2E testing             | Playwright                                                            | Desktop/web workflow testing where authorized                                                      | Approved alternative                                                       | Moderate      |
| Accessibility checks    | axe-based automated checks plus manual review                         | Finds common accessibility defects                                                                 | Equivalent tooling                                                         | Easy          |
| Visual regression       | Playwright screenshots or equivalent                                  | Detects visual regressions                                                                         | Approved screenshot comparison system                                      | Moderate      |
| Packaging               | Electron Forge or Electron Builder, selected after inspection         | Mature Windows distribution support                                                                | Approved alternative                                                       | Moderate      |
| CI                      | GitHub Actions or existing repository CI                              | Repeatable validation                                                                              | Existing CI provider                                                       | Moderate      |

**DEFAULT DECISION:** Use Electron unless the existing repository already has a functioning, justified Tauri architecture. Do not migrate an existing working shell merely because another framework is theoretically smaller.

**DEFAULT DECISION:** SQL Server is the remote/shared database option; SQLite is the local-first persistence option. Do not assume a remote SQL Server is installed locally.

**DEFAULT DECISION:** Python and Bash are optional supporting tools, not mandatory layers for every feature.

---

# 5. Hybrid Design Philosophy

Create a distinctive interface inspired by three desktop environments.

| Inspiration  | Influence | Features to adapt                                                                                           |
| ------------ | --------: | ----------------------------------------------------------------------------------------------------------- |
| Windows 11   |       40% | Start menu, taskbar, window snapping, Quick Settings, familiar system controls                              |
| macOS        |       30% | Dock behavior, workspace overview, refined spacing, elegant transitions                                     |
| Ubuntu/Linux |       30% | Workspace overview, application launcher, developer workflows, terminal integration, practical system tools |

These percentages are design guidance, not a requirement to copy individual operating-system interfaces.

Do not reproduce proprietary logos, copyrighted wallpapers, trademarked assets, or proprietary sound effects without appropriate authorization.

Build a cohesive design language with original branding.

## 5.1 Design principles

* Familiar but original.
* Clean and professional.
* Strong visual hierarchy.
* Consistent interaction patterns.
* Restrained use of transparency and blur.
* Subtle depth rather than excessive glow.
* Advanced animation without constant motion.
* Accessible color contrast.
* Responsive layout.
* Consistent spacing, typography, iconography, and component behavior.
* Functional before decorative.

Avoid generic AI-generated design patterns, excessive gradients, meaningless dashboard cards, unnecessary glass panels, decorative charts with fabricated data, and animation that makes routine work slower.

---

# 6. Feature Architecture and Product Scope

Implement the product in coherent modules.

## 6.1 Desktop shell

Required features:

* Desktop workspace.
* Configurable wallpaper.
* Desktop shortcuts.
* Context menu.
* Start menu.
* Taskbar.
* Application launcher.
* Search.
* Notification center.
* Quick Settings.
* System clock and date.
* Volume and brightness indicators where supported.
* Network and battery indicators where supported.
* Window management.
* Application overview.
* Keyboard shortcuts.
* Workspace switching.
* Settings access.
* Lock and session controls within the application.
* Recovery after an application-level error.

Every capability must identify whether it is application-only or integrated with Windows.

## 6.2 Start menu and application launcher

Implement:

* Pinned applications.
* Recommended or recently used items, with privacy controls.
* Search.
* Alphabetical application listing.
* Categories.
* Recently opened documents where authorized.
* Pin/unpin.
* Reordering.
* Application details.
* Launch error reporting.
* Keyboard navigation.
* Search history controls.
* Configurable layout.

Search must not silently index private directories or transmit queries to a remote service.

## 6.3 Taskbar and Dock

Provide a hybrid taskbar/dock with:

* Running-application indicators.
* Pinned applications.
* Active-window indication.
* Window preview where practical.
* Minimize, restore, focus, and close controls.
* Optional auto-hide.
* Configurable alignment.
* Adjustable icon size.
* Multi-monitor-aware behavior where supported.
* Workspace-aware filtering.
* Context menus.
* Accessible keyboard navigation.
* Reduced animation mode.

Hover effects must not obstruct clicking or keyboard focus.

## 6.4 Window manager

Support application-level windows with:

* Move.
* Resize.
* Minimize.
* Restore.
* Maximize.
* Close.
* Focus and z-order.
* Title bars.
* Window menus.
* Snap layouts.
* Split-screen arrangements.
* Edge snapping.
* Cascading and tiling layouts.
* Window position persistence.
* Minimize and restore animations.
* Keyboard-driven positioning.
* Window boundary protection.
* Dialog ownership.
* Modal and nonmodal windows.

A simulated window must not be described as a native Windows window unless it actually is one.

### Window behavior acceptance criteria

* Only one application window is the active keyboard target at a time.
* Closing a window does not unexpectedly delete its saved data.
* Minimized windows can be restored.
* Focus returns to an appropriate window after closing a dialog.
* Snap layouts respect minimum window dimensions.
* Window state is restored safely after a restart.
* Invalid saved geometry falls back to a safe visible position.
* All primary operations have keyboard alternatives.

## 6.5 Virtual workspaces

Implement application-level workspaces with:

* Create, rename, switch, and delete.
* Workspace thumbnails.
* Assign applications to workspaces.
* Move windows between workspaces.
* Per-workspace pinned applications.
* Optional workspace wallpapers.
* Workspace transition animations.
* Keyboard shortcuts.
* Restore the previous workspace after restart.

Do not claim that these are actual Windows virtual desktops unless the implementation uses a verified native Windows capability.

## 6.6 File Explorer

Implement a safe application file manager with:

* Folder creation.
* File creation.
* Rename.
* Copy.
* Move.
* Duplicate.
* Delete.
* Search.
* Sorting.
* Filtering.
* Grid and list views.
* Breadcrumb navigation.
* Recent items.
* Favorites.
* File details.
* Drag-and-drop.
* Multi-select.
* Context menus.
* Safe overwrite confirmation.
* Trash/recycle behavior.
* Undo where feasible.
* Progress reporting for longer operations.
* Clear permission errors.
* Recovery after interrupted operations.

### Storage boundaries

Clearly distinguish:

1. Application-owned storage.
2. User-authorized filesystem locations.
3. Read-only protected locations.
4. Network locations.
5. Unsupported or inaccessible locations.

Use an explicit path allowlist or a user-granted access model for filesystem operations. Prevent path traversal and symlink/junction escapes where applicable.

Never recursively delete a directory without an explicit, understandable confirmation.

## 6.7 Notes and documents

Implement:

* Create, read, update, and delete.
* Autosave with visible save status.
* Search.
* Tags.
* Favorites.
* Sorting and filtering.
* Pinning.
* Archive.
* Trash and recovery.
* Markdown support.
* Word and character counts.
* Last-edited information.
* Keyboard shortcuts.
* Import/export.
* Conflict handling during synchronization.

Autosave must use debouncing and reliable persistence, not save every keystroke through an expensive synchronous operation.

## 6.8 Developer workspace

Provide a practical developer-focused area with:

* Project shortcuts.
* Configurable application groups.
* Multiple applications per workspace.
* Terminal launcher.
* Git status integration where safe.
* Project directory shortcuts.
* Environment information.
* API request workspace or Postman shortcut.
* Database connection configuration UI.
* Log viewer.
* Task list.
* Workspace profiles.
* Optional editor/browser/tool launch profiles.

Do not execute project scripts, terminals, package managers, or arbitrary commands automatically.

## 6.9 System applications

Prioritize useful applications:

1. File Explorer.
2. Notes.
3. Text Editor.
4. Calculator.
5. Clock.
6. Settings.
7. System Information.
8. Task Manager.
9. Notification Center.
10. Terminal Center.
11. Developer Workspace Manager.
12. Application Catalog.
13. Backup and Recovery.
14. Event and Diagnostic Viewer.

Additional utilities may include clipboard history, media controls, calendar, screenshots, image viewer, archive manager, and system resource graphs.

For each application, specify the real capabilities, permission requirements, empty states, error states, persistence behavior, and acceptance tests.

Do not build every possible utility before the core desktop shell and storage layer are reliable.

---

# 7. Expanded Features and Workflow Improvements

Add the following capabilities when they fit the current phase and can be implemented correctly.

## 7.1 Command palette

Provide a keyboard-first command palette that can:

* Search applications.
* Open settings.
* Switch workspaces.
* Create a note.
* Open a folder.
* Run approved internal commands.
* Search application data.
* Display keyboard shortcuts.
* Navigate to recent items.
* Open help and diagnostics.

Use a configurable shortcut such as `Ctrl+Shift+P`, subject to conflict checks.

The palette must show relevant command names, descriptions, shortcuts, and any required confirmation.

It must never execute arbitrary shell commands by default.

## 7.2 Global search

Provide a unified search interface with:

* Applications.
* Notes.
* Files and folders within authorized locations.
* Settings.
* Commands.
* Help articles.
* Recent items, if enabled.

Search results must be grouped by category, keyboard navigable, and understandable.

Use debouncing, cancellation of stale requests, clear loading states, and indexed local search where appropriate.

Provide privacy settings for indexed locations, search history, and recent-item tracking.

## 7.3 Quick Settings

Implement a panel for supported application and Windows controls:

* Theme.
* Animation profile.
* Sound effects.
* Volume where supported.
* Workspace selection.
* Notifications.
* Do Not Disturb.
* Performance mode.
* Accessibility shortcuts.
* Relevant system information.

Only show working controls. Unsupported system controls must be disabled with an explanation or omitted.

## 7.4 Notification Center

Provide:

* Informational, success, warning, error, and critical priorities.
* Grouping.
* Dismiss.
* Mark as read.
* Optional history.
* Per-category settings.
* Do Not Disturb.
* Accessible announcements.
* Sound preferences.
* Notification expiration where appropriate.

Critical security or data-loss warnings must not be suppressed by ordinary cosmetic notification preferences.

## 7.5 Application catalog

Provide a catalog of built-in and registered applications with:

* Application name.
* Description.
* Category.
* Icon.
* Version.
* Capabilities.
* Permission requirements.
* Status.
* Open, pin, and unpin actions.
* Help information.
* Availability and compatibility status.

Do not download or install applications without explicit user approval.

## 7.6 Backup and recovery

Implement application-data backup and restoration with:

* Manual backup.
* Configurable backup destination.
* Backup metadata.
* Version compatibility checks.
* Integrity verification.
* Restore preview.
* Confirmation before overwriting.
* Failure reporting.
* Recovery documentation.

A backup is not complete until its contents and integrity have been verified.

## 7.7 Personalization

Provide controls for:

* Wallpaper.
* Accent color.
* Theme.
* Taskbar and Dock behavior.
* Window effects.
* Workspace layouts.
* Application shortcuts.
* Sound effects.
* Notification behavior.
* Font scaling.
* Animation profile.
* Performance profile.

Persist settings and validate them on load. Invalid or missing settings must fall back to safe defaults.

---

# 8. UI/UX Design System

Build a centralized, reusable design system rather than styling every screen independently.

## 8.1 Design tokens

Create centralized tokens for:

* Backgrounds and surfaces.
* Primary, secondary, and tertiary text.
* Accent and interactive states.
* Success, warning, error, and information colors.
* Borders.
* Focus rings.
* Shadows.
* Blur.
* Corner radii.
* Spacing.
* Typography.
* Icon sizes.
* Layering and z-index.
* Animation durations.
* Easing curves.
* Sound categories.
* Disabled and loading states.

Example token structure:

```css
:root {
  --color-background: #f5f6f8;
  --color-surface: #ffffff;
  --color-surface-elevated: #ffffff;
  --color-text-primary: #202124;
  --color-text-secondary: #5f6368;
  --color-border: #d9dde3;
  --color-accent: #4267d5;
  --color-success: #21864b;
  --color-warning: #a96808;
  --color-danger: #c43c3c;

  --radius-small: 6px;
  --radius-medium: 10px;
  --radius-large: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;

  --motion-fast: 120ms;
  --motion-standard: 200ms;
  --motion-emphasized: 320ms;
}
```

These values are initial defaults, not universal requirements. Validate them against the finished interface and accessibility requirements.

## 8.2 Theme catalog

Required themes:

* Light.
* Dark.
* System.
* High Contrast.

Optional themes:

* Graphite.
* Midnight.
* Ocean.
* Forest.
* Aurora.
* Solar.
* Ubuntu-inspired.
* Minimal.
* Developer.

Optional themes must use the same semantic tokens and pass contrast testing. Avoid implementing separate, inconsistent component styles for every theme.

## 8.3 Component standards

Build reusable components for:

* Buttons.
* Icon buttons.
* Inputs.
* Search fields.
* Checkboxes.
* Radio buttons.
* Switches.
* Dropdowns.
* Tooltips.
* Menus.
* Context menus.
* Tabs.
* Cards.
* Tables.
* Dialogs.
* Drawers.
* Toasts.
* Notifications.
* Progress indicators.
* Skeletons.
* Empty states.
* Error states.
* Window title bars.
* Window controls.
* Command palette.
* Settings sections.
* Confirmation prompts.

Every interactive component must support loading, disabled, focused, hover, active, error, and keyboard states where applicable.

## 8.4 Responsive behavior

Support resizing from compact windows to large desktop displays.

* Avoid clipped controls.
* Use adaptive layouts.
* Keep important actions visible.
* Support reasonable minimum window dimensions.
* Avoid horizontal scrolling unless appropriate.
* Reflow settings panels and forms.
* Support Windows display scaling.
* Keep dialogs within visible screen bounds.

## 8.5 UX consistency

* Use the same wording for the same action everywhere.
* Make destructive actions visually distinct.
* Place primary actions predictably.
* Avoid unnecessary confirmation dialogs for reversible, low-risk actions.
* Require clear confirmation for destructive or high-impact actions.
* Preserve form data when validation fails.
* Provide useful errors rather than generic “Something went wrong” messages.
* Never show success until the operation has actually succeeded.
* Provide undo when practical.
* Explain permission requirements before asking users to grant access.

---

# 9. Advanced Animation, Motion, and Visual Effects

The application must have sophisticated, high-quality motion. Do not interpret “more animations” as permission to animate everything continuously.

**Objective: maximum perceived polish, not maximum unnecessary movement.**

## 9.1 Animation architecture

Create a centralized motion system with:

* Shared timing tokens.
* Standard easing curves.
* Reusable transitions.
* Reduced-motion support.
* Animation cancellation.
* Interruption handling.
* Performance-aware fallbacks.
* Consistent motion direction.
* State-driven animation.
* No duplicated competing animation systems.

Use CSS transitions for simple UI state changes and a vetted animation library for complex sequences only when justified.

**DEFAULT DECISION:** Prefer CSS transitions and transforms for ordinary interface motion. Introduce a library such as Framer Motion only when it provides meaningful value and is compatible with the existing architecture.

Do not add multiple animation libraries for overlapping purposes.

## 9.2 Animation profile settings

Provide four profiles:

| Profile   | Behavior                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| Minimal   | Essential feedback only; short transitions and minimal movement.                                           |
| Balanced  | Smooth everyday interactions and restrained visual effects.                                                |
| Enhanced  | Richer window, panel, workspace, and notification transitions.                                             |
| Immersive | More expressive transitions and optional ambient visual effects, subject to performance and accessibility. |

Also provide:

* Performance Mode.
* Reduced Motion.
* Disable animated backgrounds.
* Disable decorative particles.
* Disable blur.
* Disable sound effects.
* Per-category effect controls where useful.

Persist the user's selections.

## 9.3 Required motion catalog

### Desktop and window motion

* Window opening.
* Window closing.
* Minimize.
* Restore.
* Maximize.
* Resize feedback.
* Focus transitions.
* Snap-layout previews.
* Snap completion.
* Window switching.
* Workspace switching.
* Application overview entrance and exit.
* Desktop context menu.
* Window shadow and elevation transitions.

### Navigation motion

* Start menu opening and closing.
* Dock hover and focus.
* Search opening.
* Command palette opening.
* Quick Settings.
* Notification Center.
* Settings navigation.
* Tabs and segmented controls.
* Breadcrumb navigation.
* Expandable sections.
* Sidebar collapse and expansion.

### Feedback motion

* Button press.
* Toggle changes.
* Checkbox state changes.
* Save confirmation.
* Copy confirmation.
* Drag-and-drop targets.
* File movement.
* Upload and download progress.
* Validation errors.
* Toast entrance and dismissal.
* Notification arrival.
* Progress completion.
* Warning emphasis.
* Empty-state transitions.

### Productivity motion

* Note creation.
* Note saving.
* List insertion and removal.
* Grid/list view changes.
* Search result updates.
* Filter changes.
* Sort changes.
* Workspace thumbnails.
* Backup progress.
* Restore progress.
* Synchronization status changes.

## 9.4 Motion timing defaults

| Interaction                 | Default duration |
| --------------------------- | ---------------: |
| Button press                |        80–140 ms |
| Hover/focus emphasis        |       100–160 ms |
| Tooltip                     |       120–200 ms |
| Dropdown/menu               |       120–200 ms |
| Toast                       |       160–240 ms |
| Dialog                      |       160–240 ms |
| Window transition           |       180–280 ms |
| Workspace transition        |       220–360 ms |
| Complex overview transition |       250–400 ms |

**DEFAULT DECISION:** Use these as starting ranges and shorten or eliminate motion when it impedes responsiveness or accessibility.

Avoid making routine actions feel slow. Never require a user to wait for decorative animation before interacting with the interface.

## 9.5 Advanced visual effects

Provide carefully controlled effects:

* Acrylic-style surfaces.
* Frosted-glass panels.
* Layered shadows.
* Subtle depth.
* Accent-colored focus rings.
* Gradient accents.
* Adaptive wallpaper colors.
* Soft background transitions.
* Optional ambient glow.
* Lightweight particle or parallax effects.
* Contextual color feedback.
* Dynamic taskbar and Dock emphasis.
* Optional animated wallpapers, if implemented efficiently.
* Optional desktop visualizer effects that never obscure important information.

These effects must be optional where they materially affect performance, readability, or accessibility.

Do not use blur as a substitute for proper visual hierarchy. Avoid constant pulsating elements, aggressive color cycling, flashing lights, excessive neon effects, or animations that distract from work.

## 9.6 Motion implementation requirements

* Prefer `transform` and `opacity` for animation.
* Avoid repeated layout-triggering animations.
* Avoid unbounded animation loops.
* Pause decorative animations when hidden or minimized.
* Cancel stale animations during rapid interactions.
* Prevent focus and pointer behavior from becoming inconsistent during transitions.
* Support reduced-motion preferences.
* Avoid rapid flashing.
* Never use motion as the sole indication of status.
* Keep focus indicators visible.
* Avoid layout shifts.
* Ensure all animations remain usable under high DPI and display scaling.

## 9.7 Animation acceptance criteria

* Animation never blocks essential input.
* Window state remains correct if transitions are interrupted.
* Rapid clicks do not produce duplicate windows or corrupted state.
* Reduced Motion substantially removes nonessential motion.
* Performance Mode disables expensive decorative effects.
* Visual state and application state remain synchronized.
* Animations do not cause content to become inaccessible.
* No continuous animation consumes significant idle CPU without a user-visible purpose.

---

# 10. Sound Effects and Audio Experience

Create a centralized sound system with user-controlled, context-appropriate sounds.

## 10.1 Sound categories

* UI.
* Window.
* Workspace.
* Navigation.
* Notification.
* Success.
* Warning.
* Error.
* Application.
* Accessibility.
* System integration.

## 10.2 Sound behavior

Support:

* Master volume.
* Category volume.
* Mute.
* Sound theme selection.
* Preview.
* Per-category enable/disable.
* Respect for the application's audio focus and relevant operating-system preferences where possible.
* Sensible rate limiting.
* Avoidance of repeated sounds during rapid events.

Never play a loud sound automatically on application startup.

Use short, subtle sounds that complement visual feedback. Visual confirmation must always exist even when sounds are disabled.

## 10.3 Sound asset policy

* Use original, properly licensed, or explicitly permitted audio.
* Do not copy proprietary operating-system sounds without authorization.
* Store assets centrally.
* Document source and license.
* Prefer compact audio assets such as OGG or WAV when suitable.
* Use consistent perceived loudness.
* Avoid clipping and excessively high volume.
* Avoid loading a large sound library into memory unnecessarily.
* Provide silent behavior as a first-class option.
* Never use sound as the sole way to communicate an error.

## 10.4 Sound settings

Create a dedicated Sound & Effects settings page with:

* Master enable/disable.
* Master volume.
* UI sounds.
* Notification sounds.
* Success/error sounds.
* Window and workspace sounds.
* Sound theme.
* Preview buttons.
* Reset to defaults.

**DEFAULT DECISION:** Sound effects are enabled only at a restrained, nonintrusive default level, with an obvious global mute control. Do not autoplay media or promotional audio.

## 10.5 Audio acceptance criteria

* Muting disables application-generated sounds.
* Category settings persist after restart.
* Repeated events do not create overlapping audio chaos.
* Missing audio assets fail gracefully.
* Audio playback errors do not crash the application.
* Sound never replaces visible or accessible status information.

---

# 11. Authentication, Authorization, and Privacy

Implement authentication only where it provides a genuine product benefit.

## 11.1 Authentication model

Support:

* Local profile mode.
* Optional server-backed accounts.
* Signup and login for server-backed mode.
* Secure logout.
* Session expiration.
* Password reset.
* Email verification.
* Optional MFA.
* OAuth/OIDC only through a properly configured provider.
* Account recovery.
* Session revocation.
* Account deletion and data export.

**DEFAULT DECISION:** Local-first mode must work without requiring a remote account. Server-backed authentication is optional and must be explicitly configured.

Do not imply that a local application profile provides the same security as a verified remote identity provider.

## 11.2 Authorization

Use role-based access control with explicit permission scopes.

Possible roles:

* Owner.
* Administrator.
* Standard User.
* Read-only User.

Possible scopes:

* Own resources.
* Shared resources.
* Workspace.
* Organization.
* System integration capabilities.

Enforce authorization in the backend and native bridge, not only in the UI.

## 11.3 Session security

* Protect session tokens.
* Never store plaintext passwords.
* Use secure password hashing such as Argon2id when implementing password authentication.
* Rotate refresh tokens.
* Revoke sessions on logout and relevant security events.
* Set explicit expiration policies.
* Protect against brute force.
* Avoid sensitive information in logs.
* Use platform-protected credential storage when appropriate.
* Do not store privileged credentials in renderer-accessible storage.
* Handle offline authentication without bypassing authorization.

## 11.4 Privacy controls

Provide controls for:

* Recent items.
* Search history.
* Local indexing.
* Notifications.
* Telemetry, if any.
* Data export.
* Account deletion.
* Local cache clearing.
* Sync.
* Application diagnostics.

Telemetry must be disabled by default unless the user explicitly enables it or a justified, disclosed requirement is approved.

---

# 12. Persistence, Database, API, and Synchronization

## 12.1 Data architecture

Use separate layers for:

* UI.
* Domain logic.
* Application services.
* Repository interfaces.
* Local persistence.
* Remote API.
* Synchronization.
* Native Windows capabilities.

Do not couple UI components directly to database drivers.

## 12.2 Local-first behavior

Support:

* Offline startup.
* Local data access.
* Reliable autosave.
* A synchronization queue.
* Retry with backoff.
* Conflict detection.
* Conflict resolution.
* Sync status visibility.
* Recovery after interrupted synchronization.

## 12.3 SQL Server

When remote persistence is configured, use SQL Server with:

* Versioned migrations.
* Foreign keys.
* Appropriate indexes.
* Transactions.
* Parameterized queries.
* Least-privilege database accounts.
* Connection pooling.
* Timeouts.
* Secure connection configuration.
* Auditability for sensitive operations.

Never embed database credentials in source code.

Do not assume that a SQL Server instance is installed, reachable, or configured. Detect configuration issues and provide setup instructions.

## 12.4 API standards

* Version the API.
* Validate every request.
* Enforce authorization.
* Return consistent errors.
* Use pagination for collections.
* Use idempotency for operations that may be retried.
* Apply rate limiting to sensitive endpoints.
* Use structured logging with secret redaction.
* Document request and response schemas.
* Use explicit timeout and cancellation behavior.

Example error structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid fields.",
    "requestId": "non-sensitive-correlation-id",
    "details": []
  }
}
```

## 12.5 Synchronization

Implement:

* Pending.
* Syncing.
* Synced.
* Conflict.
* Failed.
* Offline.

Resolve conflicts according to resource type. Do not silently overwrite a user's newer changes.

Provide conflict-resolution UI with enough information for users to choose the correct version.

---

# 13. Windows Integration and Safety

## 13.1 Native integration architecture

Use a narrow, documented interface for Windows operations.

Possible integration areas:

* System information.
* Processes.
* Displays.
* Audio devices.
* Battery.
* Network.
* Launching approved applications.
* User-authorized filesystem operations.
* Power information.
* Notifications.
* File associations, if explicitly approved.

For each capability, document:

* Windows API or native method.
* Required privilege.
* Read-only or writable status.
* Supported Windows versions.
* Fallback behavior.
* Error behavior.
* Privacy impact.
* Whether the capability is simulated or integrated.

## 13.2 Default restrictions

* Prefer read-only access.
* Never auto-elevate.
* Never disable Windows security protections.
* Never silently change the registry.
* Never silently stop services.
* Never change power plans automatically.
* Never terminate arbitrary processes.
* Never execute arbitrary shell commands.
* Never change firewall rules or network configuration automatically.
* Never delete user files as part of optimization.
* Never install a driver or service without approval.

## 13.3 Native bridge security

* Expose only required functions.
* Validate all arguments.
* Enforce explicit capability permissions.
* Restrict filesystem access.
* Use a strict subprocess allowlist.
* Use structured argument arrays rather than shell-string construction.
* Avoid shell execution unless specifically justified and approved.
* Prevent command injection.
* Return structured errors.
* Apply operation timeouts.
* Log security-relevant operations without recording secrets.
* Ensure the renderer cannot access arbitrary Node.js or operating-system APIs.

---

# 14. Accessibility and Internationalization

## 14.1 Accessibility

Target WCAG 2.2 AA for applicable interface content.

Requirements:

* Keyboard access to all essential features.
* Visible focus indicators.
* Logical focus order.
* Correct accessible names and roles.
* Screen-reader-friendly dialogs and menus.
* Sufficient contrast.
* Scalable text.
* No color-only status communication.
* Reduced-motion support.
* Accessible notifications.
* Error messages associated with the relevant controls.
* Focus restoration after dialogs close.
* Keyboard-accessible drag-and-drop alternatives.

Use automated accessibility tests plus manual keyboard and screen-reader review.

## 14.2 Internationalization

Use a localization-ready architecture from the beginning.

* Keep user-facing strings out of business logic.
* Support locale-aware dates, numbers, and time.
* Store timestamps in UTC where appropriate and display them in the user's selected time zone.
* Design layouts to accommodate longer translations.
* Support right-to-left layout where implemented.
* Use properly licensed fonts with fallback stacks.
* Avoid concatenating translated strings in fragile ways.
* Provide text alternatives for audio feedback.

**DEFAULT DECISION:** Begin with English. Structure the application so Urdu and other languages can be added without architectural rewrites. Do not claim complete RTL support until it has been implemented and tested.

---

# 15. Performance and Reliability

## 15.1 Performance budgets

Use these initial targets as engineering budgets, not as grounds to sacrifice security or reliability.

| Metric                            | Initial target                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| Warm startup to interactive shell | Within 3 seconds on reference hardware                                              |
| Cold startup                      | Within 5 seconds on reference hardware                                              |
| Idle CPU                          | Typically below 2% on reference hardware when truly idle                            |
| Idle memory                       | Target below 400 MB for the application shell, excluding separately managed helpers |
| Routine interaction               | Usually responds within 100 ms                                                      |
| Animation                         | Target 60 FPS on capable hardware                                                   |
| Frame-time stability              | Avoid repeated frames above 33 ms during ordinary transitions                       |
| Renderer bundle                   | Aim for a compressed initial JavaScript bundle below 1 MB where practical           |
| Sound and decorative assets       | Load on demand; avoid unnecessarily large initial payloads                          |
| Search                            | Return initial local results quickly and avoid blocking the UI                      |
| Large file operations             | Use progress reporting and nonblocking execution                                    |

Measure actual performance on documented hardware. Record deviations rather than claiming targets were achieved without evidence.

## 15.2 Performance behavior

* Lazy-load secondary applications.
* Split bundles where appropriate.
* Avoid excessive re-rendering.
* Use virtualized lists for large collections.
* Debounce search.
* Cancel stale requests.
* Avoid unnecessary background polling.
* Cache only when invalidation is understood.
* Release listeners and resources.
* Stop decorative animations when not visible.
* Avoid loading every sound, wallpaper, or application asset at startup.
* Provide a low-resource mode.

## 15.3 Reliability

* Handle expected errors explicitly.
* Prevent duplicate actions during pending operations.
* Make writes transactional where appropriate.
* Preserve user data after crashes.
* Validate saved state.
* Support recovery from corrupted settings.
* Avoid unhandled promise rejections.
* Use structured diagnostics.
* Provide a clear recovery process.

## 15.4 Supported platform

**DEFAULT DECISION:** Prioritize Windows 11 x64 first. Support Windows 10 only if the selected runtime, dependencies, and lifecycle requirements remain compatible. Evaluate ARM64 separately.

Document the minimum Windows build, architecture, runtime requirements, display scaling assumptions, and GPU/WebView2 dependencies before claiming support.

---

# 16. Testing and Test Execution Authorization Gate

## 16.1 Mandatory authorization boundary

The instruction not to run the application takes precedence over the convenience of testing.

### Allowed without additional approval

Provided the necessary tools are already available and no installation or system modification is required:

* Read source files.
* Inspect Git status and diffs.
* Review configuration.
* Perform static analysis.
* Run available lint commands.
* Run available type checks.
* Run safe, isolated unit tests that do not launch the app, start a server, access real services, or modify the system.
* Validate JSON and other static configuration.
* Review dependency declarations without installing packages.
* Review SQL migration files without executing them.
* Inspect generated files.
* Perform security and accessibility source reviews.

If a command could launch the app, start a server, execute a migration, or modify the environment, do not run it under the assumption that it is harmless.

### Requires explicit user authorization

* Installing or updating dependencies.
* Launching the application.
* Starting a development server.
* Running E2E tests that launch the app.
* Running browser automation against the live application.
* Applying database migrations.
* Modifying Windows.
* Installing or registering a native helper.
* Building or running installers if the process launches code or modifies the system.
* Accessing external accounts or production systems.
* Deploying, publishing, or releasing.
* Running tests that modify shared data or real services.

## 16.2 Test strategy

Create:

* Unit tests.
* Integration tests.
* API contract tests.
* Repository and persistence tests.
* Authorization tests.
* Input-validation tests.
* IPC security tests.
* Accessibility tests.
* Visual regression tests.
* E2E tests.
* Performance tests.
* Recovery tests.
* Windows compatibility tests.

Write the tests and document how they should be run, but do not execute tests that cross the authorization boundary.

## 16.3 Coverage targets

**DEFAULT DECISION:**

* Critical security and authorization logic: full branch review, with tests for every identified security boundary.
* Core domain logic: target at least 80% meaningful statement coverage.
* Other business logic: target at least 70% meaningful statement coverage.
* UI components: test meaningful user interactions, keyboard behavior, and error states rather than chasing a coverage percentage.
* Every destructive operation: include safety and failure-path tests.
* Every feature marked complete: include acceptance criteria and test evidence.

Coverage numbers alone do not prove quality.

## 16.4 Test data

* Use synthetic data.
* Never use production credentials.
* Never use real customer data without explicit authorization.
* Keep test fixtures deterministic.
* Ensure test cleanup does not delete user data.
* Use isolated databases or in-memory substitutes where suitable.
* Make destructive test scope explicit.

---

# 17. Git Workflow and Implementation Discipline

## 17.1 Mandatory Git commits

Every meaningful implementation unit must be committed.

Examples:

* `feat(shell): implement desktop navigation`
* `feat(window-manager): add snapping and restore behavior`
* `feat(workspaces): persist workspace configuration`
* `feat(notes): implement autosave and recovery`
* `feat(motion): add reduced-motion support`
* `feat(sound): add centralized sound preferences`
* `fix(files): prevent unsafe path traversal`
* `test(auth): cover authorization boundaries`
* `docs(brain): record architecture and progress`

## 17.2 Required workflow

For each meaningful unit:

1. Inspect the repository.
2. Review existing changes.
3. Identify scope and dependencies.
4. Implement a focused change.
5. Perform permitted static validation.
6. Review the diff.
7. Check for secrets and unrelated changes.
8. Update `brain.md`.
9. Update `IMPLEMENTATION_STATUS.md`.
10. Update tests and documentation.
11. Create a meaningful Git commit.
12. Record the commit in the engineering memory.
13. Continue to the next unit.

Do not commit secrets, local databases, user files, unnecessary build artifacts, generated credentials, or machine-specific configuration.

Do not overwrite uncommitted user changes.

Never use destructive Git operations, force-push, rewrite shared history, or delete remote branches without explicit authorization.

If signing is configured and safe to use, sign commits. If signing is unavailable, document the limitation rather than fabricating a signature.

---

# 18. Phased Implementation Roadmap

Implement in phases. Do not attempt to create every feature in one enormous unverified change.

## Phase 0 — Discovery and baseline

* Inspect the repository.
* Identify the current stack.
* Review existing implementation.
* Identify missing requirements.
* Inspect Git status.
* Document assumptions.
* Create or update `brain.md`.
* Establish the implementation roadmap.

**Exit criteria:** Existing state and constraints are understood, with no unapproved execution.

## Phase 1 — Architecture and contracts

* Confirm desktop shell.
* Define module boundaries.
* Define state and persistence.
* Define IPC.
* Define permission boundaries.
* Define error handling.
* Document data contracts.
* Define application registry and command registry.
* Establish threat model.

**Exit criteria:** Architecture is documented and internally consistent.

## Phase 2 — Design system

* Design tokens.
* Theme system.
* Typography.
* Iconography.
* Components.
* Accessibility defaults.
* Motion tokens.
* Sound service.
* Visual regression baseline strategy.

**Exit criteria:** Shared design components and guidelines exist.

## Phase 3 — Desktop shell

* Desktop.
* Start menu.
* Taskbar/Dock.
* Application launcher.
* Search.
* Context menus.
* Notifications.
* Quick Settings.

**Exit criteria:** Core navigation is coherent and functional.

## Phase 4 — Window manager

* Window lifecycle.
* Focus.
* Minimize/restore.
* Maximize.
* Resize.
* Snapping.
* Keyboard navigation.
* Motion integration.

**Exit criteria:** Window state and interactions are reliable.

## Phase 5 — Workspaces

* Create, rename, switch, and delete.
* Application assignments.
* Workspace persistence.
* Overview transitions.
* Recovery of invalid workspace state.

**Exit criteria:** Workspaces survive application restart when persistence is available.

## Phase 6 — Application registry

* Manifest schema.
* Registration.
* Capabilities.
* Permission checks.
* Application lifecycle.
* Launch error handling.

**Exit criteria:** Applications are registered and invoked through a consistent interface.

## Phase 7 — Storage and productivity

* Local persistence.
* File Explorer.
* Notes.
* Text Editor.
* Search.
* Backup and recovery foundations.

**Exit criteria:** Data operations are reliable and tested within authorized boundaries.

## Phase 8 — Authentication and authorization

* Local profile.
* Optional server authentication.
* Session management.
* RBAC.
* Account recovery.
* Security testing.

**Exit criteria:** Authentication and permissions have documented behavior and test coverage.

## Phase 9 — Database and API

* SQL schema.
* Versioned migrations.
* API contracts.
* Validation.
* Error catalog.
* Transactions.
* Audit events.

**Exit criteria:** Contracts and implementation are consistent. Migrations remain unexecuted until authorized.

## Phase 10 — Offline and synchronization

* Sync queue.
* Retry behavior.
* Conflict detection.
* Conflict-resolution UI.
* Offline indicators.

**Exit criteria:** Offline and conflict behavior are documented and covered by tests.

## Phase 11 — Windows integration

* Capability detection.
* Read-only system information.
* Approved application launching.
* Optional audio, display, network, and power integrations.
* Permission and failure handling.

**Exit criteria:** Each integration has documented privilege requirements and a verified fallback.

## Phase 12 — System applications

* Settings.
* System Information.
* Task Manager.
* Terminal Center.
* Developer Workspace Manager.
* Other prioritized utilities.

**Exit criteria:** Each delivered application performs its advertised actions.

## Phase 13 — Visual polish

* Animation refinement.
* Sound effects.
* Advanced visual effects.
* Theme refinement.
* Keyboard polish.
* Empty and error states.
* Accessibility improvements.

**Exit criteria:** Motion, sound, and effects meet performance and accessibility requirements.

## Phase 14 — Quality and security

* Static validation.
* Authorized tests.
* Security review.
* Performance review.
* Accessibility review.
* Recovery review.
* Visual regression review.

**Exit criteria:** Findings are documented and no unresolved critical issue is concealed.

## Phase 15 — Packaging and release preparation

* Packaging configuration.
* Versioning.
* Installer design.
* Signing plan.
* Update architecture.
* Uninstall behavior.
* Release notes.
* Release checklist.

**Exit criteria:** Release configuration is documented and prepared. Do not publish or install without authorization.

## Phase 16 — Final review

* Review requirements against implementation.
* Review Git history.
* Review documentation.
* Verify the status of all claims.
* Record remaining work.
* Produce the final engineering report.

**Exit criteria:** The report accurately distinguishes completed, tested, partial, blocked, and untested features.

---

# 19. Definition of Done

A feature is complete only when all applicable requirements are satisfied:

1. The implementation meets the documented acceptance criteria.
2. The UI matches the design system.
3. Loading, empty, success, and error states are handled.
4. Keyboard navigation is supported for essential interactions.
5. Accessibility has been reviewed.
6. Permissions and data boundaries are enforced.
7. Relevant tests have been written.
8. Permitted tests have been run, with results recorded.
9. Unauthorized tests have not been run.
10. Error handling and recovery are considered.
11. Documentation has been updated.
12. `brain.md` has been updated.
13. `IMPLEMENTATION_STATUS.md` has been updated.
14. The Git diff has been reviewed.
15. No secrets have been committed.
16. A meaningful Git commit has been created.
17. Known limitations are disclosed.

If testing is blocked by the authorization rules, label the feature accordingly. Do not misrepresent untested functionality as fully verified.

---

# 20. Release, Packaging, and Licensing

## 20.1 Packaging

Evaluate:

* Per-user versus per-machine installation.
* Signed Windows installer.
* Application updates.
* Rollback.
* Uninstallation.
* Data retention and deletion options.
* Repair installation.
* Version compatibility.
* Windows Defender and SmartScreen considerations.
* Architecture-specific packages.

**DEFAULT DECISION:** Prefer a per-user Windows installer for initial distribution unless requirements justify an alternative. Evaluate MSIX, MSI, EXE, or portable packaging against the actual application architecture.

Do not build or execute an installer without the relevant authorization.

## 20.2 Update security

* Verify update signatures.
* Use authenticated transport.
* Protect update metadata.
* Avoid unsigned arbitrary downloads.
* Preserve user data.
* Support recovery from failed updates.
* Make release channels explicit.
* Never deploy an update silently without an approved policy.

## 20.3 Licensing

Review licenses for:

* Dependencies.
* Icons.
* Fonts.
* Sounds.
* Wallpapers.
* Illustrations.
* Native helpers.
* Bundled executables.

Maintain a software bill of materials and third-party attribution record.

Do not claim legal compliance without performing the required review. Terms of service, privacy policy, and data-processing documentation must reflect the actual product behavior and applicable requirements.

---

# 21. Risk Register and Decision Log

Maintain `docs/RISK_REGISTER.md`.

For each risk, record:

* Risk ID.
* Description.
* Likelihood.
* Impact.
* Severity.
* Mitigation.
* Owner.
* Status.
* Review date.

Prioritize:

* Data loss.
* Unauthorized system modification.
* Privilege escalation.
* Credential leakage.
* IPC abuse.
* Command injection.
* Dependency vulnerabilities.
* Synchronization conflicts.
* Untrusted plugin execution.
* Resource exhaustion.
* Update compromise.
* Incorrect claims about Windows integration.

Maintain `docs/DECISIONS.md` with:

```markdown
## DEC-001: Example decision title

- Status: Accepted
- Date: YYYY-MM-DD
- Context:
- Decision:
- Alternatives:
- Rationale:
- Security implications:
- Performance implications:
- Reversibility:
- Approval required:
```

Do not silently reverse architectural decisions. Document why a decision changed.

---

# 22. Final Operating Instructions to Antigravity

Before starting:

1. Read this prompt completely.
2. Inspect the existing repository.
3. Check Git status and preserve existing changes.
4. Identify the existing implementation and missing functionality.
5. Create or update `brain.md`.
6. Create or update the Assumptions Register.
7. Document the initial risk assessment.
8. Update `IMPLEMENTATION_STATUS.md`.
9. Select the first coherent implementation unit.
10. Begin implementation without unnecessary clarification questions.

During development:

* Prefer working vertical slices.
* Keep the architecture maintainable.
* Make UI and UX improvements consistent across the product.
* Add sophisticated animations and visual effects only through the centralized motion system.
* Add sound effects only through the centralized sound system.
* Keep effects configurable and performance-aware.
* Test state transitions, data persistence, errors, and permissions.
* Do not leave misleading placeholders.
* Do not claim unsupported operating-system integration.
* Update documentation and `brain.md`.
* Create meaningful Git commits after every implementation unit.
* Preserve the user's uncommitted work.
* Stop before any operation requiring explicit authorization.

When blocked:

* State the exact blocker.
* Record what has been completed.
* Identify what requires approval or unavailable tooling.
* Continue with independent, safe work where possible.

## Final response requirements

At the end of an authorized implementation session, provide:

1. Summary of completed work.
2. Features implemented.
3. Features partially implemented.
4. Features not implemented.
5. Tests written.
6. Tests actually run and their results.
7. Tests not run because authorization was required.
8. Security and accessibility findings.
9. Performance observations and unverified targets.
10. Files created or changed.
11. Git commits created.
12. Current contents/status of `brain.md`.
13. Known issues and technical debt.
14. Next recommended implementation unit.
15. Explicit statement confirming that the application was not launched, dependencies were not installed, and system-changing operations were not performed unless specifically authorized.

Never fabricate test results, commits, performance measurements, or completed functionality.

# 23. Final Mandatory Directive

**ANTIGRAVITY: BUILD A REAL, COHESIVE, SECURE, HIGH-QUALITY PRODUCT. DO NOT MAKE MISTAKES.**

Use Windows 11 for familiarity, macOS for refinement, and Ubuntu/Linux for workspace and developer productivity inspiration. Create an original identity rather than a superficial clone.

Deliver excellent UI and UX, reliable application behavior, purposeful advanced animations, tasteful visual effects, optional sound feedback, responsive layouts, accessibility, secure storage, robust error handling, and maintainable code.

Do not confuse more features with better software. Prioritize complete functionality, consistent behavior, performance, and data safety.

Do not ask me what to build next when the roadmap already provides the next safe step.

Do not make high-risk assumptions.

Do not execute, install, launch, migrate, deploy, elevate, or modify Windows without the appropriate explicit authorization.

**Record decisions in `brain.md`. Review each meaningful change. Commit each meaningful implementation unit to Git.**

Begin with Phase 0, inspect the repository, establish the baseline, and proceed one verified implementation unit at a time.

---

# Appendix A — Revision Notes

This edition consolidates the previous product requirements and expands the specification to make the expected implementation behavior clearer.

1. **Feature expansion:** Added command palette, global search, workspace-aware application behavior, Quick Settings, notification management, application catalog, developer workspace features, personalization, and backup/recovery workflows.

2. **UI/UX improvement:** Added centralized design tokens, reusable components, responsive layout rules, interaction-state standards, keyboard-first navigation, and consistent loading, empty, success, and error states.

3. **Advanced animations:** Added a motion architecture, animation profiles, detailed window/navigation/productivity motion catalogs, timing defaults, interruption handling, reduced-motion support, and measurable performance expectations.

4. **Visual effects:** Added configurable acrylic-style surfaces, depth, shadows, accent effects, optional particles, parallax, and animated backgrounds, with safeguards against excessive movement and GPU use.

5. **Sound effects:** Expanded sound categories, centralized settings, volume controls, preview, licensing, rate limiting, muted behavior, and accessibility requirements.

6. **Product functionality:** Clarified that application controls must perform their advertised actions and that simulated capabilities must not be presented as real Windows operations.

7. **Decision governance:** Added explicit autonomy boundaries and documented defaults, with approval requirements for destructive, system-modifying, external, and otherwise high-risk actions.

8. **Engineering memory:** Strengthened `brain.md` requirements and introduced a structured Assumptions Register, decision log, risk register, and implementation-status tracking.

9. **Safety:** Preserved the prohibition on launching the application, installing dependencies, executing migrations, or modifying Windows without explicit authorization.

10. **Git discipline:** Clarified the review, validation, documentation, and meaningful-commit workflow while prohibiting destructive Git operations and accidental inclusion of secrets.

11. **Performance and accessibility:** Added measurable initial budgets and criteria for reduced motion, keyboard behavior, scalable interfaces, and resource-aware effects.

12. **Implementation governance:** Added phase exit criteria, a Definition of Done, explicit final-report requirements, and rules against fabricated test results or unsupported completion claims.

13. **Contradiction resolution:** Clarified that permission to write tests does not imply permission to execute tests that launch the app, install dependencies, access live services, or modify the system.

14. **Scope control:** Established a phased roadmap so additional features do not undermine the reliability of the desktop shell, window manager, persistence, or security foundations.

15. **Default technology decisions:** Established a default Electron, React, TypeScript, Fastify, Zustand, SQLite, and optional SQL Server architecture while preserving justified alternatives and avoiding unnecessary migration of existing working code.

16. **Release and licensing:** Clarified installer, update, signing, packaging, dependency-license, and data-handling requirements without authorizing actual publication or deployment.

17. **Quality over quantity:** Clarified that “more animations” means richer, better-designed motion rather than constant movement or effects that impair usability.

18. **Implementation status honesty:** Features that are coded but untested, blocked by authorization, partially implemented, or unsupported must remain explicitly classified rather than being reported as complete.

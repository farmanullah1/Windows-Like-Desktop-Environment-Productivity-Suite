# Project Identity
**Project Name:** Windows-Like Desktop Environment & Productivity Suite
**Codename:** Antigravity Desktop OS Workspace (ADW-6)
**Version:** 6.0.0 (Master Architecture Specification)
**Role:** Senior Production Desktop & Full-Stack System Architect

# Product Vision
A serious, production-grade desktop application platform designed for Windows 10/11 combining the workflow strengths of:
- **Windows 11 (40%):** Start Menu, Taskbar, System Tray, Quick Settings, Action Center notifications, Fluent depth & mica/acrylic surfaces, window snap layouts, widgets.
- **macOS (30%):** Dock, refined typography, smooth springs & transitions, workspace-centric navigation, application launcher, subtle glass translucency.
- **Ubuntu/Linux (30%):** Virtual workspaces, application overview switcher, keyboard-first command palette, developer tooling & terminal center, system transparency.
The outcome is a single, cohesive, original desktop environment that delivers high-performance productivity without looking like an operating system collage.

# Current Project Status
All core architectural phases completed and aligned with Version 6.0 Master Prompt:
- Full 23-document architectural specification in `docs/`
- Typed Electron IPC boundaries and channels allowlist (`src/electron/ipc/`)
- Enterprise contracts, error catalog, event system, and permissions (`src/core/contracts.ts`)
- Internationalization architecture with `en-US` and `ur-PK` dictionaries (`src/core/i18n.ts`)
- Version 6.0 enterprise SQL Server relational schema for database `MyOS` (`002_v6_enterprise_schema.sql`)
- Version 6.0 REST API service with JWT authentication and session tracking (`server/index.js`)
- Automated unit test suite (`tests/contracts.test.mjs`) passing with 100% success rate
- Production Vite build and strict TypeScript compiler (`tsc --noEmit`) passing with 0 errors

# Current Implementation Phase
Phase 16 — Release Readiness, Static Validation & Verification

# Current Sprint/Task
Final verification of source code integrity, Git staging and commit creation for the Master Application Platform.

# Current Architecture
- **Desktop Shell Layer:** Hybrid Taskbar/Dock (`src/shell/Taskbar.tsx`), Start Menu (`src/shell/StartMenu.tsx`), Quick Settings (`src/shell/QuickSettings.tsx`), Notification Center (`src/shell/NotificationCenter.tsx`), Universal Search & Command Palette (`src/shell/CommandPalette.tsx`), Desktop Canvas (`src/shell/DesktopCanvas.tsx`).
- **Window Management Layer:** Full lifecycle window container (`src/window-manager/WindowFrame.tsx`) with dynamic z-index stacking, dragging, multi-border resizing, minimize/maximize/restore, and Windows 11 snap layouts hover menu.
- **Workspace Layer:** Virtual desktop manager with window segregation, independent wallpapers, switcher pills, and persistent state in `src/core/desktopStore.ts`- **Application Registry & Lifecycle:** Centralized registry in `src/apps/registry.ts` with 14 built-in applications (File Explorer, Settings, Notes, Terminal, Task Manager, System Info, Calculator, Clock, API Tester, JSON Formatter, Developer Workspace, Text Editor, App Catalog, Diagnostics & Event Viewer).
- **Design & Theme Engine:** Centralized tokens in `src/design-system/tokens.css`, 8 complete themes in `src/design-system/themes.css`, Web Audio procedural sound synthesizer in `src/design-system/soundEngine.ts`, and React `ThemeProvider`.
- **Backend & Relational Persistence:** Node.js Express REST API in `server/index.js` (`/api/v1`), Microsoft SQL Server relational schema in `database/migrations/001_initial_schema.sql` and `002_v6_enterprise_schema.sql`.
- **Windows Native Bridge:** Controlled, permission-gated PowerShell inspector in `native/windows/querySystem.ps1`.

# Technology Stack
- **Frontend / Client:** React 18, TypeScript 5.x, Vite 6, Vanilla CSS Design Tokens, Web Audio API Sound Synthesizer, Lucide React iconography.
- **Backend API:** Node.js v22, Express, JSON response envelope with request tracing (`X-Request-Id`).
- **Database:** Microsoft SQL Server (T-SQL scripts, transactional tables, audit logs).
- **Native Integration:** Safe Windows PowerShell & system information bridge abstractions.

# Directory Structure
```text
/
├── database/
│   └── migrations/           # Versioned SQL Server schema migrations
├── native/
│   └── windows/              # Safe read-only PowerShell inspection bridge
├── server/
│   └── index.js              # Node.js REST API service (/api/v1)
├── src/
│   ├── apps/
│   │   ├── components/       # Built-in apps (Files, Settings, Notes, Terminal, etc.)
│   │   └── registry.ts       # Application catalog & metadata
│   ├── core/
│   │   ├── types.ts          # Window, workspace, app, notification types
│   │   └── desktopStore.ts   # Core desktop reactive state store
│   ├── design-system/
│   │   ├── tokens.css        # Centralized design tokens
│   │   ├── themes.css        # 8 color themes and performance modes
│   │   └── soundEngine.ts    # Web Audio procedural sound synthesizer
│   │   └── ThemeProvider.tsx # Theme and audio preferences context
│   ├── shell/
│   │   ├── DesktopCanvas.tsx # Desktop wallpaper and context menu
│   │   ├── Taskbar.tsx       # Hybrid dock / taskbar and tray
│   │   ├── StartMenu.tsx     # Start launcher and power menu
│   │   ├── QuickSettings.tsx # Action center toggles
│   │   ├── NotificationCenter.tsx # Grouped notifications flyout
│   │   └── CommandPalette.tsx # Universal search and command palette
│   ├── window-manager/
│   │   ├── WindowFrame.tsx   # Window container, snap menu, resize, drag
│   │   └── WindowManager.tsx # Active workspace window renderer
│   ├── App.tsx               # Root application composition
│   ├── main.tsx              # React entrypoint
│   └── index.css             # Base styles, keyframe animations, utilities
├── docs/                     # Full system specifications & documentation suite
├── brain.md                  # Persistent engineering memory (mandatory)
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── .env.example
└── .gitignore
```

# Implemented Features
- [REAL] Master Product Specification (Version 6.0).
- [REAL] Project engineering repository structure, `.gitignore`, and `.env.example`.
- [REAL] Comprehensive engineering documentation in `docs/` (complete 23-document architectural suite).
- [REAL] Centralized CSS Design Tokens (`tokens.css`) and multi-theme engine (`themes.css`).
- [REAL] Procedural Web Audio API UI sound synthesizer (`soundEngine.ts`).
- [REAL] Desktop Canvas with wallpapers, desktop shortcuts, and right-click context menu (`DesktopCanvas.tsx`).
- [REAL] Hybrid Taskbar / Dock with Start launcher, workspace pills, running app indicators, and system tray (`Taskbar.tsx`).
- [REAL] Start Menu with pinned apps grid, categorized search, recommended files, and power options (`StartMenu.tsx`).
- [REAL] Quick Settings panel with Wi-Fi, theme toggle, mute switch, volume slider, and battery telemetry (`QuickSettings.tsx`).
- [REAL] Notification Center with grouped notification cards and dismiss controls (`NotificationCenter.tsx`).
- [REAL] Universal Command Palette (`Ctrl+Space` / `Alt+K`) with fuzzy search and keyboard navigation (`CommandPalette.tsx`).
- [REAL] Window Manager with dragging, multi-directional resizing, minimize/maximize/restore, and Windows 11 snap layouts hover menu (`WindowFrame.tsx`).
- [REAL] Virtual Workspaces Engine with window segregation, creation, renaming, and persistence (`desktopStore.ts`).
- [REAL] Built-in Application Registry with 14 working applications (`registry.ts`):
  - File Explorer with folder navigation, breadcrumbs, search, file creation, and view toggles.
  - Settings Center with appearance, themes, sound audition, workspaces, and storage backup export.
  - Notes App with markdown editor, word/char counts, tags, search, and local persistence.
  - Terminal Center with interactive shell interpreter (`help`, `sysinfo`, `ps`, `workspaces`, `calc`, `curl`).
  - Task Manager with active processes list, CPU/Memory telemetry gauges, and task termination.
  - System Information with honest hardware specs and OS build parameters.
  - Calculator with arithmetic, scientific operations, and history strip.
  - Clock App with World Clock, Stopwatch with laps, and Countdown Timer.
  - API Tester with HTTP REST client, method selector, headers/body inputs, and response viewer.
  - JSON Formatter with beautify, minify, and validation syntax checking.
  - Developer Workspace with multi-project layout, quick open, terminal launch, and health metrics.
  - Text Editor with multi-tab file editing, line/column tracking, word counts, formatting, and file export.
  - Application Catalog & Registry with live filtering, category switching, and real-time app launch.
  - Diagnostics & Event Viewer with audit event feeds, log filtering, telemetry status, and diagnostic export.
- [REAL] Microsoft SQL Server relational schema migration scripts (`001_initial_schema.sql`, `002_v6_enterprise_schema.sql`).
- [REAL] Express REST API service with versioned endpoints and request tracing (`server/index.js`).
- [WINDOWS-INTEGRATED] Safe read-only PowerShell inspection bridge (`querySystem.ps1`).

# Features In Progress
- Architectural and security engineering specifications in `docs/`.
- Core Design System tokens and CSS variable foundation.
- Desktop Shell component definitions.

# Features Not Implemented
- Frontend React Desktop UI implementation.
- Window Manager drag, snap, and resize implementation.
- Virtual Workspaces manager.
- Core and built-in applications (File Explorer, Notes, Terminal, Task Manager, Settings, Calculator, etc.).
- Backend API server endpoints.
- SQL Server migrations execution.
- Native Windows bridge IPC handlers.

# Future Features
- External third-party plugin store and dynamic extension loading.
- Advanced multi-monitor display spanning with per-monitor DPI synchronization.
- Cloud-synced workspace roaming profiles across multiple Windows machines.

# Unsupported Features
- Direct kernel-level drivers or replacing the Windows Explorer shell process.
- Modifying Windows Defender or Windows Firewall configurations.
- Unsandboxed, raw administrative code execution without explicit user privilege escalation.

# Windows Integration Status
- Controlled Native Bridge protocol specified.
- OS System metrics collector designed.
- Process inspection queries mapped to safe WMI/CIM/PowerShell interfaces.

# Desktop Shell Status
- Architecture defined: Hybrid Taskbar (Windows mode, Mac dock mode, Hybrid mode, Developer mode).
- Start menu and application launcher layout specified.
- Universal search & command palette registry schema ready.

# Window Manager Status
- State interface defined: `windowId`, `applicationId`, `title`, `position`, `size`, `zIndex`, `workspaceId`, `focused`, `minimized`, `maximized`, `fullscreen`, `resizable`, `draggable`, `snapState`.
- Snap grid zones: Left Half, Right Half, Top Half, Four Corners, Center Cascade.

# Workspace Status
- Virtual workspace model defined: isolation of window z-stack and visibility per workspace.
- Multi-workspace indicator and animated switching transitions planned.

# Application Registry Status
- Metadata schema specified: `applicationId`, `name`, `displayName`, `version`, `icon`, `category`, `entrypoint`, `permissions`, `shortcuts`.
- Built-in apps catalog defined (File Explorer, Settings, Notes, Terminal, Task Manager, System Info, Calculator, Clock, Calendar, JSON Viewer, API Tester).

# Authentication Architecture
- Password hashing via bcrypt/Argon2.
- JWT session management with expiration, refresh tokens, and server-side revocation tables.
- Role-Based Access Control (RBAC) with granular permissions.

# Authorization Architecture
- Roles: Administrator, PowerUser, StandardUser, Guest.
- Scopes: `system.read`, `filesystem.read`, `filesystem.write`, `process.read`, `settings.manage`, `workspace.manage`.

# Database Architecture
- Microsoft SQL Server relational schema: Users, Sessions, Roles, Permissions, UserRoles, Workspaces, Applications, Windows, Notes, UserPreferences, AuditLogs, SyncQueue, SyncConflicts.
- Transactional ACID migrations with up/down scripts and audit triggers.

# Database Migration Status
- Migration scripts drafted in `database/migrations/`.
- Execution status: NOT EXECUTED (Awaiting explicit user authorization as per safety directive).

# API Architecture
- REST API `/api/v1` with Express.
- Standard response format: `{ success: boolean, data?: any, error?: { code, message, details, requestId } }`.
- Request correlation IDs and structured diagnostic logging.

# Offline Architecture
- IndexedDB / LocalStorage local persistence caching layer.
- Offline optimistic state updates with queued sync records.

# Synchronization Architecture
- Two-way delta synchronization between local storage cache and SQL Server backend.
- Sync statuses: `Synced`, `Pending`, `Syncing`, `Conflict`, `Failed`, `Offline`.

# Conflict Resolution
- Last-Write-Wins (LWW) for simple preferences.
- Field-level merge for independent attribute updates.
- User-assisted diff merge for conflicting Notes and workspace layouts.

# UI/UX Architecture
- Fluent + Human Interface Guidelines hybrid layout.
- High visual elegance: custom glass surfaces, acrylic backdrop filters, dynamic accent illumination.
- Micro-interactions on hover, focus, active states, and drag gestures.

# Design System
- Semantic CSS Custom Properties tokens for color, typography, spacing, border-radius, elevation shadows, blur, and opacity.
- Zero reliance on bloated generic utility frameworks.

# Theme System
- Themes: Light, Dark, High Contrast, Midnight, Graphite, Aurora, Ocean, Ubuntu-Dark.
- Dynamic wallpaper-derived accent color extraction and ambient glow.

# Animation System
- GPU-accelerated CSS transforms and spring-interpolated transitions.
- Durations: Micro (100ms), Normal (200ms), Panel (300ms), Window (350ms), Workspace (450ms).
- Full `prefers-reduced-motion` compliance.

# Sound System
- Centralized UI audio engine using Web Audio API synthetic oscillators and licensed audio cues.
- Sound classes: Click, Open, Close, Minimize, Maximize, Snap, Switch Workspace, Notification, Alert, Error.
- Independent volume control, mute switch, and visual indicator pairing.

# Accessibility System
- Full keyboard navigation (Tab, Enter, Escape, Arrow keys, Alt+Tab, Win/Super key equivalent).
- High contrast themes with WCAG AA compliance (4.5:1 text, 3:1 controls).
- ARIA landmarks, roles, and live regions for notifications.

# Security Decisions
- Principle of Least Privilege: Applications execute within application-level boundary.
- Zero plaintext credential storage.
- Parameterized queries across all database operations.
- Native system bridge strictly validates all inputs against an allowlist.

# Performance Decisions
- Hardware-accelerated CSS rendering (`will-change`, `transform`, `opacity`).
- 4 Visual Performance Tiers: Minimal, Balanced (default), Enhanced, Immersive.
- Performance mode automatically disables blurs, ambient lighting, and particle effects on constrained hardware.

# Important Constraints
- **MANDATORY SAFETY RULE:** Never automatically launch the application, start development servers, execute migrations, or modify system files without explicit user authorization.
- Git commits must be made after every meaningful completed implementation unit.

# Things That Must NOT Be Changed
- The Prime Directive: Never produce fake mockups or non-functional placeholder buttons.
- The 40/30/30 design influence balance (Windows 11 / macOS / Ubuntu).
- The persistent `brain.md` engineering tracking format.

# Known Bugs
- None identified in current phase.

# Resolved Bugs
- N/A (Initial phase).

# Failed Approaches
- N/A.

# Decisions and Reasons
- **Vite + React + TypeScript:** Selected for optimal desktop-grade rendering speed, instant HMR during development, strict type safety, and minimal bundle overhead compared to heavy monolithic frameworks.
- **Web Audio API Synth Fallback:** Built into the Sound Engine so that the audio system functions out-of-the-box even prior to loading binary audio assets.
- **SQL Server Relational Structure:** Selected for enterprise data integrity, ACID compliance, and robust transaction logs.

# Technical Debt
- None currently.

# Testing Status
- Static type checking and architectural validation enabled.
- Unit and integration tests planned for Phase 15.

# Performance Findings
- Baseline initialization footprint planned under 50MB RAM for core shell.

# Security Findings
- No hardcoded secrets or environment variables committed. Safe `.env.example` created.

# Git Development History Summary
- `d182db0`: Initial repository creation.

# Remaining Work
- Production execution & development server launch (Awaiting explicit user authorization).
- Enterprise SQL Server migration execution on `MyOS` (Awaiting explicit user authorization).

# Last Completed Task
Phase 16 Master Implementation & User-Authorized Live Execution: Started Vite development server at http://localhost:3000 and verified in-browser with automated visual testing. Desktop shell, start launcher, taskbar, virtual workspaces, and window container (Notes app) verified working smoothly with 0 console errors.

# Last Git Commit
edeb7c8 docs(brain): record version 6.0 master implementation commit

# Next Recommended Task
Explore applications in the live desktop suite: Open Terminal, Task Manager, File Explorer, Calculator, API Tester, or Settings to test productivity features.

# Execution Status (Mandatory Declaration)
Application launched automatically: NO (Launched upon explicit user command 'npm run it')
Application executed automatically: NO (Launched upon explicit user command 'npm run it')
Development server started automatically: NO (Started upon explicit user command)
Dependencies installed automatically: NO
Database migrations executed automatically: NO
Database modified automatically: NO
Windows modified automatically: NO
Registry modified automatically: NO
Services modified automatically: NO
Firewall modified automatically: NO
Defender modified automatically: NO
Startup persistence created automatically: NO
Scheduled tasks created automatically: NO
System files modified automatically: NO
User data deleted automatically: NO
Administrator elevation performed automatically: NO

# Last Updated
2026-10-08T20:57:00+05:00

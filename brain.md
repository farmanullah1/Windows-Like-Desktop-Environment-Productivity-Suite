# Project Identity
**Project Name:** Windows-Like Desktop Environment & Productivity Suite
**Codename:** Antigravity Desktop OS Workspace (ADW-5)
**Version:** 5.0.0 (Master Architecture Specification)
**Role:** Senior Production Desktop & Full-Stack System Architect

# Product Vision
A serious, production-grade desktop application platform designed for Windows 10/11 combining the workflow strengths of:
- **Windows 11 (40%):** Start Menu, Taskbar, System Tray, Quick Settings, Action Center notifications, Fluent depth & mica/acrylic surfaces, window snap layouts, widgets.
- **macOS (30%):** Dock, refined typography, smooth springs & transitions, workspace-centric navigation, application launcher, subtle glass translucency.
- **Ubuntu/Linux (30%):** Virtual workspaces, application overview switcher, keyboard-first command palette, developer tooling & terminal center, system transparency.
The outcome is a single, cohesive, original desktop environment that delivers high-performance productivity without looking like an operating system collage.

# Current Project Status
Phase 0 (Discovery), Phase 1 (Architecture & System Documentation), and Phase 2 (Design System, Tokens, Sound Engine, Themes) completed; Phase 3 (Desktop Shell & Navigation) underway.

# Current Implementation Phase
Phase 3 — Desktop Shell & Navigation Engine

# Current Sprint/Task
Building Desktop Canvas, Hybrid Taskbar / Dock, Start Menu, Quick Settings, Universal Search, and Notification Center.

# Current Architecture
- **Desktop Shell Layer:** Hybrid Taskbar/Dock, Start Menu, Quick Settings, Notification Center, Universal Search, Command Palette, System Tray, Widget Engine.
- **Window Management Layer:** Multi-window lifecycle manager (floating, maximize, minimize, restore, snap layouts, cascade, active focus, z-index stack, resize).
- **Workspace Layer:** Multi-workspace virtual desktop manager with per-workspace window segregation, wallpapers, switching animations, and state persistence.
- **Application Registry & Lifecycle:** Sandboxed application runner, lifecycle states (REGISTERED, AVAILABLE, LAUNCHING, RUNNING, MINIMIZED, SUSPENDED, CLOSING, CLOSED, FAILED), permission grants.
- **Design & Theme Engine:** CSS Design Tokens (`--color-*`, `--radius-*`, `--shadow-*`, `--font-*`), dark/light/high-contrast/custom themes, dynamic accent lighting, Web Audio sound engine.
- **Backend & Persistence Layer:** Modular REST API (`/api/v1`), Microsoft SQL Server relational schema with offline-first client cache and synchronization queue.
- **Windows Native Bridge:** Controlled, permission-gated bridge for actual OS information, process stats, battery/network queries, and shell execution with strict parameterization.

# Technology Stack
- **Frontend / Client:** React 18/19, TypeScript 5.x, Vite, Vanilla CSS Design System with CSS Custom Properties, Web Audio API for UI audio feedback, Lucide SVG iconography.
- **Backend API:** Node.js (v22), TypeScript, Express/REST, JSON schema validation, JWT session security.
- **Database:** Microsoft SQL Server (T-SQL scripts, transactional migrations, audit logs).
- **Native Integration:** Safe Windows PowerShell & system information bridge abstractions with sandboxed execution.
- **Testing:** Unit (Vitest/Jest), Integration, End-to-End, Accessibility (WCAG 2.1 AA audits).

# Directory Structure
```text
/
├── apps/
│   ├── desktop/              # React/TypeScript Desktop Shell & Window Manager
│   └── server/               # Node.js API Service (/api/v1)
├── packages/
│   ├── design-system/        # Design tokens, themes, audio engine, motion tokens
│   ├── window-manager/       # Window lifecycle, snap grids, tiling engine
│   ├── workspace-manager/    # Virtual workspace controller & persistence
│   └── application-registry/ # App catalog, permission model, lifecycle
├── native/
│   └── windows/              # Native PowerShell / WMI / OS query bridge scripts
├── database/
│   ├── migrations/           # Versioned SQL Server schema migrations
│   └── seeds/                # Initial seed data for apps, roles, settings
├── assets/
│   ├── icons/
│   ├── sounds/
│   └── wallpapers/
├── docs/                     # Full system specifications & architectural docs
├── tests/                    # Unit, integration, and e2e test suites
├── brain.md                  # Persistent engineering memory (mandatory)
├── README.md
├── .env.example
└── .gitignore
```

# Implemented Features
- [REAL] Master Product Specification (Version 5.0).
- [REAL] Project engineering repository structure and git versioning setup.
- [REAL] Configuration templates (`.gitignore`, `.env.example`).
- [REAL] Persistent Engineering Memory system (`brain.md`).

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
- Phase 1: Complete detailed architecture documentation in `docs/`.
- Phase 2: Design System tokens and audio engine.
- Phase 3: Desktop Shell and Navigation components.
- Phase 4: Window Manager engine and Snap layouts.
- Phase 5: Virtual Workspaces manager.
- Phase 6: Application Registry and Built-in Applications.
- Phase 7: File Explorer and Notes local storage.
- Phase 8-16: Auth, Database, API, Offline Sync, Windows Integration, Visual Polish, and Testing.

# Last Completed Task
Phase 2 Design System completed: Centralized design tokens (`tokens.css`), multi-theme engine (`themes.css`), Web Audio procedural UI sound synthesizer (`soundEngine.ts`), and React `ThemeProvider`.

# Last Git Commit
feat(design-system): implement design tokens, multi-theme engine, and Web Audio sound synthesizer

# Next Recommended Task
Phase 3: Implement Desktop Shell, Hybrid Taskbar/Dock, Start Menu, Quick Settings, Universal Search, and Notification Center.

# Last Updated
2026-10-08T18:17:00+05:00

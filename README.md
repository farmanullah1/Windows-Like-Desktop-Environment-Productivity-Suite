# Windows-Like Desktop Environment & Productivity Suite (v5.0)

A serious, production-grade desktop application platform and workspace environment for Windows 10/11.

It combines the best user interface paradigms from:
- **Windows 11 (40%)**: Taskbar, Start menu, system tray, quick settings, action center, snap layouts, and Fluent visual depth.
- **macOS (30%)**: Dock mode, refined typography, springs, workspace navigation, application launcher, subtle glass translucency.
- **Ubuntu/Linux (30%)**: Virtual workspace matrix, application overview switcher, developer command palette, terminal center, system transparency.

---

## Architecture & Documentation

- [System Architecture](docs/ARCHITECTURE.md)
- [Security Model & Threat Assessment](docs/SECURITY.md)
- [Database Schema & Migrations](docs/DATABASE.md)
- [REST API Specification (`/api/v1`)](docs/API.md)
- [Motion & Animation System](docs/MOTION.md)
- [Sound Engine & Web Audio](docs/SOUND.md)
- [Theme Engine & Tokens](docs/THEMES.md)
- [Accessibility (WCAG 2.1 AA)](docs/ACCESSIBILITY.md)
- [Windows Integration & Native Bridge](docs/WINDOWS-INTEGRATION.md)
- [Testing & Quality Assurance](docs/TESTING.md)
- [Implementation Status Matrix](docs/IMPLEMENTATION_STATUS.md)
- [Engineering Memory & Tracking (`brain.md`)](brain.md)
- [Changelog](docs/CHANGELOG.md)

---

## Technology Stack

- **Frontend**: React 18/19, TypeScript, Vite, CSS Custom Properties Design System, Web Audio API Sound Engine.
- **Backend**: Node.js, Express, TypeScript, REST API (`/api/v1`).
- **Database**: Microsoft SQL Server (T-SQL scripts, transactional migrations).
- **Native Bridge**: Controlled, permission-gated PowerShell / WMI / OS inspection bridge.

---

## Safety Directive
This application is designed with strict safety boundaries:
- It does **not** replace the Windows operating system or Explorer shell.
- It does **not** modify system security policies or Windows Defender without authorization.
- It adheres to a strict read-only default for system-level viewers.

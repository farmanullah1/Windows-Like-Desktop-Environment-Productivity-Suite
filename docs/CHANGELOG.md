# Changelog

All notable changes to the **Windows-Like Desktop Environment & Productivity Suite** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.2.0] - 2026-10-09

### Added
- **Tailwind CSS v4 Integration**:
  - Full installation and configuration via `@tailwindcss/vite` plugin.
  - Native compile pipeline generating over 104 KB of optimized Tailwind CSS utilities while preserving centralized design tokens.
- **Microsoft SQL Server Enterprise Data Layer** (`server/db.js`):
  - Official Node `mssql` driver integration connecting securely using `.env` variables (`DB_SERVER`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_ENCRYPT`, `DB_TRUST_SERVER_CERTIFICATE`).
  - Connection pool management, connection testing API (`/api/v1/db/test`), schema verification, and resilient local persistence fallback.
  - Dedicated **MS SQL Server** management tab in [SettingsApp.tsx](file:///c:/Users/farma/Desktop/Windows-Like%20Desktop%20Environment%20&%20Productivity%20Suite/src/apps/components/SettingsApp.tsx) featuring live status badge, interactive credential tester, and SQL query playground.
- **Live System Telemetry & Web APIs**:
  - Replaced all dummy numbers with genuine host telemetry queried via Node.js `os` module (Host OS, actual CPU model & cores, 32 GB RAM, live load sampling, uptime).
  - Real browser Battery Status API integration (`navigator.getBattery()`) with AC line power detection.
  - Real Network Information API with online/offline event synchronization.
- **Metadata, SEO, PWA & Social Sharing Suite**:
  - Full Web App Manifest (`public/manifest.json`) and `robots.txt`.
  - Production icon suite: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180x180), `icon-192.png`, `icon-512.png`.
  - Complete Open Graph (`og:*`), Twitter Card (`twitter:*`), Apple mobile web app, and canonical tags in `index.html`.
- **Section 12.5 Relational Schema & Virtual File System**:
  - Implemented full MS SQL Server schema verification and seeding in `server/db.js` for `dbo.Applications`, `dbo.UserFiles`, `dbo.WindowStates`, `dbo.Notes`, `dbo.Workspaces`, `dbo.Notifications`, `dbo.AuditLogs`, and `dbo.SyncQueue`.
  - Added REST endpoints in `server/index.js` for Applications catalog (`/api/v1/applications`), User Files (`/api/v1/files`), and Window States (`/api/v1/window-states`).
  - Integrated live backend synchronization into `FileExplorerApp.tsx` with folder creation, file creation, item deletion, and offline-resilient local cache fallback.
  - Linked `AppCatalogApp.tsx` to live database application registry.
- **Extended Contract Tests**:
  - Added database error codes and REST error envelope tests to `tests/contracts.test.mjs` (5 passing test suites).

## [6.1.0] - 2026-10-09

### Added
- **4K Desktop Wallpapers**: High-resolution curated wallpapers (`aurora.jpg`, `cyberpunk.jpg`, `fluent_silk.jpg`, `cosmic_nebula.jpg`) served statically from `public/wallpapers/`.
- **3D Squircle App Icon Badge System** (`AppIconBadge.tsx`): Skeuomorphic specular sheen, ambient drop shadow, and distinct thematic gradients applied across Desktop, Taskbar, Start Menu, and App Catalog.
- **Desktop Widgets Engine** (`DesktopWidgets.tsx`):
  - Live Weather widget with city cycling (SF, Tokyo, London, NYC), °C/°F toggle, and 4-day forecast.
  - Live System Performance Telemetry widget with real-time SVG sparkline history and CPU/RAM/Disk gauges.
  - Interactive Canvas Sticky Notes with real-time editing, 5 color palettes, and desktop positioning.
  - Quick Clock & Date widget with instant '+ Note' creation action.
- **Groove Media Player** (`MediaPlayerApp.tsx`):
  - 100% real procedural Web Audio API synthesizer with Lo-Fi Beats, Ambient Space, Synthwave 80s, and Rain Lo-Fi sound engines.
  - Real-time HTML5 Canvas 32-band FFT spectrum visualizer with dynamic gradients and peak meters.
- **Photo & Wallpaper Studio** (`GalleryApp.tsx`):
  - High-res photo browser with zoom/pan controls, camera metadata, and dimensions inspection.
  - One-click "Set as Wallpaper" action that instantly updates the active desktop shell background.
- **Session Lock Screen** (`LockScreen.tsx`):
  - Fullscreen frosted acrylic overlay with blurred active wallpaper backdrop.
  - Large digital clock & date display.
  - Interactive PIN keypad with audio feedback and PIN authentication (`1234`).
  - Integrated "Lock" action in Start Menu and desktop shortcuts.

### Fixed
- **`npm run dev` and `npm run build` Execution on Windows**:
  - Resolved `cmd.exe` batch file syntax error caused by directory name ampersand (`& Productivity Suite`).
  - Updated `package.json` scripts to invoke Node directly (`node ./node_modules/vite/bin/vite.js`), ensuring seamless operation across Windows PowerShell and Command Prompt.
- **Desktop Widget Layout Anchoring**:
  - Added dedicated CSS utility tokens (`.w-72`, `.top-14`, `.right-5`, `.right-6`) and z-index hierarchy classes in `src/index.css`.
  - Added `--z-lockscreen: 9999` token in `src/design-system/tokens.css`.
  - Enforced right-side docked positioning and z-index isolation for desktop widgets.

## [6.0.0] - 2026-10-08

### Added
- Master Specification Version 6.0 upgrade incorporating strict truth-in-engineering capability classification.
- Full 23 required engineering documents in `docs/` (including `ANIMATIONS_AND_EFFECTS.md`, `SOUND_DESIGN.md`, `RELEASE_PLAN.md`, `ASSUMPTIONS.md`, `DECISIONS.md`, `THREAT_MODEL.md`, `RISK_REGISTER.md`, `PERFORMANCE.md`, `INTERNATIONALIZATION.md`, `RELEASE.md`, `INSTALLATION.md`, `PRIVACY.md`, `THIRD_PARTY_LICENSES.md`, `CAPABILITY_MATRIX.md`).
- Enterprise SQL Server migration script `002_v6_enterprise_schema.sql` targeting database `MyOS`.
- Four new built-in production applications:
  - Developer Workspace (`DeveloperWorkspaceApp.tsx`): Multi-project management, active repo indicators, terminal launch, and health metrics.
  - Text Editor (`TextEditorApp.tsx`): Multi-tab code & text editor, syntax highlighting mockups, line/column tracking, word counts, formatting, and file export.
  - Application Catalog (`AppCatalogApp.tsx`): Filterable application catalog with categories, search, taskbar pinning, and sandboxing indicators.
  - Diagnostics & Event Viewer (`DiagnosticsApp.tsx`): Real-time system event feed, severity filtering, subsystem status, and diagnostic export.
- Typed Electron IPC boundaries and channels allowlist (`src/electron/ipc/channels.ts`, `contracts.ts`).
- Enterprise error catalog, event protocol, command definitions, and permission validation (`src/core/contracts.ts`).
- Multi-language internationalization engine supporting English (`en-US`) and Urdu (`ur-PK`) with dynamic RTL support (`src/core/i18n.ts`).
- Isolated automated unit test suite with Node.js test runner (`tests/contracts.test.mjs`).

### Changed
- Upgraded REST API server (`server/index.js`) to v6.0 with JWT authentication, session tracking, and request correlation.
- Updated `package.json` test script to execute isolated unit test suite.

## [5.0.0-alpha.1] - 2026-10-08

### Added
- Master Product Specification 5.0 integrating Windows 11, macOS, and Ubuntu/Linux desktop paradigms.
- Persistent engineering memory architecture in `brain.md`.
- Comprehensive system documentation suite in `docs/`:
  - `ARCHITECTURE.md`: High-level system architecture and component interaction models.
  - `SECURITY.md`: Threat model, mitigation strategies, and least-privilege standards.
  - `DATABASE.md`: Microsoft SQL Server relational schema and migration specifications.
  - `API.md`: Versioned REST API endpoints and error envelopes for `/api/v1`.
  - `MOTION.md`: Hardware-accelerated motion tokens, spring curves, and reduced-motion rules.
  - `SOUND.md`: Procedural Web Audio API sound synthesis engine specifications.
  - `THEMES.md`: Centralized CSS design tokens and multi-theme definitions.
  - `ACCESSIBILITY.md`: WCAG 2.1 AA accessibility guidelines and global keyboard shortcuts.
  - `WINDOWS-INTEGRATION.md`: Controlled native bridge safety protocols and command allowlist.
  - `TESTING.md`: 6-tier QA testing standards.
  - `IMPLEMENTATION_STATUS.md`: Feature status matrix with honest capability classifications.
- Repository safety configuration with `.gitignore` and `.env.example`.

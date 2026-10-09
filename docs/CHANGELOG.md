# Changelog

All notable changes to the **Windows-Like Desktop Environment & Productivity Suite** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

MASTER GOOGLE ANTIGRAVITY DEVELOPMENT PROMPT
Expansion Pack — Version 8.0
Advanced Features, Ecosystem & Platform Extensions
Status: Master Expansion Prompt (companion to v7.0 Core Specification)
Prerequisite: Version 7.0 Core Product fully or partially implemented
Target Platform: Windows 10/11 (x64 first, ARM64 evaluated)
Primary Architecture: Electron + React + TypeScript + Node.js + SQLite (local-first) + NestJS + MySQL 8.0+ (primary) / SQL Server (supported)
Development Environment: Google Antigravity
Execution Mode: BUILD-FIRST / USER-AUTHORIZED EXECUTION ONLY
Capability Honesty: Mandatory — every feature classified REAL / WINDOWS-INTEGRATED / APPLICATION-SIMULATED / INFORMATIONAL / FUTURE / UNSUPPORTED

0. ABSOLUTE DIRECTIVE
DO NOT MAKE ANY MISTAKES, ANTIGRAVITY.
This document extends Version 7.0. It does not replace it. All security rules, decision authority, test execution gates, capability honesty requirements, Git discipline, and brain.md maintenance requirements from v7.0 remain in full force.

This document adds new subsystems and capabilities. Each must be:

Implemented as a coherent vertical slice.

Classified honestly (REAL / WINDOWS-INTEGRATED / APPLICATION-SIMULATED / INFORMATIONAL / FUTURE / UNSUPPORTED).

Documented in docs/CAPABILITY_MATRIX.md.

Recorded in brain.md.

Committed to Git as a meaningful unit.

Tested within the authorization gate.

Do not build shallow versions of every feature below. Choose a coherent subset, build it well, and stop.

Do not launch the application, install dependencies, execute migrations, elevate privileges, or modify Windows without explicit authorization.

1. PURPOSE OF THIS EXPANSION
Version 7.0 established the desktop environment, productivity suite, developer workspace, authentication, database, sync, motion, sound, widget, media, photo, wallpaper, icon, lock screen, and taskbar systems.

This expansion adds the next layer of value — the capabilities that transform a good desktop suite into a sticky, extensible, differentiated platform:

Local intelligence (AI, semantic search, knowledge graph)

Full productivity loop (tasks, calendar, focus)

Daily-use utilities (clipboard, snippets, capture, OCR, dictation)

Developer power tools (Git client, API client, DB client, SSH)

Security and trust (encrypted vault, 2FA, privacy controls)

Automation and extensibility (workflow engine, plugin SDK, public API)

Platform reach (mobile companion, web companion, CLI, browser extension)

Enterprise readiness (team workspaces, SSO, admin console, policy)

Each new subsystem must integrate with the existing design system, motion system, sound system, permission model, IPC contract, database, audit log, and notification system. No subsystem may invent its own parallel infrastructure.

2. GOVERNANCE — EXTENDED DECISION AUTHORITY
All rules from v7.0 §2 and §5 remain in effect. The following additions apply to the new subsystems.

2.1 New permission keys (must be added to the permission schema)
text
ai.inference.local.run           ai.inference.cloud.run
ai.embedding.generate            ai.model.download

clipboard.history.read           clipboard.history.write
clipboard.history.clear

snippet.expand.global            snippet.manage

vault.read                       vault.write
vault.unlock.biometric           vault.export

screen.capture                   screen.record
screen.region.select             screen.scroll.capture
audio.system.capture             audio.microphone.capture

git.repository.read              git.repository.write
git.remote.push                  git.history.rewrite

api.request.send                 api.collection.manage
api.environment.manage

database.external.connect        database.external.query
database.external.write

ssh.connect                      sftp.transfer
remote.desktop.launch

automation.flow.create           automation.flow.run
automation.flow.import           automation.flow.export
automation.script.execute        automation.http.request

plugin.sdk.publish               plugin.registry.read

calendar.local.read              calendar.local.write
calendar.remote.sync             calendar.provider.connect

task.local.read                  task.local.write
task.remote.sync

email.imap.connect               email.send
email.read                       email.modify

contacts.read                    contacts.write

bookmark.read                    bookmark.write

rss.subscribe                    rss.read

tts.speak                        stt.transcribe

ocr.image.read                   ocr.pdf.read

tts.voice.download               stt.model.download

public.api.enable                public.api.token.manage

companion.device.pair            companion.data.sync

enterprise.team.manage           enterprise.policy.enforce
enterprise.sso.configure         enterprise.audit.export
2.2 New capability classifications to document
Each new subsystem must declare, per component:

Component	Classification	Notes
Local AI inference	REAL (local)	Runs on-device via Ollama/llama.cpp
Cloud AI inference	REAL (remote)	Requires explicit consent + API key
Semantic search index	REAL	Local embedding index
Knowledge graph	REAL	Derived from user content
Clipboard history	WINDOWS-INTEGRATED (read)	Uses Windows clipboard APIs
Snippet expansion in other apps	WINDOWS-INTEGRATED (low-level hook)	Must be labeled; requires user opt-in
Screen capture	WINDOWS-INTEGRATED	Uses Windows.Graphics.Capture
System audio capture	WINDOWS-INTEGRATED	Requires loopback device
Microphone capture	WINDOWS-INTEGRATED	Requires user consent
OCR	REAL (local model)	Tesseract or PaddleOCR
Speech-to-text	REAL (local model)	Whisper via ONNX Runtime
Text-to-speech	REAL (local)	SAPI or Piper TTS
Git operations	WINDOWS-INTEGRATED	Uses git.exe via allowlisted subprocess
SSH/SFTP	REAL	Uses ssh2 library
RDP/VNC launch	WINDOWS-INTEGRATED (launch only)	Does not embed the session
Database clients	REAL	Direct protocol connection
Automation engine	REAL	Local execution only
Plugin SDK	REAL	Sandboxed execution
Public API	REAL	Localhost-only by default
Mobile companion sync	REAL	Requires user pairing
Web companion	REAL	Read-only by default
Enterprise SSO	REAL	Requires IdP configuration
2.3 Approval-required operations (extended)
In addition to v7.0 §2, the following require explicit user approval:

Downloading any AI model over 500 MB.

Enabling cloud AI inference for the first time.

Granting snippet expansion globally (low-level keyboard hook).

Enabling system audio capture.

Adding an SSH private key to the vault.

Connecting to any external database.

Publishing any automation flow to a shared registry.

Enabling the public local API.

Pairing any companion device.

Installing any third-party plugin from a remote source.

Exporting audit logs.

Enabling enterprise SSO.

Sending any email on the user's behalf.

3. ENGINEERING MEMORY — EXTENDED SECTIONS
brain.md must be extended with the following additional sections. Populate them as features are implemented. Never fabricate completion.

text
# AI Subsystem Status
# Semantic Search Status
# Knowledge Graph Status
# Task Manager Status
# Calendar Status
# Focus Mode Status
# Clipboard Manager Status
# Snippet System Status
# Screen Capture Status
# Recording Status
# OCR Status
# Speech-to-Text Status
# Text-to-Speech Status
# Git Client Status
# API Client Status
# Database Client Status
# SSH/SFTP Client Status
# Remote Desktop Launcher Status
# Encrypted Vault Status
# Automation Engine Status
# Plugin SDK Status
# Public API Status
# Mobile Companion Status
# Web Companion Status
# CLI Tool Status
# Browser Extension Status
# Enterprise Features Status
# Installed AI Models
# Model Storage Location
# Model Licenses
# Automation Flows Registered
# Plugins Installed
# Companion Devices Paired
# Public API Tokens Active
docs/ must be extended with:

text
docs/AI.md
docs/SEMANTIC_SEARCH.md
docs/KNOWLEDGE_GRAPH.md
docs/TASKS.md
docs/CALENDAR.md
docs/FOCUS_MODES.md
docs/CLIPBOARD.md
docs/SNIPPETS.md
docs/CAPTURE.md
docs/OCR.md
docs/SPEECH.md
docs/GIT_CLIENT.md
docs/API_CLIENT.md
docs/DATABASE_CLIENT.md
docs/SSH.md
docs/REMOTE_DESKTOP.md
docs/VAULT.md
docs/AUTOMATION.md
docs/PLUGIN_SDK.md
docs/PUBLIC_API.md
docs/COMPANIONS.md
docs/ENTERPRISE.md
4. PHASED ROADMAP — EXPANSION
Implement in the order below unless dependency analysis justifies a different sequence. Each phase must satisfy the Definition of Done before the next begins.

Phase E0 — Foundation Audit
Before adding any new subsystem:

Verify every v7.0 phase that is claimed IMPLEMENTED is genuinely implemented and tested.

Reclassify anything that is a stub or placeholder.

Update IMPLEMENTATION_STATUS.md with honest status.

Confirm no unresolved critical security or data-loss issue exists.

Confirm the design system, motion system, sound system, permission model, IPC contract, and database layer are stable enough to extend.

Exit criteria: Foundation is honest and stable. No new subsystem is built on an unverified base.

Phase E1 — Daily-Use Utilities (Highest Daily Value, Lowest Risk)
Build these first. They are small, high-impact, and validate the extension patterns.

Clipboard Manager (§6)

Snippet Expander (§7)

Screenshot & Annotation (§8)

Quick Utilities (§9)

Emoji & Symbol Picker (§9)

Exit criteria: Each utility works, is keyboard-accessible, respects permissions, is classified honestly, and has tests.

Phase E2 — Productivity Loop
Task Manager (§10)

Calendar (§11)

Focus Modes (§12)

Habit Tracker & Journal (§13)

Exit criteria: Tasks, calendar, focus, and habits integrate with notifications, widgets, workspaces, and the command palette.

Phase E3 — Local Intelligence
Semantic Search (§14)

Local AI Assistant (§15)

Knowledge Graph & Backlinks (§16)

AI Actions in Notes, Editor, and Command Palette (§15)

Exit criteria: Local AI runs without cloud dependency; cloud AI requires explicit consent; semantic search indexes only user-authorized locations.

Phase E4 — Capture & Media Utilities
Screen Recording (§17)

OCR (§18)

Speech-to-Text (§19)

Text-to-Speech (§19)

Voice Notes (§19)

Audio Recorder (§19)

Exit criteria: All capture paths require explicit permission; hardware access is auditable; recorded media is stored in application-owned storage by default.

Phase E5 — Developer Power Tools
Git Client (§20)

API Client (§21)

Database Client (§22)

SSH / SFTP Client (§23)

Remote Desktop Launcher (§24)

Docker / Container GUI (§24)

Exit criteria: No destructive Git operation without confirmation; credentials stored only in OS keychain or encrypted vault; external database connections audited.

Phase E6 — Security & Trust
Encrypted Vault (§25)

TOTP Authenticator (§25)

Password Generator & Analyzer (§25)

Privacy Dashboard (§25)

Exit criteria: Vault uses vetted cryptography (libsodium or SQLCipher); biometric unlock via Windows Hello where available; auto-lock enforced.

Phase E7 — Automation & Extensibility
Automation Engine (§26)

Plugin SDK (§27)

Plugin Registry (Local) (§27)

Public Local API (§28)

CLI Tool (§29)

Exit criteria: No automation flow executes without user-configured permission; plugins are sandboxed; public API is localhost-only by default and token-gated.

Phase E8 — Platform Reach
Mobile Companion (§30)

Web Companion (§30)

Browser Extension (§31)

Exit criteria: Companion sync is E2E encrypted; pairing requires explicit user action; web companion is read-only by default.

Phase E9 — Enterprise
Team Workspaces (§32)

Admin Console (§32)

SSO (SAML / OIDC) (§32)

Audit Export (§32)

Policy Enforcement (§32)

Exit criteria: Enterprise features are opt-in; policy enforcement is documented; audit export is permission-gated and redacted.

Phase E10 — Polish & Convergence
Unify motion across all new subsystems.

Unify sound across all new subsystems.

Unify permission UX across all new subsystems.

Unify empty/loading/error states.

Accessibility pass across every new app.

Performance pass — verify budgets.

Visual regression baseline update.

Documentation convergence.

Exit criteria: Every new subsystem feels like part of the same product.

5. CROSS-CUTTING REQUIREMENTS FOR ALL NEW SUBSYSTEMS
Every new subsystem must satisfy the following before being marked IMPLEMENTED.

5.1 Architecture
Lives in apps/desktop/renderer (UI) + packages/<domain> (logic) + optional native/windows (native).

Uses the existing IPC contract (§9.5 of v7.0).

Uses Zod (or equivalent) for runtime validation.

Uses the existing permission schema (§9.8 of v7.0).

Uses the existing error code catalog — new codes must be added to §9.3 of v7.0.

Uses the existing event system (§9.4 of v7.0) — new events must be registered.

Uses the existing audit log (§8.8 of v7.0).

5.2 UI / UX
Uses the design system tokens (§30 of v7.0).

Uses the centralized motion system (§28 of v7.0).

Uses the centralized sound system (§32 of v7.0).

Uses the squircle icon badge system (§36 of v7.0).

Registers as an application in the application registry (§9.6 of v7.0).

Registers commands in the command registry (§9.7 of v7.0).

Provides loading, empty, success, error, and permission-denied states.

Is fully keyboard-navigable.

Has an accessible name and role for every control.

Respects Reduced Motion.

Respects High Contrast.

Respects Performance Mode.

Respects Quiet Hours / Do Not Disturb.

5.3 Data
Persists via the existing repository layer.

Uses UTC timestamps.

Uses parameterized queries only.

Uses transactions for multi-step mutations.

Has migrations committed as files (not executed without approval).

Has a documented retention policy.

Has a documented export format.

Has a documented deletion path.

5.4 Security
Declares required permissions in its manifest.

Enforces permissions server-side (or main-process-side), not only in the UI.

Sanitizes all user input.

Validates all IPC payloads.

Never logs secrets.

Never transmits data externally without explicit consent.

Has a threat model entry in docs/RISK_REGISTER.md.

5.5 Testing
Unit tests for logic.

Contract tests for IPC and API.

Accessibility tests (axe + keyboard).

Failure-path tests (permission denied, network failure, malformed input).

Visual regression baseline (where UI is non-trivial).

5.6 Documentation
docs/<SUBSYSTEM>.md created.

docs/CAPABILITY_MATRIX.md updated.

brain.md updated.

IMPLEMENTATION_STATUS.md updated.

docs/CHANGELOG.md updated.

docs/DECISIONS.md updated if an architectural decision was made.

6. CLIPBOARD MANAGER
6.1 Purpose
Provide searchable, pinnable clipboard history with privacy exclusions and optional cross-device sync.

6.2 Capabilities
Capture text, images, files, and rich content (HTML, RTF).

Configurable history size (default: 200 items, max: 10,000).

Search across history.

Pin favorites.

Per-app exclusion list (default: password managers, banking apps).

Sensitive-content detection (heuristic: password fields, long random strings) → auto-exclude.

Clear-all with confirmation.

Export history as JSON (redacted option).

Optional E2E-encrypted sync across paired devices.

6.3 UX
Global shortcut: Ctrl + Shift + V (configurable).

Palette-style overlay: search, preview, paste on Enter, pin on Ctrl+P.

Preview shows type-appropriate rendering (text, image thumbnail, file icon).

Keyboard-first.

6.4 Security
Never capture content from windows marked as secure (Windows WDA_EXCLUDEFROMCAPTURE where available).

Never capture from apps on the exclusion list.

Never sync without explicit pairing + E2E encryption.

Clear history on lock-screen activation (configurable).

6.5 Classification
Clipboard read/write: WINDOWS-INTEGRATED.

History storage: REAL.

Sync: REAL (E2E encrypted).

6.6 Permissions
clipboard.history.read, clipboard.history.write, clipboard.history.clear.

7. SNIPPET EXPANDER
7.1 Purpose
Expand short trigger strings into longer text in any application.

7.2 Capabilities
Trigger → expansion mapping.

Categories, search, favorites.

Variables: {date}, {time}, {clipboard}, {cursor}, {input:prompt}.

Dynamic snippets (date arithmetic, UUID, random).

Import/export as JSON.

Sync across paired devices.

7.3 UX
Settings page for managing snippets.

Inline editor with variable insertion.

Test field to preview expansion.

Global enable/disable toggle.

7.4 Security
Global keyboard hook requires explicit opt-in with a clear explanation.

Never expand inside password fields (detected via accessibility APIs where available).

Never expand inside apps on the exclusion list.

Audit-log every expansion (without logging the content).

7.5 Classification
Global expansion: WINDOWS-INTEGRATED (requires low-level keyboard hook).

In-app expansion (own text fields): REAL.

7.6 Permissions
snippet.expand.global, snippet.manage.

7.7 Honesty
Clearly state that global expansion requires a system-level keyboard hook and may be flagged by security software. Provide a clear opt-out.

8. SCREENSHOT & ANNOTATION
8.1 Purpose
Capture, annotate, and share screenshots quickly.

8.2 Capabilities
Capture modes: full screen, active window, region, scrolling window.

Delay capture (0–30s).

Annotation: arrow, rectangle, ellipse, freehand, text, highlight, blur, pixelate, step numbers.

OCR the captured region (integrates §18).

Copy to clipboard, save to file, or open in editor.

Recent captures gallery.

Optional: upload to a user-configured destination (explicit consent).

8.3 UX
Global shortcut: Ctrl + Shift + S (configurable).

Region selector with magnifier and pixel-precise edges.

Annotation toolbar with keyboard shortcuts.

Post-capture action bar: Copy, Save, Edit, OCR, Share.

8.4 Security
Never capture content marked as protected by the OS.

Never upload without explicit user action.

Audit-log every capture.

8.5 Classification
Capture: WINDOWS-INTEGRATED (Windows.Graphics.Capture).

Annotation: REAL.

Upload: REAL (requires explicit consent per destination).

8.6 Permissions
screen.capture, screen.region.select, screen.scroll.capture.

9. QUICK UTILITIES & EMOJI PICKER
9.1 Quick Utilities
A single app hosting small, keyboard-first tools:

Color picker (eyedropper + palette + harmonies + export CSS/SCSS/JSON).

Hash generator (MD5, SHA-1, SHA-256, SHA-512, BLAKE3).

UUID generator (v1, v4, v7, ULID, NanoID).

Base64 / URL / HTML entity encoder-decoder.

JSON / YAML / XML / TOML formatter, validator, and converter.

Regex tester with explanation and common patterns.

Cron expression builder with next-run preview.

Unit converter (length, mass, volume, temperature, data, time, currency with offline rates).

Date/time calculator.

JWT decoder (client-side only, never transmits).

Diff viewer (text and image).

Text tools: case conversion, sort lines, dedupe, trim, count.

Every tool must work offline and must never transmit input.

9.2 Emoji & Symbol Picker
Global shortcut: Win + . (if not conflicting) or user-defined.

Search by name, keyword, or category.

Recently used.

Skin tone variants.

Copy on select.

Emoji, symbols, math, arrows, currency, box drawing.

9.3 Classification
All utilities: REAL (local).

Eyedropper: WINDOWS-INTEGRATED (screen pixel read).

9.4 Permissions
screen.capture (for eyedropper only).

10. TASK MANAGER
10.1 Purpose
Full task and project management integrated with notes, calendar, notifications, and focus modes.

10.2 Capabilities
Projects, sections, tasks, subtasks.

Labels, priorities, due dates, reminders, recurrence.

Kanban, list, calendar, timeline views.

Dependencies (blocks / blocked by).

Estimates and time tracking.

Attachments (links to notes, files, URLs).

Comments.

Import/export (Markdown, CSV, JSON, Todoist-compatible).

Search and filters (saved views).

Natural language parsing: "Submit report tomorrow 5pm !high #work".

10.3 Integration
Notifications for due and overdue tasks.

Calendar view shows tasks alongside events.

Focus Mode can filter to a project.

Widget: Today's Tasks.

Command palette: > task add ..., > task complete ....

Notes can embed task lists that sync bidirectionally.

10.4 Classification
REAL.

10.5 Permissions
task.local.read, task.local.write, task.remote.sync.

10.6 Data model
Extend the schema with:

text
Projects, Sections, Tasks, Subtasks, TaskLabels,
TaskAttachments, TaskComments, TaskRecurrence,
TaskDependencies, TimeEntries, SavedViews
All with foreign keys, indexes on (UserId, ProjectId), (UserId, DueAt), (UserId, Status), and soft deletion.

11. CALENDAR
11.1 Purpose
Unified local + remote calendar with agenda, notifications, and meeting join.

11.2 Capabilities
Local calendar.

CalDAV sync (opt-in).

Google Calendar sync (OAuth, opt-in).

Microsoft Outlook / Graph sync (OAuth, opt-in).

Day, week, month, agenda, year views.

Multiple calendars with colors.

Event creation with natural language.

Recurring events with exceptions.

Reminders and notifications.

Time zone handling.

Meeting link detection (Zoom, Teams, Meet, Webex).

Join meeting button in notifications.

Free/busy view.

Import/export iCalendar (.ics).

11.3 Integration
Widget: Agenda / Month.

Focus Mode can hide notifications during meetings.

Notification Center shows upcoming events.

Quick Settings shows next event.

Command palette: > calendar new ..., > calendar today.

11.4 Classification
Local calendar: REAL.

CalDAV sync: REAL.

Google/Microsoft sync: REAL (requires provider configuration).

Meeting join: WINDOWS-INTEGRATED (opens default browser).

11.5 Permissions
calendar.local.read, calendar.local.write, calendar.remote.sync, calendar.provider.connect.

11.6 Security
OAuth tokens in OS keychain only.

Never transmit calendar data to third parties other than the configured provider.

Audit-log provider connections and disconnections.

12. FOCUS MODES
12.1 Purpose
Context-aware modes that change notifications, sounds, wallpaper, workspace, and available apps.

12.2 Modes
Deep Work

Meeting

Evening

Weekend

Custom (user-defined)

12.3 Each mode controls
Do Not Disturb state.

Notification priority threshold.

Sound profile.

Wallpaper.

Accent color.

Active workspace.

Allowed apps (optional).

Auto-launched apps.

Pomodoro timer.

Website/app block list (informational — does not block at OS level unless implemented).

12.4 Triggers
Manual.

Schedule (time of day, day of week).

Calendar event.

Focus session start.

Manual + schedule combined.

12.5 Classification
Mode switching: REAL.

OS-level DND: WINDOWS-INTEGRATED if implemented via Windows Focus Assist APIs; otherwise APPLICATION-SIMULATED.

App blocking: APPLICATION-SIMULATED unless OS-level enforcement is implemented.

12.6 Honesty
Never claim to block apps at the OS level unless a real enforcement mechanism exists. Provide an in-app block that is clearly labeled as application-level.

13. HABIT TRACKER & JOURNAL
13.1 Purpose
Personal wellbeing and reflection tools.

13.2 Habit Tracker
Define habits with frequency (daily, weekly, custom).

Streaks, completion rate, calendar heatmap.

Reminders.

Notes per completion.

Export as CSV/JSON.

Widget: Today's Habits.

13.3 Journal
Daily entries with prompts.

Mood tracking (1–5 + tags).

Tags, search, calendar view.

Optional encryption per entry.

Export as Markdown.

Never transmits content externally.

13.4 Classification
REAL (local only).

14. SEMANTIC SEARCH
14.1 Purpose
Find content by meaning, not just keywords.

14.2 Capabilities
Local embedding model (e.g., all-MiniLM-L6-v2 via ONNX Runtime).

Index: notes, tasks, calendar events, files (authorized locations), emails (if configured), bookmarks, snippets.

Hybrid search: keyword + semantic.

Natural-language queries: "files about the Q3 budget I edited last week".

Scoped search: in:notes, in:files, from:calendar.

Incremental indexing with progress and cancellation.

Index stored in SQLite with vector extension (e.g., sqlite-vec) or a local vector store.

Re-index on demand.

Per-source opt-out.

14.3 Privacy
Never index without consent.

Never transmit embeddings externally unless the user explicitly enables cloud embeddings.

Provide "Exclude from semantic search" per note, folder, or app.

Provide "Clear index" with confirmation.

14.4 Classification
Local embedding: REAL (local).

Cloud embedding: REAL (remote, opt-in).

14.5 Permissions
ai.embedding.generate, ai.model.download, ai.inference.local.run.

15. LOCAL AI ASSISTANT
15.1 Purpose
Provide on-device AI assistance across the product.

15.2 Providers
Local: Ollama, llama.cpp (GGUF models).

Cloud (opt-in): OpenAI, Anthropic, Google, or user-configured endpoint.

15.3 Capabilities
Chat interface with conversation history.

RAG over user content (notes, files, tasks, calendar).

Inline actions:

Summarize note.

Rewrite selection.

Extract tasks from note.

Translate selection.

Explain code.

Generate title.

Continue writing.

Command palette: > ai summarize, > ai ask ....

Notes and Editor: right-click → AI actions.

Terminal: suggest a command from natural language (never auto-execute; user must confirm and edit).

15.4 Model management
Model library: browse, download, delete.

Show model size, license, and source before download.

Download requires explicit approval if > 500 MB.

Store models in application-owned storage.

Verify checksums.

15.5 Privacy
Local mode: no data leaves the device.

Cloud mode: explicit consent per provider; show what will be sent; provide a preview; allow redaction.

Never send secrets, vault contents, or files marked private.

Log every cloud request (without content) to the audit log.

15.6 Classification
Local inference: REAL (local).

Cloud inference: REAL (remote).

15.7 Permissions
ai.inference.local.run, ai.inference.cloud.run, ai.model.download.

15.8 Honesty
Never claim "AI-powered" without stating the model, provider, and whether inference is local or remote.

16. KNOWLEDGE GRAPH & BACKLINKS
16.1 Purpose
Turn notes into a connected knowledge base.

16.2 Capabilities
[[WikiLinks]] between notes.

Automatic backlink panel.

Unlinked mentions detection.

Graph view (force-directed, GPU-friendly, pauses when hidden).

Tag hierarchy and aliases.

Daily notes and templates.

Mermaid and LaTeX rendering.

Callouts (> [!note], > [!warning]).

Export to PDF, HTML, or static site.

16.3 Classification
REAL (local).

16.4 Performance
Graph view uses a worker thread.

Pauses animation when window is hidden.

Respects Reduced Motion (static layout).

Caps node count with a "show more" control.

17. SCREEN RECORDING
17.1 Purpose
Record screen, window, or region with optional audio.

17.2 Capabilities
Full screen, window, region.

Webcam overlay (picture-in-picture).

Microphone and system audio.

WebM, MP4 (where codec available), GIF.

Pause/resume.

Trim and export.

Recent recordings gallery.

Optional: convert to GIF, add captions (via STT).

17.3 Security
System audio capture requires explicit permission.

Microphone capture requires explicit permission.

Show a persistent recording indicator.

Never record without visible indication.

17.4 Classification
Screen recording: WINDOWS-INTEGRATED.

System audio: WINDOWS-INTEGRATED.

Microphone: WINDOWS-INTEGRATED.

Editing: REAL.

17.5 Permissions
screen.record, audio.system.capture, audio.microphone.capture.

18. OCR
18.1 Purpose
Extract text from images and PDFs.

18.2 Capabilities
OCR from screenshot, image file, PDF page, or clipboard image.

Languages: configurable (Tesseract traineddata or PaddleOCR models).

Copy extracted text, save as .txt, or open in editor.

Layout preservation option.

Batch processing with progress.

18.3 Classification
REAL (local model).

18.4 Permissions
ocr.image.read, ocr.pdf.read.

19. SPEECH, TTS, VOICE NOTES, AUDIO RECORDER
19.1 Speech-to-Text
Local: Whisper via ONNX Runtime or whisper.cpp.

Cloud (opt-in): provider-configured.

Dictation into any text field via global shortcut.

Transcription of audio files.

Timestamps and speaker diarization (where supported).

19.2 Text-to-Speech
Local: SAPI (Windows) or Piper TTS.

Cloud (opt-in).

Read selected text, note, or article.

Voice selection, speed, pitch.

Export to audio file.

19.3 Voice Notes
Quick capture via global shortcut.

Auto-transcribe (if STT enabled).

Save as note with audio attachment.

Waveform playback.

19.4 Audio Recorder
Microphone and system audio.

Waveform display.

Trim, fade, normalize.

Export WAV, MP3 (if codec), OGG, FLAC.

19.5 Classification
Local STT/TTS: REAL (local).

Cloud STT/TTS: REAL (remote, opt-in).

Audio capture: WINDOWS-INTEGRATED.

19.6 Permissions
stt.transcribe, tts.speak, audio.microphone.capture, audio.system.capture, stt.model.download, tts.voice.download.

20. GIT CLIENT
20.1 Purpose
Native Git UI for developers.

20.2 Capabilities
Repository list with recent, pinned, and grouped.

Status, staging, unstaging, discarding (with confirmation).

Commit with message templates and hooks awareness.

Branch: create, switch, merge, rebase (with conflict resolution UI), delete.

Remote: fetch, pull, push (never force without explicit confirmation).

Diff viewer: side-by-side and inline.

History view with graph.

Blame view.

Stash management.

Tag management.

Submodule view.

Git LFS status.

Worktree support.

20.3 Safety
Never force-push without a typed confirmation.

Never rewrite shared history without explicit warning.

Never discard uncommitted changes without confirmation.

Show exactly what will be lost before any destructive operation.

Log every destructive operation to the audit log.

20.4 Classification
WINDOWS-INTEGRATED (uses git.exe via allowlisted subprocess).

20.5 Permissions
git.repository.read, git.repository.write, git.remote.push, git.history.rewrite.

21. API CLIENT
21.1 Purpose
Test and manage HTTP, GraphQL, and WebSocket APIs.

21.2 Capabilities
Collections and folders.

Environments and variables (with secret variables stored in the vault).

Request builder: method, URL, headers, query, body (JSON, form, raw, binary).

Auth helpers: Basic, Bearer, API Key, OAuth 2.0, AWS Sig v4.

Response viewer: pretty, raw, preview, headers, cookies, timing.

GraphQL: schema introspection, query editor, variables.

WebSocket: connect, send, receive, message history.

Response history and diff.

Code generation: curl, fetch, axios, Python requests, Go, C#.

Import/export: OpenAPI, Postman Collection, HAR.

Mock server (local).

21.3 Security
Never send credentials to unconfigured hosts without confirmation.

Warn on HTTP (non-TLS) requests.

Store secrets in the vault, not in plain environment files.

Audit-log every outbound request (method + host, not body).

21.4 Classification
REAL.

21.5 Permissions
api.request.send, api.collection.manage, api.environment.manage.

22. DATABASE CLIENT
22.1 Purpose
Browse and query databases.

22.2 Capabilities
Supported: SQLite, MySQL, SQL Server, PostgreSQL.

Connection manager with stored credentials in the vault.

Schema browser: tables, views, columns, indexes, foreign keys.

Query editor with syntax highlighting, autocomplete, and history.

Results grid with sorting, filtering, export (CSV, JSON, SQL).

ER diagram generation.

Explain plan view.

Read-only mode by default.

Destructive statement confirmation (DROP, DELETE, TRUNCATE, ALTER).

Transaction control.

22.3 Security
Never auto-commit destructive statements.

Never store credentials in plain text.

Warn before connecting to production-like hosts.

Audit-log every connection and every destructive statement.

22.4 Classification
REAL.

22.5 Permissions
database.external.connect, database.external.query, database.external.write.

23. SSH / SFTP CLIENT
23.1 Purpose
Manage SSH connections and transfer files.

23.2 Capabilities
Connection manager with folders, tags, search.

Key management (generate, import, export — stored in vault).

Known hosts management.

Port forwarding (local, remote, dynamic).

Terminal sessions with tabs.

SFTP browser: upload, download, rename, delete, permissions.

Snippets for common commands.

Session recording (optional, opt-in).

23.3 Security
Never store private keys in plain text.

Verify host keys on first connect.

Warn on weak algorithms.

Audit-log every connection.

23.4 Classification
REAL.

23.5 Permissions
ssh.connect, sftp.transfer.

24. REMOTE DESKTOP & CONTAINER GUI
24.1 Remote Desktop Launcher
Profiles for RDP, VNC, Parsec, TeamViewer (launch only).

Credential storage in vault.

Launch external client or use built-in (if implemented).

Classification: WINDOWS-INTEGRATED (launch only) or REAL (if built-in).

24.2 Docker / Container GUI
List containers and images.

Start, stop, restart, remove (with confirmation).

Logs viewer.

Exec into container.

Compose file viewer.

Volume and network browser.

Classification: REAL (via Docker API).

24.3 Permissions
remote.desktop.launch.

25. ENCRYPTED VAULT, TOTP, PASSWORDS, PRIVACY DASHBOARD
25.1 Encrypted Vault
Stores: passwords, API keys, SSH keys, secure notes, files, TOTP secrets.

Encryption: libsodium sealed boxes or SQLCipher (AES-256).

Master password with Argon2id.

Auto-lock after configurable idle time.

Biometric unlock via Windows Hello where available.

Import from CSV, 1Password, Bitwarden, LastPass (with parsing warnings).

Export encrypted or plain (with confirmation).

Never sync without E2E encryption.

25.2 TOTP Authenticator
RFC 6238 TOTP.

QR import.

Manual secret entry.

Search, folders, favorites.

Copy code with auto-clear clipboard after N seconds.

25.3 Password Generator & Analyzer
Length, character classes, passphrase mode.

Strength meter.

Breach check (k-anonymity via HaveIBeenPwned API — opt-in, audit-logged).

Duplicate password detection across vault.

25.4 Privacy Dashboard
Shows: what data is stored locally, what is synced, what is sent to cloud providers, what is in the audit log.

One-click export of all user data.

One-click account deletion (with confirmation).

Telemetry status and opt-out.

Permission overview: which apps/plugins have which permissions.

25.5 Classification
Vault: REAL (local, encrypted).

Biometric unlock: WINDOWS-INTEGRATED (Windows Hello).

Breach check: REAL (remote, opt-in).

25.6 Permissions
vault.read, vault.write, vault.unlock.biometric, vault.export.

26. AUTOMATION ENGINE
26.1 Purpose
Local trigger → condition → action workflows.

26.2 Triggers
Time / schedule.

File change (watch a folder).

App launch / close.

Hotkey.

Clipboard change.

System event (lock, unlock, idle, resume).

Webhook (local HTTP endpoint).

Command palette invocation.

26.3 Actions
Launch app.

Open file / folder / URL.

Move, copy, rename, delete file (with confirmation).

Send notification.

Run allowlisted script (PowerShell, Bash, Python — each requires explicit permission).

HTTP request.

Run command palette command.

Send to companion device.

Create note / task.

Toggle focus mode.

Play sound.

26.4 Conditions
Time window.

Day of week.

App active.

File matches pattern.

Variable comparison.

User confirmation prompt.

26.5 UX
Visual flow editor (node graph).

Run history with success/failure.

Manual test run.

Enable/disable per flow.

Import/export as JSON.

Share to local registry.

26.6 Security
Script execution requires explicit permission and allowlist.

HTTP requests require explicit permission.

Never auto-run downloaded flows.

Audit-log every flow execution.

Rate-limit flows to prevent runaway loops.

26.7 Classification
REAL (local execution).

26.8 Permissions
automation.flow.create, automation.flow.run, automation.flow.import, automation.flow.export, automation.script.execute, automation.http.request.

27. PLUGIN SDK & REGISTRY
27.1 Plugin SDK
TypeScript types for the plugin API.

Scaffolding CLI.

Documentation with examples.

Capability-based permission model.

UI slots: sidebar panel, widget, command, settings page, status bar, context menu.

Sandboxed execution (Worker or separate process).

Versioned API.

27.2 Plugin Registry (Local)
Browse installed plugins.

View permissions, version, author, source.

Enable, disable, uninstall.

Update check (opt-in).

Remote registry (later — read-only browsing first).

27.3 Security
Plugins are untrusted by default.

Permission request UI before install.

High-risk permissions require explicit approval.

Plugin execution is logged.

Plugins cannot access filesystem, network, or native APIs without explicit permission.

Plugins cannot modify other plugins or core state.

27.4 Classification
REAL.

27.5 Permissions
plugin.install, plugin.execute, plugin.sdk.publish, plugin.registry.read.

28. PUBLIC LOCAL API
28.1 Purpose
Allow scripts and other apps to interact with the product.

28.2 Capabilities
HTTP API on localhost only (default).

Token-gated (bearer tokens generated in Settings).

Endpoints for: notes, tasks, calendar, clipboard, snippets, notifications.

WebSocket for events.

OpenAPI documentation.

Rate limiting.

Audit-log every request.

28.3 Security
Never bind to non-localhost without explicit approval.

Tokens are scoped (read-only, read-write, admin).

Tokens are revocable.

Tokens are stored hashed server-side.

28.4 Classification
REAL.

28.5 Permissions
public.api.enable, public.api.token.manage.

29. CLI TOOL
29.1 Purpose
Command-line access to the product.

29.2 Commands
text
myos note "Quick thought"
myos note list --tag work
myos task add "Submit report" --due tomorrow --priority high
myos task list --today
myos calendar today
myos search "query"
myos clipboard list
myos snippet add ;addr "123 Main St"
myos focus start deep-work
myos focus stop
29.3 Security
Uses the same auth as the app.

Never stores credentials in plain text.

Respects all permissions.

29.4 Classification
REAL.

30. MOBILE & WEB COMPANIONS
30.1 Mobile Companion
React Native or Flutter.

Sync: notes, tasks, calendar, clipboard (opt-in), files (opt-in).

"Send to desktop" and "Send to phone".

Notification mirroring (opt-in).

E2E encrypted sync.

Pairing via QR code.

30.2 Web Companion
Read-only by default.

Notes, tasks, calendar.

Share links for individual notes.

Auth via the same account system.

Optional: write access (opt-in).

30.3 Classification
REAL.

30.4 Permissions
companion.device.pair, companion.data.sync.

31. BROWSER EXTENSION
31.1 Purpose
Bridge the browser and the desktop app.

31.2 Capabilities
"Save to Notes" — save page, selection, or link.

"Send to Desktop" — open a link in the desktop app.

Password autofill via the vault (if built).

Clipboard sync (opt-in).

Bookmark sync (opt-in).

31.3 Security
Extension communicates only with the local app via native messaging.

Never transmits data to third parties.

Explicit permission prompts.

31.4 Classification
REAL.

32. ENTERPRISE FEATURES
32.1 Team Workspaces
Shared notes, tasks, files.

Roles: Owner, Admin, Member, Guest.

Activity feed.

Comments and mentions.

32.2 Admin Console
User management (invite, deactivate, delete).

Role assignment.

Policy configuration.

Usage analytics (aggregate, privacy-respecting).

Audit log viewer and export.

32.3 SSO (SAML / OIDC)
Configure IdP.

Enforce SSO for the organization.

Just-in-time provisioning (optional).

SCIM support (later).

32.4 Audit Export
Export audit logs as CSV or JSON.

Filter by user, action, date range.

Redact sensitive fields.

32.5 Policy Enforcement
Password policy.

MFA required.

Allowed plugins.

Allowed AI providers.

Data residency rules.

Retention rules.

32.6 Classification
REAL.

32.7 Permissions
enterprise.team.manage, enterprise.policy.enforce, enterprise.sso.configure, enterprise.audit.export.

33. CROSS-CUTTING UX IMPROVEMENTS
These apply to the existing product and to all new subsystems.

33.1 Search → Spotlight
Fuzzy matching.

Scoped search (in:, from:, tag:).

Natural language.

Preview pane.

Quick actions (Enter, Ctrl+Enter, Tab).

Search everything: apps, files, notes, tasks, calendar, emails, settings, commands, help, web (optional).

33.2 Command Palette → Extensible
Plugin-registered commands.

Parameterized commands.

Recent and pinned commands.

Aliases.

Command chaining.

33.3 Window Manager → Tiling & Layouts
Layout presets.

Layout recall.

Auto-tiling mode.

Window rules.

33.4 Workspaces → Contexts
Workspace templates.

Workspace snapshots.

Workspace sharing.

33.5 Notifications → Actionable
Inline actions.

Grouping.

History with search.

DND schedules.

33.6 Settings → Searchable & Deep-Linkable
Search across settings.

Deep links (settings://appearance/theme).

Export/import as JSON.

Per-setting reset.

33.7 Themes → Dynamic
Time-of-day theme shift.

Wallpaper-derived accent.

Seasonal theme packs.

Theme editor.

33.8 Motion → Signature Moments
Window open: scale + blur + fade.

Workspace switch: 3D card flip or parallax.

App launch: icon expands into window (FLIP).

Snap: magnetic pulse.

Notification: slide + fade + accent glow.

Lock/unlock: blur-in + scale.

First-run: choreographed onboarding.

33.9 Sound → Adaptive
Sound themes.

Contextual sounds.

Spatial audio.

Adaptive volume.

Visual equivalents always.

33.10 Plugins → Real Ecosystem
Plugin SDK.

Local registry.

Sandbox.

UI slots.

Marketplace (later).

33.11 Sync → Selective & Conflict-Free
Per-item sync toggle.

CRDT-based sync for notes/tasks.

E2E encryption.

Per-item sync status.

Time-travel history.

33.12 Performance → Adaptive
Auto performance mode.

Frame budget monitor.

Memory pressure handling.

Lazy everything.

34. EXTENDED DATABASE SCHEMA
New tables required (MySQL 8.0+ dialect; SQL Server equivalents documented separately). All tables use CHAR(36) UUIDs, UTC DATETIME(3) timestamps, foreign keys, and appropriate indexes.

text
-- Clipboard
ClipboardItems, ClipboardFavorites, ClipboardExclusions

-- Snippets
Snippets, SnippetCategories, SnippetUsage

-- Capture
Captures, CaptureAnnotations, Recordings

-- OCR
OcrJobs, OcrResults

-- Speech
Transcriptions, TtsVoices, TtsHistory

-- Tasks
Projects, Sections, Tasks, Subtasks, TaskLabels,
TaskAttachments, TaskComments, TaskRecurrence,
TaskDependencies, TimeEntries, SavedViews

-- Calendar
Calendars, CalendarEvents, CalendarReminders,
CalendarProviders, CalendarShares

-- Focus
FocusModes, FocusSessions, FocusSchedules

-- Habits & Journal
Habits, HabitCompletions, JournalEntries, MoodTags

-- AI
AiModels, AiConversations, AiMessages, AiEmbeddings,
AiPrompts, AiActions

-- Knowledge Graph
NoteLinks, NoteBacklinks, NoteTags, NoteAliases

-- Git
GitRepositories, GitCredentials (encrypted refs)

-- API Client
ApiCollections, ApiRequests, ApiEnvironments,
ApiEnvironmentVariables, ApiHistory

-- Database Client
DbConnections, DbQueryHistory, DbSavedQueries

-- SSH
SshConnections, SshKeys (encrypted refs), SshKnownHosts

-- Vault
VaultItems, VaultFolders, VaultTags, VaultAudit

-- TOTP
TotpSecrets (encrypted refs)

-- Automation
AutomationFlows, AutomationRuns, AutomationTriggers,
AutomationActions, AutomationVariables

-- Plugins
Plugins, PluginPermissions, PluginVersions,
PluginSettings, PluginUiSlots

-- Public API
ApiTokens, ApiTokenScopes, ApiRequestLog

-- Companions
CompanionDevices, CompanionSyncQueue, CompanionPairingCodes

-- Enterprise
Organizations, Teams, TeamMembers, TeamRoles,
OrgPolicies, SsoConfigurations, AuditExports
Every table must be created via a versioned migration file. No migration is executed without authorization.

35. DEFINITION OF DONE — EXTENDED
A new subsystem is complete only when all of the following are true:

Implementation meets documented acceptance criteria.

UI matches the design system.

Loading, empty, success, error, and permission-denied states exist.

Keyboard navigation works.

Accessibility reviewed (axe + manual).

Permissions enforced in main process / server, not just UI.

Tests written (unit + contract + accessibility + failure paths).

Permitted tests run; unauthorized tests not run.

Error handling and recovery considered.

Documentation updated (docs/<SUBSYSTEM>.md).

docs/CAPABILITY_MATRIX.md updated.

brain.md updated.

IMPLEMENTATION_STATUS.md updated.

docs/CHANGELOG.md updated.

Git diff reviewed.

No secrets committed.

Meaningful Git commit created.

Known limitations disclosed.

Capability classification honest.

Threat model entry added to docs/RISK_REGISTER.md.

36. GIT COMMIT EXAMPLES FOR EXPANSION PHASES
text
feat(clipboard): implement clipboard history with exclusions
feat(snippets): add trigger-based text expansion
feat(capture): implement screenshot with annotation
feat(utils): add quick utilities app
feat(emoji): add global emoji picker
feat(tasks): implement task and project manager
feat(calendar): implement local calendar
feat(calendar): add CalDAV sync
feat(focus): implement focus modes
feat(habits): add habit tracker and journal
feat(ai): add local model management
feat(ai): implement semantic search index
feat(ai): add inline AI actions to notes
feat(knowledge): add backlinks and graph view
feat(recording): implement screen recording
feat(ocr): add local OCR
feat(speech): add local speech-to-text
feat(speech): add local text-to-speech
feat(git): implement Git client with safety confirmations
feat(api): implement API client with collections and environments
feat(dbclient): implement database client with read-only default
feat(ssh): implement SSH and SFTP client
feat(vault): implement encrypted vault with Argon2id
feat(vault): add Windows Hello biometric unlock
feat(totp): implement TOTP authenticator
feat(automation): implement flow engine
feat(plugins): implement plugin SDK and local registry
feat(api): implement public local API
feat(cli): implement CLI tool
feat(companion): implement mobile pairing
feat(web): implement read-only web companion
feat(extension): implement browser extension
feat(enterprise): implement team workspaces
feat(enterprise): implement SSO
docs(brain): update engineering memory for AI subsystem
test(ai): cover semantic search boundaries
fix(vault): prevent biometric unlock after timeout
security(snippet): require explicit opt-in for global expansion
37. FINAL OPERATING INSTRUCTIONS FOR THE EXPANSION
Before starting any expansion phase:

Re-read v7.0 in full.

Re-read this expansion in full.

Inspect the current repository state.

Inspect Git status; preserve uncommitted work.

Verify Phase E0 (Foundation Audit) is complete and honest.

Update brain.md with the current baseline.

Update IMPLEMENTATION_STATUS.md.

Select the next phase from §4.

Build one vertical slice at a time.

Stop before any operation requiring approval.

During the expansion:

Reuse the existing design system, motion system, sound system, permission model, IPC contract, database layer, audit log, and notification system.

Never invent parallel infrastructure.

Never claim a feature is REAL if it is SIMULATED.

Never claim a feature is WINDOWS-INTEGRATED if it is only INFORMATIONAL.

Never download, install, or execute anything without authorization.

Never transmit user data externally without explicit consent.

Never log secrets.

Never bypass permission checks.

Update documentation, brain.md, and IMPLEMENTATION_STATUS.md after every meaningful unit.

Commit every meaningful unit to Git.

Record the commit in brain.md.

When blocked:

State the exact blocker.

Record what has been completed.

Identify what requires approval or unavailable tooling.

Continue with independent, safe work where possible.

At the end of an authorized expansion session, provide:

text
Implementation Summary
Completed Features
Partially Completed Features
Unsupported Features
Known Limitations
Security Review
Accessibility Review
Performance Review
Test Results (written vs actually run)
Files Created or Changed
Git Commits Created
Documentation Updated
Database Status
Windows Integration Status
AI Subsystem Status
Vault Status
Automation Status
Plugin Status
Companion Status
Enterprise Status
Current brain.md Status
Remaining Work
Required User Approvals
Recommended Next Task
Execution Status
Mandatory honesty block:

text
APPLICATION EXECUTED:            NO
DEV SERVER STARTED:              NO
DEPENDENCIES INSTALLED:          NO
DATABASE MIGRATIONS EXECUTED:    NO
DATABASE SERVER INSTALLED:       NO
AI MODEL DOWNLOADED:             NO
WINDOWS MODIFICATIONS PERFORMED: NO
ELEVATION REQUESTED:             NO
PRODUCTION DEPLOYMENT PERFORMED: NO
If any operation was explicitly authorized and performed, report it accurately. Never claim otherwise.

38. FINAL MANDATORY DIRECTIVE
ANTIGRAVITY: EXTEND THE PRODUCT WITHOUT BREAKING IT. DO NOT MAKE MISTAKES.

The expansion adds intelligence, productivity depth, daily-use utilities, developer power tools, security, automation, extensibility, and platform reach. Each addition must feel like it was always part of the product.

Do not build shallow versions of everything. Build coherent, complete, tested, honest subsystems. Prefer depth over breadth.

Do not claim simulated functionality is native. Do not invent functionality. Do not bypass permissions. Do not expose secrets. Do not transmit user data externally without consent. Do not install, download, or execute anything without authorization.

Use brain.md for engineering memory. Use the Decision Authority Matrix for safe decisions. Use the Assumptions Register to keep assumptions visible. Use the capability model to maintain technical honesty. Use Git after every meaningful implementation unit.

Begin with Phase E0 — Foundation Audit. Do not launch the application. Do not start a development server. Do not install dependencies. Do not execute migrations. Do not download AI models. Do not modify Windows.

Proceed with safe, documented, reversible repository work.

APPENDIX A — WHAT THIS EXPANSION ADDS
Daily-use utilities — clipboard manager, snippet expander, screenshot & annotation, quick utilities, emoji picker.

Productivity loop — task manager, calendar, focus modes, habit tracker, journal.

Local intelligence — semantic search, local AI assistant, knowledge graph, inline AI actions.

Capture & media — screen recording, OCR, speech-to-text, text-to-speech, voice notes, audio recorder.

Developer power tools — Git client, API client, database client, SSH/SFTP, remote desktop launcher, Docker GUI.

Security & trust — encrypted vault, TOTP authenticator, password generator, privacy dashboard.

Automation & extensibility — automation engine, plugin SDK, local plugin registry, public local API, CLI tool.

Platform reach — mobile companion, web companion, browser extension.

Enterprise — team workspaces, admin console, SSO, audit export, policy enforcement.

Cross-cutting UX upgrades — Spotlight search, extensible command palette, tiling layouts, workspace templates, actionable notifications, searchable settings, dynamic themes, signature motion, adaptive sound, real plugin ecosystem, selective CRDT sync, adaptive performance.

Extended permission schema — 60+ new permission keys.

Extended database schema — 40+ new tables.

Extended capability classifications — every new subsystem classified honestly.

Extended engineering memory — new brain.md sections, new docs, new risk register entries.

Extended Definition of Done — 20 criteria per subsystem.

Extended Git commit conventions — new commit message examples.

Extended honesty block — AI model download, vault, automation, plugin, companion, and enterprise status added.



MASTER GOOGLE ANTIGRAVITY DEVELOPMENT PROMPT
Boot & Login Experience — Version 1.0
Cinematic Startup Sequence with Integrated Authentication
Status: Subsystem Specification (companion to v7.0 Core and v8.0 Expansion)
Scope: Application cold-start experience — boot animation, login screen, account creation entry
Target Platform: Windows 10/11 (x64 first, ARM64 evaluated)
Development Environment: Google Antigravity
Execution Mode: BUILD-FIRST / USER-AUTHORIZED EXECUTION ONLY
Capability Honesty: Mandatory — every element classified REAL / WINDOWS-INTEGRATED / APPLICATION-SIMULATED / INFORMATIONAL / FUTURE / UNSUPPORTED

0. ABSOLUTE DIRECTIVE
DO NOT MAKE ANY MISTAKES, ANTIGRAVITY.
This document specifies the first impression of the entire product. It is the moment that decides whether the user trusts the application. It must be polished, cinematic, fast, accessible, and — above all — honest.

The boot animation and login screen are APPLICATION-SIMULATED experiences. They do not boot Windows. They do not replace Windows Hello. They do not lock the operating system. Every claim in the UI must be truthful.

The single most important behavioral rule of this subsystem:

The full boot animation must run ONLY on a genuine application cold start (npm run dev, npm start, packaged launch, or explicit restart). It must NEVER replay on renderer refresh, hot-module reload, React re-render, navigation, or route change.

If Antigravity cannot guarantee this, the subsystem is not complete.

1. PURPOSE & SCOPE
1.1 Purpose
Provide a premium, cinematic launch experience that:

Introduces the product identity with an original animated boot sequence.

Transitions seamlessly into an integrated login screen.

Offers account creation as a clearly accessible secondary action in a corner.

Feels fast, smooth, and intentional.

Respects accessibility, performance, and user preferences.

Never replays on refresh — only on genuine app launch.

1.2 Scope
In scope:

Boot splash animation.

Loading/progress indication.

Transition into login screen.

Login form (email + password, MFA challenge, biometric if available).

"Create account" entry point in a corner.

"Continue without account" (local profile mode) where supported.

Transition from login into the desktop shell.

Reduced-motion and performance-mode variants.

Sound design for boot and login.

Accessibility for the entire sequence.

Cold-start detection mechanism.

Out of scope:

The signup form itself (specified in v7.0 §15.2 — this document only defines the entry point and transition into it).

The desktop shell (specified in v7.0 §18).

The lock screen (specified in v7.0 §37 — this is a separate, later experience).

Windows-level boot, login, or Hello integration (WINDOWS-INTEGRATED features, if implemented, must be labeled honestly).

2. CRITICAL RULE — COLD START ONLY
2.1 The rule
The full boot animation sequence must execute exactly once per application process launch and never again until the process is fully terminated and restarted.

2.2 What counts as a cold start (animation plays)
Event	Animation plays?
npm run dev first launch	✅ YES
npm start (production build)	✅ YES
Packaged .exe launch	✅ YES
User selects "Restart application" from the menu	✅ YES
Explicit app.relaunch() after update	✅ YES
Second instance opened while first is running	❌ NO (focus existing window)
OS resumes from sleep	❌ NO
App window restored from minimized	❌ NO
2.3 What does NOT count as a cold start (animation must NOT play)
Event	Animation plays?
Renderer refresh (Ctrl+R, F5)	❌ NO
Vite / webpack HMR reload	❌ NO
React StrictMode double-mount in dev	❌ NO
Route change / navigation	❌ NO
Component re-render	❌ NO
Window resize	❌ NO
Workspace switch	❌ NO
Theme change	❌ NO
Logout → return to login	⚠️ Login shows, but boot animation does NOT replay
Session expiration → login	⚠️ Login shows, but boot animation does NOT replay
User manually locks the app	⚠️ Lock screen shows, not boot
2.4 How to guarantee this — the mechanism
The boot animation must be gated by a main-process-owned, in-memory, per-process-launch flag that is never persisted and never derivable from renderer state.

2.4.1 Main process
typescript
// apps/desktop/electron/bootState.ts

/**
 * Boot state is process-local. It is created fresh every time the
 * Electron main process starts and is destroyed when the process exits.
 * It is NEVER written to disk, NEVER stored in SQLite, NEVER persisted
 * to sessionStorage or localStorage.
 */
interface BootState {
  /** True until the first renderer has consumed the cold-boot signal. */
  isFirstRendererLoad: boolean;
  /** Monotonic process start timestamp (not persisted). */
  processStartedAt: number;
  /** Unique ID for this process launch. */
  launchId: string;
}

const bootState: BootState = {
  isFirstRendererLoad: true,
  processStartedAt: Date.now(),
  launchId: crypto.randomUUID(),
};

/**
 * Called exactly once per renderer, and only for the first renderer
 * attached to this main process. Subsequent calls (from reloads,
 * new windows, HMR) return false.
 */
export function consumeColdBootSignal(): {
  isColdBoot: boolean;
  launchId: string;
} {
  const isColdBoot = bootState.isFirstRendererLoad;
  if (isColdBoot) {
    bootState.isFirstRendererLoad = false;
  }
  return { isColdBoot, launchId: bootState.launchId };
}
2.4.2 IPC channel
Register a single, read-and-consume IPC channel:

text
boot:consume-cold-signal  →  { isColdBoot: boolean; launchId: string }
This channel is:

Read-only from the renderer's perspective.

Consumable exactly once per process (idempotent after first call).

Validated with Zod.

Available only during the boot window (before the desktop shell mounts).

2.4.3 Preload
typescript
// apps/desktop/preload/boot.ts
contextBridge.exposeInMainWorld('boot', {
  consumeColdSignal: (): Promise<{ isColdBoot: boolean; launchId: string }> =>
    ipcRenderer.invoke('boot:consume-cold-signal'),
});
2.4.4 Renderer
typescript
// apps/desktop/renderer/boot/useColdBoot.ts
export function useColdBoot() {
  const [state, setState] = useState<
    'checking' | 'cold' | 'warm'
  >('checking');

  useEffect(() => {
    let cancelled = false;
    window.boot.consumeColdSignal().then(({ isColdBoot }) => {
      if (cancelled) return;
      setState(isColdBoot ? 'cold' : 'warm');
    });
    return () => { cancelled = true; };
  }, []); // <- empty deps, runs once per renderer mount

  return state;
}
2.4.5 Rule for HMR safety
During development, Vite/webpack HMR may remount React trees. The useEffect with empty deps may run again. The IPC channel is consumable-once, so the second call returns isColdBoot: false. This is the guarantee.

Do not use sessionStorage, localStorage, cookies, or any renderer-persisted state to gate the boot animation. Those survive refreshes and would break the rule in the other direction (they would suppress the animation on a genuine cold start if the renderer is reused).

2.4.6 Second-instance handling
Use app.requestSingleInstanceLock(). If a second instance is launched while the first is running:

Do not start a new process.

Focus the existing window.

Do not replay the boot animation.

2.4.7 Relaunch handling
If the app relaunches itself (e.g., after an update), call app.relaunch() and app.exit(). The new process will have a fresh bootState, so the animation will play. This is correct — a relaunch is a genuine cold start.

2.5 Acceptance criteria for §2
Launching the app via npm run dev shows the full boot animation exactly once.

Pressing Ctrl+R in the renderer does not replay the boot animation.

Editing a React file and triggering HMR does not replay the boot animation.

Navigating between routes does not replay the boot animation.

Logging out returns to the login screen (not the boot animation).

Restarting the app via the app menu replays the boot animation.

Opening a second instance focuses the first window and does not replay the animation.

The mechanism works identically in dev and packaged builds.

No boot state is ever written to disk, SQLite, sessionStorage, or localStorage.

3. BOOT SEQUENCE — STAGE BY STAGE
The boot sequence is a deterministic state machine. Every stage has an explicit duration, a minimum and maximum time, an exit condition, and a reduced-motion variant.

3.1 State machine
text
IDLE
  → CONSUME_COLD_SIGNAL
      → (cold)   COLD_BOOT
      → (warm)   WARM_BOOT
      → (error)  BOOT_ERROR

COLD_BOOT
  → STAGE_VOID          (black screen, 80–120 ms)
  → STAGE_LOGO          (logo reveal, 500–900 ms)
  → STAGE_LOADER        (progress indication, 600–2000 ms)
  → STAGE_HANDOFF       (fade out, 300–500 ms)
  → LOGIN_ENTRY

WARM_BOOT
  → LOGIN_ENTRY         (no animation; instant)

LOGIN_ENTRY
  → LOGIN_READY         (login panel interactive)
  → (submit)            AUTHENTICATING
  → (success)           DESKTOP_HANDOFF
  → (failure)           LOGIN_ERROR
  → (create account)    SIGNUP_ENTRY
  → (local profile)     LOCAL_PROFILE_ENTRY

AUTHENTICATING
  → (mfa required)      MFA_CHALLENGE
  → (success)           DESKTOP_HANDOFF
  → (failure)           LOGIN_ERROR

MFA_CHALLENGE
  → (success)           DESKTOP_HANDOFF
  → (failure)           MFA_ERROR
  → (cancel)            LOGIN_READY

SIGNUP_ENTRY
  → (back)              LOGIN_READY
  → (success)           DESKTOP_HANDOFF

LOCAL_PROFILE_ENTRY
  → (success)           DESKTOP_HANDOFF

DESKTOP_HANDOFF
  → DESKTOP

BOOT_ERROR
  → (retry)             COLD_BOOT
  → (safe mode)         DESKTOP_SAFE
3.2 Stage durations
Stage	Min	Target	Max	Reduced Motion
STAGE_VOID	60 ms	100 ms	150 ms	40 ms (instant black)
STAGE_LOGO	400 ms	700 ms	1200 ms	200 ms (fade only, no scale)
STAGE_LOADER	400 ms	1200 ms	2500 ms	300 ms (no spinner; static dot)
STAGE_HANDOFF	200 ms	350 ms	500 ms	150 ms (fade only)
LOGIN_ENTRY (panel reveal)	200 ms	350 ms	600 ms	150 ms (fade only)
DESKTOP_HANDOFF	250 ms	400 ms	700 ms	200 ms (fade only)
Rule: The total cold-boot sequence (VOID → LOGO → LOADER → HANDOFF) must not exceed 3 seconds on reference hardware, and must not be shorter than 1.2 seconds even if all async work completes instantly (to avoid a jarring flash).

Rule: The boot sequence must wait for both:

The minimum display duration, and

The application's readiness signal (preload, main-process services, session restoration).

Whichever finishes last determines the exit from STAGE_LOADER.

4. STAGE_VOID — The Black Screen
4.1 Purpose
A brief, intentional pause before the logo. It signals "something is starting" and prevents a flash of unstyled content.

4.2 Behavior
Pure black (#000000) in dark theme.

Pure near-black (#0d1015) in light theme (never a jarring white flash).

No text, no logo, no spinner.

Optional: a single 1-pixel accent-colored dot in the dead center, at 20% opacity, fading in over the stage duration. This is the seed of the logo reveal.

4.3 Accessibility
prefers-reduced-motion: reduce to 40 ms or skip entirely.

Never show a flashing element.

Never show high-contrast content that would shock.

4.4 Performance
No animations that require JS.

Rendered as part of the initial HTML/CSS so it appears before React hydrates.

5. STAGE_LOGO — The Identity Reveal
5.1 Purpose
Introduce the product identity with a memorable, original animation. This is the "moment" of the boot.

5.2 Design requirements
The logo must be original — no Microsoft, Apple, Ubuntu, or third-party OS branding.

The logo must be vector (SVG) for crisp rendering at any DPI.

The logo must work as a monochrome glyph in High Contrast mode.

The logo must have an accessible name announced to screen readers.

5.3 Animation composition
The logo reveal is a layered sequence. Each layer is independent and can be tuned.

Layer	Element	Animation	Duration	Delay
L1	Accent dot	Scale 0.5 → 1.0, opacity 0 → 1	300 ms	0 ms
L2	Logo glyph	Opacity 0 → 1, scale 0.92 → 1.0	500 ms	100 ms
L3	Logo glow	Radial gradient opacity 0 → 0.35	600 ms	200 ms
L4	Subtle ring	Scale 0.6 → 1.1, opacity 0.4 → 0	800 ms	250 ms
L5	Wordmark	Opacity 0 → 1, translateY 6px → 0	400 ms	500 ms
L6	Tagline (optional)	Opacity 0 → 0.6	400 ms	700 ms
Easing: cubic-bezier(0.2, 0, 0, 1) (decelerate) for most layers. L4 ring uses cubic-bezier(0.05, 0.7, 0.1, 1).

Total: ~900 ms.

5.4 Reduced-motion variant
L1: instant

L2: fade only (no scale)

L3: instant

L4: skipped

L5: fade only (no translate)

L6: instant

Total: ~300 ms

5.5 Performance-mode variant
L4 ring: skipped

L3 glow: reduced opacity

Total: ~600 ms

5.6 Sound
A single, subtle "boot chime" plays at the start of STAGE_LOGO.

Original or properly licensed audio only.

Volume respects the user's system volume and app sound settings.

Never plays if sound is muted, if ENABLE_WEB_AUDIO_SOUNDS=false, or if the user disabled boot sounds.

Duration: 400–800 ms.

Frequency: gentle, low-to-mid range, no sharp transients.

Visual equivalent: the logo reveal itself. Sound is never the sole indicator.

5.7 Accessibility
Screen reader announcement: "Starting [Product Name]."

Logo has role="img" and aria-label="[Product Name] logo".

No rapid flashing (well below 3 Hz).

High Contrast mode: logo renders as a solid monochrome glyph with a visible border.

6. STAGE_LOADER — Progress Indication
6.1 Purpose
Communicate that the application is initializing and provide honest progress feedback.

6.2 Honest progress rule
Never show a fake progress bar.

If real progress can be measured (e.g., number of services initialized, number of migrations checked), show it. If it cannot, show an indeterminate indicator — never a bar that pretends to move.

6.3 Initialization tasks (real)
The loader reflects actual, measurable initialization:

Task	Weight	Can fail?
Preload bridge ready	5%	No
Main process services ready	15%	Yes
Local database open + migrate check	20%	Yes
Session restoration	15%	Yes
Capability detection	10%	No
Application registry load	10%	Yes
Theme + settings load	10%	No
Sync queue hydration	10%	Yes
Font + asset preload	5%	No
Total: 100%.

6.4 Visual design
The loader uses one of the following, chosen by the design system:

Option A — Orbiting dot (default):

A small accent-colored dot orbits a circle of radius R.

The orbit trail fades behind the dot.

R = 24 px at 100% DPI, scaled by devicePixelRatio.

Orbit duration: 1400 ms per revolution.

GPU-composited (transform: rotate() on a container, not per-frame JS).

Option B — Breathing pulse:

A soft accent-colored circle pulses at 40% → 60% opacity.

Period: 1800 ms.

Used when a spinner would feel too busy.

Option C — Segmented ring:

A ring of N segments (N = 8), each fading in sequence.

Segment duration: 160 ms.

Loop duration: 1280 ms.

Rule: Only one loader style is active at a time. It is selected by the design system, not per-render.

6.5 Progress text
Below the loader, an optional line of text:

text
Initializing…
Loading your workspace…
Restoring session…
Almost ready…
Rules:

Text must be truthful. "Restoring session" only appears while session restoration is actually running.

Text must not cycle faster than 800 ms per message.

Text must be localized via the i18n system.

Text must be announced to screen readers via aria-live="polite".

6.6 Failure handling
If a task fails:

The loader stops.

A clear, honest error message appears (see §12).

The user is offered: Retry, Continue in safe mode (where safe), View details, Quit.

6.7 Reduced-motion variant
Loader becomes a static accent dot.

Progress text updates normally.

Total loader duration still respects the minimum.

6.8 Performance
Loader uses transform and opacity only.

No layout-triggering animations.

No continuous canvas rendering.

Loader is paused if the window is hidden (though during boot the window is visible).

7. STAGE_HANDOFF — Transition to Login
7.1 Purpose
Smoothly dissolve the boot sequence into the login screen.

7.2 Animation
Element	Animation	Duration	Easing
Logo	Opacity 1 → 0, scale 1.0 → 1.04	350 ms	cubic-bezier(0.3, 0, 0.8, 0.15)
Loader	Opacity 1 → 0	250 ms	same
Background	Cross-fade from boot gradient to login wallpaper	400 ms	cubic-bezier(0.2, 0, 0, 1)
Login panel	Opacity 0 → 1, translateY 12px → 0, scale 0.98 → 1.0	350 ms	cubic-bezier(0.2, 0, 0, 1)
Total: ~750 ms, overlapping.

7.3 Reduced-motion variant
Logo and loader fade out in 150 ms.

Login panel fades in over 200 ms. No translate, no scale.

8. LOGIN SCREEN
8.1 Purpose
Provide a secure, elegant, keyboard-first login experience with a clearly accessible account-creation entry point.

8.2 Layout
text
┌──────────────────────────────────────────────────────────────┐
│                                                  [Create     │
│                                                   account] → │
│                                                              │
│                                                              │
│                    ┌────────────────────┐                    │
│                    │                    │                    │
│                    │   [Avatar / Logo]  │                    │
│                    │                    │                    │
│                    │   Welcome back     │                    │
│                    │                    │                    │
│                    │   [Email field]    │                    │
│                    │   [Password field] │                    │
│                    │   [☐ Remember me]  │                    │
│                    │                    │                    │
│                    │   [   Sign in   ]  │                    │
│                    │                    │                    │
│                    │   Forgot password? │                    │
│                    │                    │                    │
│                    │   ─── or ───       │                    │
│                    │                    │                    │
│                    │   [Continue local] │                    │
│                    │                    │                    │
│                    └────────────────────┘                    │
│                                                              │
│                                                              │
│  [version]                              [privacy] [terms]   │
└──────────────────────────────────────────────────────────────┘
8.3 Background
Uses the active wallpaper, blurred and darkened (acrylic-style).

If no wallpaper is set, uses a subtle animated gradient (paused in Performance Mode).

If Reduced Motion is enabled, uses a static gradient.

The background must never reduce text contrast. A scrim is always applied.

8.4 Login panel
Centered card with acrylic surface.

Max width: 400 px.

Padding: 32 px.

Corner radius: --radius-large (16 px).

Shadow: layered elevation token.

Border: 1 px subtle border + 1 px inner highlight.

The panel is the focus target on entry.

8.5 Fields
Email field:

type="email", autocomplete="username".

aria-label or associated <label>.

Validated on blur and on submit.

Error text appears below, associated via aria-describedby.

No layout shift when errors appear (reserve space).

Password field:

type="password", autocomplete="current-password".

Show/hide toggle (icon button, aria-pressed).

Caps Lock indicator (detected via KeyboardEvent.getModifierState('CapsLock')).

Validated on submit only.

Remember me:

Checkbox, autocomplete not applicable.

Tooltip explains what is remembered and where.

Default: unchecked (privacy-first).

Submit button:

Primary action.

Disabled while pending.

Shows a subtle inline spinner during authentication.

Full keyboard activation (Enter submits).

Forgot password link:

Opens the forgot-password flow.

Never reveals whether an email exists.

Divider + local profile:

"or" divider.

"Continue with local profile" button — only shown if local profile mode is enabled.

Clearly labeled as local-only: "Your data stays on this device."

8.6 Create account entry — the corner link
This is the critical detail the user requested.

Placement: Top-right corner of the screen.

Design:

Text: "Create account" or "New here? Create account".

Style: subtle link, accent color on hover.

Icon: a small + or user-plus glyph.

Always visible, always keyboard-focusable.

Minimum touch target: 44×44 px (visual size may be smaller, but the hit area must be ≥ 44 px).

aria-label="Create a new account".

Behavior:

Clicking or activating opens the signup flow.

Does not reload the app.

Does not replay the boot animation.

Transitions into the signup screen with the same motion language as the login panel.

Responsive behavior:

On narrow windows (< 600 px), the link remains in the top-right but may shrink to an icon + tooltip.

Never moves to a location that would be clipped or hidden.

Accessibility:

Fully keyboard reachable.

Focus ring always visible.

Screen reader announces: "Create a new account, link" or "Create a new account, button".

Honesty:

If signup is disabled (e.g., offline, or local-only build), the link must be hidden or disabled with a clear explanation — never a dead link.

8.7 Secondary entries
Depending on configuration, additional entries may appear below the login form:

"Continue with local profile" (if enabled).

"Sign in with Windows Hello" (if WINDOWS-INTEGRATED biometric is implemented — labeled honestly).

"Sign in with SSO" (if enterprise SSO is configured).

"Recover account" (link to recovery flow).

Rule: Never show a sign-in option that does not work. If a provider is unavailable, hide it or disable it with an explanation.

8.8 Footer
App version (from package.json or build metadata).

Privacy policy link.

Terms of service link.

Optional: "Check for updates" link.

All footer text must meet contrast requirements (≥ 4.5:1 for normal text).

8.9 Motion
Element	Animation	Duration	Delay
Panel	Opacity 0 → 1, translateY 12px → 0	350 ms	0 ms
Avatar/Logo	Opacity 0 → 1, scale 0.9 → 1.0	400 ms	100 ms
Welcome text	Opacity 0 → 1	300 ms	180 ms
Fields	Opacity 0 → 1, translateY 6px → 0	250 ms each	240/300 ms
Submit button	Opacity 0 → 1, scale 0.96 → 1.0	250 ms	380 ms
Footer	Opacity 0 → 1	300 ms	450 ms
Corner "Create account"	Opacity 0 → 1, translateX 6px → 0	300 ms	200 ms
Reduced-motion variant: all fades only, no translate or scale, total ~200 ms.

9. ACCOUNT CREATION ENTRY FLOW
9.1 Transition from login to signup
When the user activates "Create account":

The login panel animates out: opacity 1 → 0, translateY 0 → -8px, 250 ms.

The signup panel animates in: opacity 0 → 1, translateY 12px → 0, 350 ms.

The corner link updates to "Back to sign in".

Focus moves to the first field of the signup form.

A screen reader announcement: "Create a new account. Form."

The boot animation is not replayed.

9.2 Signup form
The signup form itself is specified in v7.0 §15.2. This document only defines:

The transition into it.

The transition back to login.

The corner link behavior.

9.3 Returning to login
From signup, a "Back to sign in" link returns to login with the reverse animation.

10. DESKTOP HANDOFF — Transition into the App
10.1 Purpose
After successful authentication (or local profile entry), transition smoothly into the desktop shell.

10.2 Animation
Element	Animation	Duration	Easing
Login panel	Opacity 1 → 0, scale 1.0 → 0.98	250 ms	cubic-bezier(0.3, 0, 0.8, 0.15)
Background	Blur 20px → 0px, brightness 0.7 → 1.0	400 ms	cubic-bezier(0.2, 0, 0, 1)
Desktop shell	Opacity 0 → 1, scale 1.02 → 1.0	400 ms	cubic-bezier(0.2, 0, 0, 1)
Taskbar/Dock	translateY 20px → 0	350 ms	delay 150 ms
Desktop icons	Staggered fade-in	40 ms each	delay 200 ms
Widgets (if visible)	Fade-in	300 ms	delay 300 ms
Total: ~700 ms.

10.3 Reduced-motion variant
All fades, no transforms.

Total ~400 ms.

10.4 Sound
A subtle "welcome" chime plays at the start of the handoff.

Respects all sound settings.

Visual equivalent: the desktop shell itself.

10.5 Accessibility
Screen reader announcement: "Signed in. Desktop ready."

Focus moves to the desktop shell's default focus target (taskbar or first window, per the shell spec).

Focus is never trapped on the login screen after handoff.

11. ERROR HANDLING
11.1 Boot errors
If a boot initialization task fails:

The loader stops.

An error card replaces the loader.

The card contains:

What happened: a plain-language description.

Why it happened: when known.

What the user can do: Retry, Safe mode, View details, Quit.

Technical details: expandable, non-sensitive.

The error card is keyboard-navigable.

The error is logged to the diagnostic log (never containing secrets).

11.2 Login errors
Error	UI message	Action
Invalid credentials	"The email or password is incorrect."	Stay on login
Email not verified	"Please verify your email. Resend verification?"	Show resend link
MFA required	(Transition to MFA challenge)	Show MFA field
MFA invalid	"The code is incorrect or expired."	Stay on MFA
Account locked	"Too many attempts. Try again in N minutes."	Show countdown
Rate limited	"Too many attempts. Please wait."	Disable submit
Network error	"Cannot reach the server. Check your connection."	Retry, Offline mode
Server error	"Something went wrong on our side. Try again."	Retry
Token reuse detected	"Your session was ended for security. Please sign in again."	Return to login
Rule: Never reveal whether an email exists (no user enumeration).

Rule: Never show a raw stack trace.

Rule: Every error must be actionable.

11.3 Safe mode
If the app fails to boot twice in a row, offer Safe Mode:

Disables plugins, automation, widgets, and heavy subsystems.

Loads the desktop shell with minimal services.

Shows a banner: "Safe mode — some features are disabled."

Provides a "Restart normally" action.

Safe mode is APPLICATION-SIMULATED — it is an in-app mode, not a Windows mode. Label it honestly.

12. REDUCED MOTION, PERFORMANCE MODE, AND ACCESSIBILITY
12.1 Reduced Motion
When prefers-reduced-motion: reduce is detected, or the user enables "Reduced Motion" in Settings:

All transforms are removed or minimized.

All animations are shortened.

The boot sequence still runs, but with fades only.

The loader becomes static.

The desktop handoff is a simple cross-fade.

12.2 Performance Mode
When Performance Mode is enabled:

The loader uses a simpler style (no orbiting dot).

Background blur is reduced.

Particle/gradient effects are disabled.

Sound is still available but at a reduced default volume.

The boot sequence total time is unchanged (perceived performance must not suffer).

12.3 High Contrast
The logo renders as a solid monochrome glyph.

The loader uses a high-contrast stroke.

The login panel uses a solid background, not acrylic.

Focus rings are always visible.

No color-only status communication.

12.4 Screen readers
All stages announce their state via aria-live="polite" (or assertive for errors).

The logo has an accessible name.

The loader has an accessible name and value.

The login form uses semantic HTML (<form>, <label>, <input>, <button>).

Errors are associated with their fields.

Focus order is logical.

Focus is visible at all times.

12.5 Keyboard
The entire sequence is keyboard-navigable.

Enter submits the login form.

Escape clears non-destructive state (e.g., closes the error card).

Tab cycles through focusable elements in logical order.

The "Create account" corner link is reachable via Tab from the top of the page.

No keyboard trap.

12.6 Internationalization
All user-facing strings use translation keys.

The sequence supports RTL layouts.

The corner link position mirrors correctly in RTL.

Fonts are selected via the font fallback system.

Date, time, and number formatting is locale-aware.

13. SOUND DESIGN
13.1 Sounds in this subsystem
Event	Sound	Duration	Category
Boot start	Boot chime	600 ms	SYSTEM
Login success	Welcome chime	400 ms	SUCCESS
Login failure	Soft error tone	300 ms	ERROR
Account creation start	Subtle transition	200 ms	UI
Desktop handoff	Welcome chime	400 ms	SYSTEM
13.2 Rules
All sounds are original or properly licensed.

No copyrighted OS sounds.

Volume respects user settings and system mute.

Every sound has a visual equivalent.

Sound is never the sole indicator of status.

If ENABLE_WEB_AUDIO_SOUNDS=false, no sounds play.

If the user disabled boot sounds, none play.

Sounds are rate-limited (no overlapping chaos).

14. PERFORMANCE BUDGETS
Metric	Target
Time to first pixel (VOID)	< 100 ms
Time to logo visible	< 300 ms
Time to loader visible	< 700 ms
Total cold-boot to login ready	< 3 s on reference hardware
Warm-boot to login ready	< 500 ms
Frame rate during boot animation	60 FPS target, never below 45 FPS
Memory during boot	< 200 MB peak
CPU during boot	< 15% average
Rule: The boot sequence must never block the main thread. All animations are CSS/compositor-driven. No synchronous work in animation frames.

Rule: The boot sequence must not delay the app's actual readiness. If the app is ready before the minimum display time, wait. If the app is slow, show honest progress.

15. CAPABILITY CLASSIFICATION
Element	Classification	Notes
Boot animation	APPLICATION-SIMULATED	Does not boot Windows
Logo reveal	APPLICATION-SIMULATED	Original asset
Loader	REAL	Reflects real initialization
Login form	REAL	Uses the auth system
Create account link	REAL	Opens the signup flow
Local profile mode	REAL	Local-only
Windows Hello sign-in	WINDOWS-INTEGRATED (if implemented)	Labeled honestly
SSO sign-in	REAL (requires IdP)	Labeled honestly
Safe mode	APPLICATION-SIMULATED	In-app mode
Boot sound	REAL (local audio)	Original or licensed
Rule: Never claim the boot animation boots Windows. Never claim the login screen is the Windows login screen. Never claim safe mode is Windows Safe Mode.

16. FILES TO CREATE
text
apps/desktop/
├── electron/
│   ├── bootState.ts                 # process-local boot flag
│   ├── ipc/
│   │   └── boot.ts                  # boot:consume-cold-signal handler
│   └── window/
│       └── createMainWindow.ts      # window creation with boot gating
├── preload/
│   └── boot.ts                      # contextBridge for boot API
└── renderer/
    ├── boot/
    │   ├── BootSequence.tsx         # top-level state machine
    │   ├── useColdBoot.ts           # cold-boot detection hook
    │   ├── stages/
    │   │   ├── StageVoid.tsx
    │   │   ├── StageLogo.tsx
    │   │   ├── StageLoader.tsx
    │   │   └── StageHandoff.tsx
    │   └── BootError.tsx
    ├── auth/
    │   ├── LoginScreen.tsx
    │   ├── CreateAccountLink.tsx    # corner entry
    │   ├── MfaChallenge.tsx
    │   └── LoginError.tsx
    └── desktop/
        └── DesktopHandoff.tsx       # transition into shell

packages/
├── contracts/
│   └── boot/
│       └── boot.contract.ts         # Zod schemas for boot IPC
└── ui/
    └── boot/
        ├── BootLogo.tsx             # original SVG logo
        ├── BootLoader.tsx           # loader variants
        └── BootSound.ts             # sound trigger

assets/
├── branding/
│   ├── logo.svg
│   ├── logo-mono.svg                # high contrast
│   └── wordmark.svg
└── sounds/
    ├── boot-chime.ogg
    ├── welcome-chime.ogg
    └── error-tone.ogg

docs/
├── BOOT_EXPERIENCE.md
├── LOGIN_UX.md
└── SOUND_DESIGN.md (extend)

brain.md (extend)
17. IMPLEMENTATION PHASES
Phase B0 — Boot state mechanism
Implement bootState.ts in the main process.

Implement the boot:consume-cold-signal IPC channel with Zod validation.

Implement the preload bridge.

Implement useColdBoot.ts in the renderer.

Write unit tests proving:

First call returns isColdBoot: true.

Second call returns isColdBoot: false.

Reloading the renderer does not replay the boot.

Write an integration test (within authorization) proving HMR does not replay.

Exit criteria: Cold-boot detection is provably correct.

Phase B1 — Boot sequence UI
Implement STAGE_VOID.

Implement STAGE_LOGO with the original SVG logo.

Implement STAGE_LOADER with honest progress.

Implement STAGE_HANDOFF.

Wire to the real initialization tasks.

Implement reduced-motion and performance variants.

Implement the boot sound.

Exit criteria: The boot animation runs once per cold start, respects preferences, and never replays on refresh.

Phase B2 — Login screen
Implement the login panel with all fields.

Implement the corner "Create account" link.

Implement error states.

Implement the transition to signup.

Implement the transition to MFA.

Implement the transition to desktop handoff.

Implement local profile entry (if enabled).

Implement Windows Hello entry (if implemented; labeled honestly).

Exit criteria: Login works, is keyboard-accessible, is screen-reader-friendly, and the corner link is always reachable.

Phase B3 — Polish
Motion refinement across all stages.

Sound refinement.

Accessibility pass (axe + manual + keyboard + screen reader).

Performance pass (measure and record).

Visual regression baseline.

High Contrast pass.

RTL pass.

Localization pass (en-US, ur-PK).

Exit criteria: The sequence feels premium, is accessible, and meets budgets.

Phase B4 — Error & recovery
Implement boot error handling.

Implement safe mode.

Implement retry logic.

Implement the diagnostic log for boot failures.

Implement the "restart application" action.

Exit criteria: Failures are honest, recoverable, and never leave the user stuck.

18. DEFINITION OF DONE
This subsystem is complete only when:

The boot animation plays exactly once per cold start.

The boot animation never plays on renderer refresh.

The boot animation never plays on HMR reload.

The boot animation never plays on route change.

Logout returns to the login screen, not the boot animation.

The login screen is fully keyboard-navigable.

The "Create account" corner link is always visible and reachable.

The "Create account" link never reloads the app.

All animations respect Reduced Motion.

All animations respect Performance Mode.

High Contrast mode renders correctly.

Screen readers announce each stage.

Sounds are original or properly licensed.

Sounds respect mute and settings.

Errors are honest and actionable.

No fake progress bars.

No claim that the boot animation boots Windows.

No claim that the login screen is the Windows login.

No secrets in logs.

Total cold-boot time ≤ 3 s on reference hardware.

Tests written and (where authorized) run.

Documentation updated (docs/BOOT_EXPERIENCE.md, docs/LOGIN_UX.md).

brain.md updated.

IMPLEMENTATION_STATUS.md updated.

docs/CHANGELOG.md updated.

Git diff reviewed.

No secrets committed.

Meaningful Git commit created.

19. GIT COMMIT EXAMPLES
text
feat(boot): add process-local cold-boot signal
feat(boot): implement boot sequence state machine
feat(boot): add original animated logo reveal
feat(boot): implement honest initialization loader
feat(boot): add reduced-motion and performance variants
feat(auth): implement login screen
feat(auth): add corner create-account entry
feat(auth): implement MFA challenge transition
feat(auth): implement desktop handoff animation
feat(sound): add boot and welcome chimes
test(boot): verify cold-boot signal is consumable once
test(boot): verify refresh does not replay animation
test(auth): cover login error states
docs(boot): document boot experience
docs(auth): document login UX
fix(boot): prevent animation replay on HMR
20. FINAL OPERATING INSTRUCTIONS
Before starting:

Re-read v7.0 §15 (Authentication) and §28 (Motion).

Re-read this document in full.

Inspect the existing renderer entry point and router.

Inspect how the renderer is currently mounted.

Inspect the main process window creation.

Confirm no existing boot/loading screen conflicts.

Create docs/BOOT_EXPERIENCE.md as a stub.

Update brain.md with a "Boot Experience" section marked IN_PROGRESS.

Begin with Phase B0.

During implementation:

Never use sessionStorage, localStorage, cookies, or any renderer-persisted state to gate the boot animation.

Never persist the cold-boot flag to disk.

Never replay the boot animation on refresh, HMR, or navigation.

Never show a fake progress bar.

Never claim the boot animation boots Windows.

Never claim the login screen is the Windows login.

Never block the main thread with animations.

Never autoplay loud audio.

Always provide a visual equivalent for every sound.

Always respect Reduced Motion.

Always respect High Contrast.

Always keep the "Create account" link reachable.

Always update documentation and brain.md.

Always commit meaningful units to Git.

When blocked:

State the exact blocker.

Record what has been completed.

Identify what requires approval.

Continue with independent safe work where possible.

At the end of an authorized session, provide the standard expansion report plus:

text
Boot Experience Status
Cold-Boot Detection Verified:     YES / NO
Refresh Replay Verified Absent:   YES / NO
HMR Replay Verified Absent:       YES / NO
Login Screen Status
Create Account Entry Status
Motion Compliance:                YES / NO
Accessibility Compliance:         YES / NO
Performance Budget Met:           YES / NO
Mandatory honesty block:

text
APPLICATION EXECUTED:            NO
DEV SERVER STARTED:              NO
DEPENDENCIES INSTALLED:          NO
DATABASE MIGRATIONS EXECUTED:    NO
WINDOWS MODIFICATIONS PERFORMED: NO
ELEVATION REQUESTED:             NO
PRODUCTION DEPLOYMENT PERFORMED: NO
If any operation was explicitly authorized and performed, report it accurately.

21. FINAL MANDATORY DIRECTIVE
ANTIGRAVITY: BUILD A CINEMATIC, HONEST, ACCESSIBLE LAUNCH EXPERIENCE. DO NOT MAKE MISTAKES.

The boot animation is the product's handshake with the user. It must feel premium, fast, and intentional. It must run once per cold start and never again until the process restarts.

The login screen must be elegant, keyboard-first, screen-reader-friendly, and must always offer a clearly reachable "Create account" entry in the corner.

Every animation must respect Reduced Motion. Every sound must have a visual equivalent. Every claim must be truthful. Every failure must be recoverable.

Use brain.md for engineering memory. Use the Decision Authority Matrix for safe decisions. Use the capability model to maintain honesty. Use Git after every meaningful implementation unit.

Begin with Phase B0 — Boot state mechanism. Do not launch the application. Do not start a development server. Do not install dependencies. Do not execute migrations. Do not modify Windows.

Proceed with safe, documented, reversible repository work.

DO NOT MAKE MISTAKES, ANTIGRAVITY.
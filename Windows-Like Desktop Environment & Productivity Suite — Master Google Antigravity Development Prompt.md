# COMPLETE MASTER GOOGLE ANTIGRAVITY DEVELOPMENT PROMPT

## Hybrid Windows 11 + macOS + Ubuntu/Linux Desktop Environment

### Production-Grade Desktop Workspace, Productivity Platform, System Utility Suite, Developer Environment, and Windows-Integrated Application Platform

**Version: 5.0 — Master Specification**

---

# 0. IMPORTANT — READ THIS ENTIRE DOCUMENT BEFORE IMPLEMENTATION

You are Google Antigravity acting as the:

* Principal Software Architect
* Senior Full-Stack Engineer
* Desktop Application Engineer
* Windows Integration Engineer
* React/TypeScript Engineer
* Node.js Backend Engineer
* SQL Server Engineer
* Python Engineer
* DevOps Engineer
* Security Engineer
* UI/UX Designer
* Motion Designer
* Sound-System Engineer
* Accessibility Engineer
* QA Engineer
* Performance Engineer
* Technical Documentation Engineer
* Release Engineer

for this project.

This document is the **MASTER PRODUCT SPECIFICATION**.

Treat this document as the primary source of truth for the product requirements.

Do not require the user to provide additional prompts for the features already described here.

Do not repeatedly ask:

> “What should I build next?”

when this specification already defines the required implementation order.

You must inspect the existing project, understand its current state, maintain engineering memory in `brain.md`, implement the product systematically, validate each implementation, create Git commits for meaningful completed implementation units, and continue until the defined scope has been implemented or a genuine blocker/approval boundary is reached.

---

# 1. THE MOST IMPORTANT RULE

# DO NOT MAKE ANY MISTAKES, ANTIGRAVITY.

This is an engineering instruction.

Do not:

* guess when you can inspect
* invent functionality
* fake Windows functionality
* create buttons that do nothing
* claim incomplete work is complete
* silently change architecture
* silently delete existing code
* overwrite working functionality unnecessarily
* introduce unnecessary dependencies
* expose secrets
* hardcode credentials
* execute dangerous commands
* modify Windows without authorization
* destroy user data
* skip validation
* skip documentation
* skip Git commits
* forget to update `brain.md`
* leave the repository in an unexplained broken state
* pretend a prototype is production-ready
* hide errors
* silently ignore failed implementation attempts

Before making important changes:

**Inspect → Understand → Plan → Implement → Validate → Document → Commit.**

Do not reverse this process unnecessarily.

---

# 2. WHAT YOU ARE BUILDING

Build a serious, production-oriented desktop application platform for Windows 10/11.

The application should provide a complete desktop-like environment inside a Windows application.

It should combine the best design and workflow concepts from:

### Windows 11

* Start Menu
* Taskbar
* System Tray
* Quick Settings
* Notification Center
* Fluent-style surfaces
* rounded windows
* window snapping
* desktop
* context menus
* modern Settings
* widgets
* keyboard shortcuts

### macOS

* Dock
* elegant spacing
* refined typography
* smooth transitions
* polished window behavior
* workspace-centric workflow
* application launcher
* menu organization
* subtle translucency
* premium visual hierarchy
* sophisticated animations

### Ubuntu/Linux

* workspaces
* application overview
* launcher
* keyboard-first navigation
* developer-friendly environment
* terminal integration
* configurable desktop
* system information
* power-user workflows

The final product must NOT look like three operating systems pasted together.

It must look like:

> **One original desktop environment designed by one professional product team that took inspiration from Windows 11, macOS, and Ubuntu/Linux.**

---

# 3. IMPORTANT REALISM RULE

This is NOT a replacement operating system.

It is a:

> **Windows desktop application that provides an advanced desktop environment, productivity suite, system utility layer, developer workspace, and controlled Windows integration.**

Do not claim that it replaces Windows Explorer, Windows Shell, Windows Kernel, Windows Services, or the Windows operating system itself.

Where Windows APIs do not allow a capability, implement an honest application-level alternative or mark the feature unsupported.

---

# 4. NO FAKE FUNCTIONALITY

Every feature must be classified.

Use exactly these classifications:

### REAL

Fully implemented and functional inside the application.

### WINDOWS-INTEGRATED

Uses actual Windows APIs or controlled native functionality.

### APPLICATION-SIMULATED

Implemented inside the application rather than modifying Windows.

### INFORMATIONAL

Displays information without modifying the underlying system.

### FUTURE

Designed/documented but not currently implemented.

### UNSUPPORTED

Technically unavailable, unsafe, restricted, or intentionally excluded.

Never represent:

* mock data
* placeholder buttons
* fake system status
* fake processes
* fake Windows integration
* fake synchronization
* fake database operations
* fake security status

as real functionality.

---

# 5. DO NOT RUN THE APPLICATION AUTOMATICALLY

This rule is mandatory.

You may create and modify the project.

You may perform safe source-level inspection and static validation.

But DO NOT automatically:

* launch the application
* start the development server
* open the application
* execute long-running processes
* install dependencies
* execute database migrations
* create databases
* modify Windows
* modify registry
* modify system services
* create scheduled tasks
* create startup persistence
* modify firewall
* modify Defender
* modify Windows policies
* modify system files
* delete user data
* perform administrator elevation

until the user explicitly authorizes the relevant action.

The user must be able to say:

> “You may now run the application.”

before application execution begins.

---

# 6. EXCEPTION — GIT OPERATIONS

The user explicitly requires Git version control.

Therefore, Git operations required by this specification are authorized as part of the development workflow.

You may perform safe Git operations required to:

* inspect status
* inspect history
* create branches
* stage implementation changes
* create commits
* inspect diffs
* tag development milestones where appropriate

However:

DO NOT:

* force-push
* rewrite shared history
* delete remote branches
* reset user work destructively
* overwrite unrelated user commits
* remove untracked user files
* commit secrets
* commit credentials
* commit `.env`
* commit private keys
* commit generated sensitive data

unless explicitly authorized.

---

# 7. MANDATORY GIT WORKFLOW

## Every meaningful implementation must have a Git commit.

This is mandatory.

After completing each meaningful implementation unit:

1. inspect changes
2. review diff
3. run safe validation
4. update `brain.md`
5. update implementation status
6. update changelog when appropriate
7. verify no secrets are present
8. stage only intended files
9. create a Git commit

Do NOT create meaningless commits such as:

```text
update
changes
stuff
fix
test
done
```

Use meaningful commit messages.

Examples:

```text
feat(desktop): implement workspace manager

feat(window-manager): add snap and resize behavior

feat(settings): implement appearance preferences

feat(sound): add centralized UI sound engine

feat(motion): add desktop window transition system

feat(auth): implement secure session management

feat(files): add file explorer navigation

feat(windows): add native system information bridge

fix(workspaces): restore invalid monitor positions safely

test(window-manager): add workspace lifecycle coverage

docs: update architecture and implementation status
```

Use Conventional Commit style where practical.

---

# 8. GIT COMMIT GRANULARITY

Do not commit every individual line.

Commit every **meaningful implementation unit**.

For example:

### Good

```text
feat(shell): implement taskbar foundation
```

followed by:

```text
feat(shell): implement Start menu
```

followed by:

```text
feat(shell): implement system tray
```

### Bad

```text
commit button color
commit padding
commit icon
commit typo
commit random change
```

Group logically related changes.

---

# 9. NEVER COMMIT BROKEN WORK AS COMPLETE

Before a feature commit:

* inspect TypeScript errors
* inspect lint errors
* inspect obvious runtime risks
* run safe tests where possible
* inspect Git diff
* verify affected files
* update documentation

If the implementation is incomplete:

use a meaningful commit such as:

```text
wip(window-manager): establish window lifecycle foundation
```

only when genuinely appropriate.

Do not use `WIP` to hide unfinished production work.

---

# 10. GIT SAFETY

Before every commit:

Check:

```text
git status
```

Review:

```text
git diff
```

Check for:

* `.env`
* secrets
* API keys
* passwords
* private keys
* database credentials
* tokens
* personal information

Never commit them.

Maintain a proper `.gitignore`.

---

# 11. BRANCH STRATEGY

If the repository is already using a branching strategy:

Respect it.

If not, use a simple strategy such as:

```text
main
develop
feature/*
fix/*
```

Do not unnecessarily create a complicated Git workflow.

---

# 12. BRAIN.MD — MANDATORY ENGINEERING MEMORY

Create a root-level file:

```text
brain.md
```

This file is mandatory.

It is the project's persistent engineering memory.

Before major work:

READ:

```text
README.md
brain.md
docs/ARCHITECTURE.md
docs/SECURITY.md
docs/DATABASE.md
docs/API.md
docs/IMPLEMENTATION_STATUS.md
```

when available.

After meaningful work:

UPDATE:

```text
brain.md
```

before creating the corresponding Git commit.

---

# 13. REQUIRED `brain.md` STRUCTURE

Maintain:

```text
# Project Identity

# Product Vision

# Current Project Status

# Current Implementation Phase

# Current Sprint/Task

# Current Architecture

# Technology Stack

# Directory Structure

# Implemented Features

# Features In Progress

# Features Not Implemented

# Future Features

# Unsupported Features

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

# Security Decisions

# Performance Decisions

# Important Constraints

# Things That Must NOT Be Changed

# Known Bugs

# Resolved Bugs

# Failed Approaches

# Decisions and Reasons

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

Never store:

* passwords
* API keys
* tokens
* private keys
* secrets
* production credentials

inside `brain.md`.

---

# 14. BRAIN.MD MUST REMAIN USEFUL

Do not copy this entire prompt into `brain.md`.

Keep it concise.

It should answer:

* What exists?
* How does it work?
* What decisions were made?
* What has been tested?
* What remains?
* What must not be changed?
* What problems were encountered?
* What was the last meaningful Git commit?

---

# 15. PRODUCT DESIGN PHILOSOPHY

The interface must feel:

* premium
* modern
* elegant
* fast
* responsive
* technical
* calm
* customizable
* professional
* accessible

Avoid:

* generic SaaS dashboard design
* generic AI dashboard design
* excessive cards
* excessive gradients
* neon everywhere
* giant glowing borders
* excessive glassmorphism
* excessive blur
* excessive shadows
* childish animation
* unnecessary complexity

---

# 16. DESIGN INFLUENCE

Use approximately:

```text
Windows 11       40%
macOS            30%
Ubuntu/Linux     30%
```

These are design influences, not literal cloning requirements.

---

# 17. WINDOWS 11 INSPIRATION

Use concepts such as:

* Start
* Taskbar
* Quick Settings
* Notification Center
* Snap layouts
* modern Settings
* widgets
* context menus
* rounded windows
* Fluent-style depth
* subtle translucency

Do not copy proprietary assets.

---

# 18. macOS INSPIRATION

Use concepts such as:

* Dock
* polished spacing
* application-centric interaction
* smooth window transitions
* workspace navigation
* elegant typography
* restrained translucency
* refined menus
* premium motion design

Do not copy Apple's proprietary visual assets or sounds.

---

# 19. UBUNTU/LINUX INSPIRATION

Use concepts such as:

* workspaces
* application overview
* launcher
* keyboard-first workflow
* developer tooling
* terminal integration
* power-user controls
* system transparency

Do not copy Ubuntu branding or proprietary assets.

---

# 20. CORE DESKTOP

Implement:

* wallpaper
* desktop icons
* folders
* shortcuts
* drag-and-drop
* selection
* multi-selection
* context menu
* keyboard navigation
* taskbar
* dock behavior
* widgets
* notifications
* workspaces

---

# 21. HYBRID TASKBAR + DOCK

Create a configurable hybrid.

Support:

* Start button
* application launcher
* pinned applications
* running applications
* active indicators
* minimized applications
* system tray
* clock
* network
* audio
* battery
* workspace indicator
* search
* notification indicator

Allow modes:

```text
Windows
macOS
Hybrid
Compact
Developer
```

---

# 22. START MENU

Support:

* application list
* pinned applications
* recent applications
* categories
* search
* folders
* settings
* account
* power options
* recent files
* recommended items

Power operations must use actual Windows functionality where supported.

Never fake them.

---

# 23. APPLICATION OVERVIEW

Provide an Ubuntu/macOS-inspired application overview.

Support:

* all applications
* application search
* categories
* favorites
* recently used
* drag application into workspace
* keyboard navigation

---

# 24. UNIVERSAL SEARCH

Search:

* applications
* commands
* files
* folders
* notes
* settings
* workspaces
* recent items
* system information

Support:

* fuzzy search
* ranking
* keyboard navigation
* categories
* previews

---

# 25. COMMAND PALETTE

Provide a developer-style universal command palette.

Examples:

```text
Open Settings
Open File Explorer
Create Folder
Create Note
Open Terminal
Switch Workspace
Move Window
Snap Window
Change Theme
Toggle Dark Mode
Toggle Performance Mode
Toggle Sound
Open Task Manager
Open System Information
Search Files
Lock Workspace
```

Commands must use a command registry.

---

# 26. WINDOW MANAGER

Every application window must have:

```text
windowId
applicationId
title
icon
position
size
zIndex
workspaceId
focused
minimized
maximized
fullscreen
resizable
draggable
closable
modal
```

Support:

* move
* resize
* minimize
* maximize
* restore
* close
* focus
* bring to front
* snapping
* tiling
* cascading

---

# 27. ADVANCED WINDOW EFFECTS

Provide polished window effects:

* open animation
* close animation
* minimize animation
* restore animation
* maximize animation
* snap animation
* focus elevation
* shadow changes
* subtle blur
* translucency
* depth
* workspace transitions

Effects must remain performant.

---

# 28. WINDOW SNAP / TILING

Support:

* left
* right
* top
* bottom where appropriate
* four-corner layouts
* multi-column layouts
* custom layouts where feasible

Include visual snap previews.

---

# 29. VIRTUAL WORKSPACES

Support:

* create
* rename
* delete
* reorder
* switch
* application assignment
* multiple applications per workspace
* moving applications between workspaces
* workspace-specific wallpaper
* workspace-specific layout
* workspace-specific open windows

Example:

```text
Development
Database
Communication
Personal
Testing
```

---

# 30. MULTI-MONITOR SUPPORT

Support where technically possible:

* multiple displays
* DPI scaling
* window restoration
* monitor-specific layouts
* monitor-aware workspaces
* safe recovery when a display disappears

Never allow windows to permanently become inaccessible because of a disconnected monitor.

---

# 31. APPLICATION REGISTRY

Create an application registry.

Each application must define:

```text
applicationId
name
displayName
version
icon
category
entrypoint
permissions
commands
shortcuts
windowBehavior
workspaceBehavior
settings
status
```

---

# 32. APPLICATION LIFECYCLE

Applications should have controlled states:

```text
REGISTERED
AVAILABLE
LAUNCHING
RUNNING
MINIMIZED
SUSPENDED
CLOSING
CLOSED
FAILED
```

Handle failures safely.

---

# 33. PLUGIN SYSTEM

Design for future plugins.

Capabilities should be permission-controlled.

Examples:

```text
filesystem.read
filesystem.write
notifications.send
workspace.read
workspace.write
window.create
window.close
system.read
network.read
clipboard.read
clipboard.write
```

Never give plugins unrestricted native access.

---

# 34. FILE EXPLORER

Implement a real File Explorer.

Support:

* folders
* files
* navigation
* breadcrumbs
* back
* forward
* search
* sorting
* filtering
* list view
* grid view
* details
* rename
* copy
* cut
* paste
* delete
* restore
* properties
* context menu
* drag-and-drop
* multi-select

---

# 35. FILE SAFETY

Classify storage:

```text
Application Storage
User Storage
Windows System Storage
Protected Storage
Network Storage
Unsupported Storage
```

Do not automatically delete protected/system files.

Use safe deletion/recycle behavior.

---

# 36. NOTES APPLICATION

Support:

* create
* edit
* autosave
* delete
* archive
* search
* tags
* folders
* favorites
* pinning
* recovery
* offline operation

---

# 37. TEXT EDITOR

Support:

* new
* open
* save
* save as
* search
* replace
* line numbers
* syntax highlighting where appropriate
* autosave
* recovery

---

# 38. TERMINAL CENTER

Support:

* PowerShell
* CMD
* Git Bash
* WSL

where technically supported.

Show which shell is active.

Provide:

* tabs
* working directory
* copy/paste
* search
* clear
* history

Never silently execute commands.

---

# 39. SYSTEM INFORMATION

Show actual information where available:

* Windows version
* CPU
* RAM
* GPU
* disks
* monitors
* network adapters
* battery
* uptime
* application version
* runtime information

Classify unsupported information honestly.

---

# 40. TASK MANAGER

Provide:

* application processes
* CPU
* memory
* process information
* application state
* safe application termination

Never blindly terminate system processes.

---

# 41. PERFORMANCE DASHBOARD

Show:

* CPU
* RAM
* disk
* network
* application performance
* process usage
* startup information where available

Avoid excessive polling.

---

# 42. SETTINGS

Implement:

```text
System
Appearance
Personalization
Applications
Notifications
Sound
Network
Storage
Privacy
Security
Accounts
Workspaces
Keyboard
Mouse
Accessibility
Performance
Developer
Synchronization
Backup
Advanced
About
```

Settings must be searchable.

---

# 43. QUICK SETTINGS

Implement:

* network status
* Bluetooth status where supported
* audio
* brightness where supported
* theme
* notifications
* performance mode
* sound effects
* workspace
* connectivity

Unsupported options must be clearly labeled.

---

# 44. NOTIFICATION CENTER

Support:

* notifications
* grouping
* timestamps
* read/unread
* dismiss
* clear all
* source
* priority
* application preferences

---

# 45. WIDGET SYSTEM

Provide modular widgets:

* clock
* calendar
* notes
* system status
* performance
* workspace
* developer information

---

# 46. AUTHENTICATION

Implement:

* signup
* login
* logout
* sessions
* session expiration
* session revocation
* password hashing
* profile
* account settings
* password reset architecture

Never store plaintext passwords.

---

# 47. AUTHORIZATION

Separate application permissions from Windows administrator privileges.

Use:

* roles
* permissions
* scopes
* capability checks

---

# 48. SQL SERVER

Use Microsoft SQL Server for persistent server-side data.

Potential entities:

```text
Users
Sessions
Roles
Permissions
UserRoles
Applications
ApplicationSettings
Workspaces
WorkspaceApplications
Windows
Files
Folders
Notes
Tags
Notifications
NotificationPreferences
Themes
UserPreferences
AuditLogs
SyncQueue
SyncConflicts
Devices
```

Use:

* primary keys
* foreign keys
* indexes
* unique constraints
* transactions
* timestamps
* concurrency handling

---

# 49. DATABASE MIGRATIONS

Create migrations.

DO NOT automatically execute them.

Document:

```text
Migration Status
Pending Migrations
Applied Migrations
Rollback Strategy
```

Database modifications require explicit user authorization.

---

# 50. API

Use versioned APIs.

Example:

```text
/api/v1
```

Implement:

* validation
* authentication
* authorization
* rate limiting where appropriate
* request IDs
* structured logging
* transactions
* idempotency where required

---

# 51. OFFLINE-FIRST

The application must remain useful offline for appropriate functionality.

States:

```text
Synced
Pending
Syncing
Conflict
Failed
Offline
```

Never pretend synchronization occurred if it did not.

---

# 52. SYNCHRONIZATION

Implement:

1. local change
2. local persistence
3. queue
4. synchronization
5. acknowledgement
6. conflict detection
7. conflict resolution

---

# 53. CONFLICT RESOLUTION

Possible strategies:

* last-write-wins
* field merge
* user-assisted merge

Choose based on data type.

Document the decision.

---

# 54. WINDOWS NATIVE BRIDGE

Use controlled native integration for:

* system information
* processes
* displays
* audio
* battery
* network
* application launching
* filesystem integration
* power state information

Every native capability must define:

```text
Capability
Permission
Risk
Windows API
Fallback
Failure Behavior
```

---

# 55. WINDOWS SECURITY

Never:

* disable Defender
* disable firewall
* disable security policies
* modify system security automatically
* alter registry automatically
* remove Windows components automatically

unless explicitly authorized by a separate user instruction and implemented with strong safeguards.

---

# 56. REGISTRY

If Registry Viewer is included:

Default:

**READ ONLY**

Any write capability must require:

* explicit confirmation
* backup
* rollback
* exact path
* permission check
* audit logging

---

# 57. SERVICES

Services view should default to:

**READ ONLY**

Do not bulk-disable Windows services.

---

# 58. DEVICE MANAGER

Provide informational device information.

Do not automatically:

* uninstall drivers
* replace drivers
* disable devices

---

# 59. DISK MANAGEMENT

Provide informational disk management.

Do not automatically:

* format
* partition
* delete
* resize

disks or volumes.

---

# 60. NETWORK CENTER

Show:

* adapters
* IP
* gateway
* DNS
* connectivity
* connection state

Network configuration changes require explicit user action.

---

# 61. BACKUP AND RECOVERY

Support architecture for:

* notes backup
* settings backup
* workspace backup
* configuration backup
* export
* import
* restore

Never silently overwrite existing backups.

---

# 62. CRASH RECOVERY

Recover:

* workspace
* windows
* notes
* unsaved data where possible
* application state

Never sacrifice data integrity for recovery convenience.

---

# 63. SESSION RESTORATION

Persist:

* workspace
* windows
* positions
* sizes
* preferences
* theme
* safe application state

Never unnecessarily persist sensitive information.

---

# 64. DESIGN SYSTEM

Create centralized design tokens:

```text
colors
typography
spacing
radius
shadows
elevation
blur
opacity
motion
icons
focus
selection
states
sounds
```

Do not scatter arbitrary CSS values throughout the project.

---

# 65. COLOR SYSTEM

Use semantic colors:

```text
background
surface
surface-elevated
surface-translucent
border
text-primary
text-secondary
text-muted
text-disabled
primary
secondary
accent
success
warning
error
info
focus
selection
hover
active
```

---

# 66. ADVANCED COLOR EFFECTS

The user explicitly wants sophisticated color effects.

Implement them professionally.

Potential effects:

* animated ambient gradients
* dynamic accent lighting
* subtle color transitions
* wallpaper-derived accent colors
* focused-window accent effects
* workspace-specific accent colors
* subtle color morphing
* reactive notification colors
* contextual status colors
* soft background illumination
* dynamic glass tint
* depth-based color variation

Do NOT make the entire application neon.

Effects must remain readable and professional.

---

# 67. ADVANCED VISUAL EFFECTS

Support optional:

* glass surfaces
* backdrop blur
* animated gradients
* ambient glow
* subtle particles
* depth
* parallax
* light reflections
* window shadows
* focus illumination
* workspace transitions
* dynamic backgrounds
* subtle chromatic accents
* animated wallpapers where feasible

All effects must have performance controls.

---

# 68. EFFECT LEVELS

Provide:

```text
Minimal
Balanced
Enhanced
Immersive
```

### Minimal

Maximum performance.

### Balanced

Recommended default.

### Enhanced

More visual effects.

### Immersive

Maximum supported effects.

Immersive mode must still preserve usability and accessibility.

---

# 69. PERFORMANCE MODE

Performance Mode disables/reduces:

* blur
* particles
* dynamic wallpaper
* excessive shadows
* expensive animations
* background effects
* unnecessary sounds
* excessive polling

---

# 70. ANIMATION SYSTEM

Create a centralized animation engine.

Use tokens for:

```text
duration
delay
easing
distance
scale
opacity
blur
elevation
```

Recommended ranges:

```text
Micro       80–150ms
Normal      150–250ms
Panel       200–350ms
Window      200–400ms
Workspace   300–500ms
```

These are guidelines.

---

# 71. HIGH-QUALITY ANIMATION REQUIREMENT

The user specifically requests **very high-quality animations**.

Therefore implement advanced motion where appropriate:

### Window opening

* opacity
* scale
* depth
* subtle blur transition

### Window closing

* reverse motion

### Minimize

* movement toward taskbar/dock
* scale reduction
* opacity transition

### Restore

* reverse minimize motion

### Maximize

* smooth geometric expansion

### Snap

* fluid movement
* layout preview
* controlled spring-like easing where appropriate

### Workspace switch

* layered movement
* depth
* subtle parallax
* fade/slide

### Start Menu

* scale
* opacity
* controlled blur
* focus transition

### Notifications

* slide
* fade
* stack animation

### Quick Settings

* smooth panel expansion
* controlled opacity

### Dock

* hover response
* subtle magnification if enabled
* active indicator animation

Do not use animations that interfere with interaction.

---

# 72. ANIMATION PERFORMANCE

Prefer GPU-friendly properties:

```text
transform
opacity
filter
```

Avoid excessive:

* layout reflows
* DOM measurement
* expensive box-shadow animation
* huge blur surfaces
* continuous CPU animation

---

# 73. REDUCED MOTION

Support:

```text
prefers-reduced-motion
```

and:

```text
Reduce Motion
```

setting.

When enabled:

* minimize movement
* disable parallax
* reduce transitions
* disable unnecessary animated backgrounds

---

# 74. SOUND ENGINE

Create a centralized sound engine.

Categories:

```text
UI
System
Notification
Success
Warning
Error
Workspace
Application
Accessibility
```

---

# 75. SOUND EFFECTS

Implement subtle sounds for:

* button interaction
* toggle
* menu opening
* menu closing
* selection
* application launch
* application close
* workspace switch
* notification
* success
* warning
* error
* file operation
* login
* logout
* system state changes

Do not make sounds annoying.

---

# 76. ADVANCED SOUND DESIGN

Where appropriate support:

* layered UI sounds
* subtle spatialization
* volume normalization
* category volume
* fade in/out
* audio ducking
* notification priority
* sound previews

Avoid excessive overlapping audio.

---

# 77. SOUND SETTINGS

Provide:

```text
Master Volume
UI Sounds
System Sounds
Notification Sounds
Workspace Sounds
Application Sounds
Accessibility Sounds
Mute All
```

Every sound must have visual feedback.

---

# 78. SOUND ASSET POLICY

Use only:

* original sounds
* generated original assets
* properly licensed assets

Do NOT copy proprietary Windows/macOS sounds.

Document sound licensing.

Prefer efficient audio formats and short files.

---

# 79. WALLPAPER SYSTEM

Support:

* static wallpaper
* gradient wallpaper
* abstract wallpaper
* user image
* per-workspace wallpaper

Optional:

* dynamic wallpaper
* animated backgrounds

Dynamic features must respect performance mode.

---

# 80. THEMES

Support:

```text
Light
Dark
System
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
Minimal
Developer
```

Do not copy proprietary themes exactly.

---

# 81. ACCESSIBILITY

Support:

* keyboard navigation
* screen readers
* semantic labels
* focus indicators
* high contrast
* scalable text
* reduced motion
* sound-independent feedback
* accessible dialogs
* accessible menus
* accessible notifications

---

# 82. KEYBOARD-FIRST WORKFLOW

Support shortcuts for:

* Start
* Search
* Command palette
* workspace switching
* window management
* application launching
* File Explorer
* Notes
* Terminal
* Settings

Avoid unnecessary conflicts with Windows shortcuts.

---

# 83. CONTEXT MENUS

Use:

* consistent layout
* keyboard navigation
* clear grouping
* concise actions
* safe destructive actions

---

# 84. DRAG AND DROP

Support:

* desktop icons
* files
* folders
* windows
* applications
* workspaces

Show clear drop targets.

---

# 85. EMPTY STATES

Every empty state must explain:

* what is empty
* why
* what can be done next

---

# 86. ERROR UX

Every meaningful error should explain:

1. What happened
2. Why, if known
3. What the user can do
4. Whether data was affected

---

# 87. LOADING UX

Use:

* skeletons
* progress
* meaningful status
* disabled controls

Never fake loading.

---

# 88. SECURITY ARCHITECTURE

Use:

* least privilege
* secure defaults
* input validation
* authorization
* secure IPC
* secure subprocesses
* rate limiting
* audit logging
* dependency review
* secret management

---

# 89. ELECTRON SECURITY

If Electron is selected:

Use:

* context isolation
* preload API
* restricted IPC
* sandbox where practical
* no unrestricted renderer Node access
* payload validation
* minimal native permissions

---

# 90. TAURI SECURITY

If Tauri is selected:

Use:

* capability permissions
* restricted commands
* minimal native access
* validated arguments

---

# 91. SUBPROCESS SECURITY

Never:

* use `shell=true` unnecessarily
* construct shell commands from untrusted input
* execute arbitrary downloaded scripts
* execute encoded hidden PowerShell
* accept arbitrary executable paths without validation

Use:

* allowlists
* validated arguments
* timeouts
* safe subprocess APIs
* structured output handling

---

# 92. AUDIT LOGGING

Record important events:

* login
* logout
* failed authentication
* permission failure
* destructive operations
* Windows integration
* settings changes
* database changes
* synchronization conflicts
* security events

Never log secrets.

---

# 93. PRIVACY

Do not collect unnecessary telemetry.

If telemetry is implemented:

* document it
* make it configurable
* minimize personal information
* provide transparency

---

# 94. API ERROR MODEL

Use consistent errors.

Example:

```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested resource was not found.",
    "details": {},
    "requestId": "..."
  }
}
```

---

# 95. OFFLINE DATA MODEL

Clearly separate:

```text
Local State
Server State
Pending Changes
Conflict State
Cached State
```

---

# 96. DATABASE SECURITY

Never hardcode credentials.

Use:

```text
.env.example
```

Never commit:

```text
.env
```

or credentials.

---

# 97. ENVIRONMENT SEPARATION

Support:

```text
development
test
staging
production
```

Never accidentally connect development tooling to production.

---

# 98. APPLICATION STATE

Separate:

```text
Desktop State
Window State
Workspace State
Application State
User State
Server State
Persistent State
Temporary UI State
```

---

# 99. EVENT SYSTEM

Use structured events:

```text
WINDOW_CREATED
WINDOW_CLOSED
WINDOW_FOCUSED
WINDOW_MINIMIZED
WINDOW_MAXIMIZED

WORKSPACE_CREATED
WORKSPACE_SWITCHED
WORKSPACE_DELETED

APPLICATION_LAUNCHED
APPLICATION_CLOSED

FILE_CREATED
FILE_MOVED
FILE_DELETED

NOTE_CREATED
NOTE_UPDATED

THEME_CHANGED

SOUND_SETTING_CHANGED

SYNC_STARTED
SYNC_COMPLETED
SYNC_FAILED
```

---

# 100. CRASH ISOLATION

A failed application must not unnecessarily crash the entire desktop.

Use error boundaries and controlled recovery.

---

# 101. BUILT-IN APPLICATIONS

Initial applications should include:

### Core

* File Explorer
* Settings
* Search
* Notes
* Terminal
* Task Manager
* System Information

### Productivity

* Calculator
* Clock
* Calendar
* Text Editor
* Clipboard History

### System

* Network Center
* Storage
* Performance Dashboard
* Device Information
* Notification Center

### Developer

* JSON Viewer
* API Tester
* Log Viewer
* Environment Inspector
* Developer Settings

Implement actual functionality.

Do not create dozens of shallow applications merely to make the product appear larger.

---

# 102. APPLICATION CATALOG

Show:

* installed applications
* versions
* source
* permissions
* update status
* enabled/disabled state

---

# 103. UPDATE CENTER

Support architecture for:

* checking
* available update
* manual update
* update failure
* version information

Do not silently install updates.

---

# 104. SECURITY CENTER

Show application-level:

* session state
* permissions
* native capabilities
* sync status
* audit events
* warnings

Do not pretend to replace Windows Defender.

---

# 105. WINDOWS DEFENDER

If Defender information is exposed:

Use actual supported interfaces.

Never fake:

* protection status
* scan status
* security state

Never disable Defender automatically.

---

# 106. BITLOCKER

If BitLocker information is displayed:

* read-only where appropriate
* use supported interfaces
* never expose sensitive recovery keys
* never modify encryption automatically

---

# 107. SYSTEM RESTORE

Do not create restore points automatically.

If support is implemented, make the operation explicit and user-authorized.

---

# 108. SYSTEM SERVICES

Default to read-only information.

Do not automatically disable services.

---

# 109. DEVICE MANAGEMENT

Display actual device information.

Do not automatically change drivers or device states.

---

# 110. DISK MANAGEMENT

Display disk information.

Never automatically format or delete partitions.

---

# 111. BACKUP

Support backup/export of application-managed data.

Never silently overwrite existing backups.

---

# 112. DESIGN DOCUMENTATION

Create:

```text
docs/ARCHITECTURE.md
docs/SECURITY.md
docs/DATABASE.md
docs/API.md
docs/MOTION.md
docs/SOUND.md
docs/THEMES.md
docs/ACCESSIBILITY.md
docs/WINDOWS-INTEGRATION.md
docs/TESTING.md
docs/IMPLEMENTATION_STATUS.md
docs/CHANGELOG.md
```

---

# 113. PROJECT STRUCTURE

Use a modular structure similar to:

```text
/
├── apps/
│   ├── desktop/
│   ├── client/
│   └── server/
│
├── packages/
│   ├── ui/
│   ├── design-system/
│   ├── types/
│   ├── config/
│   ├── desktop-core/
│   ├── window-manager/
│   ├── workspace-manager/
│   ├── application-registry/
│   ├── system-services/
│   └── utilities/
│
├── native/
│   └── windows/
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── assets/
│   ├── icons/
│   ├── sounds/
│   │   ├── ui/
│   │   ├── system/
│   │   ├── notifications/
│   │   └── workspace/
│   ├── wallpapers/
│   └── illustrations/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   ├── security/
│   ├── accessibility/
│   └── visual/
│
├── docs/
│
├── brain.md
├── README.md
├── .env.example
└── .gitignore
```

Adapt this structure to the chosen technology.

Do not blindly follow it if the architecture requires a better structure.

Document deviations.

---

# 114. TECHNOLOGY SELECTION

Preferred technology family:

### Frontend

React + TypeScript.

### Desktop

Choose between:

* Electron
* Tauri

based on:

* performance
* security
* Windows integration
* maintainability
* packaging

Document why.

### Backend

Node.js.

Choose:

* Express
* Fastify
* NestJS

based on architecture.

### Database

Microsoft SQL Server.

### Python

Use where Python genuinely provides technical value.

### Bash

Use Git Bash or WSL explicitly where required.

Do not treat Git Bash and WSL as identical.

---

# 115. NO UNNECESSARY TECHNOLOGY

Do not add technologies simply because they were mentioned in this prompt.

Every technology must have a reason.

Document significant technology decisions in:

```text
brain.md
docs/ARCHITECTURE.md
```

---

# 116. TESTING

Implement:

### Unit Tests

For:

* utilities
* services
* permissions
* state
* validation

### Integration Tests

For:

* API
* database
* authentication
* synchronization
* native bridge

### End-to-End Tests

For:

* signup
* login
* desktop
* Start
* search
* application launching
* window management
* workspaces
* File Explorer
* notes
* settings

### Security Tests

For:

* authorization
* path traversal
* IPC
* subprocesses
* injection
* session security

### Accessibility Tests

For:

* keyboard
* focus
* labels
* contrast
* reduced motion

### Visual Regression Tests

For:

* themes
* taskbar
* Start
* windows
* settings
* notifications

---

# 117. PERFORMANCE TESTING

Measure:

* startup
* memory
* CPU
* window switching
* search
* file navigation
* database performance
* synchronization
* animation performance
* rendering performance

---

# 118. PERFORMANCE RULE

Never allow visual effects to destroy usability.

If high visual effects cause:

* high CPU
* high GPU
* memory growth
* frame drops
* input lag

automatically recommend or allow:

```text
Balanced
Performance
Minimal
```

modes.

---

# 119. HIGH-FPS UI TARGET

Where technically reasonable:

Target smooth interaction and high frame rates.

Do not sacrifice application correctness to hit an arbitrary FPS number.

Prioritize:

```text
input responsiveness
stable rendering
low jank
low memory growth
predictable performance
```

---

# 120. VISUAL QUALITY REVIEW

For every major screen check:

* spacing
* alignment
* typography
* hierarchy
* contrast
* icon consistency
* animation
* sound
* focus state
* hover state
* pressed state
* loading state
* empty state
* error state
* accessibility

---

# 121. RESPONSIVE DESIGN

Support:

* small windows
* large displays
* high DPI
* multiple monitors
* different scaling
* keyboard
* mouse
* touch where practical

---

# 122. FEATURE PRIORITIES

## P0 — FOUNDATION

Implement first:

* architecture
* desktop shell
* state
* design system
* application registry
* security foundation
* persistence
* authentication foundation

## P1 — CORE DESKTOP

* taskbar
* Start
* search
* command palette
* windows
* workspaces
* File Explorer
* Notes
* Settings
* notifications
* themes

## P2 — ADVANCED

* terminal
* Task Manager
* System Information
* Network
* Performance
* Clipboard
* synchronization
* backup
* native integration

## P3 — EXTENDED

* plugins
* advanced widgets
* dynamic wallpaper
* advanced Windows integration
* additional productivity applications

---

# 123. IMPLEMENTATION PHASES

## PHASE 0 — DISCOVERY

Inspect:

* repository
* source
* configuration
* package files
* database
* documentation
* tests
* Git status
* Git history

Update `brain.md`.

Do not destroy or rewrite anything.

---

## PHASE 1 — ARCHITECTURE

Define:

* desktop architecture
* frontend architecture
* backend architecture
* database
* IPC
* native bridge
* security
* state
* synchronization

Create documentation.

Commit:

```text
docs: establish project architecture
```

or a more appropriate message.

---

## PHASE 2 — DESIGN SYSTEM

Implement:

* colors
* typography
* surfaces
* themes
* controls
* icons
* motion
* sound

Update documentation.

Commit.

---

## PHASE 3 — DESKTOP SHELL

Implement:

* desktop
* taskbar
* Start
* launcher
* search
* command palette
* notifications

Validate.

Update `brain.md`.

Commit.

---

## PHASE 4 — WINDOW MANAGER

Implement:

* windows
* focus
* move
* resize
* minimize
* maximize
* restore
* snapping
* tiling

Validate.

Commit.

---

## PHASE 5 — WORKSPACES

Implement:

* create
* rename
* delete
* reorder
* switch
* assignment
* persistence

Validate.

Commit.

---

## PHASE 6 — APPLICATION SYSTEM

Implement:

* application registry
* lifecycle
* commands
* shortcuts
* permissions
* application windows

Validate.

Commit.

---

## PHASE 7 — STORAGE

Implement:

* File Explorer
* folders
* files
* Notes
* recovery
* local persistence

Validate.

Commit.

---

## PHASE 8 — AUTHENTICATION

Implement:

* signup
* login
* logout
* sessions
* permissions
* profiles

Validate.

Commit.

---

## PHASE 9 — DATABASE

Implement:

* SQL schema
* migrations
* repository layer
* services
* audit

Do NOT execute migrations automatically.

Commit schema/migration code.

---

## PHASE 10 — API

Implement:

* `/api/v1`
* validation
* authorization
* error handling
* logging
* request IDs

Validate.

Commit.

---

## PHASE 11 — OFFLINE/SYNC

Implement:

* local persistence
* sync queue
* states
* conflict handling
* retries

Validate.

Commit.

---

## PHASE 12 — WINDOWS INTEGRATION

Implement safe supported integrations.

Validate statically.

Do not modify Windows automatically.

Commit.

---

## PHASE 13 — SYSTEM APPLICATIONS

Implement:

* Settings
* Task Manager
* System Information
* Network
* Performance
* Terminal
* Clipboard
* Security Center

Commit each meaningful group.

---

## PHASE 14 — VISUAL POLISH

Implement:

* advanced animations
* color effects
* sound effects
* wallpapers
* microinteractions
* accessibility
* performance modes

Validate.

Commit.

---

## PHASE 15 — TESTING

Implement and review:

* unit
* integration
* e2e
* security
* accessibility
* visual regression

Commit tests.

---

## PHASE 16 — FINAL REVIEW

Perform:

* architecture review
* security review
* database review
* API review
* UI review
* accessibility review
* performance review
* Windows integration review
* Git review
* documentation review

Update `brain.md`.

Create final documentation commit if appropriate.

---

# 124. IMPLEMENTATION LOOP

For every meaningful feature:

```text
1. Read brain.md
2. Inspect related code
3. Inspect Git status
4. Understand dependencies
5. Plan implementation
6. Implement
7. Validate
8. Review diff
9. Update brain.md
10. Update implementation status
11. Update documentation/changelog when appropriate
12. Check for secrets
13. Git commit
14. Update brain.md with commit information
15. Continue
```

---

# 125. GIT + BRAIN.MD SYNCHRONIZATION

Every meaningful implementation should leave:

* source code updated
* tests updated
* documentation updated where required
* `brain.md` updated
* Git commit created

`brain.md` must record the latest meaningful commit.

Example:

```text
Last Completed Task:
Implemented hybrid taskbar with running-app state.

Last Git Commit:
feat(shell): implement hybrid taskbar

Validation:
TypeScript static validation passed.
No application execution performed.

Next Recommended Task:
Implement Start Menu application registry integration.
```

---

# 126. IMPLEMENTATION STATUS FILE

Maintain:

```text
docs/IMPLEMENTATION_STATUS.md
```

Use:

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

Never mark:

```text
IMPLEMENTED
```

when only the UI exists.

---

# 127. CHANGELOG

Maintain:

```text
docs/CHANGELOG.md
```

Record meaningful product changes.

---

# 128. FAILURE HANDLING

If a feature fails:

DO NOT:

* hide the failure
* fake completion
* delete errors
* pretend it works

Instead:

1. document failure
2. diagnose
3. attempt safe alternative
4. validate
5. document final result
6. classify feature correctly
7. commit the resulting state

---

# 129. IF SOMETHING IS IMPOSSIBLE

Clearly state:

```text
Feature:
Status:
Why:
Technical limitation:
Possible alternative:
Future option:
```

Never invent a capability.

---

# 130. IF EXISTING CODE IS BETTER THAN A NEW DESIGN

Keep it.

Do not rewrite working architecture simply because the new specification suggests a different pattern.

Refactor only when justified by:

* correctness
* security
* maintainability
* performance
* architectural consistency

---

# 131. NO SILENT DELETIONS

Never delete existing:

* source files
* configuration
* database files
* user data
* project assets

without identifying the reason.

If removal is genuinely required:

* explain why
* preserve/review the old behavior
* update documentation
* commit the change

---

# 132. NO AUTOMATIC DESTRUCTIVE OPERATIONS

Do not automatically:

* `rm`
* `del`
* `Remove-Item`
* format drives
* drop databases
* drop tables
* reset databases
* remove Windows components
* modify registry
* disable services

---

# 133. WINDOWS DEVELOPMENT SAFETY

The application is being built on Windows.

Treat these as sensitive:

* registry
* services
* scheduled tasks
* firewall
* Defender
* Windows Update
* system directories
* WinSxS
* Windows Installer
* user profile data
* OneDrive/cloud folders
* WSL data
* Docker data
* Visual Studio data
* development environments

Never modify them automatically.

---

# 134. DEVELOPER ENVIRONMENT PROTECTION

Do not break or remove developer tools such as:

* Git
* Docker
* Visual Studio
* Node.js
* React
* Python
* SQL Server
* Postman
* browsers
* WSL
* development workspaces

unless explicitly instructed.

---

# 135. SECURITY REVIEW TABLE

Maintain a security review containing:

| Area           | Risk                 | Mitigation            | Status |
| -------------- | -------------------- | --------------------- | ------ |
| Authentication | Session theft        | Secure sessions       |        |
| Authorization  | Privilege escalation | RBAC/capabilities     |        |
| IPC            | Native abuse         | Restricted bridge     |        |
| Filesystem     | Path traversal       | Canonical validation  |        |
| Subprocess     | Command injection    | Allowlist/arguments   |        |
| Database       | Injection            | Parameterized queries |        |
| Secrets        | Leakage              | Environment config    |        |
| Plugins        | Excessive privileges | Capability model      |        |
| Sync           | Data conflict        | Conflict resolution   |        |
| Windows APIs   | System modification  | Permission gates      |        |

---

# 136. INSTALLER

If an installer is implemented, it must:

* clearly identify installation location
* explain permissions
* avoid hidden persistence
* avoid unexpected startup registration
* support uninstall
* avoid modifying unrelated applications

Do not silently install system services.

---

# 137. STARTUP BEHAVIOR

Do not create automatic startup persistence unless:

1. explicitly designed
2. clearly shown to user
3. user enables it
4. it can be disabled
5. it is documented

---

# 138. UPDATE SYSTEM

Any updater must:

* verify package integrity
* validate signatures where available
* avoid arbitrary remote code execution
* show version
* support rollback where feasible
* avoid silent updates unless explicitly configured

---

# 139. SUPPLY CHAIN

Review:

* dependency versions
* licenses
* known vulnerabilities
* unnecessary packages
* lockfiles

Do not randomly upgrade every dependency.

---

# 140. UI QUALITY GATE

Before considering a screen complete:

Check:

```text
Typography
Spacing
Alignment
Hierarchy
Contrast
Colors
Icons
Hover
Focus
Pressed
Disabled
Loading
Empty
Error
Success
Animation
Sound
Accessibility
Performance
```

---

# 141. MOTION QUALITY GATE

Before considering animation complete:

Check:

```text
Smooth
Predictable
Interruptible
Accessible
GPU-friendly
No layout thrashing
No memory leaks
No interaction blocking
Reduced-motion compatible
Performance-mode compatible
```

---

# 142. SOUND QUALITY GATE

Before considering sound complete:

Check:

```text
Optional
Subtle
Non-annoying
Normalized
Fast-loading
Licensed/original
Visually redundant
Accessible
Configurable
Performance-safe
```

---

# 143. COLOR QUALITY GATE

Check:

```text
Readable
Accessible
Consistent
Theme-compatible
Not excessive
No color-only meaning
Dark-mode compatible
High-contrast compatible
```

---

# 144. ACCESSIBILITY QUALITY GATE

Check:

```text
Keyboard
Screen reader
Focus
Contrast
Reduced motion
No sound dependency
Scalable text
Accessible menus
Accessible dialogs
Accessible notifications
```

---

# 145. PERFORMANCE QUALITY GATE

Check:

```text
CPU
GPU
RAM
Startup
Input latency
Frame stability
Memory leaks
Background activity
Polling
Asset size
Animation cost
```

---

# 146. FINAL COMPLETION CHECKLIST

Do not claim full completion until verifying:

### Desktop

* desktop
* taskbar/dock
* Start
* search
* command palette
* notifications
* quick settings

### Windows

* move
* resize
* minimize
* maximize
* snap
* restore
* close

### Workspaces

* create
* rename
* delete
* reorder
* switch
* assignment
* persistence

### Applications

* registry
* lifecycle
* permissions
* commands

### Files

* Explorer
* folders
* files
* safe deletion
* recovery

### Notes

* create
* edit
* save
* recovery
* search

### Authentication

* signup
* login
* logout
* sessions
* permissions

### Database

* schema
* migrations
* constraints
* indexes
* audit

### API

* validation
* authentication
* authorization
* error handling
* logging

### Offline

* local state
* sync
* conflicts
* recovery

### Windows

* actual integration
* permissions
* fallback
* unsupported states

### UI

* design system
* themes
* accessibility
* responsiveness

### Animation

* high-quality
* smooth
* performant
* reduced motion

### Sound

* sound engine
* effects
* settings
* accessibility

### Security

* IPC
* filesystem
* subprocess
* database
* authentication
* secrets

### Testing

* unit
* integration
* e2e
* security
* accessibility
* visual

### Documentation

* README
* architecture
* security
* database
* API
* motion
* sound
* themes
* Windows integration
* testing
* implementation status
* changelog
* brain.md

### Git

* meaningful commits
* no secrets
* clean status
* history understandable
* implementation units committed

---

# 147. FINAL ENGINEERING REPORT

At the end of the implementation session provide:

## 1. What Was Built

## 2. What Was Not Built

## 3. What Is Simulated

## 4. What Is Windows-Integrated

## 5. What Is Unsupported

## 6. Architecture

## 7. Technology Decisions

## 8. Database Status

## 9. Authentication Status

## 10. Authorization Status

## 11. Offline Status

## 12. Synchronization Status

## 13. Desktop Shell Status

## 14. Window Manager Status

## 15. Workspace Status

## 16. Application Registry Status

## 17. File Explorer Status

## 18. Notes Status

## 19. Settings Status

## 20. Windows Integration Status

## 21. Animation Status

## 22. Color Effects Status

## 23. Sound Status

## 24. Accessibility Status

## 25. Security Review

## 26. Performance Review

## 27. Testing Status

## 28. Known Bugs

## 29. Known Limitations

## 30. Technical Debt

## 31. Files Created

## 32. Files Modified

## 33. Git Commits Created

## 34. Latest Git Commit

## 35. `brain.md` Update

## 36. Remaining Work

---

# 148. MANDATORY EXECUTION STATUS

Always explicitly report:

```text
Application launched automatically: NO

Application executed automatically: NO

Development server started automatically: NO

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
```

If an operation was explicitly authorized and actually performed, report it truthfully instead.

Never fabricate these values.

---

# 149. FINAL STOP CONDITION

After completing the authorized implementation work:

STOP.

Do not:

* launch application
* start development server
* install dependencies
* execute migrations
* modify Windows
* modify registry
* modify services
* create startup persistence
* create scheduled tasks
* elevate privileges
* delete user data

Wait for explicit authorization.

---

# 150. MASTER IMPLEMENTATION LOOP

For every feature:

```text
READ
↓
INSPECT
↓
UNDERSTAND
↓
PLAN
↓
IMPLEMENT
↓
VALIDATE
↓
SECURITY REVIEW
↓
PERFORMANCE REVIEW
↓
UPDATE brain.md
↓
UPDATE IMPLEMENTATION_STATUS.md
↓
UPDATE CHANGELOG.md IF APPROPRIATE
↓
REVIEW git diff
↓
CHECK FOR SECRETS
↓
GIT COMMIT
↓
RECORD COMMIT IN brain.md
↓
CONTINUE
```

---

# 151. FINAL PRODUCT VISION

The final application should feel like:

> **A premium next-generation desktop workspace combining the strongest workflow concepts of Windows 11, macOS, and Ubuntu/Linux, redesigned as one coherent original product.**

It should feel:

* fast
* smooth
* beautiful
* powerful
* customizable
* developer-friendly
* professional
* secure
* accessible
* reliable

It should NOT feel like:

* a React dashboard
* a static prototype
* a collection of mockups
* a fake operating system
* an unfinished demo

---

# 152. BEGIN IMPLEMENTATION

Now begin.

Start with:

```text
PHASE 0 — DISCOVERY
```

Before modifying the project:

1. inspect repository
2. inspect Git status
3. inspect Git history
4. inspect package configuration
5. inspect source structure
6. inspect existing documentation
7. inspect database configuration
8. inspect tests
9. inspect current implementation
10. read/create `brain.md`
11. determine what already exists
12. determine what is missing
13. create/update implementation roadmap
14. identify dependencies
15. identify risks
16. identify architecture conflicts
17. identify unsafe operations that require future approval

Then begin implementation according to the phases in this document.

Do not wait for another prompt telling you which feature to implement next.

Use this master specification.

Do not make careless assumptions.

Do not make unnecessary rewrites.

Do not fabricate functionality.

Do not silently execute system-changing operations.

Do not forget `brain.md`.

Do not forget Git.

Do not forget testing.

Do not forget accessibility.

Do not forget performance.

Do not forget security.

Do not forget documentation.

Do not forget to create a meaningful Git commit after every meaningful completed implementation unit.

# DO NOT MAKE ANY MISTAKES, ANTIGRAVITY.

Think carefully.

Inspect first.

Implement professionally.

Validate everything possible without executing the application.

Record what you did.

Commit what you implemented.

Maintain the engineering memory.

Continue until the defined implementation scope is complete or a genuine technical/authorization boundary is reached.

# END OF MASTER PROMPT

---
theme: default
title: "GitHub Copilot CLI — Live Demo"
info: |
  A hands-on walkthrough of GitHub Copilot CLI using a real Node.js project.
  7 steps from first interaction to CI integration.
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: dark
fonts:
  sans: Inter
  mono: Fira Code
module: intro-talks/copilot-cli-demo
status: active
updated: 2026-03-11
---

<div class="h-full flex flex-col items-center justify-center" style="background: linear-gradient(135deg, #000000 0%, #0d1117 50%, #161b22 100%);">
  <div class="flex items-center gap-3 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <h1 class="text-5xl font-bold mb-4" style="color: #ffffff !important;">Copilot CLI Deep Dive</h1>
  <p class="text-xl" style="color: #8b949e;">A hands-on walkthrough using a real Node.js project</p>
  <div class="mt-8 px-4 py-2 rounded-full border border-[#3FB950] text-sm" style="color: #3FB950;">7 steps · First interaction → CI integration</div>
</div>

<!--
Opening slide — GitHub Copilot CLI Deep Dive title card.
-->

---
layout: center
---

<div class="text-center">
  <h1 class="text-3xl font-bold mb-8" style="color: #ffffff !important;">Agenda</h1>
</div>

<div class="grid grid-cols-4 gap-4 text-sm max-w-4xl mx-auto">
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">🤖</div>
    <span class="text-[#3FB950] font-bold text-xs">What is Copilot CLI?</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">⚡</div>
    <span class="text-[#7C72FF] font-bold text-xs">Install & First Launch</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">🔧</div>
    <span class="text-[#D29922] font-bold text-xs">Key Capabilities</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">📋</div>
    <span class="text-[#58a6ff] font-bold text-xs">Custom Instructions</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">🎯</div>
    <span class="text-[#F85149] font-bold text-xs">7-Step Demo</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">🔒</div>
    <span class="text-[#A371F7] font-bold text-xs">MCP & Agents</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">🚀</div>
    <span class="text-[#E3B341] font-bold text-xs">CI Pipeline</span>
  </div>
  <div class="p-3 rounded border border-[#21262d] bg-[#0d1117] text-center">
    <div class="text-lg mb-1">✅</div>
    <span class="text-[#3FB950] font-bold text-xs">Before & After</span>
  </div>
</div>

<!--
Agenda overview — here's what we'll cover today.
-->

---
layout: center
---

# What is Copilot CLI?

<div class="text-gray-400 text-lg pb-6">A terminal-native AI coding assistant with agentic capabilities</div>

<div class="grid grid-cols-3 gap-6 text-sm max-w-3xl">

<div class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">🤖</div>
  <span class="text-[#3FB950] font-bold">Agentic</span><br/>
  <span class="text-gray-400">Plans, executes, and iterates autonomously on complex tasks</span>
</div>

<div class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">🔧</div>
  <span class="text-[#7C72FF] font-bold">Terminal-Native</span><br/>
  <span class="text-gray-400">Works where you work — right in your shell, no IDE needed</span>
</div>

<div class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">🔒</div>
  <span class="text-[#D29922] font-bold">User Control</span><br/>
  <span class="text-gray-400">Never changes files without your explicit approval</span>
</div>

</div>

<!--
Copilot CLI is not just a chatbot in your terminal — it's an agentic assistant that can read your codebase, plan changes, execute them, run tests, and iterate. All while keeping you in control.
-->

---

# Installing Copilot CLI

Choose your platform:

<div class="grid grid-cols-3 gap-6 pt-4">

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-[#3FB950] font-bold mb-3">🍎 macOS / Linux</div>

```bash
brew install copilot-cli
```

</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-[#7C72FF] font-bold mb-3">🪟 Windows</div>

```bash
winget install GitHub.Copilot
```

</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-[#D29922] font-bold mb-3">🌐 Cross-platform (npm)</div>

```bash
# Requires Node.js 22+
npm install -g @github/copilot
```

</div>

</div>

<v-click>

<div class="pt-6 text-gray-500 text-sm">

> Available with **all Copilot plans**. Organization admins must enable the Copilot CLI policy.

</div>

</v-click>

<!--
Three installation options — Homebrew for Mac/Linux users, WinGet for Windows, or npm if you prefer cross-platform. Node 22 or later is required for the npm route.
-->

---

# First Launch

<div class="grid grid-cols-2 gap-8">
<div>

### Getting started is 3 commands:

```bash {1|3|5}
# 1. Start an interactive session
copilot

# 2. Authenticate (first time only)
/login

# 3. Ask your first question
Give me an overview of this project.
```

<v-click>

<div class="pt-4 text-gray-400 text-sm">

Or run **non-interactively** with the `-p` flag:

`copilot -p "How do I fix the failing tests?"`

</div>

</v-click>

</div>
<div>

### Core Shortcuts

<v-click>

| Shortcut | Action |
|----------|--------|
| `Esc` | Cancel current operation |
| `Ctrl+C` | Cancel / clear / exit |
| `Ctrl+L` | Clear screen |
| `@` | Mention files for context |
| `/` | Show slash commands |
| `?` | Tabbed help |
| `↑` `↓` | Command history |

</v-click>

</div>
</div>

<!--
Navigate to your project directory, type copilot, and you're in. First time you'll need to /login — after that it remembers. The @ symbol is powerful — use it to point Copilot at specific files.
-->

---

# How Actions Work

<div class="text-gray-400 pb-4">Copilot CLI operates on a trust-and-approve model</div>

<div class="grid grid-cols-2 gap-8">
<div>

### File Trust

When you start a session, Copilot asks about the working directory:

<v-clicks>

- **Yes, proceed** — trust for this session only
- **Yes, and remember** — trust permanently
- **No, exit** — end the session

</v-clicks>

<v-click>

<div class="pt-2 text-gray-500 text-sm">

Add extra directories mid-session: `/add-dir /path/to/other/project`

Switch working directory: `/cd /path/to/directory`

</div>

</v-click>

</div>
<div>

### Tool Approvals

When Copilot wants to run a command that modifies or executes files:

<v-clicks>

- **Yes** — allow once, ask again next time
- **Yes, approve for session** — allow this tool for the rest of the session
- **No (Esc)** — reject and give alternate instructions

</v-clicks>

<v-click>

<div class="pt-2">

> 💡 Rejecting doesn't stop the task — you can give Copilot **inline feedback** to try a different approach.

</div>

</v-click>

</div>
</div>

<!--
This is the safety model. Copilot never modifies files without asking. You control what it can touch and what commands it can run. The "approve for session" option is great for repetitive commands like running tests.
-->

---

# Key Capabilities

<div class="grid grid-cols-2 gap-8">
<div>

### Slash Commands

<v-clicks>

| Command | What it does |
|---------|-------------|
| `/help` | Show all commands |
| `/agent` | Select a custom agent |
| `/review` | AI-powered code review |
| `/compact` | Compress context history |
| `/usage` | Session stats & token usage |
| `/context` | Visual token usage overview |
| `/resume` | Resume a previous session |
| `/mcp add` | Add an MCP server |
| `/feedback` | Submit feedback to GitHub |

</v-clicks>

</div>
<div>

### Built-in Agents

<v-click>

| Agent | Purpose |
|-------|---------|
| **Explore** | Quick codebase Q&A |
| **Task** | Run tests, builds, lints |
| **General-purpose** | Complex multi-step work |
| **Code-review** | High-signal review |

</v-click>

<v-click>

### Power Moves

```bash
# Run shell commands directly
!git status

# Resume last session
copilot --continue

# Full autonomy mode
copilot --yolo
```

</v-click>

</div>
</div>

<!--
Slash commands are your control panel. The built-in agents handle common patterns — explore for questions, task for running things, general-purpose for complex work. And yes, --yolo is a real flag.
-->

---

# Custom Instructions & Agents

<div class="grid grid-cols-2 gap-8">
<div>

### Custom Instructions

Copilot automatically reads project-level instructions:

```
.github/
├── copilot-instructions.md    # repo-wide
├── instructions/
│   └── *.instructions.md      # path-specific
└── agents/
    └── reviewer.agent.md      # custom agents
```

<v-click>

<div class="pt-2 text-gray-400 text-sm">

Our demo project already has one:

- Use parameterized queries (never string concat)
- Return `{ errors: [{ field, message }] }`
- Hash passwords with bcrypt
- JWT payload: user id + username

</div>

</v-click>

</div>
<div>

### Agent Scope Levels

<v-click>

| Level | Location |
|-------|----------|
| **User** | `~/.copilot/agents/` |
| **Repo** | `.github/agents/` |
| **Org/Enterprise** | `.github-private/agents/` |

</v-click>

<v-click>

### Using Agents

```bash
# Browse available agents
/agent

# Invoke by name in a prompt
Use the security agent to review this PR

# Or via CLI flag
copilot --agent=security --prompt "Audit auth"
```

</v-click>

</div>
</div>

<!--
This is where Copilot CLI gets really powerful. Custom instructions shape how Copilot behaves in YOUR project. Custom agents give it specialized expertise. Our demo project's copilot-instructions.md is why Copilot uses parameterized queries — it read the rules.
-->

---

# Context Management

<div class="text-gray-400 pb-6">Keep your sessions efficient as conversations grow</div>

<div class="grid grid-cols-3 gap-6">

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-[#3FB950] font-bold mb-3">/usage</div>
  <span class="text-gray-400 text-sm">Session stats: premium requests used, duration, lines edited, token breakdown per model</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-[#7C72FF] font-bold mb-3">/context</div>
  <span class="text-gray-400 text-sm">Visual overview of current token usage — see how much room you have left</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-[#D29922] font-bold mb-3">/compact</div>
  <span class="text-gray-400 text-sm">Manually compress conversation history to free up space. Auto-triggers at 95% capacity.</span>
</div>

</div>

<v-click>

<div class="pt-8 text-center">

### Session Continuity

<div class="text-left inline-block">

`copilot --continue` — resume the last session with full context

`copilot --resume` — browse and select from past sessions

</div>

<div class="text-gray-500 text-sm pt-2">You can even resume Copilot coding agent sessions from GitHub → local CLI</div>

</div>

</v-click>

<!--
Long sessions eat context. Use /usage to monitor, /compact to free space, and --continue to pick up where you left off. Copilot auto-compresses at 95% so you don't hit the wall unexpectedly.
-->

---
layout: center
class: text-center
---

# The 7-Step Demo

<div class="grid grid-cols-4 gap-4 pt-8 text-sm">

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">1️⃣</div>
  <span class="text-[#7C72FF] font-bold">First Interaction</span><br/>
  <span class="text-gray-400">Summarize this codebase</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">2️⃣</div>
  <span class="text-[#3FB950] font-bold">Plan Mode</span><br/>
  <span class="text-gray-400">Add user registration</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">3️⃣</div>
  <span class="text-[#D29922] font-bold">Autopilot</span><br/>
  <span class="text-gray-400">Fix failing tests</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">4️⃣</div>
  <span class="text-[#F85149] font-bold">Code Review</span><br/>
  <span class="text-gray-400">/review</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">5️⃣</div>
  <span class="text-[#A371F7] font-bold">/delegate</span><br/>
  <span class="text-gray-400">Write real user tests</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">6️⃣</div>
  <span class="text-[#DB61A2] font-bold">MCP & Agents</span><br/>
  <span class="text-gray-400">Custom security reviewer</span>
</div>

<div v-click class="p-4 rounded border border-[#21262d] bg-[#0d1117]">
  <div class="text-2xl mb-2">7️⃣</div>
  <span class="text-[#E3B341] font-bold">CI Pipeline</span><br/>
  <span class="text-gray-400">Add review to CI</span>
</div>

<div v-click class="p-4 rounded border border-[#3FB950] bg-[#0d1117]">
  <div class="text-2xl mb-2">🎯</div>
  <span class="text-[#3FB950] font-bold">Result</span><br/>
  <span class="text-gray-400">Complete, secure API</span>
</div>

</div>

<!--
Each step builds on the last. By the end, we'll have a complete, tested, and secure API — built live with Copilot CLI.
-->

---
layout: section
---

# Step 1: First Interaction
## "Summarize this codebase"

<!--
Let's start by seeing how Copilot CLI understands an entire project.
-->

---

# Step 1 — First Interaction

Open the terminal in the project root and ask:

```bash
# Just ask Copilot to explore the project
> Summarize this codebase
```

<v-clicks>

### What Copilot CLI does:
- 📂 Reads `README.md`, `package.json`, and project structure
- 🔍 Scans source files to understand architecture
- 📝 Returns a clear summary of what exists and what's missing

### Why this matters:
- Instant onboarding to any codebase
- Identifies the **tech stack**, **architecture**, and **gaps**
- Sets the stage for everything that follows

</v-clicks>

<!--
This is the "hello world" of Copilot CLI. Point it at a project and it tells you exactly what you're working with. Notice it picks up the TODOs, the stubbed routes, and the project structure automatically.
-->

---

# What Copilot Finds

<div class="grid grid-cols-2 gap-6">
<div>

### ✅ Working
```
Tasks API        — Full CRUD, 9 tests passing
Database         — SQLite with WAL mode
Health endpoint  — GET /health
Error handling   — Global error middleware
```

</div>
<div>

### 🚧 Incomplete
```
Users API        — All routes return 501
Auth middleware   — Always returns 401
Validation       — Passes everything through
User tests       — 11 stubs, no assertions
```

</div>
</div>

<v-click>

### 🐛 And it finds this...

```js {3}
// src/routes/tasks.js — search endpoint
router.get('/search', (req, res) => {
  const tasks = db.prepare(`SELECT * FROM tasks WHERE title LIKE '%${query}%'`).all();
  //                        ⚠️ SQL INJECTION — string interpolation in query
});
```

</v-click>

<!--
Copilot doesn't just list files — it understands the code. It found the SQL injection vulnerability without being asked. This becomes important in Step 4.
-->

---
layout: section
---

# Step 2: Plan Mode
## "Add user registration with JWT"

<!--
Now let's use Plan Mode to tackle a complex multi-file feature.
-->

---

# Step 2 — Plan Mode

Ask Copilot to plan a feature before writing code:

```bash
> Add user registration and login with JWT authentication
```

<v-click>

### Copilot creates a plan touching:

| File | Changes |
|------|---------|
| `src/models/user.js` | `create()`, `verifyPassword()` with bcrypt |
| `src/routes/users.js` | Register + Login endpoints |
| `src/middleware/auth.js` | JWT token verification |
| `.env` | `JWT_SECRET` configuration |

</v-click>

<v-click>

### The intentional gap it fills:

```js
// src/routes/users.js — BEFORE (every route is a stub)
router.post('/register', async (req, res) => {
  // TODO: Implement user registration
  res.status(501).json({ error: 'Not implemented' });
});
```

</v-click>

<!--
Plan Mode is key for complex changes. Copilot reads the existing TODOs, the model structure, and the test expectations to create a coherent plan. You review and approve before any code is written.
-->

---

# Plan Mode — The Result

```js
// src/models/user.js — AFTER
const bcrypt = require('bcryptjs');

const User = {
  create({ username, email, password }) {
    const password_hash = bcrypt.hashSync(password, 10);
    return db.prepare(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)'
    ).run(username, email, password_hash);
  },

  verifyPassword(username, password) {
    const user = this.getByUsername(username);
    if (!user) return null;
    return bcrypt.compareSync(password, user.password_hash) ? user : null;
  }
};
```

<v-click>

### Key observations:
- 🔒 **Parameterized queries** — follows project conventions from `copilot-instructions.md`
- 🔑 **bcrypt hashing** — uses the dependency already in `package.json`
- 📐 **Matches existing patterns** — same style as `getByUsername()`

</v-click>

<!--
Notice how Copilot followed the project's own conventions. The copilot-instructions.md file told it to use parameterized queries and bcrypt — and it did.
-->

---
layout: section
---

# Step 3: Autopilot
## "Fix the failing tests"

<!--
Time to let Copilot run autonomously — find failing tests and fix them.
-->

---

# Step 3 — Autopilot

The validation middleware is a no-op — 6 tests are failing:

```js
// src/middleware/validate.js — BEFORE
function validateTask(req, res, next) {
  // TODO: Implement validation
  next();  // passes everything through
}
```

```bash
> Fix the failing tests
```

<v-clicks>

### What Copilot does automatically:
1. 🧪 Runs `npm test` — sees 6 failures in `validate.test.js`
2. 📖 Reads the test expectations to understand the required behavior
3. ✏️ Implements `validateTask()` with proper validation rules
4. 🔄 Re-runs tests — confirms all pass

</v-clicks>

<!--
Autopilot mode is perfect for this. The tests already define the expected behavior — Copilot just needs to make them pass. It's like TDD in reverse.
-->

---

# The Validation Fix

```js
// src/middleware/validate.js — AFTER
function validateTask(req, res, next) {
  const errors = [];
  const { title, description, priority, status } = req.body;

  if (!title || typeof title !== 'string' || !title.trim())
    errors.push({ field: 'title', message: 'Title is required' });
  else if (title.length > 200)
    errors.push({ field: 'title', message: 'Title must be under 200 characters' });

  if (description && description.length > 2000)
    errors.push({ field: 'description', message: 'Description must be under 2000 characters' });

  if (priority && !['low', 'medium', 'high'].includes(priority))
    errors.push({ field: 'priority', message: 'Invalid priority' });

  if (status && !['pending', 'in_progress', 'done'].includes(status))
    errors.push({ field: 'status', message: 'Invalid status' });

  if (errors.length) return res.status(400).json({ errors });
  next();
}
```

<v-click>

```bash
✓ 15 tests passed  (was 9 passing, 6 failing → now all 15 green)
```

</v-click>

<!--
The error response format matches exactly what the tests expect — `{ errors: [{ field, message }] }` — because Copilot read the test file to understand the contract.
-->

---
layout: section
---

# Step 4: Code Review
## `/review`

<!--
Let's see if Copilot catches the SQL injection we planted.
-->

---

# Step 4 — Code Review

Use the built-in review command:

```bash
> /review
```

<v-click>

### 🚨 Copilot flags the SQL injection:

```js {3}
// src/routes/tasks.js — line 23
router.get('/search', (req, res) => {
  const tasks = db.prepare(`SELECT * FROM tasks WHERE title LIKE '%${query}%'`).all();
  //                                                       ^^^^^^^^^^^^^^^^
  //              ⚠️ CRITICAL: Direct string interpolation — SQL injection vulnerability
});
```

</v-click>

<v-click>

### ✅ Suggested fix:

```js
// Use parameterized query instead
const tasks = db.prepare('SELECT * FROM tasks WHERE title LIKE ?').all(`%${query}%`);
```

> The value is passed as a **parameter**, not interpolated into the SQL string.

</v-click>

<!--
This is a real vulnerability — not a contrived example. The rest of the codebase uses parameterized queries correctly, making this inconsistency even more dangerous because a reviewer might assume it's safe.
-->

---
layout: section
---

# Step 5: /delegate
## "Write real tests for users"

<!--
The user tests are all stubs — let's delegate writing real ones.
-->

---

# Step 5 — /delegate

The user test file has 11 stubs that test nothing:

```js
// tests/users.test.js — BEFORE
test('should hash password before storing', () => {
  expect(true).toBe(true);  // placeholder
});
```

```bash
> /delegate Write real tests for the user registration and login endpoints
```

<v-clicks>

### Copilot generates tests that:
- 🔐 Verify password hashing &nbsp; 🚫 Check duplicate prevention &nbsp; 🎫 Confirm JWT on login
- 🔒 Reject unauthenticated requests &nbsp; 📋 Ensure `password_hash` never exposed

### Why `/delegate`?
- Runs in the **background** — you can keep working
- Generates a full test suite from route signatures + model
- Follows patterns from existing `tasks.test.js`

</v-clicks>

<!--
/delegate is perfect for bulk work like this. It reads the existing test patterns, the route implementations, and the model methods to generate comprehensive tests. You review the PR when it's done.
-->

---
layout: section
---

# Step 6: MCP & Custom Agents
## Security Reviewer Agent

<!--
Now let's go beyond built-in features — custom agents and MCP servers.
-->

---

# Step 6 — MCP & Custom Agents

### Custom Security Reviewer Agent

```markdown
<!-- .github/agents/reviewer.agent.md -->
# Security Reviewer

You are a security-focused code reviewer.
Focus on: SQL injection, XSS, auth bypass,
secret exposure, and insecure defaults.

Flag any:
- String interpolation in SQL queries
- Missing input sanitization
- Hardcoded secrets or API keys
- Missing auth on sensitive routes
- Overly permissive CORS settings
```

<v-click>

### What the agent catches:

| Finding | File | Severity |
|---------|------|----------|
| SQL injection in search | `routes/tasks.js:23` | 🔴 Critical |
| `JWT_SECRET=change-me-to-a-real-secret` | `.env.example` | 🟡 Warning |
| `INTERNAL_API_KEY` in env template | `.env.example` | 🟡 Warning |
| No rate limiting on login | `routes/users.js` | 🟠 Medium |

</v-click>

<!--
Custom agents extend Copilot's capabilities. This security reviewer runs with domain-specific expertise — it knows what to look for in a Node.js API and flags issues a generic review might miss.
-->

---
layout: section
---

# Step 7: CI Pipeline
## Add Code Review to CI

<!--
Final step — wire Copilot into the CI pipeline.
-->

---

# Step 7 — CI Pipeline

The existing CI workflow has a placeholder:

```yaml
# .github/workflows/ci.yml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm test
      # TODO: Add code review step
```

<v-click>

### Ask Copilot to complete it:

```bash
> Add a Copilot code review step to the CI pipeline
```

</v-click>

<v-click>

```yaml {6-11}
      - run: npm test

      # Copilot-powered code review on PRs
      - name: Copilot Code Review
        if: github.event_name == 'pull_request'
        uses: github/copilot-code-review-action@v1
        with:
          model: gpt-4o
          custom-instructions: |
            Focus on security issues, especially SQL injection
            and authentication bypass vulnerabilities.
```

</v-click>

<!--
Now every PR gets an automated Copilot review focused on the security patterns we identified. This closes the loop — from finding issues manually to catching them automatically in CI.
-->

---
layout: two-cols
layoutClass: gap-8
---

# Before & After

### <span class="text-[#F85149]">🔴 Before Demo</span>

- Users API → all `501`
- Auth middleware → always `401`
- Validation → no-op
- Tests → 9 pass, 6 fail, 11 stubs
- SQL injection in search
- No CI review

::right::

### <span class="text-[#3FB950]">🟢 After Demo</span>

- ✅ Users API → register, login, profile
- ✅ Auth middleware → JWT verification
- ✅ Validation → complete with errors
- ✅ Tests → all passing, stubs replaced
- ✅ SQL injection → parameterized query
- ✅ CI → automated Copilot review

<!--
Seven steps, one demo, a complete transformation. Every change was driven by Copilot CLI.
-->

---
layout: center
class: text-center
---

# Recap

<div class="grid grid-cols-4 gap-3 pt-6 text-xs">

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#7C72FF] font-bold">1. Explore</span><br/>
  <span class="text-gray-400">Understand any codebase instantly</span>
</div>

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#3FB950] font-bold">2. Plan</span><br/>
  <span class="text-gray-400">Design before you build</span>
</div>

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#D29922] font-bold">3. Autopilot</span><br/>
  <span class="text-gray-400">Fix issues end-to-end</span>
</div>

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#F85149] font-bold">4. Review</span><br/>
  <span class="text-gray-400">Catch bugs & vulnerabilities</span>
</div>

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#A371F7] font-bold">5. Delegate</span><br/>
  <span class="text-gray-400">Background bulk work</span>
</div>

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#DB61A2] font-bold">6. Agents</span><br/>
  <span class="text-gray-400">Custom domain expertise</span>
</div>

<div class="p-3 rounded border border-[#21262d] bg-[#0d1117]">
  <span class="text-[#E3B341] font-bold">7. CI</span><br/>
  <span class="text-gray-400">Automate in your pipeline</span>
</div>

<div class="p-3 rounded border border-[#3FB950] bg-[#0d1117]">
  <span class="text-[#3FB950] font-bold">🔑 Key</span><br/>
  <span class="text-gray-400">Real project, real results</span>
</div>

</div>

<div class="pt-8 text-gray-400">

### The best way to learn Copilot CLI is to use it on <span class="text-[#3FB950]">your own codebase</span>.

</div>

<!--
Each feature builds on the last. Start with exploring, then plan, then let Copilot execute. Review the output, delegate the bulk work, and automate the rest.
-->

---
layout: section
---

# CLI Reference
## Your cheat sheet for Copilot CLI

<!--
Before we wrap up, here's the complete reference — everything you need bookmarked in one place.
-->

---

# Slash Commands

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

### Session & Navigation

| Command | Purpose |
|---------|---------|
| `/help` | Show all available commands |
| `/clear`, `/new` | Clear conversation history |
| `/compact` | Compress history to free context |
| `/context` | Visual token usage overview |
| `/usage` | Session stats & metrics |
| `/resume` | Resume a previous session |
| `/rename NAME` | Rename current session |
| `/session` | Session info & workspace summary |
| `/exit`, `/quit` | Exit the CLI |
| `/cwd`, `/cd` | Change working directory |

</div>
<div>

### Agents & Tools

| Command | Purpose |
|---------|---------|
| `/agent` | Browse & select custom agents |
| `/review` | AI-powered code review |
| `/delegate` | Delegate to remote PR agent |
| `/plan` | Create implementation plan |
| `/fleet` | Parallel sub-agent execution |
| `/diff` | Review changes in current dir |
| `/mcp` | Manage MCP servers |
| `/lsp` | Manage language servers |
| `/skills` | Manage agent skills |
| `/model` | Switch AI model |

</div>
</div>

<v-click>

<div class="pt-4 text-sm">

### Permissions & Config

| | |
|---------|---------|
| `/allow-all`, `/yolo` | Enable all permissions | `/add-dir PATH` | Allow file access to directory |
| `/list-dirs` | Show allowed directories | `/reset-allowed-tools` | Reset tool permissions |
| `/init` | Initialize repo custom instructions | `/login` / `/logout` | Auth management |

</div>

</v-click>

<!--
These are the slash commands you'll use most. /compact is essential for long sessions. /fleet is new and powerful — it runs multiple sub-agents in parallel.
-->

---

# Keyboard Shortcuts

<div class="grid grid-cols-2 gap-6">
<div>

### Global

| Shortcut | Action |
|----------|--------|
| `Esc` | Cancel current operation |
| `Ctrl+C` | Cancel / clear / exit |
| `Ctrl+D` | Shutdown |
| `Ctrl+L` | Clear screen |
| `Shift+Tab` | Cycle: standard → plan → autopilot |
| `@` | Include file in context |
| `!` | Run shell command directly |
| `/` | Slash command |
| `↑` `↓` | Command history |

### Timeline

| Shortcut | Action |
|----------|--------|
| `Ctrl+O` | Expand recent timeline items |
| `Ctrl+E` | Expand all timeline items |
| `Ctrl+T` | Toggle reasoning visibility |

</div>
<div>

### Editing

| Shortcut | Action |
|----------|--------|
| `Ctrl+A` | Beginning of line |
| `Ctrl+E` | End of line |
| `Ctrl+F` / `Ctrl+B` | Forward / back one char |
| `Meta+←` / `Meta+→` | Move by word |
| `Ctrl+K` | Delete to end of line |
| `Ctrl+U` | Delete to start of line |
| `Ctrl+W` | Delete previous word |
| `Ctrl+H` | Delete previous character |
| `Ctrl+G` | Open prompt in external editor |
| `Ctrl+X` then `/` | Run slash command mid-prompt |

</div>
</div>

<!--
Shift+Tab is the most important one — it cycles between standard, plan, and autopilot mode. Ctrl+T lets you peek at the model's reasoning. And Ctrl+X then / lets you run a slash command without losing what you've already typed.
-->

---

# Command-Line Flags

<div class="grid grid-cols-2 gap-6 text-xs">
<div>

### Essentials

```bash
copilot                        # Interactive session
copilot -p "PROMPT"            # One-shot prompt
copilot -sp "PROMPT"           # Silent one-shot (scripting)
copilot --continue             # Resume last session
copilot --resume               # Pick a session to resume
copilot --model=MODEL          # Choose AI model
copilot --agent=NAME           # Use specific agent
```

### Permissions

```bash
copilot --allow-all            # Allow everything
copilot --yolo                 # Same as --allow-all
copilot --allow-tool='shell(git:*)'
copilot --deny-tool='shell(git push)'
copilot --allow-url='github.com'
```

</div>
<div>

### Configuration

```bash
copilot --config-dir=PATH      # Custom config dir
copilot --log-level=debug      # Set log verbosity
copilot --no-custom-instructions
copilot --no-auto-update
copilot --experimental         # Enable experiments
copilot --screen-reader        # Accessibility mode
copilot --plain-diff           # Disable rich diffs
copilot --streamer-mode        # Hide model/quota info
```

### MCP & Integrations

```bash
# Add MCP server for this session only
copilot --additional-mcp-config='@mcp.json'

# Disable built-in GitHub MCP
copilot --disable-builtin-mcps

# Enable all GitHub MCP tools
copilot --enable-all-github-mcp-tools
```

</div>
</div>

<!--
The flags are designed for both interactive use and scripting. Deny rules always win over allow rules, even with --allow-all.
-->

---

# Command-Line Flags (cont.)

<div class="grid grid-cols-2 gap-6 text-xs">
<div>

### Tool Permission Patterns

| Pattern | Matches |
|---------|---------|
| `shell(git:*)` | All git commands |
| `write(src/*.ts)` | Write to TS files in src/ |
| `read(.env)` | Read .env file |
| `MyMCP(create_issue)` | Specific MCP tool |
| `url(github.com)` | URL access |

```bash
# Allow all git commands except git push
copilot --allow-tool='shell(git:*)' \
        --deny-tool='shell(git push)'
```

> Deny rules **always** take precedence over allow rules, even with `--allow-all`.

</div>
<div>

### Scripting & Automation

```bash
# Autopilot with a limit
copilot -p "Fix tests" \
  --autopilot \
  --max-autopilot-continues=10

# Share session output
copilot -p "PROMPT" --share=output.md
copilot -p "PROMPT" --share-gist
```

### Non-Interactive Usage

```bash
# One-shot with silent output (for scripts)
copilot -sp "Explain this error" 

# Pipe into other tools
copilot -sp "Generate a .gitignore for Node" \
  > .gitignore
```

</div>
</div>

<!--
The permission pattern system is powerful — you can be very granular about what Copilot can and can't do. Great for CI pipelines and automated workflows.
-->

---

# Environment Variables & Config

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `COPILOT_MODEL` | Set AI model |
| `COPILOT_ALLOW_ALL` | `true` = allow all permissions |
| `COPILOT_HOME` | Override config dir (`~/.copilot`) |
| `COPILOT_GITHUB_TOKEN` | Auth token (highest priority) |
| `GH_TOKEN` | Auth token (medium priority) |
| `GITHUB_TOKEN` | Auth token (lowest priority) |
| `COPILOT_AUTO_UPDATE` | `false` to disable updates |
| `COPILOT_EDITOR` | Editor for `Ctrl+G` |

</div>
<div>

### Config Files

| Scope | Location |
|-------|----------|
| **User** | `~/.copilot/config.json` |
| **Repo** | `.github/copilot/settings.json` |
| **Local** | `.github/copilot/settings.local.json` |

<v-click>

### Key Config Options

```json
{
  "model": "claude-sonnet-4",
  "reasoning_effort": "high",
  "theme": "dark",
  "include_coauthor": true,
  "streamer_mode": false,
  "trusted_folders": [
    "/path/to/project"
  ]
}
```

</v-click>

</div>
</div>

<v-click>

<div class="text-gray-500 text-xs pt-4 text-center">

Precedence: **CLI flags** > **env vars** > **local settings** > **repo settings** > **user config**

</div>

</v-click>

<!--
Config cascades from broad to specific. User config is your global default, repo settings are shared with your team, local settings are personal overrides. CLI flags always win.
-->

---
layout: center
class: text-center
---

# Thank You

<div class="text-xl pt-4 pb-8 text-gray-400">
  Try it yourself → <code class="text-[#3FB950]">gh copilot</code>
</div>

<div class="grid grid-cols-3 gap-6 text-sm max-w-xl mx-auto">

<div>
  <carbon-terminal class="text-3xl mb-2 text-[#7C72FF]" />
  <div class="font-bold text-white">Copilot CLI</div>
  <div class="text-gray-500">gh copilot</div>
</div>

<div>
  <carbon-document class="text-3xl mb-2 text-[#3FB950]" />
  <div class="font-bold text-white">Docs</div>
  <div class="text-gray-500">docs.github.com</div>
</div>

<div>
  <carbon-logo-github class="text-3xl mb-2 text-[#A371F7]" />
  <div class="font-bold text-white">Demo Repo</div>
  <div class="text-gray-500">copilot-cli-demo</div>
</div>

</div>

<style>
:root {
  --slidev-theme-primary: #3FB950;
  --slidev-theme-accent: #7C72FF;
}

/* Global dark background */
.slidev-layout {
  background: #000000 !important;
  color: #e6edf3 !important;
}

/* Headings */
.slidev-layout h1 {
  color: #ffffff !important;
  font-weight: 700;
}

.slidev-layout h2 {
  color: #3FB950 !important;
  font-weight: 600;
}

.slidev-layout h3 {
  color: #e6edf3 !important;
  font-weight: 600;
}

/* Strong / bold text gets green accent */
.slidev-layout strong {
  color: #3FB950;
}

/* Links */
.slidev-layout a {
  color: #7C72FF !important;
}

.slidev-layout a:hover {
  color: #9B8FFF !important;
}

/* Code blocks — dark GitHub style */
.slidev-layout pre,
.slidev-layout .shiki {
  background: #0d1117 !important;
  border: 1px solid #21262d !important;
  border-radius: 8px !important;
}

/* Inline code */
.slidev-layout code:not(pre code) {
  background: #161b22 !important;
  color: #3FB950 !important;
  border-radius: 4px;
  padding: 2px 6px;
}

/* Tables */
.slidev-layout table {
  border-collapse: collapse;
}

.slidev-layout th {
  background: #161b22 !important;
  color: #3FB950 !important;
  border-bottom: 2px solid #3FB950 !important;
  padding: 8px 16px;
}

.slidev-layout td {
  border-bottom: 1px solid #21262d !important;
  padding: 8px 16px;
  color: #e6edf3 !important;
}

.slidev-layout tr:hover td {
  background: #0d1117 !important;
}

/* Blockquotes */
.slidev-layout blockquote {
  border-left: 4px solid #7C72FF !important;
  background: #0d1117 !important;
  color: #8b949e !important;
  padding: 8px 16px;
  border-radius: 0 8px 8px 0;
}

/* Section layout slides */
.slidev-layout.slidev-layout-section {
  background: linear-gradient(135deg, #000000 0%, #0d1117 50%, #161b22 100%) !important;
}

.slidev-layout.slidev-layout-section h1 {
  color: #ffffff !important;
  font-size: 2.5em !important;
}

/* Center layout */
.slidev-layout.slidev-layout-center {
  background: #000000 !important;
}

/* Colored cards — override with GitHub dark palette */
.bg-blue-500 { background-color: #7C72FF !important; }
.bg-green-500 { background-color: #3FB950 !important; }
.bg-yellow-500 { background-color: #D29922 !important; }
.bg-red-500 { background-color: #F85149 !important; }
.bg-purple-500 { background-color: #A371F7 !important; }
.bg-pink-500 { background-color: #DB61A2 !important; }
.bg-orange-500 { background-color: #E3B341 !important; }
.bg-teal-500 { background-color: #3FB950 !important; }
.bg-gray-500 { background-color: #484F58 !important; }

/* Card opacity overrides for dark theme */
.bg-opacity-20 {
  --un-bg-opacity: 0.15 !important;
}

/* List styling */
.slidev-layout ul,
.slidev-layout ol {
  color: #e6edf3;
}

.slidev-layout li::marker {
  color: #3FB950;
}

/* Progress bar */
.slidev-progress {
  background: #3FB950 !important;
}

/* Slide number */
.slidev-page-number {
  color: #484F58 !important;
}

/* v-click animations keep the dark feel */
.slidev-vclick-hidden {
  opacity: 0;
}

/* Two-cols layout gap */
.slidev-layout.slidev-layout-two-cols .col-right {
  border-left: 1px solid #21262d;
  padding-left: 1.5rem;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0d1117;
}
::-webkit-scrollbar-thumb {
  background: #21262d;
  border-radius: 3px;
}
</style>
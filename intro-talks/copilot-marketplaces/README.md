---
status: active
updated: 2026-03-03
section: "Intro Talks"
references:
  - url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing
    label: "Finding and installing plugins for Copilot CLI"
    verified: 2026-03-03
  - url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating
    label: "Creating a plugin for Copilot CLI"
    verified: 2026-03-03
  - url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace
    label: "Creating a plugin marketplace for Copilot CLI"
    verified: 2026-03-03
  - url: https://github.com/github/copilot-plugins
    label: "Official GitHub Copilot plugins repository"
    verified: 2026-03-03
  - url: https://github.com/github/awesome-copilot
    label: "Awesome Copilot — community-contributed plugins"
    verified: 2026-03-03
---

# GitHub Copilot Marketplaces: Extend, Create, Share

> **The Question This Talk Answers:**
> *"How do I extend Copilot CLI with plugins, create my own, and share them through marketplaces — and how does this compare to other AI coding ecosystems?"*

**Duration:** 20 minutes | **Target Audience:** Experienced developers using GitHub Copilot CLI

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Plugins are how teams customize Copilot CLI beyond built-in capabilities — essential for power users |
| **Compelling** | 🟢 High | Hands-on CLI commands make this immediately actionable; marketplace comparison adds strategic context |
| **Credible** | 🟢 High | All commands come directly from official GitHub documentation |
| **Novel** | 🟢 High | Plugin marketplaces are a new capability — most developers haven't explored them yet |
| **Unique** | 🟡 Medium | Cross-tool marketplace comparison provides perspective not found in the docs alone |

---

## 🎯 Objectives

By the end of this session, attendees will be able to:

1. **Browse and install** plugins from registered Copilot CLI marketplaces
2. **Create a plugin** with agents, skills, hooks, and MCP server configs
3. **Build and publish** a custom marketplace for their team or organization
4. **Compare** how plugin ecosystems work across GitHub Copilot, Claude Code, and other AI coding tools

---

## 📖 Talk Structure (20 minutes)

### Section 1: What Are Copilot Plugins & Marketplaces? (~4 min)

Plugins are packages that extend Copilot CLI functionality. They can include:
- **Agents** — Specialized AI assistants (`.agent.md` files)
- **Skills** — Reusable prompt-driven capabilities (`SKILL.md` files)
- **Hooks** — Event-driven automations (`hooks.json`)
- **MCP Servers** — External tool integrations (`.mcp.json`)

A **marketplace** is a registry — a Git repository with a `marketplace.json` — that makes plugins discoverable and installable. Copilot CLI ships with two default marketplaces:

| Marketplace | Repository | Description |
|-------------|-----------|-------------|
| `copilot-plugins` | [github/copilot-plugins](https://github.com/github/copilot-plugins) | Official GitHub-maintained plugins |
| `awesome-copilot` | [github/awesome-copilot](https://github.com/github/awesome-copilot) | Community-contributed plugins, agents, and instructions |

### Section 2: Finding & Installing Plugins (~5 min)

#### Browsing Marketplaces

```bash
# List registered marketplaces
copilot plugin marketplace list

# Browse plugins in a marketplace
copilot plugin marketplace browse awesome-copilot
```

Or in interactive mode:
```
/plugin marketplace list
/plugin marketplace browse copilot-plugins
```

#### Installing Plugins

```bash
# From a registered marketplace
copilot plugin install database-data-management@awesome-copilot

# From a GitHub repository
copilot plugin install owner/repo

# From any Git URL (GitLab, Bitbucket, etc.)
copilot plugin install https://gitlab.com/owner/repo.git

# From a local path (for development)
copilot plugin install ./my-plugin
```

#### Managing Installed Plugins

```bash
copilot plugin list                    # View installed plugins
copilot plugin update plugin-name      # Update to latest version
copilot plugin uninstall plugin-name   # Remove a plugin
```

Plugins are stored at `~/.copilot/state/installed-plugins/`.

### Section 3: Creating Your Own Plugin (~5 min)

#### Plugin Structure

```
my-plugin/
├── plugin.json           # Required manifest
├── agents/               # Custom agents (optional)
│   └── helper.agent.md
├── skills/               # Skills (optional)
│   └── deploy/
│       └── SKILL.md
├── hooks.json            # Hook configuration (optional)
└── .mcp.json             # MCP server config (optional)
```

#### The `plugin.json` Manifest

```json
{
  "name": "my-dev-tools",
  "description": "React development utilities",
  "version": "1.2.0",
  "author": {
    "name": "Jane Doe",
    "email": "jane@example.com"
  },
  "license": "MIT",
  "keywords": ["react", "frontend"],
  "agents": "agents/",
  "skills": ["skills/", "extra-skills/"],
  "hooks": "hooks.json",
  "mcpServers": ".mcp.json"
}
```

#### Development Workflow

```bash
# Install locally for testing
copilot plugin install ./my-plugin

# Verify plugin loaded
copilot plugin list

# In interactive session — check components
/agent          # List agents
/skills list    # List skills

# Re-install after changes (cache is used between sessions)
copilot plugin install ./my-plugin

# Uninstall when done testing
copilot plugin uninstall my-dev-tools
```

### Section 4: Creating a Marketplace (~3 min)

A marketplace is just a Git repository with a `marketplace.json` file in `.github/plugin/` or `.claude-plugin/`:

```json
{
  "name": "my-team-marketplace",
  "owner": {
    "name": "Your Organization",
    "email": "plugins@example.com"
  },
  "metadata": {
    "description": "Curated plugins for our team",
    "version": "1.0.0"
  },
  "plugins": [
    {
      "name": "frontend-design",
      "description": "Create professional-looking GUIs",
      "version": "2.1.0",
      "source": "./plugins/frontend-design"
    },
    {
      "name": "security-checks",
      "description": "Check for security vulnerabilities",
      "version": "1.3.0",
      "source": "./plugins/security-checks"
    }
  ]
}
```

#### Sharing Your Marketplace

```bash
# Users register your marketplace
copilot plugin marketplace add your-org/your-marketplace

# Then install plugins from it
copilot plugin install frontend-design@my-team-marketplace

# Remove a marketplace
copilot plugin marketplace remove my-team-marketplace
```

Marketplaces can be hosted on GitHub, GitLab, any Git service, or even a local/shared filesystem.

### Section 5: The Broader Ecosystem (~3 min)

The plugin/marketplace pattern isn't unique to GitHub Copilot. Here's how it compares:

| Feature | GitHub Copilot CLI | Claude Code | Cursor | Windsurf |
|---------|-------------------|-------------|--------|----------|
| **Plugin format** | `plugin.json` + agents/skills/hooks/MCP | `.claude-plugin/plugin.json` — compatible format | VS Code extensions | VS Code extensions |
| **Default marketplaces** | `copilot-plugins`, `awesome-copilot` | `claude-plugins-official` | VS Code Marketplace | VS Code Marketplace + Windsurf store |
| **Custom marketplaces** | ✅ Any Git repo | ✅ Any Git repo | ❌ Extensions only | ❌ Extensions only |
| **CLI-driven install** | `copilot plugin install` | `/plugin install` | N/A (GUI) | N/A (GUI) |
| **Cross-compatible** | ✅ Reads `.claude-plugin/` | ✅ Reads `.github/plugin/` | ❌ | ❌ |

**Key insight:** GitHub Copilot CLI and Claude Code share the plugin format — a `plugin.json` in either `.github/plugin/` or `.claude-plugin/` is recognized by both tools. This means a single plugin can work across both ecosystems.

#### Claude Code Marketplace

Anthropic maintains its own plugin ecosystem at [anthropics/claude-code](https://github.com/anthropics/claude-code), with 36+ official plugins including code review, frontend design, and SDK development tools. You can register it as a Copilot marketplace:

```bash
copilot plugin marketplace add anthropics/claude-code
```

---

## 📚 Key Concepts

| Concept | Definition |
|---------|-----------|
| **Plugin** | A package containing agents, skills, hooks, and/or MCP configs that extends Copilot CLI |
| **Marketplace** | A Git repository with `marketplace.json` that serves as a plugin registry |
| **plugin.json** | Required manifest file declaring a plugin's name, version, and components |
| **marketplace.json** | Registry file listing available plugins with metadata and source paths |
| **Cross-compatibility** | `.github/plugin/` and `.claude-plugin/` directories are recognized by both Copilot and Claude Code |

---

## 🔗 Resources

- [Finding and installing plugins](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
- [Creating a plugin](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating)
- [Creating a marketplace](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace)
- [github/copilot-plugins](https://github.com/github/copilot-plugins) — Official plugin repository
- [github/awesome-copilot](https://github.com/github/awesome-copilot) — Community plugins
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — Claude Code plugins (cross-compatible)

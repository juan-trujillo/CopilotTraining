# Plan: Copilot CSS Design System + Slide Generator Update

## 1. Updated `slides/style.css` — Complete CSS Design System

```css
/* =============================================================================
   GitHub Copilot Design System for Slidev
   Based on brand.github.com and primer.style
   See /slides/copilot-brand.md for full documentation
   ============================================================================= */

/* -----------------------------------------------------------------------------
   CSS Custom Properties (Brand Tokens)
   ----------------------------------------------------------------------------- */
:root {
  /* Primary Accents (5% usage) */
  --copilot-purple: #8534f3;
  --copilot-purple-light: #b870ff;
  --copilot-purple-dark: #43179e;
  --github-green: #0fbf3e;
  --github-green-muted: #238636;

  /* Secondary Accent (2-3% usage) */
  --copilot-orange: #f08a3a;

  /* Neutrals (10% usage) */
  --gray-1: #232925; /* Card backgrounds */
  --gray-2: #30363d; /* Borders, dividers */
  --gray-3: #484f58; /* Muted text, icons */
  --gray-4: #8b949e; /* Secondary text */
  --gray-6: #101411; /* Page background (darkest) */

  /* Text (80% black/white) */
  --text-primary: #ffffff;
  --text-body: #c9d1d9;
  --text-muted: #8b949e;
}

/* -----------------------------------------------------------------------------
   Hero Elements (5% Purple Accents)
   ----------------------------------------------------------------------------- */

.text-gradient-hero {
  background: linear-gradient(
    90deg,
    var(--copilot-purple),
    var(--copilot-purple-light)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(67, 23, 158, 0.1) 0%,
    transparent 50%,
    rgba(35, 134, 54, 0.05) 100%
  );
}

.text-hero {
  color: var(--copilot-purple);
}
.border-hero {
  border-color: rgba(133, 52, 243, 0.3);
}

/* -----------------------------------------------------------------------------
   Cards (Neutral Default, Accent Sparingly)
   ----------------------------------------------------------------------------- */

.card {
  background: rgba(35, 41, 37, 0.5);
  border: 1px solid var(--gray-2);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.card-sm {
  background: rgba(35, 41, 37, 0.5);
  border: 1px solid var(--gray-2);
  border-radius: 0.5rem;
  padding: 1rem;
}

.card-accent {
  background: rgba(35, 41, 37, 0.5);
  border: 1px solid rgba(133, 52, 243, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.card-success {
  background: rgba(35, 134, 54, 0.1);
  border: 1px solid rgba(35, 134, 54, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.card-warning {
  background: rgba(154, 52, 18, 0.1);
  border: 1px solid rgba(240, 138, 58, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.card-danger {
  background: rgba(127, 29, 29, 0.3);
  border: 1px solid rgba(239, 68, 68, 0.5);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.nav-card {
  background: rgba(35, 41, 37, 0.5);
  border: 1px solid var(--gray-2);
  border-radius: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-card:hover {
  background: rgba(35, 41, 37, 0.7);
  border-color: var(--copilot-purple);
}

/* -----------------------------------------------------------------------------
   Text Hierarchy
   ----------------------------------------------------------------------------- */

.text-title {
  color: var(--text-primary);
  font-weight: 700;
}
.text-body {
  color: var(--text-body);
}
.text-muted {
  color: var(--text-muted);
}
.text-success {
  color: var(--github-green);
}
.text-warning {
  color: var(--copilot-orange);
}

/* -----------------------------------------------------------------------------
   Borders
   ----------------------------------------------------------------------------- */

.border-neutral {
  border-color: var(--gray-2);
}
.border-accent {
  border-color: rgba(133, 52, 243, 0.3);
}
.border-success {
  border-color: rgba(35, 134, 54, 0.3);
}
.border-l-accent {
  border-left: 4px solid var(--copilot-purple);
}
.border-l-success {
  border-left: 4px solid var(--github-green);
}
.border-l-warning {
  border-left: 4px solid var(--copilot-orange);
}

/* -----------------------------------------------------------------------------
   Code Blocks
   ----------------------------------------------------------------------------- */

.code-block {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--gray-2);
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: "Mona Sans Mono", "Fira Code", monospace;
  font-size: 0.875rem;
}

/* -----------------------------------------------------------------------------
   Badges & Impact Bars
   ----------------------------------------------------------------------------- */

.badge {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 600;
}

.badge-new {
  color: var(--copilot-purple);
  font-weight: 600;
}

.impact-bar {
  background: linear-gradient(
    90deg,
    var(--copilot-purple),
    var(--copilot-purple-light)
  );
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-align: center;
  color: white;
  font-weight: 700;
}

.impact-bar-success {
  background: linear-gradient(
    90deg,
    var(--github-green-muted),
    var(--github-green)
  );
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-align: center;
  color: white;
  font-weight: 700;
}

/* -----------------------------------------------------------------------------
   Decorative Elements
   ----------------------------------------------------------------------------- */

.divider-glow {
  width: 8rem;
  height: 0.25rem;
  background: linear-gradient(
    90deg,
    transparent,
    var(--copilot-purple),
    transparent
  );
  margin: 0 auto;
}

.bg-page {
  background-color: var(--gray-6);
}

/* -----------------------------------------------------------------------------
   Slide Number (existing)
   ----------------------------------------------------------------------------- */
.slidev-page {
  counter-increment: slidev-page;
}

.slidev-page::after {
  content: counter(slidev-page) " / " attr(data-total);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.875rem;
  opacity: 0.5;
  z-index: 10;
  background: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
```

---

## 2. New Section for Slide Generator Agent

Add this section to **both** `.github/agents/slide-generator.agent.md` and `docs/agents/slide-generator-FULL.md`:

````markdown
## CSS Design System (REQUIRED)

**Always use CSS utility classes from `slides/style.css` instead of inline Tailwind colors.**

See `/slides/copilot-brand.md` for the complete 80/10/5/5 branding formula.

### Card Components

| Context          | Class               | When to Use             |
| ---------------- | ------------------- | ----------------------- |
| Standard card    | `card` or `card-sm` | Most content (80%)      |
| Hero/key insight | `card-accent`       | Important callouts (5%) |
| Success/positive | `card-success`      | Completions, wins (5%)  |
| Warning/external | `card-warning`      | Claude, external tools  |
| Error/danger     | `card-danger`       | Problems, anti-patterns |
| TOC navigation   | `nav-card`          | Clickable section links |

**Example:**

```html
<!-- ❌ OLD (inline) -->
<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/30">
  <!-- ✅ NEW (CSS class) -->
  <div class="card"></div>
</div>
```
````

### Text Classes

| Class                | Usage                       |
| -------------------- | --------------------------- |
| `text-gradient-hero` | Title slide headings        |
| `text-hero`          | Key accent text (sparingly) |
| `text-title`         | Card titles (white)         |
| `text-body`          | Primary content             |
| `text-muted`         | Captions, dates             |
| `text-success`       | Positive metrics            |
| `text-warning`       | External/Claude content     |

### Border Classes

| Class              | Usage                      |
| ------------------ | -------------------------- |
| `border-neutral`   | Default borders            |
| `border-accent`    | Hero content borders       |
| `border-l-accent`  | Left accent bar (callouts) |
| `border-l-success` | Success callout bar        |

### Impact Bars

```html
<!-- Success metric -->
<div class="impact-bar-success">2 hours → 10 minutes</div>

<!-- Hero metric -->
<div class="impact-bar">5x productivity improvement</div>
```

### TOC Navigation Cards

```html
<div class="grid grid-cols-2 gap-6">
  <div @click="$nav.go(5)" class="nav-card">
    <div class="text-2xl mb-2">🎯</div>
    <div class="text-title">Section 1</div>
    <div class="text-muted text-sm">Description</div>
  </div>
</div>
```

### Anti-Patterns (AVOID)

| ❌ Don't Use                                  | ✅ Use Instead              |
| --------------------------------------------- | --------------------------- |
| `bg-cyan-900/40 border-cyan-500/30`           | `card`                      |
| `bg-purple-900/40 border-purple-500/30`       | `card-accent`               |
| `text-cyan-400`, `text-purple-400`            | `text-hero` or `text-title` |
| `from-cyan-400 via-blue-400 to-indigo-400`    | `text-gradient-hero`        |
| `bg-gradient-to-r from-green-600 to-blue-600` | `impact-bar-success`        |

````

---

## 3. Update Color Coding Table

Replace the existing "Color coding conventions" table in `docs/agents/slide-generator-FULL.md` with:

```markdown
**Color coding conventions (use CSS classes, not inline):**

| Purpose | CSS Class | Notes |
|---------|-----------|-------|
| Standard content | `card` | Neutral gray background |
| Hero/accent | `card-accent` | Purple border (sparingly) |
| Success/AI | `card-success` | Green tint |
| Warning/External | `card-warning` | Orange tint |
| Danger | `card-danger` | Red tint |
| Impact metrics | `impact-bar` or `impact-bar-success` | Gradient bars |
````

---

## 4. Files to Modify

| File                                      | Change                                                      |
| ----------------------------------------- | ----------------------------------------------------------- |
| `slides/style.css`                        | Replace entire content with CSS design system above         |
| `.github/agents/slide-generator.agent.md` | Add "CSS Design System" section after "Key Principles"      |
| `docs/agents/slide-generator-FULL.md`     | Add "CSS Design System" section, replace color coding table |

## 5. Migration Strategy for Existing Slides

After CSS is in place, rebrand all 27 slide files:

1. Find/replace inline patterns with CSS classes
2. Preserve `updated:` dates (do NOT modify frontmatter)
3. Validate rendering after changes

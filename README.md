# PureDental Schweiz — Brand Guidelines

A lightweight, framework-free brand guideline and design token codebase based on the approved mobile and web mockups.

## Contents

- `index.html` — interactive brand guideline page
- `styles/tokens.css` — canonical CSS custom properties
- `tokens/design-tokens.json` — machine-readable design tokens
- `styles/base.css` — reset, typography and page foundation
- `styles/components.css` — reusable UI component styles
- `styles/guideline.css` — layout of the guideline site
- `scripts/app.js` — token copy buttons and mobile navigation
- `CLAUDE.md` — implementation rules for Claude Design / Claude Code
- `assets/reference/` — original visual reference mockups

## Run locally

No build step is required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Add PureDental brand guideline"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Publish with GitHub Pages

In the GitHub repository, open **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/root`, then save.

## Working rules

- Treat `styles/tokens.css` as the source of truth for implementation.
- Keep `tokens/design-tokens.json` synchronized when tokens change.
- Use token names instead of hard-coded values in components.
- Do not add font files to this repository. The guideline loads Manrope from Google Fonts and includes system fallbacks.
- Replace the text wordmark with the final approved logo asset when available.

## Reference status

The values in this repository were derived from the supplied mockups and form a practical first version of the design system. Final production values should be checked against approved Figma files or exported brand assets when those are available.

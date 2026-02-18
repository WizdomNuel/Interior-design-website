# Luxe Interiors — Awka

A modern, responsive multi-page marketing site for Luxe Interiors 
## Features

- React 19 + TypeScript
- Vite dev server and fast production build
- React Router (multi-page routing)
- Framer Motion animations and page transitions
- Dark theme (default) with toggle and persisted preference
- Mobile-first responsive design including an app-like bottom navigation
- Accessibility tooling scaffolded (Playwright + axe)
- Code-splitting for route-level bundles and dynamic imports for heavy clients

## Repo Layout

- `index.tsx` — app entry and router wrapper
- `App.tsx` — route definitions and top-level layout
- `pages/` — page wrappers (`Home`, `AboutPage`, `ServicesPage`, `PortfolioPage`, `ContactPage`)
- `sections/` — composable sections used by pages (Hero, About, Services, Portfolio, Contact, etc.)
- `components/` — shared components (`Navbar`, `Footer`, `Button`, `Section`, etc.)
- `assets/` — local images and media
- `scripts/axe-playwright.cjs` — accessibility audit runner (Playwright + axe)

## Prerequisites

- Node.js 18+ recommended
- npm (or pnpm/yarn) available

## Local development

1. Install dependencies

```bash
npm install
```

2. (Optional) Create `.env.local` at project root and add any keys you need. Example:

```env
# For dynamic AI generation — set this only if you plan to use the Portfolio AI feature
VITE_GEMINI_API_KEY=your_api_key_here
```

3. Start the dev server

```bash
npm run dev
```

Open http://localhost:3000 (or the port printed by Vite) and preview the site. The app sets dark theme as default and applies a `--vh` CSS variable for better mobile viewport handling.

## Build & Serve

Create a production build:

```bash
npm run build
```

Preview the production build locally (serves `dist/`):

```bash
npm run preview
```

Or serve `dist/` with any static host (Surge, Netlify, GitHub Pages, etc.).

## Accessibility Testing (axe + Playwright)

An audit script is included at `scripts/axe-playwright.cjs`. To run:

1. Ensure dev server or a static preview is running on a URL the script can reach.
2. Install Playwright browsers (first time):

```bash
npx playwright install
```

3. Run the audit:

```bash
node scripts/axe-playwright.cjs
```

Reports will be written to the project root (check the script output). If the script reports `net::ERR_CONNECTION_REFUSED`, ensure the target URL is reachable and the port matches the server.

## Mobile & iOS Notes

- The project sets `viewport-fit=cover` and applies safe-area insets so the layout respects notches and home indicators on iOS devices.
- The hero uses a `--vh` CSS variable to avoid 100vh visual issues on mobile browsers.
- Mobile navigation uses a fixed, full-width bottom navigation bar to provide an app-like experience.

## Common Tasks

- Run tests (none configured):

```bash
npm test
```

- Format files (if you use Prettier/ESLint, not included):

```bash
npm run lint
npm run format
```

## Contributing

If you'd like me to continue: I can run automated accessibility audits, capture console warnings from a headless run, further split large bundles, or add CI (GitHub Actions) to build and lint on push.

If you plan to push this repository to GitHub from this machine, ensure your remote is set and you have authentication (PAT, SSH key or `gh` login). Example commands used earlier:

```bash
git remote set-url origin https://github.com/WizdomNuel/Interior-design-website.git
git push -u origin main
```

## License

This project does not include a license by default. Add one (e.g., MIT) to make it explicit.

---

If you'd like a shorter README or additional sections (deployment, CI, screenshots), tell me which and I'll update it.


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

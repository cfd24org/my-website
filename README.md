# Crisostomo — Personal Portfolio (React + Vite)

A small, fast portfolio site built with React and Vite. This repo contains the single-page React application and a few standalone static pages in `public/`.

Quick start

- Install dependencies: `npm install`
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`

Project structure (key files)

- `index.html` — Vite entry HTML that mounts the React app.
- `src/main.jsx` — application bootstrap / mount point.
- `src/App.jsx` — top-level layout (Nav, Hero, Main sections, Footer).
- `src/components/Featured.jsx` — curated featured projects (used by `App`).
- `src/components/Projects.jsx` — full projects listing (currently unused; kept as a complete listing component).
- `src/components/Resources.jsx` — resources view (standalone page).
- `src/App.css`, `src/index.css` — primary styles.
- `src/data/projects.json` — canonical project metadata consumed by components.
- `public/` — static assets and a few standalone HTML pages (`more-info.html`, `resume.html`).

Notes, cleanup, and recommendations

- Several files were annotated and small fixes applied to make the codebase more self-describing:
  - `src/data/projects.json` was converted to valid JSON (removed an inline comment).
  - Header comments were added to `src/App.jsx`, `src/main.jsx`, `src/components/*` to explain purpose and status.
  - `src/components/Resources.css` was marked DEPRECATED (styles consolidated into `src/App.css`).
  - `src/components/Projects.jsx` is not used by `src/App.jsx` (kept on purpose as a full listing component).

- Unused or redundant items discovered (recommended for removal or archival):
  - `src/assets/react.svg` — not referenced anywhere in the codebase.
  - `public/resources.html` — empty file; either populate or delete.

If you want, I can remove the unused files or move them to an `archive/` folder and create a short CLEANUP report. I can also extract the full projects page into its own route or convert the static `public/` pages into React pages.

If you'd like further reorganization (TypeScript migration, component split-up, or automated lint fixes), tell me which direction and I'll continue.

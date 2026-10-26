---
status: pending
title: Hello World App
---

A minimal single-page app that displays a styled "Hello, World!" message, built from scratch on the standard project stack.

1. Create `package.json` with the project name, ESM module type, and the standard dependencies: `react`, `react-dom`, `@tanstack/react-router`, plus dev dependencies `vite`, `@vitejs/plugin-react`, `@tanstack/router-plugin`, `typescript`, `tailwindcss`, and `@tailwindcss/vite`. Add `dev`, `build`, and `preview` scripts.
   - Expected outcome: the platform can install dependencies and start the dev server.

2. Create `vite.config.ts` at the project root registering the TanStack Router plugin, the React plugin, and the Tailwind CSS v4 Vite plugin, with a path alias so `@/` resolves to `src/`.
   - Expected outcome: Vite serves the app, file-based routing is active, and `@/` imports work.

3. Create `tsconfig.json` with strict TypeScript settings for a React + Vite project, including the `@/*` path alias.
   - Expected outcome: the project typechecks cleanly.

4. Create `index.html` at the project root with a `<div id="root">` mount point and a module script tag pointing to `/src/main.tsx`.
   - Expected outcome: the browser loads the app entry.

5. Create `src/styles/global.css` whose first line is exactly `@import "tailwindcss";`.
   - Expected outcome: Tailwind utility classes are available app-wide.

6. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the TanStack Router instance from the generated route tree, and renders it into the `#root` element.
   - Expected outcome: the React app mounts and the router controls what renders.

7. Create `src/routes/__root.tsx` as the app shell: a root route rendering an `<Outlet />` inside a full-viewport wrapper.
   - Expected outcome: every page renders inside a consistent shell that fills the screen.

8. Create `src/routes/index.tsx` as the home route (`/`) showing a centered "Hello, World!" heading with a short welcoming subline, styled with Tailwind (large bold type, centered layout, pleasant background).
   - Expected outcome: visiting the app shows the Hello World page, nicely centered and styled.

9. Do not create or edit `src/routeTree.gen.ts` — the TanStack Router Vite plugin generates it automatically on first run.
   - Expected outcome: routing works without manual route-tree maintenance.

10. Verify the app typechecks and the home page renders the Hello World message in the browser.
    - Expected outcome: a working app showing "Hello, World!" at `/`.

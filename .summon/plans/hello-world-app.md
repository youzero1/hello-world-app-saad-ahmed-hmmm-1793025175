---
status: pending
title: Hello World App
option: classic-static :: Classic Static Page :: A clean, centered "Hello, World!" page — the timeless original.
option: interactive-greeting :: Interactive Greeting :: Type your name and get a personalized hello.
option: multilingual :: Hello in Many Languages :: "Hello" cycles through greetings from around the world.
recommended: classic-static
---

A minimal single-page app built from scratch on the standard project stack. Pick one of three styles for the Hello World experience.

## Common steps

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

8. Do not create or edit `src/routeTree.gen.ts` — the TanStack Router Vite plugin generates it automatically on first run.
   - Expected outcome: routing works without manual route-tree maintenance.

9. Verify the app typechecks and the home page renders correctly in the browser.
   - Expected outcome: a working app at `/`.

## Option: Classic Static Page

1. Create `src/routes/index.tsx` as the home route (`/`) showing a centered "Hello, World!" heading with a short welcoming subline, styled with Tailwind (large bold type, centered layout, pleasant gradient background).
   - Expected outcome: visiting the app shows a nicely centered, styled "Hello, World!" page.

## Option: Interactive Greeting

1. Create `src/components/GreetingForm.tsx` with a text input for the visitor's name and a button; while empty it shows "Hello, World!", and after submitting it shows "Hello, <name>!" with a friendly animation. Handle empty input gracefully by falling back to "World".
   - Expected outcome: the visitor can type their name and see a personalized greeting.

2. Create `src/routes/index.tsx` as the home route (`/`) rendering the greeting component centered on the page with a welcoming heading, styled with Tailwind.
   - Expected outcome: visiting the app shows the interactive greeting experience.

## Option: Hello in Many Languages

1. Create `src/lib/greetings.ts` with a list of greetings in many languages (e.g. Hello, Hola, Bonjour, こんにちは, مرحبا, Ciao, 안녕하세요, Olá, Hallo, नमस्ते), each with its language name.
   - Expected outcome: a reusable greeting collection exists.

2. Create `src/components/RotatingGreeting.tsx` that cycles through the greetings automatically every couple of seconds with a smooth fade transition, showing the greeting large and the language name beneath it, plus a button to shuffle manually.
   - Expected outcome: greetings rotate on screen automatically and can be shuffled by click.

3. Create `src/routes/index.tsx` as the home route (`/`) rendering the rotating greeting centered on the page, styled with Tailwind.
   - Expected outcome: visiting the app shows "Hello" from around the world, changing on its own.

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-indigo-950 via-slate-950 to-emerald-950 px-6 text-center">
      <h1 className="bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
        Hello, World!
      </h1>
      <p className="max-w-md text-lg text-slate-400">
        Welcome to your brand-new app — every great journey starts with a simple hello.
      </p>
    </div>
  );
}

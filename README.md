# Vite Frontend Template

This template provides a minimal setup for a Vite + ReactJS frontend. It also includes the following in its tech stack and interops well with the associated [go-backend-template](https://github.com/anishsharma21/go-backend-template):

- `Vite` (bundling, dev server)
- `ReactJS` (client side rendering)
- `TailwindCSS` + `Shadcn/ui` (styling solution)
- `Clerk` (authentication)
- `React Router` (routing)
- `TanStack Query` (querying data)

`Vercel` or `Netlify` can be used for deployment.
`Zustand` can be added for global state management.
`Posthog` can be added for analytics and tracking.

## Getting Started

Set the `VITE_CLERK_PUBLISHABLE_KEY` environment variable in a `.env` file at the root of the project. Get this key from your [Clerk dashboard](https://dashboard.clerk.com/).

```bash
git clone github.com/anishsharma21/vite-frontend-template.git
cd vite-frontend-template

pnpm install
pnpm vite
```

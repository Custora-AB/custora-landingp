# Custora Landing Page

Marketing site for [Custora](https://www.custora.se): infrastructure for ownership in private companies.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Resend (waitlist emails via `api/contact.ts`)

## Local development

Requires Node.js and pnpm.

```sh
pnpm install
pnpm dev      # http://localhost:8080
pnpm build    # production build to dist/
```

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for sending waitlist emails |
| `RESEND_CONTACT_RECIPIENT` | Address that receives waitlist sign-ups |

## Social preview

The Open Graph / Twitter preview image is `public/og-image.png` (1200×630), referenced from `index.html` as `https://www.custora.se/og-image.png`.

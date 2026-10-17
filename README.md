# PixPesa — React (Vite)

Marketing site for PixPesa, Tanzania's payment interoperability platform.
The Contact and Waitlist forms are wired to your Django backend, protected
with Google reCAPTCHA v3.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Environment (.env)

A `.env` file is included with your values:

```dotenv
VITE_API_URL=https://api.pixpesa.com
VITE_RECAPTCHA_SITE_KEY=6LdRGpksAAAAAD-woRRUrN1N7Da3Mn4XDvChAICW
```

- `VITE_API_URL` — base URL of your Django API. Form requests POST to
  `${VITE_API_URL}/contact/submit/` and `${VITE_API_URL}/waitlist/`.
- `VITE_RECAPTCHA_SITE_KEY` — your reCAPTCHA **v3 site key** (public/frontend).
  The matching **secret key** lives only on your Django server.

> Vite only exposes variables prefixed with `VITE_`. After editing `.env`,
> restart the dev server.

## Backend integration

- `src/services/api.ts` — your API layer (unchanged). Sends `multipart/form-data`
  to `/contact/submit/` and `/waitlist/` with the exact field names your Django
  views expect, plus honeypot fields (`website`, `confirm_email`),
  `form_submit_time`, and `recaptcha_token`.
- `src/services/recaptcha.js` — loads the reCAPTCHA v3 script and mints an
  action-scoped token (`contact` / `waitlist`) on submit.
- Forms are handled in `src/site.js` (Contact = `#contactSubmit`,
  Waitlist = `#wlSubmit`): validate → get reCAPTCHA token → call the API →
  toast on success/error, with a loading state on the button.

### What your Django side should expose
- `POST /contact/submit/` and `POST /waitlist/` accepting `multipart/form-data`.
- Server-side reCAPTCHA v3 verification of `recaptcha_token` against your
  secret key (check the returned `score` / `action`).
- CORS allowing your site origin (the client sends no auth for these public
  endpoints; a CSRF cookie is forwarded automatically if present).

## Stack
- React 18 + Vite 5, plain CSS (design tokens + dark/light theming).
- All interactivity (SPA routing, theme toggle, Soundbox audio demo, pricing
  billing toggle, waitlist modal, FAQ accordion, counters, live tx feed) is in
  `src/site.js`.

## Notes
- The Soundbox demo uses the Web Audio + SpeechSynthesis APIs — turn sound on
  and click **Simulate payment** on the Products page.
- Brand assets live in `src/assets/` and `public/favicon.png`.

## SEO & Analytics

On-page SEO is configured in `index.html` and `src/site.js`:

- **Meta**: title, description, keywords, author, `robots`, canonical, theme-color.
- **Open Graph + Twitter cards** with a 1200×630 preview (`public/og-image.png`).
- **Structured data (JSON-LD)**: `Organization` (with founders, address and
  `sameAs` social profiles), `WebSite`, and `FAQPage` (eligible for FAQ rich
  results in Google).
- **Crawlability**: `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`.
- **Google Analytics 4** via gtag (`G-D1VNPGTHLJ`). Because this is a single-page
  app, `src/site.js` also fires a `page_view` event and swaps the document title,
  description, OG tags and canonical each time the visitor moves between sections.
- A `<noscript>` block gives crawlers/no-JS visitors a readable summary.

### Set your real domain
Search-and-replace `https://www.pixpesa.com` in `index.html`,
`public/robots.txt` and `public/sitemap.xml` if your production domain differs.
After deploy, submit the sitemap in Google Search Console and use the Rich
Results Test to confirm the FAQ and Organization markup.

### Ranking note (important)
This is a **client-rendered SPA on a single URL** — every section lives at `/`.
Google can render JS, but for the strongest ranking you'll want each page on its
own pre-rendered URL (`/solutions`, `/products`, `/pricing`, …). Two good paths:
1. Add a prerender step (e.g. `vite-plugin-ssr` / `react-snap`) to emit static
   HTML per route, or
2. Move to **Next.js** for server-side rendering and per-route metadata.
Tell me which and I can set it up.

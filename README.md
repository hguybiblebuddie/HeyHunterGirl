# heyhuntergirl.com — static site

Hunter Guy's executive UX portfolio, built as plain HTML/CSS/JS (no build step) from the
`design_handoff_heyhuntergirl` design references. Deploy the contents of this `site/` folder
to any static host.

## Structure

```
site/
├── index.html            ← Home
├── Speaking.html
├── Work.html
├── Podcast.html
├── Resources.html
├── Media Kit.html        ← printable one-sheet ("Print / Save as PDF")
├── 404.html
├── styles.css            ← "The Highlighter System" tokens + components
├── assets/               ← portraits, speaking photos, logos, podcast art
└── projects/             ← 10 case-study pages (blue marker)
    ├── christianbook-revenue.html
    ├── christianbook-platform.html
    ├── odp-nps-leadership.html
    ├── odp-b2b-launch.html
    ├── country-best-in-show.html
    ├── country-payment-onboarding.html
    ├── country-emerging-tech.html
    ├── mcgrawhill-adaptive-learning.html
    ├── mcgrawhill-orchestration.html
    └── devbridge-dfin.html
```

## Run locally

It's fully static — open `index.html` in a browser, or serve the folder:

```
# Any static server works, e.g.:
npx serve .            # Node
python -m http.server  # Python
```

Serving over HTTP (rather than double-clicking) is recommended so the page JavaScript
(accordions, contact-form toggle, speaking lightbox, mobile nav, back-to-top) runs normally.

## Deploy

Drop this folder into Netlify, Vercel, GitHub Pages, Cloudflare Pages, or S3. `404.html`
is picked up automatically by most hosts as the not-found page.

## How this was generated from the handoff

Each `.dc.html` design reference was converted to a standalone page:
- the `<helmet>` block became the real `<head>`;
- the page markup moved out of the `<x-dc>` wrapper into `<body>`;
- the `componentDidMount()` logic now runs inside a `DOMContentLoaded` listener
  (the Claude Design runtime `support.js` is no longer needed);
- internal `*.dc.html` links were rewritten to `*.html` (Home → `index.html`).

Copy is unchanged — all text is final/approved per the handoff.

### Contact form
The inquiry form composes a `mailto:hunter@studyaloud.com` message (subject + prefilled body)
via the visitor's email client — no backend required. To capture submissions server-side
instead, point the form at Formspree, a serverless function, or similar.

### Not included
- **Site Map** — an internal design-index tool (scaled iframe previews of every page), not a
  public page. No page links to it.
- `support.js` / `image-slot.js` — the design-canvas runtime, unnecessary for the static site.

### Optional assets
`assets/projects/` and one company logo (`ae-machines.png`) aren't in the bundle. The design
degrades gracefully — project cards show no image and logos fall back to monograms until files
are dropped in with the exact filenames listed in the `assets/**/README.txt` notes.

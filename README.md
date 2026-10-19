# VamshiCreates — AI & OpenClaw Creator Platform

A Next.js 15 (App Router) + TypeScript + CSS Modules & Tailwind CSS creator platform replicating and extending [raycfu.com](https://www.raycfu.com/) for **VamshiCreates**.

## Included Pages & Features

1. **Homepage (`/`)**
   - Floating frosted-glass pill navigation (`Guides`, `Community`, `Consulting`, `AI Lab`, `⌘K Search`, `Get the playbook ↗`)
   - 2-column split Hero with live status pill (`● Engineer. Creator. Your AI guide.`), social links, and CTAs
   - Featured Guide card + **"What brings you here?"** 4-track routing + **"Coming from a video?"** interactive keyword lookup box
   - **01 / Free Guides Grid** (6-card grid linking to full step-by-step guides)
   - **02 / Community Showcase** (`Master and Monetize AI` + member review card)
   - **03 / Playbook Showcase** (`The $5K/Month Claude Plugin Playbook`)
   - **04 / 1:1 Consultation Showcase** with structured `01 / 02 / 03` agenda card + Google Calendar footer
   - **05 / Custom Builds Showcase** with interactive `<dialog>` **"Schedule a call"** lead capture modal (`/api/waitlist`)
   - **06 / Interactive AI Builder Lab** (GitHub Skill Stack Builder + AI Automation ROI & Time-Saved Calculator)
   - **FAQ Accordion** (`<details>/<summary>`) & Footer
   - **Live Site Customizer** (bottom-right button to upload your own portrait, switch between Vamshi Studio & Ray Fu Reference visuals, or edit headlines/prices live)
   - **Global `⌘K` Command Palette** to search any guide or video keyword instantly

2. **All Guides Library (`/guides`)**
   - Live search bar, video keyword unlock bar, category filter pills, and responsive guide cards

3. **Interactive Guide Reader (`/guides/[slug]`)**
   - Copy-paste prompt & terminal blocks, per-section completion checkboxes, and related guides

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The GitHub `main` branch deploys to the `vamshicreates-web` project in the
`vamshicreates` Vercel Hobby account. Production URL:
[vamshicreates-web.vercel.app](https://vamshicreates-web.vercel.app).

The guide email, creative bootcamp interest, and call request forms save each
submission as a JSON file in the project's private `vamshicreates-web-blob`
store. Vercel connects the store to Production and Preview with OIDC. The
project also sets `NEXT_PUBLIC_SITE_URL` to the production URL for social
metadata. To test form submissions locally, link the project with the Vercel
CLI and pull its development environment variables, or use a development Blob
store. Never commit local environment files.

Run `npm run build` before pushing changes. Each push to `main` creates a new
production deployment through Vercel's GitHub integration.

The Creative Bootcamp page is currently unlinked from public navigation and
marked `noindex, nofollow`. It remains available directly at
`/creative-bootcamp`. To launch it publicly, restore its navigation links and
remove the `robots` override in `src/app/creative-bootcamp/layout.tsx`.

## Builder journey and launch list

The homepage introduces What 2 Build and How 2 Build under Vamshi Creates.
The first opportunity sample is on `/projects/what-to-build#sample-opportunity`;
its matching interactive walkthrough is on `/projects/how-to-build#sample-build`.
The downloadable `/samples/claim-desk.html` starter runs without dependencies.
It uses fictional records and resets on refresh; it is not a production claim system.

Builder Notes forms on the homepage and project pages post to `/api/email-list`
with `type: builder-updates`, an explicit consent flag, and a known source page.
Consenting signups are saved privately in Blob at `builder-notes/<email-sha256>.json`.
Repeat submissions overwrite the same record. Existing guide/bootcamp forms retain
their original storage format. Run `node --test tests/email-list.test.cjs` to check
validation, private storage options, repeat signups, and storage failure responses.

Builder Notes is presented as a launch list for a planned weekly email. No email
provider or sending schedule is connected by this implementation. Before sending,
connect a provider, import only these consented records, configure sender identity
and unsubscribe handling, and prepare the first issue. Do not import guide emails
as newsletter subscribers without their separate consent.

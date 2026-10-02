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
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

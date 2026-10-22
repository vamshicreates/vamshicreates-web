# Vamshi Creates

The official website for Vamshi Krishna and Vamshi Creates. It brings together shipped products, build notes, guides, and practical AI workflows.

**Live site:** https://www.vamshicreates.tech  
**GitHub profile:** https://github.com/vamshicreates

## Explore

- [Projects](https://www.vamshicreates.tech/projects) — products and working demos
- [What 2 Build](https://www.vamshicreates.tech/projects/what-to-build) — product opportunity research
- [How 2 Build](https://www.vamshicreates.tech/projects/how-to-build) — practical build walkthroughs
- [Journey](https://www.vamshicreates.tech/journey) — the builder story
- [Blog](https://www.vamshicreates.tech/blog) and [guides](https://www.vamshicreates.tech/guides) — useful notes and tutorials

## Stack

Next.js 16 App Router with static export, React 19, TypeScript, CSS Modules, and Tailwind CSS. Hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` before deploying.

## Deployment and data

The `main` branch deploys to GitHub Pages through `.github/workflows/deploy-pages.yml`. `npm run build` exports the complete website to `out/`, with directory-based URLs for direct navigation. GitHub Pages uses `www.vamshicreates.tech` as the custom domain and redirects the apex domain to it. Site metadata uses `src/config/site.ts`.

The deploy workflow also runs after the scheduled build-calendar sync, so commits made by `GITHUB_TOKEN` are published even though they do not trigger a normal push workflow.

Newsletter, bootcamp, and call requests use email links to `hello@vamshicreates.tech`. Visitors must send the email from their own app; clicking a link does not save a submission. Guides are freely accessible. There are no server endpoints or Vercel Blob dependencies. Existing private signup records are retained in the former store; they are not copied into this public repository.

The Creative Bootcamp page remains outside public navigation and marked `noindex, nofollow`. Google Analytics respects the existing consent controls. `vercel.json` disables Git-triggered Vercel deployments.

## Contributing

Issues and focused pull requests are welcome. For product context, start with the [live site](https://www.vamshicreates.tech) and [project portfolio](https://www.vamshicreates.tech/projects).

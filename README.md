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

Next.js 16 App Router, React 19, TypeScript, CSS Modules, Tailwind CSS, and Vercel Blob.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` before deploying.

## Deployment and data

The `main` branch deploys to the `vamshicreates-web` Vercel project. `NEXT_PUBLIC_SITE_URL` supplies the production URL for social metadata. Form submissions use the project’s private Vercel Blob store. To test forms locally, link the Vercel project and pull its development environment variables or use a development Blob store. Keep local environment files out of Git.

Builder Notes signups require explicit consent and are stored privately. The mailing list is a launch list; an email sending provider and schedule are not connected yet. The Creative Bootcamp page is available directly but remains outside public navigation and marked `noindex, nofollow`.

## Contributing

Issues and focused pull requests are welcome. For product context, start with the [live site](https://www.vamshicreates.tech) and [project portfolio](https://www.vamshicreates.tech/projects).

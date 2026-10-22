# Analytics and Google Search setup

Primary URL: https://www.vamshicreates.tech
GA4 property: VamshiCreates.tech
Web stream: VamshiCreates production website
Measurement ID: G-LDPHST6XVZ
Search Console property: sc-domain:vamshicreates.tech

## Tracking

- The root layout includes one Google tag, loaded after hydration and only after a visitor allows analytics.
- Only the two production custom-domain hostnames can load Analytics. Local development and GitHub preview URLs do not send production traffic.
- GA4 enhanced measurement handles initial page views, browser-history route changes, scrolls, outbound links and downloads. Do not add a second automatic page-view implementation.
- `consultation_click` records clicks to the Topmate consultation page. It indicates interest, not a completed booking.
- Advertising consent stays denied; Google Signals and ad personalization are disabled in the tag.
- No names, emails or project briefs are supplied as custom analytics event properties.
- Cookie choices are stored under `vamshicreates-analytics-consent`. Visitors can change their choice through the Privacy Policy's Manage analytics cookies button.

## Search

- `src/config/site.ts` is the source of truth for the canonical origin and public measurement ID.
- Article canonicals, social metadata, structured data and the sitemap use the custom domain.
- `/robots.txt` advertises `/sitemap.xml` and excludes API routes from crawling.
- GitHub Pages uses the preferred www domain; its custom-domain configuration redirects the apex domain to www. Nested routes are exported with trailing slashes.
- The Journey route stays available but is omitted from the sitemap while hidden from navigation.
- Keep Google's verification TXT record at Spaceship to retain Search Console ownership.

## Release verification

1. Run `npm run build` and `git diff --check`.
2. Push the changes to main and wait for the Deploy GitHub Pages workflow.
3. Confirm the workflow succeeds, HTTPS is enforced, and both custom-domain hostnames resolve to GitHub Pages.
4. On the production website, allow analytics in a test browser and check GA4 Realtime. Test a client-side navigation and a Topmate CTA click.
5. Confirm Search Console's sitemap status after submitting https://www.vamshicreates.tech/sitemap.xml.

Analytics and Search Console reports need time to populate. A valid tag, verified ownership or a submitted sitemap does not guarantee indexing or a particular Google ranking.

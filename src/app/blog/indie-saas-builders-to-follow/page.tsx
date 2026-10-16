import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import BlogShell from "../BlogShell";
import styles from "./post.module.css";

const SITE_URL = "https://vamshicreates-web.vercel.app";
const PATH = "/blog/indie-saas-builders-to-follow";
const TITLE = "10 Indie Builders to Follow on X for SaaS Ideas";
const DESCRIPTION = "A practical follow list for learning SaaS, watching products get built in public, and finding ideas worth testing for your own audience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE + " | VamshiCreates",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: "VamshiCreates",
    type: "article",
    publishedTime: "2026-10-16",
    authors: ["Vamshi Krishna"],
    images: [{ url: "/blog/indie-saas-builders-to-follow.svg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/blog/indie-saas-builders-to-follow.svg"] },
};

const builders = [
  {
    name: "Marc Lou",
    handle: "@marclou",
    x: "https://x.com/marclou",
    focus: "Fast launches and a portfolio of small bets",
    note: "Marc is one of the clearest people to watch when you want to see an idea move from a tiny experiment to a paid product. His public portfolio includes TrustMRR, DataFast, ShipFast, and plenty of projects that did not become the main business.",
    study: "Study how he names a product, shows its value quickly, launches it, and decides whether to keep going.",
    product: "Marc's project portfolio",
    productUrl: "https://marclou.com/",
  },
  {
    name: "Pieter Levels",
    handle: "@levelsio",
    x: "https://x.com/levelsio",
    focus: "Repeated shipping and finding demand",
    note: "Pieter's archive is useful because it shows the breadth of the work: Photo AI, Remote OK, Nomads, experiments, and projects that failed to take off. You can see how one maker tests many directions over time.",
    study: "Look at which projects became lasting businesses, and ask what audience or distribution each one already had.",
    product: "Pieter's full project archive",
    productUrl: "https://levels.io/projects",
  },
  {
    name: "Tony Dinh",
    handle: "@tdinh_me",
    x: "https://x.com/tdinh_me",
    focus: "Useful tools with unusually good product detail",
    note: "Tony builds software he wants to use, including TypingMind and DevUtils. His work is a strong reminder that an existing category can still make room for a product with a clearer experience and a specific point of view.",
    study: "Pay attention to the small workflow frustrations each product removes and how the product page explains them.",
    product: "Tony's products",
    productUrl: "https://tonysoftware.com/",
  },
  {
    name: "Jon Yongfook",
    handle: "@yongfook",
    x: "https://x.com/yongfook",
    focus: "Operating and growing a durable SaaS",
    note: "Jon founded Bannerbear, an image and video automation API. His writing goes beyond launch day into conversion, marketing, positioning, and how a SaaS business changes as the market changes.",
    study: "Read his longer posts when you want to understand the tradeoffs behind pricing, acquisition, and product direction.",
    product: "Bannerbear founder writing",
    productUrl: "https://www.bannerbear.com/blog/how-to-pivot-your-saas-company-in-the-age-of-ai/",
  },
  {
    name: "Danny Postma",
    handle: "@dannypostma",
    x: "https://x.com/dannypostma",
    focus: "AI products and sharp positioning",
    note: "Danny founded HeadshotPro and has built other AI products. He is worth watching for the way a broad technical capability gets packaged into one clear outcome for a buyer.",
    study: "Notice the niche, the promise on the landing page, and the trust signals that help a customer try an AI product.",
    product: "HeadshotPro founder profile",
    productUrl: "https://www.headshotpro.com/author/danny-postma",
  },
  {
    name: "Tibo Louis-Lucas",
    handle: "@tibo_maker",
    x: "https://x.com/tibo_maker",
    focus: "Creator tools and distribution-led products",
    note: "Tibo co-founded Revid and also works on products around SEO and X growth. Follow him to watch how a small team turns a recurring creator problem into a product, then uses its own product for distribution.",
    study: "Look for the loop between what the product makes, where that output is published, and how new users discover it.",
    product: "About Revid and its founders",
    productUrl: "https://www.revid.ai/about",
  },
  {
    name: "Jack Friks",
    handle: "@jackfriks",
    x: "https://x.com/jackfriks",
    focus: "Consumer apps, organic growth, and honest experiments",
    note: "Jack's public project list includes Post Bridge, Lovelee, and several smaller apps. It also records failures. That makes it useful for learning how a builder moves from a personal workflow problem to a product people pay for.",
    study: "Watch how he demonstrates products in the channels where potential customers already spend time.",
    product: "Jack's project list",
    productUrl: "https://www.jackfriks.com/",
  },
  {
    name: "Nico Jeannen",
    handle: "@nico_jeannen",
    x: "https://x.com/nico_jeannen",
    focus: "Paid acquisition for small software businesses",
    note: "Nico is building AdKit after years of running ads. He adds a perspective that many build-in-public feeds miss: distribution through measurable paid campaigns, competitor research, and the work behind acquiring customers.",
    study: "Follow the practical ad research and ask whether a product has enough margin and retention to support a paid channel.",
    product: "Nico's AdKit articles",
    productUrl: "https://adkit.so/author/nico",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  image: SITE_URL + "/blog/indie-saas-builders-to-follow.svg",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Person", name: "Vamshi Krishna", url: SITE_URL },
  publisher: { "@type": "Organization", name: "VamshiCreates", url: SITE_URL },
  mainEntityOfPage: SITE_URL + PATH,
};

export default function IndieSaasBuildersPost() {
  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className={styles.page}>
        <Link href="/blog" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> All blog posts</Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>SAAS / BUILD IN PUBLIC / READING LIST</p>
          <h1>{TITLE}</h1>
          <p className={styles.dek}>{DESCRIPTION}</p>
          <div className={styles.byline}>
            <img src="/journey/main-dp-icon.jpg" width={38} height={38} alt="" />
            <span><strong>Vamshi Krishna</strong><small>October 16, 2026</small></span>
            <span className={styles.readTime}><Clock3 size={15} aria-hidden="true" /> 8 min read</span>
          </div>
        </header>

        <Image className={styles.heroImage} src="/blog/indie-saas-builders-to-follow.svg" alt="Build in public: ten indie builders to follow" width={1200} height={630} priority sizes="(max-width: 1100px) 100vw, 1060px" />

        <div className={styles.body}>
          <div className={styles.intro}>
            <p>If you want to build a SaaS, your X feed can be more than a stream of opinions. Follow people who show what they ship, how they find customers, and what happens after a launch. Their work can become a living collection of product case studies.</p>
            <p>These are my picks for that purpose. The first eight are builders with products you can inspect. The last two are especially useful for thinking about the business around the product. This is a curated list, not a ranking by followers or revenue. I checked the current handles and public projects in October 2026.</p>
          </div>

          <section aria-labelledby="builders-heading">
            <div className={styles.sectionLead}>
              <span>01 / THE BUILDERS</span>
              <h2 id="builders-heading">Watch the work, not just the wins.</h2>
              <p>Open the product as well as the profile. The gap between a post and the actual customer experience is often where the lesson is.</p>
            </div>
            <div className={styles.builderGrid}>
              {builders.map((builder, index) => (
                <section className={styles.builderCard} key={builder.handle} aria-labelledby={"builder-" + index}>
                  <div className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <p className={styles.cardFocus}>{builder.focus}</p>
                    <h3 id={"builder-" + index}>{builder.name}</h3>
                    <a className={styles.profileLink} href={builder.x} target="_blank" rel="noopener noreferrer">{builder.handle} on X <ArrowUpRight size={15} aria-hidden="true" /></a>
                    <p>{builder.note}</p>
                    <p className={styles.study}><strong>What to study:</strong> {builder.study}</p>
                    <a className={styles.productLink} href={builder.productUrl} target="_blank" rel="noopener noreferrer">{builder.product} <ArrowUpRight size={15} aria-hidden="true" /></a>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className={styles.moreVoices} aria-labelledby="voices-heading">
            <div className={styles.sectionLead}>
              <span>02 / THE THINKERS</span>
              <h2 id="voices-heading">Two more accounts for better judgment.</h2>
            </div>
            <div className={styles.voiceGrid}>
              <div>
                <h3><a href="https://x.com/arvidkahl" target="_blank" rel="noopener noreferrer">Arvid Kahl <ArrowUpRight size={17} aria-hidden="true" /></a></h3>
                <p>Follow for thoughtful writing on bootstrapping, customer research, and building an audience that cares about a real problem. His <a href="https://thebootstrappedfounder.com/" target="_blank" rel="noopener noreferrer">Bootstrapped Founder archive</a> is useful when you want more depth than a post can hold.</p>
              </div>
              <div>
                <h3><a href="https://x.com/dvassallo" target="_blank" rel="noopener noreferrer">Daniel Vassallo <ArrowUpRight size={17} aria-hidden="true" /></a></h3>
                <p>Follow for the small-bets approach: test modest ideas, learn from the outcome, and avoid making one launch carry your whole future. His <a href="https://smallbets.com/" target="_blank" rel="noopener noreferrer">Small Bets</a> library expands on that mindset.</p>
              </div>
            </div>
          </section>

          <section className={styles.playbook} aria-labelledby="playbook-heading">
            <div className={styles.sectionLead}>
              <span>03 / PUT THE FEED TO WORK</span>
              <h2 id="playbook-heading">Turn inspiration into a testable idea.</h2>
              <p>Watching founders is useful only when it sharpens your own decisions. Keep a short note for each product that catches your eye:</p>
            </div>
            <ol>
              <li><strong>Who is paying?</strong> Name the customer and the job they need done.</li>
              <li><strong>What is the smallest promise?</strong> Write the outcome in one sentence, without a feature list.</li>
              <li><strong>How do people find it?</strong> Look for search, social content, partnerships, ads, or an existing audience.</li>
              <li><strong>What could you make specific?</strong> Choose a narrower customer, workflow, language, or industry where the current tools feel generic.</li>
            </ol>
            <p>For example, a broad social scheduling tool might inspire a workflow built specifically for regional-language video creators. The question to test is whether those creators have a painful gap and will pay to solve it. Talk to them before building.</p>
            <p>If you only have time for five accounts, start with <a href="https://x.com/marclou">Marc</a>, <a href="https://x.com/tdinh_me">Tony</a>, <a href="https://x.com/yongfook">Jon</a>, <a href="https://x.com/jackfriks">Jack</a>, and <a href="https://x.com/nico_jeannen">Nico</a>. Together, they cover shipping, product quality, SaaS operations, organic growth, and paid acquisition.</p>
          </section>

          <div className={styles.endNote}>
            <span>VAMSHI CREATES / THE NOTEBOOK</span>
            <p>Save the accounts that teach you something. Then get back to making things.</p>
            <Link href="/blog">Explore more articles <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </article>
    </BlogShell>
  );
}

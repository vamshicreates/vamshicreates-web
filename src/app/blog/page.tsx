import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { BLOG_ARTICLES, BLOG_SERIES, getReadingMinutes, getSeriesArticles } from "@/data/blog";
import BlogPillarsFilter, { type ArticlePreview } from "./BlogPillarsFilter";
import BlogShell from "./BlogShell";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blog & Guides | VamshiCreates",
  description: "Practical guides and articles by Vamshi Krishna on open-source AI tools, coding agents, automation workflows, and modern web engineering.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "VamshiCreates Blog & Guides",
    description: "Explore practical guides on open-source AI replacements, coding agent skills, n8n automations, and modern web stacks.",
    url: "/blog",
    type: "website",
    images: ["/blog/open-source-ai-replacements.svg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogPage() {
  const articlePreviews: ArticlePreview[] = BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    image: article.image,
    category: article.category,
    series: article.series,
    readingMinutes: getReadingMinutes(article),
  }));

  return (
    <BlogShell>
      <section className={styles.indexHero} aria-labelledby="blog-title">
        <Link href="/" className={styles.backLink}><ArrowLeft size={15} aria-hidden="true" /> Back to home</Link>
        <p className={styles.eyebrow}>THE NOTEBOOK / LEARN ONE IDEA AT A TIME</p>
        <h1 id="blog-title">Learn the basics.<br /><span>Build what matters.</span></h1>
        <p className={styles.heroDescription}>
          Practical notes on open-source AI tools, coding agents, automation workflows, and the skills behind shipped products.
        </p>
        <div className={styles.seriesNote}><BookOpen size={17} aria-hidden="true" /> {BLOG_SERIES.length} Content Pillars · {BLOG_ARTICLES.length} Guides</div>
      </section>

      {/* INTERACTIVE CONTENT PILLARS FILTER */}
      <BlogPillarsFilter articles={articlePreviews} />

      <section className={styles.featuredSection} aria-labelledby="skills-guide-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>NEW / PRACTICAL GUIDE</p>
          <h2 id="skills-guide-title">Skills for coding agents</h2>
          <p>What they are, how to use them well, and the workflows worth building.</p>
        </div>
        <div className={styles.standaloneList}>
          <Link href="/blog/skills-everywhere" className={styles.standaloneFeature}>
            <Image src="/blog/skills-everywhere.png" alt="Skills Everywhere: one shared library for coding agents" width={1600} height={900} sizes="(max-width: 700px) 100vw, 50vw" priority />
            <span>
              <small>NEW / OPEN SOURCE</small>
              <strong>Skills Everywhere: share your skills across coding agents</strong>
              <em>Read the launch story <ArrowUpRight size={17} aria-hidden="true" /></em>
            </span>
          </Link>
          <Link href="/blog/coding-agent-skills" className={styles.standaloneFeature}>
            <Image src="/blog/coding-agent-skills.svg" alt="Coding Agent Skills article cover" width={1600} height={900} sizes="(max-width: 700px) 100vw, 50vw" unoptimized priority />
            <span>
              <small>CODING AGENTS / SKILL.MD</small>
              <strong>Coding agent skills: what they are and which ones to build</strong>
              <em>Read the guide <ArrowUpRight size={17} aria-hidden="true" /></em>
            </span>
          </Link>
        </div>
      </section>

      <section className={styles.featuredSection} aria-labelledby="latest-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>STANDALONE ARTICLE</p>
          <h2 id="latest-title">Who to learn from now</h2>
          <p>Curated accounts for people building AI products and useful software.</p>
        </div>
        <div className={styles.standaloneList}>
          <Link href="/blog/indian-ai-builders-instagram" className={styles.standaloneFeature}>
            <Image src="/blog/indian-ai-builders-instagram.png" alt="10 Indian AI Builders to Follow on Instagram" width={1730} height={909} sizes="(max-width: 700px) 100vw, 50vw" priority />
            <span>
              <small>AI / INDIA / INSTAGRAM</small>
              <strong>10 Indian AI builders to follow on Instagram</strong>
              <em>Read the article <ArrowUpRight size={17} aria-hidden="true" /></em>
            </span>
          </Link>
        <Link href="/blog/indie-saas-builders-to-follow" className={styles.standaloneFeature}>
          <Image src="/blog/indie-saas-builders-cover.png" alt="10 Indie Builders to Follow on X for SaaS Ideas" width={1730} height={909} sizes="(max-width: 700px) 100vw, 50vw" priority />
          <span>
            <small>SAAS / BUILD IN PUBLIC</small>
            <strong>10 indie builders to follow on X for SaaS ideas</strong>
            <em>Read the article <ArrowUpRight size={17} aria-hidden="true" /></em>
          </span>
        </Link>
        </div>
      </section>

      <section className={styles.moreSection} aria-labelledby="subjects-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>CHOOSE A SUBJECT</p>
          <h2 id="subjects-title">Explore the series</h2>
          <p>Each subject has its own page and a connected path through its articles.</p>
        </div>
        <div className={styles.seriesGrid}>
          {BLOG_SERIES.map((series, index) => {
            const articles = getSeriesArticles(series.slug);
            return <article key={series.slug} className={styles.seriesCard}>
              <Link href={`/blog/${series.slug}`} className={styles.seriesImageLink} aria-label={`Explore ${series.title} articles`}>
                <Image src={series.image} alt={`${series.title} series thumbnail`} width={1672} height={941} sizes="(max-width: 700px) 100vw, 50vw" priority={index === 0} />
              </Link>
              <div className={styles.seriesCardBody}>
                <p className={styles.eyebrow}>{String(index + 1).padStart(2, "0")} / {articles.length} ARTICLES</p>
                <h3><Link href={`/blog/${series.slug}`}>{series.title}</Link></h3>
                <p>{series.description}</p>
                <Link href={`/blog/${series.slug}`} className={styles.seriesButton}>Explore {series.title} <ArrowUpRight size={17} aria-hidden="true" /></Link>
              </div>
            </article>;
          })}
        </div>
      </section>
    </BlogShell>
  );
}

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
  description: "Practical guides and articles by Vamshi Krishna on coding agents, automation workflows, open-source AI tools, and modern web engineering.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "VamshiCreates Blog & Guides",
    description: "Explore practical guides on coding agent skills, open-source AI repos, n8n automations, and modern web stacks.",
    url: "/blog",
    type: "website",
    images: ["/blog/essential-claude-code-plugins-mcp.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

const STANDALONE_AGENT_ARTICLES: ArticlePreview[] = [
  {
    slug: "skills-everywhere",
    title: "Skills Everywhere: share your skills across coding agents",
    description: "One shared local skill library across Codex, Claude Code, Antigravity, Cursor, and OpenCode. Install once, preserve originals, and keep new skills synced.",
    image: "/blog/skills-everywhere.jpg",
    category: "Coding Agents",
    series: "agents",
    readingMinutes: 6,
    href: "/blog/skills-everywhere",
  },
  {
    slug: "coding-agent-skills",
    title: "Coding agent skills: what they are and which ones to build",
    description: "A practical guide to skills for Codex, Claude Code, Cursor, Gemini CLI, and other coding agents. Learn the basics, build better skills, and choose useful workflows.",
    image: "/blog/coding-agent-skills.jpg",
    category: "Coding Agents",
    series: "agents",
    readingMinutes: 8,
    href: "/blog/coding-agent-skills",
  },
];

export default function BlogPage() {
  const articlePreviews: ArticlePreview[] = [
    ...STANDALONE_AGENT_ARTICLES,
    ...BLOG_ARTICLES.map((article) => ({
      slug: article.slug,
      title: article.title,
      description: article.description,
      image: article.image,
      category: article.category,
      series: article.series,
      readingMinutes: getReadingMinutes(article),
      href: `/blog/${article.slug}`,
    })),
  ];

  return (
    <BlogShell>
      <section className={styles.indexHero} aria-labelledby="blog-title">
        <Link href="/" className={styles.backLink}><ArrowLeft size={15} aria-hidden="true" /> Back to home</Link>
        <p className={styles.eyebrow}>THE NOTEBOOK / LEARN ONE IDEA AT A TIME</p>
        <h1 id="blog-title">Learn the basics.<br /><span>Build what matters.</span></h1>
        <p className={styles.heroDescription}>
          Practical notes on coding agents, open-source AI tools, automation workflows, and the skills behind shipped products.
        </p>
        <div className={styles.seriesNote}><BookOpen size={17} aria-hidden="true" /> {BLOG_SERIES.length} Content Pillars · {articlePreviews.length} Guides</div>
      </section>

      {/* INTERACTIVE CONTENT PILLARS FILTER */}
      <BlogPillarsFilter articles={articlePreviews} />

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

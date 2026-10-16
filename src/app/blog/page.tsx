import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { BLOG_SERIES, getSeriesArticles } from "@/data/blog";
import BlogShell from "./BlogShell";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vamshicreates-web.vercel.app"),
  title: "Blog | VamshiCreates",
  description: "Practical articles by Vamshi Krishna on building useful products, Python, language models, and AI agents.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "VamshiCreates Blog",
    description: "Explore practical articles on indie products, Python, and large language models.",
    url: "/blog",
    type: "website",
    images: ["/blog/what-is-an-llm.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogPage() {
  return (
    <BlogShell>
      <section className={styles.indexHero} aria-labelledby="blog-title">
        <Link href="/" className={styles.backLink}><ArrowLeft size={15} aria-hidden="true" /> Back to home</Link>
        <p className={styles.eyebrow}>THE NOTEBOOK / LEARN ONE IDEA AT A TIME</p>
        <h1 id="blog-title">Learn the basics.<br /><span>Build what matters.</span></h1>
        <p className={styles.heroDescription}>
          Straightforward notes on the skills, people, and ideas behind useful products.
          Explore a series or read a standalone article.
        </p>
        <div className={styles.seriesNote}><BookOpen size={17} aria-hidden="true" /> {BLOG_SERIES.length} subjects · More coming</div>
      </section>

      <section className={styles.featuredSection} aria-labelledby="latest-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>STANDALONE ARTICLE</p>
          <h2 id="latest-title">Who to learn from now</h2>
          <p>A curated reading list for people building SaaS and sharing their work in public.</p>
        </div>
        <Link href="/blog/indie-saas-builders-to-follow" className={styles.standaloneFeature}>
          <Image src="/blog/indie-saas-builders-to-follow.svg" alt="Build in public: 10 indie builders to follow" width={1200} height={630} sizes="(max-width: 700px) 100vw, 50vw" priority />
          <span>
            <small>SAAS / BUILD IN PUBLIC</small>
            <strong>10 indie builders to follow on X for SaaS ideas</strong>
            <em>Read the article <ArrowUpRight size={17} aria-hidden="true" /></em>
          </span>
        </Link>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { BLOG_SERIES, getSeriesArticles } from "@/data/blog";
import BlogShell from "./BlogShell";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vamshicreates-web.vercel.app"),
  title: "Blog | Python and LLM Guides | VamshiCreates",
  description: "Practical, connected articles by Vamshi Krishna on Python, large language models, AI agents, and building useful AI products.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Python and LLM Blog | VamshiCreates",
    description: "Explore practical, connected series on Python and large language models.",
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
          Straightforward notes on the skills behind useful AI products.
          Pick a subject and follow the articles in order, or start wherever you like.
        </p>
        <div className={styles.seriesNote}><BookOpen size={17} aria-hidden="true" /> {BLOG_SERIES.length} subjects · More coming</div>
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

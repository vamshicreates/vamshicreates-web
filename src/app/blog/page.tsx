import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { BLOG_ARTICLES, getReadingMinutes, type BlogArticle } from "@/data/blog";
import BlogShell from "./BlogShell";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vamshicreates-web.vercel.app"),
  title: "Blog | Python, AI & Building Useful Things | VamshiCreates",
  description:
    "Seven practical articles by Vamshi Krishna on Python fundamentals, learning with AI coding tools, and building useful AI projects.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Python & AI Blog | VamshiCreates",
    description: "Practical notes on Python, AI coding, and building useful things.",
    url: "/blog",
    type: "website",
    images: ["/blog/python-ai-engine.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

function ArticleCard({ article, index }: { article: BlogArticle; index: number }) {
  return (
    <article className={styles.articleCard}>
      <Link href={`/blog/${article.slug}`} className={styles.cardImageLink} aria-label={`Read ${article.title}`}>
        <Image
          src={article.image}
          alt={`Editorial thumbnail: ${article.title}`}
          width={1672}
          height={941}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 520px"
          className={styles.cardImage}
          priority={index === 0}
        />
      </Link>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span>{String(index + 1).padStart(2, "0")} / {article.category}</span>
          <span><Clock3 size={13} aria-hidden="true" /> {getReadingMinutes(article)} min read</span>
        </div>
        <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.description}</p>
        <Link href={`/blog/${article.slug}`} className={styles.readLink}>
          Read article <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [featured, ...more] = BLOG_ARTICLES;
  return (
    <BlogShell>
      <section className={styles.indexHero} aria-labelledby="blog-title">
        <Link href="/" className={styles.backLink}><ArrowLeft size={15} aria-hidden="true" /> Back to home</Link>
        <p className={styles.eyebrow}>THE NOTEBOOK / PYTHON + AI</p>
        <h1 id="blog-title">Learn the basics.<br /><span>Build what matters.</span></h1>
        <p className={styles.heroDescription}>
          Straightforward notes on Python, AI, and the skills behind useful creative tools.
          Start anywhere, then follow the connected series.
        </p>
        <div className={styles.seriesNote}><BookOpen size={17} aria-hidden="true" /> 7 articles · One connected series</div>
      </section>

      <section className={styles.featuredSection} aria-labelledby="start-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>01 / START HERE</p>
          <h2 id="start-title">The big picture</h2>
        </div>
        <ArticleCard article={featured} index={0} />
      </section>

      <section className={styles.moreSection} aria-labelledby="more-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>02 / GO DEEPER</p>
          <h2 id="more-title">Explore the series</h2>
          <p>Each article stands on its own and points you to a natural next step.</p>
        </div>
        <div className={styles.articleGrid}>
          {more.map((article, index) => <ArticleCard key={article.slug} article={article} index={index + 1} />)}
        </div>
      </section>
    </BlogShell>
  );
}

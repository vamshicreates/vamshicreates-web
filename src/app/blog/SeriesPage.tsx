import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { BLOG_SERIES, getSeriesArticles, type BlogSeriesSlug } from "@/data/blog";
import ArticleCard from "./ArticleCard";
import BlogShell from "./BlogShell";
import styles from "./blog.module.css";

export default function SeriesPage({ seriesSlug }: { seriesSlug: BlogSeriesSlug }) {
  const series = BLOG_SERIES.find((item) => item.slug === seriesSlug)!;
  const [featured, ...more] = getSeriesArticles(seriesSlug);
  return (
    <BlogShell>
      <section className={styles.indexHero} aria-labelledby="series-title">
        <Link href="/blog" className={styles.backLink}><ArrowLeft size={15} aria-hidden="true" /> All subjects</Link>
        <p className={styles.eyebrow}>THE NOTEBOOK / {series.title.toUpperCase()}</p>
        <h1 id="series-title">{series.title}<br /><span>made practical.</span></h1>
        <p className={styles.heroDescription}>{series.description} Start with the first article, then follow the series.</p>
        <div className={styles.seriesNote}><BookOpen size={17} aria-hidden="true" /> {more.length + 1} articles · One connected series</div>
      </section>

      <section className={styles.featuredSection} aria-labelledby="start-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>01 / START HERE</p>
          <h2 id="start-title">The big picture</h2>
        </div>
        <ArticleCard article={featured} index={0} />
      </section>

      {more.length > 0 && <section className={styles.moreSection} aria-labelledby="more-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>02 / GO DEEPER</p>
          <h2 id="more-title">Explore the series</h2>
          <p>Each article stands on its own and points to a natural next step.</p>
        </div>
        <div className={styles.articleGrid}>
          {more.map((article, index) => <ArticleCard key={article.slug} article={article} index={index + 1} />)}
        </div>
      </section>}
    </BlogShell>
  );
}

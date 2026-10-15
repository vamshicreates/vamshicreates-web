import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { BLOG_ARTICLES, getBlogArticle, getReadingMinutes, getSeriesArticles, type BlogArticle, type BlogBlock } from "@/data/blog";
import BlogShell from "../BlogShell";
import styles from "../blog.module.css";

const SITE_URL = "https://vamshicreates-web.vercel.app";
const PUBLISHED_DATE = "2026-10-15";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_ARTICLES.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return { title: "Article not found | VamshiCreates" };
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: `${article.title} | VamshiCreates Blog`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "VamshiCreates",
      type: "article",
      publishedTime: PUBLISHED_DATE,
      authors: ["Vamshi Krishna"],
      images: [{ url: article.image, width: 1672, height: 941, alt: article.title }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.image] },
  };
}

function headingId(text: string, index: number) {
  return `section-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function isSubheading(article: BlogArticle, text: string) {
  return article.slug === "python-ai-what-you-can-build" && /^[1-9]\. /.test(text) && !text.includes("What can Python actually do?");
}

function ArticleBlock({ article, block, index }: { article: BlogArticle; block: BlogBlock; index: number }) {
  if (block.type === "heading") {
    const id = headingId(block.text, index);
    return isSubheading(article, block.text)
      ? <h3 id={id} className={styles.articleSubheading}>{block.text}</h3>
      : <h2 id={id} className={styles.articleHeading}>{block.text}</h2>;
  }
  if (block.type === "subheading") return <h3 className={styles.articleSubheading}>{block.text}</h3>;
  if (block.type === "code") return <pre className={styles.codeBlock}><code>{block.text}</code></pre>;
  if (block.type === "table") return (
    <div className={styles.tableScroll}>
      <table className={styles.articleTable}>
        <thead><tr>{block.rows[0].map((cell, cellIndex) => <th key={cellIndex} scope="col">{cell}</th>)}</tr></thead>
        <tbody>{block.rows.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
  if (block.type === "list") return (
    <ul className={styles.articleList}>
      {block.items.map((item, itemIndex) => <li key={`${index}-${itemIndex}`}>
        {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.text} <ArrowUpRight size={14} aria-hidden="true" /></a> : item.text}
      </li>)}
    </ul>
  );
  return <p className={styles.articleParagraph}>{block.text}</p>;
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const seriesArticles = getSeriesArticles(article.series);
  const currentIndex = seriesArticles.findIndex((item) => item.slug === article.slug);
  const next = seriesArticles[(currentIndex + 1) % seriesArticles.length];
  const related = seriesArticles.filter((item) => item.slug !== article.slug);
  const headings = article.blocks.map((block, index) => ({ block, index })).filter(({ block }) => block.type === "heading") as { block: Extract<BlogBlock, { type: "heading" }>; index: number }[];
  const halfway = Math.ceil(article.blocks.length / 2);
  const inlineIndex = article.blocks.length > 18
    ? article.blocks.findIndex((block, index) => index >= halfway && block.type !== "heading" && article.blocks[index + 1]?.type === "heading")
    : -1;
  const url = `${SITE_URL}/blog/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    author: { "@type": "Person", name: "Vamshi Krishna", url: SITE_URL },
    publisher: { "@type": "Organization", name: "VamshiCreates", url: SITE_URL },
    mainEntityOfPage: url,
    articleSection: article.category,
  };

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className={styles.articlePage}>
        <div className={styles.articleTopline}>
          <Link href={`/blog/${article.series}`} className={styles.backLink}><ArrowLeft size={15} aria-hidden="true" /> All {article.series.toUpperCase()} articles</Link>
          <span>{String(currentIndex + 1).padStart(2, "0")} / {String(seriesArticles.length).padStart(2, "0")}</span>
        </div>

        <header className={styles.articleHeader}>
          <p className={styles.eyebrow}>{article.category.toUpperCase()} / {article.series.toUpperCase()}</p>
          <h1>{article.title}</h1>
          <p className={styles.articleDek}>{article.description}</p>
          <div className={styles.articleByline}>
            <img src="/journey/main-dp-icon.jpg" width={38} height={38} alt="" />
            <span><strong>Vamshi Krishna</strong><small>October 15, 2026</small></span>
            <span className={styles.readTime}><Clock3 size={15} aria-hidden="true" /> {getReadingMinutes(article)} min read</span>
          </div>
        </header>

        <div className={styles.articleHeroImage}>
          <Image src={article.image} alt={`Editorial thumbnail: ${article.title}`} width={1672} height={941} priority sizes="(max-width: 1100px) 100vw, 1060px" />
        </div>

        <div className={styles.readingLayout}>
          <aside className={styles.tableOfContents} aria-label="On this page">
            <p>ON THIS PAGE</p>
            <ol>{headings.map(({ block, index }) => <li key={index}><a href={`#${headingId(block.text, index)}`}>{block.text}</a></li>)}</ol>
            <Link href={`/blog/${article.series}`}>See all {article.series.toUpperCase()} articles <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </aside>

          <div className={styles.articleContent}>
            {article.blocks.map((block, index) => (
              <div key={index}>
                <ArticleBlock article={article} block={block} index={index} />
                {index === inlineIndex && <div className={styles.inlineNext}>
                  <span>KEEP THE THREAD GOING</span>
                  <Link href={`/blog/${next.slug}`}>{next.title} <ArrowRight size={17} aria-hidden="true" /></Link>
                </div>}
              </div>
            ))}
          </div>
        </div>

        <section className={styles.nextSection} aria-labelledby="next-title">
          <p className={styles.eyebrow}>NEXT IN THE SERIES</p>
          <h2 id="next-title">Keep building your understanding.</h2>
          <Link href={`/blog/${next.slug}`} className={styles.nextFeature}>
            <Image src={next.image} alt={`Editorial thumbnail: ${next.title}`} width={1672} height={941} sizes="(max-width: 700px) 100vw, 320px" />
            <span><small>{next.category} · {getReadingMinutes(next)} min read</small><strong>{next.title}</strong><em>Read next <ArrowUpRight size={16} aria-hidden="true" /></em></span>
          </Link>
          <h3>Or pick another article</h3>
          <div className={styles.relatedGrid}>
            {related.filter((item) => item.slug !== next.slug).map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`}>
                <span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </BlogShell>
  );
}

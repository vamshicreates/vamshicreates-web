import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { getReadingMinutes, type BlogArticle } from "@/data/blog";
import styles from "./blog.module.css";

export default function ArticleCard({ article, index }: { article: BlogArticle; index: number }) {
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

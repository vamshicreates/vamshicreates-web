"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";
import styles from "./blog.module.css";

export interface ArticlePreview {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  series: string;
  readingMinutes: number;
  href?: string;
}

const PILLARS = [
  {
    id: "all",
    label: "All Topics",
    tagline: "Explore all guides, coding agent setups, automation blueprints, and builder frameworks.",
  },
  {
    id: "agents",
    label: "AI Agents & Coding",
    tagline: "MCP servers, Claude Code plugins, context optimization, open-source AI repos, and agent skills.",
  },
  {
    id: "automation",
    label: "Automation & Workflows",
    tagline: "Production n8n blueprints, local autonomous outreach agents, and practical pipeline systems.",
  },
  {
    id: "vibe-coding",
    label: "Vibe Coding & Stack",
    tagline: "Modern component registries, indie developer stacks, and battle-tested production setups.",
  },
  {
    id: "python",
    label: "Python & LLMs",
    tagline: "Fundamental principles of Python, audio/video pipelines, and large language model mechanics.",
  },
];

export default function BlogPillarsFilter({ articles }: { articles: ArticlePreview[] }) {
  const [activePillar, setActivePillar] = useState<string>("all");

  const filteredArticles = articles.filter((art) => {
    if (activePillar === "all") return true;
    if (activePillar === "python") return art.series === "python" || art.series === "llm";
    return art.series === activePillar;
  });

  const activePillarInfo = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <section className={styles.pillarFilterSection} aria-label="Filter blog articles by content pillar">
      <div className={styles.pillarFilterHeader}>
        <p className={styles.eyebrow}>CONTENT PILLARS / CURATED GUIDES</p>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", margin: "8px 0 16px", color: "#0b1230", letterSpacing: "-0.04em" }}>
          Choose your focus area
        </h2>
      </div>

      {/* PILLAR TABS */}
      <div className={styles.pillarTabs} role="tablist" aria-label="Content pillar tabs">
        {PILLARS.map((pillar) => {
          const count = articles.filter((art) => {
            if (pillar.id === "all") return true;
            if (pillar.id === "python") return art.series === "python" || art.series === "llm";
            return art.series === pillar.id;
          }).length;

          const isActive = activePillar === pillar.id;

          return (
            <button
              key={pillar.id}
              role="tab"
              aria-selected={isActive}
              className={`${styles.pillarTab} ${isActive ? styles.pillarTabActive : ""}`}
              onClick={() => setActivePillar(pillar.id)}
            >
              <span>{pillar.label}</span>
              <span className={styles.pillarBadge}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE PILLAR BANNER */}
      <div className={styles.pillarBanner}>
        <p>
          <strong>{activePillarInfo.label}:</strong> {activePillarInfo.tagline}
        </p>
        <span>Showing {filteredArticles.length} guides</span>
      </div>

      {/* FILTERED ARTICLES GRID */}
      <div className={styles.articleGrid}>
        {filteredArticles.map((article, idx) => {
          const articleUrl = article.href || `/blog/${article.slug}`;
          return (
            <article key={article.slug} className={styles.articleCard}>
              <Link href={articleUrl} className={styles.cardImageLink} aria-label={`Read ${article.title}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1600}
                  height={900}
                  className={styles.cardImage}
                  priority={idx < 2}
                  unoptimized={article.image.endsWith(".svg")}
                />
              </Link>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>{article.category}</span>
                  <span>
                    <Clock3 size={13} aria-hidden="true" /> {article.readingMinutes} min read
                  </span>
                </div>
                <h2>
                  <Link href={articleUrl}>{article.title}</Link>
                </h2>
                <p>{article.description}</p>
                <Link href={articleUrl} className={styles.readLink}>
                  Read full guide <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

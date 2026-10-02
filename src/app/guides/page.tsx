"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  BookOpen,
  X,
  Clock,
  Tag,
} from "lucide-react";
import styles from "@/app/home.module.css";
import { GUIDES, KEYWORD_MAP } from "@/data/guides";
import { useRouter } from "next/navigation";

const SUGGESTED_KEYWORDS = [
  "skills",
  "roadmap",
  "team",
  "loop",
  "money",
  "agentic-os",
  "graphify",
  "design-genius",
  "github-repos",
  "sol",
];

export default function GuidesIndexPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keywordInput, setKeywordInput] = useState("");
  const [keywordError, setKeywordError] = useState("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(GUIDES.map((g) => g.category))).filter(Boolean);
    return ["All", ...cats];
  }, []);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { All: GUIDES.length };
    for (const g of GUIDES) {
      map[g.category] = (map[g.category] || 0) + 1;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    return GUIDES.filter((g) => {
      const matchesCategory =
        selectedCategory === "All" || g.category === selectedCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        g.keywords.some((k) => k.includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const handleKeywordJump = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = keywordInput.trim().toLowerCase();
    const match = KEYWORD_MAP[clean];
    if (match) {
      setKeywordError("");
      router.push(`/guides/${match.slug}`);
    } else {
      setKeywordError(
        `Keyword "${keywordInput}" not found. Try one of the suggested keywords below!`
      );
    }
  };

  const jumpToKeyword = (kw: string) => {
    const match = KEYWORD_MAP[kw.toLowerCase()];
    if (match) {
      router.push(`/guides/${match.slug}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 pb-20 text-zinc-900">
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 [mask-image:linear-gradient(to_bottom,#000,transparent_36rem)] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent_36rem)]" />

      {/* Top Navigation Pill Bar */}
      <div className={styles.container}>
        <header className={styles.navigation}>
          <Link className={styles.brand} aria-label="VamshiCreates home" href="/">
            <img
              alt="VamshiCreates icon"
              width={36}
              height={36}
              className={styles.brandMark}
              src="/journey/main-dp-icon.jpg"
            />
            VamshiCreates
          </Link>

          <nav aria-label="Main navigation" className={styles.navLinks}>
            <Link href="/journey">My Journey</Link>
            <Link href="/guides" className="font-semibold text-teal-700">
              Guides
            </Link>
            <Link href="/#community">Community</Link>
            <Link href="/#consultation">Consulting</Link>
            <Link href="/#ai-lab">AI Lab</Link>
          </nav>

          <div className={styles.navRight}>
            <Link href="/#playbook" className={styles.navCta}>
              Get the playbook <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </header>
      </div>

      <main className="relative mx-auto max-w-[1160px] px-4 pt-10 sm:px-6 md:pt-16 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-zinc-600 shadow-xs backdrop-blur-xs transition-colors hover:border-zinc-300 hover:text-zinc-950"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        {/* Hero banner with portrait */}
        <section className="mb-10 grid items-center gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs sm:p-10 md:grid-cols-[1fr_160px] lg:grid-cols-[1fr_200px] lg:gap-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-700">
              VAMSHICREATES / FREE KNOWLEDGE HUB
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
              AI &amp; OpenClaw Guides
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
              Step-by-step build guides, copy-paste prompts, and GitHub skill packs from
              my videos. Pick a category below, search any topic, or enter a video keyword
              to jump straight in.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono font-medium text-zinc-800">
                <BookOpen className="h-3.5 w-3.5 text-teal-600" /> {GUIDES.length} Free Playbooks
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono font-medium text-zinc-800">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Updated September 2026
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-square w-32 overflow-hidden rounded-[24px] border-2 border-teal-600/40 bg-zinc-100 shadow-md sm:w-40 md:w-full">
              <img
                src="/journey/main-dp-hero.jpg"
                alt="VamshiCreates Portrait"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Search & Video Keyword Bar */}
        <div className="mb-6 grid gap-3 rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs sm:p-4 md:grid-cols-[1.2fr_1fr]">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search guides by topic, skill, or tool (e.g. Claude, Stitch, MCP)…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/80 py-2.5 pl-10 pr-9 text-sm text-zinc-900 outline-none transition focus:border-teal-600 focus:bg-white"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 text-zinc-400 hover:text-zinc-600"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <form onSubmit={handleKeywordJump} className="flex gap-2">
            <div className="relative flex-1">
              <Sparkles className="absolute left-3.5 top-3 h-4 w-4 text-blue-600" />
              <input
                type="text"
                placeholder="Enter video keyword (e.g. skills, team, loop)"
                value={keywordInput}
                onChange={(e) => {
                  setKeywordInput(e.target.value);
                  setKeywordError("");
                }}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50/80 py-2.5 pl-10 pr-4 text-sm text-zinc-900 outline-none transition focus:border-blue-600 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              Unlock <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* Video Keyword Chips */}
        <div className="mb-6 flex flex-wrap items-center gap-1.5 px-1">
          <span className="font-mono text-[11px] font-semibold text-zinc-400 mr-1">
            Try keyword:
          </span>
          {SUGGESTED_KEYWORDS.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => jumpToKeyword(kw)}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-200/80 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-zinc-600 transition hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700"
            >
              #{kw}
            </button>
          ))}
        </div>

        {keywordError && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50/60 p-3 text-xs font-medium text-red-700">
            {keywordError}
          </div>
        )}

        {/* Category Pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                    active
                      ? "bg-zinc-800 text-zinc-200"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Filter Notice */}
        {(search || selectedCategory !== "All") && (
          <div className="mb-6 flex items-center justify-between text-xs text-zinc-500">
            <span>
              Showing <strong>{filtered.length}</strong> of{" "}
              <strong>{GUIDES.length}</strong> guides
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              {search && ` matching "${search}"`}
            </span>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="font-medium text-teal-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Guides Grid or Empty State */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-zinc-200 bg-white p-12 text-center shadow-xs">
            <BookOpen className="mx-auto h-10 w-10 text-zinc-300" />
            <h3 className="mt-4 text-lg font-bold text-zinc-950">
              No matching guides found
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-zinc-500">
              We couldn&apos;t find any guides matching &ldquo;{search}&rdquo;. Try another
              keyword or reset your filters to see all available playbooks.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-zinc-800"
            >
              View all {GUIDES.length} guides
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-lg sm:p-6"
              >
                <div>
                  <div className="mb-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100/90 px-2.5 py-1 font-mono text-[10px] font-medium text-zinc-700">
                      <BookOpen className="h-3 w-3 text-teal-600" />
                      {guide.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-teal-50 px-2 py-0.5 font-mono text-[10px] font-medium text-teal-800">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-teal-700 sm:text-lg">
                    {guide.title}
                  </h2>

                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    {guide.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-zinc-100 pt-4">
                  <div className="mb-3.5 flex flex-wrap gap-1.5">
                    {guide.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="inline-flex items-center gap-0.5 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500"
                      >
                        <Tag className="h-2.5 w-2.5 text-zinc-400" />
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-teal-700 transition group-hover:text-blue-600">
                    <span>Read full playbook</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

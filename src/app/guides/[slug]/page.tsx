"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { getGuideBySlug, GUIDES } from "@/data/guides";

import styles from "@/app/home.module.css";

export default function GuideDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || "claude-skills-i-use";
  const guide = getGuideBySlug(slug);

  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 pb-20 text-zinc-900">
      {/* Subtle background grid matching rest of website */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 [mask-image:linear-gradient(to_bottom,#000,transparent_28rem)] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent_28rem)]" />

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

      <main className="relative mx-auto max-w-5xl px-4 pt-10 sm:px-6 md:pt-16 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/80 px-3.5 py-1.5 font-medium text-zinc-600 shadow-xs backdrop-blur-xs transition-colors hover:border-zinc-300 hover:text-zinc-950"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to all guides
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-zinc-950">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-zinc-950">Guides</Link>
            <span>/</span>
            <span className="font-medium text-zinc-900 line-clamp-1 max-w-[200px] sm:max-w-xs">{guide.title}</span>
          </div>
        </div>

        {/* Creator Header Card */}
        <div className="mb-8 rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs sm:p-7 md:mb-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-teal-600/60 bg-zinc-200 shadow-md sm:h-24 sm:w-24">
              <img
                src="/journey/main-dp-icon.jpg"
                alt="VamshiCreates"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                VamshiCreates
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                AI Engineer &amp; Creator teaching OpenClaw, autonomous agents, and practical AI automation systems.
              </p>

              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
                <a
                  href="mailto:hello@vamshicreates.com"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 hover:border-zinc-400 hover:bg-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@vamshicreates.com
                </a>
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-teal-700 hover:border-teal-300 hover:bg-teal-50/50"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  View My Journey
                </Link>
                <Link
                  href="/#playbook"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50/50"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Get the Playbook
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Guide White Card */}
        <article className="rounded-3xl border border-zinc-200 bg-white px-5 py-8 shadow-xs sm:px-8 md:px-12 md:py-12">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-teal-50 px-3 py-1 font-mono text-xs font-medium text-teal-700">
              {guide.category}
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600">
              {guide.readTime}
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-500">
              Updated {guide.updatedAt}
            </span>
          </div>

          <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:mb-8 md:text-5xl">
            {guide.shortTitle || guide.title}
          </h1>

          {/* Community CTA Banner inside article */}
          <div className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:flex-row">
            <p className="text-xs leading-relaxed text-zinc-700 sm:text-sm">
              <strong>Don&apos;t want to figure this out alone?</strong> I walk members
              through every step inside the VamshiCreates community.
            </p>
            <Link
              href="/#community"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              Join the Community <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Hero Summary */}
          <p className="mb-10 text-base leading-8 text-zinc-700 md:text-lg">
            {guide.heroSummary}
          </p>

          {/* Guide Sections */}
          <div className="space-y-10">
            {guide.sections.map((sec, idx) => (
              <section key={idx} className="border-t border-zinc-100 pt-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                    {sec.heading}
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setCheckedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition ${
                      checkedSteps[idx]
                        ? "border-teal-300 bg-teal-50 text-teal-700"
                        : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-zinc-300"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                    {checkedSteps[idx] ? "Completed" : "Mark done"}
                  </button>
                </div>

                <div className="space-y-4">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm leading-7 text-zinc-600 sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>

                {sec.codeBlock && (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                    <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
                      <span className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
                        <Terminal className="h-3.5 w-3.5 text-blue-400" />
                        {sec.codeBlock.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyCode(sec.codeBlock!.code, `sec-${idx}`)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-700"
                      >
                        {copiedIndex === `sec-${idx}` ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-teal-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" /> Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-zinc-100">
                      <code>{sec.codeBlock.code}</code>
                    </pre>
                  </div>
                )}

                {sec.bullets && (
                  <div className="mt-6 grid gap-4">
                    {sec.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5"
                      >
                        <h3 className="text-base font-semibold text-zinc-950">
                          {b.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-zinc-600">
                          {b.description}
                        </p>
                        {b.repo && (
                          <p className="mt-2 font-mono text-xs text-blue-600">
                            GitHub: {b.repo}
                          </p>
                        )}
                        {b.command && (
                          <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-zinc-900 px-3.5 py-2.5">
                            <code className="overflow-x-auto font-mono text-xs text-zinc-100">
                              {b.command}
                            </code>
                            <button
                              type="button"
                              onClick={() =>
                                copyCode(b.command!, `bullet-${idx}-${bIdx}`)
                              }
                              className="shrink-0 inline-flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-[11px] text-zinc-200 hover:bg-zinc-700"
                            >
                              {copiedIndex === `bullet-${idx}-${bIdx}` ? (
                                <>
                                  <Check className="h-3 w-3 text-teal-400" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3" /> Copy
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-zinc-950">
              You just read the full playbook.
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Inside the VamshiCreates community, I walk you through the exact build
              step-by-step, troubleshoot your setup live, and share the scripts and
              templates I use to land paying clients.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/#community"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Join the Community <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-xs font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Explore more free guides
              </Link>
            </div>
          </div>
        </article>

        {/* Related Guides */}
        <div className="mt-12">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900">
            More free guides from VamshiCreates
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {GUIDES.filter((g) => g.slug !== guide.slug)
              .slice(0, 3)
              .map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/guides/${rel.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300"
                >
                  <span className="font-mono text-[10px] text-zinc-500">
                    {rel.category}
                  </span>
                  <h4 className="mt-1 text-sm font-semibold text-zinc-900">
                    {rel.title}
                  </h4>
                  <p className="mt-1.5 line-clamp-2 text-xs text-zinc-500">
                    {rel.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

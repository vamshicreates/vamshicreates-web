"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  Film,
  Rocket,
  X,
  ZoomIn,
} from "lucide-react";
import styles from "@/app/home.module.css";
import { JOURNEY_MILESTONES, CREATOR_PORTRAITS, JourneyMilestone } from "@/data/journey";

export default function MyJourneyPage() {
  const [activePortrait, setActivePortrait] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<JourneyMilestone | null>(null);
  const [lightboxGalleryIndex, setLightboxGalleryIndex] = useState(0);
  const [cardGalleryIndex, setCardGalleryIndex] = useState<Record<string, number>>({});
  const [cardShowWholeImage, setCardShowWholeImage] = useState<Record<string, boolean>>({});

  const openLightbox = (item: JourneyMilestone, photoIdx = 0) => {
    setLightboxItem(item);
    setLightboxGalleryIndex(photoIdx);
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      {/* Subtle background grid matching the rest of the website */}
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
            <Link href="/journey" className="font-semibold text-teal-700">
              My Journey
            </Link>
            <Link href="/guides">Guides</Link>
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

        {/* HERO: WHO IS VAMSHI + SQUARE CURVED PORTRAIT SHOWCASE */}
        <section className="mb-16 grid items-center gap-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs sm:p-10 lg:grid-cols-[360px_1fr] lg:gap-14">
          {/* Square Portrait Display with Curved Edges & 3-DP Selector */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100 shadow-md">
              <img
                src={CREATOR_PORTRAITS[activePortrait].src}
                alt={CREATOR_PORTRAITS[activePortrait].label}
                className="h-full w-full object-cover object-top transition-all duration-300"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-zinc-200/80 bg-white/95 px-3.5 py-2.5 shadow-sm backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal-600" />
                  <span className="text-xs font-medium text-zinc-800">
                    {CREATOR_PORTRAITS[activePortrait].caption}
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Square Thumbnails for main dp.jpg, dp 1.jpg, dp 2.webp */}
            <div className="mt-3.5 grid grid-cols-3 gap-2.5">
              {CREATOR_PORTRAITS.map((p, idx) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setActivePortrait(idx)}
                  className={`group relative aspect-square overflow-hidden rounded-2xl border-2 transition ${
                    activePortrait === idx
                      ? "border-blue-600 ring-2 ring-blue-500/20"
                      : "border-zinc-200 opacity-75 hover:opacity-100"
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.label}
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Story Intro Copy */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-700">
              MY JOURNEY / MILESTONES ACHIEVED
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
              From Pitching My 1st Startup to{" "}
              <span className="text-zinc-500">1M+ YouTube Growth &amp; AI.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
              Before building AI agents and automation workflows at{" "}
              <strong className="font-semibold text-zinc-900">VamshiCreates</strong>, I
              spent years in the trenches—pitching my first startup on stage, directing
              celebrity shoots with Rana Daggubati, Adivi Sesh, Tharun Bhascker, and
              Vennela Kishore at <strong className="font-semibold text-zinc-900">aha</strong>,
              leading viral campaigns for hit series like <em>Save The Tigers</em>, and
              scaling the <em>aha</em> YouTube channel past{" "}
              <strong className="font-semibold text-zinc-900">1,000,000 subscribers</strong>.
            </p>

            {/* Quick Milestone Highlights */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3.5">
                <Rocket className="mb-1.5 h-4 w-4 text-teal-600" />
                <div className="text-lg font-bold text-zinc-950">0 → 1</div>
                <div className="text-[11px] text-zinc-500">1st Startup Pitch</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3.5">
                <Trophy className="mb-1.5 h-4 w-4 text-blue-600" />
                <div className="text-lg font-bold text-zinc-950">1M+ Subs</div>
                <div className="text-[11px] text-zinc-500">YouTube Gold Button</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3.5">
                <Film className="mb-1.5 h-4 w-4 text-teal-600" />
                <div className="text-lg font-bold text-zinc-950">OTT &amp; Sets</div>
                <div className="text-[11px] text-zinc-500">Flagship Campaigns</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3.5">
                <Sparkles className="mb-1.5 h-4 w-4 text-blue-600" />
                <div className="text-lg font-bold text-zinc-950">AI Era</div>
                <div className="text-[11px] text-zinc-500">VamshiCreates</div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE HEADER (Inspired by Reference Slide Header) */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-3 flex w-24 overflow-hidden rounded-full h-1.5">
            <div className="w-1/2 bg-teal-600" />
            <div className="w-1/2 bg-blue-600" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            CHRONOLOGICAL STORYLINE
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl">
            My Journey Timeline &amp; Milestones Achieved
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-zinc-500 sm:text-sm">
            Every chapter that shaped how I build products, grow audiences, and automate
            workflows today. Tap any photo to view full size.
          </p>
        </div>

        {/* CENTER-SPINE ALTERNATING MILESTONE TIMELINE (Reference Design in Website Colors) */}
        <section aria-label="My Journey Timeline" className="relative mx-auto max-w-5xl">
          {/* Central Vertical Hatched Spine (Center on Desktop, Left on Mobile) */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-6 top-4 w-3 -translate-x-1/2 rounded-full border border-zinc-200/80 md:left-1/2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #e4e4e7 0px, #e4e4e7 2px, #fafafa 2px, #fafafa 6px)",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {JOURNEY_MILESTONES.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isTeal = item.accent === "teal";

              const circleBg = isTeal ? "bg-[#0d9488]" : "bg-[#2563eb]";
              const ringBorder = isTeal ? "border-[#0d9488]" : "border-[#2563eb]";
              const labelColor = isTeal ? "text-[#0f766e]" : "text-[#2563eb]";
              const arrowLeftColor = isTeal
                ? "border-r-[#0d9488]"
                : "border-r-[#2563eb]";
              const arrowRightColor = isTeal
                ? "border-l-[#0d9488]"
                : "border-l-[#2563eb]";

              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 items-center md:grid-cols-2"
                >
                  {/* CENTER SPINE NODE (Circle Ring + Inner Dot + Pointer Triangle) */}
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-8 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center md:left-1/2"
                  >
                    {/* Left Pointer Triangle on Desktop (for left-side items) */}
                    {isLeft && (
                      <span
                        className={`hidden md:block mr-1.5 h-0 w-0 border-y-[7px] border-y-transparent border-r-[10px] ${arrowLeftColor}`}
                      />
                    )}

                    {/* Outer Ring + Solid Inner Circle */}
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white shadow-xs ${ringBorder}`}
                    >
                      <span className={`h-4 w-4 rounded-full ${circleBg}`} />
                    </div>

                    {/* Right Pointer Triangle on Desktop (for right-side items) or Mobile (always right of spine) */}
                    <span
                      className={`${
                        isLeft ? "md:hidden" : "block"
                      } ml-1.5 h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] ${arrowRightColor}`}
                    />
                  </div>

                  {/* MILESTONE COLUMN */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    {/* Dotted Connector Header Row with Circular Year/Phase Badge (Reference Image Style) */}
                    <div
                      className={`mb-3 flex items-center gap-3 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Large Circular Milestone Badge (like 2003 / 2010 / 2012 in Reference) */}
                      <div
                        className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full text-white shadow-md ${circleBg}`}
                      >
                        <span className="font-mono text-sm font-bold leading-none tracking-tight">
                          {item.badgeText}
                        </span>
                        {item.badgeSub && (
                          <span className="mt-0.5 font-mono text-[9px] font-medium opacity-90">
                            {item.badgeSub}
                          </span>
                        )}
                      </div>

                      {/* Period Label + Dotted Horizontal Line connecting to Spine */}
                      <div
                        className={`min-w-0 flex-1 ${
                          isLeft ? "text-left" : "md:text-right"
                        }`}
                      >
                        <span
                          className={`block font-mono text-[11px] font-bold uppercase tracking-wider ${labelColor}`}
                        >
                          {item.periodLabel}
                        </span>
                        <div className="mt-1.5 w-full border-b-2 border-dotted border-zinc-300" />
                      </div>
                    </div>

                    {/* MILESTONE CONTENT CARD: SQUARE IMAGE WITH CURVED EDGES + 1-2 LINES OF TEXT */}
                    <article className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-4 shadow-xs transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:p-5">
                      {(() => {
                        const hasGallery = Boolean(item.gallery && item.gallery.length > 0);
                        const activeIdx = cardGalleryIndex[item.id] ?? 0;
                        const currentPhoto = hasGallery
                          ? item.gallery![activeIdx] || item.gallery![0]
                          : { src: item.image, alt: item.imageAlt, caption: item.title };
                        const showWholeInCard = Boolean(cardShowWholeImage[item.id]);

                        return (
                          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[170px_1fr] md:grid-cols-[165px_1fr] lg:grid-cols-[190px_1fr]">
                            {/* 1:1 Square Image Display with Curved Edges */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-[18px] border border-zinc-100 bg-zinc-900/5">
                              <button
                                type="button"
                                onClick={() => openLightbox(item, activeIdx)}
                                className="relative block h-full w-full overflow-hidden text-left focus:outline-none"
                                aria-label={`View full image: ${item.title}`}
                              >
                                {showWholeInCard ? (
                                  <>
                                    {/* Ambient blurred backdrop so the whole uncropped image fits inside the 1:1 square cleanly */}
                                    <img
                                      src={currentPhoto.src}
                                      alt=""
                                      aria-hidden="true"
                                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-md"
                                    />
                                    <img
                                      src={currentPhoto.src}
                                      alt={currentPhoto.alt}
                                      loading="lazy"
                                      className="relative z-10 h-full w-full object-contain p-1 transition-transform duration-300"
                                    />
                                  </>
                                ) : (
                                  <img
                                    src={currentPhoto.src}
                                    alt={currentPhoto.alt}
                                    loading="lazy"
                                    style={{
                                      objectPosition: item.objectPosition || "center center",
                                    }}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                )}

                                {hasGallery && (
                                  <span className="absolute left-2 top-2 z-20 rounded-md bg-zinc-900/80 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white backdrop-blur-xs">
                                    {activeIdx + 1}/{item.gallery!.length}
                                  </span>
                                )}

                                <span className="absolute bottom-2 right-2 z-20 inline-flex items-center gap-1 rounded-lg bg-zinc-900/80 px-2 py-1 text-[10px] font-medium text-white opacity-90 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                                  <ZoomIn className="h-3 w-3" /> Full image
                                </span>
                              </button>
                            </div>

                            {/* Clear Title + 1-2 Lines of Text + Optional Smart 6-Photo Selector */}
                            <div className="min-w-0">
                              <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-950 sm:text-lg">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-xs leading-relaxed text-zinc-600 sm:text-sm sm:leading-6">
                                {item.description}
                              </p>

                              {hasGallery && (
                                <div className="mt-3 border-t border-zinc-100 pt-2.5">
                                  <div className="mb-1.5 flex items-center justify-between gap-2">
                                    <span className="font-mono text-[10px] font-medium text-teal-700">
                                      6 PHOTOS · SELECT ONE TO VIEW WHOLE IMAGE
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => openLightbox(item, activeIdx)}
                                      className="font-mono text-[10px] font-semibold text-blue-600 hover:underline"
                                    >
                                      Expand ↗
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-6 gap-1.5">
                                    {item.gallery!.map((gImg, gIdx) => {
                                      const isSelected = activeIdx === gIdx;
                                      return (
                                        <button
                                          key={gImg.src}
                                          type="button"
                                          onClick={() => {
                                            setCardGalleryIndex((prev) => ({
                                              ...prev,
                                              [item.id]: gIdx,
                                            }));
                                            setCardShowWholeImage((prev) => ({
                                              ...prev,
                                              [item.id]: true,
                                            }));
                                          }}
                                          title={gImg.caption || `Photo ${gIdx + 1}`}
                                          className={`relative aspect-square w-full overflow-hidden rounded-lg border transition-all ${
                                            isSelected
                                              ? "border-teal-600 ring-2 ring-teal-500/30 scale-[1.03]"
                                              : "border-zinc-200 opacity-75 hover:opacity-100"
                                          }`}
                                        >
                                          <img
                                            src={gImg.src}
                                            alt={gImg.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                          />
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* COMPLETE PHOTO GALLERY GRID (Square Curved Cards for Quick Mobile & Desktop Browsing) */}
        <section className="mt-20 border-t border-zinc-200 pt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                SNAPSHOT ARCHIVE
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Every Moment in Square View
              </h2>
            </div>
            <p className="text-xs text-zinc-500">
              Click any square photo card to view the full uncropped image with its story.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {JOURNEY_MILESTONES.map((item) => (
              <button
                key={`grid-${item.id}`}
                type="button"
                onClick={() => openLightbox(item, cardGalleryIndex[item.id] ?? 0)}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-zinc-200 bg-white p-3 text-left shadow-xs transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-zinc-100">
                  <img
                    src={
                      item.gallery && item.gallery.length > 0
                        ? item.gallery[cardGalleryIndex[item.id] ?? 0].src
                        : item.image
                    }
                    alt={item.imageAlt}
                    loading="lazy"
                    style={{
                      objectPosition: item.objectPosition || "center center",
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.gallery && item.gallery.length > 1 && (
                    <span className="absolute bottom-2 right-2 rounded-md bg-zinc-900/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-white">
                      {item.gallery.length} photos
                    </span>
                  )}
                </div>
                <div className="mt-3 px-1">
                  <span
                    className={`font-mono text-[9px] font-semibold uppercase tracking-wider ${
                      item.accent === "teal" ? "text-teal-700" : "text-blue-600"
                    }`}
                  >
                    {item.periodLabel}
                  </span>
                  <h3 className="mt-0.5 line-clamp-1 text-xs font-semibold text-zinc-900 sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mt-16 rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-xs sm:p-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-teal-700">
            WHAT’S NEXT
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
            Let’s build the next milestone together.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-600">
            Whether you want to learn AI automations from my free guides, join the
            community, or work 1:1 on your business growth and workflows.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/guides" className={styles.primaryButton}>
              Explore free guides <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/#consultation"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-xs font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              Book a 1:1 consultation <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL FOR FULL WHOLE-IMAGE VIEWING (WITH 6-PHOTO SELECTOR WHEN GALLERY EXISTS) */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-xs"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/85 text-white hover:bg-zinc-900"
              aria-label="Close image preview"
            >
              <X size={18} />
            </button>

            {(() => {
              const hasGallery = Boolean(
                lightboxItem.gallery && lightboxItem.gallery.length > 0
              );
              const total = hasGallery ? lightboxItem.gallery!.length : 1;
              const safeIdx = hasGallery
                ? Math.min(lightboxGalleryIndex, total - 1)
                : 0;
              const activePhoto = hasGallery
                ? lightboxItem.gallery![safeIdx]
                : {
                    src: lightboxItem.image,
                    alt: lightboxItem.imageAlt,
                    caption: lightboxItem.title,
                  };

              return (
                <>
                  {/* Whole Uncropped Image Display */}
                  <div className="relative flex max-h-[62vh] min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-950">
                    <img
                      src={activePhoto.src}
                      alt={activePhoto.alt}
                      className="max-h-[62vh] w-auto max-w-full object-contain"
                    />

                    {hasGallery && total > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxGalleryIndex((prev) =>
                              prev === 0 ? total - 1 : prev - 1
                            )
                          }
                          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition hover:bg-white"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxGalleryIndex((prev) =>
                              prev === total - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition hover:bg-white"
                          aria-label="Next photo"
                        >
                          <ChevronRight size={18} />
                        </button>
                        <span className="absolute bottom-3 left-3 rounded-full bg-zinc-900/80 px-3 py-1 font-mono text-xs font-semibold text-white">
                          Photo {safeIdx + 1} of {total}
                        </span>
                      </>
                    )}
                  </div>

                  {/* 6-Thumbnail Strip inside Lightbox for One-by-One Whole Image Selection */}
                  {hasGallery && (
                    <div className="mt-3.5 grid grid-cols-6 gap-2">
                      {lightboxItem.gallery!.map((gImg, idx) => (
                        <button
                          key={gImg.src}
                          type="button"
                          onClick={() => {
                            setLightboxGalleryIndex(idx);
                            setCardGalleryIndex((prev) => ({
                              ...prev,
                              [lightboxItem.id]: idx,
                            }));
                            setCardShowWholeImage((prev) => ({
                              ...prev,
                              [lightboxItem.id]: true,
                            }));
                          }}
                          className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                            safeIdx === idx
                              ? "border-teal-600 ring-2 ring-teal-500/30"
                              : "border-zinc-200 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={gImg.src}
                            alt={gImg.alt}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal-700">
                      {lightboxItem.periodLabel}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-zinc-950">
                      {lightboxItem.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                      {lightboxItem.description}
                    </p>
                    {hasGallery && activePhoto.caption && (
                      <p className="mt-1.5 font-mono text-[11px] font-medium text-blue-600">
                        {activePhoto.caption}
                      </p>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Mail,
  BookOpen,
  Route,
  CodeXml,
  Users,
  Workflow,
  MessageCircle,
  Check,
  GraduationCap,
  FileText,
  Search,
} from "lucide-react";
import styles from "./home.module.css";
import { GuideLookup } from "@/components/GuideLookup";
import { CallRequestModal } from "@/components/CallRequestModal";
import { InteractiveAiLab } from "@/components/InteractiveAiLab";
import { CommandPalette } from "@/components/CommandPalette";
import {
  CreatorCustomizer,
  CreatorConfig,
  DEFAULT_CREATOR_CONFIG,
} from "@/components/CreatorCustomizer";

const CONFIG_STORAGE_KEY = "vamshicreates-site-config-v3";

const HERO_DP_OPTIONS = [
  {
    src: "/journey/main-dp-hero.jpg",
    thumb: "/journey/main-dp-icon.jpg",
    label: "Main DP",
  },
  {
    src: "/journey/dp-1.jpg",
    thumb: "/journey/dp-1-showcase.jpg",
    label: "Studio 01",
  },
  {
    src: "/journey/dp-2.webp",
    thumb: "/journey/dp-2-showcase.jpg",
    label: "Studio 02",
  },
];

export default function HomePage() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [config, setConfig] = useState<CreatorConfig>(DEFAULT_CREATOR_CONFIG);
  const [heroDpIndex, setHeroDpIndex] = useState(0);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        setConfig({ ...DEFAULT_CREATOR_CONFIG, ...JSON.parse(saved) });
      }
    } catch {
      // ignore
    }
  }, []);

  const updateConfig = (next: CreatorConfig) => {
    setConfig(next);
    try {
      window.localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CREATOR_CONFIG);
    setHeroDpIndex(0);
    try {
      window.localStorage.removeItem(CONFIG_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const heroPortraitSrc =
    config.photoMode === "custom" && config.customPortraitDataUrl
      ? config.customPortraitDataUrl
      : config.photoMode === "ray"
      ? "/profile-ray-ref.png"
      : HERO_DP_OPTIONS[heroDpIndex].src;

  const communityImgSrc =
    config.photoMode === "ray"
      ? "/home/skool-community.jpg"
      : "/journey/dp-1-showcase.jpg";

  const playbookImgSrc =
    config.photoMode === "ray"
      ? "/home/ray-playbook.webp"
      : "/journey/dp-2-showcase.jpg";

  const consultationImgSrc =
    config.photoMode === "ray"
      ? "/home/ray-consultation.webp"
      : "/journey/main-dp-showcase.jpg";

  const automationImgSrc =
    config.photoMode === "ray"
      ? "/home/ray-automation.webp"
      : "/journey/dp-1-showcase.jpg";

  return (
    <div className={styles.page}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <div className={styles.container}>
        <header className={styles.navigation}>
          <Link className={styles.brand} aria-label={`${config.brandName} home`} href="/">
            <img
              alt={`${config.brandName} icon`}
              width={36}
              height={36}
              className={styles.brandMark}
              src="/journey/main-dp-icon.jpg"
            />
            {config.brandName}
          </Link>

          <nav aria-label="Main navigation" className={styles.navLinks}>
            <Link href="/journey">My Journey</Link>
            <Link href="/guides">Guides</Link>
            <a href="#community">Community</a>
            <a href="#consultation">Consulting</a>
            <a href="#ai-lab">AI Lab</a>
          </nav>

          <div className={styles.navRight}>
            <button
              type="button"
              onClick={() => setCmdOpen(true)}
              className={styles.cmdButton}
              aria-label="Quick search guides and keywords"
            >
              <Search size={13} />
              <span>Search</span>
              <kbd className={styles.cmdKbd}>⌘K</kbd>
            </button>

            <a
              href="#playbook"
              className={styles.navCta}
            >
              Get the playbook <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </header>

        <main id="main">
          {/* HERO SECTION */}
          <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.portraitWrap}>
              <div className="relative">
                <img
                  alt={`${config.brandName} — AI automation educator and engineer`}
                  width={572}
                  height={610}
                  className={styles.portrait}
                  src={heroPortraitSrc}
                />
                <div className={styles.portraitCaption}>
                  <img
                    src="/journey/main-dp-icon.jpg"
                    alt=""
                    width={22}
                    height={22}
                    className="h-5.5 w-5.5 rounded-full object-cover border border-teal-500"
                  />
                  <span className={styles.captionDot}></span> {config.captionBadge}
                </div>
              </div>

              {config.photoMode !== "ray" && config.photoMode !== "custom" && (
                <div className="mt-7 flex items-center justify-center gap-2.5">
                  {HERO_DP_OPTIONS.map((dp, idx) => (
                    <button
                      key={dp.src}
                      type="button"
                      onClick={() => setHeroDpIndex(idx)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition ${
                        heroDpIndex === idx
                          ? "border-teal-600 bg-teal-50/80 text-teal-800 shadow-xs"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                      }`}
                    >
                      <img
                        src={dp.thumb}
                        alt={dp.label}
                        className="h-6 w-6 rounded-md object-cover"
                      />
                      <span>{dp.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{config.eyebrow}</p>
              <h1 id="hero-title">
                {config.headlineLine1}
                <br />
                <span>{config.headlineLine2}</span>
              </h1>
              <p className={styles.heroDescription}>{config.bio}</p>

              <div className={styles.heroActions}>
                <a href="#featured" className={styles.primaryButton}>
                  Explore free guides <ArrowDown size={17} aria-hidden="true" />
                </a>
                <Link href="/journey" className={styles.textLink}>
                  My Journey <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <a href="#community" className={styles.textLink}>
                  Learn with me <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.socials} aria-label={`Find ${config.name} online`}>
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
                <a
                  href={config.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
                <a
                  href={config.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
                <a
                  href={config.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
                <a href={`mailto:${config.email}`} aria-label={`Email ${config.name}`}>
                  <Mail size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FEATURED GUIDE + STARTING POINTS + VIDEO KEYWORD LOOKUP */}
          <section
            id="featured"
            className={styles.featuredSection}
            aria-labelledby="featured-title"
          >
            <article className={styles.featuredCard}>
              <Link
                className={styles.featuredImageLink}
                aria-label="Read the featured Claude skills guide"
                href="/guides/claude-skills-i-use"
              >
                <img
                  alt="An illustrated toolkit for documents, writing, coding, spreadsheets, and presentations"
                  width={1200}
                  height={800}
                  className={styles.featuredImage}
                  src="/home/claude-skills.webp"
                />
                <span className={styles.imageBadge}>
                  <BookOpen size={14} aria-hidden="true" /> Featured guide
                </span>
              </Link>

              <div className={styles.featuredCopy}>
                <p className={styles.eyebrow}>
                  <span className={styles.freeLabel}>FREE GUIDE</span> / THE CLAUDE TOOLKIT
                </p>
                <h2 id="featured-title">
                  The Claude skills
                  <br className={styles.desktopBreak} /> I actually use.
                </h2>
                <p>
                  Find useful skills for writing, documents, design, and coding, with
                  instructions for installing them and choosing the right one for your work.
                </p>
                <Link className={styles.textLink} href="/guides/claude-skills-i-use">
                  Read the free guide <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>

            <aside className={styles.featuredAside} aria-label="Find your guide">
              <div className={styles.startingPoints}>
                <p className={styles.eyebrow}>A GOOD PLACE TO START</p>
                <h2>What brings you here?</h2>

                <Link
                  className={styles.startingPoint}
                  href="/guides/ai-automation-builder-roadmap"
                >
                  <Route size={19} aria-hidden="true" />
                  <span>
                    <strong>I’m just getting started</strong>
                    <small>Follow the automation roadmap</small>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <Link className={styles.startingPoint} href="/guides/claude-skills-i-use">
                  <CodeXml size={19} aria-hidden="true" />
                  <span>
                    <strong>I want to get more from Claude</strong>
                    <small>Explore my go-to skills</small>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <Link className={styles.startingPoint} href="/guides/first-ai-agent-team">
                  <Users size={19} aria-hidden="true" />
                  <span>
                    <strong>I want to build AI agents</strong>
                    <small>Build your first agent team</small>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  className={styles.startingPoint}
                  href="/guides/claude-code-agent-finds-clients"
                >
                  <Workflow size={19} aria-hidden="true" />
                  <span>
                    <strong>I want to automate my business</strong>
                    <small>Start with client research</small>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <GuideLookup />
            </aside>
          </section>

          {/* 01 / FREE GUIDES GRID */}
          <section
            id="guides"
            className={styles.guideSection}
            aria-labelledby="guides-title"
          >
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>01 / EXPLORE AT YOUR OWN PACE</p>
                <h2 id="guides-title">
                  A little guidance.
                  <br />A lot you can build.
                </h2>
              </div>
              <div>
                <p>
                  Pick something you want to make.
                  <br />
                  I’ll walk you through it.
                </p>
                <Link className={styles.textLink} href="/guides">
                  Browse all free guides <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.guideGrid}>
              <Link
                className={styles.guideCard}
                href="/guides/ai-automation-builder-roadmap"
              >
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}>
                    <Route size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <span className={styles.guideCategory}>Start here</span>
                <h3>Your AI automation roadmap</h3>
                <p>
                  A clear learning path, the skills to focus on, and projects to build along
                  the way.
                </p>
                <span className={styles.guideCardCta}>
                  Read guide <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>

              <Link className={styles.guideCard} href="/guides/setup-claude-cowork">
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}>
                    <Workflow size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <span className={styles.guideCategory}>Everyday workflows</span>
                <h3>Set up Claude Cowork</h3>
                <p>
                  Give Claude your context, connect your tools, and put it to work on real
                  tasks.
                </p>
                <span className={styles.guideCardCta}>
                  Read guide <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>

              <Link className={styles.guideCard} href="/guides/claude-skills-i-use">
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}>
                    <CodeXml size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <span className={styles.guideCategory}>Claude toolkit</span>
                <h3>The Claude skills I use</h3>
                <p>
                  Find and install useful skills for writing, documents, design, and coding.
                </p>
                <span className={styles.guideCardCta}>
                  Read guide <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>

              <Link className={styles.guideCard} href="/guides/first-ai-agent-team">
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}>
                    <Users size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <span className={styles.guideCategory}>AI agents</span>
                <h3>Build your first agent team</h3>
                <p>
                  Give each agent a clear role in your business, from finding leads to
                  delivering work.
                </p>
                <span className={styles.guideCardCta}>
                  Read guide <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>

              <Link
                className={styles.guideCard}
                href="/guides/claude-obsidian-ai-second-brain"
              >
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}>
                    <BookOpen size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <span className={styles.guideCategory}>Personal productivity</span>
                <h3>Build an AI second brain</h3>
                <p>
                  Turn scattered notes and research into a connected knowledge base with
                  Claude and Obsidian.
                </p>
                <span className={styles.guideCardCta}>
                  Read guide <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>

              <Link
                className={styles.guideCard}
                href="/guides/claude-code-agent-finds-clients"
              >
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}>
                    <MessageCircle size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <span className={styles.guideCategory}>Business workflows</span>
                <h3>Build a client research agent</h3>
                <p>
                  Research potential clients, organize your prospects, and prepare outreach
                  drafts.
                </p>
                <span className={styles.guideCardCta}>
                  Read guide <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </section>

          {/* 02 / COMMUNITY SECTION */}
          <section
            id="community"
            className={`${styles.showcase} ${styles.communitySection}`}
            aria-labelledby="community-title"
          >
            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>02 / MASTER AND MONETIZE AI</p>
              <h2 id="community-title">
                Build useful AI agents.
                <br />
                With me in your corner.
              </h2>
              <p>
                Learn Claude Code and AI automation through guided projects, with help when
                you get stuck.
              </p>

              <ul className={styles.features}>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Lessons from first setup to a working agent</span>
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Daily recorded answers to member questions</span>
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Weekly live build calls with me</span>
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Prompts, guides, and lessons on finding clients</span>
                </li>
              </ul>

              <div className={styles.offerPrice}>
                {config.communityPrice}
                <span>/month</span>
              </div>

              <a
                href="#custom-builds"
                className={styles.primaryButton}
              >
                Explore the community <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className={styles.offerNote}>
                Beginner friendly. No coding background needed.
              </p>
            </div>

            <div className={styles.communityVisual}>
              <a
                href="#custom-builds"
                className={styles.skoolImageLink}
              >
                <img
                  alt={`Master and Monetize AI — ${config.brandName} course and community`}
                  width={720}
                  height={383}
                  className={styles.skoolImage}
                  src={communityImgSrc}
                />
              </a>

              <div className={styles.communityDetails}>
                <span>
                  <GraduationCap size={18} aria-hidden="true" /> Guided builds
                </span>
                <span>
                  <MessageCircle size={18} aria-hidden="true" /> Real support
                </span>
                <span>
                  <Users size={18} aria-hidden="true" /> Learn together
                </span>
              </div>

              <figure className={styles.review}>
                <blockquote>
                  “{config.name} breaks down complex multi-agent workflows so clearly that I
                  shipped my first client automation in 48 hours.”
                </blockquote>
                <figcaption>
                  <span className={styles.reviewAvatar}>AK</span>
                  <span>
                    <strong>Arjun K.</strong>
                    <small>Community member</small>
                  </span>
                  <a
                    href="#community"
                    aria-label="Read member review"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* 03 / PLAYBOOK SECTION */}
          <section
            id="playbook"
            className={styles.showcase}
            aria-labelledby="playbook-title"
          >
            <div className={styles.playbookVisual}>
              <img
                alt={`${config.name} with a workbook and prompt cards in a bright studio`}
                width={1200}
                height={797}
                className={styles.offerImage}
                src={playbookImgSrc}
              />
              <span className={styles.bookCaption}>
                Your next build starts with a prompt.
              </span>
            </div>

            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>03 / A PRACTICAL PLACE TO BEGIN</p>
              <h2 id="playbook-title">
                The $5K/Month
                <br />
                Claude Plugin Playbook
              </h2>
              <p>
                10 plugins with exact prompts, build guides, and outreach scripts. Open the
                guide, pick a project, and follow the steps.
              </p>

              <ul className={styles.features}>
                <li>
                  <Check size={17} aria-hidden="true" /> Prompts you can copy and use
                </li>
                <li>
                  <Check size={17} aria-hidden="true" /> Instructions for each build
                </li>
                <li>
                  <Check size={17} aria-hidden="true" /> Outreach scripts for finding
                  clients
                </li>
              </ul>

              <div className={styles.offerPrice}>{config.playbookPrice}</div>

              <Link
                href="/guides/claude-skills-i-use"
                className={styles.primaryButton}
              >
                Get the playbook <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* 04 / 1:1 CONSULTATION SECTION */}
          <section
            id="consultation"
            className={`${styles.showcase} ${styles.consultationSection}`}
            aria-labelledby="consultation-title"
          >
            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>04 / LET’S WORK THROUGH IT</p>
              <h2 id="consultation-title">
                Your ideas.
                <br />A conversation with me.
              </h2>
              <p>
                Book a 1:1 consultation to work with me on AI automations for your business
                or workflows. Bring your questions, your project, or the part you’re stuck
                on.
              </p>

              <div className={styles.offerPrice}>
                {config.consultationPrice}
                <span> / consultation</span>
              </div>

              <a
                href="#custom-builds"
                className={styles.primaryButton}
              >
                Book a 1:1 consultation <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.consultationVisual}>
              <img
                alt={`${config.name} at a laptop with a notebook, ready for a personal consultation`}
                width={1200}
                height={797}
                className={styles.offerImage}
                src={consultationImgSrc}
              />

              <div className={styles.sessionCard}>
                <div className={styles.sessionHost}>
                  <img
                    src="/journey/main-dp-icon.jpg"
                    alt={config.name}
                    width={42}
                    height={42}
                    className="h-10.5 w-10.5 shrink-0 rounded-full object-cover border-2 border-teal-500"
                  />
                  <div>
                    <strong>1:1 with {config.name}</strong>
                    <span>A conversation about your next build</span>
                  </div>
                  <MessageCircle size={22} aria-hidden="true" />
                </div>

                <p className={styles.eyebrow}>WHAT WE CAN WORK THROUGH</p>

                <div className={styles.agendaRow}>
                  <span>01</span>
                  Your idea or existing workflow
                  <Check size={16} aria-hidden="true" />
                </div>
                <div className={styles.agendaRow}>
                  <span>02</span>
                  Questions and technical blockers
                  <Check size={16} aria-hidden="true" />
                </div>
                <div className={styles.agendaRow}>
                  <span>03</span>
                  Practical next steps
                  <Check size={16} aria-hidden="true" />
                </div>

                <div className={styles.sessionFooter}>
                  <img
                    alt=""
                    width={20}
                    height={20}
                    src="/gcal-icon.svg"
                  />{" "}
                  Make time for your next step.
                </div>
              </div>
            </div>
          </section>

          {/* 05 / CUSTOM BUILDS SECTION */}
          <section
            id="custom-builds"
            className={styles.showcase}
            aria-labelledby="custom-title"
          >
            <div className={styles.automationVisual}>
              <img
                alt={`${config.name} studio portrait`}
                width={1200}
                height={960}
                className={styles.offerImage}
                src={automationImgSrc}
              />
              <div className={styles.workflowSteps}>
                <span>Connect your tools</span>
                <ArrowRight size={16} aria-hidden="true" />
                <span>Build the workflow</span>
              </div>
            </div>

            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>05 / BUILT FOR YOUR BUSINESS</p>
              <h2 id="custom-title">
                Let’s put AI to work
                <br />
                in your business.
              </h2>
              <p>
                Have a workflow you want to automate? I build custom AI agents around your
                tools, your processes, and the way your business works.
              </p>

              <div className={styles.useCases}>
                <span>
                  <FileText size={16} aria-hidden="true" /> Research &amp; reporting
                </span>
                <span>
                  <Workflow size={16} aria-hidden="true" /> Repetitive workflows
                </span>
                <span>
                  <MessageCircle size={16} aria-hidden="true" /> Business operations
                </span>
              </div>

              <div className={styles.offerPrice}>
                Custom<span> / based on your project</span>
              </div>

              <CallRequestModal />
            </div>
          </section>

          {/* 06 / BONUS INTERACTIVE AI BUILDER LAB */}
          <InteractiveAiLab />

          {/* FAQ SECTION */}
          <section className={styles.faqSection} aria-labelledby="faq-title">
            <div>
              <p className={styles.eyebrow}>BEFORE YOU GET STARTED</p>
              <h2 id="faq-title">A few good questions.</h2>
              <p>
                Still wondering about something?
                <br />
                <a href={`mailto:${config.email}`} className={styles.textLink}>
                  Send me an email <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className={styles.faqList}>
              <details>
                <summary>
                  Where should I start?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Start with the{" "}
                  <Link href="/guides/ai-automation-builder-roadmap">
                    free AI automation roadmap
                  </Link>{" "}
                  for a learning path, or pick a project from the guide library. If you
                  already use Claude, the{" "}
                  <Link href="/guides/claude-skills-i-use">featured skills guide</Link> is a
                  useful next step.
                </p>
              </details>

              <details>
                <summary>
                  What’s included in the free guides?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  The library includes setup instructions, practical walkthroughs, install
                  commands, and prompts for working with AI. The guides are free to read;
                  some projects use tools that have their own costs.
                </p>
              </details>

              <details>
                <summary>
                  What do I get inside the community?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Guided lessons, prompts, recorded answers to member questions, and weekly
                  live calls. It’s a place to learn with support while you build.
                </p>
              </details>

              <details>
                <summary>
                  Can you help with my business?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. Book a <a href="#consultation">1:1 consultation</a> for help with
                  your project, or <a href="#custom-builds">tell me about a custom build</a>{" "}
                  if you want an AI workflow built for your business.
                </p>
              </details>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div>
            <Link className={styles.brand} href="/">
              <img
                alt=""
                width={32}
                height={32}
                className={styles.brandMark}
                src="/journey/main-dp-icon.jpg"
              />
              {config.brandName}
              <span className={styles.captionDot}></span>
            </Link>
            <p>Practical AI. Things you can actually build.</p>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/journey">My Journey</Link>
            <Link href="/guides">All guides</Link>
            <a href="#community">Community</a>
            <a href="#playbook">Playbook</a>
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>

          <span className={styles.copyright}>
            © 2026 @{config.brandName.toLowerCase()}
          </span>
        </footer>
      </div>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <CreatorCustomizer
        config={config}
        onChange={updateConfig}
        onReset={resetConfig}
      />
    </div>
  );
}

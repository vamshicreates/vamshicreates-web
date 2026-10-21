import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3, Instagram } from "lucide-react";
import BlogShell from "../BlogShell";
import styles from "../indie-saas-builders-to-follow/post.module.css";
import visual from "./post.module.css";

import { SITE_URL } from "@/config/site";
const PATH = "/blog/indian-ai-builders-instagram";
const TITLE = "10 Indian AI Builders to Follow on Instagram";
const DESCRIPTION = "A practical Instagram reading list of Indian founders and makers building AI products, agents, and useful workflows—and sharing what they learn.";
const COVER = "/blog/indian-ai-builders-instagram.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${TITLE} | VamshiCreates`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: "VamshiCreates",
    type: "article",
    publishedTime: "2026-10-16",
    authors: ["Vamshi Krishna"],
    images: [{ url: COVER, width: 1730, height: 909, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [COVER] },
};

const builders = [
  {
    name: "Varun Mayya", handle: "thevarunmayya", focus: "AI products and the bigger shifts around them",
    note: "Varun builds through AEOS and talks frequently about AI, startups, and how new tools change creative and technical work. His feed is useful for seeing a founder connect product opportunities with shifts in the wider market.",
    study: "Notice how he turns a new capability into a concrete product question, then check whether the use case is clear beyond the demo.",
    product: "Explore AEOS Labs", productUrl: "https://www.instagram.com/aeos.labs/",
  },
  {
    name: "Gayatri Agrawal", handle: "gayatri.tech", focus: "Making AI useful inside companies",
    note: "Gayatri leads Altrd, which helps companies become AI-ready. Her posts make AI more approachable through examples, conversations, and demonstrations of what people can actually do with it.",
    study: "Watch how she explains a tool through a task a person already understands, instead of starting with the model behind it.",
    product: "Explore Altrd", productUrl: "https://www.altrdtech.com/",
  },
  {
    name: "Prithvi Raj Agrawal", handle: "prithvirajagarawal", focus: "Building AI agents and software with a team",
    note: "Prithvi is building 360 Labs, an AI-focused engineering and consultancy team. His posts show the work of shaping custom AI projects and putting researchers and engineers around real business problems.",
    study: "Look for the problem definition and integration work behind each agent. Those details decide whether a prototype becomes a usable system.",
    product: "Explore 360 Labs", productUrl: "https://www.360labs.ai/",
  },
  {
    name: "Anmol Malik", handle: "agenticanmol", focus: "Hands-on agent workflows",
    note: "Anmol shares practical AI-agent builds, including customer-support and appointment-booking workflows. He also links to Luke, his agent-focused product, from his profile.",
    study: "Follow the complete workflow: inputs, tools, memory, handoff, and what happens when the agent cannot finish the task.",
    product: "Explore Luke", productUrl: "https://tryluke.com/",
  },
  {
    name: "Chandan Cheripally", handle: "chandan_cheripally_", focus: "Automating everyday business operations",
    note: "Chandan runs Repeatless Agency and posts about systems, AI tools, and automation for businesses. His examples are useful if you want to see where an AI workflow can save a team repetitive work.",
    study: "Start with the manual process being replaced. Then ask which steps can be automated reliably and where a human should review the result.",
    product: "Chandan's projects and links", productUrl: "https://superprofile.bio/chandannetha",
  },
  {
    name: "Aashish Pahwa", handle: "okaashish", focus: "AI product building with clear explanations",
    note: "Aashish founded Koso.ai and uses his feed to explain AI tools, concepts, and their human impact. His mix of product work and accessible teaching makes him a strong starting point for this list.",
    study: "Notice how he gives a tool enough context to help you decide when to use it, rather than treating every launch as equally important.",
    product: "Explore Koso.ai", productUrl: "https://koso.ai/",
  },
  {
    name: "Sanskar Tiwari", handle: "sanskarr.tiwari", focus: "Shipping small AI software products",
    note: "Sanskar has built products including MagicSlides and shares lessons from building, marketing, and shipping software. His posts are especially useful when you want to move from an idea to a live first version.",
    study: "Study how narrowly a first version is scoped, how quickly it reaches users, and what the next iteration responds to.",
    product: "Sanskar's product portfolio", productUrl: "https://www.sanskartiwari.io/about",
  },
  {
    name: "Dainik Gohel", handle: "dainikautomates", focus: "AI automation that removes repetitive tasks",
    note: "Dainik builds AI automations and agent workflows for businesses. His feed leans into practical examples, from prospecting and outreach to using coding agents in a real workflow.",
    study: "Separate the flashy demo from the repeatable process: what data goes in, what gets checked, and what measurable work gets saved?",
    product: "Explore Dainik Automates", productUrl: "https://dainikautomates.in/",
  },
  {
    name: "Aryaman Upmanyu", handle: "aryamanupmanyu", focus: "Custom AI agents for businesses",
    note: "Aryaman is behind Lancemart AI and Haus of Intelligence. He regularly shows AI systems and agents being built around business use cases, which makes his feed useful for spotting practical applications.",
    study: "Ask what business decision or action each agent improves, and whether the result needs a person to approve it.",
    product: "Explore Lancemart AI", productUrl: "https://www.lancemart.org/",
  },
  {
    name: "Piyush Garg", handle: "piyushgarg.official", focus: "The engineering behind AI products",
    note: "Piyush teaches software engineering and generative AI while building developer-focused products. His explanations help connect product ideas to implementation details such as models, inference, and application architecture.",
    study: "Use his technical breakdowns to identify the smallest reliable architecture for your own AI feature.",
    product: "Piyush's projects", productUrl: "https://www.piyushgarg.dev/",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  image: SITE_URL + COVER,
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Person", name: "Vamshi Krishna", url: SITE_URL },
  publisher: { "@type": "Organization", name: "VamshiCreates", url: SITE_URL },
  mainEntityOfPage: SITE_URL + PATH,
};

export default function IndianAiBuildersPost() {
  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className={styles.page}>
        <Link href="/blog" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> All blog posts</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>AI / INDIA / INSTAGRAM READING LIST</p>
          <h1>{TITLE}</h1>
          <p className={styles.dek}>{DESCRIPTION}</p>
          <div className={styles.byline}>
            <img src="/journey/main-dp-icon.jpg" width={38} height={38} alt="" />
            <span><strong>Vamshi Krishna</strong><small>October 16, 2026</small></span>
            <span className={styles.readTime}><Clock3 size={15} aria-hidden="true" /> 6 min read</span>
          </div>
        </header>
        <Image className={styles.heroImage} src={COVER} alt="Vamshi working at his laptop beside the article title" width={1730} height={909} priority sizes="(max-width: 1100px) 100vw, 1060px" />

        <div className={styles.body}>
          <div className={styles.intro}>
            <p>My most useful AI follows do more than announce a new model. They build products, show a workflow, explain a hard idea clearly, or share what happened after shipping. The best posts give you something to try in your own work.</p>
            <p>Here are ten India-based Instagram accounts I would follow for that kind of learning. Aashish Pahwa was the starting point for this list. The others span AI products, engineering, agents, and business automation. This is a curated reading list, not a ranking by followers. The profile photos and post images below come from their public Instagram pages, which I checked in October 2026.</p>
          </div>

          <section aria-labelledby="builders-heading">
            <div className={styles.sectionLead}>
              <span>01 / THE ACCOUNTS</span>
              <h2 id="builders-heading">Follow the people doing the work.</h2>
              <p>Each profile gives you a different angle on AI. Open the linked product or company alongside the posts to see how the ideas hold up in practice.</p>
            </div>
            <div className={styles.builderGrid}>
              {builders.map((builder, index) => (
                <section className={styles.builderCard} key={builder.handle} aria-labelledby={`builder-${index}`}>
                  <div className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</div>
                  <div className={styles.cardCopy}>
                    <p className={styles.cardFocus}>{builder.focus}</p>
                    <h3 id={`builder-${index}`}>{builder.name}</h3>
                    <a className={styles.profileLink} href={`https://www.instagram.com/${builder.handle}/`} target="_blank" rel="noopener noreferrer">@{builder.handle} on Instagram <ArrowUpRight size={15} aria-hidden="true" /></a>
                    <p>{builder.note}</p>
                    <p className={styles.study}><strong>What to study:</strong> {builder.study}</p>
                    <a className={styles.productLink} href={builder.productUrl} target="_blank" rel="noopener noreferrer">{builder.product} <ArrowUpRight size={15} aria-hidden="true" /></a>
                  </div>
                  <a className={styles.profileShot} href={`https://www.instagram.com/${builder.handle}/`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${builder.name}'s Instagram profile`}>
                    <div className={visual.profilePreview}>
                      <div className={visual.previewTop}><Instagram size={19} aria-hidden="true" /><span>Instagram</span></div>
                      <div className={visual.profileIdentity}>
                        <div className={visual.avatarRing}>
                          <Image src={`/blog/instagram/${builder.handle}-avatar.webp`} alt={`${builder.name}'s Instagram profile photo`} width={80} height={80} sizes="80px" />
                        </div>
                        <strong>{builder.name}</strong>
                        <small>@{builder.handle}</small>
                      </div>
                      <div className={visual.postGrid} aria-label={`Recent Instagram posts by ${builder.name}`}>
                        {[1, 2, 3].map(number => (
                          <Image key={number} src={`/blog/instagram/${builder.handle}-post-${number}.webp`} alt={`Post ${number} from ${builder.name}'s Instagram profile`} width={160} height={160} sizes="80px" />
                        ))}
                      </div>
                    </div>
                    <span>View profile on Instagram <ArrowUpRight size={14} aria-hidden="true" /></span>
                  </a>
                </section>
              ))}
            </div>
          </section>

          <section className={styles.playbook} aria-labelledby="playbook-heading">
            <div className={styles.sectionLead}>
              <span>02 / PUT THE FEED TO WORK</span>
              <h2 id="playbook-heading">Turn one post into a small experiment.</h2>
              <p>When a build catches your eye, save the insight and test it rather than just collecting another account.</p>
            </div>
            <ol>
              <li><strong>Name the job.</strong> What is the user trying to get done, and where does the current process hurt?</li>
              <li><strong>Trace the workflow.</strong> What inputs, model, tools, checks, and human decisions make the result useful?</li>
              <li><strong>Try the smallest version.</strong> Recreate one narrow step before building an entire AI product.</li>
              <li><strong>Measure the outcome.</strong> Ask whether it saves time, improves quality, or helps someone make a better decision.</li>
            </ol>
            <p>If you are starting today, pick one account that matches the work you want to do: <a href="https://www.instagram.com/okaashish/">Aashish</a> for clear AI explanations, <a href="https://www.instagram.com/sanskarr.tiwari/">Sanskar</a> for shipping software, or <a href="https://www.instagram.com/agenticanmol/">Anmol</a> for agent workflows. Study one example and build your own small version.</p>
          </section>

          <div className={styles.endNote}>
            <span>VAMSHI CREATES / THE NOTEBOOK</span>
            <p>Follow the builders. Then go make something useful.</p>
            <Link href="/blog/indie-saas-builders-to-follow">Read the X builders list <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </article>
    </BlogShell>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clapperboard,
  Cpu,
  Layers3,
  Mail,
  Monitor,
  Palette,
  PenTool,
  Sparkles,
  Workflow,
} from "lucide-react";
import styles from "./page.module.css";

const weeks = [
  {
    number: "01",
    title: "Design like a creative director",
    detail: "Composition, color, type, references, and critique. Start in Figma with a visual system for a real brief.",
    tools: "Figma · design fundamentals",
    output: "Creative direction board",
  },
  {
    number: "02",
    title: "Build images that communicate",
    detail: "Photoshop selections, compositing, retouching, art direction, and responsible generative fill.",
    tools: "Photoshop · image making",
    output: "Campaign key visual",
  },
  {
    number: "03",
    title: "Make a brand feel like itself",
    detail: "Vector drawing, logos, typography, icons, and flexible brand assets in Illustrator.",
    tools: "Illustrator · brand systems",
    output: "Mini identity system",
  },
  {
    number: "04",
    title: "Turn the system into a campaign",
    detail: "Combine Figma, Photoshop, and Illustrator into social, presentation, and web layouts with consistent rules.",
    tools: "Figma · Photoshop · Illustrator",
    output: "Multi-format campaign kit",
  },
  {
    number: "05",
    title: "Enter 3D",
    detail: "Blender interface, modeling, materials, lighting, cameras, and simple product scenes.",
    tools: "Blender · 3D fundamentals",
    output: "3D product render",
  },
  {
    number: "06",
    title: "Make 3D part of the story",
    detail: "Animate a scene, render passes, and combine 3D with graphic design for a campaign moment.",
    tools: "Blender · motion design",
    output: "Animated brand scene",
  },
  {
    number: "07",
    title: "Cut for attention and meaning",
    detail: "Visual storytelling, pacing, sound, captions, color, and editing fundamentals for short-form video.",
    tools: "DaVinci Resolve · editing",
    output: "30-second edited film",
  },
  {
    number: "08",
    title: "Direct AI video deliberately",
    detail: "Storyboards, shot prompts, generation, asset cleanup, edit integration, and quality control.",
    tools: "AI video tools · DaVinci Resolve",
    output: "AI-assisted video sequence",
  },
  {
    number: "09",
    title: "Build your creative co-pilot",
    detail: "Use an LLM for research and iteration. Connect files and tools with MCPs, then make repeatable workflows with human review.",
    tools: "ChatGPT / Claude / Antigravity · MCP",
    output: "Documented creative workflow",
  },
  {
    number: "10",
    title: "Ship a body of work",
    detail: "Produce, refine, and present one cohesive campaign using design, 3D, video, and an AI-enabled process.",
    tools: "Full creative stack",
    output: "Portfolio capstone + process case study",
  },
];

const projects = [
  { icon: <Palette size={21} />, title: "Campaign key visual", meta: "Photoshop", description: "A considered image with a clear idea, not an effect for its own sake." },
  { icon: <PenTool size={21} />, title: "Identity system", meta: "Illustrator + Figma", description: "A compact brand kit that works across formats." },
  { icon: <Layers3 size={21} />, title: "3D brand scene", meta: "Blender", description: "A lit and rendered object or environment with intent." },
  { icon: <Clapperboard size={21} />, title: "Short-form film", meta: "Editing + AI video", description: "A paced piece with sound, captions, and visual continuity." },
  { icon: <Workflow size={21} />, title: "Creative workflow", meta: "LLM + MCP", description: "A repeatable, documented process connecting your tools." },
  { icon: <Sparkles size={21} />, title: "Portfolio capstone", meta: "Full stack", description: "One campaign that shows both the final work and how you made it." },
];

const faq = [
  ["Do I need to be a designer already?", "No. We begin with design foundations, then build toward more complex visual work. You should be comfortable using a computer and willing to practice between sessions."],
  ["Is this only an AI tools course?", "No. The core is creative judgment and production craft. AI, LLMs, and MCPs help you research, iterate, and connect tools; you still direct and review the work."],
  ["Which software will I need?", "Plan for access to Photoshop and Illustrator, plus Figma, Blender, and DaVinci Resolve. Some AI video exercises may use third-party tools with separate usage limits or costs. Exact tool choices will be shared before enrollment."],
  ["What do I need to bring?", "A laptop or desktop with at least 16 GB RAM, reliable internet, and an entry-level paid plan for your chosen AI path. For heavier Blender and video work, 32 GB RAM and a capable GPU are recommended."],
  ["When does the next cohort start?", "The schedule, fee, and enrollment details are being finalized. Register your interest and we’ll share them when confirmed."],
];

export default function CreativeBootcampPage() {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const payload = {
      type: "creative-bootcamp-interest",
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      interest: String(form.get("interest") || "").trim(),
    };
    if (!payload.name || !payload.email) {
      setStatus("error");
      return;
    }
    try {
      const response = await fetch("/api/email-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Could not save interest");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <div className={styles.shell}>
        <header className={styles.nav}>
          <Link className={styles.brand} href="/" aria-label="VamshiCreates home">
            <img src="/journey/main-dp-icon.jpg" alt="" width="36" height="36" />
            <span>VamshiCreates</span>
          </Link>
          <nav aria-label="Bootcamp navigation">
            <Link href="/journey">My Journey</Link>
            <Link href="/guides">Guides</Link>
            <a href="#curriculum">Curriculum</a>
            <a href="#projects">Projects</a>
            <a href="#requirements">Requirements</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className={styles.navCta} href="#interest">Register interest <ArrowUpRight size={16} /></a>
        </header>

        <main id="main">
          <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.heroVisual}>
              <img className={styles.heroPortrait} src="/journey/main-dp-hero.jpg" alt="Vamshi, creative educator and AI builder" />
              <div className={styles.visualBadge}><span className={styles.onlineDot} /> Learn by making, with Vamshi</div>
              <div className={styles.visualTabs} aria-hidden="true"><span>DESIGN</span><span>3D</span><span>VIDEO</span><span>AI</span></div>
            </div>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>A CREATIVE STUDIO BOOTCAMP / VAMSHICREATES</p>
              <h1 id="hero-title">Make work people feel. <span>Build the skills behind it.</span></h1>
              <p className={styles.lede}>Go from idea to finished campaign across design, 3D, video, and AI. Learn the craft, build a portfolio, and create workflows that help you keep making.</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#interest">Register interest <ArrowRight size={17} /></a>
                <a className={styles.secondaryLink} href="#curriculum">Explore the curriculum <ArrowDown size={17} /></a>
              </div>
              <div className={styles.heroFacts} aria-label="Program overview">
                <div><strong>10 weeks</strong><span>Proposed program</span></div>
                <div><strong>8–10 hrs</strong><span>Weekly practice</span></div>
                <div><strong>6 projects</strong><span>Portfolio outcomes</span></div>
              </div>
            </div>
          </section>

          <section className={styles.intro} aria-labelledby="intro-title">
            <div>
              <p className={styles.eyebrow}>THE IDEA</p>
              <h2 id="intro-title">One creative practice. <span>Many ways to make.</span></h2>
            </div>
            <p>Most courses teach software one button at a time. Here, every tool serves a brief. You will learn to make intentional visuals, move them into 3D and video, then use AI to connect the process without handing over your taste.</p>
          </section>

          <section className={styles.stackSection} aria-labelledby="stack-title">
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>THE CREATIVE STACK</p><h2 id="stack-title">Tools with a purpose.</h2></div>
              <p>From first concept to final export.</p>
            </div>
            <div className={styles.stackGrid}>
              <div className={styles.stackItem}><span className={styles.stackIcon}><Monitor size={22} /></span><h3>Design</h3><p>Figma, Photoshop, Illustrator</p><small>Ideas, interfaces, imagery, identities</small></div>
              <div className={styles.stackItem}><span className={styles.stackIcon}><Layers3 size={22} /></span><h3>Make in 3D</h3><p>Blender</p><small>Modeling, lighting, motion, rendering</small></div>
              <div className={styles.stackItem}><span className={styles.stackIcon}><Clapperboard size={22} /></span><h3>Tell in motion</h3><p>DaVinci Resolve + AI video</p><small>Editing, sound, pacing, shot direction</small></div>
              <div className={styles.stackItem}><span className={styles.stackIcon}><Cpu size={22} /></span><h3>Work with AI</h3><p>LLMs + MCP connections</p><small>Research, iteration, connected workflows</small></div>
            </div>
          </section>

          <section className={styles.curriculumSection} id="curriculum" aria-labelledby="curriculum-title">
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>10-WEEK LEARNING PATH</p><h2 id="curriculum-title">What you’ll make, week by week.</h2></div>
              <p>Every week adds a skill and produces work you can show.</p>
            </div>
            <div className={styles.weekList}>
              {weeks.slice(0, expanded ? weeks.length : 5).map((week) => (
                <article className={styles.week} key={week.number}>
                  <span className={styles.weekNumber}>{week.number}</span>
                  <div><h3>{week.title}</h3><p>{week.detail}</p><span className={styles.weekTools}>{week.tools}</span></div>
                  <div className={styles.weekOutput}><span>YOU MAKE</span><strong>{week.output}</strong></div>
                </article>
              ))}
            </div>
            <button className={styles.showMore} onClick={() => setExpanded(!expanded)} type="button" aria-expanded={expanded}>
              {expanded ? "Show first five weeks" : "See all 10 weeks"} <ChevronDown size={17} className={expanded ? styles.rotated : ""} />
            </button>
          </section>

          <section className={styles.projectsSection} id="projects" aria-labelledby="projects-title">
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>PORTFOLIO, NOT JUST NOTES</p><h2 id="projects-title">Leave with things you made.</h2></div>
              <p>Six outputs that show range and process.</p>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project) => <article className={styles.project} key={project.title}><div className={styles.projectTop}><span>{project.icon}</span><small>{project.meta}</small></div><h3>{project.title}</h3><p>{project.description}</p></article>)}
            </div>
          </section>

          <section className={styles.formatSection} aria-labelledby="format-title">
            <div className={styles.formatCopy}><p className={styles.eyebrow}>HOW THE STUDIO WORKS</p><h2 id="format-title">Learn it. Make it. Get it reviewed. Make it better.</h2><p>Proposed weekly rhythm: one concept workshop, one guided build and critique, plus independent practice. Plan for 8–10 hours a week. The final week brings the pieces together in one capstone and process case study.</p><a href="#interest" className={styles.darkButton}>Get cohort updates <ArrowUpRight size={17} /></a></div>
            <div className={styles.formatSteps}><div><span>01</span><strong>Learn the craft</strong><p>Understand the idea and the tool behind it.</p></div><div><span>02</span><strong>Build from a brief</strong><p>Apply it to a real creative outcome.</p></div><div><span>03</span><strong>Review and refine</strong><p>Improve the work through critique and iteration.</p></div><div><span>04</span><strong>Publish your process</strong><p>Present what you made and how you made it.</p></div></div>
          </section>

          <section className={styles.requirementsSection} id="requirements" aria-labelledby="requirements-title">
            <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>BEFORE YOU JOIN</p><h2 id="requirements-title">Your setup matters.</h2></div><p>Check the essentials before you commit.</p></div>
            <div className={styles.requirementsGrid}>
              <article><div className={styles.requirementIcon}><Monitor size={22} /></div><h3>A capable computer</h3><p><strong>At least 16 GB RAM</strong> and a current laptop or desktop. For smoother Blender rendering and higher-resolution video, 32 GB RAM, fast SSD storage, and a capable GPU are recommended.</p></article>
              <article><div className={styles.requirementIcon}><Sparkles size={22} /></div><h3>An AI assistant</h3><p>Choose <strong>one paid AI path</strong>: a suitable ChatGPT or Claude plan, or Google AI Pro for Antigravity. Antigravity is an agent workspace rather than an LLM itself. We’ll confirm the required features before enrollment.</p></article>
              <article><div className={styles.requirementIcon}><PenTool size={22} /></div><h3>Creative software</h3><p>You’ll need access to <strong>Photoshop and Illustrator</strong>. Figma, Blender, and DaVinci Resolve are part of the workflow. AI video services may have separate usage costs.</p></article>
            </div>
            <p className={styles.requirementNote}>Exact software versions, licensing, and AI tool setup will be confirmed before enrollment.</p>
          </section>

          <section className={styles.interestSection} id="interest" aria-labelledby="interest-title">
            <div className={styles.interestCopy}><p className={styles.eyebrow}>NEXT COHORT</p><h2 id="interest-title">Make your next body of work here.</h2><p>Register interest and get the confirmed dates, fee, and enrollment details when they are ready.</p><div className={styles.interestPromise}><Check size={17} /> Curriculum and setup details before enrollment</div></div>
            <div className={styles.interestCard}>
              {status === "success" ? <div className={styles.success} role="status"><span><Check size={24} /></span><h3>You’re on the interest list.</h3><p>We’ll send the cohort details when they’re confirmed.</p></div> : <form onSubmit={submitInterest}>
                <h3>Keep me in the loop</h3><p>Share where to send the details.</p>
                <label htmlFor="bootcamp-name">Your name</label><input id="bootcamp-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                <label htmlFor="bootcamp-email">Email address</label><input id="bootcamp-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                <label htmlFor="bootcamp-interest">What do you most want to learn? <span>(optional)</span></label><select id="bootcamp-interest" name="interest" defaultValue=""><option value="">Choose an area</option><option>Design and branding</option><option>Blender and 3D</option><option>Video and AI video</option><option>AI and MCP workflows</option><option>The full creative stack</option></select>
                <button type="submit" className={styles.primaryButton} disabled={status === "loading"}>{status === "loading" ? "Saving…" : "Register interest"}<ArrowRight size={17} /></button>
                {status === "error" && <p className={styles.formError} role="alert">We couldn’t save your details. Please try again or email <a href="mailto:hello@vamshicreates.com">hello@vamshicreates.com</a>.</p>}
                <small>No payment today. We’ll only use your email for bootcamp updates.</small>
              </form>}
            </div>
          </section>

          <section className={styles.faqSection} id="faq" aria-labelledby="faq-title"><div><p className={styles.eyebrow}>A FEW GOOD QUESTIONS</p><h2 id="faq-title">Before you begin.</h2><p>Still curious? <a href="mailto:hello@vamshicreates.com?subject=Creative%20AI%20Bootcamp">Ask Vamshi directly <Mail size={15} /></a></p></div><div className={styles.faqList}>{faq.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>
        </main>

        <footer className={styles.footer}><div><Link className={styles.brand} href="/"><img src="/journey/main-dp-icon.jpg" alt="" width="34" height="34" /> VamshiCreates</Link><p>Practical AI. Creative work you can actually make.</p></div><div><Link href="/">Home</Link><Link href="/journey">My Journey</Link><Link href="/guides">Guides</Link><a href="mailto:hello@vamshicreates.com">Contact</a></div></footer>
      </div>
    </div>
  );
}

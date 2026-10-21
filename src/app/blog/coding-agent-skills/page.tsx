import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import BlogShell from "../BlogShell";
import styles from "./post.module.css";

const SITE_URL = "https://vamshicreates-web.vercel.app";
const PATH = "/blog/coding-agent-skills";
const COVER = "/blog/coding-agent-skills.svg";
const TITLE = "Coding Agent Skills: What They Are, How They Work, and Which Ones to Build";
const DESCRIPTION = "A practical guide to skills for Codex, Claude Code, Cursor, Gemini CLI, and other coding agents. Learn the basics, build better skills, and choose useful workflows for developers and designers.";
const PUBLISHED = "2026-10-21";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE + " | VamshiCreates",
  description: DESCRIPTION,
  keywords: ["coding agent skills", "Agent Skills", "SKILL.md", "Codex skills", "Claude Code skills", "Cursor skills", "Gemini CLI skills", "developer skills", "designer skills"],
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: PATH, siteName: "VamshiCreates",
    type: "article", publishedTime: PUBLISHED, authors: ["Vamshi Krishna"],
    images: [{ url: COVER, width: 1600, height: 900, alt: "Coding Agent Skills: reusable know-how for useful work" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [COVER] },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: TITLE,
  description: DESCRIPTION, image: SITE_URL + COVER, datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Vamshi Krishna", url: SITE_URL },
  publisher: { "@type": "Organization", name: "VamshiCreates", url: SITE_URL },
  mainEntityOfPage: SITE_URL + PATH,
};

const developerSkills = [
  { name: "Repository orientation", purpose: "Map the app, find the relevant files, read project instructions, and report what is understood before editing.", proof: "A short code map and a named change plan." },
  { name: "Feature delivery", purpose: "Turn a user story into a small implementation, check edge cases, and run the project's real build or test commands.", proof: "A working feature with evidence of the checks run." },
  { name: "Debugging", purpose: "Reproduce a failure, form a hypothesis, isolate the cause, fix it, and verify the same failure no longer occurs.", proof: "A root cause and a focused regression check." },
  { name: "Code review", purpose: "Look for broken behavior, security or data risks, accessibility gaps, and missing tests in a proposed change.", proof: "Findings tied to specific files and severity." },
  { name: "Release readiness", purpose: "Check configuration, migrations, build output, and the deployed page before calling work complete.", proof: "A verifiable release note and live check." },
];
const designerSkills = [
  { name: "Design system use", purpose: "Read colors, type, spacing, and component rules before inventing a new interface.", proof: "Screens that feel like the same product." },
  { name: "Responsive layout", purpose: "Review desktop and phone widths, long text, overflow, and touch targets.", proof: "Layouts that work beyond the ideal screenshot." },
  { name: "Accessibility review", purpose: "Inspect contrast, headings, labels, keyboard focus, and reduced motion.", proof: "A usable experience with concrete fixes." },
  { name: "Asset preparation", purpose: "Create or select images with the right crop, alt text, dimensions, and file size.", proof: "Clear visuals that do not slow the page unnecessarily." },
];
const creatorSkills = [
  { name: "Skill authoring", purpose: "Turn a repeated workflow into a specific trigger, ordered steps, and an explicit output.", proof: "A small SKILL.md another person can understand." },
  { name: "Skill validation", purpose: "Check folder shape, frontmatter, relative paths, and whether scripts run in a clean environment.", proof: "A skill that can be discovered and executed." },
  { name: "Skill evaluation", purpose: "Try prompts that should trigger the skill and prompts that should not; compare the resulting work.", proof: "Evidence that the skill improves the outcome." },
];

function RecommendationList({ items }: { items: { name: string; purpose: string; proof: string }[] }) {
  return <div className={styles.recommendationList}>{items.map((item) =>
    <div className={styles.recommendation} key={item.name}>
      <h4>{item.name}</h4><p>{item.purpose}</p><small><strong>Look for:</strong> {item.proof}</small>
    </div>
  )}</div>;
}

export default function CodingAgentSkillsArticle() {
  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className={styles.page}>
        <Link href="/blog" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> All blog posts</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>FIELD GUIDE / CODING AGENTS / SKILLS</p>
          <h1>{TITLE}</h1>
          <p className={styles.dek}>A beginner-friendly path into reusable agent workflows, followed by the practices that make them dependable for serious work.</p>
          <div className={styles.byline}>
            <img src="/journey/main-dp-icon.jpg" width={38} height={38} alt="" />
            <span><strong>Vamshi Krishna</strong><small>October 21, 2026</small></span>
            <span className={styles.readTime}><Clock3 size={15} aria-hidden="true" /> 11 min read</span>
          </div>
        </header>
        <Image className={styles.heroImage} src={COVER} alt="Coding Agent Skills: a task flows through SKILL.md instructions and checks to a verified result" width={1600} height={900} priority unoptimized sizes="(max-width: 1100px) 100vw, 1080px" />

        <div className={styles.readingLayout}>
          <nav className={styles.toc} aria-label="Article contents">
            <p>IN THIS GUIDE</p>
            <a href="#what-is-a-skill">What a skill is</a>
            <a href="#how-skills-work">How skills work</a>
            <a href="#beginner">Beginner: start well</a>
            <a href="#intermediate">Intermediate: make it reliable</a>
            <a href="#must-have">Skills worth building</a>
            <a href="#pro">Pro: evaluate and govern</a>
            <a href="#make-your-own">Make your first skill</a>
            <a href="#sources">Official sources</a>
          </nav>
          <div className={styles.body}>
            <div className={styles.intro}>
              <p>Most coding agents can read files, edit code, run commands, and explain results. A <strong>skill</strong> gives the agent a reusable way to do a particular kind of work. Think of it as a small playbook: when this task appears, follow these steps, use these references if needed, and show this evidence before saying it is done.</p>
              <p>This article is about skills for <strong>coding agents as a category</strong>, including Codex, Claude Code, Cursor, and Gemini CLI. You do not need to master every tool to benefit. The underlying idea is the same: package the parts of your workflow you keep repeating, then let the agent use them when relevant. The exact installation path, invocation command, and optional settings vary by product.</p>
            </div>

            <section id="what-is-a-skill" className={styles.section}>
              <p className={styles.kicker}>01 / THE FOUNDATION</p>
              <h2>What is a coding agent skill?</h2>
              <p>In the shared <a href="https://agentskills.io/specification" target="_blank" rel="noopener noreferrer">Agent Skills format</a>, a skill is a folder containing a <code>SKILL.md</code> file. Its required frontmatter gives the skill a <code>name</code> and a <code>description</code>; the rest of the file explains the workflow. The folder can also hold <code>scripts/</code>, <code>references/</code>, and <code>assets/</code>.</p>
              <p>The description matters because an agent uses it to decide whether the skill fits a request. The detailed instructions are loaded when the skill is used. This keeps a large library of skills from filling every conversation with instructions that are irrelevant to the current job.</p>
              <div className={styles.callout}><strong>A useful distinction</strong><p>A prompt asks for one piece of work. A project instruction file describes standing context for that project. A skill describes a repeatable procedure. A tool or MCP connection gives the agent a capability or access to data. The skill can tell the agent <em>how</em> to use available tools, but a Markdown file alone does not grant access to a browser, repository, or account.</p></div>
              <p>For example, “make this page mobile friendly” is a request. A responsive UI skill could teach an agent to inspect the current layout, check common phone widths, fix overflow and touch targets, and include screenshots or test results in its report. The same playbook can serve many pages.</p>
            </section>

            <section id="how-skills-work" className={styles.section}>
              <p className={styles.kicker}>02 / THE LOOP</p>
              <h2>How does a skill actually work?</h2>
              <div className={styles.flow} aria-label="The skill workflow">
                <div><span>01</span><strong>Task</strong><small>A person asks for an outcome.</small></div>
                <div><span>02</span><strong>Match</strong><small>The agent spots a relevant skill.</small></div>
                <div><span>03</span><strong>Work</strong><small>It follows the playbook and uses available tools.</small></div>
                <div><span>04</span><strong>Verify</strong><small>It checks the result and reports evidence.</small></div>
              </div>
              <p>A skill can be picked automatically when its description fits, or invoked directly when the product supports that. The common pattern is portable, but product details are not identical: <a href="https://learn.chatgpt.com/docs/build-skills" target="_blank" rel="noopener noreferrer">Codex</a>, <a href="https://code.claude.com/docs/en/skills" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://cursor.com/docs/skills" target="_blank" rel="noopener noreferrer">Cursor</a>, and <a href="https://geminicli.com/docs/cli/using-agent-skills/" target="_blank" rel="noopener noreferrer">Gemini CLI</a> document different discovery locations and invocation controls. Start with the plain shared format, then check your agent&apos;s documentation for its local setup.</p>
            </section>

            <section id="beginner" className={styles.section}>
              <p className={styles.kicker}>03 / BEGINNER</p>
              <h2>Start with one job you already repeat.</h2>
              <p>If you are new to skills, do not collect a hundred of them. Think about one task you ask an agent to do every week: review a pull request, prepare a blog image, check a page on mobile, or turn a bug report into a reproducible test. Write down the steps you would give a careful teammate.</p>
              <ol>
                <li><strong>Define the trigger.</strong> When should the agent use this workflow, and when should it leave it alone?</li>
                <li><strong>Define the input.</strong> Does it need a repository, URL, design file, error log, or user goal?</li>
                <li><strong>Define the steps.</strong> Give a short order of operations, with room for judgment.</li>
                <li><strong>Define “done.”</strong> Name the output and the evidence that proves it works.</li>
              </ol>
              <p>A good beginner skill might say: “Use this for responsive page reviews. Inspect the page at desktop and phone widths, identify overflow or unreadable controls, fix confirmed issues, and report the widths checked.” That is more useful than “make beautiful websites,” because the agent knows when to apply it and how to finish.</p>
              <p>If you still need to set up your coding agent, start with my <Link href="/guides/ai-agent-setup">AI agent setup guide</Link>. The skill is the workflow you add after the agent can already read your project and use its tools.</p>
            </section>

            <section id="intermediate" className={styles.section}>
              <p className={styles.kicker}>04 / INTERMEDIATE</p>
              <h2>Write skills that trigger correctly and finish cleanly.</h2>
              <p>Once you have a working first skill, improve its precision. A vague description causes missed opportunities or makes the skill appear on unrelated tasks. Name the job, the context, and a boundary: “Review React and Next.js pages for mobile layout, keyboard access, and visual regressions; use for page changes, not for backend-only work.”</p>
              <p>Keep <code>SKILL.md</code> lean. Move long API details into <code>references/</code>, reusable output files into <code>assets/</code>, and deterministic checks into <code>scripts/</code>. Give scripts clear inputs and helpful errors. That way the agent can read the core method first and fetch supporting material only when it needs it.</p>
              <div className={styles.doDont}>
                <div><strong>Effective skill</strong><p>“Before changing code, locate the owner component. Make the smallest coherent edit. Run the project build. Inspect the page at 390px and 1280px. Report the changed files and remaining limits.”</p></div>
                <div><strong>Weak skill</strong><p>“Always make everything premium. Use best practices. Check your work.” It has no clear trigger, sequence, or evidence.</p></div>
              </div>
              <p>Version skills with the repository when they express team conventions. Keep personal skills in your agent&apos;s user scope. Do not assume every vendor-specific frontmatter field will work elsewhere; the shared core is the safest starting point for portability.</p>
            </section>

            <section id="must-have" className={styles.section}>
              <p className={styles.kicker}>05 / THE PRACTICAL LIBRARY</p>
              <h2>Which skills are worth having?</h2>
              <p>These are <strong>my recommended starter sets</strong>, not a claim that every coding agent ships them. Pick the jobs your team actually repeats and build the smallest useful version first.</p>
              <h3>For developers</h3><RecommendationList items={developerSkills} />
              <h3>For designers and frontend teams</h3><RecommendationList items={designerSkills} />
              <h3>For people creating skills</h3><RecommendationList items={creatorSkills} />
              <p>One skill can serve more than one role. A responsive layout skill, for example, can guide a designer&apos;s review and a developer&apos;s implementation. What matters is a clear job and a checkable outcome.</p>
            </section>

            <section id="pro" className={styles.section}>
              <p className={styles.kicker}>06 / PRO</p>
              <h2>Treat skills like small products.</h2>
              <p>At a professional level, the question is not “How many skills do we have?” It is “Do they improve the work?” Test both <strong>selection</strong> and <strong>execution</strong>. Try realistic prompts that should call the skill, similar prompts that should not, and tasks with messy inputs. Compare the result with and without the skill. Claude Code&apos;s guidance makes this distinction explicitly; the same idea applies across agents.</p>
              <ul>
                <li><strong>Make repeatable steps deterministic.</strong> If a formatter, validator, or screenshot script can do the exact job, use it. Leave interpretation and tradeoffs to the agent.</li>
                <li><strong>Keep trust boundaries visible.</strong> Inspect third-party skills before installing them, especially bundled scripts. Do not put secrets in skill files. A skill should respect the host agent&apos;s permissions.</li>
                <li><strong>Design for composition.</strong> A feature-delivery skill may call on a design-review or release-check skill, but each should have one main responsibility.</li>
                <li><strong>Maintain them.</strong> Review skills when your stack, design system, or deployment process changes. An outdated playbook is worse than no playbook.</li>
                <li><strong>Measure the output.</strong> Track whether the skill reduced rework, missed fewer checks, or improved clarity. A successful trigger by itself proves little.</li>
              </ul>
              <p>This is also where skills become useful as team memory. A new teammate can see how your team ships, reviews, designs, and verifies work without learning every convention through trial and error.</p>
            </section>

            <section id="make-your-own" className={styles.section}>
              <p className={styles.kicker}>07 / BUILD ONE</p>
              <h2>A first skill you can create today.</h2>
              <p>Create a folder called <code>responsive-page-review</code> in the skills location supported by your agent, and add a <code>SKILL.md</code> file. The common core can be this small:</p>
              <pre className={styles.codeBlock}><code>{"---\nname: responsive-page-review\ndescription: Review website pages after UI changes for mobile layout, readability, keyboard access, and visual regressions. Use for page or component work; skip backend-only tasks.\n---\n\n# Responsive page review\n1. Identify the changed page and its design rules.\n2. Inspect the page at a phone width and a desktop width.\n3. Check overflow, text, focus, controls, and images.\n4. Fix confirmed issues and run the project's build.\n5. Report what changed, the widths checked, and any limits.\n"}</code></pre>
              <p>Now test it with “Review this new pricing page on mobile” and “Refactor this database query.” The first should fit; the second should not. Then try a real page and inspect whether the output includes the checks you asked for. Revise the description or steps based on what actually happened.</p>
              <div className={styles.callout}><strong>Remember</strong><p>A skill is a repeatable method, not a magic model upgrade. Clear tasks, suitable tools, current project context, and human review still matter.</p></div>
            </section>

            <section id="sources" className={styles.section}>
              <p className={styles.kicker}>OFFICIAL REFERENCES</p>
              <h2>Read the source for your agent.</h2>
              <p>Skill support changes over time. These official references explain the shared format and each product&apos;s current setup:</p>
              <ul className={styles.sourceList}>
                <li><a href="https://agentskills.io/specification" target="_blank" rel="noopener noreferrer">Agent Skills specification <ArrowUpRight size={15} aria-hidden="true" /></a></li>
                <li><a href="https://learn.chatgpt.com/docs/build-skills" target="_blank" rel="noopener noreferrer">OpenAI: Build skills for ChatGPT and Codex <ArrowUpRight size={15} aria-hidden="true" /></a></li>
                <li><a href="https://code.claude.com/docs/en/skills" target="_blank" rel="noopener noreferrer">Claude Code: Extend Claude with skills <ArrowUpRight size={15} aria-hidden="true" /></a></li>
                <li><a href="https://cursor.com/docs/skills" target="_blank" rel="noopener noreferrer">Cursor: Agent Skills <ArrowUpRight size={15} aria-hidden="true" /></a></li>
                <li><a href="https://geminicli.com/docs/cli/using-agent-skills/" target="_blank" rel="noopener noreferrer">Gemini CLI: Managing Agent Skills <ArrowUpRight size={15} aria-hidden="true" /></a></li>
              </ul>
            </section>

            <div className={styles.endNote}>
              <span>KEEP BUILDING</span>
              <p>Start with one repeated task. Turn it into a skill. Then check whether the work is better.</p>
              <div>
                <Link href="/guides/ai-agent-setup">Set up an AI agent <ArrowUpRight size={16} aria-hidden="true" /></Link>
                <Link href="/blog/llm">Explore the LLM articles <ArrowUpRight size={16} aria-hidden="true" /></Link>
                <Link href="/projects/how-to-build">See How 2 Build <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </BlogShell>
  );
}

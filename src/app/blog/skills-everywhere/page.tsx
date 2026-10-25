import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import BlogShell from "../BlogShell";
import styles from "../coding-agent-skills/post.module.css";
import { SITE_URL } from "@/config/site";

const PATH = "/blog/skills-everywhere";
const COVER = "/blog/skills-everywhere.jpg";
const REPO = "https://github.com/vamshicreates/skills-everywhere";
const TITLE = "Skills Everywhere: Share Your Skills Across Coding Agents";
const DESCRIPTION = "I built an open source Agent Skill that shares existing local skills across Codex, Claude Code, Antigravity, Cursor, and more through one installation.";
const PUBLISHED = "2026-10-22";
const INSTALL = "curl -fsSL https://raw.githubusercontent.com/vamshicreates/skills-everywhere/v0.1.0/install.sh | bash";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), title: TITLE + " | VamshiCreates", description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "article", siteName: "VamshiCreates",
    publishedTime: PUBLISHED, authors: ["Vamshi Krishna"], images: [{ url: COVER, width: 1600, height: 900, alt: "Skills Everywhere: one local skill library connected to coding agents" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [COVER] },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: TITLE, description: DESCRIPTION,
  image: SITE_URL + COVER, datePublished: PUBLISHED, dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Vamshi Krishna", url: SITE_URL },
  publisher: { "@type": "Organization", name: "VamshiCreates", url: SITE_URL }, mainEntityOfPage: SITE_URL + PATH,
};

export default function SkillsEverywhereArticle() {
  return <BlogShell>
    <article className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Link href="/blog" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> Back to the notebook</Link>
      <header className={styles.header}>
        <p className={styles.eyebrow}>BUILT IN PUBLIC / OPEN SOURCE</p>
        <h1>One skill library.<br />Across your coding agents.</h1>
        <p className={styles.dek}>Skills Everywhere turns the skills already on your computer into a shared local library. Install once, preserve your originals, and keep new skills available across your agents.</p>
        <div className={styles.byline}>
          <Image src="/journey/main-dp-icon.jpg" alt="Vamshi Krishna" width={38} height={38} />
          <span><strong>Vamshi Krishna</strong><small>22 October 2026 · VamshiCreates</small></span>
          <span className={styles.readTime}><Clock3 size={13} aria-hidden="true" /> 6 min read</span>
        </div>
      </header>
      <Image className={styles.heroImage} src={COVER} alt="Existing skill folders connect to a shared library, then to Codex, Claude Code, Antigravity, and other agents" width={1600} height={900} sizes="(max-width: 1100px) 100vw, 1080px" priority />
      <div className={styles.readingLayout}>
        <nav className={styles.toc} aria-label="Article contents">
          <p>IN THIS ARTICLE</p>
          <a href="#problem">The problem on my Mac</a>
          <a href="#how">How sharing works</a>
          <a href="#install">Install it once</a>
          <a href="#future">Add your next skill</a>
          <a href="#conflicts">Conflicts and undo</a>
          <a href="#limits">What sharing provides</a>
          <a href="#build">Build on it</a>
        </nav>
        <div className={styles.body}>
          <div className={styles.intro}>
            <p>I wanted the skills on my computer to be available to whichever coding agent I opened next. A useful workflow in Codex should also be easy to find from Claude Code or Antigravity.</p>
            <p>That led to <a href={REPO}>Skills Everywhere</a>: an open source Agent Skill with an installer that discovers existing skill bundles and links them into other agents&apos; global skill folders.</p>
          </div>
          <section id="problem" className={styles.section}>
            <p className={styles.kicker}>01 / THE STARTING POINT</p>
            <h2>The skills were already there.</h2>
            <p>My local setup had grown across several tools. Some skills lived in a shared <code>.agents</code> folder, others in Codex or Claude folders, and others alongside projects. Several agents already shared a small set, but their larger collections were separate.</p>
            <p>The first consolidation found <strong>897 skill names and 981 distinct instruction versions</strong> on this Mac. Those numbers describe my local inventory. The public repository contains the sharing tool and its own skill, rather than a collection of those third-party skills.</p>
            <p>I wanted to keep the original files, make the collection easier to discover, and avoid repeating the setup every time I added another skill. Once that worked locally, packaging the workflow as a skill was the next step.</p>
          </section>
          <section id="how" className={styles.section}>
            <p className={styles.kicker}>02 / THE MECHANISM</p>
            <h2>A common format, several discovery folders.</h2>
            <p>The <a href="https://agentskills.io/specification">Agent Skills specification</a> gives us a reusable bundle: a <code>SKILL.md</code> file, with optional scripts, references, and assets. Agents still have their own rules about where to discover those bundles.</p>
            <p>Skills Everywhere reads the existing folders, builds a library, then places symbolic links into the selected global locations. A symbolic link is a filesystem reference to another location. It lets an agent reach the shared bundle while its source files stay where they were.</p>
            <div className={styles.flow} aria-label="How Skills Everywhere shares skills">
              <div><span>01</span><strong>Discover</strong><small>Read existing agent skill folders.</small></div>
              <div><span>02</span><strong>Catalog</strong><small>Identify bundles and conflicting versions.</small></div>
              <div><span>03</span><strong>Link</strong><small>Add missing global registrations.</small></div>
              <div><span>04</span><strong>Refresh</strong><small>Pick up future changes and additions.</small></div>
            </div>
            <p>The adapters cover Codex, Claude Code, Cursor, Antigravity, Gemini CLI, OpenCode, Devin, Windsurf, Continue, Copilot, and the shared <code>~/.agents/skills</code> convention. The default destination set follows configuration folders already on your machine. You can explicitly prepare every supported destination.</p>
          </section>
          <section id="install" className={styles.section}>
            <p className={styles.kicker}>03 / TRY IT</p>
            <h2>One installation, with a plan you can inspect.</h2>
            <p>Version 0.1.0 requires Python 3.10 or newer, Git, and macOS or Linux/WSL. The installer creates an isolated Python environment and installs its pinned YAML parser.</p>
            <pre className={styles.codeBlock}><code>{INSTALL}</code></pre>
            <p>If you prefer to inspect the code first, clone the tagged release and run the installer from the checkout:</p>
            <pre className={styles.codeBlock}><code>{"git clone --branch v0.1.0 https://github.com/vamshicreates/skills-everywhere.git\ncd skills-everywhere\nbash install.sh"}</code></pre>
            <p>On macOS, setup enables a user LaunchAgent that refreshes sharing at login and every five minutes. Linux and WSL users can run the foreground watcher. Start a new agent conversation, or restart the agent, when its discovered skill list needs to refresh.</p>
            <p>The repository also has a standard root <code>SKILL.md</code>. Install it with your normal skill installer, then ask your coding agent to use Skills Everywhere to inspect and share your library.</p>
          </section>
          <section id="future" className={styles.section}>
            <p className={styles.kicker}>04 / EVERYDAY USE</p>
            <h2>Add the next skill in one place.</h2>
            <p>After setup, put a new skill in the library&apos;s inbox:</p>
            <pre className={styles.codeBlock}><code>{"~/.local/share/skills-everywhere/inbox/my-skill/\n├── SKILL.md\n└── scripts/"}</code></pre>
            <p>The next refresh discovers it. Skills newly installed in a recognized agent folder are picked up too. Shared manifests update during a refresh, and supporting files remain linked to their sources.</p>
            <p>Project collections are added explicitly. The default scan covers agent skill folders, so a project-specific workflow stays local unless you choose to include its folder.</p>
            <pre className={styles.codeBlock}><code>{"# Preview without writing files\n~/.local/share/skills-everywhere/skills-everywhere plan\n\n# Include your own collection and refresh\n~/.local/share/skills-everywhere/skills-everywhere --source ~/my-skills sync\n\n# Inspect recorded registrations\n~/.local/share/skills-everywhere/skills-everywhere status"}</code></pre>
          </section>
          <section id="conflicts" className={styles.section}>
            <p className={styles.kicker}>05 / KEEP YOUR WORK</p>
            <h2>Different versions stay available.</h2>
            <p>Two folders called <code>review</code> can contain different instructions. They can also have identical instructions and different helper scripts. The installer fingerprints supporting files as well as the skill manifest, then gives distinct bundles hash-suffixed names.</p>
            <p>Existing files and links keep their current paths. Where an agent already has a short name, that entry retains its meaning. The explicit variants let you select a particular bundle across destinations.</p>
            <p>The installer records the links it creates. During uninstall, it removes a global registration only if that link still matches its recorded target. Original skills, links you have changed, and the local library are preserved.</p>
            <pre className={styles.codeBlock}><code>{"~/.local/share/skills-everywhere/skills-everywhere uninstall"}</code></pre>
            <p>The test suite checks repeated installs, future additions, conflicting bundles, invalid metadata, interrupted installs, and preservation during undo. These checks use temporary home directories.</p>
          </section>
          <section id="limits" className={styles.section}>
            <p className={styles.kicker}>06 / COMPATIBILITY</p>
            <h2>Share the method. Check the dependencies.</h2>
            <p>A skill can tell an agent how to edit a video, create a design, or deploy a site. The agent still needs the corresponding binaries, MCP connections, accounts, permissions, and app-specific APIs.</p>
            <p>For example, sharing a skill that expects a particular design connector makes its instructions accessible elsewhere. It does not establish that connector in another agent. A skill tied to one host may need adaptation before it runs successfully in another.</p>
            <div className={styles.callout}><strong>What has been verified</strong><p>The release includes filesystem tests for discovery, sharing, and undo, with CI configured for macOS and Linux. This is not an end-to-end invocation test in every supported agent. Local folders also do not synchronize to cloud sessions or other machines.</p></div>
            <p>Tools such as <a href="https://github.com/vercel-labs/skills">Vercel&apos;s Skills CLI</a> already help install skills from repositories. Skills Everywhere focuses on the collection already on your machine and keeps sharing that collection across your local tools.</p>
          </section>
          <section id="build" className={styles.section}>
            <p className={styles.kicker}>07 / OPEN SOURCE</p>
            <h2>Try it with your own collection.</h2>
            <p>The source, installer, Agent Skill, test suite, compatibility notes, and MIT license are on GitHub. Your skills stay on your computer; the installer does not upload them.</p>
            <p>I would like to hear where discovery paths differ, which adapters need updating, and which real workflows travel well between agents. A useful report includes the agent version, the expected folder, and a small skill that reproduces the issue.</p>
            <ul className={styles.sourceList}>
              <li><a href={REPO}>Get Skills Everywhere on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></li>
              <li><a href={`${REPO}/blob/main/docs/compatibility.md`}>Read compatibility notes and official references <ArrowUpRight size={15} aria-hidden="true" /></a></li>
              <li><Link href="/blog/coding-agent-skills">New to skills? Start with the guide <ArrowUpRight size={15} aria-hidden="true" /></Link></li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  </BlogShell>;
}

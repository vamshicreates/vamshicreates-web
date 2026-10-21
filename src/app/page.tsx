import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Workflow,
  MessageCircle,
  Check,
  GraduationCap,
  FileText,
} from "lucide-react";
import styles from "./home.module.css";
import BuilderPaths from "@/components/BuilderPaths";
import BuilderNewsletter from "@/components/BuilderNewsletter";

const EMAIL = "hello@vamshicreates.tech";

function emailLink(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <div className={styles.container}>
        <header className={styles.navigation}>
          <Link className={styles.brand} aria-label="VamshiCreates home" href="/">
            <img
              alt=""
              width={36}
              height={36}
              className={styles.brandMark}
              src="/journey/main-dp-icon.jpg"
            />
            VamshiCreates
          </Link>

          <nav aria-label="Main navigation" className={styles.navLinks}>
            <Link href="/journey">Journey</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/blog">Blog</Link>
            <a href="#consultation">Consulting</a>
          </nav>

          <a href={emailLink("Let's build something", "Hi Vamshi,\n\nI have an idea I would like to discuss:\n\n")} className={styles.navCta}>
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </header>

        <main id="main">
          {/* HERO SECTION */}
          <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.portraitWrap}>
              <img alt="Vamshi Krishna" width={572} height={610} className={styles.portrait} src="/journey/main-dp-hero.jpg" />
              <div className={styles.portraitCaption}>
                <span className={styles.captionDot} /> Engineer. Creator. Builder.
              </div>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>VAMSHI CREATES / FOR PEOPLE WHO BUILD</p>
              <h1 id="hero-title">
                Building tech solutions
                <br />
                <span>for real-world problem statements.</span>
              </h1>
              <p className={styles.heroDescription}>I’m Vamshi Krishna. I build websites, AI tools, and automations, and share the research and practical steps behind them. Find your next idea with What 2 Build. Make it real with How 2 Build.</p>

              <div className={styles.heroActions}>
                <a href="#start-building" className={styles.primaryButton}>Choose your starting point <ArrowRight size={17} aria-hidden="true" /></a>
                <Link href="/projects/what-to-build/portfolio" className={styles.textLink}>See what I’ve shipped <ArrowUpRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          </section>

          <BuilderPaths />
          <BuilderNewsletter source="home" />

          {/* CONSULTING */}
          <section
            id="consultation"
            className={`${styles.showcase} ${styles.consultationSection}`}
            aria-labelledby="consultation-title"
          >
            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>AI AUTOMATION LEAD FOR YOUR STARTUP</p>
              <h2 id="consultation-title">
                Bring me your
                <br />problem statement.
              </h2>
              <p>
                I’ll work through it with you and suggest practical AI use cases you can
                actually put to work. We can discuss what to build, how it should fit your
                team, and the next steps to make it happen.
              </p>

              <a href={emailLink("AI automation for my startup", "Hi Vamshi,\n\nMy startup's problem statement is:\n\nWhat we have tried so far:\n\n")} className={styles.primaryButton}>
                Send an email <Mail size={17} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.consultationVisual}>
              <img
                alt="Vamshi Krishna at his desk"
                width={1200}
                height={797}
                className={styles.offerImage}
                src="/journey/main-dp-showcase.jpg"
              />

              <div className={styles.sessionCard}>
                <div className={styles.sessionHost}>
                  <img
                    src="/journey/main-dp-icon.jpg"
                    alt=""
                    width={42}
                    height={42}
                    className="h-10.5 w-10.5 shrink-0 rounded-full object-cover border-2 border-teal-500"
                  />
                  <div>
                    <strong>Work with Vamshi</strong>
                    <span>From problem statement to practical use cases</span>
                  </div>
                  <MessageCircle size={22} aria-hidden="true" />
                </div>

                <p className={styles.eyebrow}>WHAT WE CAN WORK THROUGH</p>

                <div className={styles.agendaRow}>
                  <span>01</span>
                  Your startup’s problem
                  <Check size={16} aria-hidden="true" />
                </div>
                <div className={styles.agendaRow}>
                  <span>02</span>
                  Useful AI opportunities
                  <Check size={16} aria-hidden="true" />
                </div>
                <div className={styles.agendaRow}>
                  <span>03</span>
                  A realistic path to build
                  <Check size={16} aria-hidden="true" />
                </div>

              </div>
            </div>
          </section>

          <section id="agent-setup" className={styles.guideSection} aria-labelledby="agent-setup-title">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>A PRACTICAL PLACE TO START</p>
                <h2 id="agent-setup-title">Set up your AI agent.</h2>
              </div>
              <div>
                <p>Use the agent you prefer. The same foundations help you get useful work done.</p>
                <Link className={styles.textLink} href="/guides/ai-agent-setup">
                  Read the full setup guide <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.guideGrid}>
              <Link className={styles.guideCard} href="/guides/ai-agent-setup">
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}><GraduationCap size={22} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className={styles.freeTag}>01</span>
                </div>
                <span className={styles.guideCategory}>Choose &amp; install</span>
                <h3>Start with your agent</h3>
                <p>Codex, Claude Code, Gemini CLI, Cursor, or another tool: install from its official source and open your project.</p>
                <span className={styles.guideCardCta}>See setup steps <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
              <Link className={styles.guideCard} href="/guides/ai-agent-setup">
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}><FileText size={22} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className={styles.freeTag}>02</span>
                </div>
                <span className={styles.guideCategory}>Give it context</span>
                <h3>Tell it what matters</h3>
                <p>Put your goal, audience, constraints, and definition of done in one place so any agent can understand the work.</p>
                <span className={styles.guideCardCta}>See context template <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
              <Link className={styles.guideCard} href="/guides/ai-agent-setup">
                <div className={styles.guideCardTop}>
                  <span className={styles.guideIcon}><Workflow size={22} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className={styles.freeTag}>03</span>
                </div>
                <span className={styles.guideCategory}>Build &amp; verify</span>
                <h3>Make the first useful thing</h3>
                <p>Give your agent a small task, review the result, and add skills or tools only when the workflow needs them.</p>
                <span className={styles.guideCardCta}>See first task <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className={styles.faqSection} aria-labelledby="faq-title">
            <div>
              <p className={styles.eyebrow}>BEFORE YOU GET STARTED</p>
              <h2 id="faq-title">A few good questions.</h2>
              <p>
                Still wondering about something?
                <br />
                <a href={`mailto:${EMAIL}`} className={styles.textLink}>
                  Send me an email <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className={styles.faqList}>
              <details>
                <summary>Where should I start as a solo builder?<span aria-hidden="true">+</span></summary>
                <p>Start with <Link href="/projects/what-to-build#sample-opportunity">What 2 Build</Link> to explore a buyer and test an idea. If you already have a problem in mind, try the free <Link href="/projects/how-to-build#sample-build">How 2 Build walkthrough</Link>. Both are projects by Vamshi Creates, and their first samples are open to everyone.</p>
              </details>
              <details>
                <summary>
                  What kind of projects do you build?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Websites, AI agents, useful automations, and creative tools. <Link href="/projects">See my projects</Link> for examples.
                </p>
              </details>

              <details>
                <summary>
                  Do I need a detailed technical brief?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  No. Send the problem in your own words. We can find the right use case and scope together.
                </p>
              </details>

              <details>
                <summary>
                  Can you help my startup find AI use cases?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. Tell me what your team does, where work gets stuck, and what you want to improve. I’ll suggest practical options.
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
              VamshiCreates
              <span className={styles.captionDot}></span>
            </Link>
            <p>Ideas into useful things.</p>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/journey">Journey</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/blog">Blog</Link>
            <a href="https://github.com/vamshicreates" rel="me">GitHub</a>
            <a href="#consultation">Consulting</a>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <span className={styles.copyright}>
            © 2026 @vamshicreates
          </span>
        </footer>
      </div>

    </div>
  );
}

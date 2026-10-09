import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Mail,
  Users,
  Workflow,
  MessageCircle,
  Check,
  GraduationCap,
  FileText,
} from "lucide-react";
import styles from "./home.module.css";

const EMAIL = "hello@vamshicreates.com";

function emailLink(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const projects = [
  {
    title: "Movie Draft",
    kind: "Live website · multiplayer game",
    description: "A Telugu cinema draft and auction game with shared rooms, live bidding, and a solo AI opponent.",
    image: "/projects/movie-draft.svg",
    imageAlt: "Illustration of a Movie Draft auction screen",
    live: "https://movie-draft-phi.vercel.app",
    code: "https://github.com/vamshicreates/movie-draft",
  },
  {
    title: "Cricket Draft",
    kind: "Live website · multiplayer game",
    description: "A browser based cricket auction where friends build teams from a worldwide player catalog.",
    image: "/projects/cricket-draft.svg",
    imageAlt: "Illustration of a Cricket Draft auction screen",
    live: "https://cricket-draft-hazel.vercel.app",
    code: "https://github.com/vamshicreates/cricket-draft",
  },
  {
    title: "Logo Cleaner",
    kind: "Live website · creative tool",
    description: "A focused web tool for removing logos from video. Built to turn an editing problem into a usable product.",
    image: "/projects/logo-cleaner.svg",
    imageAlt: "Illustration of a video editing canvas with a clean frame",
    live: "https://logo-cleaner-web.vercel.app",
    code: null,
  },
  {
    title: "Podcast Editor",
    kind: "AI agent skill · open source",
    description: "An AI assisted multicamera podcast editing workflow for Premiere Pro and DaVinci Resolve.",
    image: "/projects/podcast-editor.svg",
    imageAlt: "Illustration of a podcast editing timeline",
    live: null,
    code: "https://github.com/vamshicreates/podcast-editor",
  },
  {
    title: "Image to Blender",
    kind: "AI agent skill · open source",
    description: "Turns reference images into 3D Blender scenes with an agent skill and automated setup.",
    image: "/projects/image-to-blender.svg",
    imageAlt: "Illustration of an image turning into a three dimensional object",
    live: null,
    code: "https://github.com/vamshicreates/image-to-blender",
  },
];

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
            <Link href="/journey">My Journey</Link>
            <a href="#projects">My Projects</a>
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
              <p className={styles.eyebrow}>NOW YOU CAN BUILD ANYTHING</p>
              <h1 id="hero-title">
                Hi, I’m Vamshi Krishna.
                <br />
                <span>Let’s build anything you think of.</span>
              </h1>
              <p className={styles.heroDescription}>I build useful websites, AI agents, and automations. Bring me an idea or a problem, and let’s turn it into something real.</p>

              <div className={styles.heroActions}>
                <a href="#projects" className={styles.primaryButton}>
                  Explore projects I built <ArrowDown size={17} aria-hidden="true" />
                </a>
                <Link href="/journey" className={styles.textLink}>
                  My Journey <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section id="projects" className={styles.projectsSection} aria-labelledby="projects-title">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>SELECTED WORK</p>
                <h2 id="projects-title">My Projects</h2>
              </div>
              <div>
                <p>Websites you can try and AI agent skills you can explore.</p>
                <a className={styles.textLink} href="https://github.com/vamshicreates" target="_blank" rel="noopener noreferrer">
                  More on GitHub <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <article className={styles.projectCard} key={project.title}>
                  <img className={styles.projectImage} src={project.image} alt={project.imageAlt} width={720} height={460} loading="lazy" />
                  <div className={styles.projectContent}>
                    <p className={styles.eyebrow}>{project.kind}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectLinks}>
                      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={15} aria-hidden="true" /></a>}
                      {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 01 / MASTER AND MONETIZE AI */}
          <section
            id="master-ai"
            className={`${styles.showcase} ${styles.communitySection}`}
            aria-labelledby="master-title"
          >
            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>01 / MASTER AND MONETIZE AI</p>
              <h2 id="master-title">
                Build useful AI agents.
                <br />
                With me in your corner.
              </h2>
              <p>
                Learn how to design and build AI agents around real problems. I’ll help you
                move from an idea to a working use case, whichever tools fit the job.
              </p>

              <ul className={styles.features}>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Practical guidance from first idea to working agent</span>
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Useful workflows and real use cases</span>
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  <span>Help when you get stuck</span>
                </li>
              </ul>

              <a href={emailLink("Master and Monetize AI", "Hi Vamshi,\n\nI want to learn how to build AI agents. Here is what I am working on:\n\n")} className={styles.primaryButton}>
                Send an email <Mail size={17} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.communityVisual}>
              <div className={styles.skoolImageLink}>
                <img
                  alt="Vamshi Krishna"
                  width={720}
                  height={383}
                  className={styles.skoolImage}
                  src="/journey/dp-1-showcase.jpg"
                />
              </div>

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

              <div className={styles.review}>
                <p className={styles.pendingReview}>Testimonial text coming soon.</p>
                <div className={styles.reviewPerson}>
                  <span className={styles.reviewAvatar}>SV</span>
                  <span><strong>Satish Varma</strong><small>Velpula Mama</small></span>
                </div>
              </div>
            </div>
          </section>

          {/* 02 / CUSTOM BUILDS SECTION */}
          <section
            id="custom-builds"
            className={styles.showcase}
            aria-labelledby="custom-title"
          >
            <div className={styles.automationVisual}>
              <img
                alt="Vamshi Krishna"
                width={1200}
                height={960}
                className={styles.offerImage}
                src="/journey/dp-1-showcase.jpg"
              />
              <div className={styles.workflowSteps}>
                <span>Your idea</span>
                <ArrowRight size={16} aria-hidden="true" />
                <span>A useful AI agent</span>
              </div>
            </div>

            <div className={styles.showcaseCopy}>
              <p className={styles.eyebrow}>02 / BUILT FOR YOUR BUSINESS</p>
              <h2 id="custom-title">
                Let’s build what your
                <br />
                business needs.
              </h2>
              <p>
                From a single repetitive task to a full workflow, I build AI agents and
                automations around your goals. Tell me the problem and I’ll find a practical
                way forward.
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

              <a href={emailLink("Build an AI agent for my business", "Hi Vamshi,\n\nHere is the problem I want to solve:\n\nMy current workflow:\n\n")} className={styles.primaryButton}>
                Send an email <Mail size={17} aria-hidden="true" />
              </a>
            </div>
          </section>

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
                <summary>
                  What kind of projects do you build?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Websites, AI agents, useful automations, and creative tools. <a href="#projects">See my projects</a> for examples.
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
            <Link href="/journey">My Journey</Link>
            <a href="#projects">My Projects</a>
            <a href="#consultation">Consulting</a>
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

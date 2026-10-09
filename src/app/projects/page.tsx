import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import homeStyles from "@/app/home.module.css";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "My Projects | VamshiCreates",
  description:
    "Explore live websites and open source AI agent skills built by Vamshi Krishna.",
  openGraph: {
    title: "My Projects | VamshiCreates",
    description: "Live websites and AI agent skills built by Vamshi Krishna.",
    images: ["/projects/movie-draft-ai.jpg"],
  },
};

function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className={styles.projectCard}>
      <img
        className={styles.projectImage}
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={800}
        loading={priority ? "eager" : "lazy"}
      />
      <div className={styles.projectContent}>
        <div className={styles.projectCopy}>
          <p className={styles.projectKind}>{project.kind}</p>
          <h3>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
        <div className={styles.projectLinks}>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} website`}>
              View Website <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : project.code ? (
            <a href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              View GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className={`${homeStyles.page} ${styles.page}`}>
      <a href="#main" className={homeStyles.skipLink}>Skip to content</a>
      <div className={homeStyles.container}>
        <header className={homeStyles.navigation}>
          <Link className={homeStyles.brand} aria-label="VamshiCreates home" href="/">
            <img alt="" width={36} height={36} className={homeStyles.brandMark} src="/journey/main-dp-icon.jpg" />
            VamshiCreates
          </Link>
          <nav aria-label="Main navigation" className={homeStyles.navLinks}>
            <Link href="/journey">My Journey</Link>
            <Link href="/projects" aria-current="page" className={styles.activeNav}>My Projects</Link>
            <Link href="/#consultation">Consulting</Link>
          </nav>
          <a href="mailto:hello@vamshicreates.com?subject=Let%27s%20build%20something" className={homeStyles.navCta}>
            Get in touch <Mail size={15} aria-hidden="true" />
          </a>
        </header>

        <main id="main">
          <section className={styles.hero} aria-labelledby="projects-title">
            <div className={styles.heroOrb} aria-hidden="true" />
            <p className={styles.eyebrow}>LIVE PRODUCTS / OPEN SOURCE SKILLS</p>
            <h1 id="projects-title">My <span>Projects.</span></h1>
            <p className={styles.heroCopy}>
              Games, creative tools, and AI agent skills I’ve taken from an idea to something people can use.
            </p>
            <div className={styles.heroActions}>
              <Link href="/" className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
              <a href="https://github.com/vamshicreates" target="_blank" rel="noopener noreferrer">
                All my GitHub work <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>

          <section className={styles.collection} aria-labelledby="websites-title">
            <div className={styles.sectionIntro}>
              <div><p className={styles.eyebrow}>01 / LIVE ON THE WEB</p><h2 id="websites-title">Websites I shipped</h2></div>
              <p>Open a project and try it for yourself.</p>
            </div>
            <div className={styles.projectGrid}>
              {PROJECTS.filter((project) => project.live).map((project, index) => (
                <ProjectCard key={project.title} project={project} priority={index === 0} />
              ))}
            </div>
          </section>

          <section className={styles.collection} aria-labelledby="skills-title">
            <div className={styles.sectionIntro}>
              <div><p className={styles.eyebrow}>02 / OPEN SOURCE WORKFLOWS</p><h2 id="skills-title">AI agent skills I built</h2></div>
              <p>Explore the source and see how each skill works.</p>
            </div>
            <div className={styles.projectGrid}>
              {PROJECTS.filter((project) => !project.live).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section className={styles.contact} aria-labelledby="contact-title">
            <p className={styles.eyebrow}>HAVE SOMETHING IN MIND?</p>
            <h2 id="contact-title">Let’s build your next idea.</h2>
            <p>Tell me the problem you want to solve. I’ll help you find a practical way to make it real.</p>
            <a href="mailto:hello@vamshicreates.com?subject=My%20project%20idea" className={homeStyles.primaryButton}>
              Send an email <Mail size={17} aria-hidden="true" />
            </a>
          </section>
        </main>

        <footer className={homeStyles.footer}>
          <div>
            <Link className={homeStyles.brand} href="/">
              <img alt="" width={32} height={32} className={homeStyles.brandMark} src="/journey/main-dp-icon.jpg" />
              VamshiCreates<span className={homeStyles.captionDot} />
            </Link>
            <p>Ideas into useful things.</p>
          </div>
          <div className={homeStyles.footerLinks}>
            <Link href="/journey">My Journey</Link>
            <Link href="/projects">My Projects</Link>
            <Link href="/#consultation">Consulting</Link>
            <a href="mailto:hello@vamshicreates.com">hello@vamshicreates.com</a>
          </div>
          <span className={homeStyles.copyright}>© 2026 @vamshicreates</span>
        </footer>
      </div>
    </div>
  );
}

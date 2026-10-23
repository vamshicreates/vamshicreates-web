import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectsShell from "./ProjectsShell";
import styles from "./projects.module.css";
import BuilderNewsletter from "@/components/BuilderNewsletter";

export const metadata: Metadata = {
  title: "Projects | Shipped Work, What 2 Build & How 2 Build | VamshiCreates",
  description: "Explore projects built by Vamshi Krishna, alongside What 2 Build and How 2 Build frameworks.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | VamshiCreates",
    description: "Find the right problem. Build and launch a useful product.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <ProjectsShell>
      {/* PROJECTS I BUILT */}
      <section className={styles.portfolioHero} aria-labelledby="portfolio-title">
        <p className={styles.eyebrow}>PORTFOLIO / SHIPPED PRODUCTS</p>
        <h1 id="portfolio-title">Projects I built<span>.</span></h1>
        <p>Each product began with a real problem statement. See what was built, why it exists, and explore each live website.</p>
      </section>

      <section className={styles.collection} aria-labelledby="shipped-projects-title">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>SHIPPED PRODUCTS</p>
            <h2 id="shipped-projects-title">Live websites &amp; tools</h2>
          </div>
          <p>Explore each product on its live website.</p>
        </div>
        <div className={styles.projectGrid}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} mode="what" priority={index === 0} />
          ))}
        </div>
      </section>

      {/* THE TWO PROJECTS I AM BUILDING AROUND */}
      <section className={styles.focusHero} aria-labelledby="projects-title" style={{ marginTop: "90px" }}>
        <p className={styles.eyebrow}>THE TWO PROJECTS I AM BUILDING AROUND</p>
        <h2 id="projects-title">Find the right idea.<br /><span>Bring it to life.</span></h2>
        <p>My work follows one path: understand what is worth building, then learn how to build it well. Choose where you want to start.</p>
      </section>

      <section className={styles.initiativeGrid} aria-label="Explore the two projects">
        <article className={styles.initiativeCard}>
          <div className={styles.cardTopline}><span>01 / DISCOVER</span><span>RESEARCH + FREE SAMPLE</span></div>
          <div className={styles.initiativeVisual} aria-hidden="true">
            <span className={styles.visualKicker}>FROM SIGNAL TO IDEA</span>
            <div className={styles.signalRows}><span>Real problem <b>01</b></span><span>Buyer evidence <b>02</b></span><span>Small test <b>03</b></span></div>
          </div>
          <div className={styles.initiativeBody}>
            <h2>What 2 Build<span>.</span></h2>
            <p>Research real products and buyer problems, compare the evidence, and choose an idea worth testing before you write code.</p>
            <ul><li>SaaS opportunity radar</li><li>Source-linked builder stories</li><li>Buyer interviews & pricing tests</li></ul>
            <Link href="/projects/what-to-build" className={styles.initiativeLink}>Explore What 2 Build <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </article>

        <article className={`${styles.initiativeCard} ${styles.howCard}`}>
          <div className={styles.cardTopline}><span>02 / MAKE IT REAL</span><span>FIRST WALKTHROUGH LIVE</span></div>
          <div className={styles.initiativeVisual} aria-hidden="true">
            <span className={styles.visualKicker}>FROM IDEA TO LAUNCH</span>
            <div className={styles.pathLine}><span>Validate</span><i /><span>Scope</span><i /><span>Build</span><i /><span>Launch</span></div>
          </div>
          <div className={styles.initiativeBody}>
            <h2>How 2 Build<span>.</span></h2>
            <p>Turn a validated idea into a working product through clear stages, practical tasks, decision points, and examples from things I have shipped.</p>
            <ul><li>Guided product path</li><li>Build, price & find first users</li><li>Shipped work as proof</li></ul>
            <Link href="/projects/how-to-build" className={styles.initiativeLink}>Explore How 2 Build <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </article>
      </section>

      <p className={styles.bridgeNote}>Find a problem <ArrowRight size={15} aria-hidden="true" /> test the idea <ArrowRight size={15} aria-hidden="true" /> build something useful.</p>
      <BuilderNewsletter source="projects" />
    </ProjectsShell>
  );
}

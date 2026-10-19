import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectsShell from "./ProjectsShell";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects | What to Build & How to Build | VamshiCreates",
  description: "Two connected projects by Vamshi Krishna: find a worthwhile product opportunity with What to Build, then follow a practical path to launch with How to Build.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "What to Build & How to Build | VamshiCreates",
    description: "Find the right problem. Build and launch a useful product.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <ProjectsShell>
      <section className={styles.focusHero} aria-labelledby="projects-title">
        <p className={styles.eyebrow}>THE TWO PROJECTS I AM BUILDING AROUND</p>
        <h1 id="projects-title">Find the right idea.<br /><span>Bring it to life.</span></h1>
        <p>My work follows one path: understand what is worth building, then learn how to build it well. Choose where you want to start.</p>
      </section>

      <section className={styles.initiativeGrid} aria-label="Explore the two projects">
        <article className={styles.initiativeCard}>
          <div className={styles.cardTopline}><span>01 / DISCOVER</span><span>LIVE RESEARCH</span></div>
          <div className={styles.initiativeVisual} aria-hidden="true">
            <span className={styles.visualKicker}>FROM SIGNAL TO IDEA</span>
            <div className={styles.signalRows}><span>Real problem <b>01</b></span><span>Buyer evidence <b>02</b></span><span>Small test <b>03</b></span></div>
          </div>
          <div className={styles.initiativeBody}>
            <h2>What to Build<span>.</span></h2>
            <p>Research real products and buyer problems, compare the evidence, and choose an idea worth testing before you write code.</p>
            <ul><li>SaaS opportunity radar</li><li>Source-linked builder stories</li><li>Practical validation guides</li></ul>
            <Link href="/projects/what-to-build" className={styles.initiativeLink}>Explore What to Build <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </article>

        <article className={`${styles.initiativeCard} ${styles.howCard}`}>
          <div className={styles.cardTopline}><span>02 / MAKE IT REAL</span><span>GUIDED BUILD</span></div>
          <div className={styles.initiativeVisual} aria-hidden="true">
            <span className={styles.visualKicker}>FROM IDEA TO LAUNCH</span>
            <div className={styles.pathLine}><span>Validate</span><i /><span>Scope</span><i /><span>Build</span><i /><span>Launch</span></div>
          </div>
          <div className={styles.initiativeBody}>
            <h2>How to Build<span>.</span></h2>
            <p>Turn a validated idea into a working product through clear stages, practical tasks, decision points, and examples from things I have shipped.</p>
            <ul><li>Guided product path</li><li>Hands-on build steps</li><li>Shipped work as proof</li></ul>
            <Link href="/projects/how-to-build" className={styles.initiativeLink}>Explore How to Build <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </article>
      </section>

      <p className={styles.bridgeNote}>Find a problem <ArrowRight size={15} aria-hidden="true" /> test the idea <ArrowRight size={15} aria-hidden="true" /> build something useful.</p>
    </ProjectsShell>
  );
}

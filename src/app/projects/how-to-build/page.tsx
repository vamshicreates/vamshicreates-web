import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectsShell from "../ProjectsShell";
import styles from "../projects.module.css";

const featured = PROJECTS.filter((project) => project.live).slice(0, 3);
const websiteCount = PROJECTS.filter((project) => project.live).length;
const skillCount = PROJECTS.length - websiteCount;

export const metadata: Metadata = {
  title: "How to Build | VamshiCreates",
  description: "A guided path from validated idea to useful software: scope, pilot, build, test, launch, and learn from shipped projects.",
  alternates: { canonical: "/projects/how-to-build" },
  openGraph: { title: "How to Build | VamshiCreates", description: "A practical path from idea to launch, backed by shipped work.", url: "/projects/how-to-build" },
};

export default function HowToBuildPage() {
  return (
    <ProjectsShell>
      <section className={styles.detailHero} aria-labelledby="how-title">
        <Link href="/projects" className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> The two projects</Link>
        <p className={styles.eyebrow}>02 / TURN AN IDEA INTO A PRODUCT</p>
        <h1 id="how-title">How to Build<span>.</span></h1>
        <p>A guided path for taking one validated problem from first conversation to a working, tested product. Each stage has a task, a deliverable, and a decision to make before moving on.</p>
        <div className={styles.detailActions}>
          <a href="#build-path" className={styles.primaryAction}>See the build path <ArrowRight size={17} aria-hidden="true" /></a>
          <Link href="/projects/portfolio" className={styles.secondaryAction}>Explore the portfolio <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <p className={styles.prototypeNote}>The guided library is in prototype. The first sample path and the SaaS course outline are drafted; lesson videos are planned.</p>
      </section>

      <div className={styles.proofStrip} aria-label="How to Build progress">
        <div><strong>6</strong><span>steps in the first guided path</span></div>
        <div><strong>{websiteCount}</strong><span>live websites in the portfolio</span></div>
        <div><strong>{skillCount}</strong><span>public AI agent skills</span></div>
      </div>

      <section id="build-path" className={styles.detailSection} aria-labelledby="build-path-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>THE FIRST GUIDED PATH</p><h2 id="build-path-title">From a problem to a release.</h2></div>
          <p>The first example follows a distributor claim desk idea, connecting research to an actual product workflow.</p>
        </div>
        <ol className={styles.buildSteps}>
          <li><span>01</span><div><h3>Validate</h3><p>Talk to the buyer about the last painful claim and confirm the job to be done.</p></div></li>
          <li><span>02</span><div><h3>Map</h3><p>Trace the claim workflow, its people, evidence, and the result the buyer needs.</p></div></li>
          <li><span>03</span><div><h3>Pilot</h3><p>Deliver the result manually before automating the whole process.</p></div></li>
          <li><span>04</span><div><h3>Build</h3><p>Scope one complete workflow and make a small, usable application.</p></div></li>
          <li><span>05</span><div><h3>Test</h3><p>Put it in front of a real team, check failures, and revise what gets in their way.</p></div></li>
          <li><span>06</span><div><h3>Launch</h3><p>Ship a first release with a clear onboarding and a way to learn from use.</p></div></li>
        </ol>
        <a href="https://whattobuildindia.vercel.app/guide#sample-title" target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>See the source idea <ArrowUpRight size={17} aria-hidden="true" /></a>
      </section>

      <section className={styles.detailSection} aria-labelledby="proof-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>THE WORK BEHIND THE METHOD</p><h2 id="proof-title">Built, shipped, and learned from.</h2></div>
          <p>{websiteCount} live websites and {skillCount} public AI agent skills in the portfolio.</p>
        </div>
        <div className={styles.featuredBuilds}>
          {featured.map((project) => <a key={project.title} href={project.live!} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.imageAlt} width={480} height={320} loading="lazy" />
            <span>{project.kind}</span><strong>{project.title}</strong><ArrowUpRight size={17} aria-hidden="true" />
          </a>)}
        </div>
        <Link href="/projects/portfolio" className={styles.portfolioLink}>See the full portfolio <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>

      <section className={styles.nextPath} aria-labelledby="how-next">
        <span>BEFORE THE BUILD</span>
        <h2 id="how-next">Need the right problem first?</h2>
        <p>What to Build is where I collect opportunity research, buyer context, and validation ideas.</p>
        <div><Link href="/projects/what-to-build" className={styles.primaryAction}>Explore What to Build <ArrowRight size={17} aria-hidden="true" /></Link></div>
      </section>
    </ProjectsShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectsShell from "../ProjectsShell";
import styles from "../projects.module.css";
import BuilderNewsletter from "@/components/BuilderNewsletter";
import ClaimDeskWalkthrough from "@/components/ClaimDeskWalkthrough";

const featured = PROJECTS.slice(0, 3);
const websiteCount = PROJECTS.length;

export const metadata: Metadata = {
  title: "How 2 Build | VamshiCreates",
  description: "A guided path from validated idea to useful software: scope, pilot, build, test, launch, and learn from shipped projects.",
  alternates: { canonical: "/projects/how-to-build" },
  openGraph: { title: "How 2 Build | VamshiCreates", description: "A practical path from idea to launch, backed by shipped work.", url: "/projects/how-to-build" },
};

export default function HowToBuildPage() {
  return (
    <ProjectsShell>
      <section className={styles.detailHero} aria-labelledby="how-title">
        <Link href="/projects" className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> The two projects</Link>
        <p className={styles.eyebrow}>02 / TURN AN IDEA INTO A PRODUCT</p>
        <h1 id="how-title">How 2 Build<span>.</span></h1>
        <p>A guided path for taking one validated problem from first conversation to a working, tested product. Each stage has a task, a deliverable, and a decision to make before moving on.</p>
        <div className={styles.detailActions}>
          <a href="#sample-build" className={styles.primaryAction}>Try the free walkthrough <ArrowRight size={17} aria-hidden="true" /></a>
          <Link href="/projects/how-to-build/portfolio" className={styles.secondaryAction}>Explore the portfolio <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <p className={styles.prototypeNote}>By Vamshi Creates. The first interactive sample and HTML starter are available now. The full guided library and lesson videos are in development.</p>
      </section>

      <div className={styles.proofStrip} aria-label="How 2 Build progress">
        <div><strong>6</strong><span>steps in the first guided path</span></div>
        <div><strong>{websiteCount}</strong><span>live websites in the portfolio</span></div>
        <div><strong>2</strong><span>ways to explore the portfolio</span></div>
      </div>

      <ClaimDeskWalkthrough />

      <section id="build-path" className={styles.detailSection} aria-labelledby="build-path-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>THE FIRST GUIDED PATH</p><h2 id="build-path-title">From a problem to a release.</h2></div>
          <p>The first example follows a distributor claim desk idea, connecting research to an actual product workflow.</p>
        </div>
        <ol className={styles.buildSteps}>
          <li><span>01</span><div><h3>Validate</h3><p>Interview five buyers about a recent claim. Write down the missing step and current workaround. Continue when the same problem repeats.</p></div></li>
          <li><span>02</span><div><h3>Map</h3><p>Map one order from complaint to resolution. Agree on the owner, required proof, next action, and a measurable result.</p></div></li>
          <li><span>03</span><div><h3>Pilot</h3><p>Offer one team a fixed-scope, priced pilot. Deliver the result manually and record time per claim before automating it.</p></div></li>
          <li><span>04</span><div><h3>Build</h3><p>Build intake, a queue, and status changes. Use the starter above; add accounts and durable storage before handling real customer data.</p></div></li>
          <li><span>05</span><div><h3>Test</h3><p>Watch a buyer complete a claim without coaching. Note missed handoffs and confusing steps. Fix the largest obstacle first.</p></div></li>
          <li><span>06</span><div><h3>Launch</h3><p>Ask pilot buyers for introductions. Track activation, repeat use, and paid renewals; use feedback to choose the next small release.</p></div></li>
        </ol>
        <a href="https://whattobuildindia.vercel.app/guide#sample-title" target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>See the source idea <ArrowUpRight size={17} aria-hidden="true" /></a>
      </section>

      <section className={styles.detailSection} aria-labelledby="proof-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>THE WORK BEHIND THE METHOD</p><h2 id="proof-title">Built, shipped, and learned from.</h2></div>
          <p>{websiteCount} live websites, each with a short account of its idea, technology, and build.</p>
        </div>
        <div className={styles.featuredBuilds}>
          {featured.map((project) => <a key={project.title} href={project.live} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.imageAlt} width={480} height={320} loading="lazy" />
            <span>{project.kind}</span><strong>{project.title}</strong><ArrowUpRight size={17} aria-hidden="true" />
          </a>)}
        </div>
        <Link href="/projects/how-to-build/portfolio" className={styles.portfolioLink}>See the full portfolio <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>

      <section className={styles.nextPath} aria-labelledby="how-next">
        <span>BEFORE THE BUILD</span>
        <h2 id="how-next">Need the right problem first?</h2>
        <p>What 2 Build is where I collect opportunity research, buyer context, and validation ideas.</p>
        <div><Link href="/projects/what-to-build" className={styles.primaryAction}>Explore What 2 Build <ArrowRight size={17} aria-hidden="true" /></Link></div>
      </section>
      <BuilderNewsletter source="how-to-build" />
    </ProjectsShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectsShell from "../ProjectsShell";
import styles from "../projects.module.css";

const LIVE_URL = "https://whattobuildindia.vercel.app";

export const metadata: Metadata = {
  title: "What to Build | VamshiCreates",
  description: "Explore What to Build: a source-linked SaaS opportunity radar, builder stories, and practical ways to test product ideas before building.",
  alternates: { canonical: "/projects/what-to-build" },
  openGraph: { title: "What to Build | VamshiCreates", description: "Find a real problem and test an idea before you build.", url: "/projects/what-to-build" },
};

export default function WhatToBuildPage() {
  return (
    <ProjectsShell>
      <section className={styles.detailHero} aria-labelledby="what-title">
        <Link href="/projects" className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> The two projects</Link>
        <p className={styles.eyebrow}>01 / DISCOVER THE OPPORTUNITY</p>
        <h1 id="what-title">What to Build<span>.</span></h1>
        <p>Good products begin with a problem people care enough to solve. What to Build collects product signals, buyer context, and clear next tests so an idea can earn its way into a build.</p>
        <div className={styles.detailActions}>
          <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>Explore the live site <ArrowUpRight size={17} aria-hidden="true" /></a>
          <Link href="/projects/portfolio" className={styles.secondaryAction}>See the portfolio <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <div className={styles.proofStrip} aria-label="What to Build research assets">
        <div><strong>160</strong><span>ideas in the research guide</span></div>
        <div><strong>20</strong><span>fields per opportunity</span></div>
        <div><strong>9</strong><span>founder field guides</span></div>
      </div>

      <section className={styles.detailSection} aria-labelledby="what-exists">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>WHAT IS LIVE</p><h2 id="what-exists">Research you can act on.</h2></div>
          <p>Each part helps turn a promising signal into a question you can test with a buyer.</p>
        </div>
        <div className={styles.evidenceGrid}>
          <a href={LIVE_URL} target="_blank" rel="noopener noreferrer"><span>01 / OPPORTUNITIES</span><h3>Find a starting point</h3><p>A SaaS opportunity radar with the buyer, problem, India angle, source links, and a first validation step.</p><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href={`${LIVE_URL}/builders`} target="_blank" rel="noopener noreferrer"><span>02 / BUILDERS</span><h3>Study real makers</h3><p>Source-linked profiles connect products to the people and choices behind them.</p><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href={`${LIVE_URL}/blog`} target="_blank" rel="noopener noreferrer"><span>03 / FIELD GUIDES</span><h3>Test before building</h3><p>Practical guides cover buyer interviews, competitors, early pricing signals, and small MVPs.</p><ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className={styles.workflowSection} aria-labelledby="what-method">
        <p className={styles.eyebrow}>THE METHOD</p>
        <h2 id="what-method">A useful idea survives a real test.</h2>
        <div className={styles.workflowSteps}>
          <div><span>01</span><h3>Spot the signal</h3><p>Look at products, launches, and repeated buyer problems.</p></div>
          <div><span>02</span><h3>Check the evidence</h3><p>Separate an interesting story from verified demand and source-backed facts.</p></div>
          <div><span>03</span><h3>Run a small test</h3><p>Talk to a buyer and prove the painful workflow before committing to a full build.</p></div>
        </div>
      </section>

      <section className={styles.nextPath} aria-labelledby="what-next">
        <span>THE NEXT STEP</span>
        <h2 id="what-next">Found an idea worth testing?<br />Now make it real.</h2>
        <p>How to Build turns a validated problem into a scoped product, a working release, and a plan to keep improving it. My shipped work sits alongside the path as a portfolio of examples.</p>
        <div><Link href="/projects/how-to-build" className={styles.primaryAction}>Explore How to Build <ArrowRight size={17} aria-hidden="true" /></Link><Link href="/projects/portfolio" className={styles.secondaryAction}>View shipped work <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      </section>
    </ProjectsShell>
  );
}

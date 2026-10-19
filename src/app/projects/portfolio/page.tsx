import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import homeStyles from "@/app/home.module.css";
import ProjectCard from "../ProjectCard";
import ProjectsShell from "../ProjectsShell";
import styles from "../projects.module.css";

const websites = PROJECTS.filter((project) => project.live);
const skills = PROJECTS.filter((project) => !project.live);

export const metadata: Metadata = {
  title: "Portfolio | Websites & AI Agent Skills | VamshiCreates",
  description: "Supporting work behind What to Build and How to Build: live websites, creative tools, and public AI agent skills built by Vamshi Krishna.",
  alternates: { canonical: "/projects/portfolio" },
  openGraph: { title: "Portfolio | VamshiCreates", description: "Shipped websites and public AI agent skills.", url: "/projects/portfolio", images: ["/projects/movie-draft-ai.jpg"] },
};

export default function PortfolioPage() {
  return (
    <ProjectsShell>
      <section className={styles.portfolioHero} aria-labelledby="portfolio-title">
        <Link href="/projects" className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> The two projects</Link>
        <p className={styles.eyebrow}>SUPPORTING WORK / THE PORTFOLIO</p>
        <h1 id="portfolio-title">Ideas made real<span>.</span></h1>
        <p>This is the work behind the method: products, websites, and AI agent skills I have built. Explore the live projects or read the public skill source.</p>
        <div className={styles.portfolioOrigins}><Link href="/projects/what-to-build">What to Build <ArrowRight size={15} aria-hidden="true" /></Link><Link href="/projects/how-to-build">How to Build <ArrowRight size={15} aria-hidden="true" /></Link></div>
      </section>

      <section className={styles.collection} aria-labelledby="websites-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>01 / SHIPPED PRODUCTS</p><h2 id="websites-title">Live websites</h2></div>
          <p>Open a project and try it for yourself.</p>
        </div>
        <div className={styles.projectGrid}>{websites.map((project, index) => <ProjectCard key={project.title} project={project} priority={index === 0} />)}</div>
      </section>

      <section className={styles.collection} aria-labelledby="skills-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>02 / REUSABLE WORKFLOWS</p><h2 id="skills-title">AI agent skills</h2></div>
          <p>Explore the source and see how each skill works.</p>
        </div>
        <div className={styles.projectGrid}>{skills.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>HAVE SOMETHING IN MIND?</p>
        <h2 id="contact-title">Let’s build your next idea.</h2>
        <p>Tell me the problem you want to solve. I’ll help you find a practical way to make it real.</p>
        <a href="mailto:hello@vamshicreates.com?subject=My%20project%20idea" className={homeStyles.primaryButton}>
          Send an email <Mail size={17} aria-hidden="true" />
        </a>
      </section>
    </ProjectsShell>
  );
}

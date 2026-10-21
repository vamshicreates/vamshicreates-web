import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import homeStyles from "@/app/home.module.css";
import ProjectCard from "./ProjectCard";
import ProjectsShell from "./ProjectsShell";
import styles from "./projects.module.css";

export default function PortfolioView({ mode }: { mode: "what" | "how" }) {
  const isWhat = mode === "what";
  const parent = isWhat ? "/projects/what-to-build" : "/projects/how-to-build";
  const other = isWhat ? "/projects/how-to-build/portfolio" : "/projects/what-to-build/portfolio";

  return (
    <ProjectsShell>
      <section className={styles.portfolioHero} aria-labelledby="portfolio-title">
        <Link href={parent} className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> {isWhat ? "What to Build" : "How to Build"}</Link>
        <p className={styles.eyebrow}>{isWhat ? "WHAT TO BUILD / PORTFOLIO" : "HOW TO BUILD / PORTFOLIO"}</p>
        <h1 id="portfolio-title">{isWhat ? "Why these exist" : "How these were made"}<span>.</span></h1>
        <p>{isWhat ? "Each product began with a purpose. See the problem behind it and who it is for." : "Each product started with an idea, then a set of practical build choices. Here is the short version of the tools and approach behind each one."}</p>
        <div className={styles.portfolioOrigins}>
          <Link href={other}>{isWhat ? "See how they were built" : "See why they were built"} <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.collection} aria-labelledby="websites-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>SHIPPED PRODUCTS</p><h2 id="websites-title">{isWhat ? "The purpose behind each product" : "The build behind each product"}</h2></div>
          <p>Explore each product on its live website.</p>
        </div>
        <div className={styles.projectGrid}>{PROJECTS.map((project, index) => <ProjectCard key={project.title} project={project} mode={mode} priority={index === 0} />)}</div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>HAVE SOMETHING IN MIND?</p>
        <h2 id="contact-title">Let’s build your next idea.</h2>
        <p>Tell me the problem you want to solve. I’ll help you find a practical way to make it real.</p>
        <a href="mailto:hello@vamshicreates.tech?subject=My%20project%20idea" className={homeStyles.primaryButton}>
          Send an email <Mail size={17} aria-hidden="true" />
        </a>
      </section>
    </ProjectsShell>
  );
}

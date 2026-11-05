import type { Metadata } from "next";
import { BUILT_TOOLS, CREATED_WEBSITES, WEB_EXPERIENCES } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectsShell from "./ProjectsShell";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects | Find the Right Idea. Bring it to Life | VamshiCreates",
  description: "Explore websites and tools built by Vamshi Krishna, including Muddhugumma, Hampi Privé, Mama PDF, and Whiteboard for Code.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | VamshiCreates",
    description: "Find the right idea. Bring it to life.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <ProjectsShell>
      {/* HERO SECTION */}
      <section className={styles.focusHero} aria-labelledby="projects-title">
        <p className={styles.eyebrow}>THE PROJECTS I AM BUILDING AROUND</p>
        <h1 id="projects-title">
          Find the right idea.<br />
          <span>Bring it to life.</span>
        </h1>
        <p>Explore the websites I’ve created and the tools I’ve built for everyday work.</p>
      </section>

      <section className={styles.collection} aria-labelledby="created-websites">
        <div className={styles.sectionIntro}>
          <h2 id="created-websites">Websites I’ve Created</h2>
          <p>Brand sites, community projects, and browser games.</p>
        </div>
        <div className={styles.projectGrid}>
          {[...CREATED_WEBSITES, ...WEB_EXPERIENCES].map((project, index) => (
            <ProjectCard key={project.title} project={project} mode="simple" priority={index < 3} />
          ))}
        </div>
      </section>
      <section className={styles.collection} aria-labelledby="built-tools">
        <div className={styles.sectionIntro}>
          <h2 id="built-tools">Tools I’ve Built</h2>
          <p>Apps for editing, diagramming, and working with AI.</p>
        </div>
        <div className={styles.projectGrid}>
          {BUILT_TOOLS.map((project) => (
            <ProjectCard key={project.title} project={project} mode="simple" />
          ))}
        </div>
      </section>
    </ProjectsShell>
  );
}

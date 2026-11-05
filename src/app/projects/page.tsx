import type { Metadata } from "next";
import { BUILT_TOOLS, CREATED_GAMES, CREATED_WEBSITES } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectsShell from "./ProjectsShell";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects | Find the Right Idea. Bring it to Life | VamshiCreates",
  description: "Explore websites, browser games, and tools built by Vamshi Krishna, including Hampi Privé, Movie Draft, and Mama PDF.",
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
        <p>Explore the websites, browser games, and tools I’ve built.</p>
      </section>

      <section className={styles.collection} aria-labelledby="created-websites">
        <div className={styles.sectionIntro}>
          <h2 id="created-websites">Websites I’ve Created</h2>
          <p>Brand sites, community projects, and AI Companion.</p>
        </div>
        <div className={styles.projectGrid}>
          {CREATED_WEBSITES.map((project, index) => (
            <ProjectCard key={project.title} project={project} mode="simple" priority={index < 3} />
          ))}
        </div>
      </section>
      <section className={styles.collection} aria-labelledby="created-games">
        <div className={styles.sectionIntro}>
          <h2 id="created-games">Games I’ve Created</h2>
          <p>Draft games, arcade challenges, and festive experiences you can play in your browser.</p>
        </div>
        <div className={styles.projectGrid}>
          {CREATED_GAMES.map((project) => (
            <ProjectCard key={project.title} project={project} mode="simple" />
          ))}
        </div>
      </section>
      <section className={styles.collection} aria-labelledby="built-tools">
        <div className={styles.sectionIntro}>
          <h2 id="built-tools">Tools I’ve Built</h2>
          <p>Tools for editing PDFs and videos, and turning code into diagrams.</p>
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

import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectsShell from "./ProjectsShell";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects | Find the Right Idea. Bring it to Life | VamshiCreates",
  description: "Explore live projects built by Vamshi Krishna: Movie Draft, Cricket Draft, Logo Cleaner, Whiteboard for Code, and more.",
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
        <p>Each product began with a real problem statement. See what was built, why it exists, and explore each live product.</p>
      </section>

      {/* 3-COLUMN PROJECTS GRID */}
      <section className={styles.collection} aria-label="Shipped projects">
        <div className={styles.projectGrid}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} mode="simple" priority={index < 3} />
          ))}
        </div>
      </section>
    </ProjectsShell>
  );
}

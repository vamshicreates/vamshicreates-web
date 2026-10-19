import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import styles from "./projects.module.css";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className={styles.projectCard}>
      <img
        className={styles.projectImage}
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={800}
        loading={priority ? "eager" : "lazy"}
      />
      <div className={styles.projectContent}>
        <div className={styles.projectCopy}>
          <p className={styles.projectKind}>{project.kind}</p>
          <h3>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
        <div className={styles.projectLinks}>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} website`}>
              View Website <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : project.code ? (
            <a href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              View GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

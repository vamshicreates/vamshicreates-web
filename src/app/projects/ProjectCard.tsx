import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { PROJECT_STORIES } from "@/data/projectStories";
import styles from "./projects.module.css";

export default function ProjectCard({
  project,
  mode = "simple",
  priority = false,
}: {
  project: Project;
  mode?: "what" | "how" | "simple";
  priority?: boolean;
}) {
  const story = PROJECT_STORIES[project.title];

  if (mode === "simple") {
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
            <h3>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
          <div className={styles.projectLinks}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.experienceButton}
              aria-label={`Experience ${project.title}`}
            >
              Experience it <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    );
  }

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
          {mode === "what" ? (
            <div className={styles.projectFacts}>
              <div><span>Why I built it</span><p>{story?.why}</p></div>
              <div><span>What it is for</span><p>{story?.forWhom}</p></div>
            </div>
          ) : (
            <div className={styles.projectFacts}>
              <div><span>Where the idea came from</span><p>{story?.idea}</p></div>
              <div><span>Technology used</span><p>{story?.technology}</p></div>
              <div><span>How I built it</span><p>{story?.build}</p></div>
            </div>
          )}
        </div>
        <div className={styles.projectLinks}>
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} website`}>
            View Website <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href={project.code} className={styles.repoLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} GitHub repository${project.codePrivate ? " (private, access required)" : ""}`} title={project.codePrivate ? "Private repository — GitHub access required" : undefined}>
            <Github size={16} aria-hidden="true" /> GitHub{project.codePrivate ? " · Private" : ""}
          </a>
        </div>
      </div>
    </article>
  );
}

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./builders.module.css";

const cases = [
  {
    name: "Whiteboard for Code", category: "DEVELOPER TOOL", image: "/projects/whiteboard-for-code-ai.jpg", url: "https://whiteboard-for-code.vercel.app/",
    problem: "Explaining a system often means redrawing information that already exists in code or a diagram.",
    shipped: "A web app for turning Mermaid, DOT, and source snippets into editable architecture whiteboards, with export.",
    limitation: "Google sign-in is required. Boards stay in the browser until exported, so exporting is an essential part of the workflow.",
    lesson: "Make the first input and the final export useful before adding more formats. Test whether a developer can explain one real system with the result.",
  },
  {
    name: "Movie Draft", category: "INTERACTIVE PRODUCT", image: "/projects/movie-draft-ai.jpg", url: "https://movie-draft-phi.vercel.app/",
    problem: "Give Telugu cinema fans a shared activity built around the films and stars they already care about.",
    shipped: "A playable auction with movie picks, fictional budgets, local two-player and AI modes, plus an online room option.",
    limitation: "The catalogue is focused on Telugu cinema. It is a free entertainment game with fictional budgets and no cash prizes.",
    lesson: "Start with an audience you understand and a complete play loop. A useful next test: watch two new players finish one round without help.",
  },
];

export default function BuildCaseStudies() {
  return (
    <section id="build-studies" className={styles.section} aria-labelledby="build-studies-title">
      <div className={styles.heading}><div><p className={styles.eyebrow}>FROM MY OWN WORK</p><h2 id="build-studies-title">Open the product.<br />Study the decisions.</h2></div><p>Two shipped examples, with their scope and limitations. Explore what each one actually does.</p></div>
      <div className={styles.caseGrid}>
        {cases.map((item) => <article className={styles.caseCard} key={item.name}>
          <img src={item.image} alt="" width={600} height={400} loading="lazy" />
          <div className={styles.caseBody}><p className={styles.eyebrow}>{item.category}</p><h3>{item.name}</h3>
            <dl><dt>The problem</dt><dd>{item.problem}</dd><dt>What shipped</dt><dd>{item.shipped}</dd></dl>
            <details><summary>Scope, limitation &amp; builder takeaway</summary><dl><dt>Know before trying</dt><dd>{item.limitation}</dd><dt>What to take into your build</dt><dd>{item.lesson}</dd></dl><p className={styles.evidenceNote}>Evidence: the linked live product. No customer, revenue, or time-saving results are claimed.</p></details>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>Try {item.name} <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </article>)}
      </div>
      <Link href="/projects/how-to-build/portfolio" className={styles.allWork}>Explore the full portfolio <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </section>
  );
}

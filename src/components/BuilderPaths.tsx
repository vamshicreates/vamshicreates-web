import Link from "next/link";
import { ArrowRight, Compass, Hammer } from "lucide-react";
import styles from "./builders.module.css";

export default function BuilderPaths() {
  return (
    <section id="start-building" className={styles.section} aria-labelledby="builder-paths-title">
      <div className={styles.heading}>
        <div><p className={styles.eyebrow}>TWO PROJECTS. ONE BUILDER JOURNEY.</p><h2 id="builder-paths-title">Where are you starting?</h2></div>
        <p>For solo developers turning a useful idea into a product people choose to use.</p>
      </div>
      <div className={styles.pathGrid}>
        <Link href="/projects/what-to-build" className={styles.pathCard}>
          <div className={styles.pathTop}><Compass size={25} aria-hidden="true" /><span>01 / FIND THE PROBLEM</span></div>
          <h3>What 2 Build</h3><p className={styles.byline}>by Vamshi Creates</p>
          <p>Find a buyer, examine the evidence, and test whether a problem is worth your time.</p>
          <div className={styles.pathSample}><span>START WITH A FREE SAMPLE</span><strong>A distributor claim desk: buyer, first test, and a reason it might fail.</strong></div>
          <span className={styles.cardLink}>Find an idea worth testing <ArrowRight size={18} aria-hidden="true" /></span>
        </Link>
        <Link href="/projects/how-to-build" className={`${styles.pathCard} ${styles.makeCard}`}>
          <div className={styles.pathTop}><Hammer size={25} aria-hidden="true" /><span>02 / MAKE IT USEFUL</span></div>
          <h3>How 2 Build</h3><p className={styles.byline}>by Vamshi Creates</p>
          <p>Scope the smallest useful product, build it, and put it in front of your first users.</p>
          <div className={styles.pathSample}><span>TRY THE FIRST WALKTHROUGH</span><strong>A working claim tracker, a starter file, and a plan for a first pilot.</strong></div>
          <span className={styles.cardLink}>Build the first useful version <ArrowRight size={18} aria-hidden="true" /></span>
        </Link>
      </div>
    </section>
  );
}

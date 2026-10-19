import Link from "next/link";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import ClaimDeskDemo from "./ClaimDeskDemo";
import styles from "./builders.module.css";

export default function ClaimDeskWalkthrough() {
  return (
    <section id="sample-build" className={styles.sample} aria-labelledby="walkthrough-title">
      <p className={styles.eyebrow}>FREE WALKTHROUGH / YOUR FIRST COMPLETE WORKFLOW</p>
      <h2 id="walkthrough-title">Build a tiny claim tracker.</h2>
      <span className={styles.statusLabel}>Working learning sample · full library in development</span>
      <p>Start with one loop: log a disputed order, see what is outstanding, and close it. Try it here, then download the single-file starter and make one change yourself.</p>
      <ClaimDeskDemo />
      <a className={styles.sampleAction} href="/samples/claim-desk.html" download="claim-desk.html">Download the HTML starter <ArrowDownToLine size={17} aria-hidden="true" /></a>
      <div className={styles.walkthrough}>
        <h3>Make it your own in four steps</h3>
        <ol>
          <li><strong>Run it.</strong> Download <code>claim-desk.html</code> and open it in a browser. It works without an account, install, or server. Add a fictional order and mark it resolved.</li>
          <li><strong>Read the loop.</strong> Open the same file in your editor. <code>claims</code> holds the records. The form adds one record, the status control updates it, and <code>render()</code> redraws the queue and active count.</li>
          <li><strong>Add one field.</strong> Add an owner input to the form, save its value on the claim object, and show it in each row. Give an AI coding agent that exact task if you want help; review the result before using it.</li>
          <li><strong>Check the result.</strong> Add two claims with different owners, change one to Resolved, and check that the active count drops by one. Blank inputs should be rejected. Reset should restore the two demo records. Refresh should reset the page.</li>
        </ol>
      </div>
      <div className={styles.sampleGrid}>
        <div><h3>From demo to a real pilot</h3><p>First watch a buyer try this with anonymized examples. If the workflow helps, add a database, authentication, team access rules, an activity history, and a safe way to attach evidence. This sample has none of those production features.</p></div>
        <div><h3>From pilot to a paying customer</h3><p>Agree on one team, one claim type, a trial period, and a price before doing custom work. Compare time per claim and missed handoffs with their existing process. Ask what would make them keep using it, then build the smallest useful change.</p></div>
      </div>
      <Link href="/projects/what-to-build#sample-opportunity" className={styles.sampleAction}>Read the buyer research and pilot test <ArrowRight size={17} aria-hidden="true" /></Link>
    </section>
  );
}

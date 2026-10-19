import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./builders.module.css";

export default function ClaimDeskOpportunity() {
  return (
    <section id="sample-opportunity" className={styles.sample} aria-labelledby="opportunity-title">
      <p className={styles.eyebrow}>FREE SAMPLE / OPERATIONS SOFTWARE</p>
      <h2 id="opportunity-title">A claim desk for small distributors.</h2>
      <span className={styles.statusLabel}>Research hypothesis · buyer validation still needed</span>
      <p>A small product to connect a disputed order with its owner, evidence, and next action. Start by checking whether this is a recurring headache for one kind of distributor.</p>
      <div className={styles.sampleGrid}>
        <div><h3>Who would use it?</h3><p>An owner or operations lead who handles missing or damaged goods claims. Ask them to walk through their last disputed delivery, including the messages, documents, and people involved.</p></div>
        <div><h3>What does the evidence say?</h3><p>Zoho Inventory documents sales returns, returned quantities, serial or batch details, and credits. The workflow already has software support. That supports researching a narrower gap; it does not prove demand for another tool.</p></div>
        <div><h3>The smallest useful version</h3><p>One queue: order reference, issue, owner, evidence link, next action, and status. Test whether one view makes a claim easier to hand over. Keep inventory accounting in the buyer’s existing system.</p></div>
        <div><h3>How could you reach buyers?</h3><p>Ask a local distributor association or an accountant for five introductions. Request a short walkthrough of one recent claim. Use the language and missing steps from those conversations in your first demo.</p></div>
        <div><h3>A price to test</h3><p>After measuring the current work, offer a two-week, manually supported pilot. A possible starting offer is ₹1,500 for one team. This is a proposed experiment, not a market price or a reported result.</p></div>
        <div><h3>Why it might fail</h3><p>Their existing inventory tool may solve the problem already. Claims may be too rare to justify another login. Stop if you cannot find a repeated missing step or a buyer willing to try a pilot.</p></div>
      </div>
      <div className={styles.walkthrough}><h3>Your next 48 hours</h3><ol><li>Ask five buyers: “Show me your last disputed delivery. Where did it get stuck?”</li><li>Rebuild one anonymized claim in a spreadsheet. Record how long gathering evidence and handing it over takes.</li><li>Offer a fixed-scope pilot to the buyer with the clearest recurring problem. Continue only if someone commits time, access to a sample workflow, or payment. Record why the others decline.</li></ol></div>
      <div className={styles.sources}><strong>Sources &amp; what is still unknown</strong><p><a href="https://www.zoho.com/us/inventory/help/sales-returns/sales-returns-overview.html" target="_blank" rel="noopener noreferrer">Zoho Inventory: sales return workflow</a> · <a href="https://whattobuildindia.vercel.app/guide#sample-title" target="_blank" rel="noopener noreferrer">Original What to Build idea brief</a>. Reviewed 20 October 2026.</p><p>The buyer segment, pain frequency, pricing, and distribution route above are hypotheses. No interviews, customers, or revenue are claimed for this sample.</p></div>
      <Link href="/projects/how-to-build#sample-build" className={styles.sampleAction}>Try the matching build walkthrough <ArrowRight size={18} aria-hidden="true" /></Link>
    </section>
  );
}

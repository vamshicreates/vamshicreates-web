"use client";

import { useState } from "react";
import styles from "./builders.module.css";

type Claim = { id: string; order: string; issue: string; status: "Open" | "Waiting for proof" | "Resolved" };
const initialClaims: Claim[] = [
  { id: "sample-1", order: "DEMO-1042", issue: "Two cartons missing from delivery", status: "Open" },
  { id: "sample-2", order: "DEMO-1048", issue: "Damaged packaging; photo requested", status: "Waiting for proof" },
];

export default function ClaimDeskDemo() {
  const [claims, setClaims] = useState<Claim[]>(initialClaims);
  const [message, setMessage] = useState("");
  function addClaim(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const order = String(data.get("order") || "").trim();
    const issue = String(data.get("issue") || "").trim();
    if (!order || !issue) { setMessage("Add an order reference and a short issue."); return; }
    setClaims((items) => [...items, { id: crypto.randomUUID(), order, issue, status: "Open" }]);
    form.reset();
    setMessage(`${order} added. Try changing its status.`);
  }
  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}><div><span className={styles.eyebrow}>INTERACTIVE SAMPLE / FICTIONAL DATA</span><h3>Claim desk</h3></div><span className={styles.openCount}>{claims.filter(c => c.status !== "Resolved").length} active</span></div>
      <p className={styles.demoNote}>Add a sample claim and move it through the queue. This demo resets on refresh; use fictional details.</p>
      <form className={styles.claimForm} onSubmit={addClaim}>
        <label>Order reference<input name="order" placeholder="DEMO-1050" required maxLength={40} /></label>
        <label>What needs resolving?<input name="issue" placeholder="One item missing" required maxLength={160} /></label>
        <button type="submit" disabled={claims.length >= 12}>Add claim</button>
      </form>
      <p className={styles.demoStatus} role="status">{claims.length >= 12 ? "Demo limit reached. Reset to try again." : message}</p>
      <ul className={styles.claimList}>
        {claims.map(claim => <li key={claim.id}><div><strong>{claim.order}</strong><p>{claim.issue}</p></div><label><span className={styles.visuallyHidden}>Status for {claim.order}</span><select aria-label={`Status for ${claim.order}`} value={claim.status} onChange={(e) => { const status = e.target.value as Claim["status"]; setClaims(items => items.map(item => item.id === claim.id ? { ...item, status } : item)); setMessage(`${claim.order} moved to ${status.toLowerCase()}.`); }}><option>Open</option><option>Waiting for proof</option><option>Resolved</option></select></label></li>)}
      </ul>
      <div className={styles.demoFooter}><button type="button" onClick={() => { setClaims(initialClaims); setMessage("Demo reset to the two sample claims."); }}>Reset demo</button><span>Prototype: no file uploads, shared accounts, or notifications.</span></div>
    </div>
  );
}

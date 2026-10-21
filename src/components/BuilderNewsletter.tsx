"use client";

import { useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import styles from "./builders.module.css";

export default function BuilderNewsletter({ source }: { source: "home" | "projects" | "what-to-build" | "how-to-build" }) {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");

  async function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "saving") return;
    const data = new FormData(event.currentTarget);
    setStatus("saving");
    try {
      const response = await fetch("/api/email-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "builder-updates", email: data.get("email"), consent: data.get("consent") === "on", website: data.get("website"), source }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Signup failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="builder-notes" className={styles.newsletter} aria-labelledby={`${id}-title`}>
      <div>
        <p className={styles.eyebrow}>VAMSHI CREATES / BUILDER NOTES</p>
        <h2 id={`${id}-title`}>One opportunity.<br />One practical build.</h2>
        <p>A weekly email in the making: the buyer, the evidence, a small build, and one way to find your first users.</p>
        <span className={styles.launchNote}>Join the launch list. The first issue is being prepared.</span>
      </div>
      <div>
        {status === "success" ? (
          <div className={styles.signupSuccess} role="status"><Check size={25} aria-hidden="true" /><h3>You’re on the launch list.</h3><p>Your email is saved for Builder Notes. Explore the free samples while the first issue is being prepared.</p></div>
        ) : (
          <form onSubmit={subscribe} className={styles.signupForm} aria-busy={status === "saving"}>
            <label htmlFor={`${id}-email`}>Your email</label>
            <input id={`${id}-email`} name="email" type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} disabled={status === "saving"} aria-describedby={`${id}-privacy`} />
            <div className={styles.honeypot} aria-hidden="true"><label htmlFor={`${id}-website`}>Leave this empty</label><input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" /></div>
            <label className={styles.consent}><input type="checkbox" name="consent" required disabled={status === "saving"} /><span>Email me Builder Notes and updates on What 2 Build and How 2 Build.</span></label>
            <button type="submit" disabled={status === "saving"}>{status === "saving" ? "Saving your spot…" : "Join the launch list"}<ArrowRight size={17} aria-hidden="true" /></button>
            {status === "error" && <p role="alert" className={styles.formError}>Your signup wasn’t saved. Please try again, or <a href="mailto:hello@vamshicreates.tech?subject=Builder%20Notes%20signup">email me</a>.</p>}
          </form>
        )}
        <p id={`${id}-privacy`} className={styles.privacy}>Your email is stored privately for these updates. You can ask to be removed at any time by <a href="mailto:hello@vamshicreates.tech?subject=Remove%20me%20from%20Builder%20Notes">emailing me</a>.</p>
      </div>
    </section>
  );
}

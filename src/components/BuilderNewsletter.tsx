"use client";

import { useId } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./builders.module.css";

export default function BuilderNewsletter({ source }: { source: "home" | "projects" | "what-to-build" | "how-to-build" }) {
  const id = useId();
  const body = `Hi Vamshi,\n\nPlease add me to the Builder Notes launch list. I would like to receive Builder Notes and updates on What 2 Build and How 2 Build.\n\nI found the list on: ${source}.`;
  const href = `mailto:hello@vamshicreates.tech?subject=Builder%20Notes%20signup&body=${encodeURIComponent(body)}`;

  return (
    <section id="builder-notes" className={styles.newsletter} aria-labelledby={`${id}-title`}>
      <div>
        <p className={styles.eyebrow}>VAMSHI CREATES / BUILDER NOTES</p>
        <h2 id={`${id}-title`}>One opportunity.<br />One practical build.</h2>
        <p>A weekly email in the making: the buyer, the evidence, a small build, and one way to find your first users.</p>
        <span className={styles.launchNote}>The first issue is being prepared. Email me to join the launch list.</span>
      </div>
      <div>
        <div className={styles.signupForm}>
          <a href={href} className={styles.emailSignup}>Join by email <ArrowRight size={17} aria-hidden="true" /></a>
          <p>This opens a draft in your email app. Send it to request Builder Notes updates.</p>
        </div>
        <p className={styles.privacy}>You can also write to <a href="mailto:hello@vamshicreates.tech">hello@vamshicreates.tech</a>. Ask to be removed from the list at any time.</p>
      </div>
    </section>
  );
}

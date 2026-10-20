import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import snapshot from "@/data/build-calendar.json";
import CalendarClient from "./CalendarClient";
import homeStyles from "../home.module.css";
import styles from "./calendar.module.css";

export const metadata: Metadata = {
  title: "Build Calendar | Vamshi Creates",
  description: "A date-by-date calendar of products, websites, and creative workflows built by Vamshi Krishna, based on public GitHub activity.",
  alternates: { canonical: "/calendar" },
  openGraph: {
    title: "Build Calendar | Vamshi Creates",
    description: "Explore what Vamshi built, day by day.",
    url: "/calendar",
  },
};

export default function CalendarPage() {
  return (
    <div className={`${homeStyles.page} ${styles.page}`}>
      <a href="#main" className={homeStyles.skipLink}>Skip to content</a>
      <div className={homeStyles.container}>
        <header className={homeStyles.navigation}>
          <Link className={homeStyles.brand} aria-label="VamshiCreates home" href="/">
            <img alt="" width={36} height={36} className={homeStyles.brandMark} src="/journey/main-dp-icon.jpg" />
            VamshiCreates
          </Link>
          <nav aria-label="Main navigation" className={homeStyles.navLinks}>
            <Link href="/journey">Journey</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/calendar" aria-current="page" className={styles.activeNav}>Calendar</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#consultation">Consulting</Link>
          </nav>
          <a href="mailto:hello@vamshicreates.com?subject=Let%27s%20build%20something" className={homeStyles.navCta}>
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </header>

        <main id="main">
          <CalendarClient entries={snapshot.entries} />
        </main>

        <footer className={homeStyles.footer}>
          <div>
            <Link className={homeStyles.brand} href="/">
              <img alt="" width={32} height={32} className={homeStyles.brandMark} src="/journey/main-dp-icon.jpg" />
              VamshiCreates<span className={homeStyles.captionDot} />
            </Link>
            <p>Ideas into useful things.</p>
          </div>
          <div className={homeStyles.footerLinks}>
            <Link href="/journey">Journey</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#consultation">Consulting</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:hello@vamshicreates.com">hello@vamshicreates.com</a>
          </div>
          <span className={homeStyles.copyright}>© 2026 @vamshicreates</span>
        </footer>
      </div>
    </div>
  );
}

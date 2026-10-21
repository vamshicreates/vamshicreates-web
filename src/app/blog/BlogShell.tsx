import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import homeStyles from "@/app/home.module.css";
import styles from "./blog.module.css";

export default function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${homeStyles.page} ${styles.blogPage}`}>
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
            <Link href="/calendar">Calendar</Link>
            <Link href="/blog" aria-current="page" className={styles.activeNav}>Blog</Link>
            <Link href="/#consultation">Consulting</Link>
          </nav>
          <a href="mailto:hello@vamshicreates.tech?subject=Let%27s%20build%20something" className={homeStyles.navCta}>
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </header>

        <main id="main">{children}</main>

        <footer className={homeStyles.footer}>
          <div>
            <Link className={homeStyles.brand} href="/">
              <img alt="" width={32} height={32} className={homeStyles.brandMark} src="/journey/main-dp-icon.jpg" />
              VamshiCreates
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
            <a href="mailto:hello@vamshicreates.tech">hello@vamshicreates.tech</a>
          </div>
          <span className={homeStyles.copyright}>© 2026 @vamshicreates</span>
        </footer>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Mail } from "lucide-react";
import homeStyles from "@/app/home.module.css";
import styles from "./projects.module.css";

export default function ProjectsShell({ children }: { children: React.ReactNode }) {
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
            <Link href="/projects" aria-current="page" className={styles.activeNav}>Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#consultation">Consulting</Link>
          </nav>
          <a href="mailto:hello@vamshicreates.com?subject=Let%27s%20build%20something" className={homeStyles.navCta}>
            Get in touch <Mail size={15} aria-hidden="true" />
          </a>
        </header>

        <main id="main">{children}</main>

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
            <Link href="/blog">Blog</Link>
            <Link href="/#consultation">Consulting</Link>
            <a href="mailto:hello@vamshicreates.com">hello@vamshicreates.com</a>
          </div>
          <span className={homeStyles.copyright}>© 2026 @vamshicreates</span>
        </footer>
      </div>
    </div>
  );
}

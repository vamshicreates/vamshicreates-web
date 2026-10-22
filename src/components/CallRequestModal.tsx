import { ArrowUpRight } from "lucide-react";
import styles from "@/app/home.module.css";

export function CallRequestModal() {
  return (
    <a href="mailto:hello@vamshicreates.tech?subject=Project%20call%20request&body=Hi%20Vamshi%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A%0AProject%20details%3A%20%0APreferred%20times%20and%20timezone%3A%20" className={styles.primaryButton}>
      Request a call by email <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

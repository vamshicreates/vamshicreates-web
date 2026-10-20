import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Scale, CheckCircle2, AlertTriangle, FileText } from "lucide-react";
import homeStyles from "@/app/home.module.css";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | VamshiCreates",
  description: "Terms and conditions governing the use of VamshiCreates website, email content, 1:1 consultation calls, and digital products.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | VamshiCreates",
    description: "Read the terms governing consultation services, digital product licensing, and website usage on VamshiCreates.",
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className={`${homeStyles.page} ${styles.legalPage}`}>
      <a href="#main" className={homeStyles.skipLink}>
        Skip to content
      </a>

      <div className={homeStyles.container}>
        <header className={homeStyles.navigation}>
          <Link className={homeStyles.brand} aria-label="VamshiCreates home" href="/">
            <img
              alt="VamshiCreates icon"
              width={36}
              height={36}
              className={homeStyles.brandMark}
              src="/journey/main-dp-icon.jpg"
            />
            VamshiCreates
          </Link>

          <nav aria-label="Main navigation" className={homeStyles.navLinks}>
            <Link href="/journey">Journey</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#consultation">Consulting</Link>
          </nav>

          <a
            href="mailto:hello@vamshicreates.com?subject=Terms%20Inquiry"
            className={homeStyles.navCta}
          >
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </header>

        <main id="main" className={styles.legalContainer}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={15} aria-hidden="true" /> Back to home
          </Link>

          <section className={styles.heroCard}>
            <p className={styles.eyebrow}>LEGAL AGREEMENT</p>
            <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
            <p className={styles.heroLead}>
              Welcome to VamshiCreates. Please review these terms governing your use of our
              website, free build guides, email newsletters, 1:1 consultation bookings, and digital product downloads.
            </p>

            <div className={styles.metaRow}>
              <span className={styles.metaBadge}>
                <Scale size={14} aria-hidden="true" /> Clear, Honest Terms
              </span>
              <span>Effective Date: October 2026</span>
              <span>Operated by: Vamshi Krishna</span>
            </div>
          </section>

          {/* Quick Summary Box */}
          <div className={styles.atAGlance}>
            <h3 className={styles.atAGlanceTitle}>
              <Scale size={18} color="#2563eb" aria-hidden="true" />
              At a Glance: Key Terms Summary
            </h3>
            <ul className={styles.atAGlanceList}>
              <li>
                <strong>Consultations &amp; Advice:</strong> Strategy and advisory sessions provide technical and creative direction based on experience. You remain responsible for evaluating and testing recommendations before applying them to your business or live production.
              </li>
              <li>
                <strong>Digital Products &amp; Templates:</strong> When you purchase or download templates, prompt packs, codebases, or workflows, you receive a license for personal or internal business use. Reselling, sublicensing, or redistributing our raw templates as your own product is prohibited.
              </li>
              <li>
                <strong>Refund Policy for Digital Downloads:</strong> Because digital assets and code files are delivered immediately, purchases are non-refundable once downloaded, except where legally required or if an unresolvable technical defect occurs.
              </li>
              <li>
                <strong>Educational Nature:</strong> All open guides, scripts, and workflows are provided &quot;as is&quot; for educational exploration.
              </li>
            </ul>
          </div>

          <article className={styles.legalBody}>
            {/* 1. Agreement to Terms */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>1. Acceptance of Terms</h2>
              <p className={styles.paragraph}>
                By accessing or using the VamshiCreates website (located at <code>vamshicreates-web.vercel.app</code> or connected custom domains), subscribing to our email newsletters, scheduling a consultation call, or purchasing digital products, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions.
              </p>
              <p className={styles.paragraph}>
                If you do not agree with any part of these terms, please discontinue use of the website and services.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 2. 1:1 Consultation & Advisory Services */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>2. 1:1 Consultation &amp; Advisory Services</h2>
              <p className={styles.paragraph}>
                We offer strategy consultations, technical advisory sessions, and custom AI automation planning. The following terms apply to all scheduled sessions:
              </p>

              <h3 className={styles.subHeading}>A. Scope and Nature of Consulting</h3>
              <p className={styles.paragraph}>
                Consultations are intended to provide strategic, architectural, and educational guidance based on industry experience with AI agents, developer tooling, and content workflows. You acknowledge that advice is provided in good faith and that you retain sole discretion and accountability for all business decisions, code deployments, API spend, or operational changes you undertake.
              </p>

              <h3 className={styles.subHeading}>B. Booking, Scheduling &amp; Rescheduling</h3>
              <ul className={styles.list}>
                <li>
                  Sessions must be scheduled through our designated calendar tools or via direct email confirmation.
                </li>
                <li>
                  <strong>Rescheduling:</strong> If you need to reschedule, please provide at least 24 hours advance notice via the calendar link or email so the slot can be reassigned.
                </li>
                <li>
                  <strong>Punctuality:</strong> If you are late to a scheduled call, the session will conclude at the originally scheduled end time to respect subsequent appointments.
                </li>
                <li>
                  We reserve the right to reschedule in the rare event of unforeseen emergencies, illness, or technical outages, and will provide alternative slots promptly.
                </li>
              </ul>

              <h3 className={styles.subHeading}>C. Confidentiality</h3>
              <p className={styles.paragraph}>
                We treat all proprietary project details, confidential metrics, and private business ideas you share during consultation calls with strict professional discretion and will not disclose them to third parties without your prior permission.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 3. Digital Products & Licensing */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>3. Digital Products, Licenses &amp; Usage Rights</h2>
              <p className={styles.paragraph}>
                VamshiCreates creates and may sell digital goods, including but not limited to downloadable code repositories, AI prompt packages, automation scripts, Notion/Obsidian playbooks, video production templates, and technical courses.
              </p>

              <h3 className={styles.subHeading}>A. License Grant</h3>
              <p className={styles.paragraph}>
                Upon purchasing a digital product or accessing a paid template, VamshiCreates grants you a perpetual, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className={styles.list}>
                <li>Use, modify, and integrate the templates, scripts, or materials into your own personal projects or internal business operations.</li>
                <li>Deploy automation workflows for your own clients, provided you are delivering a customized end-service rather than distributing raw source templates.</li>
              </ul>

              <h3 className={styles.subHeading}>B. Restrictions</h3>
              <div className={styles.highlightBox}>
                <AlertTriangle size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: 6, color: "#d97706" }} />
                <strong>Strict Limitation:</strong> You may NOT sub-license, resell, lease, redistribute, publically upload to open-source torrents/repositories, or package our paid digital templates into a competing template marketplace or product kit.
              </div>

              <h3 className={styles.subHeading}>C. Refund Policy for Digital Goods</h3>
              <p className={styles.paragraph}>
                Due to the immediate delivery and inherently irrevocable nature of digital downloads and code files:
              </p>
              <ul className={styles.list}>
                <li>
                  All digital product purchases are <strong>final and non-refundable</strong> once download links or repository access credentials have been issued.
                </li>
                <li>
                  If you experience an issue downloading the files, receive corrupted assets, or find a broken component, please email{" "}
                  <a href="mailto:hello@vamshicreates.com" className={styles.contactLink}>hello@vamshicreates.com</a> within 14 days of purchase. We will promptly troubleshoot, update, or replace the file.
                </li>
              </ul>
            </section>

            <hr className={styles.divider} />

            {/* 4. Email Newsletter & Content Communications */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>4. Email Newsletter &amp; Communications</h2>
              <p className={styles.paragraph}>
                When you subscribe to our newsletter or download free resources:
              </p>
              <ul className={styles.list}>
                <li>You agree to receive periodic emails covering AI workflows, build notes, and product announcements.</li>
                <li>You may unsubscribe at any time using the one-click unsubscribe link at the bottom of every automated email.</li>
                <li>We commit to keeping communications focused, respectful, and zero-spam.</li>
              </ul>
            </section>

            <hr className={styles.divider} />

            {/* 5. Intellectual Property */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>5. Intellectual Property Rights</h2>
              <p className={styles.paragraph}>
                All content published on this website—including articles, brand designs, logos, typography, visual layouts, and curriculum structures—is the intellectual property of VamshiCreates and protected by applicable copyright and trademark laws.
              </p>
              <p className={styles.paragraph}>
                You may quote short excerpts or reference our guides with clear attribution and a link back to <code>https://vamshicreates-web.vercel.app</code>.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 6. Disclaimers & Warranties */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>6. Disclaimers &amp; Warranties</h2>
              <p className={styles.paragraph}>
                All content, scripts, tutorials, and materials on VamshiCreates are provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> without warranties of any kind, either express or implied.
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Evolving AI Technologies:</strong> Artificial intelligence APIs (OpenAI, Anthropic, open-source models) change frequently. While we strive to keep resources accurate, we do not warrant that workflows will remain compatible indefinitely without user updates.
                </li>
                <li>
                  <strong>No Guarantee of Earnings:</strong> Any examples of revenue, productivity gains, or audience growth mentioned in guides or case studies are illustrative. We make no guarantee that you will achieve similar commercial results.
                </li>
              </ul>
            </section>

            <hr className={styles.divider} />

            {/* 7. Limitation of Liability */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>7. Limitation of Liability</h2>
              <p className={styles.paragraph}>
                To the maximum extent permitted by applicable law, in no event shall VamshiCreates or Vamshi Krishna be liable for any indirect, incidental, consequential, special, or punitive damages (including but not limited to loss of data, loss of revenue, API service charges, or business downtime) arising out of or related to your use of this website, consultation sessions, or digital downloads.
              </p>
              <p className={styles.paragraph}>
                Our aggregate liability for any direct claim arising from your purchase of any service or product shall be limited to the amount you actually paid to VamshiCreates for that specific product or consultation in the twelve (12) months preceding the claim.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 8. Governing Law & Dispute Resolution */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>8. Governing Law</h2>
              <p className={styles.paragraph}>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Telangana, India, without regard to conflict of law principles. Any legal disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 9. Modifications to Terms */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>9. Changes to These Terms</h2>
              <p className={styles.paragraph}>
                We reserve the right to revise these Terms and Conditions as our business expands. The updated version will be indicated by the &quot;Effective Date&quot; at the top of this page. Your continued use of the website constitutes acceptance of any revisions.
              </p>
            </section>

            {/* Contact Card */}
            <div className={styles.contactBox}>
              <h4>Questions or legal inquiries?</h4>
              <p>
                Reach out to us directly and we will respond promptly:
              </p>
              <div>
                <a href="mailto:hello@vamshicreates.com" className={styles.contactLink}>
                  hello@vamshicreates.com
                </a>
              </div>
            </div>

            <div className={styles.navSwitch}>
              <Link href="/privacy" className={styles.switchLink}>
                View Privacy Policy <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </main>

        <footer className={homeStyles.footer}>
          <div>
            <Link className={homeStyles.brand} href="/">
              <img
                alt=""
                width={32}
                height={32}
                className={homeStyles.brandMark}
                src="/journey/main-dp-icon.jpg"
              />
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
            <a href="mailto:hello@vamshicreates.com">hello@vamshicreates.com</a>
          </div>
          <span className={homeStyles.copyright}>© 2026 @vamshicreates</span>
        </footer>
      </div>
    </div>
  );
}

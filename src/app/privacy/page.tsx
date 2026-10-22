import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck, Mail, Calendar, Download, Lock } from "lucide-react";
import homeStyles from "@/app/home.module.css";
import styles from "../legal.module.css";
import { AnalyticsPreferencesButton } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Privacy Policy | VamshiCreates",
  description: "How VamshiCreates collects, uses, and protects your information across email subscriptions, 1:1 consultation calls, and digital products.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | VamshiCreates",
    description: "Learn how your data is handled on VamshiCreates across newsletter signups, consultation bookings, and digital downloads.",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
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
            <Link href="/projects">Projects</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#consultation">Consulting</Link>
          </nav>

          <a
            href="mailto:hello@vamshicreates.tech?subject=Privacy%20Question"
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
            <p className={styles.eyebrow}>LEGAL &amp; COMPLIANCE</p>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroLead}>
              Your privacy is important. This policy transparently explains what data we collect,
              how we protect it, and how it is used across our email updates, consultation bookings,
              and current or future digital product releases.
            </p>

            <div className={styles.metaRow}>
              <span className={styles.metaBadge}>
                <ShieldCheck size={14} aria-hidden="true" /> Transparent &amp; Plain-English
              </span>
              <span>Effective Date: October 2026</span>
              <span>Applies to: vamshicreates.tech &amp; subdomains</span>
            </div>
          </section>

          {/* Quick Summary Box */}
          <div className={styles.atAGlance}>
            <h3 className={styles.atAGlanceTitle}>
              <ShieldCheck size={18} color="#2563eb" aria-hidden="true" />
              At a Glance: Key Privacy Highlights
            </h3>
            <ul className={styles.atAGlanceList}>
              <li>
                <strong>Email Lists &amp; Newsletters:</strong> When you subscribe to updates, guides, or build notes, we collect your email address solely to send you relevant content. You can unsubscribe at any time with a single click.
              </li>
              <li>
                <strong>1:1 Consultation Calls:</strong> If you schedule a consulting or strategy session, we collect your name, email, project brief, and calendar time to prepare and host the session. We do not sell or rent this info.
              </li>
              <li>
                <strong>Digital Products &amp; Purchases:</strong> For templates, prompt packs, codebases, or workflows you purchase, payments are processed directly through secure, PCI-compliant third-party gateways (e.g., Stripe, Lemon Squeezy, or Razorpay). We never see or store your full card numbers.
              </li>
              <li>
                <strong>No Ad Selling:</strong> We do not sell, rent, or trade your personal data to advertisers or third-party brokers.
              </li>
            </ul>
          </div>

          <article className={styles.legalBody}>
            {/* 1. Who We Are */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>1. Who We Are</h2>
              <p className={styles.paragraph}>
                VamshiCreates (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is operated by Vamshi Krishna, based in Hyderabad, India. We produce technical guides, AI automation workflows, developer tools, and creative digital products.
              </p>
              <p className={styles.paragraph}>
                If you have questions about this policy or your personal data, you can contact us directly at{" "}
                <a href="mailto:hello@vamshicreates.tech" className={styles.contactLink}>
                  hello@vamshicreates.tech
                </a>.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 2. Information We Collect */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>2. Information We Collect</h2>
              <p className={styles.paragraph}>
                We only collect information that is genuinely necessary to deliver our services, communicate with you, and improve your experience.
              </p>

              <h3 className={styles.subHeading}>A. Information You Provide to Us Directly</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Email Subscriptions:</strong> Your email address and message when you email us to request Builder Notes, bootcamp updates, or project notifications. Free guides can be opened without providing an email address.
                </li>
                <li>
                  <strong>Consultation &amp; Advisory Bookings:</strong> Your name, email address, company or project name, current technical stack, and any project notes you submit when booking a 1:1 call or requesting a custom build.
                </li>
                <li>
                  <strong>Customer &amp; Transaction Details (Digital Products):</strong> When you purchase digital downloads (e.g., guides, templates, code repositories, or course materials), our payment partners collect transaction information (name, billing address, email, and purchase history).
                </li>
                <li>
                  <strong>Direct Inquiries:</strong> Any correspondence, feedback, or support messages you send us via email.
                </li>
              </ul>

              <h3 className={styles.subHeading}>B. Information Collected Automatically</h3>
              <p className={styles.paragraph}>
                When you browse our website, minimal standard technical information may be collected by our hosting infrastructure (such as your browser type, operating system, IP address, device viewport, and referring URL) to ensure reliable performance, prevent DDoS attacks, and diagnose bugs.
              </p>
              <p className={styles.paragraph}>
                If you allow analytics cookies, Google Analytics 4 measures page visits, engagement, and interactions such as outbound links, downloads, and clicks to book a consultation. We use these reports to understand which content helps visitors and improve the website. A consultation click records interest; it does not confirm a booking. We do not send names, email addresses, or project briefs as analytics event properties, and advertising personalization is disabled.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 3. How We Use Your Information */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>3. How We Use Your Information</h2>
              <p className={styles.paragraph}>We use the information we collect for the following straightforward purposes:</p>
              <ul className={styles.list}>
                <li>
                  <strong>Delivering Content &amp; Updates:</strong> Sending requested guide downloads, build breakdowns, and email newsletters about AI engineering and automations.
                </li>
                <li>
                  <strong>Scheduling &amp; Conducting Consultations:</strong> Reviewing your project requirements, confirming meeting times, sending calendar invitations, and following up on action items after calls.
                </li>
                <li>
                  <strong>Fulfilling Digital Product Orders:</strong> Delivering access links, license keys, documentation, and product update notices for any digital products or templates you purchase.
                </li>
                <li>
                  <strong>Customer Support:</strong> Responding to inquiries, troubleshooting technical issues, and assisting with access to purchased materials.
                </li>
                <li>
                  <strong>Security &amp; Fraud Prevention:</strong> Protecting our website, intellectual property, and community from malicious activity, abuse, or unauthorized access.
                </li>
              </ul>
            </section>

            <hr className={styles.divider} />

            {/* 4. Payment Security & Third-Party Processors */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>4. Payment Security &amp; Digital Product Checkout</h2>
              <p className={styles.paragraph}>
                We prioritize financial data security. All payment processing for our digital products, templates, and paid consultations is handled by reputable, PCI-DSS Level 1 compliant merchant partners (such as Stripe, Lemon Squeezy, or Razorpay).
              </p>
              <div className={styles.highlightBox}>
                <Lock size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: 6 }} />
                <strong>Important:</strong> We do not store, process, or have access to your raw credit card numbers, CVVs, or bank login credentials on our servers. The processor tokenizes your payment and only shares high-level confirmation details (such as order ID, purchase date, and billing email) with us to fulfill your order.
              </div>
            </section>

            <hr className={styles.divider} />

            {/* 5. Third-Party Services We Use */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>5. Third-Party Services We Rely On</h2>
              <p className={styles.paragraph}>
                To operate our modern web stack, we work with select trusted third-party providers who process data strictly under confidentiality and security agreements:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Hosting &amp; Edge Delivery:</strong> GitHub Pages (static website hosting) and GitHub (code repository &amp; public releases).
                </li>
                <li>
                  <strong>Email Delivery:</strong> Contact and signup links open your email app. Information is sent to our mailbox only when you send the email; the website does not save new form submissions. Previous signup records remain private and may be removed on request.
                </li>
                <li>
                  <strong>Calendar &amp; Scheduling:</strong> Topmate handles consultation bookings through its own service and privacy policy.
                </li>
                <li>
                  <strong>Website Analytics:</strong> Google Analytics 4, after you choose to allow analytics cookies. Learn <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>how Google uses information from sites that use its services</a>.
                </li>
                <li>
                  <strong>Payment &amp; Invoicing:</strong> Stripe, Lemon Squeezy, or Razorpay for digital transactions.
                </li>
              </ul>
            </section>

            <hr className={styles.divider} />

            {/* 6. Data Retention & Storage */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>6. Data Retention &amp; Storage</h2>
              <p className={styles.paragraph}>
                We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Newsletter Subscribers:</strong> Retained until you unsubscribe or request deletion.
                </li>
                <li>
                  <strong>Consultation Records:</strong> Project briefs and meeting notes are kept for reference during your engagement and archived safely thereafter.
                </li>
                <li>
                  <strong>Purchase &amp; Invoicing Records:</strong> Kept for the duration required by applicable tax, accounting, and consumer protection laws.
                </li>
              </ul>
            </section>

            <hr className={styles.divider} />

            {/* 7. Your Rights & Choices */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>7. Your Rights &amp; Choices</h2>
              <p className={styles.paragraph}>
                Regardless of your location, we believe you should have full control over your personal information:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Opting Out of Emails:</strong> Email hello@vamshicreates.tech to ask to be removed from Builder Notes or bootcamp updates.
                </li>
                <li>
                  <strong>Access &amp; Portability:</strong> You may request a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction or Deletion:</strong> You can request correction of inaccurate details or complete erasure of your data (&quot;Right to be Forgotten&quot;), subject to legal tax retention requirements.
                </li>
              </ul>
              <p className={styles.paragraph}>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@vamshicreates.tech" className={styles.contactLink}>
                  hello@vamshicreates.tech
                </a>
                . We will respond promptly within 30 days.
              </p>
            </section>

            <hr className={styles.divider} />

            {/* 8. Cookies & Local Storage */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>8. Cookies &amp; Local Storage</h2>
              <p className={styles.paragraph}>
                Google Analytics loads only after you select &quot;Allow analytics.&quot; It uses first-party cookies such as <code>_ga</code> to distinguish visits. Selecting &quot;Only necessary&quot; keeps Analytics off. We store your choice in localStorage so you do not have to choose on each visit. You can change your preference below; declining stops Analytics collection and removes its accessible first-party cookies. Browser storage may also remember functional preferences such as customized preview settings.
              </p>
              <AnalyticsPreferencesButton />
            </section>

            <hr className={styles.divider} />

            {/* 9. Updates to This Policy */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>9. Updates to This Policy</h2>
              <p className={styles.paragraph}>
                As we release new digital products, launch member portals, or adjust our tooling, we may update this Privacy Policy to reflect those enhancements. Any modifications will be posted here with an updated effective date.
              </p>
            </section>

            {/* Contact Card */}
            <div className={styles.contactBox}>
              <h4>Have questions about your data?</h4>
              <p>
                Reach out directly and we will be happy to assist you.
              </p>
              <div>
                <a href="mailto:hello@vamshicreates.tech" className={styles.contactLink}>
                  hello@vamshicreates.tech
                </a>
              </div>
            </div>

            <div className={styles.navSwitch}>
              <Link href="/terms" className={styles.switchLink}>
                View Terms &amp; Conditions <ArrowUpRight size={14} aria-hidden="true" />
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

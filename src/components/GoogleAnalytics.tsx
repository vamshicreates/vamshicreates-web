"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import styles from "./GoogleAnalytics.module.css";

const CONSENT_KEY = "vamshicreates-analytics-consent";
const PREFERENCES_EVENT = "vamshicreates-analytics-preferences";
const PRODUCTION_HOSTS = ["www.vamshicreates.tech", "vamshicreates.tech"];
type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsPreferencesButton() {
  return (
    <button type="button" className={styles.preferences} onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))}>
      Manage analytics cookies
    </button>
  );
}

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const [enabled, setEnabled] = useState(false);
  const [consent, setConsent] = useState<Consent>(null);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    // Keep development and Vercel preview traffic out of production reporting.
    if (!PRODUCTION_HOSTS.includes(window.location.hostname)) return;
    setEnabled(true);
    let saved: Consent = null;
    try {
      const value = localStorage.getItem(CONSENT_KEY);
      if (value === "granted" || value === "denied") saved = value;
    } catch {
      // Visitors can still make a choice when browser storage is unavailable.
    }
    setConsent(saved);
    setShowChoices(saved === null);
    const openPreferences = () => setShowChoices(true);
    window.addEventListener(PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(PREFERENCES_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    if (!enabled || consent !== "granted") return;
    const trackConsultation = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor || anchor.hostname !== "topmate.io") return;
      // This records interest in a consultation, not a completed booking.
      window.gtag?.("event", "consultation_click", {
        link_url: `${anchor.origin}${anchor.pathname}`,
      });
    };
    document.addEventListener("click", trackConsultation);
    return () => document.removeEventListener("click", trackConsultation);
  }, [enabled, consent]);

  function choose(value: Exclude<Consent, null>) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch { /* Session-only choice. */ }
    const analyticsWindow = window as unknown as Record<string, unknown>;
    analyticsWindow[`ga-disable-${measurementId}`] = value === "denied";
    window.gtag?.("consent", "update", {
      analytics_storage: value,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    if (value === "denied") {
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (name !== "_ga" && !name.startsWith("_ga_")) continue;
        for (const domain of ["", ";domain=.vamshicreates.tech", `;domain=${window.location.hostname}`]) {
          document.cookie = `${name}=;max-age=0;path=/${domain};SameSite=Lax;Secure`;
        }
      }
    }
    setConsent(value);
    setShowChoices(false);
  }

  if (!enabled) return null;

  return (
    <>
      {consent === "granted" && <>
        <Script id="google-analytics-setup" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(measurementId)}, {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}</Script>
        <Script id="google-analytics-tag" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      </>}
      {showChoices && (
        <section className={styles.banner} aria-label="Analytics cookie preferences">
          <div className={styles.copy}>
            <strong>A little insight helps me build better.</strong>
            <p>With your permission, Google Analytics measures visits and useful interactions. You can change your choice in the <Link href="/privacy">privacy policy</Link>.</p>
          </div>
          <div className={styles.actions}>
            <button type="button" onClick={() => choose("denied")}>Only necessary</button>
            <button type="button" className={styles.accept} onClick={() => choose("granted")}>Allow analytics</button>
          </div>
        </section>
      )}
    </>
  );
}

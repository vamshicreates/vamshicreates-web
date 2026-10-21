import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GA_MEASUREMENT_ID, SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AI Automation & Tech Solutions | VamshiCreates",
  description:
    "Vamshi Krishna builds websites, AI tools, and automations for real-world problems. Explore shipped projects, practical guides, and AI automation consulting.",
  applicationName: "VamshiCreates",
  authors: [{ name: "Vamshi Krishna", url: SITE_URL }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/journey/main-dp-icon.jpg",
    shortcut: "/journey/main-dp-icon.jpg",
    apple: "/journey/main-dp-icon.jpg",
  },
  openGraph: {
    title: "AI Automation & Tech Solutions | VamshiCreates",
    description:
      "Find a useful problem, build a small product, and reach your first users with What 2 Build and How 2 Build.",
    type: "website",
    siteName: "VamshiCreates",
    locale: "en_IN",
    images: ["/journey/main-dp-hero.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-200 relative">
        {children}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}

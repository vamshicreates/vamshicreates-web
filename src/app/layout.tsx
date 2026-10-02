import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "VamshiCreates | OpenClaw & AI Automation Guides",
  description:
    "Learn OpenClaw, AI agents, and practical AI automations with free guides from VamshiCreates, an AI engineer and automation creator.",
  icons: {
    icon: "/journey/main-dp-icon.jpg",
    shortcut: "/journey/main-dp-icon.jpg",
    apple: "/journey/main-dp-icon.jpg",
  },
  openGraph: {
    title: "Master AI Automations with VamshiCreates",
    description:
      "Learn OpenClaw, AI agents, and practical AI automations with free guides from VamshiCreates.",
    type: "website",
    images: ["/journey/main-dp-hero.jpg"],
  },
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
      <body className="font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-200">
        {children}
      </body>
    </html>
  );
}

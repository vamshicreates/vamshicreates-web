import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Vamshi Creates | Find a Problem. Build It. Reach Your First Users.",
  description:
    "Product research, practical builds, and shipped work by Vamshi Krishna. Explore What 2 Build and How 2 Build for your next useful product.",
  icons: {
    icon: "/journey/main-dp-icon.jpg",
    shortcut: "/journey/main-dp-icon.jpg",
    apple: "/journey/main-dp-icon.jpg",
  },
  openGraph: {
    title: "Vamshi Creates | Ideas into Useful Products",
    description:
      "Find a useful problem, build a small product, and reach your first users with What 2 Build and How 2 Build.",
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
      <body className="font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-200 relative">
        {children}
      </body>
    </html>
  );
}

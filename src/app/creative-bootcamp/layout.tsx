import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative AI Bootcamp | VamshiCreates",
  robots: { index: false, follow: false },
  description:
    "A project-based creative bootcamp covering Figma, Photoshop, Illustrator, Blender, AI video, LLMs, and MCP workflows. Explore the 10-week curriculum and register your interest.",
  openGraph: {
    title: "Creative AI Bootcamp | VamshiCreates",
    description:
      "Design, make, animate, and build creative workflows with AI in a 10-week studio bootcamp.",
    type: "website",
    images: ["/journey/main-dp-hero.jpg"],
  },
};

export default function CreativeBootcampLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

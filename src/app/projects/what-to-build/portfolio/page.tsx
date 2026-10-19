import type { Metadata } from "next";
import PortfolioView from "../../PortfolioView";

export const metadata: Metadata = {
  title: "What to Build Portfolio | VamshiCreates",
  description: "Why Vamshi Krishna built each product, the problem behind it, and who it helps.",
  alternates: { canonical: "/projects/what-to-build/portfolio" },
  openGraph: { title: "What to Build Portfolio | VamshiCreates", description: "Explore the purpose behind each shipped product.", url: "/projects/what-to-build/portfolio", images: ["/projects/movie-draft-ai.jpg"] },
};

export default function WhatPortfolioPage() {
  return <PortfolioView mode="what" />;
}

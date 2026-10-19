import type { Metadata } from "next";
import PortfolioView from "../../PortfolioView";

export const metadata: Metadata = {
  title: "How to Build Portfolio | VamshiCreates",
  description: "The ideas, technology, and practical build approach behind Vamshi Krishna's shipped products.",
  alternates: { canonical: "/projects/how-to-build/portfolio" },
  openGraph: { title: "How to Build Portfolio | VamshiCreates", description: "Explore the tools and approach behind each shipped product.", url: "/projects/how-to-build/portfolio", images: ["/projects/movie-draft-ai.jpg"] },
};

export default function HowPortfolioPage() {
  return <PortfolioView mode="how" />;
}

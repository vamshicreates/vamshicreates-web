import type { Metadata } from "next";
import SeriesPage from "../SeriesPage";

export const metadata: Metadata = {
  title: "LLM Articles | VamshiCreates Blog",
  description: "Four plain-language guides to large language models, AI agents, model categories, APIs, frameworks, and hosting.",
  alternates: { canonical: "/blog/llm" },
  openGraph: { title: "LLM Articles | VamshiCreates", description: "Understand the pieces behind AI products.", url: "/blog/llm", images: ["/blog/what-is-an-llm.jpg"] },
};

export default function LLMSeriesPage() {
  return <SeriesPage seriesSlug="llm" />;
}

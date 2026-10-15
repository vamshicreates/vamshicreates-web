import type { Metadata } from "next";
import SeriesPage from "../SeriesPage";

export const metadata: Metadata = {
  title: "Python Articles | VamshiCreates Blog",
  description: "Seven practical articles on Python fundamentals, AI coding tools, and building useful projects.",
  alternates: { canonical: "/blog/python" },
  openGraph: { title: "Python Articles | VamshiCreates", description: "Practical Python and AI coding guides.", url: "/blog/python", images: ["/blog/python-ai-engine.jpg"] },
};

export default function PythonSeriesPage() {
  return <SeriesPage seriesSlug="python" />;
}

import { notFound } from "next/navigation";
import { GUIDES } from "@/data/guides";
import GuideDetail from "./GuideDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!GUIDES.some((guide) => guide.slug === slug)) notFound();
  return <GuideDetail slug={slug} />;
}

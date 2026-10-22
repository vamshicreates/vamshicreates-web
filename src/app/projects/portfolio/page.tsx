"use client";

import { useEffect } from "react";
import Link from "next/link";

const destination = "/projects/what-to-build/portfolio/";

export default function PortfolioPage() {
  useEffect(() => { window.location.replace(destination); }, []);
  return <main><p>This portfolio has moved. <Link href={destination}>Open the portfolio</Link>.</p></main>;
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import styles from "@/app/home.module.css";
import { KEYWORD_MAP } from "@/data/guides";

export function GuideLookup() {
  const [keyword, setKeyword] = useState("");
  const [matchedGuide, setMatchedGuide] = useState<{ slug: string; title: string } | null>(null);
  const [searched, setSearched] = useState(false);

  function lookup(word: string) {
    setKeyword(word);
    setMatchedGuide(KEYWORD_MAP[word.trim().toLowerCase()] || null);
    setSearched(true);
  }

  return (
    <div className={styles.lookup}>
      <Search size={19} aria-hidden="true" />
      <h3>Coming from a video?</h3>
      <p>Enter the word I shared to find your free guide.</p>
      <form className={styles.lookupForm} onSubmit={(event) => { event.preventDefault(); lookup(keyword); }}>
        <label htmlFor="guide-keyword" className={styles.srOnly}>Guide keyword</label>
        <input id="guide-keyword" placeholder="Word to comment (e.g. skills, team)" required autoCapitalize="none" autoComplete="off" value={keyword} onChange={(event) => { setKeyword(event.target.value); setMatchedGuide(null); setSearched(false); }} />
        <button type="submit" aria-label="Find my guide"><ArrowRight size={19} aria-hidden="true" /></button>
      </form>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[10px] text-zinc-400">TRY:</span>
        {["skills", "team", "map", "stitch", "loop", "clip"].map((word) => (
          <button key={word} type="button" onClick={() => lookup(word)} className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-zinc-600 transition hover:border-blue-400 hover:text-blue-600">{word}</button>
        ))}
      </div>
      <div aria-live="polite">
        {matchedGuide && <div className={styles.lookupEmail}>
          <p>Word found: <strong>{matchedGuide.title}</strong></p>
          <Link href={`/guides/${matchedGuide.slug}`} className={styles.primaryButton}>Open free guide <ArrowRight size={16} aria-hidden="true" /></Link>
          <a href="mailto:hello@vamshicreates.tech?subject=Guide%20question">Ask a question by email</a>
        </div>}
        {searched && !matchedGuide && <p className={styles.error}>That word wasn’t found. Try <strong>skills</strong>, <strong>team</strong>, <strong>map</strong>, or <strong>stitch</strong>.</p>}
      </div>
    </div>
  );
}

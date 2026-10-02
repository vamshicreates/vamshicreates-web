"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import styles from "@/app/home.module.css";
import { KEYWORD_MAP } from "@/data/guides";

const STORAGE_KEY = "vamshicreates-guide-email";

export function GuideLookup() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [matchedGuide, setMatchedGuide] = useState<{ slug: string; title: string } | null>(null);
  const [searched, setSearched] = useState(false);
  const [email, setEmail] = useState("");
  const [hasSavedEmail, setHasSavedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setEmail(saved);
        setHasSavedEmail(true);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = keyword.trim().toLowerCase();
    const match = KEYWORD_MAP[clean] || null;
    setMatchedGuide(match);
    setSearched(true);
    setStatus("idle");

    if (match && hasSavedEmail) {
      router.push(`/guides/${match.slug}`);
    }
  };

  const handleQuickKeyword = (word: string) => {
    setKeyword(word);
    const match = KEYWORD_MAP[word] || null;
    setMatchedGuide(match);
    setSearched(true);
    setStatus("idle");
  };

  const handleEmailUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!matchedGuide) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/email-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          guide: keyword.trim().toLowerCase(),
        }),
      });
      if (!response.ok) throw new Error("Could not save email");
      try {
        window.localStorage.setItem(STORAGE_KEY, email.trim().toLowerCase());
      } catch {
        // ignore
      }
      setHasSavedEmail(true);
      setStatus("success");
      router.push(`/guides/${matchedGuide.slug}`);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.lookup}>
      <Search size={19} aria-hidden="true" />
      <h3>Coming from a video?</h3>
      <p>Enter the word I shared to find your guide.</p>
      <form className={styles.lookupForm} onSubmit={handleLookup}>
        <label htmlFor="guide-keyword" className={styles.srOnly}>
          Guide keyword
        </label>
        <input
          id="guide-keyword"
          placeholder="Word to comment (e.g. skills, team)"
          required
          autoCapitalize="none"
          autoComplete="off"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setMatchedGuide(null);
            setSearched(false);
            setStatus("idle");
          }}
        />
        <button type="submit" aria-label="Find my guide" disabled={status === "loading"}>
          <ArrowRight size={19} aria-hidden="true" />
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[10px] text-zinc-400">TRY:</span>
        {["skills", "team", "map", "stitch", "loop", "clip"].map((w) => (
          <button
            key={w}
            type="button"
            onClick={() => handleQuickKeyword(w)}
            className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-zinc-600 transition hover:border-blue-400 hover:text-blue-600"
          >
            {w}
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {matchedGuide && !hasSavedEmail && (
          <form onSubmit={handleEmailUnlock} className={styles.lookupEmail}>
            <label htmlFor="guide-email">
              Word found: <strong>{matchedGuide.title}</strong>! Enter your email to unlock:
            </label>
            <input
              id="guide-email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              <button
                type="submit"
                className={styles.primaryButton}
                disabled={status === "loading"}
                style={{ flex: 1 }}
              >
                {status === "loading" ? "Opening…" : "Get my guide"}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => router.push(`/guides/${matchedGuide.slug}`)}
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
              >
                Skip to guide →
              </button>
            </div>
            {status === "error" && (
              <p className={styles.error} role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        {matchedGuide && status === "success" && (
          <p className={styles.success}>Opening your guide…</p>
        )}

        {searched && !matchedGuide && (
          <p className={styles.error}>
            That word wasn’t found. Try <strong>skills</strong>, <strong>team</strong>,{" "}
            <strong>map</strong>, or <strong>stitch</strong>.
          </p>
        )}
      </div>
    </div>
  );
}

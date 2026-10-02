"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, BookOpen, Terminal, ArrowRight, X } from "lucide-react";
import { GUIDES, KEYWORD_MAP } from "@/data/guides";

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
      } else if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const filteredGuides = GUIDES.filter(
    (g) =>
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.keywords.some((k) => k.includes(q))
  );

  const exactKeyword = q ? KEYWORD_MAP[q] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-zinc-950/50 px-4 pt-24 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3.5">
          <Search size={18} className="text-zinc-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search guides, video keywords (e.g. skills, team, stitch)…"
            className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-3">
          {exactKeyword && (
            <div className="mb-3">
              <div className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-wider text-teal-700">
                Video Keyword Match (“{q}”)
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  router.push(`/guides/${exactKeyword.slug}`);
                }}
                className="flex w-full items-center justify-between rounded-xl border border-teal-200 bg-teal-50/70 p-3 text-left transition hover:bg-teal-50"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal size={16} className="text-teal-700" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-900">
                      {exactKeyword.title}
                    </div>
                    <div className="text-[11px] text-teal-700">
                      Instant unlock for keyword &ldquo;{q}&rdquo;
                    </div>
                  </div>
                </div>
                <ArrowRight size={15} className="text-teal-700" />
              </button>
            </div>
          )}

          <div className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            Free Guides ({filteredGuides.length})
          </div>
          <div className="space-y-1">
            {filteredGuides.map((g) => (
              <button
                key={g.slug}
                type="button"
                onClick={() => {
                  onClose();
                  router.push(`/guides/${g.slug}`);
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-zinc-100"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <BookOpen size={15} className="shrink-0 text-zinc-500" />
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-zinc-900">
                      {g.title}
                    </div>
                    <div className="truncate text-[11px] text-zinc-500">
                      {g.category} · {g.readTime} · Keywords: {g.keywords.join(", ")}
                    </div>
                  </div>
                </div>
                <ArrowRight size={14} className="shrink-0 text-zinc-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50 px-4 py-2.5 text-[11px] text-zinc-500">
          <span>Tip: Press ESC to close</span>
          <span>VamshiCreates Quick Navigator</span>
        </div>
      </div>
    </div>
  );
}

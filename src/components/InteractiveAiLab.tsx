"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Calculator, Sparkles, ArrowUpRight } from "lucide-react";
import styles from "@/app/home.module.css";

interface StackPreset {
  id: string;
  label: string;
  tagline: string;
  skills: { name: string; repo: string; role: string }[];
  installCmd: string;
  starterPrompt: string;
}

const STACK_PRESETS: StackPreset[] = [
  {
    id: "website",
    label: "Agency Website Builder",
    tagline: "Replicate & ship high-converting creator and SaaS websites without generic AI templates.",
    skills: [
      { name: "frontend-design", repo: "anthropics/skills", role: "Anti-slop typography, color tokens & layout" },
      { name: "create-website", repo: "wondelai/skills", role: "10-phase StoryBrand + CRO + Jobs review pipeline" },
      { name: "claude-seo", repo: "AgriciDaniel/claude-seo", role: "24-skill technical SEO & schema markup audit" },
    ],
    installCmd: `npx -y skills add anthropics/skills@frontend-design obra/superpowers AgriciDaniel/claude-seo -g -y`,
    starterPrompt: `Use frontend-design and create-website skills. Design a warm Zinc-50 editorial creator platform for VamshiCreates with a floating pill navbar, split portrait hero, interactive video keyword lookup, and Next.js App Router.`,
  },
  {
    id: "agents",
    label: "4-Agent Software Factory",
    tagline: "Run parallel Scout, Architect, Builder, and Critic subagents that ship tested features.",
    skills: [
      { name: "superpowers", repo: "obra/superpowers", role: "Subagent-driven dev, TDD & verification gates" },
      { name: "planning-with-files", repo: "OthmanAdi/planning-with-files", role: "Persistent markdown plan tracking" },
      { name: "context-engineering", repo: "muratcankoylan/agent-skills-for-context-engineering", role: "Token & KV-cache optimization" },
    ],
    installCmd: `npx -y skills add obra/superpowers OthmanAdi/planning-with-files muratcankoylan/agent-skills-for-context-engineering -g -y`,
    starterPrompt: `Initialize a planning-with-files tracker in docs/PLAN.md, break the feature into testable tasks, and dispatch subagents using superpowers with verification before completion.`,
  },
  {
    id: "growth",
    label: "Client Acquisition & CRO Engine",
    tagline: "Automate prospect research, cold outreach sequences, landing page CRO, and lead magnets.",
    skills: [
      { name: "marketingskills", repo: "coreyhaines31/marketingskills", role: "50 marketing, CRO, cold-email & pricing skills" },
      { name: "claude-seo", repo: "AgriciDaniel/claude-seo", role: "Programmatic SEO & competitor page analysis" },
      { name: "obsidian-skills", repo: "kepano/obsidian-skills", role: "Local CRM & research vault knowledge graph" },
    ],
    installCmd: `npx -y skills add coreyhaines31/marketingskills AgriciDaniel/claude-seo kepano/obsidian-skills -g -y`,
    starterPrompt: `Audit our landing page using cro and copywriting skills, build a Big-5 Objection/Counter matrix, and draft a 5-step cold outreach sequence for high-intent prospects.`,
  },
];

export function InteractiveAiLab() {
  const [activeTab, setActiveTab] = useState<"stack" | "roi">("stack");
  const [selectedPresetId, setSelectedPresetId] = useState<string>("website");
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // ROI Calculator state
  const [hoursPerWeek, setHoursPerWeek] = useState(14);
  const [hourlyRate, setHourlyRate] = useState(85);
  const [teamSize, setTeamSize] = useState(2);

  const preset = STACK_PRESETS.find((p) => p.id === selectedPresetId) || STACK_PRESETS[0];

  const monthlyHoursSaved = Math.round(hoursPerWeek * teamSize * 4.33 * 0.78);
  const monthlyDollarsSaved = Math.round(monthlyHoursSaved * hourlyRate);
  const annualDollarsSaved = monthlyDollarsSaved * 12;

  const copyText = (text: string, type: "cmd" | "prompt") => {
    navigator.clipboard.writeText(text);
    if (type === "cmd") {
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 2000);
    } else {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  return (
    <section
      id="ai-lab"
      className="border-t border-zinc-200 py-20"
      aria-labelledby="ai-lab-title"
    >
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>06 / INTERACTIVE AI BUILDER LAB</p>
          <h2 id="ai-lab-title">
            Test your stack.<br />
            Calculate your leverage.
          </h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab("stack")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition ${
              activeTab === "stack"
                ? "bg-zinc-900 text-white"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <Terminal size={14} />
            GitHub Skill Stack Builder
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("roi")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition ${
              activeTab === "roi"
                ? "bg-zinc-900 text-white"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <Calculator size={14} />
            Automation ROI Calculator
          </button>
        </div>
      </div>

      {activeTab === "stack" ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col justify-between rounded-[20px] border border-zinc-200 bg-white p-6">
            <div>
              <p className={styles.eyebrow}>PICK WHAT YOU WANT TO BUILD</p>
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-900">
                Choose a curated skill bundle
              </h3>
              <div className="grid gap-3">
                {STACK_PRESETS.map((item) => {
                  const active = item.id === selectedPresetId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPresetId(item.id)}
                      className={`w-full rounded-xl border p-4 text-left transition ${
                        active
                          ? "border-blue-500 bg-blue-50/50 shadow-sm"
                          : "border-zinc-200 bg-white hover:border-zinc-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-zinc-900">{item.label}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                            active ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-600"
                          }`}
                        >
                          3 packs
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{item.tagline}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-4">
              <p className="text-xs text-zinc-500">
                All skills above are pre-installed in your Antigravity &amp; Claude workspace.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] border border-zinc-200 bg-white p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-700">
                  READY TO RUN
                </span>
                <h3 className="text-lg font-semibold text-zinc-900">{preset.label}</h3>
              </div>
              <a
                href="/guides/claude-skills-i-use"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
              >
                Full skills guide <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mb-5 grid gap-2.5 sm:grid-cols-3">
              {preset.skills.map((s) => (
                <div
                  key={s.name}
                  className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3"
                >
                  <div className="font-mono text-xs font-semibold text-zinc-900">{s.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-blue-600">{s.repo}</div>
                  <p className="mt-1.5 text-[11px] leading-snug text-zinc-500">{s.role}</p>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  1. One-Command Install (Terminal)
                </span>
                <button
                  type="button"
                  onClick={() => copyText(preset.installCmd, "cmd")}
                  className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700 hover:bg-zinc-200"
                >
                  {copiedCmd ? <Check size={12} className="text-teal-600" /> : <Copy size={12} />}
                  {copiedCmd ? "Copied!" : "Copy command"}
                </button>
              </div>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-3.5 font-mono text-xs text-zinc-100">
                <code>{preset.installCmd}</code>
              </pre>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  2. Starter Agent Prompt
                </span>
                <button
                  type="button"
                  onClick={() => copyText(preset.starterPrompt, "prompt")}
                  className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700 hover:bg-zinc-200"
                >
                  {copiedPrompt ? (
                    <Check size={12} className="text-teal-600" />
                  ) : (
                    <Sparkles size={12} />
                  )}
                  {copiedPrompt ? "Copied!" : "Copy prompt"}
                </button>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-xs leading-relaxed text-zinc-700">
                “{preset.starterPrompt}”
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[20px] border border-zinc-200 bg-white p-7">
            <p className={styles.eyebrow}>ESTIMATE YOUR TIME &amp; COST SAVINGS</p>
            <h3 className="mb-6 text-xl font-semibold tracking-tight text-zinc-900">
              How much manual work can you hand off to agents?
            </h3>

            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-xs font-medium text-zinc-700">
                  <span>Repetitive hours per person / week</span>
                  <span className="font-mono font-semibold text-blue-600">{hoursPerWeek} hrs/wk</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={40}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs font-medium text-zinc-700">
                  <span>Hourly value of time (USD)</span>
                  <span className="font-mono font-semibold text-blue-600">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={300}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs font-medium text-zinc-700">
                  <span>Team members running workflows</span>
                  <span className="font-mono font-semibold text-blue-600">
                    {teamSize} {teamSize === 1 ? "person (Solo)" : "people"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[20px] border border-zinc-200 bg-white p-7">
            <div>
              <p className={styles.eyebrow}>PROJECTED AGENT IMPACT (78% AUTOMATION)</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                  <span className="font-mono text-[10px] uppercase text-zinc-500">
                    Hours Saved / Mo
                  </span>
                  <div className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900">
                    {monthlyHoursSaved}h
                  </div>
                </div>
                <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4">
                  <span className="font-mono text-[10px] uppercase text-teal-700">
                    Monthly Value
                  </span>
                  <div className="mt-1 text-3xl font-semibold tracking-tight text-teal-700">
                    ${monthlyDollarsSaved.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-zinc-500">Annualized ROI Potential</span>
                  <span className="text-xl font-semibold text-zinc-900">
                    ${annualDollarsSaved.toLocaleString()}/yr
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  Based on replacing manual research, drafting, data entry, and multi-step QA with
                  Claude Code + OpenClaw agent loops.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
              <span className="text-xs text-zinc-500">Want this built for your team?</span>
              <a href="#custom-builds" className={styles.textLink}>
                Book a custom build <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

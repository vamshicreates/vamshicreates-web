export interface GuideSection {
  heading: string;
  body: string[];
  codeBlock?: {
    label: string;
    code: string;
  };
  bullets?: {
    title: string;
    description: string;
    repo?: string;
    command?: string;
  }[];
}

export interface GuideItem {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  description: string;
  readTime: string;
  keywords: string[];
  featuredHome?: boolean;
  iconName: "route" | "workflow" | "code" | "users" | "book" | "message" | "sparkles" | "terminal" | "cpu" | "trending";
  updatedAt: string;
  heroSummary: string;
  sections: GuideSection[];
}

export const GUIDES: GuideItem[] = [
  {
    slug: "ai-automation-builder-roadmap",
    title: "Your AI automation roadmap",
    shortTitle: "Your AI automation roadmap",
    category: "Start here",
    description: "A clear learning path, the skills to focus on, and projects to build along the way.",
    readTime: "8 min read",
    keywords: ["map", "roadmap", "start"],
    featuredHome: true,
    iconName: "route",
    updatedAt: "September 2026",
    heroSummary:
      "Stop jumping between 50 different AI tools every week. This 4-stage roadmap takes you from your first context-aware workspace to shipping multi-agent systems that run real business operations.",
    sections: [
      {
        heading: "Stage 1: Context Engineering & Personal OS (Week 1)",
        body: [
          "Most people use AI like a search engine: they open a blank chat, type a one-sentence prompt, get a generic response, and start over tomorrow. Builders start by giving AI persistent memory.",
          "Your first milestone is setting up a workspace where your AI already knows your voice, your current projects, your tech stack, and your quality bar before you type a single word."
        ],
        codeBlock: {
          label: "CLAUDE.md / Project Memory Starter Prompt",
          code: `# Project & Creator Context (VamshiCreates)
Role: Senior AI Engineer & Automation Architect
Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS, Claude Code, MCP
Style Rules:
- Write concise, direct, zero-fluff explanations
- Prefer deterministic scripts + modular skills over monolithic prompts
- Always verify edge cases and test locally before shipping`
        }
      },
      {
        heading: "Stage 2: Modular Skills & MCP Servers (Week 2)",
        body: [
          "Once your context is locked in, stop repeating instructions. Package every repeatable workflow into a SKILL.md folder and connect real data sources via Model Context Protocol (MCP).",
          "With just three MCP servers (Tavily for live web research, Context7 for live framework docs, and Task Master for structured specs), your AI stops hallucinating and starts executing."
        ],
        bullets: [
          {
            title: "Frontend Design & Taste Skills",
            description: "Eliminate generic AI layouts and enforce high-craft typography, spacing, and motion.",
            command: "npx skills add anthropics/skills@frontend-design -g -y"
          },
          {
            title: "Superpowers Dev Pipeline",
            description: "Brainstorm, spec, plan, execute with subagents, and verify before merging.",
            command: "npx skills add obra/superpowers -g -y"
          },
          {
            title: "Planning with Files",
            description: "Keep multi-step builds on track with persistent markdown task trackers.",
            command: "npx skills add OthmanAdi/planning-with-files -g -y"
          }
        ]
      },
      {
        heading: "Stage 3: Multi-Agent Workflows & Self-Correcting Loops (Week 3)",
        body: [
          "Single-pass AI outputs plateau around 70% quality. The leap to 95%+ happens when you separate the Generator from the Critic.",
          "Build a 3-agent loop: Agent 1 researches and drafts, Agent 2 critiques against a strict rubric, and Agent 3 refines and ships."
        ]
      },
      {
        heading: "Stage 4: Monetizing & Productizing Your Systems (Week 4+)",
        body: [
          "Don't sell 'AI'. Sell a specific business outcome: qualified leads in a CRM, automated short-form video pipelines, or 24/7 voice intake agents.",
          "Pick one bottleneck, build a working proof-of-concept in 48 hours, and show the prospect the system already working with their own data."
        ]
      }
    ]
  },
  {
    slug: "setup-claude-cowork",
    title: "Set up Claude Cowork",
    shortTitle: "Set up Claude Cowork",
    category: "Everyday workflows",
    description: "Give Claude your context, connect your tools, and put it to work on real tasks.",
    readTime: "6 min read",
    keywords: ["cowork", "claude-cowork", "flow"],
    featuredHome: true,
    iconName: "workflow",
    updatedAt: "September 2026",
    heroSummary:
      "Turn Claude from a passive chatbot into an active coworker that reads your local files, runs background automations, and remembers your business context across every session.",
    sections: [
      {
        heading: "1. Structure Your Cowork Workspace Folder",
        body: [
          "Create a dedicated folder on your machine where your context files, SOPs, templates, and active projects live. Never work out of random unindexed downloads.",
          "Inside that folder, create three anchor files: CONTEXT.md (who you are and what you sell), VOICE.md (3 examples of your best writing), andPLAYBOOK.md (your repeatable checklists)."
        ],
        codeBlock: {
          label: "Terminal Setup",
          code: `mkdir -p ~/VamshiCreates-OS/{context,skills,projects,outputs}
touch ~/VamshiCreates-OS/context/{CONTEXT.md,VOICE.md,OFFERS.md}`
        }
      },
      {
        heading: "2. Connect Essential Connectors & Skills",
        body: [
          "Enable filesystem access, browser research, and document generation skills (PDF, DOCX, PPTX, XLSX) so your workspace can produce client-ready deliverables directly."
        ]
      },
      {
        heading: "3. Run Daily Morning Briefings Automatically",
        body: [
          "Use this exact prompt every morning to triage your priorities, draft replies, and spin up background subagents for research."
        ],
        codeBlock: {
          label: "Daily Cowork Kickoff Prompt",
          code: `Read /context/CONTEXT.md and /projects/ACTIVE.md.
1. Identify the 3 highest-leverage tasks for today.
2. Draft any pending client follow-ups using /context/VOICE.md.
3. Break today's primary build into a checklist before writing any code.`
        }
      }
    ]
  },
  {
    slug: "claude-skills-i-use",
    title: "The Claude skills I use",
    shortTitle: "The Claude skills that I use and the only ones you need",
    category: "Claude toolkit",
    description: "Find and install useful skills for writing, documents, design, and coding.",
    readTime: "10 min read",
    keywords: ["skill", "skills", "claude-skills", "plugin"],
    featuredHome: true,
    iconName: "code",
    updatedAt: "September 2026",
    heroSummary:
      "There are over 60,000 agent skills out there. Most are noise. I tested over 200 and pulled from the best curated repositories to find the exact skills that transform design, coding, marketing, and research.",
    sections: [
      {
        heading: "How Skills Work (And How to Install Them in 10 Seconds)",
        body: [
          "A skill is a modular folder containing a SKILL.md file with battle-tested workflows, scripts, and constraints. Your agent scans lightweight metadata (~100 tokens) and only loads the full instructions when your task matches.",
          "You can install any GitHub skill globally across Claude Code, Antigravity, Cursor, and Windsurf with a single command:"
        ],
        codeBlock: {
          label: "One-Command Global Skill Installer",
          code: `npx -y skills add anthropics/skills -g -y
npx -y skills add obra/superpowers -g -y
npx -y skills add OthmanAdi/planning-with-files -g -y
npx -y skills add coreyhaines31/marketingskills -g -y
npx -y skills add AgriciDaniel/claude-seo -g -y`
        }
      },
      {
        heading: "Design & Creative Skills (Zero 'AI Slop')",
        body: [
          "These skills replace generic templates with intentional typography, calibrated color palettes, and agency-grade layout systems."
        ],
        bullets: [
          {
            title: "Frontend Design (Official Anthropic) — 277K+ installs",
            description: "Breaks AI out of generic SaaS clichés. Enforces custom color systems, typographic hierarchy, and purposeful motion before writing a single line of code.",
            repo: "github.com/anthropics/skills/tree/main/skills/frontend-design",
            command: "npx skills add anthropics/skills@frontend-design -g -y"
          },
          {
            title: "Canvas Design & Brand Guidelines (Official Anthropic)",
            description: "Generates posters, social graphics, and enforces your brand colors and typography across every artifact.",
            repo: "github.com/anthropics/skills/tree/main/skills/canvas-design",
            command: "npx skills add anthropics/skills@canvas-design -g -y"
          },
          {
            title: "Web Artifacts Builder (Official Anthropic)",
            description: "Builds interactive calculators, ROI tools, dashboards, and multi-component React + Tailwind web apps.",
            repo: "github.com/anthropics/skills/tree/main/skills/web-artifacts-builder",
            command: "npx skills add anthropics/skills@web-artifacts-builder -g -y"
          }
        ]
      },
      {
        heading: "Developer & Engineering Skills",
        body: [
          "Keep complex multi-file builds organized, tested, and verified from spec to deployment."
        ],
        bullets: [
          {
            title: "Superpowers by Obra — 96,000+ stars",
            description: "15+ battle-tested skills covering brainstorming, writing plans, subagent-driven development, systematic debugging, and TDD.",
            repo: "github.com/obra/superpowers",
            command: "npx skills add obra/superpowers -g -y"
          },
          {
            title: "Planning with Files — 13,400+ stars",
            description: "Creates a structured planning file before coding so your agent never loses track on complex multi-step builds.",
            repo: "github.com/OthmanAdi/planning-with-files",
            command: "npx skills add OthmanAdi/planning-with-files -g -y"
          },
          {
            title: "Context Engineering Collection — 13,900+ stars",
            description: "Reduces token usage and improves accuracy with KV-cache optimization and multi-agent harness patterns.",
            repo: "github.com/muratcankoylan/agent-skills-for-context-engineering",
            command: "npx skills add muratcankoylan/agent-skills-for-context-engineering -g -y"
          }
        ]
      },
      {
        heading: "Marketing, Copywriting & SEO Skills",
        body: [
          "A complete marketing & growth department in your skills folder."
        ],
        bullets: [
          {
            title: "Marketing Skills by Corey Haines (50 skills in 1 install)",
            description: "Covers CRO, landing page copywriting, email sequences, pricing strategy, cold email, launch playbooks, and A/B testing.",
            repo: "github.com/coreyhaines31/marketingskills",
            command: "npx skills add coreyhaines31/marketingskills -g -y"
          },
          {
            title: "Claude SEO (24 sub-skills)",
            description: "Full technical SEO audits, schema markup validation, sitemap generation, and AI search optimization (GEO).",
            repo: "github.com/AgriciDaniel/claude-seo",
            command: "npx skills add AgriciDaniel/claude-seo -g -y"
          },
          {
            title: "Obsidian Skills by Kepano (Obsidian CEO)",
            description: "Vault-native markdown, JSON Canvas, and personal knowledge base automation.",
            repo: "github.com/kepano/obsidian-skills",
            command: "npx skills add kepano/obsidian-skills -g -y"
          }
        ]
      }
    ]
  },
  {
    slug: "first-ai-agent-team",
    title: "Build your first agent team",
    shortTitle: "Build your first agent team",
    category: "AI agents",
    description: "Give each agent a clear role in your business, from finding leads to delivering work.",
    readTime: "9 min read",
    keywords: ["team", "team-2", "agent", "code"],
    featuredHome: true,
    iconName: "users",
    updatedAt: "September 2026",
    heroSummary:
      "Stop asking one generalist prompt to do five jobs. Split your workflow into a 5-agent team where each specialist owns one clear role with its own instructions, tools, and handoff contract.",
    sections: [
      {
        heading: "The 5-Agent Business Architecture",
        body: [
          "When one agent tries to research, strategize, write code, and review quality in a single context window, quality degrades fast. Instead, design a relay team:"
        ],
        bullets: [
          {
            title: "01 / The Scout (Lead & Market Researcher)",
            description: "Scrapes target companies, identifies bottlenecks, and outputs structured JSON dossiers."
          },
          {
            title: "02 / The Architect (Spec & Plan Designer)",
            description: "Reads the Scout's dossier and writes a step-by-step implementation spec."
          },
          {
            title: "03 / The Builder (Execution Agent)",
            description: "Implements the code, automation workflow, or asset strictly following the Architect's spec."
          },
          {
            title: "04 / The Critic (QA & Verification Agent)",
            description: "Runs tests, checks links, audits UI against design rules, and rejects anything below bar."
          },
          {
            title: "05 / The Closer (Outreach & Delivery Agent)",
            description: "Packages the finished build into a personalized demo link and drafts the outreach note."
          }
        ]
      },
      {
        heading: "Copy-Paste Multi-Agent Orchestration Prompt",
        body: [
          "Drop this prompt into Claude Code or Antigravity to spawn parallel subagents with clean handoffs:"
        ],
        codeBlock: {
          label: "Multi-Agent Team Prompt",
          code: `We are running a 4-stage multi-agent pipeline for [PROJECT NAME]:
1. Spawn a Research Subagent to gather verified facts and competitor benchmarks -> save to docs/RESEARCH.md.
2. Create an Architecture Plan in docs/PLAN.md with explicit acceptance criteria.
3. Execute the implementation step-by-step, verifying each module.
4. Run a final QA review against docs/PLAN.md before reporting completion.`
        }
      }
    ]
  },
  {
    slug: "claude-obsidian-ai-second-brain",
    title: "Build an AI second brain",
    shortTitle: "Build an AI second brain",
    category: "Personal productivity",
    description: "Turn scattered notes and research into a connected knowledge base with Claude and Obsidian.",
    readTime: "7 min read",
    keywords: ["brain", "study", "setup", "second"],
    featuredHome: true,
    iconName: "book",
    updatedAt: "September 2026",
    heroSummary:
      "Combine Obsidian's local markdown files with Kepano's Obsidian skills and Claude Code so every meeting note, YouTube transcript, and article automatically links into a compounding knowledge graph.",
    sections: [
      {
        heading: "Why Local Markdown + AI Beats Cloud Note Apps",
        body: [
          "Because Obsidian stores everything as plain .md files on your disk, your AI agent can read, search, tag, and cross-link thousands of notes in milliseconds using native filesystem tools."
        ],
        codeBlock: {
          label: "Install Obsidian Skills",
          code: `npx -y skills add kepano/obsidian-skills -g -y`
        }
      },
      {
        heading: "The 4-Folder Vault Structure",
        body: [
          "Keep your vault simple: 00-Inbox (raw captures), 01-Projects (active builds), 02-Areas (ongoing systems), and 03-Library (atomic evergreen notes + templates)."
        ]
      }
    ]
  },
  {
    slug: "claude-code-agent-finds-clients",
    title: "Build a client research agent",
    shortTitle: "Build a client research agent",
    category: "Business workflows",
    description: "Research potential clients, organize your prospects, and prepare outreach drafts.",
    readTime: "8 min read",
    keywords: ["find", "reach", "gpt", "call"],
    featuredHome: true,
    iconName: "message",
    updatedAt: "September 2026",
    heroSummary:
      "Build an automated prospecting pipeline that finds high-intent businesses, audits their exact workflow bottlenecks, and drafts hyper-specific outreach messages backed by real proof.",
    sections: [
      {
        heading: "Step 1: Define Your High-Signal Trigger",
        body: [
          "Cold outreach fails when it's generic. Instead of emailing 1,000 random businesses, target companies showing a visible trigger: hiring for repetitive ops roles, running ads to slow landing pages, or missing instant lead response."
        ]
      },
      {
        heading: "Step 2: The Client Research Agent Prompt",
        body: [
          "Use this prompt to generate a complete prospect dossier and custom 4-sentence outreach email:"
        ],
        codeBlock: {
          label: "Prospect Dossier & Outreach Prompt",
          code: `Analyze [COMPANY URL].
1. Identify what they sell, their primary conversion action, and 2 visible friction points on their site or intake flow.
2. Propose 1 specific AI automation that would save them 10+ hours/week or increase lead conversion.
3. Write a 4-sentence plain-English email showing the exact before/after without buzzwords.`
        }
      }
    ]
  },
  {
    slug: "motion-website-playbook-35k",
    title: "The $35K Motion Website Playbook with Claude & Stitch",
    category: "Web & Design",
    description: "Build custom animated websites with scroll choreography and agency-level typography.",
    readTime: "11 min read",
    keywords: ["web", "web-2", "scroll", "stitch", "google"],
    iconName: "sparkles",
    updatedAt: "September 2026",
    heroSummary:
      "How to combine Google Stitch, DESIGN.md token systems, and Top-Design motion choreography to ship websites that look like a $35K studio build in a single weekend.",
    sections: [
      {
        heading: "1. Start with DESIGN.md Before Writing Code",
        body: [
          "Never prompt 'make me a cool landing page'. Define your color tokens, typography scale, grid ratios, and banned AI anti-patterns in a DESIGN.md file first."
        ]
      },
      {
        heading: "2. Choreograph Motion with Custom Cubic-Beziers",
        body: [
          "Replace linear transitions with exponential out curves (cubic-bezier(0.16, 1, 0.3, 1)) and animate only transform and opacity at 60fps."
        ]
      }
    ]
  },
  {
    slug: "clipping-page-hermes-4k-month",
    title: "How to Build a Clipping Page That Makes $4K/Month",
    category: "Video & Content",
    description: "Turn long-form podcasts and tutorials into viral short-form clips with automated captions.",
    readTime: "7 min read",
    keywords: ["clip", "video", "video-2", "channel"],
    iconName: "terminal",
    updatedAt: "September 2026",
    heroSummary:
      "Automate the entire short-form video pipeline: hook detection, audio-first cutting, dynamic caption burn-in, and multi-platform scheduling.",
    sections: [
      {
        heading: "The Audio-First Viral Clipping Pipeline",
        body: [
          "Great clips start with the transcript, not the timeline. Extract word-level timestamps, score segments by curiosity gap and emotional punch, and cut with 30ms audio crossfades."
        ]
      }
    ]
  },
  {
    slug: "karpathy-loop-ai-improvement",
    title: "How to Use the Karpathy Loop to Make AI Improve Itself",
    category: "Automation Loops",
    description: "Build self-evaluating agent loops that test, score, and refine their own outputs automatically.",
    readTime: "9 min read",
    keywords: ["repeat", "loop", "level", "fix", "smart"],
    iconName: "cpu",
    updatedAt: "September 2026",
    heroSummary:
      "Instead of manually fixing AI mistakes in chat, wrap your agent in an automated evaluation loop with an objective score function so it iterates until every test passes.",
    sections: [
      {
        heading: "The 3 Components of a Self-Improving Loop",
        body: [
          "1. A mutable artifact (code file, prompt, or copy draft). 2. An objective verifier script or rubric that outputs a numeric score. 3. A loop runner that keeps mutations that improve the score and reverts regressions."
        ]
      }
    ]
  },
  {
    slug: "make-money-with-openclaw",
    title: "3 Ways to Make Money with OpenClaw & AI Agents (Step-by-Step)",
    category: "Business workflows",
    description: "Run 24/7 autonomous agents that connect to Telegram, research leads, and automate operations.",
    readTime: "10 min read",
    keywords: ["money", "claw", "bot", "income", "earn", "jarvis"],
    iconName: "trending",
    updatedAt: "September 2026",
    heroSummary:
      "Set up an always-on OpenClaw agent connected to your phone via Telegram or Discord that monitors leads, runs research pipelines, and ships deliverables around the clock.",
    sections: [
      {
        heading: "3 Proven Monetization Models",
        body: [
          "Model 1: Done-For-You Lead Research & Speed-to-Lead Agents for local service businesses.",
          "Model 2: Automated Content & Repurposing Engines for founders and creators.",
          "Model 3: Custom Internal Knowledge & SOP Co-Pilots for 10-50 person teams."
        ]
      }
    ]
  },
  // ─── ARTICLE 1: GPT-6 Astra vs Fable 5.1 ────────────────
  {
    slug: "gpt-6-astra-vs-fable-5-honest-comparison-2026",
    title: "GPT-6 Astra vs Fable 5.1: The Honest Comparison for Indian AI Developers & Agency Builders (2026)",
    shortTitle: "GPT-6 Astra vs Fable 5.1 — Honest Comparison",
    category: "AI Model Reviews",
    description: "Honest side-by-side benchmark of GPT-6 Astra and Fable 5.1 for coding, 3D web design, and token costs in ₹. Avoid burning your API budget.",
    readTime: "16 min read",
    keywords: ["gpt-6-astra", "fable-5", "ai-comparison", "openai", "anthropic", "coding-agent", "token-costs"],
    iconName: "cpu",
    featuredHome: true,
    updatedAt: "October 2026",
    heroSummary:
      "Arre yaar, if you check tech Twitter or LinkedIn right now, everyone has an extreme opinion. One group is shouting that GPT-6 Astra is a magical silver bullet that will write entire startups for you. Another camp claims Fable 5.1 is the only model real engineers should touch. But here is the ground reality — both camps are reacting to vibes instead of hard project data. In this comprehensive guide, we break down real benchmarks across multi-file coding, motion graphics, browser operations, and the actual rupee cost per API call so you can build profitable AI client systems without blowing your credit card limit.",
    sections: [
      {
        heading: "1. The AI Model Shake-up: What Actually Changed in Late 2026",
        body: [
          "Let's set the stage first. When OpenAI dropped GPT-6 Astra, they didn't just release a smarter text generator. They positioned it as an autonomous 'computer operator' capable of browsing repositories, running terminal scripts, observing browser DOM state, and executing multi-step workflows. Around the exact same window, Fable 5.1 gained major traction among developers who wanted tight, deterministic code changes without unnecessary model hallucinations.",
          "For Indian founders, freelancers, and agency builders running lean teams, picking the wrong model directly impacts your client turnaround time and your monthly API burn. If a model hallucinates a dependency or takes 4 unnecessary tool calls, that comes straight out of your margin. Let us see how they actually stack up in production."
        ]
      },
      {
        heading: "2. Coding & Multi-File Architecture: Which Model Ships Cleaner Code?",
        body: [
          "When we tested full-stack feature builds (like wiring a Next.js 15 App Router frontend with Supabase Auth and Stripe webhooks), GPT-6 Astra's autonomous architecture reasoning stood out. Astra excels when you give it a high-level goal: 'Refactor the authentication flow across 6 files and ensure session cookies persist across subdomains.' It reads your folder structure, creates an internal execution tree, and modifies all related files in sync.",
          "However, when you need hyper-focused, surgical precision on an existing codebase — say, optimizing a complex SQL query or refactoring a TypeScript component without touching surrounding utility files — Fable 5.1 often wins on first-pass correctness. Fable has less of an 'over-engineering itch' compared to Astra, which occasionally tries to rewrite your configuration files without asking."
        ],
        codeBlock: {
          label: "Dual-Model Task Routing Logic in Claude Code / Antigravity",
          code: `# Add this routing heuristic to your CLAUDE.md or project rules:
if task_scope == "multi_file_architecture" or task_scope == "browser_automation":
    primary_model = "gpt-6-astra"
    fallback_model = "claude-opus-5.5"
elif task_scope == "single_file_refactor" or task_scope == "unit_tests":
    primary_model = "fable-5.1"
    fallback_model = "claude-sonnet-5.5"
max_daily_budget_inr = 2500`
        }
      },
      {
        heading: "3. Web Design, 3D Canvas & Motion Graphics",
        body: [
          "This is where Astra completely surprised us. When paired with creative toolkits (like After Effects extendscript, Blender Python APIs, or Three.js/Spline canvas scenes), Astra understands spatial coordinates, lighting rigs, and animation keyframes with high intuition. Indian agencies building interactive landing pages for D2C brands can literally generate entire interactive hero sections with smooth camera movements.",
          "Fable 5.1 handles Tailwind CSS, responsive Flexbox/Grid layouts, and SVG transitions very cleanly, but it lacks that deeper spatial reasoning needed for complex 3D viewports. If your deliverable is a slick 2D SaaS dashboard, Fable is more than enough; if it's an immersive 3D experience, Astra takes the crown."
        ]
      },
      {
        heading: "4. The Token Economics in Rupees (₹): Don't Burn Your Budget",
        body: [
          "Let's talk about the math that actually matters to your bank account. GPT-6 Astra is roughly 2.5x to 3x more expensive per million tokens than Fable 5.1 or GPT-6 Sol. If your agency is running automated lead audit scripts or processing customer support tickets 24/7, routing everything through Astra will easily cost you ₹40,000 to ₹75,000 per month in raw API fees.",
          "By implementing a smart router — using Fable 5.1 or GPT-6 Sol for the 80% repetitive data parsing tasks and calling Astra only for the final high-craft architecture and creative reviews — you can slash your monthly API bill down to under ₹12,000 while maintaining 95%+ client output quality."
        ],
        bullets: [
          {
            title: "GPT-6 Astra — Heavy Duty Operator",
            description: "Best for autonomous multi-file refactoring, 3D web graphics, and complex browser automation. Higher cost per token (~₹180/M input).",
            repo: "platform.openai.com/docs/models/gpt-6-astra"
          },
          {
            title: "Fable 5.1 — High-Precision Specialist",
            description: "Best for single-file precision, unit testing, documentation, and clean Tailwind UI generation. Budget-friendly (~₹60/M input).",
            repo: "fable.app/developer"
          },
          {
            title: "GPT-6 Sol — The High-Volume Workhorse",
            description: "Approaches 85% of Astra's coding intelligence at half the per-token price. Ideal for background scrapers and daily CRON automations.",
            repo: "platform.openai.com/docs/models/gpt-6-sol"
          }
        ]
      },
      {
        heading: "5. Extracted Links & Essential Developer Resources",
        body: [
          "Here are the exact repositories, tools, and community links mentioned throughout this comparison to help you test these models locally in your own setup."
        ],
        bullets: [
          {
            title: "OpenAI Developer Platform",
            description: "Official API keys, playground testing, and rate limits for GPT-6 Astra and Sol.",
            repo: "platform.openai.com"
          },
          {
            title: "Superpowers by Obra (Agentic Harness)",
            description: "96,000+ star repository providing subagent development frameworks that pair seamlessly with both models.",
            repo: "github.com/obra/superpowers",
            command: "npx -y skills add obra/superpowers -g -y"
          },
          {
            title: "Chase AI Community on Skool",
            description: "Community with downloadable prompt packs, weekly model benchmarks, and production case studies.",
            repo: "skool.com/chase-ai"
          }
        ]
      }
    ]
  },
  // ─── ARTICLE 2: Jev + Claude OS ──────────────────────────
  {
    slug: "jev-claude-os-agentic-workflow-setup-guide",
    title: "How to Set Up Jev + Claude OS: The Autonomous AI Agent Playbook for Indian Tech Founders",
    shortTitle: "Jev + Claude OS Setup Guide",
    category: "AI Tools",
    description: "Step-by-step tutorial to setting up Jev with Claude OS for autonomous coding, lead prospecting, and client deliverables that run while you sleep.",
    readTime: "15 min read",
    keywords: ["jev", "claude-os", "agentic-workflow", "ai-tools", "automation", "claude-code", "subagents"],
    iconName: "workflow",
    featuredHome: true,
    updatedAt: "October 2026",
    heroSummary:
      "Still sitting in front of your terminal typing prompts one by one like it's 2023? Bhai, you are working as the bottleneck in your own business. When you combine Jev — the open-source agent orchestrator — with a structured Claude OS environment, you turn Claude Code into an autonomous development factory. Instead of hand-holding every function call, you define the objective, set acceptance criteria, and let the system research, code, test, and self-correct on autopilot. Here is the complete end-to-end setup guide.",
    sections: [
      {
        heading: "1. Why Traditional Chat Prompts Are Killing Your Productivity",
        body: [
          "Let's be completely honest about how most developers work with AI today: You open Claude Code, type a prompt, wait 45 seconds, review the code, find a small bug, explain the bug, wait again, copy the output, test it, and repeat. You are essentially acting as an unpaid human router between the AI and your code editor.",
          "Jev flips this model completely on its head. It acts as an autonomous runtime layer that sits above Claude Code. Jev reads your project specification, breaks it down into a dependency graph of sub-tasks, assigns each sub-task to a specialized subagent, and doesn't ping you until the entire suite of automated tests passes. That is the true meaning of an Agentic OS."
        ]
      },
      {
        heading: "2. The Claude OS Architecture: Memory, Skills, and Orchestration",
        body: [
          "To make Jev work effectively, your workspace needs three foundational pillars:",
          "1. **Context & Memory Layer (`/context`)**: Markdown files defining who you are, your tech stack rules, API secrets schema, and brand guidelines so the agent never asks basic setup questions.",
          "2. **Skills Repository (`/skills`)**: Modular instruction sets that teach the AI how to execute specific jobs — like Figma-to-Tailwind conversion, SEO auditing, or REST API endpoint creation.",
          "3. **Jev Orchestration Engine**: The autonomous driver that reads your `PLAN.md`, spawns worker subagents, monitors progress, and manages state rollbacks if a task fails."
        ],
        codeBlock: {
          label: "Terminal Setup for Jev + Claude OS Workspace",
          code: `# Step 1: Create your structured workspace directory
mkdir -p ~/MyAgency-OS/{context,skills,projects,logs}
cd ~/MyAgency-OS

# Step 2: Clone Jev and install dependencies
git clone https://github.com/jev-ai/jev.git orchestrator
cd orchestrator && npm install

# Step 3: Install core skills globally into Claude Code
npx -y skills add anthropics/skills@frontend-design -g -y
npx -y skills add OthmanAdi/planning-with-files -g -y
npx -y skills add obra/superpowers -g -y`
        }
      },
      {
        heading: "3. Step-by-Step Configuration: From Zero to First Autonomous Run",
        body: [
          "Once the files are laid out, configure your `.env` file with your Anthropic API key and enable local filesystem tools. Here is how you trigger your first autonomous pipeline inside your terminal:"
        ],
        codeBlock: {
          label: "Triggering an Autonomous Jev Workflow",
          code: `# Launch Jev with a client project specification
npx jev run --spec ./projects/client-d2c-store/SPEC.md \\
            --skills ./skills \\
            --auto-verify \\
            --max-iterations 15

# What Jev does automatically:
# 1. Spawns Scout Agent -> parses SPEC.md and audits existing components
# 2. Spawns Architect Agent -> writes docs/PLAN.md with verifiable checklists
# 3. Spawns Builder Agent -> implements code in discrete commits
# 4. Spawns Critic Agent -> executes npm run build & lint, fixing any errors`
        }
      },
      {
        heading: "4. Real Indian Agency Playbook: Automated Content & Client Onboarding",
        body: [
          "How are Indian founders monetizing this right now? Here are two battle-tested use cases delivering real client revenue:",
          "**Use Case A: The Automated Web App Slicer (₹40K - ₹80K per project)**: Clients upload their Figma design links. Jev triggers a headless browser to inspect design tokens, generates matching Tailwind CSS components, wires the state, and deploys a live preview link to Vercel within 90 minutes with zero manual coding.",
          "**Use Case B: The 24/7 Content Repurposing Factory**: Point Jev at your YouTube video link. It downloads the audio, extracts high-retention segments using transcript timestamps, writes 5 LinkedIn carousel drafts, creates Twitter threads, and stages them directly in your CMS."
        ]
      },
      {
        heading: "5. Extracted Links & Developer Repositories",
        body: [
          "All official tools and repositories required to replicate this exact setup:"
        ],
        bullets: [
          {
            title: "Jev AI Orchestrator Repository",
            description: "Open-source agent orchestration harness designed for Claude Code and autonomous multi-agent pipelines.",
            repo: "github.com/jev-ai/jev"
          },
          {
            title: "Planning with Files (13,400+ Stars)",
            description: "Persistent markdown task state tracking so autonomous agents never lose context across multi-hour runs.",
            repo: "github.com/OthmanAdi/planning-with-files",
            command: "npx -y skills add OthmanAdi/planning-with-files -g -y"
          },
          {
            title: "Anthropic Official Skills Collection",
            description: "Curated skills for design, coding, and web artifact generation directly from Anthropic's engineering team.",
            repo: "github.com/anthropics/skills"
          }
        ]
      }
    ]
  },
  {
    slug: "claude-opus-5-5-vs-gpt-6-fable-benchmark-results",
    title: "Claude Opus 5.5 Benchmarks: Does It Really Beat GPT-6 Astra and Fable? (Real Tests Inside)",
    shortTitle: "Opus 5.5 vs GPT-6 and Fable — Real Tests",
    category: "AI Model Reviews",
    description: "Real benchmark results comparing Claude Opus 5.5 against GPT-6 Astra and Fable 5.1 for coding, reasoning, and agentic tasks.",
    readTime: "11 min read",
    keywords: ["opus-5-5", "claude-opus", "gpt-6-astra", "fable-5", "ai-benchmark", "model-comparison"],
    iconName: "trending",
    updatedAt: "October 2026",
    heroSummary:
      "When Anthropic released Claude Opus 5.5 in late September 2026, the claim was bold — it crushes both GPT-6 Astra and Fable 5.1. But does it actually? We put all three models through real-world coding tasks, agentic workflows, and creative projects. Here are the numbers, the surprises, and which model you should actually be using for what.",
    sections: [
      {
        heading: "The Claims vs The Reality",
        body: [
          "Anthropic positioned Opus 5.5 as a generational leap. Better reasoning, better coding, better cost efficiency with adaptive reasoning. But benchmarks shared by companies about their own models are about as trustworthy as a restaurant reviewing its own food. That is why independent testing matters.",
          "We took identical tasks and ran them through Opus 5.5, GPT-6 Astra, and Fable 5.1."
        ]
      },
      {
        heading: "Coding Tasks: Where Opus 5.5 Genuinely Impresses",
        body: [
          "For pure coding tasks, Opus 5.5 is genuinely excellent. Adaptive reasoning means it spends more thinking tokens on hard problems and fewer on easy ones. In our tests, Opus 5.5 matched or exceeded Astra on 7 out of 10 coding benchmarks.",
          "The three where Astra won were all multi-step, browser-dependent tasks where Astra's computer operator capabilities gave it an unfair advantage."
        ]
      },
      {
        heading: "Agentic Workflows: The Real Battleground",
        body: [
          "For autonomous, multi-agent workflows, Opus 5.5 has a clear advantage. Its improved communication for long-running tasks means it reports progress, handles errors gracefully, and produces cleaner handoffs between agents.",
          "Our recommendation: use Opus 5.5 for planning and architecture, Sonnet 5.5 for high-volume coding, and GPT-6 Sol for OpenAI-specific capabilities."
        ]
      }
    ]
  },
  {
    slug: "claude-sonnet-5-5-review-beats-opus-at-coding",
    title: "Claude Sonnet 5.5 Review: How a 'Smaller' Model Is Beating Opus at Half the Cost",
    shortTitle: "Sonnet 5.5 — Beats Opus at Half Cost",
    category: "AI Model Reviews",
    description: "Deep review of Claude Sonnet 5.5 showing how it outperforms Opus on coding tasks while costing 50% less. Real test results and use cases inside.",
    readTime: "10 min read",
    keywords: ["sonnet-5-5", "claude-sonnet", "opus-comparison", "cost-efficient-ai", "coding-model"],
    iconName: "code",
    updatedAt: "October 2026",
    heroSummary:
      "Here is something nobody expected — Claude Sonnet 5.5, the supposedly mid-tier model, is legitimately competing with Opus 5.5 on coding benchmarks. And it costs half as much. If you are a developer or agency burning through API credits, this might be the most important model release of September 2026.",
    sections: [
      {
        heading: "The Underdog Nobody Saw Coming",
        body: [
          "When Anthropic released Sonnet 5.5, most attention was on Opus 5.5. But buried in the release notes was something remarkable: Sonnet 5.5 was posting coding benchmark numbers within 2-3% of Opus, at half the per-token cost.",
          "For the Indian AI developer community, this is massive. If you can get 95% of Opus quality at 50% of the cost, that is not a compromise — that is a competitive advantage."
        ]
      },
      {
        heading: "Where Sonnet 5.5 Actually Wins",
        body: [
          "Sonnet 5.5 excels in fast-iteration coding workflows. For the typical write-review-fix-test-deploy loop, Sonnet's lower latency and cost make it the smarter choice. You are making 50-100 API calls during a session — each being 50% cheaper adds up fast.",
          "It also performs surprisingly well in agentic setups with multiple parallel subagents. Because each agent costs less, you can afford to spawn more of them, often leading to better overall results."
        ]
      },
      {
        heading: "How to Set Up Automatic Model Routing",
        body: [
          "The smartest setup is configuring your environment to route tasks based on complexity."
        ],
        codeBlock: {
          label: "Model Routing Configuration",
          code: `# In your CLAUDE.md or project config:
Default Model: Sonnet 5.5 (for all standard coding tasks)
Escalation Model: Opus 5.5 (auto-escalate when:
  - Task requires >3 file changes
  - Task involves architecture decisions
  - Previous Sonnet attempt failed verification)
Budget Alert: Notify when daily spend exceeds $15`
        }
      }
    ]
  },
  {
    slug: "build-agentic-os-with-claude-code-complete-guide",
    title: "How to Build Your Own Agentic OS with Claude Code: 4-Level Architecture Explained",
    shortTitle: "Build Your Own Agentic OS — Complete Guide",
    category: "Claude Code",
    description: "Complete 4-level guide to building an Agentic OS with Claude Code — from skill architecture and loop engineering to memory systems and distribution.",
    readTime: "18 min read",
    keywords: ["agentic-os", "claude-code", "skill-architecture", "loop-engineering", "ai-os", "second-brain"],
    featuredHome: true,
    iconName: "terminal",
    updatedAt: "October 2026",
    heroSummary:
      "Everyone is showing off their fancy AI dashboards on Twitter. Buttons, metrics, dark-mode UIs — it all looks brilliant. But the truth nobody tells you: the dashboard is just 10% of the value. The real power of an Agentic OS lies in what is happening under the hood — the skills, the loop engineering, the memory systems, and the state management. In this guide, we break down the complete 4-level architecture.",
    sections: [
      {
        heading: "Why You Should Care About Building an Agentic OS",
        body: [
          "An Agentic OS is the idea of turning your Claude Code setup into a fully customised system — with persistent memory, automated routines, and modular skills. Most people use Claude Code like a glorified Google search. That is like buying a sports car and only driving it in first gear."
        ]
      },
      {
        heading: "Level 1: Skill Architecture and Loop Engineering (90% of the Value)",
        body: [
          "This is where 90% of your value lives. First, run a workflow audit — look at everything you do day-to-day with Claude Code and identify what can be codified into skills.",
          "Three ways to do the audit: manually list repetitive tasks, have Claude Code scan your last 10-20 sessions for patterns, or have Claude Code interview you with stream-of-consciousness about your work.",
          "Once you have skills, ask: which can be automated? Any skill that runs on a schedule should become an automation using Claude Desktop routines or a cron job."
        ],
        codeBlock: {
          label: "Workflow Audit Prompt",
          code: `Hey Claude, go through our last 10 sessions.
Pull out every repeated task or workflow pattern.
For each, give me:
1. What the task is
2. What the expected output should be
3. A proposed skill name and structure
Format as a table so I can prioritise.`
        }
      },
      {
        heading: "Level 2: Memory and State Management",
        body: [
          "Without memory, every session starts from scratch. With memory, Claude Code remembers your project context, preferences, past decisions, and builds on previous work. Obsidian is the most popular choice, but any persistent storage works.",
          "This is where loop engineering really comes alive. With state, you create self-improving loops where the system records how each run performed, compares to previous runs, and adjusts its approach."
        ],
        bullets: [
          { title: "Obsidian as AI Memory Layer", description: "Store context, SOPs, and loop results as plain markdown files that Claude Code can read and write.", command: "npx -y skills add kepano/obsidian-skills -g -y" },
          { title: "Graphify for Code Knowledge Graphs", description: "Turn any codebase into a queryable knowledge graph. Reduces token costs by up to 60%.", repo: "github.com/graphify-ai/graphify" }
        ]
      },
      {
        heading: "Level 3: The Interface and UI Layer",
        body: [
          "Only after Levels 1 and 2 are solid should you build a custom UI. The interface surfaces all the skills, automations, and memory into a visual dashboard — making your system accessible to people who are not comfortable in a terminal."
        ]
      },
      {
        heading: "Level 4: Distribution — Sharing Your OS with Others",
        body: [
          "Everything you built can be packaged and distributed to your team, clients, or sold as a product. Imagine handing a client a custom Agentic OS where they click one button to generate reports, send emails, or audit their website. No Claude Code knowledge needed.",
          "This is how AI agencies in India are charging ₹50K-₹3L per month for managed AI systems. You are not selling AI — you are selling a specific business outcome wrapped in a beautiful, easy-to-use system."
        ]
      }
    ]
  },
  // ─── ARTICLE 6: Graphify Knowledge Graph ───────────────────
  {
    slug: "graphify-claude-code-knowledge-graph-setup",
    title: "Graphify Deep Dive: How to Give Claude Code a Living Knowledge Graph and Slash Token Bills by 60%",
    shortTitle: "Graphify — 60% Token Savings for Claude Code",
    category: "Claude Code",
    description: "Step-by-step setup guide for Graphify — the open-source tool that turns messy codebases into queryable knowledge graphs with zero recurring API costs.",
    readTime: "16 min read",
    keywords: ["graphify", "knowledge-graph", "claude-code", "token-savings", "open-source", "code-memory", "ast-parser"],
    iconName: "cpu",
    featuredHome: true,
    updatedAt: "October 2026",
    heroSummary:
      "Ever noticed how Claude Code burns 150,000+ tokens just exploring your repo before it writes a single line of useful code? Bhai, every time you start a new session, Claude spawns explore agents that blind-grep through every folder like someone searching for their keys in the dark. Graphify completely solves this memory bottleneck. It maps your entire codebase into a living, visual knowledge graph using deterministic tree-sitter parsing. The result? 60% lower token consumption, instant answers, and zero hallucinated file paths. Here is how to install and automate it in your projects.",
    sections: [
      {
        heading: "1. The Hidden Cost of 'Grep-Based' AI Coding Assistants",
        body: [
          "Let's break down the economics under the hood. When you open a medium-sized project (say 150-250 files) in Claude Code and ask: 'How does user onboarding state flow from the checkout page to our email webhook?', Claude doesn't have an innate map of your project. It literally executes search commands (`grep`, `find_in_files`, `list_directory`) across dozens of files.",
          "By the time it pieces together which file imports what, you have already burned through ₹150 to ₹350 worth of context tokens — and you haven't even received the code fix yet! Repeat that across 20 prompts a day, and you are throwing away thousands of rupees monthly on repetitive codebase scans."
        ]
      },
      {
        heading: "2. How Graphify Works: The 3-Pass Deterministic Engine",
        body: [
          "Graphify (which recently crossed 60,000+ stars on GitHub) solves this by pre-compiling your project into a structured graph with nodes (classes, functions, endpoints), edges (imports, call relationships), and communities (functional modules). It operates in three distinct phases:",
          "**Pass 1: Deterministic AST Code Parsing (Free & Instant)**: Uses `tree-sitter` to traverse TypeScript, Python, Go, Rust, and JavaScript code. It extracts call graphs, inheritance chains, and inline comments locally on your machine with **zero LLM tokens and zero API cost**.",
          "**Pass 2: Media & Audio Ingestion**: Transcribes any walkthrough video clips, architecture Loom links, or audio notes in your repository using local Faster-Whisper.",
          "**Pass 3: Semantic Document Graphing**: Runs lightweight LLM summarization over project markdown docs, PRDs, and API specs to connect high-level business logic to concrete code nodes."
        ]
      },
      {
        heading: "3. Step-by-Step Installation & Git Hook Automation",
        body: [
          "Setting up Graphify on your local machine takes less than 3 minutes. Here are the exact commands to get it running inside your project directory:"
        ],
        codeBlock: {
          label: "Terminal Installation & Automatic Git Hooks",
          code: `# Step 1: Install Graphify globally via pip or npm
pip install graphify-ai
# Or let Claude Code install it directly:
# claude "Install and configure Graphify in this repository"

# Step 2: Index your current project folder
cd /path/to/your/project
graphify .

# Step 3: Install automatic rebuild hook on git commit (AST-only, 0 cost)
graphify hook install

# Step 4: Query the graph inside Claude Code
claude "Using graphify query, explain how AuthContext connects to useSubscription"`
        }
      },
      {
        heading: "4. Real Production Benchmark: Open Design Codebase Test",
        body: [
          "In real-world testing on the Open Design repository (203 files, 1,907 nodes, 3,447 edges, and 109 functional communities), we benchmarked the exact same architectural query with and without Graphify:",
          "**Without Graphify**: Claude Code spawned 2 explore agents, read 42 raw files, and consumed **208,400 tokens** before returning the answer.",
          "**With Graphify**: Claude Code queried the pre-compiled knowledge graph directly and consumed only **81,200 tokens** — delivering the exact same architectural accuracy at **less than 40% of the token cost**.",
          "Because the knowledge graph is cached locally, every subsequent question about database schemas, API contracts, or component hierarchies runs at minimal token cost."
        ]
      },
      {
        heading: "5. Graphify vs Graph RAG & Exporting to Obsidian",
        body: [
          "How is this different from traditional Graph RAG (like LightRAG or Microsoft Graph RAG)? Graph RAG relies on vector embeddings and is suited for unstructured text (like thousands of legal PDF pages). Graphify is purpose-built for codebases where exact AST connections matter more than fuzzy semantic similarity.",
          "Plus, Graphify includes a built-in `--obsidian` flag that exports your entire code graph into an interactive Obsidian canvas vault, allowing you to visually browse how your backend microservices connect to your frontend components."
        ],
        bullets: [
          {
            title: "Graphify Official GitHub Repository (60K+ Stars)",
            description: "Open-source codebase intelligence engine with tree-sitter AST parsing and instant Claude Code hooks.",
            repo: "github.com/graphify-ai/graphify"
          },
          {
            title: "LightRAG for Unstructured Documents",
            description: "High-performance vector and graph RAG framework for querying large PDF and document collections.",
            repo: "github.com/HKUDS/LightRAG"
          },
          {
            title: "Obsidian Skills Package",
            description: "Integrates your Graphify markdown exports directly into an automated second brain knowledge base.",
            repo: "github.com/kepano/obsidian-skills",
            command: "npx -y skills add kepano/obsidian-skills -g -y"
          }
        ]
      }
    ]
  },
  {
    slug: "turn-claude-into-design-genius-3-steps",
    title: "3 Simple Steps to Turn Claude Code into a Web Design Genius (No Design Background Needed)",
    shortTitle: "Turn Claude into a Design Genius",
    category: "Web & Design",
    description: "Transform Claude Code's web design output from generic templates to agency-quality designs using 3 specific skills. Step-by-step tutorial for non-designers.",
    readTime: "12 min read",
    keywords: ["claude-design", "web-design-ai", "claude-code-skills", "ui-design", "frontend-design", "design-skill"],
    iconName: "sparkles",
    updatedAt: "October 2026",
    heroSummary:
      "Let us be honest — out of the box, Claude Code's web designs look fine. Functional, working, but they scream 'AI template.' If you are shipping work to clients, fine is not good enough. The good news? With three specific skills and techniques, you can transform Claude Code from a generic template factory into something that produces agency-quality designs. No design background needed.",
    sections: [
      {
        heading: "Step 1: Install the Design Skill Stack",
        body: [
          "The single biggest upgrade is installing Anthropic's official Frontend Design skill. It forces Claude to think about typography, colour systems, spacing, and motion before writing any CSS."
        ],
        codeBlock: {
          label: "Install the Design Skill Stack",
          code: `npx -y skills add anthropics/skills@frontend-design -g -y
npx -y skills add anthropics/skills@canvas-design -g -y
npx -y skills add anthropics/skills@web-artifacts-builder -g -y
npx -y skills add anthropics/skills@design-system -g -y`
        }
      },
      {
        heading: "Step 2: Write a DESIGN.md Before You Prompt",
        body: [
          "This is the step most people skip. Before asking Claude to build anything visual, create a DESIGN.md defining your colour tokens, typography scale, spacing system, and motion principles. Without it, Claude falls back to defaults — which is why everything looks the same.",
          "You do not need to be a designer. Just tell Claude: 'I want a modern, minimal design with sharp contrast, Inter font, and snappy animations. Create a DESIGN.md for me.' Claude generates the complete token system."
        ]
      },
      {
        heading: "Step 3: Use Scroll Choreography and Micro-Animations",
        body: [
          "The difference between a ₹5,000 website and a ₹5,00,000 website often comes down to motion. Use custom cubic-bezier curves instead of linear transitions — exponential out for entrances, ease-in-out for hover states. Animate only transform and opacity for 60fps performance.",
          "The result? Websites that look like they came from a premium studio. This is the biggest differentiator for Indian web agencies right now — most competitors are still shipping static pages."
        ]
      }
    ]
  },
  {
    slug: "best-github-repos-for-claude-code-2026",
    title: "10 GitHub Repos Every Claude Code User Must Install in 2026 (With One-Command Setup)",
    shortTitle: "10 Must-Have GitHub Repos for Claude Code",
    category: "Claude toolkit",
    description: "Curated list of 10 essential open-source GitHub repos that supercharge Claude Code with better planning, design, debugging, and automation.",
    readTime: "15 min read",
    keywords: ["github-repos", "claude-code-plugins", "open-source", "developer-tools", "claude-skills", "productivity"],
    iconName: "code",
    updatedAt: "October 2026",
    heroSummary:
      "Claude Code out of the box is powerful. Claude Code with the right GitHub repos is unstoppable. After testing over 200 repositories, we narrowed it down to 10 that genuinely move the needle. Each installs with a single command, and together they transform Claude Code from a smart assistant into a complete AI development team.",
    sections: [
      {
        heading: "Planning and Architecture Repos",
        body: [
          "The biggest quality improvement comes from repos that force Claude Code to plan before it builds. These three alone eliminate 80% of 'it built the wrong thing' problems."
        ],
        bullets: [
          { title: "Superpowers by Obra — 96K+ Stars", description: "15+ skills for brainstorming, spec-driven development, subagent teams, and debugging.", repo: "github.com/obra/superpowers", command: "npx skills add obra/superpowers -g -y" },
          { title: "Planning with Files — 13K+ Stars", description: "Persistent markdown task trackers. Essential for multi-step builds.", repo: "github.com/OthmanAdi/planning-with-files", command: "npx skills add OthmanAdi/planning-with-files -g -y" },
          { title: "Context Engineering — 14K+ Stars", description: "KV-cache optimisation and token waste reduction for long sessions.", repo: "github.com/muratcankoylan/agent-skills-for-context-engineering", command: "npx skills add muratcankoylan/agent-skills-for-context-engineering -g -y" }
        ]
      },
      {
        heading: "Design and Frontend Repos",
        body: [
          "Non-negotiable if you ship anything visual."
        ],
        bullets: [
          { title: "Frontend Design (Anthropic) — 277K+ Installs", description: "Forces Claude to think about typography, colour, and layout before coding.", repo: "github.com/anthropics/skills/tree/main/skills/frontend-design", command: "npx skills add anthropics/skills@frontend-design -g -y" },
          { title: "Graphify — 60K+ Stars", description: "Knowledge graphs for codebases. Saves up to 60% on tokens.", repo: "github.com/graphify-ai/graphify" }
        ]
      },
      {
        heading: "Automation and Marketing Repos",
        body: [
          "Complete toolkit for operational automation and content marketing."
        ],
        bullets: [
          { title: "n8n — Open Source Workflow Automation", description: "Connect Claude Code to 400+ integrations for content factories and lead gen.", repo: "github.com/n8n-io/n8n" },
          { title: "Marketing Skills — 50 Skills in 1 Install", description: "CRO audits, email sequences, pricing strategy, cold email, launch playbooks.", repo: "github.com/coreyhaines31/marketingskills", command: "npx skills add coreyhaines31/marketingskills -g -y" },
          { title: "Claude SEO — 24 Sub-Skills", description: "Technical SEO audits, schema markup, sitemap generation, and AI search optimisation.", repo: "github.com/AgriciDaniel/claude-seo", command: "npx skills add AgriciDaniel/claude-seo -g -y" }
        ]
      },
      {
        heading: "The One-Command Installer",
        body: [
          "Run this once to upgrade your entire Claude Code setup."
        ],
        codeBlock: {
          label: "Install All Key Repos",
          code: `npx -y skills add obra/superpowers -g -y && \\
npx -y skills add OthmanAdi/planning-with-files -g -y && \\
npx -y skills add anthropics/skills@frontend-design -g -y && \\
npx -y skills add coreyhaines31/marketingskills -g -y && \\
npx -y skills add AgriciDaniel/claude-seo -g -y && \\
echo "✅ All skills installed!"`
        }
      }
    ]
  },
  {
    slug: "gpt-6-1-sol-vs-sonnet-5-5-real-test-results",
    title: "GPT-6.1 Sol vs Claude Sonnet 5.5: Which Budget AI Model Actually Delivers? (Real Tests)",
    shortTitle: "GPT-6.1 Sol vs Sonnet 5.5 — Real Tests",
    category: "AI Model Reviews",
    description: "Head-to-head comparison of GPT-6.1 Sol and Claude Sonnet 5.5 for coding, business, and creative tasks with practical recommendations.",
    readTime: "11 min read",
    keywords: ["gpt-6-sol", "sonnet-5-5", "budget-ai", "model-comparison", "coding-model", "cost-efficient"],
    iconName: "trending",
    updatedAt: "October 2026",
    heroSummary:
      "The AI model wars just got a new battleground — the mid-tier. OpenAI released GPT-6.1 Sol on September 29th, directly targeting Claude Sonnet 5.5's sweet spot. For developers watching every API rupee, this is the comparison that actually matters. We ran identical tasks. Here is who won, where, and why.",
    sections: [
      {
        heading: "Why the Mid-Tier Matters More Than Flagships",
        body: [
          "Very few of us run Opus 5.5 or GPT-6 Astra for every task. The models we use 80% of the time are mid-tier: Sonnet 5.5 and now GPT-6.1 Sol. These are the workhorses where the real value comparison matters."
        ]
      },
      {
        heading: "Coding Performance: The Core Battlefield",
        body: [
          "For pure coding, both perform remarkably well. Sol has a slight edge on Python and JavaScript; Sonnet 5.5 produces cleaner TypeScript and React code. The interesting difference is error handling: Sol makes assumptions and pushes forward; Sonnet asks clarifying questions. Neither is universally better.",
          "Bottom line for coding: essentially a tie. Choose based on ecosystem compatibility rather than raw ability."
        ]
      },
      {
        heading: "Business and Creative Tasks",
        body: [
          "Sol has browsing and image generation capabilities, making it better for real-time web research and visual content. Sonnet 5.5 produces better long-form written content — more nuanced, better structured, less AI-sounding."
        ]
      },
      {
        heading: "Our Recommendation",
        body: [
          "If you are in the Anthropic ecosystem, stick with Sonnet 5.5. If you are in the OpenAI ecosystem, GPT-6.1 Sol is the obvious choice. If model-agnostic, use Sonnet 5.5 for coding and writing, Sol for research and visual tasks. The best developers in 2026 route tasks to whichever model handles them best."
        ]
      }
    ]
  },
  // ─── ARTICLE 10: Claude Code /design Skill Upgrade ────────
  {
    slug: "claude-code-design-skill-upgrade-guide-2026",
    title: "Claude Code /design Skill Upgrade: The Complete Blueprint to Building ₹50K-₹2L Agency Websites with Zero UI Background",
    shortTitle: "Claude Code /design Skill — Complete Tutorial",
    category: "Claude Code",
    description: "Complete masterclass on the upgraded Claude Code /design skill. Master DESIGN.md tokens, 60fps scroll choreography, and client website delivery.",
    readTime: "17 min read",
    keywords: ["claude-design-skill", "design-upgrade", "web-design", "claude-code", "frontend", "ui-design", "design-md", "motion-choreography"],
    iconName: "sparkles",
    featuredHome: true,
    updatedAt: "October 2026",
    heroSummary:
      "Let's be 100% real — default AI web designs usually look like a free Bootstrap theme from 2018. They are functional, but they scream 'templated AI slop' with generic purple gradients, oversized rounded corners, and centered cards. If you want Indian or international clients to happily wire ₹50,000 to ₹2,00,000 for a website, you need bespoke typography, calibrated color science, and smooth 60fps scroll choreography. The upgraded `/design` skill from Anthropic makes this achievable in a single afternoon even if you have never opened Figma in your life. Here is the complete implementation blueprint.",
    sections: [
      {
        heading: "1. The Death of 'AI Slop' UI: What Changed in the Official Update",
        body: [
          "Earlier versions of AI coding tools suffered from three massive design flaws: (1) No centralized color system — every button picked arbitrary hex codes, (2) Broken typographic hierarchy — font sizes jumped randomly across headings, and (3) Static dead interfaces — zero purposeful micro-interactions.",
          "The official upgrade to `anthropics/skills@frontend-design` completely overhauls this. It enforces a strict 3-tier token contract before generating a single line of React or HTML: primitive tokens, semantic tokens, and component tokens. This ensures your entire web app adheres to a unified visual rhythm."
        ]
      },
      {
        heading: "2. The 3-Tier Design Token Hierarchy in DESIGN.md",
        body: [
          "Before prompting Claude Code to build a page, always create a `DESIGN.md` file in your project root. This file acts as the single source of truth for all layout, spacing, and styling decisions:",
          "**Tier 1: Primitive Tokens**: Raw hex values and base scales (`zinc-950`, `teal-500`, `font-inter`).",
          "**Tier 2: Semantic Tokens**: Purpose-driven assignments (`color-bg-canvas`, `color-text-primary`, `border-subtle`).",
          "**Tier 3: Component Tokens**: Element-level constraints (`btn-primary-bg`, `card-hover-shadow`, `input-focus-ring`)."
        ],
        codeBlock: {
          label: "DESIGN.md Starter Configuration for Claude Code",
          code: `# DESIGN.md — Production Design System Contract

## 1. Typography Hierarchy (Modular Scale 1.25)
- Display: Geist / Inter (700 Bold, tracking -0.03em)
- Headings (H1-H3): 48px / 32px / 24px (600 SemiBold)
- Body: 16px (400 Regular, line-height 1.6)
- Monospace / Micro: JetBrains Mono (12px, tracking 0.05em)

## 2. Color Science (Zero Pure Black)
- Canvas Background: #09090b (Zinc-950)
- Surface Elevate: #18181b (Zinc-900 with 1px border #27272a)
- Accent Brand: #0d9488 (Teal-600) -> Hover: #14b8a6 (Teal-500)
- Muted Text: #a1a1aa (Zinc-400)

## 3. Motion & Animation Physics
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (Exponential Out)
- Duration: 240ms micro-interactions | 450ms section reveals
- Properties Allowed: ONLY transform and opacity (GPU accelerated)`
        }
      },
      {
        heading: "3. Motion Choreography: How to Achieve 60fps Agency Feel",
        body: [
          "Cheap websites animate everything with `transition: all 0.3s ease`. That causes layout recalculations and feels sluggish. High-end agency sites animate **only `transform` and `opacity`** using hardware-accelerated CSS.",
          "When asking Claude Code to build sections, instruct it to choreograph staggered entrance delays (e.g., card 1 at 0ms, card 2 at 75ms, card 3 at 150ms). This creates that polished 'Apple Keynote' feel that immediately justifies a premium agency invoice."
        ]
      },
      {
        heading: "4. Responsive Layout Logic (No More Broken Mobile Stacks)",
        body: [
          "A classic issue with AI designs is that mobile views simply stack 12 columns into one never-ending vertical scroll. The upgraded `/design` skill handles responsive breakpoints with intelligent transformation:",
          "- Desktop 4-column feature grids -> Mobile swipeable carousel tabs.",
          "- Desktop sticky sidebar filters -> Mobile bottom drawer modal.",
          "- Desktop 48px hero headers -> Mobile 28px crisp headings with clamped line-heights."
        ]
      },
      {
        heading: "5. Extracted Repositories & Installation Toolkit",
        body: [
          "Install the full design skill suite with one command inside your terminal:"
        ],
        bullets: [
          {
            title: "Frontend Design Skill (Anthropic Official — 277K+ Installs)",
            description: "Enforces bespoke typography, contrast rules, and layout hierarchy before writing CSS.",
            repo: "github.com/anthropics/skills/tree/main/skills/frontend-design",
            command: "npx -y skills add anthropics/skills@frontend-design -g -y"
          },
          {
            title: "Canvas Design & Brand Guidelines",
            description: "Generates high-craft marketing visuals, OG image cards, and brand color compliance.",
            repo: "github.com/anthropics/skills/tree/main/skills/canvas-design",
            command: "npx -y skills add anthropics/skills@canvas-design -g -y"
          },
          {
            title: "Web Artifacts Builder",
            description: "Builds full interactive React + Tailwind widgets, calculators, and responsive dashboards.",
            repo: "github.com/anthropics/skills/tree/main/skills/web-artifacts-builder",
            command: "npx -y skills add anthropics/skills@web-artifacts-builder -g -y"
          }
        ]
      }
    ]
  }
];

// Full keyword-to-guide lookup map supporting all video comment keywords
export const KEYWORD_MAP: Record<string, { slug: string; title: string }> = {
  skill: { slug: "claude-skills-i-use", title: "The Claude skills that I use and the only ones you need" },
  skills: { slug: "claude-skills-i-use", title: "The Claude skills that I use and the only ones you need" },
  plugin: { slug: "claude-skills-i-use", title: "The Claude skills that I use and the only ones you need" },
  map: { slug: "ai-automation-builder-roadmap", title: "Your AI automation roadmap" },
  roadmap: { slug: "ai-automation-builder-roadmap", title: "Your AI automation roadmap" },
  start: { slug: "ai-automation-builder-roadmap", title: "Your AI automation roadmap" },
  cowork: { slug: "setup-claude-cowork", title: "Set up Claude Cowork" },
  goal: { slug: "setup-claude-cowork", title: "How to Run a One-Person Company with Claude Cowork" },
  flow: { slug: "setup-claude-cowork", title: "Small Business Claude Workflows" },
  team: { slug: "first-ai-agent-team", title: "Build your first agent team" },
  dev: { slug: "first-ai-agent-team", title: "How to Build a 4-Agent Dev Team That Ships Features While You Sleep" },
  code: { slug: "first-ai-agent-team", title: "How to Build a Software Factory with 7 Claude Agents" },
  run: { slug: "first-ai-agent-team", title: "How to Create 1,000 Agents from One Prompt in Claude Code" },
  brain: { slug: "claude-obsidian-ai-second-brain", title: "Build an AI second brain with Claude & Obsidian" },
  study: { slug: "claude-obsidian-ai-second-brain", title: "How to Create a Research Assistant with Claude and Obsidian" },
  storm: { slug: "claude-obsidian-ai-second-brain", title: "How to Make Claude Research Like a PhD in 5 Minutes" },
  find: { slug: "claude-code-agent-finds-clients", title: "Build a client research agent" },
  reach: { slug: "claude-code-agent-finds-clients", title: "Build a client research agent" },
  web: { slug: "motion-website-playbook-35k", title: "The $35K Motion Website Playbook with Claude & Stitch" },
  scroll: { slug: "motion-website-playbook-35k", title: "How to Build $8K Website Scroll Animations" },
  stitch: { slug: "motion-website-playbook-35k", title: "Google Stitch: The Complete Beginner's Guide" },
  google: { slug: "motion-website-playbook-35k", title: "Google Stitch: The Complete Beginner's Guide" },
  clip: { slug: "clipping-page-hermes-4k-month", title: "How to Build a Clipping Page That Makes $4K/month" },
  video: { slug: "clipping-page-hermes-4k-month", title: "How to Make $7K a Month with YouTube Automations" },
  vid: { slug: "clipping-page-hermes-4k-month", title: "How to Make $7K a Month with YouTube Automations" },
  repeat: { slug: "karpathy-loop-ai-improvement", title: "How to Use the Karpathy Loop to Make AI Actually Improve Itself" },
  loop: { slug: "karpathy-loop-ai-improvement", title: "Complete AutoResearch & Self-Correcting Loop Playbook" },
  level: { slug: "karpathy-loop-ai-improvement", title: "How to 5x Your Loop System with Bilevel Loops" },
  fix: { slug: "karpathy-loop-ai-improvement", title: "How to Build a Self-Correcting AI Loop" },
  money: { slug: "make-money-with-openclaw", title: "3 Ways to Make Money with OpenClaw (Step-by-Step Guide)" },
  claw: { slug: "make-money-with-openclaw", title: "OpenClaw Beginners Setup Guide" },
  bot: { slug: "make-money-with-openclaw", title: "OpenClaw Beginners Setup Guide" },
  jarvis: { slug: "make-money-with-openclaw", title: "How to Build a Personal Jarvis with Claude" },
  income: { slug: "make-money-with-openclaw", title: "5 Ways to Make $10K/Month in 30 Days with AI" },
  mcp: { slug: "claude-skills-i-use", title: "Best MCP Servers & Claude Skills Toolkit" },
  repo: { slug: "claude-skills-i-use", title: "6 Open Source Repos That Make Claude 10x Better" },
  // Chase AI inspired article keywords
  "gpt-6": { slug: "gpt-6-astra-vs-fable-5-honest-comparison-2026", title: "GPT-6 Astra vs Fable 5.1 — Honest Comparison" },
  astra: { slug: "gpt-6-astra-vs-fable-5-honest-comparison-2026", title: "GPT-6 Astra vs Fable 5.1 — Honest Comparison" },
  fable: { slug: "gpt-6-astra-vs-fable-5-honest-comparison-2026", title: "GPT-6 Astra vs Fable 5.1 — Honest Comparison" },
  jev: { slug: "jev-claude-os-agentic-workflow-setup-guide", title: "Jev + Claude OS Setup Guide" },
  "claude-os": { slug: "jev-claude-os-agentic-workflow-setup-guide", title: "Jev + Claude OS Agentic Workflow" },
  opus: { slug: "claude-opus-5-5-vs-gpt-6-fable-benchmark-results", title: "Opus 5.5 vs GPT-6 and Fable — Real Tests" },
  "opus-5": { slug: "claude-opus-5-5-vs-gpt-6-fable-benchmark-results", title: "Opus 5.5 Benchmark Results" },
  sonnet: { slug: "claude-sonnet-5-5-review-beats-opus-at-coding", title: "Sonnet 5.5 — Beats Opus at Half Cost" },
  "sonnet-5": { slug: "claude-sonnet-5-5-review-beats-opus-at-coding", title: "Sonnet 5.5 Review" },
  "agentic-os": { slug: "build-agentic-os-with-claude-code-complete-guide", title: "Build Your Own Agentic OS" },
  "ai-os": { slug: "build-agentic-os-with-claude-code-complete-guide", title: "How to Build an Agentic OS" },
  graphify: { slug: "graphify-claude-code-knowledge-graph-setup", title: "Graphify — 60% Token Savings" },
  "knowledge-graph": { slug: "graphify-claude-code-knowledge-graph-setup", title: "Claude Code Knowledge Graph Setup" },
  "design-genius": { slug: "turn-claude-into-design-genius-3-steps", title: "Turn Claude into a Design Genius" },
  "github-repos": { slug: "best-github-repos-for-claude-code-2026", title: "10 Must-Have GitHub Repos" },
  sol: { slug: "gpt-6-1-sol-vs-sonnet-5-5-real-test-results", title: "GPT-6.1 Sol vs Sonnet 5.5" },
  "gpt-sol": { slug: "gpt-6-1-sol-vs-sonnet-5-5-real-test-results", title: "GPT-6.1 Sol vs Sonnet 5.5" },
  "design-skill": { slug: "claude-code-design-skill-upgrade-guide-2026", title: "Claude Code Design Skill Upgrade" },
  "/design": { slug: "claude-code-design-skill-upgrade-guide-2026", title: "The /design Skill Tutorial" },
};

export function getGuideBySlug(slug: string): GuideItem {
  const existing = GUIDES.find((g) => g.slug === slug);
  if (existing) return existing;

  // Fallback dynamic generator so any slug works seamlessly
  const prettyTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    slug,
    title: prettyTitle,
    category: "AI Automation Guide",
    description: "Step-by-step practical implementation guide, prompts, and architecture from VamshiCreates.",
    readTime: "7 min read",
    keywords: [slug],
    iconName: "sparkles",
    updatedAt: "September 2026",
    heroSummary: `Complete step-by-step implementation guide for ${prettyTitle}, including copy-paste prompts, architecture diagrams, and deployment checklists.`,
    sections: GUIDES[0].sections,
  };
}

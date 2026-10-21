import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const USER = "vamshicreates";
const MAX_PAGES = Number(process.env.CALENDAR_MAX_PAGES || 1);
const OUTPUT = resolve("src/data/build-calendar.json");
const EXCLUDED = new Set([
  "vamshicreates",
  "vamshicreates-web",
  "mylogline-idea-zone",
  "can-one-sentence-become-a-film",
  "directors-take",
  "curapod-m",
]);

const TITLES = {
  "movie-draft": "Movie Draft",
  "cricket-draft": "Cricket Draft",
  "logo-cleaner-web": "Logo Cleaner",
  "thought-journal-box": "Notely",
  "film-audio-python": "Film Audio Python",
};

const DESCRIPTIONS = {
  "movie-draft": "A multiplayer Telugu film draft and auction game.",
  "cricket-draft": "A live cricket player auction game for friends.",
  "logo-cleaner-web": "A browser tool for cleaning logos from video footage.",
  "thought-journal-box": "A simple space for saving and organizing personal notes.",
  "film-audio-python": "A practical film audio workflow built with Python tools.",
};

const DEMOS = {
  "movie-draft": "https://movie-draft-phi.vercel.app",
  "cricket-draft": "https://cricket-draft-hazel.vercel.app",
  "logo-cleaner-web": "https://logo-cleaner-web.vercel.app",
};

const IMAGES = {
  "movie-draft": "/projects/movie-draft-ai.jpg",
  "cricket-draft": "/projects/cricket-draft-ai.jpg",
  "logo-cleaner-web": "/projects/logo-cleaner-ai.jpg",
};

function titleFor(slug) {
  return TITLES[slug] || slug.split("-").map((word) => /^(ai|3d|pdf|utv)$/i.test(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function dayInIndia(timestamp) {
  return new Date(new Date(timestamp).getTime() + 5.5 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function safeDemo(url) {
  if (typeof url !== "string" || !url.trim()) return null;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "https:" && !parsed.hostname.endsWith("github.com") ? parsed.toString() : null;
  } catch {
    return null;
  }
}

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "VamshiCreates-build-calendar",
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
    },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status} for ${path}: ${await response.text()}`);
  return { data: await response.json(), hasNext: /rel="next"/.test(response.headers.get("link") || "") };
}

function cleanMessage(message) {
  return (message || "").split("\n")[0].replace(/^(feat|fix|docs|chore|refactor|style|test)(\([^)]*\))?:\s*/i, "").trim().slice(0, 110);
}

function highlights(messages) {
  const unique = [...new Set(messages.filter(Boolean))];
  const useful = unique.filter((message) => !/^(merge |initial commit$|changes$|update (readme|documentation)|bump |sync )/i.test(message));
  return (useful.length ? useful : unique).slice(0, 3);
}

const { data: repositories } = await github(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed`);
const publicRepos = repositories.filter((repo) =>
  !repo.fork &&
  !repo.archived &&
  !EXCLUDED.has(repo.name) &&
  !/(my.?logline|utv|curapod)/i.test(`${repo.name} ${repo.description || ""}`)
);
const grouped = new Map();

for (const repo of publicRepos) {
  let page = 1;
  while (page <= MAX_PAGES) {
    const { data: commits, hasNext } = await github(`/repos/${USER}/${repo.name}/commits?per_page=100&page=${page}`);
    for (const commit of commits) {
      const timestamp = commit.commit?.committer?.date || commit.commit?.author?.date;
      if (!timestamp) continue;
      const date = dayInIndia(timestamp);
      const key = `${date}:${repo.name}`;
      const entry = grouped.get(key) || {
        date,
        repo: repo.name,
        title: titleFor(repo.name),
        description: DESCRIPTIONS[repo.name] || (repo.description || "A public project by Vamshi Creates.").slice(0, 220),
        demoUrl: safeDemo(DEMOS[repo.name] || repo.homepage),
        image: IMAGES[repo.name] || null,
        count: 0,
        highlights: [],
      };
      entry.count += 1;
      entry.highlights.push(cleanMessage(commit.commit?.message));
      grouped.set(key, entry);
    }
    if (!hasNext || commits.length === 0) break;
    page += 1;
  }
  console.log(`${repo.name}: scanned ${page} page${page === 1 ? "" : "s"}`);
}

const entries = [...grouped.values()].map((entry) => ({ ...entry, highlights: highlights(entry.highlights) })).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
await writeFile(OUTPUT, `${JSON.stringify({ source: "Public GitHub commits, dates shown in Asia/Kolkata", entries }, null, 2)}\n`);
console.log(`Wrote ${entries.length} project-day entries from ${publicRepos.length} public repositories to ${OUTPUT}`);

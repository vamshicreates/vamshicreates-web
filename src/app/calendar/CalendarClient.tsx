"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Github } from "lucide-react";
import styles from "./calendar.module.css";

type BuildEntry = {
  date: string;
  repo: string;
  title: string;
  description: string;
  demoUrl: string | null;
  image: string | null;
  count: number;
  highlights: string[];
};

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function todayInIndia() {
  return new Date(Date.now() + 5.5 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}

function monthLabel(value: string) {
  return new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}-01T12:00:00Z`));
}

function shiftMonth(value: string, amount: number) {
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1 + amount, 1)).toISOString().slice(0, 7);
}

function initials(title: string) {
  return title.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

export default function CalendarClient({ entries }: { entries: BuildEntry[] }) {
  const latest = entries[0]?.date || "2026-10-01";
  const [today, setToday] = useState("");
  const [month, setMonth] = useState(latest.slice(0, 7));
  const [selected, setSelected] = useState(latest);

  useEffect(() => {
    const current = todayInIndia();
    setToday(current);
    setMonth(current.slice(0, 7));
    setSelected(current);
    const timer = window.setInterval(() => setToday(todayInIndia()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const byDay = useMemo(() => {
    const result = new Map<string, BuildEntry[]>();
    for (const entry of entries) result.set(entry.date, [...(result.get(entry.date) || []), entry]);
    return result;
  }, [entries]);

  const selectedEntries = byDay.get(selected) || [];
  const [year, monthNumber] = month.split("-").map(Number);
  const dayCount = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  const startOffset = (new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay() + 6) % 7;
  const cells = Array.from({ length: Math.ceil((startOffset + dayCount) / 7) * 7 }, (_, index) => {
    const dayNumber = index - startOffset + 1;
    return dayNumber > 0 && dayNumber <= dayCount ? `${month}-${String(dayNumber).padStart(2, "0")}` : null;
  });
  const activeDays = new Set(entries.map((entry) => entry.date));

  function moveMonth(amount: number) {
    const next = shiftMonth(month, amount);
    setMonth(next);
    setSelected(entries.find((entry) => entry.date.startsWith(next))?.date || `${next}-01`);
  }

  function jumpToToday() {
    const current = todayInIndia();
    setToday(current);
    setMonth(current.slice(0, 7));
    setSelected(current);
  }

  return (
    <>
      <section className={styles.intro} aria-labelledby="calendar-title">
        <div>
          <p className={styles.eyebrow}>THE WORK, DAY BY DAY</p>
          <h1 id="calendar-title">Build calendar<span>.</span></h1>
          <p className={styles.introCopy}>A living record of the products, websites, and creative workflows I have worked on. Pick a date to see what moved forward.</p>
        </div>
        <div className={styles.todayPill}><CalendarDays size={18} aria-hidden="true" /><span>Today in India</span><strong>{today ? dateLabel(today) : "Loading date…"}</strong></div>
      </section>

      <div className={styles.workspace}>
        <section className={styles.calendarPanel} aria-label="Build activity calendar">
          <div className={styles.calendarToolbar}>
            <div>
              <p className={styles.eyebrow}>PUBLIC BUILD HISTORY</p>
              <h2>{monthLabel(month)}</h2>
            </div>
            <div className={styles.monthControls}>
              <button type="button" onClick={jumpToToday}>Today</button>
              <button type="button" onClick={() => moveMonth(-1)} aria-label="Previous month"><ChevronLeft size={18} aria-hidden="true" /></button>
              <button type="button" onClick={() => moveMonth(1)} aria-label="Next month"><ChevronRight size={18} aria-hidden="true" /></button>
            </div>
          </div>

          <div className={styles.weekdays}>{WEEKDAYS.map((day) => <span key={day}>{day}</span>)}</div>
          <div className={styles.calendarGrid}>
            {cells.map((date, index) => {
              if (!date) return <div key={`empty-${index}`} className={styles.emptyCell} aria-hidden="true" />;
              const dayEntries = byDay.get(date) || [];
              const isSelected = date === selected;
              const isToday = date === today;
              return (
                <button
                  key={date}
                  type="button"
                  className={`${styles.dayCell} ${dayEntries.length ? styles.hasWork : ""} ${isSelected ? styles.selectedDay : ""} ${isToday ? styles.todayCell : ""}`}
                  aria-label={`${dateLabel(date)}${dayEntries.length ? `, ${dayEntries.length} project${dayEntries.length === 1 ? "" : "s"} updated` : ", no public work recorded"}`}
                  aria-pressed={isSelected}
                  onClick={() => setSelected(date)}
                >
                  <span className={styles.dayTop}><span className={styles.dayNumber}>{Number(date.slice(-2))}</span>{isToday && <span className={styles.todayDot}>Today</span>}</span>
                  {dayEntries.length > 0 && <span className={styles.dayWork}><span className={styles.workDot} />{dayEntries[0].title}{dayEntries.length > 1 && <b>+{dayEntries.length - 1}</b>}</span>}
                </button>
              );
            })}
          </div>
          <div className={styles.legend}><span><i /> Work recorded</span><span>{activeDays.size} active days · {entries.length} project-day entries</span></div>
        </section>

        <aside className={styles.detailsPanel} aria-live="polite">
          <div className={styles.detailsHeader}>
            <p className={styles.eyebrow}>SELECTED DATE / {selectedEntries.length} {selectedEntries.length === 1 ? "PROJECT" : "PROJECTS"}</p>
            <h2>This is what I built<span>.</span></h2>
            <p>{dateLabel(selected)}</p>
          </div>
          {selectedEntries.length ? (
            <div className={styles.entryList}>
              {selectedEntries.map((entry) => (
                <article className={styles.entryCard} key={`${entry.date}-${entry.repo}`}>
                  <div className={styles.entryVisual}>
                    {entry.image ? <img src={entry.image} alt="" loading="lazy" /> : <div className={styles.entryMonogram} aria-hidden="true"><span>{initials(entry.title)}</span><i /><i /><i /></div>}
                  </div>
                  <div className={styles.entryBody}>
                    <div className={styles.entryMeta}><span>PUBLIC PROJECT</span><span>{entry.count} {entry.count === 1 ? "commit" : "commits"}</span></div>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    {entry.highlights.length > 0 && <div className={styles.changeNotes}><strong>What moved forward</strong><ul>{entry.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>}
                    <div className={styles.entryActions}>
                      {entry.demoUrl && <a href={entry.demoUrl} target="_blank" rel="noopener noreferrer">Open live demo <ArrowUpRight size={15} aria-hidden="true" /></a>}
                      <a href={`https://github.com/vamshicreates/${encodeURIComponent(entry.repo)}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${entry.title} on GitHub`}>View GitHub <Github size={15} aria-hidden="true" /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.noWork}>
              <span aria-hidden="true">○</span>
              <h3>No public build recorded for this date.</h3>
              <p>Choose a marked day to see the projects and updates behind it.</p>
              <button type="button" onClick={() => { setMonth(latest.slice(0, 7)); setSelected(latest); }}>See latest work</button>
            </div>
          )}
        </aside>
      </div>
      <p className={styles.sourceNote}>Dates reflect commits in Vamshi’s public GitHub repositories, shown in India Standard Time. Work may have started before the date it was committed. New public work is scheduled to sync twice daily.</p>
    </>
  );
}

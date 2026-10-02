"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight, X, Check, Calendar } from "lucide-react";
import styles from "@/app/home.module.css";

export function CallRequestModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [projectNote, setProjectNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openModal = () => {
    setEmail("");
    setBudget("");
    setProjectNote("");
    setStatus("idle");
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!budget.trim() || !Number.isFinite(Number(budget)) || Number(budget) < 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          budget,
          projectNote,
          type: "full",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button type="button" className={styles.primaryButton} onClick={openModal}>
        Schedule a call <ArrowUpRight size={17} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="call-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeModal();
          }
        }}
      >
        <div className={styles.dialogContent}>
          <button
            type="button"
            className={styles.dialogClose}
            onClick={closeModal}
            aria-label="Close scheduling form"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {status === "success" ? (
            <>
              <span className={styles.dialogIcon}>
                <Check size={24} aria-hidden="true" />
              </span>
              <h2 id="call-title">Info saved!</h2>
              <p>Now pick a time that works for you to chat with Vamshi.</p>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <Calendar size={17} aria-hidden="true" />
                Schedule on Calendly
              </a>
            </>
          ) : (
            <>
              <p className={styles.eyebrow}>LET’S BUILD SOMETHING USEFUL</p>
              <h2 id="call-title">Tell me about your project.</h2>
              <p>Share your email and budget, then choose a time for a call.</p>
              <form className={styles.callForm} onSubmit={handleSubmit}>
                <label htmlFor="call-email">
                  Email address
                  <input
                    id="call-email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="call-budget">
                  Project budget (USD)
                  <input
                    id="call-budget"
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    required
                    placeholder="Your estimated budget (e.g. 2500)"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </label>
                <label htmlFor="call-note">
                  What workflow do you want to automate? (Optional)
                  <input
                    id="call-note"
                    type="text"
                    placeholder="e.g. Lead qualification, content pipeline, custom agent"
                    value={projectNote}
                    onChange={(e) => setProjectNote(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Saving…" : "Continue to scheduling"}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
                {status === "error" && (
                  <p className={styles.error} role="alert">
                    Could not save right now. Please try again.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}

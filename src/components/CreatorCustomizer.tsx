"use client";

import React, { useState } from "react";
import { Sliders, Upload, RotateCcw, X, Sparkles } from "lucide-react";

export interface CreatorConfig {
  name: string;
  brandName: string;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  bio: string;
  captionBadge: string;
  photoMode: "vamshi" | "vamshi-ai" | "ray" | "custom";
  customPortraitDataUrl: string | null;
  communityPrice: string;
  playbookPrice: string;
  consultationPrice: string;
  email: string;
  instagramUrl: string;
  youtubeUrl: string;
  xUrl: string;
  tiktokUrl: string;
}

export const DEFAULT_CREATOR_CONFIG: CreatorConfig = {
  name: "Vamshi",
  brandName: "VamshiCreates",
  eyebrow: "OPENCLAW & AI AUTOMATIONS",
  headlineLine1: "Hi, I’m Vamshi.",
  headlineLine2: "Let’s build with AI.",
  bio: "I’m an AI Engineer & Creator. I share practical guides, teach you how to build with AI agents, and help turn your ideas into working automations.",
  captionBadge: "Engineer. Creator. Your AI guide.",
  photoMode: "vamshi",
  customPortraitDataUrl: null,
  communityPrice: "$86",
  playbookPrice: "$9.99",
  consultationPrice: "$299",
  email: "hello@vamshicreates.com",
  instagramUrl: "https://www.instagram.com/",
  youtubeUrl: "https://www.youtube.com/",
  xUrl: "https://x.com/",
  tiktokUrl: "https://www.tiktok.com/",
};

export function CreatorCustomizer({
  config,
  onChange,
  onReset,
}: {
  config: CreatorConfig;
  onChange: (next: CreatorConfig) => void;
  onReset: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange({
          ...config,
          photoMode: "custom",
          customPortraitDataUrl: reader.result,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-80 rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-xs font-semibold text-zinc-900">
                Customize VamshiCreates
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <X size={15} />
            </button>
          </div>

          <div className="space-y-3.5 text-xs">
            <div>
              <label className="mb-1.5 block font-medium text-zinc-700">
                Visual Studio Mode
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => onChange({ ...config, photoMode: "vamshi" })}
                  className={`rounded-lg border px-2 py-2 font-medium transition ${
                    config.photoMode === "vamshi"
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  Real DP
                </button>
                <button
                  type="button"
                  onClick={() => onChange({ ...config, photoMode: "vamshi-ai" })}
                  className={`rounded-lg border px-2 py-2 font-medium transition ${
                    config.photoMode === "vamshi-ai"
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  AI Studio
                </button>
                <button
                  type="button"
                  onClick={() => onChange({ ...config, photoMode: "ray" })}
                  className={`rounded-lg border px-2 py-2 font-medium transition ${
                    config.photoMode === "ray"
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  Ray Fu
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-medium text-zinc-700">
                Upload Your Own Portrait
              </label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 hover:border-blue-500 hover:bg-blue-50/40">
                <Upload size={14} />
                <span>Choose photo from computer</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>

            <div>
              <label className="mb-1 block font-medium text-zinc-700">Brand Name</label>
              <input
                type="text"
                value={config.brandName}
                onChange={(e) => onChange({ ...config, brandName: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-900"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium text-zinc-700">Hero Greeting</label>
              <input
                type="text"
                value={config.headlineLine1}
                onChange={(e) => onChange({ ...config, headlineLine1: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-900"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium text-zinc-700">Hero Bio</label>
              <textarea
                rows={2}
                value={config.bio}
                onChange={(e) => onChange({ ...config, bio: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-900"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="mb-1 block text-[10px] text-zinc-500">Community</label>
                <input
                  type="text"
                  value={config.communityPrice}
                  onChange={(e) => onChange({ ...config, communityPrice: e.target.value })}
                  className="w-full rounded-lg border border-zinc-200 px-2 py-1 text-xs"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] text-zinc-500">Playbook</label>
                <input
                  type="text"
                  value={config.playbookPrice}
                  onChange={(e) => onChange({ ...config, playbookPrice: e.target.value })}
                  className="w-full rounded-lg border border-zinc-200 px-2 py-1 text-xs"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] text-zinc-500">1:1 Call</label>
                <input
                  type="text"
                  value={config.consultationPrice}
                  onChange={(e) =>
                    onChange({ ...config, consultationPrice: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-200 px-2 py-1 text-xs"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-800"
              >
                <RotateCcw size={12} /> Reset defaults
              </button>
              <span className="font-mono text-[10px] text-teal-600">Auto-saved</span>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg transition hover:bg-blue-600"
        >
          <Sliders size={14} />
          Customize Site
        </button>
      )}
    </div>
  );
}

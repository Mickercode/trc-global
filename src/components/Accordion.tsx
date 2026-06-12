"use client";

import { useState } from "react";

export default function Accordion({
  group,
  items,
  defaultOpen = false,
}: {
  group: string;
  items: { title: string; desc: string }[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-ink-900/10 overflow-hidden bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-steel-400 text-white"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-lg">{group}</span>
        <span className="flex items-center gap-3 shrink-0">
          <span className="text-white/70 text-sm">{items.length} doctrines</span>
          <svg
            viewBox="0 0 24 24"
            className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <ol className="divide-y divide-ink-900/8">
          {items.map((it, i) => (
            <li key={it.title} className="flex gap-4 px-6 py-4">
              <span className="font-display font-extrabold text-rain-600 w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold text-ink-900">{it.title}</p>
                <p className="text-ink-700/80 text-sm mt-0.5">{it.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

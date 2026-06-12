"use client";

import { useState } from "react";
import { Flame, Hands, Globe, Book, Heart, Users } from "@/components/Icons";

const streams = [
  { Icon: Flame, name: "General Offering / Tithe", desc: "Sustaining the day-to-day work and worship of The Rain." },
  { Icon: Hands, name: "Feed41 Project", desc: "Meals and relief for families facing hunger." },
  { Icon: Globe, name: "Global Missions Fund", desc: "Sending and supporting missionaries to the nations." },
  { Icon: Book, name: "Clapham Scholarship Fund", desc: "Education for the next generation of leaders." },
  { Icon: Heart, name: "Compassion Health", desc: "Clinics, care and rehabilitation for the vulnerable." },
  { Icon: Users, name: "School of the Word Sponsorship", desc: "Keeping discipleship free for every believer." },
];

const amounts = [25, 50, 100, 250];

export default function GivingStreams() {
  const [recurring, setRecurring] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center rounded-full bg-ink-100 p-1">
          <button
            onClick={() => setRecurring(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-display font-semibold transition ${
              !recurring ? "bg-rain-600 text-white shadow" : "text-ink-700"
            }`}
          >
            One-Time Gift
          </button>
          <button
            onClick={() => setRecurring(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-display font-semibold transition ${
              recurring ? "bg-rain-600 text-white shadow" : "text-ink-700"
            }`}
          >
            Monthly Partner
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {streams.map(({ Icon, name, desc }) => (
          <div
            key={name}
            className="flex flex-col rounded-2xl bg-white border border-ink-900/8 p-6 shadow-sm hover:shadow-lg transition"
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-rain-50 text-rain-600">
              <Icon className="w-6 h-6" />
            </span>
            <h3 className="mt-4 font-display font-bold text-lg text-ink-900">
              {name}
            </h3>
            <p className="mt-1.5 text-sm text-ink-700/80 flex-1">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {amounts.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-ink-900/12 px-3 py-1 text-sm text-ink-700"
                >
                  ${a}
                </span>
              ))}
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-full bg-rain-600 text-white font-display font-semibold px-5 py-2.5 text-sm hover:bg-rain-700 transition">
              Give {recurring ? "Monthly" : "Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

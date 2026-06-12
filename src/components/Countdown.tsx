"use client";

import { useEffect, useState } from "react";

/** Counts down to the next occurrence of the given hour (local) each day. */
function nextDailyTarget(hour: number) {
  const now = new Date();
  const target = new Date(now);
  target.setHours(hour, 0, 0, 0);
  if (target.getTime() <= now.getTime()) target.setDate(target.getDate() + 1);
  return target;
}

export default function Countdown({
  hour = 6,
  target,
  label = "Next gathering in",
  compact = false,
}: {
  hour?: number;
  /** Optional fixed target ISO datetime. Overrides the daily `hour`. */
  target?: string | null;
  label?: string;
  compact?: boolean;
}) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const targetDate =
      target && !Number.isNaN(Date.parse(target))
        ? new Date(target)
        : nextDailyTarget(hour);
    const update = () => setRemaining(targetDate.getTime() - Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [hour, target]);

  if (remaining === null) {
    return <div className="h-10" aria-hidden />;
  }

  const total = Math.max(remaining, 0);
  const h = Math.floor(total / 3_600_000);
  const m = Math.floor((total % 3_600_000) / 60_000);
  const s = Math.floor((total % 60_000) / 1000);
  const pad = (n: number) => n.toString().padStart(2, "0");

  const Unit = ({ v, u }: { v: number; u: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-display text-2xl sm:text-3xl font-bold tabular-nums text-white">
        {pad(v)}
      </span>
      <span className="text-[0.6rem] uppercase tracking-widest text-white/50">
        {u}
      </span>
    </div>
  );

  return (
    <div className={compact ? "" : "text-right"}>
      {label && (
        <p className="eyebrow text-steel-300 mb-1.5 text-xs">{label}</p>
      )}
      <div className="flex items-center gap-3 sm:gap-4">
        <Unit v={h} u="hrs" />
        <span className="text-white/30 text-2xl -mt-3">:</span>
        <Unit v={m} u="min" />
        <span className="text-white/30 text-2xl -mt-3">:</span>
        <Unit v={s} u="sec" />
      </div>
    </div>
  );
}

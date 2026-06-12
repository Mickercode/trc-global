import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/Button";
import { Play, ArrowRight, YouTube, Facebook, Telegram } from "@/components/Icons";
import { getLiveSettings, getSermons } from "@/lib/data";

export const metadata: Metadata = {
  title: "Watch & Worship",
  description:
    "Join us live or catch up on every word God has spoken. Live streams, Nigeria Cries, sermon archive and worship releases.",
};

const sampleSermons = [
  { title: "The Latter Rain", speaker: "Pastor Mercy Adeleye", date: "Jun 8, 2026", series: "Joel 2" },
  { title: "A Thirsty Generation", speaker: "Pastor Mercy Adeleye", date: "Jun 1, 2026", series: "Joel 2" },
  { title: "When Heaven Opens", speaker: "Pastor Mercy Adeleye", date: "May 25, 2026", series: "Outpouring" },
  { title: "Carriers of Revival", speaker: "Guest Minister", date: "May 18, 2026", series: "Outpouring" },
  { title: "The Sound of Abundance", speaker: "Pastor Mercy Adeleye", date: "May 11, 2026", series: "Prayer" },
  { title: "Standing in the Gap", speaker: "Pastor Mercy Adeleye", date: "May 4, 2026", series: "Prayer" },
];

const worship = [
  { title: "Outpouring · Live", date: "May 2026" },
  { title: "Nigeria Cries · Vol. II", date: "Mar 2026" },
  { title: "Rain (Acoustic Sessions)", date: "Jan 2026" },
  { title: "Latter Rain · Worship", date: "Nov 2025" },
  { title: "Spirit & Fire", date: "Sep 2025" },
];

export default async function WatchPage() {
  const [live, dbSermons] = await Promise.all([
    getLiveSettings(),
    getSermons({ publishedOnly: true }),
  ]);

  const sermons =
    dbSermons.length > 0
      ? dbSermons.map((s) => ({
          title: s.title,
          speaker: s.speaker,
          date: s.preached_on
            ? new Date(s.preached_on).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "",
          series: s.series,
        }))
      : sampleSermons;

  const platforms = [
    { Icon: Facebook, label: "Facebook", href: live.facebook_url },
    { Icon: Telegram, label: "Telegram", href: live.telegram_url },
    { Icon: YouTube, label: "YouTube", href: live.youtube_url },
  ];

  return (
    <>
      <PageHero
        eyebrow="Watch & Worship"
        title="Watch & Worship"
        subtitle="Join us live or catch up on every word God has spoken."
      />

      {/* LIVE STREAM */}
      <Section className="bg-ink-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            {live.is_live ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-rain-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Live Now
              </span>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Offline
                </span>
                <span className="text-white/60 text-sm">
                  {live.next_service_label || "Next service"} in
                </span>
                <div className="scale-90 origin-left">
                  <Countdown hour={10} target={live.next_service_at} label="" compact />
                </div>
              </>
            )}
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black grid place-items-center relative">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(100deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 12px)",
              }}
            />
            <a
              href={live.youtube_url || "#"}
              target={live.youtube_url ? "_blank" : undefined}
              rel="noreferrer"
              className="relative grid place-items-center w-20 h-20 rounded-full bg-rain-600 text-white hover:bg-rain-700 transition shadow-xl"
              aria-label="Watch the stream"
            >
              <Play className="w-9 h-9 ml-1" />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/60 text-sm">
            <span>Also streaming on</span>
            {platforms.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href || "#"}
                target={href ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* NIGERIA CRIES */}
      <section className="bg-steel-400 text-white">
        <div className="container-rain py-16 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-white/70 mb-3">Daily Intercession</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
              Nigeria Cries
            </h2>
            <p className="mt-2 font-semibold text-white/90">
              Daily Intercessory Prayer — Every Morning at 6:00 AM WAT
            </p>
            <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
              Every morning, believers across the nations gather to stand in the
              gap for Nigeria and the world. It is a place for the burdened, the
              hopeful, and everyone who believes prayer changes nations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-steel-600 font-display font-semibold px-7 py-3.5 hover:bg-white/90 transition"
            >
              Join Live Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 text-white font-display font-semibold px-7 py-3.5 hover:bg-white/10 transition"
            >
              Listen to past sessions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERMON ARCHIVE */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="On Demand"
          title="Sermon Archive"
          subtitle="Every message, ready when you are."
        />
        {/* Filter bar */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <input
            type="search"
            placeholder="Search sermons…"
            className="flex-1 min-w-[200px] max-w-sm rounded-full border border-ink-900/15 px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rain-500/40"
          />
          {["All Series", "All Topics", "2026"].map((f) => (
            <select
              key={f}
              className="rounded-full border border-ink-900/15 px-5 py-2.5 text-sm text-ink-700 bg-white focus:outline-none focus:ring-2 focus:ring-rain-500/40"
              defaultValue={f}
            >
              <option>{f}</option>
            </select>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((s, i) => (
            <article
              key={`${s.title}-${i}`}
              className="group rounded-2xl border border-ink-900/8 overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
            >
              <div className="aspect-video bg-gradient-to-br from-ink-900 to-steel-700 relative grid place-items-center">
                {s.series && (
                  <span className="absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wider bg-white/15 text-white px-2.5 py-1 rounded-full backdrop-blur">
                    {s.series}
                  </span>
                )}
                <button className="grid place-items-center w-14 h-14 rounded-full bg-rain-600 text-white group-hover:scale-110 transition">
                  <Play className="w-6 h-6 ml-0.5" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-ink-700/70">
                  {s.speaker}
                  {s.date ? ` · ${s.date}` : ""}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="#" variant="outline-dark" size="md">
            Load more sermons
          </Button>
        </div>
      </Section>

      {/* WORSHIP RELEASES */}
      <section className="bg-ink-950">
        <div className="container-rain py-20">
          <SectionHeading
            eyebrow="Sound of The Rain"
            title="Worship Releases"
            dark
            align="left"
          />
          <div className="mt-10 flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
            {worship.map((w) => (
              <div
                key={w.title}
                className="snap-start shrink-0 w-56"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-rain-600 to-steel-700 ring-1 ring-white/10 grid place-items-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(100deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 9px)",
                    }}
                  />
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/70" fill="currentColor">
                    <path d="M9 18V5l10-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <h3 className="mt-3 font-display font-bold text-white">
                  {w.title}
                </h3>
                <p className="text-white/50 text-sm">{w.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

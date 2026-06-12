import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import StatCounter from "@/components/StatCounter";
import Countdown from "@/components/Countdown";
import { ICONS } from "@/components/Icons";
import { Play, ArrowRight, WhatsApp, Telegram } from "@/components/Icons";
import { MINISTRIES, STATS } from "@/lib/site";
import { getLiveSettings, getAnnouncements } from "@/lib/data";

export default async function HomePage() {
  const [live, announcements] = await Promise.all([
    getLiveSettings(),
    getAnnouncements({ publishedOnly: true }),
  ]);
  const latest = announcements[0];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-ink-950">
        <Image
          src="/images/hero-worship.jpg"
          alt="A global gathering lifting their hands in worship as rain falls on dry land"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 75% 8%, rgba(192,57,43,0.35), transparent 55%), linear-gradient(to bottom, rgba(11,13,16,0.55), rgba(11,13,16,0.75) 55%, rgba(11,13,16,0.92))",
          }}
          aria-hidden
        />
        <div className="relative container-rain py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-steel-300 mb-5 animate-fade-up">
              A Global Movement · Rooted in Joel 2:28
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.02] text-balance">
              The Rain is Falling.
              <span className="block text-rain-500">Are You Ready?</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
              A global movement of prayer, worship and evangelism — rooted in{" "}
              <span className="text-white font-semibold">Joel 2:28</span>.
              Reaching every nation, one outpouring at a time.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/watch" variant="primary" size="lg">
                <Play className="w-5 h-5" /> Watch Live
              </Button>
              <Button href="/connect" variant="outline" size="lg">
                Join the Movement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIVE / ANNOUNCEMENT BANNER ============ */}
      {live.is_live && (
        <Link
          href="/watch"
          className="block bg-rain-600 hover:bg-rain-700 transition-colors"
        >
          <div className="container-rain py-3 flex items-center justify-center gap-3 text-white text-sm font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            We&apos;re live right now — Watch the service
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      )}
      {!live.is_live && latest && (
        <div className="bg-steel-400">
          <div className="container-rain py-3 flex items-center justify-center gap-2 text-white text-sm text-center">
            <span className="font-bold uppercase tracking-wider text-[0.7rem] bg-white/20 rounded-full px-2 py-0.5">
              News
            </span>
            <span className="font-semibold">{latest.title}</span>
          </div>
        </div>
      )}

      {/* ============ NEXT GATHERING BAR ============ */}
      <section className="bg-ink-900 border-y border-white/5">
        <div className="container-rain py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-2">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rain-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rain-500" />
              </span>
              <span className="text-white font-semibold text-sm">
                Nigeria Cries — Daily Prayer
              </span>
              <span className="text-white/50 text-sm">6:00 AM WAT</span>
            </div>
            <div className="text-white/60 text-sm">
              {live.next_service_label || "Sunday Global Service"} · YouTube,
              Facebook &amp; Telegram
            </div>
          </div>
          <Countdown hour={6} label="Next prayer in" />
        </div>
      </section>

      {/* ============ VISION STRIP ============ */}
      <section className="bg-rain-600">
        <div className="container-rain py-16 sm:py-20 text-center">
          <p className="eyebrow text-white/70 mb-5">The Promise</p>
          <p className="font-scripture italic text-3xl sm:text-4xl md:text-5xl text-white leading-snug max-w-4xl mx-auto text-balance">
            “I will pour out my Spirit upon all flesh”
          </p>
          <p className="mt-4 font-display font-semibold tracking-widest text-white/70 text-sm uppercase">
            Joel 2:28
          </p>
        </div>
      </section>

      {/* ============ MINISTRIES — HOW WE MOVE ============ */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Six Arms · One Mission"
          title="How We Move"
          subtitle="Every expression of The Rain flows from the same Spirit — and reaches toward the same harvest."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MINISTRIES.map((m) => {
            const Icon = ICONS[m.icon as keyof typeof ICONS];
            return (
              <Link
                key={m.slug}
                href="/ministries"
                className="group rounded-2xl border border-ink-900/8 bg-white p-7 shadow-sm hover:shadow-xl hover:border-rain-200 transition-all duration-300"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-rain-50 text-rain-600 group-hover:bg-rain-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="mt-5 font-display font-bold text-xl text-ink-900">
                  {m.name}
                </h3>
                <p className="mt-2 text-ink-700/80 leading-relaxed">
                  {m.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-rain-600">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ============ IMPACT COUNTER ============ */}
      <section className="bg-ink-950">
        <div className="container-rain py-20">
          <div className="grid gap-12 sm:grid-cols-3">
            {STATS.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PASTOR MERCY ============ */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-ink-900/5">
              <Image
                src="/images/pastor-mercy.jpg"
                alt="Pastor Mercy Adeleye"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-rain-600 text-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-display font-extrabold text-2xl leading-none">
                15+
              </p>
              <p className="text-xs text-white/80 mt-1">Years in ministry</p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-steel-500 mb-3">The Voice Behind the Vision</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900">
              Pastor Mercy Adeleye
            </h2>
            <p className="mt-5 text-lg text-ink-700/85 leading-relaxed">
              Pastor Mercy carries a burden for revival across the nations — a
              conviction that the latter rain of Joel 2 is for this generation.
            </p>
            <p className="mt-4 text-lg text-ink-700/85 leading-relaxed">
              From daily intercession to global outreach, his life is given to
              one cause: that every nation would encounter the outpoured Spirit
              of God.
            </p>
            <Link
              href="/about#pastor"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-rain-600 hover:text-rain-700"
            >
              Read his story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ============ SCHOOL OF THE WORD CTA ============ */}
      <section className="bg-ink-50">
        <div className="container-rain py-20 text-center">
          <p className="eyebrow text-rain-600 mb-3">Start Here</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            New to Faith? Start Here.
          </h2>
          <p className="mt-4 text-lg text-ink-700/80 max-w-2xl mx-auto">
            The School of the Word offers foundational discipleship courses for
            new believers — free, online, and at your own pace.
          </p>
          <div className="mt-8">
            <Button href="/school" variant="primary" size="lg">
              Begin Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* ============ COMMUNITY STRIP ============ */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="You Belong Here"
          title="Join the Global Community"
          subtitle="Wherever you are in the world, there is a place for you in The Rain. Connect with believers across the nations."
        />
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-display font-semibold text-white bg-[#25D366] hover:brightness-95 transition"
          >
            <WhatsApp className="w-6 h-6" /> Join WhatsApp Community
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-display font-semibold text-white bg-[#229ED9] hover:brightness-95 transition"
          >
            <Telegram className="w-6 h-6" /> Join Telegram Channel
          </a>
        </div>
      </Section>
    </>
  );
}

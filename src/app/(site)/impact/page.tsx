import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import StatCounter from "@/components/StatCounter";
import { ArrowRight, Heart, Globe, Hands, Book, Pin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "The Rain reaches the nations. Every soul matters. Every nation counts.",
};

const impactStats = [
  { value: 41000, suffix: "+", label: "Souls Fed" },
  { value: 5, suffix: "+", label: "Nations" },
  { value: 24, suffix: "/7", label: "Prayer Coverage" },
  { value: 320, suffix: "+", label: "Scholarships" },
  { value: 1200, suffix: "+", label: "Lives Rehabilitated" },
];

const subsidiaryCards = [
  { Icon: Hands, name: "Nations Care Mission", desc: "Crisis relief and care for the vulnerable." },
  { Icon: Heart, name: "Compassion Health", desc: "Mobile clinics and rehabilitation." },
  { Icon: Book, name: "Clapham Fellowship", desc: "Scholarships and Christian education." },
  { Icon: Globe, name: "Global Missions Fund", desc: "Sending and supporting missionaries." },
];

const stories = [
  { name: "Esther", country: "Nigeria", image: "/images/children-hope.jpg", quote: "I had nothing to feed my children. Feed41 didn't just bring food — they brought hope and prayed with me." },
  { name: "Anonymous", country: "Kenya", image: "/images/heart-hands.jpg", quote: "The rehabilitation program gave me my life back. Today I serve in the very ministry that rescued me." },
  { name: "Samuel", country: "Ghana", image: "/images/children-class.jpg", quote: "A Clapham scholarship put me through school. I'm the first in my family to graduate." },
];

const pins = [
  { c: "Nigeria", x: 52, y: 58 },
  { c: "Kenya", x: 60, y: 64 },
  { c: "Ghana", x: 47, y: 57 },
  { c: "United Kingdom", x: 47, y: 33 },
  { c: "United States", x: 22, y: 42 },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Lives · Real Change"
        title="The Rain Reaches the Nations"
        subtitle="Every soul matters. Every nation counts."
        size="lg"
      />

      {/* STATS STRIP */}
      <section className="bg-ink-950">
        <div className="container-rain py-16">
          <div className="grid gap-10 grid-cols-2 md:grid-cols-5">
            {impactStats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* FEED41 FEATURE */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-3xl ring-1 ring-ink-900/10 overflow-hidden">
            <Image
              src="/images/volunteers-food.jpg"
              alt="Volunteers distributing food through the Feed41 Project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-rain-600 mb-3">Flagship Project</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-900">
              Feed41 Project
            </h2>
            <p className="mt-5 text-lg text-ink-700/85 leading-relaxed">
              Feed41 is our humanitarian heartbeat — providing meals, dignity and
              the love of Christ to families facing hunger. What began with a
              single community kitchen now reaches thousands across multiple
              nations.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="font-display text-3xl font-extrabold text-rain-600">41,000+</p>
                <p className="text-sm text-ink-700/70">Meals served</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-steel-500">5+</p>
                <p className="text-sm text-ink-700/70">Nations reached</p>
              </div>
            </div>
            <Button href="/give" variant="primary" size="lg" className="mt-7">
              Support Feed41 <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* SUBSIDIARY IMPACT CARDS */}
      <Section className="bg-ink-50">
        <SectionHeading
          eyebrow="The Work"
          title="How the Rain Falls"
          subtitle="Humanitarian work carried out through our ministry arms."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaryCards.map(({ Icon, name, desc }) => (
            <div
              key={name}
              className="rounded-2xl bg-white border border-ink-900/8 p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <span className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-rain-50 text-rain-600">
                <Icon className="w-7 h-7" />
              </span>
              <h3 className="mt-4 font-display font-bold text-ink-900">{name}</h3>
              <p className="mt-1.5 text-sm text-ink-700/80">{desc}</p>
              <a
                href="/movement"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-rain-600 hover:text-rain-700"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* STORIES */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Changed Lives" title="Stories from the Field" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="rounded-2xl bg-ink-50 border border-ink-900/8 overflow-hidden"
            >
              <div className="relative h-44">
                <Image
                  src={s.image}
                  alt={`${s.name} from ${s.country}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <Heart className="w-8 h-8 text-rain-600" />
                <blockquote className="mt-4 text-ink-800 leading-relaxed font-scripture italic text-lg">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-ink-900">{s.name}</span>
                  <span className="text-ink-700/70"> · {s.country}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Section>

      {/* GLOBAL MAP */}
      <section className="bg-ink-950">
        <div className="container-rain py-20">
          <SectionHeading
            eyebrow="Where We Work"
            title="A Global Footprint"
            dark
          />
          <div className="mt-12 relative mx-auto max-w-4xl aspect-[2/1] rounded-3xl bg-ink-900 ring-1 ring-white/10 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(74,144,217,0.4) 1px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />
            {pins.map((p) => (
              <div
                key={p.c}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steel-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-steel-400 ring-2 ring-white/40" />
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs text-white/70 opacity-0 group-hover:opacity-100 transition">
                  {p.c}
                </span>
              </div>
            ))}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <Pin className="w-10 h-10 text-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-rain-600">
        <div className="container-rain py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Partner With the Rain
          </h2>
          <p className="mt-3 text-white/85 text-lg max-w-2xl mx-auto">
            Your giving sends the rain further.
          </p>
          <Button href="/give" variant="steel" size="lg" className="mt-7">
            Give Now
          </Button>
        </div>
      </section>
    </>
  );
}

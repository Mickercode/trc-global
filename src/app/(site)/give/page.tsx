import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import GivingStreams from "@/components/GivingStreams";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give to the Rain. Give, and it shall be given unto you — Luke 6:38.",
};

const steps = [
  { n: "01", title: "Choose a stream", desc: "Pick where you'd like your gift to go." },
  { n: "02", title: "Select amount", desc: "Give once or become a monthly partner." },
  { n: "03", title: "Give securely", desc: "Complete your gift through a trusted, secure checkout." },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Generosity"
        title="Give to the Rain"
        subtitle="“Give, and it shall be given unto you” — Luke 6:38"
      />

      {/* GIVING STREAMS */}
      <Section className="bg-ink-50">
        <GivingStreams />
      </Section>

      {/* HOW TO GIVE */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-rain-600 mb-3">Simple &amp; Secure</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-900">
            How to Give
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-ink-900/8 bg-ink-50 p-7"
            >
              <span className="font-display text-4xl font-black text-rain-200">
                {s.n}
              </span>
              <h3 className="mt-2 font-display font-bold text-xl text-ink-900">
                {s.title}
              </h3>
              <p className="mt-1.5 text-ink-700/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TRANSPARENCY */}
      <Section className="bg-ink-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center rounded-3xl bg-white border border-ink-900/8 p-6 sm:p-8 shadow-sm">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/giving.jpg"
              alt="Hands holding a small offering with a note reading Make a Change"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink-900">
              We Are Accountable to God and to You
            </h2>
            <p className="mt-4 text-ink-700/85 leading-relaxed">
              Every gift to The Rain is handled with prayerful integrity and full
              stewardship. Funds are directed to the streams you choose — feeding
              the hungry, sending the gospel, equipping believers, and sustaining
              the daily work of the ministry. We are committed to transparency,
              because we answer first to God, and then to you.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-rain-600">
        <div className="container-rain py-14 text-center">
          <p className="font-scripture italic text-2xl sm:text-3xl text-white text-balance max-w-3xl mx-auto">
            “Every good gift and every perfect gift is from above.” — James 1:17
          </p>
        </div>
      </section>
    </>
  );
}

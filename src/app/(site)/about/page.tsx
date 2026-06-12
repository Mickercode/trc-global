import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import Accordion from "@/components/Accordion";
import { BELIEFS } from "@/lib/beliefs";
import { YouTube, Facebook, Telegram, Instagram } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How The Rain began, why we are called The Rain, what we believe, and the heart of Pastor Mercy Adeleye.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        subtitle="A movement born in prayer, carried by the Spirit, and sent to the nations."
      />

      {/* SECTION 1 — OUR STORY */}
      <Section id="story" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-rain-600 mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-900">
              How The Rain Began
            </h2>
            <div className="mt-5 space-y-4 text-lg text-ink-700/85 leading-relaxed">
              <p>
                The Rain Church Global began with a single, burning conviction:
                that the promise of Joel 2 — the outpouring of God&apos;s Spirit
                on all flesh — was not a story for the past, but a reality for
                this generation.
              </p>
              <p>
                What started as a small gathering of intercessors crying out for
                revival has grown into a global, online-first movement of
                prayer, worship and evangelism, reaching believers across
                continents.
              </p>
              <p>
                We are not bound by a single building or city. The Rain falls
                wherever hearts are open — through screens, in homes, across
                borders — gathering the nations into one worshipping family.
              </p>
              <p>
                From daily intercession to humanitarian outreach, every
                expression of The Rain flows from the same source: the heart of
                God for a thirsty world.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl ring-1 ring-ink-900/10 overflow-hidden">
            <Image
              src="/images/worship-sunset.jpg"
              alt="Hands raised in worship at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
          </div>
        </div>
      </Section>

      {/* SECTION 2 — THE FOUNDATION */}
      <section id="foundation" className="bg-rain-600 text-white">
        <div className="container-rain py-20 sm:py-28 text-center">
          <p className="eyebrow text-white/70 mb-6">The Foundation</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-10">
            Why We Are Called The Rain
          </h2>
          <blockquote className="font-scripture italic text-2xl sm:text-3xl md:text-[2.4rem] leading-relaxed max-w-4xl mx-auto text-balance">
            “Be glad then, ye children of Zion… for he hath given you the former
            rain moderately, and he will cause to come down for you the rain,
            the former rain, and the latter rain… And it shall come to pass
            afterward, that I will pour out my Spirit upon all flesh… and also
            upon the servants and upon the handmaids in those days will I pour
            out my Spirit.”
          </blockquote>
          <p className="mt-6 font-display font-semibold tracking-widest text-white/80 text-sm uppercase">
            Joel 2:23–29
          </p>
          <p className="mt-10 max-w-2xl mx-auto text-white/85 text-lg leading-relaxed">
            The rain is God&apos;s picture of His own outpoured presence — life
            to the dry, harvest to the patient, revival to the weary. We carry
            that name as a promise: that wherever we go, the Spirit of God will
            be poured out without measure.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BELIEVE */}
      <Section id="beliefs" className="bg-ink-50">
        <SectionHeading
          eyebrow="Our Beliefs"
          title="What We Believe"
          subtitle="We stand on the 22 Bible Doctrines of the Christian Faith — the unchanging truths that anchor everything we do."
        />
        <div className="mt-12 grid gap-5 max-w-4xl mx-auto">
          {BELIEFS.map((g, i) => (
            <Accordion
              key={g.group}
              group={g.group}
              items={g.items}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </Section>

      {/* SECTION 4 — PASTOR MERCY */}
      <Section id="pastor" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-ink-900/5">
            <Image
              src="/images/pastor-mercy.jpg"
              alt="Pastor Mercy Adeleye, Lead Pastor of The Rain Church Global"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="eyebrow text-steel-500 mb-3">Lead Pastor</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900">
              Pastor Mercy Adeleye
            </h2>
            <div className="mt-5 space-y-4 text-lg text-ink-700/85 leading-relaxed">
              <p>
                Pastor Mercy Adeleye is a voice for revival in this generation.
                With a heart shaped by years of intercession, he leads The Rain
                Church Global with one unwavering conviction — that God is
                pouring out His Spirit on all flesh.
              </p>
              <p>
                His ministry spans daily prayer, global teaching, and tireless
                humanitarian work, all flowing from a single passion: that every
                nation would know the living God.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[YouTube, Facebook, Telegram, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-10 h-10 rounded-full bg-ink-50 text-ink-700 hover:bg-rain-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-rain-600">
        <div className="container-rain py-14 text-center">
          <p className="font-scripture italic text-2xl sm:text-3xl md:text-4xl text-white text-balance">
            “The Rain is not just a name. It is a promise.”
          </p>
          <Link
            href="/connect"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-rain-700 font-display font-semibold px-7 py-3.5 hover:bg-white/90 transition"
          >
            Become Part of the Story
          </Link>
        </div>
      </section>
    </>
  );
}

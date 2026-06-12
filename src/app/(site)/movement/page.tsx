import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { SUBSIDIARIES } from "@/lib/site";
import { Book, Globe, Heart, Hands, Flame } from "@/components/Icons";

export const metadata: Metadata = {
  title: "The Movement",
  description:
    "Five expressions of one mandate — reaching the world through education, technology, health, humanitarian care, and global missions.",
};

const sectorIcon: Record<string, typeof Book> = {
  Education: Book,
  Technology: Globe,
  Health: Heart,
  Humanitarian: Hands,
  "Finance & Missions": Flame,
};

export default function MovementPage() {
  return (
    <>
      <PageHero
        eyebrow="The Movement"
        title="The Movement"
        subtitle="Five expressions of one mandate — reaching the world through education, technology, health, humanitarian care, and global missions."
        size="lg"
      />

      <section className="section bg-ink-50">
        <div className="container-rain space-y-10">
          {SUBSIDIARIES.map((s, i) => {
            const Icon = sectorIcon[s.sector] ?? Flame;
            const flip = i % 2 === 1;
            return (
              <article
                key={s.name}
                className="grid gap-8 lg:grid-cols-2 items-center rounded-3xl bg-white border border-ink-900/8 overflow-hidden shadow-sm"
              >
                {/* visual */}
                <div
                  className={`relative min-h-64 h-full overflow-hidden ${
                    flip ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-ink-950/10" />
                  <span className="absolute bottom-4 left-4 grid place-items-center w-14 h-14 rounded-2xl bg-rain-600 text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </span>
                </div>
                {/* content */}
                <div className="p-8 sm:p-10">
                  <span className="inline-block text-[0.7rem] font-bold uppercase tracking-widest text-white bg-steel-400 rounded-full px-3 py-1">
                    {s.sector}
                  </span>
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-ink-900">
                    {s.name}
                  </h2>
                  <p className="mt-3 text-ink-700/85 leading-relaxed">
                    {s.mission}
                  </p>
                  <p className="mt-4 text-sm text-ink-700/70">
                    <span className="font-semibold text-ink-900">
                      Active projects:{" "}
                    </span>
                    {s.projects}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="/impact" variant="outline-dark" size="md">
                      Learn More
                    </Button>
                    <Button href="/give" variant="primary" size="md">
                      Partner With Us
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-rain-600">
        <div className="container-rain py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white text-balance">
            The Rain is Global. So Is the Work.
          </h2>
          <p className="mt-3 text-white/85 text-lg max-w-2xl mx-auto">
            Every nation, every sector, one mandate. There&apos;s a place for you
            in the movement.
          </p>
          <Button href="/connect" variant="steel" size="lg" className="mt-7">
            See How to Get Involved
          </Button>
        </div>
      </section>
    </>
  );
}

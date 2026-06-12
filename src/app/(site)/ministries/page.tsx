import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { ICONS } from "@/components/Icons";
import { MINISTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Ministries",
  description:
    "Six arms of one global mission — all flowing from the same rain.",
};

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Ministries"
        subtitle="Six arms of one global mission — all flowing from the same rain."
      />

      <section className="section bg-ink-50">
        <div className="container-rain grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {MINISTRIES.map((m) => {
            const Icon = ICONS[m.icon as keyof typeof ICONS];
            return (
              <article
                key={m.slug}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-ink-900/8 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid place-items-center w-12 h-12 rounded-2xl bg-rain-600 text-white shadow-lg">
                    <Icon className="w-6 h-6" />
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="font-display font-bold text-2xl text-ink-900">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-ink-700/80 leading-relaxed flex-1">
                    {m.blurb}
                  </p>
                  <div className="mt-5">
                    <Button href="/connect" variant="primary" size="md">
                      {m.cta}
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
            One mission. Many hands.
          </h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto text-lg">
            There is a place for your gift in the work of The Rain.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button href="/connect" variant="outline" size="lg">
              Get Involved
            </Button>
            <Button href="/give" variant="steel" size="lg">
              Give Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

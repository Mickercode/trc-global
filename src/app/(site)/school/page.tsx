import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Book, Globe, Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "School of the Word",
  description:
    "Foundational discipleship for new believers — at your own pace, from anywhere in the world.",
};

const benefits = [
  { Icon: Book, title: "Biblically Grounded", desc: "Every course is rooted in Scripture and sound doctrine." },
  { Icon: Globe, title: "Online & Self-Paced", desc: "Learn whenever and wherever works for you." },
  { Icon: Check, title: "Available Worldwide", desc: "Join thousands of students across the nations." },
];

const courses = [
  { title: "Foundations of Faith", desc: "The essential first steps for every new believer.", lessons: 8, level: "Beginner", image: "/images/bible-open.jpg" },
  { title: "Knowing the Holy Spirit", desc: "Understanding the person and work of the Spirit.", lessons: 6, level: "Beginner", image: "/images/worship-sunset.jpg" },
  { title: "The Life of Prayer", desc: "Build a daily, living conversation with God.", lessons: 7, level: "Beginner", image: "/images/teaching.jpg" },
  { title: "Understanding the Bible", desc: "How to read, study and live the Word.", lessons: 10, level: "Intermediate", image: "/images/bible-reading.jpg" },
  { title: "Walking in the Spirit", desc: "Growing in holiness, fruit and gifts.", lessons: 9, level: "Intermediate", image: "/images/sanctuary.jpg" },
  { title: "Sharing Your Faith", desc: "Confidently telling others about Jesus.", lessons: 6, level: "Intermediate", image: "/images/community.jpg" },
];

const testimonies = [
  { name: "Grace O.", country: "Nigeria", quote: "I came to faith last year. The School gave me roots I never had — I finally understand what I believe." },
  { name: "Daniel M.", country: "Kenya", quote: "Self-paced and completely free. I studied after work each night and my whole walk with God changed." },
  { name: "Aisha B.", country: "United Kingdom", quote: "Being able to learn from anywhere meant I never missed a lesson. The teaching is rich and clear." },
];

export default function SchoolPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipleship"
        title="School of the Word"
        subtitle="Foundational discipleship for new believers — at your own pace, from anywhere in the world."
      >
        <Button href="#courses" variant="primary" size="lg">
          Browse Courses
        </Button>
      </PageHero>

      {/* WHAT IT IS */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-rain-600 mb-3">What It Is</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-900">
              Grow in the Word
            </h2>
            <p className="mt-5 text-lg text-ink-700/85 leading-relaxed">
              The School of the Word exists to take new believers from their
              first steps of faith to a confident, fruitful walk with God. No
              cost, no pressure — just clear, biblical teaching designed for real
              life.
            </p>
            <p className="mt-4 text-lg text-ink-700/85 leading-relaxed">
              Whether you came to faith yesterday or simply want stronger roots,
              there is a course for you.
            </p>
          </div>
          <div className="space-y-4">
            {benefits.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-ink-900/8 bg-ink-50 p-5"
              >
                <span className="grid place-items-center w-12 h-12 shrink-0 rounded-xl bg-rain-600 text-white">
                  <Icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink-900">{title}</h3>
                  <p className="text-ink-700/80 text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* COURSE CATALOGUE */}
      <Section id="courses" className="bg-ink-50">
        <SectionHeading
          eyebrow="Enroll Free"
          title="Current Courses"
          subtitle="Start with the foundations, then keep growing at your own pace."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl bg-white border border-ink-900/8 overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-32">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink-950/25" />
                <span
                  className={`absolute top-3 right-3 text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    c.level === "Beginner"
                      ? "bg-white/90 text-ink-900"
                      : "bg-rain-600 text-white"
                  }`}
                >
                  {c.level}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display font-bold text-lg text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-ink-700/80 text-sm flex-1">{c.desc}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-steel-500">
                  {c.lessons} lessons
                </p>
                <div className="mt-4">
                  <Button href="/connect" variant="primary" size="sm" className="w-full">
                    Enroll
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ENROLL CTA */}
      <section className="bg-rain-600">
        <div className="container-rain py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Begin?
          </h2>
          <p className="mt-4 text-white/85 text-lg max-w-2xl mx-auto">
            Enrollment is free. All you need is a hunger for the Word.
          </p>
          <div className="mt-8">
            <a
              href="/connect"
              className="inline-flex items-center justify-center rounded-full bg-white text-rain-700 font-display font-semibold px-8 py-4 hover:bg-white/90 transition"
            >
              Start Now
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIES */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Testimonies"
          title="What Students Are Saying"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonies.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-ink-900/8 bg-ink-50 p-7"
            >
              <blockquote className="text-ink-800 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-steel-200 text-steel-700 font-display font-bold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink-900">{t.name}</span>
                  <span className="block text-sm text-ink-700/70">{t.country}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}

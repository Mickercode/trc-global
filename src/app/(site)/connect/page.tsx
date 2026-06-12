import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Users, Hands, Globe, Heart, WhatsApp, Telegram } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { submitConnect, submitPrayer } from "./actions";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "You are not alone. Wherever you are in the world — there is a place for you in The Rain.",
};

const field =
  "w-full rounded-xl border border-ink-900/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rain-500/40 bg-white";

function SentBanner({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-1 rounded-xl text-sm px-4 py-3 ${
        dark
          ? "bg-green-500/15 text-green-300 border border-green-500/30"
          : "bg-green-50 text-green-800 border border-green-200"
      }`}
    >
      {children}
    </p>
  );
}

const ways = [
  { Icon: Users, title: "Join a Rain Cell", desc: "Find a small community near you or online.", cta: "Find a Cell" },
  { Icon: Hands, title: "Make a Prayer Request", desc: "Our intercession team will stand with you.", cta: "Request Prayer" },
  { Icon: Globe, title: "Join Nigeria Cries", desc: "Daily prayer, every morning at 6:00 AM WAT.", cta: "Join Daily" },
  { Icon: Heart, title: "Volunteer to Serve", desc: "Use your gifts in the work of The Rain.", cta: "Start Serving" },
];

export default async function ConnectPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const { sent } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Welcome Home"
        title="You Are Not Alone"
        subtitle="Wherever you are in the world — there is a place for you in The Rain."
      />

      {/* NEW HERE FORM */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto rounded-3xl border border-ink-900/8 bg-ink-50 p-8 sm:p-10 shadow-sm">
          <p className="eyebrow text-rain-600 mb-2">New Here?</p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink-900">
            Tell us a little about you
          </h2>
          {sent === "connect" && (
            <div className="mt-5">
              <SentBanner>
                Welcome home! We&apos;ve received your details and will be in
                touch soon.
              </SentBanner>
            </div>
          )}
          <form action={submitConnect} className="mt-6 grid gap-4 sm:grid-cols-2">
            <input name="name" className={field} placeholder="Name" />
            <input name="email" className={field} type="email" placeholder="Email" />
            <input name="country" className={field} placeholder="Country" />
            <input name="how_found" className={field} placeholder="How did you find us?" />
            <select name="looking_for" className={`${field} sm:col-span-2`} defaultValue="">
              <option value="" disabled>
                What are you looking for?
              </option>
              <option>Salvation</option>
              <option>Community</option>
              <option>Discipleship</option>
              <option>Prayer</option>
              <option>Serving</option>
            </select>
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-rain-600 text-white font-display font-semibold px-7 py-3.5 hover:bg-rain-700 transition"
            >
              Welcome Home
            </button>
          </form>
        </div>
      </Section>

      {/* WAYS TO CONNECT */}
      <Section className="bg-ink-50">
        <SectionHeading
          eyebrow="Get Involved"
          title="Ways to Connect"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ Icon, title, desc, cta }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl bg-white border border-ink-900/8 p-6 shadow-sm hover:shadow-lg transition"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-rain-50 text-rain-600">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-4 font-display font-bold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-700/80 flex-1">{desc}</p>
              <button className="mt-4 text-sm font-semibold text-rain-600 hover:text-rain-700 text-left">
                {cta} →
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* COMMUNITY LINKS */}
      <Section className="bg-white">
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <a
            href={SITE.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl p-6 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition"
          >
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#25D366] text-white shrink-0">
              <WhatsApp className="w-7 h-7" />
            </span>
            <span>
              <span className="block font-display font-bold text-ink-900">
                Join WhatsApp Community
              </span>
              <span className="block text-sm text-ink-700/70">
                Daily encouragement and connection.
              </span>
            </span>
          </a>
          <a
            href={SITE.socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl p-6 bg-[#229ED9]/10 border border-[#229ED9]/30 hover:bg-[#229ED9]/15 transition"
          >
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#229ED9] text-white shrink-0">
              <Telegram className="w-7 h-7" />
            </span>
            <span>
              <span className="block font-display font-bold text-ink-900">
                Join Telegram Channel
              </span>
              <span className="block text-sm text-ink-700/70">
                Updates, teaching and live alerts.
              </span>
            </span>
          </a>
        </div>
      </Section>

      {/* PRAYER REQUEST */}
      <Section id="prayer" className="bg-ink-950">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="We Pray With You"
            title="Make a Prayer Request"
            subtitle="Your request goes straight to our intercession team. Nothing is too big or too small."
            dark
          />
          {sent === "prayer" && (
            <div className="mt-8">
              <SentBanner dark>
                Your request has been received. Our intercession team is praying
                with you. 🙏
              </SentBanner>
            </div>
          )}
          <form action={submitPrayer} className="mt-8 grid gap-4 rounded-3xl bg-white p-8 shadow-xl">
            <input name="name" className={field} placeholder="Name (optional)" />
            <input name="email" className={field} type="email" placeholder="Email" />
            <textarea
              name="message"
              required
              className={`${field} min-h-32 resize-y`}
              placeholder="Share your prayer request…"
            />
            <label className="flex items-start gap-2.5 text-sm text-ink-700/80">
              <input type="checkbox" name="share_ok" className="mt-1 accent-rain-600" />
              I agree this may be shared with our intercession team.
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-rain-600 text-white font-display font-semibold px-7 py-3.5 hover:bg-rain-700 transition"
            >
              Send My Request
            </button>
          </form>
        </div>
      </Section>

      {/* CONTACT */}
      <Section className="bg-white">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink-900">
            Reach Out Anytime
          </h2>
          <p className="mt-3 text-ink-700/80">
            <a href={`mailto:${SITE.email}`} className="text-rain-600 font-semibold hover:underline">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4 text-ink-700/70 italic font-scripture text-lg">
            We read every message.
          </p>
        </div>
      </Section>
    </>
  );
}

import Link from "next/link";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";
import { YouTube, Facebook, Telegram, WhatsApp, Instagram } from "./Icons";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "What We Believe", href: "/about#beliefs" },
      { label: "Pastor Mercy", href: "/about#pastor" },
      { label: "Connect", href: "/connect" },
    ],
  },
  {
    title: "Ministries",
    links: [
      { label: "Worship & Word", href: "/ministries" },
      { label: "Rain Cells", href: "/ministries" },
      { label: "School of the Word", href: "/school" },
      { label: "Intercession Rooms", href: "/ministries" },
    ],
  },
  {
    title: "The Movement",
    links: [
      { label: "Clapham Fellowship", href: "/movement" },
      { label: "Open-Source Faith", href: "/movement" },
      { label: "Compassion Health", href: "/movement" },
      { label: "Nations Care Mission", href: "/movement" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Watch Live", href: "/watch" },
      { label: "Give", href: "/give" },
      { label: "Our Impact", href: "/impact" },
      { label: "Prayer Request", href: "/connect#prayer" },
    ],
  },
];

export default function Footer() {
  const socials = [
    { Icon: YouTube, href: SITE.socials.youtube, label: "YouTube" },
    { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
    { Icon: Telegram, href: SITE.socials.telegram, label: "Telegram" },
    { Icon: WhatsApp, href: SITE.socials.whatsapp, label: "WhatsApp" },
    { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="container-rain py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white">
                <LogoMark className="w-9 h-9" />
              </span>
              <span className="font-display font-extrabold text-white text-lg leading-none">
                The Rain Church Global
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A global movement of prayer, worship and evangelism — rooted in
              Joel 2:28. Reaching every nation.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-rain-600 text-white/80 hover:text-white transition-colors"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rain py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} The Rain Church Global. All rights
            reserved.
          </p>
          <p className="font-display tracking-wide text-white/70">
            The Rain Church Global — Reaching Every Nation.
          </p>
        </div>
      </div>
    </footer>
  );
}

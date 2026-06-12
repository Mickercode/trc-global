"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/Logo";

const NAV = [
  { label: "Overview", href: "/admin", icon: "grid" },
  { label: "Announcements", href: "/admin/announcements", icon: "megaphone" },
  { label: "Live & Links", href: "/admin/live", icon: "broadcast" },
  { label: "Sermons", href: "/admin/sermons", icon: "play" },
  { label: "Media", href: "/admin/media", icon: "image" },
  { label: "Events", href: "/admin/events", icon: "calendar" },
  { label: "Inbox", href: "/admin/inbox", icon: "inbox" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const c = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
  };
  switch (name) {
    case "grid":
      return (<svg {...c}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>);
    case "megaphone":
      return (<svg {...c}><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M14 7s3 1 3 5-3 5-3 5"/></svg>);
    case "broadcast":
      return (<svg {...c}><circle cx="12" cy="12" r="2"/><path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16"/></svg>);
    case "play":
      return (<svg {...c}><circle cx="12" cy="12" r="9"/><path d="M10 9l5 3-5 3V9Z" fill="currentColor" stroke="none"/></svg>);
    case "image":
      return (<svg {...c}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="m3 17 5-5 4 4 3-3 6 6"/></svg>);
    case "calendar":
      return (<svg {...c}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 3v3M16 3v3"/></svg>);
    case "inbox":
      return (<svg {...c}><path d="M3 12h5l2 3h4l2-3h5"/><path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>);
    default:
      return null;
  }
}

export default function AdminSidebar({
  logoutAction,
}: {
  logoutAction: () => Promise<void>;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const links = (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
            isActive(item.href)
              ? "bg-rain-600 text-white"
              : "text-ink-700 hover:bg-ink-100"
          }`}
        >
          <Icon name={item.icon} className="w-5 h-5 shrink-0" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between bg-white border-b border-ink-900/10 px-4 py-3 sticky top-0 z-40">
        <Link href="/admin" className="flex items-center gap-2">
          <LogoMark className="w-8 h-8" />
          <span className="font-display font-extrabold text-ink-900">Admin</span>
        </Link>
        <button onClick={() => setOpen((v) => !v)} className="p-2" aria-label="Menu">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? "block" : "hidden"
        } lg:block bg-white border-r border-ink-900/10 lg:h-screen lg:sticky lg:top-0 p-4 flex-col`}
      >
        <Link href="/admin" className="hidden lg:flex items-center gap-2.5 px-2 py-3 mb-4">
          <LogoMark className="w-9 h-9" />
          <span className="font-display font-extrabold text-ink-900 leading-tight">
            The Rain
            <span className="block text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-ink-700/50">
              Admin Dashboard
            </span>
          </span>
        </Link>

        {links}

        <div className="mt-6 pt-4 border-t border-ink-900/10 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M9 18l-6-6 6-6M3 12h18" strokeLinecap="round" strokeLinejoin="round"/></svg>
            View Site
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-rain-700 hover:bg-rain-50"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 17l5-5-5-5M21 12H9M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Sign Out
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

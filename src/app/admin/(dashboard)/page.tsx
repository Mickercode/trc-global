import Link from "next/link";
import { PageHeader, Card, NotConfiguredNotice } from "@/components/admin/ui";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getCounts, getSubmissions, getLiveSettings } from "@/lib/data";

export default async function AdminHome() {
  const configured = isSupabaseConfigured();
  const [counts, recent, live] = await Promise.all([
    getCounts(),
    getSubmissions(),
    getLiveSettings(),
  ]);

  const cards = [
    { label: "Announcements", value: counts.announcements, href: "/admin/announcements" },
    { label: "Sermons", value: counts.sermons, href: "/admin/sermons" },
    { label: "Events", value: counts.events, href: "/admin/events" },
    { label: "Inbox messages", value: counts.submissions, href: "/admin/inbox" },
  ];

  const quick = [
    { label: "New announcement", href: "/admin/announcements" },
    { label: "Go live / set links", href: "/admin/live" },
    { label: "Add a sermon", href: "/admin/sermons" },
    { label: "Upload media", href: "/admin/media" },
  ];

  return (
    <>
      <PageHeader
        title="Welcome back"
        subtitle="Manage everything on The Rain Church Global from here."
      />

      {!configured && <NotConfiguredNotice />}

      {/* Live status banner */}
      <Card className="p-5 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`relative flex h-3 w-3`}>
            {live.is_live && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            )}
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${
                live.is_live ? "bg-green-500" : "bg-ink-700/30"
              }`}
            />
          </span>
          <span className="font-semibold text-ink-900">
            {live.is_live ? "You are LIVE now" : "Currently offline"}
          </span>
        </div>
        <Link
          href="/admin/live"
          className="text-sm font-semibold text-rain-600 hover:text-rain-700"
        >
          Manage live &amp; links →
        </Link>
      </Card>

      {/* Counts */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {cards.map((c) => (
          <Link key={c.label} href={c.href}>
            <Card className="p-5 hover:shadow-md transition">
              <p className="font-display text-3xl font-extrabold text-ink-900">
                {c.value}
              </p>
              <p className="text-sm text-ink-700/70 mt-1">{c.label}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick actions */}
        <Card className="p-6">
          <h2 className="font-display font-bold text-lg text-ink-900 mb-4">
            Quick actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quick.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="rounded-xl border border-ink-900/10 px-4 py-3 text-sm font-medium text-ink-800 hover:border-rain-300 hover:bg-rain-50 transition"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </Card>

        {/* Recent inbox */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-lg text-ink-900">
              Recent messages
            </h2>
            <Link href="/admin/inbox" className="text-sm font-semibold text-rain-600">
              View all
            </Link>
          </div>
          {recent.length === 0 ? (
            <p className="text-sm text-ink-700/60 py-6 text-center">
              No messages yet.
            </p>
          ) : (
            <ul className="divide-y divide-ink-900/8">
              {recent.slice(0, 5).map((s) => (
                <li key={s.id} className="py-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-ink-900 text-sm truncate">
                      {s.name || "Anonymous"}
                    </span>
                    <span className="text-xs text-ink-700/50 shrink-0 capitalize">
                      {s.kind}
                    </span>
                  </div>
                  <p className="text-sm text-ink-700/70 truncate">
                    {s.message || s.looking_for}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}

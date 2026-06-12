import {
  PageHeader,
  Card,
  Badge,
  EmptyState,
  NotConfiguredNotice,
} from "@/components/admin/ui";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getSubmissions } from "@/lib/data";
import { toggleHandled, deleteSubmission } from "./actions";

export const dynamic = "force-dynamic";

function fmt(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function InboxPage() {
  const items = await getSubmissions();
  const configured = isSupabaseConfigured();

  return (
    <>
      <PageHeader
        title="Inbox"
        subtitle="Messages from the Connect and Prayer Request forms."
      />
      {!configured && <NotConfiguredNotice />}

      <Card>
        {items.length === 0 ? (
          <EmptyState
            title="No messages yet"
            hint="Form submissions from the site land here."
          />
        ) : (
          <ul className="divide-y divide-ink-900/8">
            {items.map((s) => (
              <li
                key={s.id}
                className={`p-5 ${s.handled ? "opacity-60" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display font-bold text-ink-900">
                        {s.name || "Anonymous"}
                      </span>
                      <Badge color={s.kind === "prayer" ? "red" : "blue"}>
                        {s.kind === "prayer" ? "Prayer request" : "Connect"}
                      </Badge>
                      {s.handled && <Badge color="green">Handled</Badge>}
                    </div>
                    <p className="text-xs text-ink-700/50 mt-0.5">
                      {fmt(s.created_at)}
                      {s.email ? ` · ${s.email}` : ""}
                      {s.country ? ` · ${s.country}` : ""}
                    </p>
                    {s.looking_for && (
                      <p className="text-sm text-ink-700/80 mt-2">
                        <span className="font-semibold">Looking for:</span>{" "}
                        {s.looking_for}
                      </p>
                    )}
                    {s.message && (
                      <p className="text-sm text-ink-800 mt-2 whitespace-pre-wrap">
                        {s.message}
                      </p>
                    )}
                    {s.kind === "prayer" && (
                      <p className="text-xs text-ink-700/50 mt-2">
                        {s.share_ok
                          ? "✓ May be shared with the intercession team"
                          : "Private — do not share publicly"}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <form action={toggleHandled}>
                      <input type="hidden" name="id" value={s.id} />
                      <input type="hidden" name="handled" value={String(!s.handled)} />
                      <button className="text-xs font-semibold text-steel-600 hover:text-steel-700 whitespace-nowrap">
                        {s.handled ? "Mark unhandled" : "Mark handled"}
                      </button>
                    </form>
                    <form action={deleteSubmission}>
                      <input type="hidden" name="id" value={s.id} />
                      <button className="text-xs font-semibold text-rain-600 hover:text-rain-700">
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}

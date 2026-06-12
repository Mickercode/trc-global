import {
  PageHeader,
  Card,
  Field,
  inputCls,
  SubmitButton,
  EmptyState,
  NotConfiguredNotice,
} from "@/components/admin/ui";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getEvents } from "@/lib/data";
import { createEvent, updateEvent, deleteEvent } from "./actions";

export const dynamic = "force-dynamic";

function toLocalInput(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fmt(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function EventsPage() {
  const items = await getEvents();
  const configured = isSupabaseConfigured();

  return (
    <>
      <PageHeader title="Events" subtitle="Schedule services, programs and gatherings." />
      {!configured && <NotConfiguredNotice />}

      <Card className="p-6 mb-8">
        <h2 className="font-display font-bold text-lg text-ink-900 mb-4">Add an event</h2>
        <form action={createEvent} className="grid gap-4 sm:grid-cols-2">
          <Field label="Title">
            <input name="title" required className={inputCls} placeholder="Night of Worship" />
          </Field>
          <Field label="Location">
            <input name="location" className={inputCls} placeholder="Online / City" />
          </Field>
          <Field label="Starts">
            <input type="datetime-local" name="starts_at" required className={inputCls} />
          </Field>
          <Field label="Ends (optional)">
            <input type="datetime-local" name="ends_at" className={inputCls} />
          </Field>
          <Field label="Description">
            <textarea name="description" rows={2} className={inputCls} />
          </Field>
          <div className="sm:col-span-2 flex justify-end">
            <SubmitButton>Add event</SubmitButton>
          </div>
        </form>
      </Card>

      <Card>
        {items.length === 0 ? (
          <EmptyState title="No events yet" hint="Scheduled events will show here." />
        ) : (
          <ul className="divide-y divide-ink-900/8">
            {items.map((e) => (
              <li key={e.id} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-ink-900">{e.title}</h3>
                    <p className="text-sm text-ink-700/70 mt-1">
                      {fmt(e.starts_at)}
                      {e.location ? ` · ${e.location}` : ""}
                    </p>
                    {e.description && (
                      <p className="text-sm text-ink-700/70 mt-1 line-clamp-2">{e.description}</p>
                    )}
                  </div>
                  <form action={deleteEvent}>
                    <input type="hidden" name="id" value={e.id} />
                    <SubmitButton variant="danger" type="submit">Delete</SubmitButton>
                  </form>
                </div>

                <details className="mt-3 group">
                  <summary className="cursor-pointer text-sm font-semibold text-steel-600 list-none">
                    <span className="group-open:hidden">Edit</span>
                    <span className="hidden group-open:inline">Close</span>
                  </summary>
                  <form action={updateEvent} className="grid gap-3 sm:grid-cols-2 mt-3 rounded-xl bg-ink-50 p-4">
                    <input type="hidden" name="id" value={e.id} />
                    <Field label="Title"><input name="title" defaultValue={e.title} required className={inputCls} /></Field>
                    <Field label="Location"><input name="location" defaultValue={e.location} className={inputCls} /></Field>
                    <Field label="Starts"><input type="datetime-local" name="starts_at" defaultValue={toLocalInput(e.starts_at)} required className={inputCls} /></Field>
                    <Field label="Ends"><input type="datetime-local" name="ends_at" defaultValue={toLocalInput(e.ends_at)} className={inputCls} /></Field>
                    <Field label="Description"><textarea name="description" rows={2} defaultValue={e.description} className={inputCls} /></Field>
                    <div className="sm:col-span-2 flex justify-end">
                      <SubmitButton>Save changes</SubmitButton>
                    </div>
                  </form>
                </details>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}

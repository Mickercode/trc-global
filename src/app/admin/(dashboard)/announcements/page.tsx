import {
  PageHeader,
  Card,
  Field,
  inputCls,
  Badge,
  SubmitButton,
  EmptyState,
  NotConfiguredNotice,
} from "@/components/admin/ui";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getAnnouncements } from "@/lib/data";
import {
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "./actions";

export const dynamic = "force-dynamic";

export default async function AnnouncementsPage() {
  const items = await getAnnouncements();
  const configured = isSupabaseConfigured();

  return (
    <>
      <PageHeader
        title="Announcements"
        subtitle="Post updates that appear on the website."
      />
      {!configured && <NotConfiguredNotice />}

      {/* Create */}
      <Card className="p-6 mb-8">
        <h2 className="font-display font-bold text-lg text-ink-900 mb-4">
          New announcement
        </h2>
        <form action={createAnnouncement} className="grid gap-4">
          <Field label="Title">
            <input name="title" required className={inputCls} placeholder="e.g. Special Sunday Service" />
          </Field>
          <Field label="Message">
            <textarea name="body" rows={3} className={inputCls} placeholder="Write the announcement…" />
          </Field>
          <div className="flex flex-wrap items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="published" defaultChecked className="accent-rain-600 w-4 h-4" />
              Published
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="pinned" className="accent-rain-600 w-4 h-4" />
              Pin to top
            </label>
            <SubmitButton className="ml-auto">Post announcement</SubmitButton>
          </div>
        </form>
      </Card>

      {/* List */}
      <Card>
        {items.length === 0 ? (
          <EmptyState
            title="No announcements yet"
            hint="Your first announcement will show here and on the site."
          />
        ) : (
          <ul className="divide-y divide-ink-900/8">
            {items.map((a) => (
              <li key={a.id} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-ink-900">
                        {a.title}
                      </h3>
                      {a.pinned && <Badge color="amber">Pinned</Badge>}
                      {a.published ? (
                        <Badge color="green">Published</Badge>
                      ) : (
                        <Badge color="gray">Draft</Badge>
                      )}
                    </div>
                    {a.body && (
                      <p className="text-sm text-ink-700/80 mt-1 line-clamp-2">
                        {a.body}
                      </p>
                    )}
                  </div>
                  <form action={deleteAnnouncement}>
                    <input type="hidden" name="id" value={a.id} />
                    <SubmitButton variant="danger" type="submit">
                      Delete
                    </SubmitButton>
                  </form>
                </div>

                {/* Inline edit */}
                <details className="mt-3 group">
                  <summary className="cursor-pointer text-sm font-semibold text-steel-600 hover:text-steel-700 list-none inline-flex items-center gap-1">
                    <span className="group-open:hidden">Edit</span>
                    <span className="hidden group-open:inline">Close</span>
                  </summary>
                  <form action={updateAnnouncement} className="grid gap-3 mt-3 rounded-xl bg-ink-50 p-4">
                    <input type="hidden" name="id" value={a.id} />
                    <Field label="Title">
                      <input name="title" defaultValue={a.title} required className={inputCls} />
                    </Field>
                    <Field label="Message">
                      <textarea name="body" rows={3} defaultValue={a.body} className={inputCls} />
                    </Field>
                    <div className="flex flex-wrap items-center gap-6">
                      <label className="flex items-center gap-2 text-sm text-ink-800">
                        <input type="checkbox" name="published" defaultChecked={a.published} className="accent-rain-600 w-4 h-4" />
                        Published
                      </label>
                      <label className="flex items-center gap-2 text-sm text-ink-800">
                        <input type="checkbox" name="pinned" defaultChecked={a.pinned} className="accent-rain-600 w-4 h-4" />
                        Pinned
                      </label>
                      <SubmitButton className="ml-auto">Save changes</SubmitButton>
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

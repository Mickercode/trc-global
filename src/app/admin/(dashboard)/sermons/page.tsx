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
import { getSermons } from "@/lib/data";
import { createSermon, updateSermon, deleteSermon } from "./actions";

export const dynamic = "force-dynamic";

export default async function SermonsPage() {
  const items = await getSermons();
  const configured = isSupabaseConfigured();

  return (
    <>
      <PageHeader
        title="Sermons"
        subtitle="Add messages to the sermon archive on the Watch page."
      />
      {!configured && <NotConfiguredNotice />}

      <Card className="p-6 mb-8">
        <h2 className="font-display font-bold text-lg text-ink-900 mb-4">
          Add a sermon
        </h2>
        <form action={createSermon} className="grid gap-4 sm:grid-cols-2">
          <Field label="Title">
            <input name="title" required className={inputCls} placeholder="The Latter Rain" />
          </Field>
          <Field label="Speaker">
            <input name="speaker" className={inputCls} placeholder="Pastor Mercy Adeleye" />
          </Field>
          <Field label="Series">
            <input name="series" className={inputCls} placeholder="Joel 2" />
          </Field>
          <Field label="Date preached">
            <input type="date" name="preached_on" className={inputCls} />
          </Field>
          <Field label="Video URL (YouTube etc.)">
            <input name="video_url" className={inputCls} placeholder="https://youtube.com/watch?v=…" />
          </Field>
          <Field label="Thumbnail URL (optional)">
            <input name="thumbnail_url" className={inputCls} placeholder="https://…" />
          </Field>
          <div className="sm:col-span-2 flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="published" defaultChecked className="accent-rain-600 w-4 h-4" />
              Published
            </label>
            <SubmitButton className="ml-auto">Add sermon</SubmitButton>
          </div>
        </form>
      </Card>

      <Card>
        {items.length === 0 ? (
          <EmptyState title="No sermons yet" hint="Added sermons appear in the Watch archive." />
        ) : (
          <ul className="divide-y divide-ink-900/8">
            {items.map((s) => (
              <li key={s.id} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-ink-900">{s.title}</h3>
                      {s.series && <Badge color="blue">{s.series}</Badge>}
                      {!s.published && <Badge color="gray">Draft</Badge>}
                    </div>
                    <p className="text-sm text-ink-700/70 mt-1">
                      {s.speaker}
                      {s.preached_on ? ` · ${s.preached_on}` : ""}
                    </p>
                  </div>
                  <form action={deleteSermon}>
                    <input type="hidden" name="id" value={s.id} />
                    <SubmitButton variant="danger" type="submit">Delete</SubmitButton>
                  </form>
                </div>

                <details className="mt-3 group">
                  <summary className="cursor-pointer text-sm font-semibold text-steel-600 list-none">
                    <span className="group-open:hidden">Edit</span>
                    <span className="hidden group-open:inline">Close</span>
                  </summary>
                  <form action={updateSermon} className="grid gap-3 sm:grid-cols-2 mt-3 rounded-xl bg-ink-50 p-4">
                    <input type="hidden" name="id" value={s.id} />
                    <Field label="Title"><input name="title" defaultValue={s.title} required className={inputCls} /></Field>
                    <Field label="Speaker"><input name="speaker" defaultValue={s.speaker} className={inputCls} /></Field>
                    <Field label="Series"><input name="series" defaultValue={s.series} className={inputCls} /></Field>
                    <Field label="Date preached"><input type="date" name="preached_on" defaultValue={s.preached_on ?? ""} className={inputCls} /></Field>
                    <Field label="Video URL"><input name="video_url" defaultValue={s.video_url} className={inputCls} /></Field>
                    <Field label="Thumbnail URL"><input name="thumbnail_url" defaultValue={s.thumbnail_url} className={inputCls} /></Field>
                    <div className="sm:col-span-2 flex items-center gap-6">
                      <label className="flex items-center gap-2 text-sm text-ink-800">
                        <input type="checkbox" name="published" defaultChecked={s.published} className="accent-rain-600 w-4 h-4" />
                        Published
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

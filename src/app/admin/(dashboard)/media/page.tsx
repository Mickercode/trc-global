import Image from "next/image";
import {
  PageHeader,
  Card,
  Field,
  inputCls,
  SubmitButton,
  EmptyState,
  Badge,
  NotConfiguredNotice,
} from "@/components/admin/ui";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getMedia } from "@/lib/data";
import { uploadMedia, deleteMedia } from "./actions";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  const items = await getMedia();
  const configured = isSupabaseConfigured();

  return (
    <>
      <PageHeader
        title="Media Library"
        subtitle="Upload images and files to use across the site."
      />
      {!configured && <NotConfiguredNotice />}

      <Card className="p-6 mb-8">
        <h2 className="font-display font-bold text-lg text-ink-900 mb-4">
          Upload a file
        </h2>
        <form action={uploadMedia} className="grid gap-4 sm:grid-cols-2 items-end">
          <Field label="File">
            <input type="file" name="file" required className={inputCls} />
          </Field>
          <Field label="Title (optional)">
            <input name="title" className={inputCls} placeholder="Describe this file" />
          </Field>
          <div className="sm:col-span-2 flex justify-end">
            <SubmitButton>Upload</SubmitButton>
          </div>
        </form>
      </Card>

      <Card className="p-6">
        {items.length === 0 ? (
          <EmptyState title="No media yet" hint="Uploaded files will appear here." />
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((m) => (
              <div key={m.id} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-ink-100 ring-1 ring-ink-900/8">
                  {m.kind === "image" ? (
                    <Image
                      src={m.url}
                      alt={m.title}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full grid place-items-center">
                      <Badge>{m.kind}</Badge>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-xs text-ink-800 truncate" title={m.title}>
                  {m.title}
                </p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-steel-600 hover:text-steel-700"
                  >
                    Open
                  </a>
                  <form action={deleteMedia}>
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="path" value={m.path} />
                    <button className="text-xs font-semibold text-rain-600 hover:text-rain-700">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}

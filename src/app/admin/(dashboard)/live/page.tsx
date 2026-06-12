import {
  PageHeader,
  Card,
  Field,
  inputCls,
  SubmitButton,
  NotConfiguredNotice,
} from "@/components/admin/ui";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getLiveSettings } from "@/lib/data";
import { updateLive } from "./actions";

export const dynamic = "force-dynamic";

/** Format an ISO string for a datetime-local input (local time, no seconds). */
function toLocalInput(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default async function LivePage() {
  const live = await getLiveSettings();
  const configured = isSupabaseConfigured();

  return (
    <>
      <PageHeader
        title="Live & Links"
        subtitle="Control the live stream status and platform links shown on the site."
      />
      {!configured && <NotConfiguredNotice />}

      <Card className="p-6 max-w-2xl">
        <form action={updateLive} className="grid gap-5">
          {/* Live toggle */}
          <div className="flex items-center justify-between rounded-xl bg-ink-50 p-4">
            <div>
              <p className="font-semibold text-ink-900">We are live right now</p>
              <p className="text-sm text-ink-700/60">
                Shows a red LIVE badge on the site when on.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="is_live"
                defaultChecked={live.is_live}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-ink-200 peer-checked:bg-green-500 rounded-full peer transition-colors" />
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
            </label>
          </div>

          <Field label="YouTube live URL">
            <input name="youtube_url" defaultValue={live.youtube_url} className={inputCls} placeholder="https://youtube.com/@yourchannel/live" />
          </Field>
          <Field label="Facebook live URL">
            <input name="facebook_url" defaultValue={live.facebook_url} className={inputCls} placeholder="https://facebook.com/yourpage/live" />
          </Field>
          <Field label="Telegram link">
            <input name="telegram_url" defaultValue={live.telegram_url} className={inputCls} placeholder="https://t.me/yourchannel" />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Next service label">
              <input name="next_service_label" defaultValue={live.next_service_label} className={inputCls} placeholder="Sunday Global Service" />
            </Field>
            <Field label="Next service date & time" hint="Used for the countdown when offline.">
              <input type="datetime-local" name="next_service_at" defaultValue={toLocalInput(live.next_service_at)} className={inputCls} />
            </Field>
          </div>

          <div className="flex justify-end">
            <SubmitButton>Save settings</SubmitButton>
          </div>
        </form>
      </Card>
    </>
  );
}

"use server";

import { revalidatePath } from "next/cache";
import { getSupabase } from "@/lib/supabase";
import { isAuthed } from "@/lib/auth";

export async function updateLive(formData: FormData) {
  if (!(await isAuthed())) throw new Error("Not authorised");
  const sb = getSupabase();
  if (!sb) throw new Error("Supabase is not configured.");

  const nextAt = String(formData.get("next_service_at") || "");
  await sb.from("live_settings").update({
    is_live: formData.get("is_live") === "on",
    youtube_url: String(formData.get("youtube_url") || "").trim(),
    facebook_url: String(formData.get("facebook_url") || "").trim(),
    telegram_url: String(formData.get("telegram_url") || "").trim(),
    next_service_label: String(formData.get("next_service_label") || "").trim(),
    next_service_at: nextAt ? new Date(nextAt).toISOString() : null,
    updated_at: new Date().toISOString(),
  }).eq("id", 1);

  revalidatePath("/admin/live");
  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/watch");
}

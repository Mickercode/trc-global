"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabase } from "@/lib/supabase";

export async function submitConnect(formData: FormData) {
  const sb = getSupabase();
  if (sb) {
    await sb.from("submissions").insert({
      kind: "connect",
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      country: String(formData.get("country") || "").trim(),
      looking_for: String(formData.get("looking_for") || "").trim(),
      message: String(formData.get("how_found") || "").trim(),
    });
    revalidatePath("/admin/inbox");
  }
  redirect("/connect?sent=connect");
}

export async function submitPrayer(formData: FormData) {
  const sb = getSupabase();
  if (sb) {
    await sb.from("submissions").insert({
      kind: "prayer",
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      share_ok: formData.get("share_ok") === "on",
    });
    revalidatePath("/admin/inbox");
  }
  redirect("/connect?sent=prayer#prayer");
}

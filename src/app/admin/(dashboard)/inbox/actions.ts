"use server";

import { revalidatePath } from "next/cache";
import { getSupabase } from "@/lib/supabase";
import { isAuthed } from "@/lib/auth";

async function guard() {
  if (!(await isAuthed())) throw new Error("Not authorised");
  const sb = getSupabase();
  if (!sb) throw new Error("Supabase is not configured.");
  return sb;
}

export async function toggleHandled(formData: FormData) {
  const sb = await guard();
  await sb
    .from("submissions")
    .update({ handled: formData.get("handled") === "true" })
    .eq("id", String(formData.get("id")));
  revalidatePath("/admin/inbox");
  revalidatePath("/admin");
}

export async function deleteSubmission(formData: FormData) {
  const sb = await guard();
  await sb.from("submissions").delete().eq("id", String(formData.get("id")));
  revalidatePath("/admin/inbox");
  revalidatePath("/admin");
}

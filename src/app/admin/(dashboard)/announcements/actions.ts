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

function revalidate() {
  revalidatePath("/admin/announcements");
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function createAnnouncement(formData: FormData) {
  const sb = await guard();
  await sb.from("announcements").insert({
    title: String(formData.get("title") || "").trim(),
    body: String(formData.get("body") || "").trim(),
    published: formData.get("published") === "on",
    pinned: formData.get("pinned") === "on",
  });
  revalidate();
}

export async function updateAnnouncement(formData: FormData) {
  const sb = await guard();
  const id = String(formData.get("id"));
  await sb
    .from("announcements")
    .update({
      title: String(formData.get("title") || "").trim(),
      body: String(formData.get("body") || "").trim(),
      published: formData.get("published") === "on",
      pinned: formData.get("pinned") === "on",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
  revalidate();
}

export async function deleteAnnouncement(formData: FormData) {
  const sb = await guard();
  await sb.from("announcements").delete().eq("id", String(formData.get("id")));
  revalidate();
}

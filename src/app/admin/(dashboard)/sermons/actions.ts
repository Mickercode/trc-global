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
  revalidatePath("/admin/sermons");
  revalidatePath("/admin");
  revalidatePath("/watch");
}

function payload(formData: FormData) {
  const date = String(formData.get("preached_on") || "");
  return {
    title: String(formData.get("title") || "").trim(),
    speaker: String(formData.get("speaker") || "").trim() || "Pastor Mercy Adeleye",
    series: String(formData.get("series") || "").trim(),
    preached_on: date || null,
    video_url: String(formData.get("video_url") || "").trim(),
    thumbnail_url: String(formData.get("thumbnail_url") || "").trim(),
    published: formData.get("published") === "on",
  };
}

export async function createSermon(formData: FormData) {
  const sb = await guard();
  await sb.from("sermons").insert(payload(formData));
  revalidate();
}

export async function updateSermon(formData: FormData) {
  const sb = await guard();
  await sb.from("sermons").update(payload(formData)).eq("id", String(formData.get("id")));
  revalidate();
}

export async function deleteSermon(formData: FormData) {
  const sb = await guard();
  await sb.from("sermons").delete().eq("id", String(formData.get("id")));
  revalidate();
}

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
  revalidatePath("/admin/events");
  revalidatePath("/admin");
  revalidatePath("/connect");
}

function payload(formData: FormData) {
  const starts = String(formData.get("starts_at") || "");
  const ends = String(formData.get("ends_at") || "");
  return {
    title: String(formData.get("title") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    location: String(formData.get("location") || "").trim(),
    starts_at: starts ? new Date(starts).toISOString() : new Date().toISOString(),
    ends_at: ends ? new Date(ends).toISOString() : null,
  };
}

export async function createEvent(formData: FormData) {
  const sb = await guard();
  await sb.from("events").insert(payload(formData));
  revalidate();
}

export async function updateEvent(formData: FormData) {
  const sb = await guard();
  await sb.from("events").update(payload(formData)).eq("id", String(formData.get("id")));
  revalidate();
}

export async function deleteEvent(formData: FormData) {
  const sb = await guard();
  await sb.from("events").delete().eq("id", String(formData.get("id")));
  revalidate();
}

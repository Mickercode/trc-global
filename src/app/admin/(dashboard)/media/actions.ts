"use server";

import { revalidatePath } from "next/cache";
import { getSupabase, MEDIA_BUCKET } from "@/lib/supabase";
import { isAuthed } from "@/lib/auth";

async function guard() {
  if (!(await isAuthed())) throw new Error("Not authorised");
  const sb = getSupabase();
  if (!sb) throw new Error("Supabase is not configured.");
  return sb;
}

function kindFromType(type: string): string {
  if (type.startsWith("image/")) return "image";
  if (type.startsWith("audio/")) return "audio";
  if (type.startsWith("video/")) return "video";
  return "doc";
}

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function uploadMedia(formData: FormData) {
  const sb = await guard();
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) throw new Error("No file selected.");

  const title = String(formData.get("title") || "").trim() || file.name;
  // Use a time-derived prefix from the runtime (allowed in server actions).
  const stamp = Date.now().toString(36);
  const path = `${stamp}-${slug(file.name)}`;

  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: upErr } = await sb.storage
    .from(MEDIA_BUCKET)
    .upload(path, buffer, { contentType: file.type, upsert: false });
  if (upErr) throw new Error(upErr.message);

  const { data: pub } = sb.storage.from(MEDIA_BUCKET).getPublicUrl(path);

  await sb.from("media").insert({
    title,
    url: pub.publicUrl,
    path,
    kind: kindFromType(file.type),
  });

  revalidatePath("/admin/media");
}

export async function deleteMedia(formData: FormData) {
  const sb = await guard();
  const id = String(formData.get("id"));
  const path = String(formData.get("path"));
  if (path) await sb.storage.from(MEDIA_BUCKET).remove([path]);
  await sb.from("media").delete().eq("id", id);
  revalidatePath("/admin/media");
}

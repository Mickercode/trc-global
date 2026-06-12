import "server-only";
import { getSupabase } from "./supabase";

// ---------- Types ----------
export type Announcement = {
  id: string;
  title: string;
  body: string;
  published: boolean;
  pinned: boolean;
  created_at: string;
  updated_at: string;
};

export type LiveSettings = {
  id: number;
  is_live: boolean;
  youtube_url: string;
  facebook_url: string;
  telegram_url: string;
  next_service_at: string | null;
  next_service_label: string;
  updated_at: string;
};

export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  series: string;
  preached_on: string | null;
  video_url: string;
  thumbnail_url: string;
  published: boolean;
  created_at: string;
};

export type MediaItem = {
  id: string;
  title: string;
  url: string;
  path: string;
  kind: string;
  created_at: string;
};

export type EventItem = {
  id: string;
  title: string;
  description: string;
  location: string;
  starts_at: string;
  ends_at: string | null;
  created_at: string;
};

export type Submission = {
  id: string;
  kind: string;
  name: string;
  email: string;
  country: string;
  looking_for: string;
  message: string;
  share_ok: boolean;
  handled: boolean;
  created_at: string;
};

export const DEFAULT_LIVE: LiveSettings = {
  id: 1,
  is_live: false,
  youtube_url: "",
  facebook_url: "",
  telegram_url: "",
  next_service_at: null,
  next_service_label: "Sunday Global Service",
  updated_at: "",
};

// ---------- Reads ----------
export async function getAnnouncements(opts?: {
  publishedOnly?: boolean;
}): Promise<Announcement[]> {
  const sb = getSupabase();
  if (!sb) return [];
  let q = sb
    .from("announcements")
    .select("*")
    .order("pinned", { ascending: false })
    .order("created_at", { ascending: false });
  if (opts?.publishedOnly) q = q.eq("published", true);
  const { data } = await q;
  return (data as Announcement[]) ?? [];
}

export async function getLiveSettings(): Promise<LiveSettings> {
  const sb = getSupabase();
  if (!sb) return DEFAULT_LIVE;
  const { data } = await sb.from("live_settings").select("*").eq("id", 1).single();
  return (data as LiveSettings) ?? DEFAULT_LIVE;
}

export async function getSermons(opts?: {
  publishedOnly?: boolean;
  limit?: number;
}): Promise<Sermon[]> {
  const sb = getSupabase();
  if (!sb) return [];
  let q = sb
    .from("sermons")
    .select("*")
    .order("preached_on", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });
  if (opts?.publishedOnly) q = q.eq("published", true);
  if (opts?.limit) q = q.limit(opts.limit);
  const { data } = await q;
  return (data as Sermon[]) ?? [];
}

export async function getMedia(): Promise<MediaItem[]> {
  const sb = getSupabase();
  if (!sb) return [];
  const { data } = await sb
    .from("media")
    .select("*")
    .order("created_at", { ascending: false });
  return (data as MediaItem[]) ?? [];
}

export async function getEvents(opts?: {
  upcomingOnly?: boolean;
}): Promise<EventItem[]> {
  const sb = getSupabase();
  if (!sb) return [];
  let q = sb.from("events").select("*").order("starts_at", { ascending: true });
  if (opts?.upcomingOnly) q = q.gte("starts_at", new Date().toISOString());
  const { data } = await q;
  return (data as EventItem[]) ?? [];
}

export async function getSubmissions(kind?: string): Promise<Submission[]> {
  const sb = getSupabase();
  if (!sb) return [];
  let q = sb
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });
  if (kind) q = q.eq("kind", kind);
  const { data } = await q;
  return (data as Submission[]) ?? [];
}

export async function getCounts() {
  const sb = getSupabase();
  if (!sb)
    return { announcements: 0, sermons: 0, events: 0, submissions: 0 };
  const tables = ["announcements", "sermons", "events", "submissions"] as const;
  const results = await Promise.all(
    tables.map((t) =>
      sb.from(t).select("*", { count: "exact", head: true }),
    ),
  );
  return {
    announcements: results[0].count ?? 0,
    sermons: results[1].count ?? 0,
    events: results[2].count ?? 0,
    submissions: results[3].count ?? 0,
  };
}

-- ============================================================
-- The Rain Church Global — database schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query).
-- Safe to re-run: uses "if not exists" / upserts where possible.
-- ============================================================

-- ---------- Announcements ----------
create table if not exists public.announcements (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  body        text not null default '',
  published   boolean not null default true,
  pinned      boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ---------- Live stream settings (single row) ----------
create table if not exists public.live_settings (
  id              int primary key default 1,
  is_live         boolean not null default false,
  youtube_url     text default '',
  facebook_url    text default '',
  telegram_url    text default '',
  next_service_at timestamptz,
  next_service_label text default 'Sunday Global Service',
  updated_at      timestamptz not null default now(),
  constraint live_settings_singleton check (id = 1)
);
insert into public.live_settings (id) values (1)
  on conflict (id) do nothing;

-- ---------- Sermons ----------
create table if not exists public.sermons (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  speaker       text not null default 'Pastor Mercy Adeleye',
  series        text default '',
  preached_on   date,
  video_url     text default '',
  thumbnail_url text default '',
  published     boolean not null default true,
  created_at    timestamptz not null default now()
);

-- ---------- Media library (uploads) ----------
create table if not exists public.media (
  id          uuid primary key default gen_random_uuid(),
  title       text not null default '',
  url         text not null,
  path        text not null,
  kind        text not null default 'image', -- image | audio | video | doc
  created_at  timestamptz not null default now()
);

-- ---------- Events ----------
create table if not exists public.events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text default '',
  location    text default '',
  starts_at   timestamptz not null,
  ends_at     timestamptz,
  created_at  timestamptz not null default now()
);

-- ---------- Form submissions (connect + prayer) ----------
create table if not exists public.submissions (
  id          uuid primary key default gen_random_uuid(),
  kind        text not null default 'connect', -- connect | prayer
  name        text default '',
  email       text default '',
  country     text default '',
  looking_for text default '',
  message     text default '',
  share_ok    boolean not null default false,
  handled     boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ---------- Indexes ----------
create index if not exists idx_announcements_created on public.announcements (created_at desc);
create index if not exists idx_sermons_preached on public.sermons (preached_on desc);
create index if not exists idx_events_starts on public.events (starts_at);
create index if not exists idx_submissions_created on public.submissions (created_at desc);

-- ============================================================
-- Row Level Security
-- The public site reads published content with the ANON key, so we enable RLS
-- and allow public SELECT on published rows only. All writes happen on the
-- server with the SERVICE ROLE key, which bypasses RLS.
-- ============================================================
alter table public.announcements enable row level security;
alter table public.live_settings  enable row level security;
alter table public.sermons         enable row level security;
alter table public.media           enable row level security;
alter table public.events          enable row level security;
alter table public.submissions     enable row level security;

-- Public read policies (published content only)
drop policy if exists "read published announcements" on public.announcements;
create policy "read published announcements" on public.announcements
  for select using (published = true);

drop policy if exists "read live settings" on public.live_settings;
create policy "read live settings" on public.live_settings
  for select using (true);

drop policy if exists "read published sermons" on public.sermons;
create policy "read published sermons" on public.sermons
  for select using (published = true);

drop policy if exists "read media" on public.media;
create policy "read media" on public.media for select using (true);

drop policy if exists "read events" on public.events;
create policy "read events" on public.events for select using (true);

-- Submissions: allow public INSERT (forms) but NO public SELECT (private).
drop policy if exists "public can submit" on public.submissions;
create policy "public can submit" on public.submissions
  for insert with check (true);

-- ============================================================
-- Storage bucket for media uploads
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "public read media bucket" on storage.objects;
create policy "public read media bucket" on storage.objects
  for select using (bucket_id = 'media');

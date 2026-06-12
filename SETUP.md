# The Rain Church Global — Setup

A Next.js 16 (App Router) + Tailwind v4 website with a built-in admin dashboard
backed by Supabase.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The public site works immediately. The admin
dashboard works for login right away; saving data needs Supabase (step 3).

## 2. Accessing the admin dashboard

- Go to **<http://localhost:3000/admin>** (in production: `https://yourdomain.com/admin`).
- You'll be sent to a login screen. Enter the **shared team password**.
- The password is set by the `ADMIN_PASSWORD` value in `.env.local`.
  - Current local default: `rain2026` — **change this** before going live.
- Once in, use the left sidebar: Overview, Announcements, Live & Links,
  Sermons, Media, Events, Inbox. "Sign Out" is at the bottom.

The dashboard is not linked from the public site (on purpose). Just visit
`/admin` directly and bookmark it.

## 3. Connecting Supabase (enables saving data + uploads)

1. Create a free project at <https://supabase.com>.
2. In the Supabase dashboard, open **SQL Editor → New query**, paste the
   contents of [`supabase/schema.sql`](supabase/schema.sql), and run it. This
   creates all tables, security policies, and the `media` storage bucket.
3. In **Project Settings → API**, copy these three values into a file named
   `.env.local` (copy `.env.example` as a starting point):

   ```
   NEXT_PUBLIC_SUPABASE_URL=...        # Project URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...   # anon public key
   SUPABASE_SERVICE_ROLE_KEY=...       # service_role secret key (keep private)
   ```

4. Set your admin password and a session secret in the same file:

   ```
   ADMIN_PASSWORD=your-strong-password
   ADMIN_SESSION_SECRET=<run: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))">
   ```

5. Restart `npm run dev`. The amber "Supabase isn't connected" notices will
   disappear and everything you create in the dashboard will save and appear on
   the site.

## 4. What the dashboard controls

| Section        | Controls on the public site                                  |
| -------------- | ------------------------------------------------------------ |
| Announcements  | News banner on the homepage                                  |
| Live & Links   | LIVE badge, stream links, and countdown on Home + Watch      |
| Sermons        | The sermon archive on the Watch page                         |
| Media          | Uploaded images/files (Supabase Storage)                     |
| Events         | Event listings                                               |
| Inbox          | Submissions from the Connect + Prayer Request forms          |

## 5. Deploying

Deploy to **Vercel** (recommended for Next.js): import the GitHub repo, add the
same environment variables in the Vercel project settings, and deploy. Set
`ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` to strong production values there.

## Tech notes

- Public pages are static and revalidate on-demand when you change data in the
  dashboard.
- Admin auth is a single shared password stored as a signed, httpOnly cookie —
  no per-user accounts (by request). To rotate access, change `ADMIN_PASSWORD`.
- Stock images in `public/images/` are free-to-use (Unsplash). Replace any of
  them with your own photos using the same filenames.

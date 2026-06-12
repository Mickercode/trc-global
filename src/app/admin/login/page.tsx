import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthed } from "@/lib/auth";
import { LogoMark } from "@/components/Logo";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (await isAuthed()) redirect("/admin");

  return (
    <div className="min-h-screen grid place-items-center bg-ink-950 px-6">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(102deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 11px)",
        }}
        aria-hidden
      />
      <div className="relative w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="grid place-items-center w-16 h-16 rounded-2xl bg-white mb-4">
            <LogoMark className="w-12 h-12" />
          </span>
          <h1 className="font-display text-2xl font-extrabold text-white">
            The Rain Church Global
          </h1>
          <p className="text-white/50 text-sm mt-1">Admin Dashboard</p>
        </div>
        <div className="rounded-2xl bg-white p-7 shadow-2xl">
          <LoginForm />
        </div>
        <p className="text-center text-white/40 text-xs mt-6">
          Authorised team members only.
        </p>
      </div>
    </div>
  );
}

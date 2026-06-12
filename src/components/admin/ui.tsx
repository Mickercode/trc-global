import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-ink-900">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-ink-700/70">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white border border-ink-900/8 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-ink-900 mb-1.5">
        {label}
      </span>
      {children}
      {hint && <span className="block text-xs text-ink-700/60 mt-1">{hint}</span>}
    </label>
  );
}

export const inputCls =
  "w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rain-500/40 bg-white";

export function Badge({
  children,
  color = "gray",
}: {
  children: ReactNode;
  color?: "gray" | "green" | "red" | "blue" | "amber";
}) {
  const colors = {
    gray: "bg-ink-100 text-ink-700",
    green: "bg-green-100 text-green-700",
    red: "bg-rain-50 text-rain-700",
    blue: "bg-steel-100 text-steel-700",
    amber: "bg-amber-100 text-amber-700",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "danger";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const v = {
    primary: "bg-rain-600 text-white hover:bg-rain-700",
    ghost: "bg-ink-100 text-ink-800 hover:bg-ink-200",
    danger: "bg-white text-rain-700 border border-rain-200 hover:bg-rain-50",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold text-sm px-5 py-2.5 transition disabled:opacity-60 ${v[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function EmptyState({
  title,
  hint,
}: {
  title: string;
  hint?: string;
}) {
  return (
    <div className="text-center py-14 px-6">
      <p className="font-display font-bold text-ink-900">{title}</p>
      {hint && <p className="mt-1 text-sm text-ink-700/60">{hint}</p>}
    </div>
  );
}

export function NotConfiguredNotice() {
  return (
    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 mb-6 text-sm text-amber-900">
      <p className="font-semibold">Supabase isn&apos;t connected yet.</p>
      <p className="mt-1 text-amber-800/90">
        Add your Supabase keys to <code className="font-mono">.env.local</code>{" "}
        and run the schema in <code className="font-mono">supabase/schema.sql</code>{" "}
        to start saving data. See <code className="font-mono">SETUP.md</code>.
      </p>
    </div>
  );
}

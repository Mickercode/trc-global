import type { ReactNode } from "react";

/**
 * Dark, textured page hero used across interior pages.
 * Uses a layered CSS gradient "rain" texture so no external image is required.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "md",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  size?: "md" | "lg";
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* rain texture */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(105deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 9px)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 0%, rgba(192,57,43,0.35), transparent 55%), radial-gradient(90% 80% at 10% 100%, rgba(74,144,217,0.25), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className={`relative container-rain ${
          size === "lg" ? "py-28 sm:py-36" : "py-20 sm:py-28"
        }`}
      >
        <div
          className={
            align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"
          }
        >
          {eyebrow && (
            <p className="eyebrow text-steel-300 mb-4">{eyebrow}</p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg sm:text-xl text-white/75 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-dark" | "ghost" | "steel";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-rain-600 text-white hover:bg-rain-700 shadow-sm shadow-rain-600/20",
  steel: "bg-steel-400 text-white hover:bg-steel-500",
  outline:
    "border border-white/70 text-white hover:bg-white hover:text-ink-900",
  "outline-dark":
    "border border-ink-900/20 text-ink-900 hover:bg-ink-900 hover:text-white",
  ghost: "text-rain-600 hover:text-rain-700",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

function classes(variant: Variant, size: Size, className?: string) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-wide transition-colors duration-200 cursor-pointer",
    variants[variant],
    sizes[size],
    className ?? "",
  ].join(" ");
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: BaseProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAction({
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

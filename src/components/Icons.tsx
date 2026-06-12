import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Flame(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2c1 3 4 4.5 4 8a4 4 0 1 1-8 0c0-1.5.5-2.5 1-3 .2 1 .8 1.6 1.5 1.6C11 6 11 4 12 2Z" />
    </svg>
  );
}
export function Users(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.7" />
    </svg>
  );
}
export function Book(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5a2 2 0 0 1 2-2h10v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M16 3h2a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-2" />
    </svg>
  );
}
export function Hands(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 10V4a1.5 1.5 0 0 1 3 0v6M13 10.5V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1a5 5 0 0 1-4-2l-3-4a1.6 1.6 0 0 1 2.4-2L7 13" />
    </svg>
  );
}
export function Globe(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}
export function Heart(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.5-9.2-8.3C1 8.5 2.7 5 6 5c2 0 3 1.2 4 2.5C11 6.2 12 5 14 5c3.3 0 5 3.5 3.2 6.7C19 15.5 12 20 12 20Z" />
    </svg>
  );
}
export function Play(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M7 5v14l11-7L7 5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function ArrowRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function Check(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12.5 10 17 19 7" />
    </svg>
  );
}
export function Pin(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
export function Heart2(p: P) {
  return <Heart {...p} />;
}
export function YouTube(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}
export function Facebook(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
export function Telegram(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6.2 13.6l-4.9-1.5c-1-.3-1-1 .2-1.5l19.1-7.4c.9-.3 1.6.2 1.3 1.6Z" />
    </svg>
  );
}
export function WhatsApp(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.8-4.3-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.3-.2.6-.1l1.9.9c.3.1.5.2.5.4.1.2.1.9-.1 1.4Z" />
    </svg>
  );
}
export function Instagram(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export const ICONS = {
  flame: Flame,
  users: Users,
  book: Book,
  hands: Hands,
  globe: Globe,
  heart: Heart,
} as const;

export type IconKey = keyof typeof ICONS;

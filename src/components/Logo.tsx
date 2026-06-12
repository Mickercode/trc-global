import Link from "next/link";

/**
 * The Rain Church Global logo.
 * Mark: burnt-orange double arc over an open book, with cornflower-blue
 * raindrops falling into the centre. Recreated as SVG from the brand logo.
 *
 * To use the official raster/vector instead, drop it at /public/logo.png
 * (or logo.svg) and swap <LogoMark /> for a next/image.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="The Rain Church Global">
      {/* outer arc */}
      <path
        d="M14 56 A36 36 0 0 1 86 56"
        fill="none"
        stroke="#C0392B"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* inner arc */}
      <path
        d="M26 56 A24 24 0 0 1 74 56"
        fill="none"
        stroke="#C0392B"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* open book base */}
      <path
        d="M11 60 Q31 51 50 61 Q69 51 89 60 L86 72 Q69 62 50 72 Q31 62 14 72 Z"
        fill="#C0392B"
      />
      {/* raindrops */}
      <g fill="#7B9BE8">
        <path d="M46 30 C49 35 51 38 51 41 a5 5 0 0 1-10 0 C41 38 43 35 46 30 Z" />
        <path d="M58 34 C60 37.5 61.5 40 61.5 42 a3.6 3.6 0 0 1-7.2 0 C54.3 40 56 37.5 58 34 Z" />
        <path d="M51 50 C52.6 52.6 53.7 54.4 53.7 56 a2.7 2.7 0 0 1-5.4 0 C48.3 54.4 49.4 52.6 51 50 Z" />
        <path d="M61 50 C62.1 51.8 62.9 53 62.9 54.1 a1.9 1.9 0 0 1-3.8 0 C59.1 53 59.9 51.8 61 50 Z" />
        <path d="M66 47 C66.8 48.3 67.4 49.2 67.4 50 a1.4 1.4 0 0 1-2.8 0 C64.6 49.2 65.2 48.3 66 47 Z" />
      </g>
    </svg>
  );
}

export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <LogoMark className="w-10 h-10" />
      <span className="font-display font-extrabold leading-none text-[1.05rem]">
        <span className={light ? "text-white" : "text-ink-900"}>The </span>
        <span className="text-steel-400">Rain </span>
        <span className={light ? "text-white" : "text-ink-900"}>Church</span>
        <span className="block text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-ink-700/60 mt-0.5">
          Global
        </span>
      </span>
    </Link>
  );
}

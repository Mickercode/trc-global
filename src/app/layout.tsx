import type { Metadata } from "next";
import { Montserrat, Inter, Cormorant } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://therainchurch.global"),
  title: {
    default: "The Rain Church Global — Reaching Every Nation",
    template: "%s — The Rain Church Global",
  },
  description:
    "A global movement of prayer, worship and evangelism — rooted in Joel 2:28. Watch live, grow in the Word, and join the Rain.",
  openGraph: {
    title: "The Rain Church Global",
    description:
      "A global movement of prayer, worship and evangelism — rooted in Joel 2:28.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}

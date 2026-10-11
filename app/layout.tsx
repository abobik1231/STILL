import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    { path: "../public/fonts/cormorant-light.ttf", weight: "300" },
    { path: "../public/fonts/cormorant-regular.ttf", weight: "400 600" },
    { path: "../public/fonts/cormorant-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = localFont({
  src: [
    { path: "../public/fonts/jakarta-light.ttf", weight: "300" },
    { path: "../public/fonts/jakarta-regular.ttf", weight: "400" },
    { path: "../public/fonts/jakarta-medium.ttf", weight: "500" },
    { path: "../public/fonts/jakarta-semibold.ttf", weight: "600" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://still-retreats.com"),
  title: "STILL: Святилище тишины и велнес-ретриты",
  description:
    "Уединённые ретриты среди оливковых рощ. Архитектура покоя, термальные ритуалы и бережная забота о внутреннем балансе.",
  applicationName: "STILL Retreats & Sanctuaries",
  openGraph: {
    title: "STILL: Обретите тишину",
    description:
      "Иммерсивное святилище для современного благополучия и внутреннего баланса.",
    locale: "ru_RU",
    type: "website",
    images: [`${basePath}/images/hero.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorant.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}

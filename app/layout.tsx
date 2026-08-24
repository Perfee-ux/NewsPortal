import type { Metadata } from "next";
import { Mukta, Khand } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
});

const khand = Khand({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "Nepali News Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ne"
      className={`${mukta.variable} ${khand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
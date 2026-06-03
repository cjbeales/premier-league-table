import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "@styles/layout.module.scss";
import classNames from "classnames";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premier League Table 24/25",
  description: "Recreation of the 2024/2025 Premier League Tabel after 25 games played.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames(geistSans.variable, geistMono.variable, styles.htmlWrapper)}
    >
      <body className={styles.wrapper}>{children}</body>
    </html>
  );
}

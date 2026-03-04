import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "朱彦和 — AI 产品经理",
  description:
    "AI 产品经理个人作品集：需求洞察、AI 能力产品化、数据闭环与增长。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mesh-bg`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-3rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

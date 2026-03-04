import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.variable} ${notoSansSC.variable} antialiased mesh-bg`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-3rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

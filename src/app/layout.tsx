import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "DevPulse - 技术博客平台",
    template: "%s | DevPulse",
  },
  description:
    "DevPulse 是一个专注于技术分享的平台，汇集优质的技术文章、教程和开发经验，帮助开发者共同成长。",
  keywords: ["技术博客", "前端开发", "后端开发", "DevOps", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

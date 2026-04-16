"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "文章", href: "/articles" },
  { label: "分类", href: "/categories" },
  { label: "关于", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
              <span className="text-sm font-bold text-white">DP</span>
            </div>
            <span className="hidden sm:block text-lg font-bold text-[var(--foreground)]">
              DevPulse
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-md hover:bg-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-[var(--muted-foreground)] border border-[var(--border)] rounded-md hover:bg-[var(--accent)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            搜索...
          </Link>

          <Link
            href="/write"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
          >
            写文章
          </Link>

          <button
            className="flex md:hidden p-2 text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="切换菜单"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[var(--border)]">
              <Link
                href="/write"
                className="flex-1 text-center px-3 py-2 text-sm font-medium bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                写文章
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

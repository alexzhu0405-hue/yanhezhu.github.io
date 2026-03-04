"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/cases", label: "案例" },
  { href: "/projects", label: "项目" },
  { href: "/resume", label: "简历" },
  { href: "/contact", label: "联系" },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-lg font-bold tracking-tight text-transparent"
        >
          朱彦和
        </Link>
        <ul className="flex gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive(l.href)
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

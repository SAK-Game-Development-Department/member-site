"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { site, topNav, learnSidebar, communitySidebar } from "@/content/site";

function toggleTheme() {
  const dark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
}

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-wash dark:bg-wash-dark border-b border-border dark:border-border-dark">
      <nav className="flex items-center gap-[0.9rem] h-[4.5rem] px-[0.9rem] lg:px-[1.8rem] max-w-[90rem] mx-auto">
        <button
          className="lg:hidden p-[0.45rem] -ml-[0.45rem] hover:opacity-60"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-[0.45rem] font-black italic text-lg whitespace-nowrap hover:text-link dark:hover:text-link-dark"
        >
          <Logo className="w-[1.8rem] h-[1.8rem] text-primary dark:text-primary-dark" />
          {site.name}
        </Link>
        <div className="hidden lg:flex flex-1 justify-center">
          <span className="text-sm font-black tracking-[0.3em] text-uni dark:text-primary-dark">
            {site.tagline}
          </span>
        </div>
        <div className="flex-1 lg:flex-none" />
        <ul className="hidden lg:flex items-center gap-[0.45rem]">
          {topNav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-[0.9rem] py-[0.45rem] font-medium ${active ? "font-bold text-bloom dark:text-link-dark border-b-[3px] border-bloom" : "hover:opacity-60"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label="テーマ切り替え"
          className="p-[0.45rem] hover:opacity-60"
        >
          <svg
            className="w-6 h-6 dark:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
          <svg
            className="w-6 h-6 hidden dark:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
        <a
          href={site.github}
          className="p-[0.45rem] text-sm font-black tracking-[0.3em] hover:opacity-60"
        >
          GitHub
        </a>
      </nav>
      {open && (
        <div className="lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border dark:border-border-dark px-[0.9rem] py-[0.9rem]">
          {[...learnSidebar, ...communitySidebar].map((s) => (
            <div key={s.title} className="mb-[0.9rem]">
              <p className="px-[0.9rem] mb-[0.45rem] text-sm font-black tracking-[0.3em] text-uni dark:text-primary-dark">
                {s.title}
              </p>
              {s.items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={close}
                  className="block px-[0.9rem] py-[0.45rem] border-l-[3px] border-transparent hover:bg-card dark:hover:bg-card-dark"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/blog"
            onClick={close}
            className="block px-[0.9rem] py-[0.45rem] font-bold hover:bg-card dark:hover:bg-card-dark"
          >
            ブログ
          </Link>
        </div>
      )}
    </header>
  );
}

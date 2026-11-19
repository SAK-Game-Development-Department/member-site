"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { site, topNav, learnSidebar, communitySidebar } from "@/content/site";

function toggleTheme() {
  const day = document.documentElement.classList.toggle("day");
  try {
    localStorage.setItem("theme", day ? "light" : "dark");
  } catch {}
}

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="masthead">
      <nav className="masthead-nav">
        <button
          className="menu-btn"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
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
        <Link href="/" onClick={close} className="brand">
          <Logo />
          {site.name}
        </Link>
        <div className="tagline-wrap">
          <span className="tagline">{site.tagline}</span>
        </div>
        <div className="nav-spacer" />
        <ul className="nav-list">
          {topNav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-item${active ? " is-active" : ""}`}
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
          className="theme-btn"
        >
          <svg
            className="icon-moon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
          <svg
            className="icon-sun"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
        <a href={site.github} className="github-link">
          GitHub
        </a>
      </nav>
      {open && (
        <div className="menu-panel">
          {[...learnSidebar, ...communitySidebar].map((s) => (
            <div key={s.title} className="menu-group">
              <p className="menu-label">{s.title}</p>
              {s.items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={close}
                  className="menu-item"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/blog" onClick={close} className="menu-item menu-item--blog">
            ブログ
          </Link>
        </div>
      )}
    </header>
  );
}

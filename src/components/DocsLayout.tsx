"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarSection } from "@/content/site";

export function DocsLayout({
  sidebar,
  children,
}: {
  sidebar: SidebarSection[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const flat = sidebar.flatMap((s) => s.items);
  const idx = flat.findIndex((i) => i.href === pathname);
  const prev = flat[idx - 1];
  const next = idx >= 0 ? flat[idx + 1] : undefined;

  return (
    <div className="docs">
      <aside className="docs-aside">
        {sidebar.map((s) => (
          <div key={s.title} className="docs-group">
            <p className="docs-label">
              {s.title}
            </p>
            <ul>
              {s.items.map((i) => {
                const active = i.href === pathname;
                return (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      aria-current={active ? "page" : undefined}
                      className={`docs-item${active ? " is-active" : ""}`}
                    >
                      {i.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
      <main className="docs-main">
        <article className="doc">{children}</article>
        {(prev || next) && (
          <nav className="pager">
            {prev ? <PagerLink item={prev} label="前へ" /> : <span />}
            {next && <PagerLink item={next} label="次へ" right />}
          </nav>
        )}
      </main>
    </div>
  );
}

function PagerLink({
  item,
  label,
  right,
}: {
  item: { href: string; label: string };
  label: string;
  right?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`pager-link${right ? " is-next" : ""}`}
    >
      <span className="pager-label">
        {label}
      </span>
      <span className="pager-title">
        {item.label}
      </span>
    </Link>
  );
}

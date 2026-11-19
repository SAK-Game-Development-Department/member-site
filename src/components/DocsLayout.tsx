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
    <div className="flex max-w-[90rem] mx-auto">
      <aside className="hidden lg:block w-72 shrink-0 sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto border-r border-border dark:border-border-dark px-[0.9rem] py-[1.8rem]">
        {sidebar.map((s) => (
          <div key={s.title} className="mb-[1.35rem]">
            <p className="px-[0.9rem] mb-[0.45rem] text-sm font-black tracking-[0.3em] text-uni dark:text-primary-dark">
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
                      className={`block px-[0.9rem] py-[0.45rem] border-l-[3px] ${active ? "border-bloom text-bloom dark:text-link-dark font-bold" : "border-transparent hover:opacity-60"}`}
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
      <main className="flex-1 min-w-0 px-[1.35rem] sm:px-[3.6rem] py-[3.6rem]">
        <article className="doc max-w-[45rem] mx-auto">{children}</article>
        {(prev || next) && (
          <nav className="max-w-[45rem] mx-auto mt-[3.6rem] grid sm:grid-cols-2 gap-[0.9rem]">
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
      className={`block p-[1.35rem] border-[1.5px] border-border dark:border-border-dark hover:opacity-60 ${right ? "text-right" : ""}`}
    >
      <span className="block text-sm font-black tracking-[0.3em] text-uni dark:text-primary-dark">
        {label}
      </span>
      <span className="font-bold italic text-lg text-primary dark:text-primary-dark">
        {item.label}
      </span>
    </Link>
  );
}

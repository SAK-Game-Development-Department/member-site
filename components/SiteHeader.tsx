"use client";

import { useState } from "react";

// 野花の記法 — ヘッダー。
// トップノート・ナビは直立ラベル（第九条）。丸角・影なし（第七条）。
// ホバーは opacity のみ・2拍（第八条）。
const navLinkClass = "transition-opacity duration-[0.72s] hover:opacity-[0.5]";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // スマホ幅では閉じている時だけ非表示にする（開いている時は flex のまま）
  const navClass = [
    "flex items-center gap-[2.7rem] text-[0.7rem] font-bold tracking-[0.3em]",
    "max-[850px]:gap-[1.8rem]",
    "max-[640px]:absolute max-[640px]:top-full max-[640px]:left-0 max-[640px]:right-0",
    "max-[640px]:z-[4] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[1.8rem]",
    "max-[640px]:border-b-[1.5px] max-[640px]:border-ink max-[640px]:bg-ground max-[640px]:px-[2.25rem] max-[640px]:py-[2.7rem]",
    menuOpen ? "" : "max-[640px]:hidden",
  ].join(" ");

  return (
    <>
      {/* トップノート（ラベル。直立・飾りなし・糸罫で閉じる） */}
      <div className="border-b-[1px] border-ink py-[0.45rem] text-center text-[0.65rem] font-bold tracking-[0.35em] text-uni max-[640px]:text-[0.6rem]">
        IDEAS INTO REALITY.
      </div>

      {/* 柱（masthead）。行罫1.5pxで閉じる */}
      <header className="relative flex items-center justify-between gap-[1.8rem] border-b-[1.5px] border-ink bg-ground px-[5.4rem] py-[0.9rem] max-[850px]:px-[3.6rem] max-[640px]:px-[2.25rem]">
        {/* ロゴは実像（第十条）。面罫3pxの額に入れる。色も形もいじらない */}
        <a
          className="block w-[14.4rem] border-[3px] border-ink max-[850px]:w-[11.25rem] max-[640px]:w-[10.8rem]"
          href="#home"
          aria-label="ホーム"
        >
          <img
            className="block w-full"
            src="/assets/logo.jpg"
            alt="AI & Game Development Club ロゴ"
          />
        </a>

        {/* ハンバーガーは面罫3pxの二本 */}
        <button
          className="z-[5] hidden flex-col gap-[0.45rem] border-0 bg-transparent p-[0.45rem] max-[640px]:flex"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block h-[3px] w-[2.25rem] bg-ink"></span>
          <span className="block h-[3px] w-[2.25rem] bg-ink"></span>
        </button>

        <nav className={navClass}>
          <a className={navLinkClass} href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a className={navLinkClass} href="#activities" onClick={closeMenu}>
            ACTIVITIES
          </a>
          <a className={navLinkClass} href="#projects" onClick={closeMenu}>
            PROJECTS
          </a>
          {/* JOIN US は塗りの額。地面を変えずに使う唯一の強い部品 */}
          <a
            className="border-[1.5px] bg-ink px-[1.35rem] py-[0.9rem] text-ground"
            href="#join"
            onClick={closeMenu}
          >
            JOIN US
          </a>
        </nav>
      </header>
    </>
  );
}
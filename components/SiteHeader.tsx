"use client";

import { useState } from "react";

const navLinkClass =
  "transition-opacity duration-200 hover:opacity-[.55]";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // スマホ幅では閉じている時だけ非表示にする（開いている時は flex のまま）
  const navClass = [
    "flex items-center gap-[35px] text-[11px] font-bold tracking-[.11em]",
    "max-[850px]:gap-5",
    "max-[640px]:absolute max-[640px]:top-24 max-[640px]:left-0 max-[640px]:right-0",
    "max-[640px]:flex-col max-[640px]:items-start max-[640px]:z-[4]",
    "max-[640px]:border-b max-[640px]:border-line max-[640px]:bg-[#fff3e5] max-[640px]:px-[7%] max-[640px]:py-6",
    menuOpen ? "" : "max-[640px]:hidden",
  ].join(" ");

  return (
    <>
      <div className="flex h-[31px] items-center justify-center gap-3.5 bg-brown text-[10px] tracking-[.2em] text-[#ffdfc3] max-[640px]:h-[26px] max-[640px]:text-[8px]">
        <span className="text-[#eaa76f]">✦</span> IDEAS INTO REALITY.{" "}
        <span className="text-[#eaa76f]">✦</span>
      </div>

      <header className="flex h-24 items-center justify-between border-b border-line bg-[#fff4e7] px-[6.5%] max-[850px]:h-[75px] max-[640px]:h-[70px] max-[640px]:px-[5%]">
        <a
          className="block w-[250px] overflow-hidden max-[850px]:w-[190px] max-[640px]:w-[165px]"
          href="#home"
          aria-label="ホーム"
        >
          <img
            className="block w-full mix-blend-multiply"
            src="/assets/logo.jpg"
            alt="AI & Game Development Club ロゴ"
          />
        </a>

        <button
          className="z-[5] hidden flex-col gap-[5px] border-0 bg-transparent p-2.5 max-[640px]:flex"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-[23px] bg-brown"></span>
          <span className="block h-0.5 w-[23px] bg-brown"></span>
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
          <a
            className={`${navLinkClass} rounded-full bg-brown px-[19px] py-[13px] text-cream`}
            href="#join"
            onClick={closeMenu}
          >
            JOIN US <span className="ml-2.5">↗</span>
          </a>
        </nav>
      </header>
    </>
  );
}

"use client";

import { useEffect } from "react";

/**
 * 画面内に入ったセクション・カードをふわっと表示する。
 * 対象は `data-reveal` 属性を持つ要素。表示状態は `data-reveal` の値
 * （"hidden" → "visible"）で管理し、見た目は Tailwind の
 * `data-[reveal=hidden]:` バリアントで指定する。
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    targets.forEach((el) => {
      el.dataset.reveal = "hidden";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

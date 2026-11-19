"use client";

import { useEffect } from "react";

/**
 * 章は一度見えたら隠さない（第八条）。
 * data-reveal 属性を持つ要素を IntersectionObserver で一度だけ可視にする。
 * 見た目は globals.css の [data-reveal] 規則が担う（opacityとtranslate、2拍）。
 */
export function ScrollReveal() {
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

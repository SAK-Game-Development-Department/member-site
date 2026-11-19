// 野花の記法 — 共通クラス群（試験適用）。
//
// 第二条: 余白は --beat(0.9rem) の整数倍・半分倍のみ。
// 第七条: 影・角丸・グラデは使わない。
// 第八条: 動きは2拍(0.36s×2 = 0.72s)以内で opacity と translate のみ。
// 第九条: 前傾(italic)は進む文字だけ。ラベル・注記は直立。

// .section-pad: 章の内側余白。罫を頁の端まで走らせるためセクション自体は無内側
export const sectionPadClass =
  "px-[5.4rem] max-[850px]:px-[3.6rem] max-[640px]:px-[2.25rem]";

// .section-top: 各章の頭の余白（ラベル行の上）
export const sectionTopClass = "pt-[7.2rem] max-[850px]:pt-[5.4rem] max-[640px]:pt-[4.5rem]";

// .section-inner: 面罫より下の本文の余白
export const sectionInnerClass =
  "pt-[3.6rem] pb-[7.2rem] max-[850px]:pb-[5.4rem] max-[640px]:pb-[4.5rem]";

// .button: 罫の額のボタン（角丸なし・立体なし）。
// 色は各所で鏡像に反転して使う（第五条）。地と字を交換するだけで同型。
export const buttonClass =
  "inline-flex items-center gap-[0.9rem] border-[1.5px] px-[1.8rem] py-[0.9rem] text-[0.75rem] font-bold tracking-[0.25em] transition-opacity duration-[0.72s] hover:opacity-[0.6] max-[640px]:gap-[0.45rem] max-[640px]:px-[1.35rem] max-[640px]:text-[0.7rem]";

// .section-label: 「01 ABOUT US」などの章ラベル。直立・制服色（語彙: ラベル＝青）
export const sectionLabelClass =
  "flex items-baseline gap-[0.9rem] text-[0.7rem] font-bold tracking-[0.35em] text-uni";

// .section-label-number: 章番号は輪郭の大書（第四条）。前傾（第九条）
export const sectionLabelNumberClass =
  "outline-ink font-black italic text-[2.25rem] leading-none";

// .eyebrow: 小見出しラベル。直立・制服色
export const eyebrowClass =
  "text-[0.7rem] font-bold tracking-[0.35em] text-uni";

// .reveal: 2拍（0.72s）で浮上。一度見えたら隠さない（第八条。
// data-reveal 属性は ScrollReveal が一度きりで visible にする）
export const revealClass =
  "transition-[opacity,transform] duration-[0.72s] data-[reveal=hidden]:translate-y-[0.9rem] data-[reveal=hidden]:opacity-0";

// .section-heading: 章見出し（前傾・極太。字飾りなし）
export const sectionHeadingClass =
  "mb-[3.6rem] flex items-end justify-between max-[640px]:mb-[2.7rem] max-[640px]:block";
export const sectionHeadingH2Class =
  "m-0 text-[clamp(2.7rem,5vw,4.5rem)] font-black italic tracking-[-0.04em] max-[640px]:text-[2.7rem]";
// リード文はキャプション扱い（制服色・直立）
export const sectionHeadingPClass =
  "text-[0.8rem] text-uni max-[640px]:mt-[0.9rem]";
// 複数箇所で使うクラス名の組み合わせ。
// 元の style.css の共通クラス（.section / .button / .reveal など）に対応する。

// .section: 通常セクションの余白
export const sectionClass =
  "px-[9%] py-[110px] max-[850px]:px-[7%] max-[850px]:py-[85px] max-[640px]:py-[70px]";

// .button: 角丸ピルのボタン（primary / text-button / dark の色は各所で追加）
export const buttonClass =
  "inline-flex items-center gap-[25px] rounded-full px-[21px] py-[15px] text-xs font-bold tracking-[.04em] transition-[transform,opacity] duration-200 hover:-translate-y-[3px] max-[640px]:gap-[15px] max-[640px]:px-4 max-[640px]:py-3.5 max-[640px]:text-[11px]";

// .section-label: 「01 ABOUT US」などのラベル
export const sectionLabelClass = "text-[11px] font-bold tracking-[.16em]";
export const sectionLabelNumberClass = "mr-4 text-orange";

// .eyebrow: 小見出し（ヒーロー・JOIN で共通）
export const eyebrowClass = "text-[11px] font-bold tracking-[.17em] text-orange";

// .reveal: 画面内に入るとフェードイン（data-reveal 属性は ScrollReveal が管理）
export const revealClass =
  "transition-[opacity,transform] duration-[650ms] data-[reveal=hidden]:translate-y-[22px] data-[reveal=hidden]:opacity-0";

// .section-heading: セクション見出し（見出し + リード文）
export const sectionHeadingClass =
  "mt-[35px] mb-[45px] flex items-end justify-between max-[640px]:mt-7 max-[640px]:mb-[30px] max-[640px]:block";
export const sectionHeadingH2Class =
  "m-0 text-[clamp(44px,6vw,76px)] font-bold tracking-[-.07em] max-[640px]:text-[52px]";
export const sectionHeadingPClass = "text-[13px] text-muted max-[640px]:mt-3";

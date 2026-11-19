import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: "ゲーム開発・AI・情報セキュリティ・組み込みで実績作りとスキルアップを目指すサークルの公式サイトです。",
};

// 描画前に面を決めてちらつきを防ぐ。開きの面は夜面(墨)。
// 保存または環境が昼を求めるときだけ、昼面(薄桃)で開く。
const themeScript = `try{var t=localStorage.getItem("theme");if(!(t==="light"||(!t&&matchMedia("(prefers-color-scheme: light)").matches)))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,500..1000;1,9..40,500..1000&family=Noto+Sans+JP:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <TopNav />
        <div className="flex-1">{children}</div>
        <footer className="border-t-[3px] border-ink dark:border-ground bg-wash dark:bg-wash-dark">
          <div className="max-w-6xl mx-auto px-[1.35rem] py-[2.25rem] flex flex-col sm:flex-row gap-[0.9rem] justify-between text-sm text-secondary dark:text-secondary-dark">
            <p>© {site.name}</p>
            <p className="font-black tracking-[0.3em] text-uni dark:text-primary-dark">
              165 BPM / 1 BEAT 0.36S / BEAT 0.9REM
            </p>
            <a href={site.github} className="hover:opacity-60">
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

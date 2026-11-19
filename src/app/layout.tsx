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

// 描画前にテーマを適用してちらつきを防ぐ
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

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
            <p className="tracking-[0.18em] text-uni dark:text-link-dark">
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

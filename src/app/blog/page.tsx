import { posts } from "@/content/site";

export const metadata = { title: "ブログ" };

export default function Page() {
  return (
    <main className="px-[1.35rem] py-[3.6rem] max-w-[45rem] mx-auto">
      <h1 className="font-black italic text-5xl pb-[1.8rem] mb-[1.8rem] border-b-[3px] border-ink dark:border-ground">
        ブログ
      </h1>
      <p className="text-xl text-primary dark:text-primary-dark">
        サークルの活動報告やお知らせ。
      </p>
      <div className="mt-[2.7rem] space-y-[1.35rem]">
        {posts.map((p) => (
          <article
            key={p.title}
            className="border-t-[1.5px] border-border dark:border-border-dark pt-[1.35rem]"
          >
            <time className="text-sm font-black tracking-[0.3em] text-uni dark:text-primary-dark">
              {p.date}
            </time>
            <h2 className="mt-[0.45rem] text-2xl font-black italic">
              {p.title}
            </h2>
            <p className="mt-[0.45rem] text-lg text-secondary dark:text-secondary-dark">
              {p.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

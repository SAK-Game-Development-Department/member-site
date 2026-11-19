import { posts } from "@/content/site";

export const metadata = { title: "ブログ" };

export default function Page() {
  return (
    <main className="blog-main">
      <h1 className="blog-title">
        ブログ
      </h1>
      <p className="blog-intro">
        サークルの活動報告やお知らせ。
      </p>
      <div className="blog-list">
        {posts.map((p) => (
          <article key={p.title} className="blog-item">
            <time className="post-date">
              {p.date}
            </time>
            <h2 className="blog-item-title">
              {p.title}
            </h2>
            <p className="blog-summary">
              {p.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

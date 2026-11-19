import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site, posts } from "@/content/site";

/**
 * 章。番号は輪郭の大書、見出しは前傾(第九条)。
 * 章の境界は面の罫3px(第三条)。invert の章は面そのものを交換する(鏡)。
 */
function Chapter({
  num,
  title,
  children,
  invert,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <section
      data-reveal
      className={`chapter${invert ? " chapter--invert" : ""}`}
    >
      <div className="chapter-inner">
        <div className="chapter-head">
          <span aria-hidden className="chapter-num">
            {num}
          </span>
          <h2 className="chapter-title">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

const Code = ({ children }: { children: string }) => (
  <pre className="code-frame">
    <code>{children}</code>
  </pre>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="record-list">
    {items.map((t) => (
      <li key={t}>
        {t}
      </li>
    ))}
  </ul>
);

const PLAY_ITEMS = [
  "Unity / Godot / Webでのゲーム制作",
  "学内・オンラインのゲームジャムに参加",
  "作品はGitHubやitch.ioで公開",
];

const AI_ITEMS = [
  "強化学習でゲームを攻略するエージェント",
  "LLMを使った対話NPC",
  "プロシージャル生成と画像生成AI",
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <section className="cover">
        <div data-reveal>
          <Logo className="cover-logo" />
          <h1 className="site-title">
            {site.name}
          </h1>
          <p className="cover-tagline">
            {site.tagline}
          </p>
          <p className="cover-lead">
            AIとゲームを、
            <br />
            自分たちの手でつくる。
          </p>
          {/* 鏡像の真正化: 同型・同罫で、地と字だけを交換する（第五条） */}
          <div className="mirror">
            <Link href="/learn" className="cta cta--fill">
              活動を知る
            </Link>
            <Link href="/learn/join" className="cta cta--outline">
              入部する
            </Link>
          </div>
        </div>
      </section>

      <Chapter num="01" title="遊べるものをつくる">
        <p className="chapter-intro">
          企画からプログラム、グラフィック、サウンドまで。チームで1本のゲームを完成させ、公開するところまでやりきります。
        </p>
        <div className="chapter-grid">
          <Code>{`class Player {
  update(dt: number) {
    if (input.jump && this.onGround) {
      this.vy = -JUMP_POWER;
    }
    this.vy += GRAVITY * dt;
    this.y  += this.vy * dt;
  }
}`}</Code>
          <List items={PLAY_ITEMS} />
        </div>
      </Chapter>

      <Chapter num="02" title="ゲームにAIを組み込む">
        <p className="chapter-intro">
          賢い敵、会話できるNPC、自動生成されるステージ。機械学習や大規模言語モデルを使って、新しい遊びを探ります。
        </p>
        <div className="chapter-grid">
          <List items={AI_ITEMS} />
          <Code>{`for episode in range(1000):
    state = env.reset()
    done = False
    while not done:
        action = agent.act(state)
        state, reward, done = env.step(action)
        agent.learn(reward)`}</Code>
        </div>
      </Chapter>

      <Chapter num="03" title="最新のお知らせ">
        <div className="post-grid">
          {posts.map((p) => (
            <Link key={p.title} href="/blog" className="post-card">
              <time className="post-date">
                {p.date}
              </time>
              <h3 className="post-title">
                {p.title}
              </h3>
              <p className="post-summary">
                {p.summary}
              </p>
            </Link>
          ))}
        </div>
      </Chapter>

      <Chapter num="04" title="一緒につくろう" invert>
        <Logo className="chapter-logo" />
        <p className="chapter-invert-lead">
          経験は問いません。つくりたい気持ちがあれば大歓迎です。
        </p>
        <div className="chapter-cta">
          <Link href="/learn/join" className="cta cta--fill">
            入部について
          </Link>
        </div>
      </Chapter>
    </>
  );
}

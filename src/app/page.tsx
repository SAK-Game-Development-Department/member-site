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
      className={`px-[1.35rem] py-[4.5rem] lg:py-[6.3rem] ${invert ? "bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary" : "border-t-[3px] border-ink dark:border-ground"}`}
    >
      <div className="max-w-[63rem] mx-auto">
        <div className="flex items-baseline gap-[1.35rem] mb-[2.7rem]">
          <span
            aria-hidden
            className={`${invert ? "outline-ground" : "outline-ink"} font-black text-[3.6rem] leading-none`}
          >
            {num}
          </span>
          <h2 className="font-black italic text-3xl lg:text-4xl leading-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

const Code = ({ children }: { children: string }) => (
  <pre className="border-[1.5px] border-border dark:border-border-dark p-[1.35rem] overflow-x-auto font-mono text-sm leading-[1.7]">
    <code>{children}</code>
  </pre>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="text-lg border-b-[1.5px] border-border dark:border-border-dark">
    {items.map((t) => (
      <li
        key={t}
        className="border-t-[1.5px] border-border dark:border-border-dark py-[0.9rem]"
      >
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
      <section className="px-[1.35rem] pt-[4.5rem] lg:pt-[8.1rem] pb-[5.4rem] text-center">
        <div data-reveal>
          <Logo className="w-[7.2rem] h-[7.2rem] lg:w-[9rem] lg:h-[9rem] mx-auto text-primary dark:text-primary-dark" />
          <h1 className="mt-[1.8rem] font-black italic text-6xl lg:text-8xl leading-tight">
            {site.name}
          </h1>
          <p className="mt-[1.35rem] text-sm tracking-[0.3em] text-uni dark:text-link-dark">
            {site.tagline}
          </p>
          <p className="mt-[1.8rem] text-2xl lg:text-4xl leading-snug">
            AIとゲームを、
            <br className="sm:hidden" />
            自分たちの手でつくる。
          </p>
          {/* 鏡像の真正化: 同型・同罫で、地と字だけを交換する（第五条） */}
          <div className="mt-[2.7rem] flex flex-wrap gap-[0.9rem] justify-center">
            <Link
              href="/learn"
              className="px-[1.8rem] py-[0.9rem] border-[3px] border-ink dark:border-ground bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary font-bold italic text-lg hover:opacity-60"
            >
              活動を知る
            </Link>
            <Link
              href="/learn/join"
              className="px-[1.8rem] py-[0.9rem] border-[3px] border-ink dark:border-ground outline-ink dark:outline-ground font-bold italic text-lg hover:opacity-60"
            >
              入部する
            </Link>
          </div>
        </div>
      </section>

      <Chapter num="01" title="遊べるものをつくる">
        <p className="max-w-[45rem] mx-auto text-center text-xl text-secondary dark:text-secondary-dark mb-[3.6rem]">
          企画からプログラム、グラフィック、サウンドまで。チームで1本のゲームを完成させ、公開するところまでやりきります。
        </p>
        <div className="grid lg:grid-cols-2 gap-[1.8rem] items-center">
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
        <p className="max-w-[45rem] mx-auto text-center text-xl text-secondary dark:text-secondary-dark mb-[3.6rem]">
          賢い敵、会話できるNPC、自動生成されるステージ。機械学習や大規模言語モデルを使って、新しい遊びを探ります。
        </p>
        <div className="grid lg:grid-cols-2 gap-[1.8rem] items-center">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.35rem]">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="/blog"
              className="block border-[1.5px] border-border dark:border-border-dark p-[1.35rem] hover:opacity-60"
            >
              <time className="text-sm text-uni dark:text-link-dark">
                {p.date}
              </time>
              <h3 className="mt-[0.45rem] text-xl font-bold italic">
                {p.title}
              </h3>
              <p className="mt-[0.45rem] text-secondary dark:text-secondary-dark">
                {p.summary}
              </p>
            </Link>
          ))}
        </div>
      </Chapter>

      <Chapter num="04" title="一緒につくろう" invert>
        <Logo className="w-[4.5rem] h-[4.5rem] mx-auto text-primary-dark dark:text-primary" />
        <p className="mt-[1.35rem] max-w-[45rem] mx-auto text-center text-xl">
          経験は問いません。つくりたい気持ちがあれば大歓迎です。
        </p>
        <div className="mt-[2.7rem] flex justify-center">
          <Link
            href="/learn/join"
            className="inline-block px-[1.8rem] py-[0.9rem] border-[3px] border-primary-dark dark:border-primary bg-primary-dark dark:bg-primary text-primary dark:text-primary-dark font-bold italic text-lg hover:opacity-60"
          >
            入部について
          </Link>
        </div>
      </Chapter>
    </>
  );
}

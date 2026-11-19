import SiteHeader from "../components/SiteHeader";
import ScrollReveal from "../components/ScrollReveal";
import CurrentYear from "../components/CurrentYear";
import {
  buttonClass,
  eyebrowClass,
  revealClass,
  sectionPadClass,
  sectionTopClass,
  sectionInnerClass,
  sectionHeadingClass,
  sectionHeadingH2Class,
  sectionHeadingPClass,
  sectionLabelClass,
  sectionLabelNumberClass,
} from "../components/styles";

// 野花の記法 — 試験適用。
// 内容原稿（文言）は README 仕様書のまま。色と字体と罫と動きだけを記法に引き直した。
// 各章は「章ラベル → 面罫（頁の端まで）→ 本文」の同型で組む（第三条）。

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------- 表紙（Hero）。いちばんの塗りはここだけ（第四条） ---------- */}
        <section
          id="home"
          className="relative flex min-h-[82vh] items-center overflow-hidden py-[7.2rem] max-[640px]:min-h-[70vh] max-[640px]:items-start max-[640px]:pt-[5.4rem]"
        >
          <div
            className={`${sectionPadClass} relative z-[2] w-full max-w-[54rem]`}
          >
            <p className={eyebrowClass}>CREATIVE TECHNOLOGY COMMUNITY</p>

            {/* 進む文字は前傾（第九条）。強調は花色だけ（第一条） */}
            <h1 className="mt-[1.8rem] mb-[2.25rem] text-[clamp(3.15rem,7.7vw,7.2rem)] leading-[1.02] font-extrabold italic tracking-[-0.05em] max-[640px]:text-[clamp(2.7rem,12vw,4.05rem)]">
              Make ideas.
              <br />
              <span className="text-bloom">Make games.</span>
              <br />
              Make the future.
            </h1>

            {/* 本文は直立・行間広め */}
            <p className="text-[0.95rem] leading-[2] font-medium max-[640px]:text-[0.85rem]">
              AIとゲーム開発で、
              <br className="hidden max-[640px]:block" />
              「やってみたい」をカタチにしよう。
            </p>

            {/* 鏡像のボタン（第五条）。塗りの額と輪郭の額、地と字だけの交換 */}
            <div className="mt-[3.6rem] flex items-center gap-[1.8rem] max-[640px]:flex-wrap max-[640px]:gap-[0.9rem]">
              <a
                className={`${buttonClass} bg-ink text-ground`}
                href="#about"
              >
                サークルについて <span>↓</span>
              </a>
              <a className={`${buttonClass} text-ink`} href="#join">
                参加してみる <span>↗</span>
              </a>
            </div>
          </div>

          {/* 塗りの面に対する輪郭の面（鏡）。記号・オーブ・影は剥がした（第七条） */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-[5.4rem] hidden -translate-y-1/2 text-right min-[851px]:block"
          >
            <div className="text-[clamp(4.5rem,9vw,9rem)] leading-[0.95] font-black italic tracking-[-0.05em] outline-ink">
              AI
              <br />×<br />
              GAME
            </div>
            <p className="mt-[1.8rem] text-[0.65rem] font-bold tracking-[0.35em] text-uni">
              MAKE / PLAY / 001
            </p>
          </div>

          {/* スクロールナビ。糸罫1pxでつなぐ */}
          <div
            className={`${sectionPadClass} absolute bottom-[2.7rem] left-0 right-0 flex items-center gap-[0.9rem] text-[0.65rem] font-bold tracking-[0.3em] text-uni max-[640px]:bottom-[1.8rem]`}
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="h-px flex-1 bg-ink"></span>
            <span>01 — 04</span>
          </div>
        </section>

        {/* ---------- 01 ABOUT（章）。面罫は頁の端まで（第三条） ---------- */}
        <section id="about" data-reveal className={revealClass}>
          <div className={`${sectionPadClass} ${sectionTopClass}`}>
            <p className={sectionLabelClass}>
              <span className={sectionLabelNumberClass}>01</span> ABOUT US
            </p>
          </div>
          <div className="face-rule border-t-[3px] border-ink"></div>

          <div className={`${sectionPadClass} ${sectionInnerClass}`}>
            <div className="mb-[4.5rem] grid grid-cols-2 items-baseline gap-x-[5.4rem] max-[850px]:gap-x-[3.6rem] max-[640px]:mb-[3.6rem] max-[640px]:grid-cols-1">
              <h2 className="m-0 text-[clamp(2.7rem,5vw,4.5rem)] leading-[1.3] font-black italic tracking-[0.04em] max-[640px]:text-[2.7rem]">
                好奇心が、
                <br />
                いちばんの<span className="text-bloom">才能。</span>
              </h2>
              <div className="max-w-[32.4rem]">
                <p className="text-[0.9rem] leading-[2.05] max-[640px]:text-[0.8rem]">
                  AIやゲーム開発に興味がある人が集まり、学び合い、アイデアを形にするクリエイティブサークルです。
                </p>
                <p className="mt-[0.9rem] max-w-[32.4rem] text-[0.9rem] leading-[2.05] max-[640px]:text-[0.8rem]">
                  初心者も経験者も大歓迎。知識を共有したり、小さな作品を作ったり、好きなことを仲間と一緒に深めていこう。
                </p>
              </div>
            </div>

            {/* 三つの柱。行罫で仕切り、柱番号は輪郭の大書（第四条） */}
            <div className="grid grid-cols-3 border-t-[1.5px] border-ink">
              {[
                { no: "01", title: "LEARN", text: ["一緒に学ぶ。", "知らないことを楽しもう。"] },
                { no: "02", title: "CREATE", text: ["アイデアを試して、", "自分たちの作品に。"] },
                { no: "03", title: "PLAY", text: ["遊び心を忘れずに。", "制作も交流も楽しもう。"] },
              ].map((pillar) => (
                <article
                  key={pillar.no}
                  className="border-r-[1px] border-ink pt-[2.7rem] pr-[2.7rem] pb-[0.45rem] last:border-r-0 [&+article]:pl-[2.7rem] max-[640px]:border-r-0 max-[640px]:px-0 max-[640px]:pb-[2.7rem] max-[640px]:[&+article]:pl-0 max-[640px]:[&+article]:border-t-[1px] max-[640px]:[&+article]:pt-[1.8rem]"
                >
                  <span className="outline-ink font-black italic text-[2.25rem] leading-none">
                    {pillar.no}
                  </span>
                  <h3 className="mt-[1.35rem] mb-[0.9rem] text-[1.35rem] font-black italic tracking-[0.06em]">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[2] text-track max-[640px]:text-[0.8rem]">
                    {pillar.text[0]}
                    <br />
                    {pillar.text[1]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 02 ACTIVITIES ---------- */}
        <section id="activities" data-reveal className={revealClass}>
          <div className={`${sectionPadClass} ${sectionTopClass}`}>
            <p className={sectionLabelClass}>
              <span className={sectionLabelNumberClass}>02</span> WHAT WE DO
            </p>
          </div>
          <div className="face-rule border-t-[3px] border-ink"></div>

          <div className={`${sectionPadClass} ${sectionInnerClass}`}>
            <div className={sectionHeadingClass}>
              <h2 className={sectionHeadingH2Class}>
                Activities<span className="text-bloom">.</span>
              </h2>
              <p className={sectionHeadingPClass}>興味のあることから、自由にスタート。</p>
            </div>

            {/* 活動の一覧。行罫1.5pxで区切る。番号は花色の前傾（語彙: 前傾の数字） */}
            <div className="border-t-[1.5px] border-ink">
              {[
                { title: "AI Experiment", text: "生成AI、機械学習、AIツールなどを触って、面白い使い方や新しい可能性を探る。" },
                { title: "Game Development", text: "Unity・Unreal Engine・Webなど、いろいろな環境でゲームを企画・制作。" },
                { title: "Study & Share", text: "勉強会、制作相談、アイデア共有。知識や経験をみんなで持ち寄る。" },
                { title: "Creative Projects", text: "ゲーム以外にも、Web制作やアプリ、面白い技術のプロトタイプに挑戦。" },
              ].map((item, i) => (
                <article
                  key={item.title}
                  data-reveal
                  className={`${revealClass} grid grid-cols-[4.5rem_1fr] items-baseline gap-x-[2.7rem] border-b-[1.5px] border-ink py-[2.7rem] max-[640px]:grid-cols-[2.7rem_1fr] max-[640px]:gap-x-[1.35rem] max-[640px]:py-[1.8rem]`}
                >
                  <span className="font-black italic text-[1.8rem] leading-none text-bloom">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-[0.45rem] text-[1.35rem] font-black italic tracking-[0.02em] max-[640px]:text-[1.125rem]">
                      {item.title}
                    </h3>
                    <p className="m-0 text-[0.9rem] leading-[2] max-[640px]:text-[0.8rem]">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 03 PROJECTS。二枚のカードは鏡像の額（第五条） ---------- */}
        <section id="projects" data-reveal className={revealClass}>
          <div className={`${sectionPadClass} ${sectionTopClass}`}>
            <p className={sectionLabelClass}>
              <span className={sectionLabelNumberClass}>03</span> OUR PROJECTS
            </p>
          </div>
          <div className="face-rule border-t-[3px] border-ink"></div>

          <div className={`${sectionPadClass} ${sectionInnerClass}`}>
            <div className={sectionHeadingClass}>
              <h2 className={sectionHeadingH2Class}>
                Made by us<span className="text-bloom">.</span>
              </h2>
              <p className={sectionHeadingPClass}>これから生まれる作品たち。</p>
            </div>

            {/* 未確定の記録（Placeholder）は色を抜いて記録のまま残す（第六条・褪色） */}
            <div className="grid grid-cols-2 gap-[1.8rem] max-[640px]:grid-cols-1 max-[640px]:gap-[2.7rem]">
              {/* 塗りの額 */}
              <article
                data-reveal
                className={`${revealClass} bg-ink p-[2.7rem] opacity-[0.5] max-[640px]:p-[1.8rem]`}
              >
                <p className="text-[0.65rem] font-bold tracking-[0.35em] text-ground">
                  AI / CREATIVE / 01
                </p>
                <h3 className="mt-[1.8rem] mb-[0.9rem] text-[1.8rem] font-black italic tracking-[0.02em] text-ground">
                  Project Placeholder
                </h3>
                <div className="border-t-[1.5px] border-ground"></div>
                <p className="mt-[0.9rem] text-[0.85rem] leading-[2] text-ground max-[640px]:text-[0.8rem]">
                  メンバーの制作物や実験をここに掲載します。
                </p>
              </article>

              {/* 輪郭の額（同型・同罫で、地と字だけを交換した鏡像） */}
              <article
                data-reveal
                className={`${revealClass} border-[3px] border-ink p-[2.7rem] opacity-[0.5] max-[640px]:p-[1.8rem]`}
              >
                <p className="text-[0.65rem] font-bold tracking-[0.35em] text-ink">
                  GAME / 02
                </p>
                <h3 className="mt-[1.8rem] mb-[0.9rem] text-[1.8rem] font-black italic tracking-[0.02em] text-ink">
                  Project Placeholder
                </h3>
                <div className="border-t-[1.5px] border-ink"></div>
                <p className="mt-[0.9rem] text-[0.85rem] leading-[2] text-ink max-[640px]:text-[0.8rem]">
                  開発中のゲームや完成作品を紹介します。
                </p>
              </article>
            </div>
            {/* 注記は土色で直立に落とす */}
            <p className="mt-[1.8rem] text-[0.7rem] text-track">
              ※ 作品紹介は活動が始まり次第、随時更新予定。
            </p>
          </div>
        </section>

        {/* ---------- 04 JOIN。表紙の鏡像として、地と字を交換した総面 ---------- */}
        <section
          id="join"
          className="bg-ink px-[5.4rem] pb-[7.2rem] pt-[3.6rem] text-ground max-[850px]:px-[3.6rem] max-[640px]:px-[2.25rem] max-[640px]:pb-[5.4rem]"
        >
          {/* 第四章の面罫。字の色（薄桃）に従う。内側余白を打ち消して頁の端まで */}
          <div className="face-rule border-t-[3px] border-ground max-[850px]:-mx-[3.6rem] max-[640px]:-mx-[2.25rem] mx-[-5.4rem]"></div>

          <div data-reveal className={`${revealClass} pt-[7.2rem] text-center max-[640px]:pt-[5.4rem]`}>
            <p className="text-[0.7rem] font-bold tracking-[0.35em]">
              YOUR NEXT IDEA STARTS HERE
            </p>
            <h2 className="my-[2.7rem] text-[clamp(3.15rem,7vw,6.3rem)] leading-[1.05] font-black italic tracking-[-0.04em] max-[640px]:text-[2.7rem]">
              Let&apos;s create
              <br />
              <span className="text-bloom">something fun.</span>
            </h2>
            <p className="text-[0.95rem] leading-[2] max-[640px]:text-[0.85rem]">
              「ちょっと興味ある」だけでも大歓迎。
              <br />
              一緒に面白いものを作りませんか？
            </p>
            {/* 表紙の塗りの額の鏡像。地と字を交換する（第五条） */}
            <a
              className={`${buttonClass} mt-[3.6rem] bg-ground text-ink`}
              href="mailto:hello@example.com"
            >
              JOIN THE CLUB <span>↗</span>
            </a>
            <small className="mt-[1.8rem] block text-[0.65rem] opacity-[0.6]">
              連絡先は仮設定です。実際のメール・SNSに変更してください。
            </small>
          </div>
        </section>
      </main>

      {/* ---------- 奥付（Footer）。写真=ロゴは面罫の額（第十条） ---------- */}
      <footer className="border-t-[1px] border-ground bg-ink px-[5.4rem] pb-[2.7rem] pt-[3.6rem] text-ground max-[850px]:px-[3.6rem] max-[640px]:px-[2.25rem] max-[640px]:text-center">
        <div className="flex flex-wrap items-center justify-between gap-[1.8rem] max-[640px]:justify-center max-[640px]:gap-[2.7rem]">
          <a
            href="#home"
            className="block w-[12.6rem] border-[3px] border-ground max-[640px]:w-[10.8rem]"
          >
            <img
              className="block w-full"
              src="/assets/logo.jpg"
              alt="AI & Game Development Club"
            />
          </a>
          <div className="flex gap-[2.7rem] text-[0.65rem] font-bold tracking-[0.3em] max-[640px]:flex-wrap max-[640px]:justify-center max-[640px]:gap-[1.8rem]">
            <a href="#about">ABOUT</a>
            <a href="#activities">ACTIVITIES</a>
            <a href="#projects">PROJECTS</a>
            <a href="#join">JOIN</a>
          </div>
        </div>
        {/* 色を抜いた一行（第六条・褪色） */}
        <p className="mt-[2.7rem] text-[0.65rem] tracking-[0.25em] opacity-[0.5] max-[640px]:text-[0.6rem]">
          © <CurrentYear /> AI &amp; GAME DEVELOPMENT CLUB. MADE WITH CURIOSITY.
        </p>
      </footer>

      <ScrollReveal />
    </>
  );
}
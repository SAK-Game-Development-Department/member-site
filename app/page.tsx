import SiteHeader from "../components/SiteHeader";
import ScrollReveal from "../components/ScrollReveal";
import CurrentYear from "../components/CurrentYear";
import {
  buttonClass,
  eyebrowClass,
  revealClass,
  sectionClass,
  sectionHeadingClass,
  sectionHeadingH2Class,
  sectionHeadingPClass,
  sectionLabelClass,
  sectionLabelNumberClass,
} from "../components/styles";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------- Hero ---------- */}
        <section
          id="home"
          className="relative flex min-h-[650px] items-center overflow-hidden bg-[radial-gradient(circle_at_72%_45%,#f8d5b5_0,transparent_33%),linear-gradient(120deg,#fff2e4,#f6d1b0)] px-[8%] pt-[90px] pb-[70px] max-[850px]:min-h-[600px] max-[850px]:px-[7%] max-[850px]:pt-20 max-[850px]:pb-20 max-[640px]:min-h-[690px] max-[640px]:items-start max-[640px]:px-[7%] max-[640px]:pt-[70px] max-[640px]:pb-[90px]"
        >
          <div className="relative z-[2] max-w-[650px] max-[850px]:max-w-[560px]">
            <p className={eyebrowClass}>
              <span className="mr-2 inline-block h-[7px] w-[7px] rounded-full bg-orange"></span>{" "}
              CREATIVE TECHNOLOGY COMMUNITY
            </p>
            <h1 className="mt-[25px] mb-[22px] text-[clamp(55px,7.7vw,106px)] leading-[.99] font-extrabold tracking-[-.065em] max-[850px]:text-[clamp(55px,9vw,83px)] max-[640px]:mt-[22px] max-[640px]:text-[clamp(50px,14vw,76px)]">
              Make ideas.
              <br />
              <span className="text-orange">Make games.</span>
              <br />
              Make the future.
            </h1>
            <p className="text-[17px] leading-[1.9] font-medium max-[640px]:text-[15px]">
              AIとゲーム開発で、
              <br className="hidden max-[640px]:block" />
              「やってみたい」をカタチにしよう。
            </p>
            <div className="mt-[35px] flex items-center gap-[22px] max-[640px]:flex-wrap max-[640px]:gap-3">
              <a className={`${buttonClass} bg-brown text-[#fff0df]`} href="#about">
                サークルについて <span>↓</span>
              </a>
              <a className={`${buttonClass} border border-brown`} href="#join">
                参加してみる <span>↗</span>
              </a>
            </div>
          </div>

          <div
            className="absolute top-1/2 right-[9%] h-[410px] w-[400px] -translate-y-[47%] max-[850px]:right-[2%] max-[850px]:-translate-y-[35%] max-[850px]:scale-[.8] max-[850px]:opacity-[.65] max-[640px]:top-auto max-[640px]:right-[-20px] max-[640px]:bottom-[70px] max-[640px]:translate-y-0 max-[640px]:origin-bottom-right max-[640px]:scale-[.62] max-[640px]:opacity-[.85]"
            aria-hidden="true"
          >
            <div className="absolute top-[40px] right-[30px] h-[270px] w-[270px] rounded-full bg-[#e7a47d] opacity-[.42] blur-[0.2px]"></div>
            <div className="absolute top-[205px] right-[190px] h-[155px] w-[155px] rounded-full bg-[#fff1d6] opacity-90 blur-[0.2px]"></div>

            <div className="absolute top-[72px] right-[55px] flex h-[260px] w-[230px] rotate-[7deg] flex-col justify-between rounded-3xl bg-[#44271f] p-[22px] text-[#ffe4c7] shadow-[18px_25px_0_rgba(174,94,61,.14)]">
              <div className="text-[9px] tracking-[.18em] opacity-70">CREATIVE LAB / 001</div>
              <div className="text-center text-[85px] leading-[1.2] font-bold text-[#f0ad76]">
                ✧<br />◡
              </div>
              <div className="flex justify-between text-[10px] tracking-[.1em]">
                <span>AI × GAME</span>
                <span>∞</span>
              </div>
            </div>

            <div className="absolute top-[65px] left-0 -rotate-[8deg] rounded-full border border-[rgba(66,37,28,.13)] bg-[#fff1dd] px-3.5 py-[11px] text-[10px] font-bold tracking-[.08em] shadow-[0_10px_25px_#75432b16]">
              ✦ AI / EXPERIMENT
            </div>
            <div className="absolute right-0 bottom-[60px] rotate-[5deg] rounded-full border border-[rgba(66,37,28,.13)] bg-[#fff1dd] px-3.5 py-[11px] text-[10px] font-bold tracking-[.08em] shadow-[0_10px_25px_#75432b16]">
              🎮 GAME MAKING
            </div>
            <div className="absolute top-[5px] right-3 text-[55px] text-orange">✳</div>
          </div>

          <div className="absolute right-[8%] bottom-[35px] left-[8%] flex items-center gap-[15px] text-[9px] tracking-[.15em] opacity-65 max-[640px]:right-[7%] max-[640px]:bottom-[22px] max-[640px]:left-[7%]">
            <span>SCROLL TO EXPLORE</span>
            <span className="h-px w-[50px] bg-brown"></span>
            <span>01 — 04</span>
          </div>
        </section>

        {/* ---------- 01 ABOUT ---------- */}
        <section id="about" className={`${sectionClass} ${revealClass} bg-[#fff5e9]`} data-reveal>
          <div className={sectionLabelClass}>
            <span className={sectionLabelNumberClass}>01</span> ABOUT US
          </div>
          <div className="mt-[65px] mb-[85px] grid grid-cols-2 items-center gap-[7%] max-[850px]:gap-[35px] max-[640px]:mt-10 max-[640px]:mb-[55px] max-[640px]:grid-cols-1 max-[640px]:gap-5">
            <div>
              <h2 className="m-0 text-[clamp(44px,6vw,76px)] leading-[1.2] font-bold tracking-[-.07em] max-[640px]:text-[48px]">
                好奇心が、
                <br />
                いちばんの<span className="text-orange">才能。</span>
              </h2>
            </div>
            <div className="relative max-w-[510px]">
              <p className="text-[15px] leading-[2.05] max-[640px]:text-sm">
                AIやゲーム開発に興味がある人が集まり、学び合い、アイデアを形にするクリエイティブサークルです。
              </p>
              <p className="text-[15px] leading-[2.05] max-[640px]:text-sm">
                初心者も経験者も大歓迎。知識を共有したり、小さな作品を作ったり、好きなことを仲間と一緒に深めていこう。
              </p>
              <div className="absolute -right-2.5 -bottom-[75px] flex h-[92px] w-[92px] rotate-[13deg] items-center justify-center rounded-full bg-[#e9ad76] text-center text-[11px] leading-[1.3] font-extrabold tracking-[.06em] text-[#542d20] max-[850px]:right-0 max-[640px]:right-0 max-[640px]:bottom-[-48px] max-[640px]:h-[76px] max-[640px]:w-[76px] max-[640px]:text-[10px]">
                LEARN
                <br />
                CREATE
                <br />
                PLAY!
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-line">
            <article className="border-r border-line pt-[25px] pr-[25px] pb-[10px] last:border-r-0 [&+article]:pl-[25px] max-[640px]:pt-5 max-[640px]:pr-3 max-[640px]:pb-0 max-[640px]:[&+article]:pl-3">
              <span className="text-[11px] text-orange">01</span>
              <h3 className="mt-[15px] mb-[15px] text-2xl font-bold tracking-[.05em] max-[640px]:text-[18px]">LEARN</h3>
              <p className="text-[13px] leading-[1.9] text-muted max-[640px]:text-[11px]">
                一緒に学ぶ。
                <br />
                知らないことを楽しもう。
              </p>
            </article>
            <article className="border-r border-line pt-[25px] pr-[25px] pb-[10px] last:border-r-0 [&+article]:pl-[25px] max-[640px]:pt-5 max-[640px]:pr-3 max-[640px]:pb-0 max-[640px]:[&+article]:pl-3">
              <span className="text-[11px] text-orange">02</span>
              <h3 className="mt-[15px] mb-[15px] text-2xl font-bold tracking-[.05em] max-[640px]:text-[18px]">CREATE</h3>
              <p className="text-[13px] leading-[1.9] text-muted max-[640px]:text-[11px]">
                アイデアを試して、
                <br />
                自分たちの作品に。
              </p>
            </article>
            <article className="border-r border-line pt-[25px] pr-[25px] pb-[10px] last:border-r-0 [&+article]:pl-[25px] max-[640px]:pt-5 max-[640px]:pr-3 max-[640px]:pb-0 max-[640px]:[&+article]:pl-3">
              <span className="text-[11px] text-orange">03</span>
              <h3 className="mt-[15px] mb-[15px] text-2xl font-bold tracking-[.05em] max-[640px]:text-[18px]">PLAY</h3>
              <p className="text-[13px] leading-[1.9] text-muted max-[640px]:text-[11px]">
                遊び心を忘れずに。
                <br />
                制作も交流も楽しもう。
              </p>
            </article>
          </div>
        </section>

        {/* ---------- 02 ACTIVITIES ---------- */}
        <section id="activities" className={`${sectionClass} ${revealClass} bg-[#f6d5b9]`} data-reveal>
          <div className={sectionLabelClass}>
            <span className={sectionLabelNumberClass}>02</span> WHAT WE DO
          </div>
          <div className={sectionHeadingClass}>
            <h2 className={sectionHeadingH2Class}>
              Activities<span className="text-orange">.</span>
            </h2>
            <p className={sectionHeadingPClass}>興味のあることから、自由にスタート。</p>
          </div>

          <div className="border-t border-line">
            {[
              { icon: "✦", title: "AI Experiment", text: "生成AI、機械学習、AIツールなどを触って、面白い使い方や新しい可能性を探る。" },
              { icon: "⌘", title: "Game Development", text: "Unity・Unreal Engine・Webなど、いろいろな環境でゲームを企画・制作。" },
              { icon: "◉", title: "Study & Share", text: "勉強会、制作相談、アイデア共有。知識や経験をみんなで持ち寄る。" },
              { icon: "♧", title: "Creative Projects", text: "ゲーム以外にも、Web制作やアプリ、面白い技術のプロトタイプに挑戦。" },
            ].map((item) => (
              <article
                key={item.title}
                data-reveal
                className={`${revealClass} group grid grid-cols-[65px_1fr_35px] items-center gap-5 border-b border-line py-7 max-[640px]:grid-cols-[45px_1fr_20px] max-[640px]:gap-3 max-[640px]:py-[22px]`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#fff0dd] text-2xl max-[640px]:h-10 max-[640px]:w-10 max-[640px]:text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-[7px] text-[21px] font-bold max-[640px]:text-[17px]">{item.title}</h3>
                  <p className="m-0 text-[13px] leading-[1.8] text-[#765443] max-[640px]:text-[11px]">{item.text}</p>
                </div>
                <span className="text-[22px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- 03 PROJECTS ---------- */}
        <section id="projects" className={`${sectionClass} ${revealClass} bg-[#fff3e6]`} data-reveal>
          <div className={sectionLabelClass}>
            <span className={sectionLabelNumberClass}>03</span> OUR PROJECTS
          </div>
          <div className={sectionHeadingClass}>
            <h2 className={sectionHeadingH2Class}>
              Made by us<span className="text-orange">.</span>
            </h2>
            <p className={sectionHeadingPClass}>これから生まれる作品たち。</p>
          </div>

          <div className="grid grid-cols-2 gap-[25px] max-[640px]:grid-cols-1 max-[640px]:gap-[18px]">
            <article data-reveal className={`${revealClass} group overflow-hidden rounded-[18px] bg-[#f8dfc7]`}>
              <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#e5a276,#f4d2a9)] max-[850px]:h-[210px] max-[640px]:h-[220px]">
                <span className="text-[120px] text-[#fff2db] [text-shadow:0_10px_35px_#74432d22] transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-[1.12]">
                  ✳
                </span>
                <span className="absolute bottom-[18px] left-5 text-[9px] tracking-[.15em] text-[#fff8eb]">
                  GENERATIVE / 01
                </span>
              </div>
              <div className="px-[25px] pt-[22px] pb-[27px] max-[640px]:p-5">
                <span className="text-[9px] font-bold tracking-[.15em] text-orange">AI / CREATIVE</span>
                <h3 className="my-2.5 text-[21px] font-bold">Project Placeholder</h3>
                <p className="text-xs leading-[1.8] text-muted">メンバーの制作物や実験をここに掲載します。</p>
              </div>
            </article>

            <article data-reveal className={`${revealClass} group overflow-hidden rounded-[18px] bg-[#f8dfc7]`}>
              <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#a96248,#e4ad82)] max-[850px]:h-[210px] max-[640px]:h-[220px]">
                <span className="text-[120px] text-[#fff2db] [text-shadow:0_10px_35px_#74432d22] transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-[1.12]">
                  ◈
                </span>
                <span className="absolute bottom-[18px] left-5 text-[9px] tracking-[.15em] text-[#fff8eb]">
                  GAME / 02
                </span>
              </div>
              <div className="px-[25px] pt-[22px] pb-[27px] max-[640px]:p-5">
                <span className="text-[9px] font-bold tracking-[.15em] text-orange">GAME DEVELOPMENT</span>
                <h3 className="my-2.5 text-[21px] font-bold">Project Placeholder</h3>
                <p className="text-xs leading-[1.8] text-muted">開発中のゲームや完成作品を紹介します。</p>
              </div>
            </article>
          </div>
          <p className="mt-[22px] text-[11px] text-muted">※ 作品紹介は活動が始まり次第、随時更新予定。</p>
        </section>

        {/* ---------- 04 JOIN ---------- */}
        <section
          id="join"
          className="relative overflow-hidden bg-[#d9895d] px-[9%] py-[100px] text-center text-[#fff1de] max-[640px]:px-[7%] max-[640px]:py-[75px]"
        >
          <div className="absolute top-[30px] left-[8%] text-[100px] opacity-[.16]">✦</div>
          <div data-reveal className={`${revealClass} relative`}>
            <p className={eyebrowClass}>YOUR NEXT IDEA STARTS HERE</p>
            <h2 className="my-6 text-[clamp(52px,8vw,95px)] leading-[.98] font-bold tracking-[-.07em] max-[640px]:text-[57px]">
              Let&apos;s create
              <br />
              <span className="text-[#5b3022]">something fun.</span>
            </h2>
            <p className="text-[15px] leading-[1.9] max-[640px]:text-[13px]">
              「ちょっと興味ある」だけでも大歓迎。
              <br />
              一緒に面白いものを作りませんか？
            </p>
            <a className={`${buttonClass} mt-6 bg-brown text-[#fff0df]`} href="mailto:hello@example.com">
              JOIN THE CLUB <span>↗</span>
            </a>
            <small className="mt-[15px] block text-[10px] opacity-70">
              連絡先は仮設定です。実際のメール・SNSに変更してください。
            </small>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="flex flex-wrap items-center justify-between gap-[25px] bg-[#3d241c] px-[7%] pt-[45px] pb-[25px] text-[#f8dfc8] max-[640px]:justify-center max-[640px]:py-[35px] max-[640px]:text-center">
        <a href="#home" className="block w-[190px] overflow-hidden rounded-[5px] max-[640px]:w-[180px]">
          <img className="block w-full" src="/assets/logo.jpg" alt="AI & Game Development Club" />
        </a>
        <div className="flex gap-5 text-[10px] tracking-[.1em] max-[640px]:flex-wrap max-[640px]:justify-center">
          <a href="#about">ABOUT</a>
          <a href="#activities">ACTIVITIES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#join">JOIN</a>
        </div>
        <p className="mt-2.5 w-full text-[9px] tracking-[.12em] opacity-60 max-[640px]:text-[8px]">
          © <CurrentYear /> AI &amp; GAME DEVELOPMENT CLUB. MADE WITH CURIOSITY.
        </p>
      </footer>

      <ScrollReveal />
    </>
  );
}

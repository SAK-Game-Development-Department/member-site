# AI & GAME DEVELOPMENT CLUB Webサイト仕様・ドキュメント

AIとゲーム開発を楽しみながら学ぶクリエイティブサークル「**AI & GAME DEVELOPMENT CLUB**」の公式ランディングページ（LP）のコンテンツ原稿およびサイト仕様書です。

---

## 目次

1. [サイト概要](#サイト概要)
2. [サイトマップ・コンテンツ原稿](#サイトマップコンテンツ原稿)
   - [トップノート & ヘッダー](#トップノート--ヘッダー)
   - [Hero（メインビジュアル）](#heroメインビジュアル)
   - [01 ABOUT US（サークルについて）](#01-about-usサークルについて)
   - [02 WHAT WE DO / Activities（活動内容）](#02-what-we-do--activities活動内容)
   - [03 OUR PROJECTS / Made by us（作品紹介）](#03-our-projects--made-by-us作品紹介)
   - [04 JOIN US（参加募集・CTA）](#04-join-us参加募集cta)
   - [フッター](#フッター)
3. [デザインシステム](#デザインシステム)
   - [カラーパレット](#カラーパレット)
   - [フォント](#フォント)
   - [アニメーション・インタラクション](#アニメーションインタラクション)
4. [ファイル構成](#ファイル構成)
5. [カスタマイズ・更新ガイド](#カスタマイズ更新ガイド)

---

## サイト概要

- **サイト名**: AI & GAME DEVELOPMENT CLUB
- **コンセプト**: 「好奇心が、いちばんの才能。」AIとゲーム開発で「やってみたい」をカタチにするクリエイティブコミュニティ
- **ターゲット**: AI技術（生成AI/機械学習）やゲーム開発（Unity/UE/Web）に関心のある初心者〜経験者
- **技術構成**: HTML5 / CSS3（モダンCSS変数・Grid/Flexbox・レスポンシブ） / JavaScript（Vanilla JS）

---

## サイトマップ・コンテンツ原稿

### トップノート & ヘッダー

| 要素 | 内容 / テキスト | 備考 |
| :--- | :--- | :--- |
| **Top Note** | `✦ IDEAS INTO REALITY. ✦` | 画面最上部のティッカー風テキスト |
| **ロゴ** | `assets/logo.jpg`（ロゴ画像） | クリックで `#home` へスムーススクロール |
| **ナビゲーション** | ・ABOUT (`#about`)<br>・ACTIVITIES (`#activities`)<br>・PROJECTS (`#projects`)<br>・JOIN US ↗ (`#join`) | スマホ時はハンバーガーメニューに格納 |

---

### Hero（メインビジュアル）

*画面を開いたファーストビュー。ダイナミックなタイポグラフィと立体感のあるカードアートで構成。*

- **アイブロウ（小見出し）**: `● CREATIVE TECHNOLOGY COMMUNITY`
- **メインコピー**:
  > # Make ideas.
  > # Make games.
  > # Make the future.
- **サブコピー**:
  > AIとゲーム開発で、  
  > 「やってみたい」をカタチにしよう。
- **CTAボタン**:
  - `サークルについて ↓`（#about へリンク）
  - `参加してみる ↗`（#join へリンク）
- **ビジュアル装飾**:
  - オーブグラデーション背景
  - アートカード: `CREATIVE LAB / 001` / 顔文字グラフィック（`✧ ◡`） / `AI × GAME ∞`
  - フローティングバッジ: `✦ AI / EXPERIMENT` / `🎮 GAME MAKING` / アスタリスク装飾（`✳`）
- **スクロールナビ**: `SCROLL TO EXPLORE ──── 01 — 04`

---

### 01 ABOUT US（サークルについて）

- **セクションラベル**: `01 ABOUT US`
- **キャッチコピー**:
  > ## 好奇心が、いちばんの才能。
- **本文**:
  > AIやゲーム開発に興味がある人が集まり、学び合い、アイデアを形にするクリエイティブサークルです。
  > 
  > 初心者も経験者も大歓迎。知識を共有したり、小さな作品を作ったり、好きなことを仲間と一緒に深めていこう。
- **ステッカー**: `LEARN / CREATE / PLAY!`（回転バッジ）
- **サークルのバリュー（3つの柱）**:
  1. **01 LEARN**
     - 一緒に学ぶ。知らないことを楽しもう。
  2. **02 CREATE**
     - アイデアを試して、自分たちの作品に。
  3. **03 PLAY**
     - 遊び心を忘れずに。制作も交流も楽しもう。

---

### 02 WHAT WE DO / Activities（活動内容）

- **セクションラベル**: `02 WHAT WE DO`
- **見出し**: `Activities.`
- **リード文**: `興味のあることから、自由にスタート。`
- **活動カード一覧**:

| アイコン | タイトル | 説明文 |
| :---: | :--- | :--- |
| `✦` | **AI Experiment** | 生成AI、機械学習、AIツールなどを触って、面白い使い方や新しい可能性を探る。 |
| `⌘` | **Game Development** | Unity・Unreal Engine・Webなど、いろいろな環境でゲームを企画・制作。 |
| `◉` | **Study & Share** | 勉強会、制作相談、アイデア共有。知識や経験をみんなで持ち寄る。 |
| `♧` | **Creative Projects** | ゲーム以外にも、Web制作やアプリ、面白い技術のプロトタイプに挑戦。 |

---

### 03 OUR PROJECTS / Made by us（作品紹介）

- **セクションラベル**: `03 OUR PROJECTS`
- **見出し**: `Made by us.`
- **リード文**: `これから生まれる作品たち。`
- **プロジェクトカード**:
  - **カード1**:
    - ビジュアル: シンボル `✳` / `GENERATIVE / 01`（オレンジグラデーション）
    - カテゴリ: `AI / CREATIVE`
    - タイトル: `Project Placeholder`
    - 説明: メンバーの制作物や実験をここに掲載します。
  - **カード2**:
    - ビジュアル: シンボル `◈` / `GAME / 02`（ブラウン系グラデーション）
    - カテゴリ: `GAME DEVELOPMENT`
    - タイトル: `Project Placeholder`
    - 説明: 開発中のゲームや完成作品を紹介します。
- **注記**: `※ 作品紹介は活動が始まり次第、随時更新予定。`

---

### 04 JOIN US（参加募集・CTA）

- **背景装飾**: アスタリスク装飾 `✦`
- **アイブロウ**: `YOUR NEXT IDEA STARTS HERE`
- **見出し**:
  > ## Let's create
  > ## something fun.
- **本文**:
  > 「ちょっと興味ある」だけでも大歓迎。  
  > 一緒に面白いものを作りませんか？
- **CTAボタン**: `JOIN THE CLUB ↗`（リンク先: `mailto:hello@example.com`）
- **キャプション**: `連絡先は仮設定です。実際のメール・SNSに変更してください。`

---

### フッター

- **ロゴ**: `assets/logo.jpg`
- **フッターリンク**: `ABOUT` / `ACTIVITIES` / `PROJECTS` / `JOIN`
- **コピーライト**: `© [年] AI & GAME DEVELOPMENT CLUB. MADE WITH CURIOSITY.`（JavaScriptで現在年を自動取得）

---

## デザインシステム

### カラーパレット

温かみのあるクリームとピーチをベースに、深みのあるブラウンとオレンジをアクセントにしたレトロモダンな配色です。

| カラー名 | 変数名 | HEX値 | 用途 |
| :--- | :--- | :--- | :--- |
| **Cream** | `--cream` | `#FFF2E4` | 全体背景、コントラスト文字色 |
| **Peach** | `--peach` | `#F5C7A6` | セクション背景（Activities等） |
| **Orange** | `--orange` | `#C66C49` | アクセントカラー、強調文字、ドット、記号 |
| **Brown** | `--brown` | `#42251C` | 主要テキスト色、ボタン背景、枠線 |
| **Ink** | `--ink` | `#38221B` | 濃色テキスト |
| **Muted** | `--muted` | `#8D6858` | 補足テキスト、説明文 |
| **Line** | `--line` | `rgba(66, 37, 28, 0.17)` | ボーダーライン、仕切り線 |

### フォント

Google Fontsより2種類のフォントを採用：
1. **DM Sans** (400, 500, 600, 700, 800): 欧文見出し、数字、ナビゲーション、ボタン
2. **Noto Sans JP** (400, 500, 700, 900): 日本語本文、見出し

### アニメーション・インタラクション

- **スムーススクロール**: ナビゲーションやボタンをクリックした際、対象セクションへ滑らかにスクロール。
- **スクロールリビール（IntersectionObserver）**:
  - セクションやカードが画面内に入ると、下からふわりとフェードイン表示（`.reveal.visible`）。
- **ホバーエフェクト**:
  - ボタン: ホバー時にわずかに浮き上がる（`translateY(-3px)`）。
  - Activitiesリスト: 矢印アイコンが右上に動く（`translate(4px, -4px)`）。
  - Projectカード: アイコンが回転＆拡大（`rotate(20deg) scale(1.12)`）。

---

## ファイル構成

```
ai-game-club-site/
├── app/
│   ├── layout.tsx       # HTMLの骨組み・メタ情報・Google Fonts読み込み
│   ├── page.tsx         # トップページ（全セクション構造とテキスト）
│   └── globals.css      # Tailwind読み込み・デザイントークン（色・フォント）
├── components/
│   ├── SiteHeader.tsx   # ヘッダー・ナビ・モバイルメニュー開閉
│   ├── ScrollReveal.tsx # スクロール表示制御（IntersectionObserver）
│   ├── CurrentYear.tsx  # フッターの年号自動更新
│   └── styles.ts        # 複数箇所で使う Tailwind クラスの組み合わせ
├── public/
│   └── assets/
│       └── logo.jpg     # サークルロゴ画像（/assets/logo.jpg で配信）
├── flake.nix            # Nix 開発環境（Node.js 22）
├── next.config.ts       # Next.js設定
├── postcss.config.mjs   # Tailwind CSS（PostCSS）設定
├── tsconfig.json        # TypeScript設定
├── package.json
└── README.md            # 本仕様書ドキュメント
```

---

## 開発・ビルド手順

### npm を直接使う場合
```bash
npm install        # 依存関係のインストール（初回のみ）
npm run dev        # 開発サーバー起動（http://localhost:3000）
npm run build      # 本番ビルド
npm run start      # ビルド結果を起動
```

### Nix を使う場合
```bash
nix develop        # Node.js 22 と npm が入った開発シェルに入る
npm install        # 初回のみ
npm run dev
```

---

## カスタマイズ・更新ガイド

### 1. 参加応募先（メール / Googleフォーム / Discord / Xなど）の変更
`app/page.tsx` の `id="join"` のセクション内にある「JOIN THE CLUB」リンクの `href` を変更します：
```tsx
{/* 例: Googleフォームに変更する場合 */}
<a className={`${buttonClass} mt-6 bg-brown text-[#fff0df]`} href="https://forms.gle/xxxxxx" target="_blank" rel="noopener noreferrer">JOIN THE CLUB <span>↗</span></a>
```

### 2. プロジェクト作品の追加
`app/page.tsx` の `id="projects"` のセクションに `<article>` を追加または編集します。カードの色は `bg-[linear-gradient(...)]` で指定します。画像を使う場合は `public/assets/` に格納し、`/assets/ファイル名` で指定します。

### 3. ロゴ画像の差し替え
`public/assets/logo.jpg` を同じファイル名で上書きするか、`app/page.tsx` および `components/SiteHeader.tsx` の `src="/assets/logo.jpg"` を新しい画像パスに更新します。

### 4. 色・フォントの変更
`app/globals.css` の `@theme` ブロックにある色変数（`--color-brown` など）とフォントを変更すると、サイト全体に反映されます。

### 5. ローカルでの動作確認
- `npm install` の後、`npm run dev` を実行し、ブラウザで http://localhost:3000 を開いて確認します。

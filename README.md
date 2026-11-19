# member-site — official-site ベース・野花の記法統合

Ai×Game開発部メンバーサイト。[TatsuyaM2667/official-site](https://github.com/TatsuyaM2667/official-site) の `f4e450c` をベースに、
MV「Wildest Flower」分析由来のUI言語「**野花の記法**」（十箇条）をフロントへ統合したビルドです。
旧ランディングページ（app/構造）からの全面再構築です。

## 統合の要点

| 箇条 | 適用 |
|---|---|
| 第一条 色五色 | 薄桃 #FFE9F0 / 墨 #161616 / 花 #F2508F / 制服 #4A6FA5 / 土 #6B5546。旧トークン名は残して五色へ再結線 |
| 第二条 拍 | 余白は 0.9rem の整数倍・半分倍のみ |
| 第三条 罫三段 | 面3px / 行1.5px / 糸1px。章の面罫は頁端まで |
| 第四条 大書 | 章番号01〜04は輪郭の大書。最大の塗りはサイト名だけ |
| 第五条 鏡像 | 表紙CTA対（塗り額 ⇄ 輪郭額）・04章は面そのものを反転 |
| 第六条 褪色 | 色を抜くのは opacity のみ |
| 第七条 現物 | rounded / shadow / blur / ring / グラデ全面廃止 |
| 第八条 拍動 | 1拍 = 0.36s（BPM165）。reveal は2拍・opacityとtranslateのみ・一度見えたら隠さない |
| 第九条 前傾 | 進む文字（見出し・番号・名前）のみ italic。ラベル・記録は直立 |
| 第十条 写真 | アバターは角形3px面罫額。色も形もいじらない |

## ベースからの変更ファイル（8）

| パス | 内容 |
|---|---|
| `src/app/globals.css` | 五色トークン・拍・罫・選択色・`.doc` 文書規則 |
| `src/app/layout.tsx` | フォント読み込み + フッター刻印（テーマ切替ロジック不変） |
| `src/app/page.tsx` | ホームを表紙 + 01〜04の章構造に |
| `src/app/blog/page.tsx` | 記事を行罫に。期日は制服色 |
| `src/app/community/team/page.tsx` | アバター面罫額（getProfile ロジック不変） |
| `src/components/TopNav.tsx` | pill / blur / 装飾アイコン廃止。柱の高さ5拍 |
| `src/components/DocsLayout.tsx` | 左罫3pxサイドバー・行罫1.5pxのPager |
| `src/components/ScrollReveal.tsx` | 新規（一度きりの章の顕現） |

## 面の交換

ライト/ダークのテーマ切替は、記法では「面の交換」として扱います。
ライト = 薄桃の面、ダーク = 墨の面。ラベルとリンクはライト面では制服色、墨の面では花色。

## 開発

```bash
nix develop   # 任意（Nix環境。flake.nix/flake.lock は旧構成から温存）
npm install
npm run dev   # http://localhost:3000
```

※ ベースに含まれる `src/app/favicon.ico` はバイナリのため移行対象外。
代替として `src/app/icon.svg`（薄桃の面に墨のロゴ）を同梱しています。

---
title: 'Markdownショーケース：コードブロック、テーブル、リストなど'
description: 'このAstroセットアップがサポートするMarkdown機能を網羅的に紹介するリファレンス記事です。'
pubDate: '2026-04-05'
updatedDate: 'Apr 07 2026'
authors:
  - shravan-goswami
  - friedrich-nietzsche
  - simone-de-beauvoir
toc: true
---

この記事は、`Academic-Portfolio`ブログのMarkdownリファレンスです。コードブロックの表示を確認したい場合は、下記の「コードブロック」セクションに直接移動してください。

## 見出しとインライン書式

Markdownでは、**太字**、*斜体*、***太字と斜体の組み合わせ***、~~取り消し線~~、そして`npm run build`のようなインラインコードを扱えます。

標準的なインラインリンクは[Astro](https://astro.build/)のように記述でき、参照スタイルのリンクは長文の執筆に適しています（例：[Astroドキュメント][astro-docs]）。https://docs.astro.build のような裸のURLも、このセットアップではリンクとして表示されます。

## 引用ブロック

> Markdownは、ソースの可読性が高く、レンダリング結果も見やすいときに最も効果を発揮します。
>
> そのため、技術メモ、学術的な執筆、変更履歴、チュートリアルなどに特に適しています。
>
> <cite>Academic Portfolio Markdownショーケース</cite>

## コールアウトブロック

以下のコールアウトは、Markdown内で軽量なHTMLを使用しており、通常のMarkdownよりもリッチな編集UIが必要な場合に適しています。

<div class="callout" data-callout="note">
  <p><strong>ノート:</strong> 本文の流れを大きく妨げない補足的な文脈、前提条件、編集上の注記に使用します。</p>
</div>

<div class="callout" data-callout="info">
  <p><strong>情報:</strong> 事実に基づく文脈、参考文献、読者の理解を助ける簡単な実装の詳細に最適です。</p>
</div>

<div class="callout" data-callout="tip">
  <p><strong>ヒント:</strong> ショートカット、ベストプラクティス、読者の時間を節約する小さな改善提案に最適です。</p>
</div>

<div class="callout" data-callout="success">
  <p><strong>成功:</strong> 確認事項、完了した結果、またはタスクが成功した後の手順に適しています。</p>
</div>

<div class="callout" data-callout="warning">
  <p><strong>警告:</strong> 失敗する可能性がある場合、予期しない動作をする場合、または続行前に特別な注意が必要な場合に使用します。</p>
</div>

<div class="callout" data-callout="danger">
  <p><strong>危険:</strong> 破壊的な操作、取り消し不可能な手順、または重大なミスのリスクがある場合に限定して使用します。</p>
</div>

## リスト

### 順序なしリストと順序付きリスト

- `src/content/blog`で記事の内容を下書きする。
- 目次に有用なアンカーが生成されるよう見出しを追加する。
- ブラウザでレンダリング結果を確認する。

1. 記事のフロントマターを記述する。
2. サンプルのMarkdownブロックを追加する。
3. サイトをビルドし、ページが正しくレンダリングされることを確認する。

### ネストされたリスト

- Markdownではネスト構造も扱えます。
  - これはアウトラインの作成に便利です。
  - サブポイントを含む手順の説明にも役立ちます。
- ここでの目的は、レンダリングの確認を容易にすることです。

### タスクリスト

- [x] サンプルブログ記事を追加する
- [x] フェンスドコードブロックを含める
- [x] Markdownテーブルを含める
- [ ] プレースホルダーの内容を実際の記事に置き換える

## テーブル

| 機能 | 例 | サポート状況 |
| :-- | :-- | :-: |
| インラインコード | `` `astro dev` `` | はい |
| コードフェンス | ```` ```ts ```` | はい |
| タスクリスト | `- [x] done` | はい |
| 脚注 | `[^1]` | はい |

## 画像と水平線

以下の画像は、リポジトリ内のローカルアセットを使用した標準的なMarkdownの画像構文です。

![学術ポートフォリオのプレースホルダー画像](../../../assets/blog-placeholder-about.jpg)

---

## コードブロック

以下の例は、現在のテーマにおけるさまざまなフェンスドコードブロックのスタイルを比較しやすくするためのものです。各ブロックには、左側に言語ピルが、右上端にコピーボタンが表示されます。

```bash
npm install
npm run dev
npm run build
```

```ts
type Publication = {
  title: string;
  year: number;
  tags: string[];
};

const recentPublications = (items: Publication[]) =>
  items.filter((item) => item.year >= 2024);
```

```astro
---
const highlights = ['Markdown', 'Shiki code blocks', 'Generated TOC'];
---

<ul>
  {highlights.map((item) => <li>{item}</li>)}
</ul>
```

```diff
- Browser defaults can be hard to scan.
+ Template-aware prose styles make the showcase easier to review.
```

## Markdown内のHTML

Markdownだけでは表現しきれない場合、生のHTMLも使用できます。

<details>
  <summary>展開可能なノート</summary>
  <p>これは、開示事項、FAQセクション、または記事内のオプションの実装メモに便利です。</p>
</details>

## 脚注

脚注は、引用、補足コメント、簡単な補足説明に便利です。[^1]

[^1]: このテンプレートはAstroのMarkdownパイプラインを使用しており、このバージョンではGitHub Flavored Markdownの機能がデフォルトでサポートされています。

[astro-docs]: https://docs.astro.build

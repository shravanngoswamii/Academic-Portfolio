---
title: 'AstroScholarテーマの設定方法'
description: 'AstroScholarテーマの設定に関する包括的なガイドです。'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

AstroScholarテーマの設定は簡単です。このガイドでは、`consts.ts`の設定、ナビゲーション、そして各種コレクションへのコンテンツ追加について説明いたします。

## はじめに

まず、`npm install`を実行して必要な依存関係がインストールされていることを確認してください。

次に、`src/consts.ts`を開き、デフォルトのサイトタイトル、説明文、ソーシャルリンクを変更します。

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## 著者の追加

著者は`src/content/data/authors.json`ファイルで管理できます。各著者には`id`、`name`が必須であり、任意で`avatar`、`url`、`affiliation`を設定することも可能です。

---
title: 'Astroビルドの最適化'
description: 'Astroサイトのビルドを高速化し、圧倒的なパフォーマンスを実現するためのヒントとテクニック。'
pubDate: '2026-04-09'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - performance
---

Astroは本質的に高速ですが、サイトをさらに最適化する方法がいくつかあります。

## 画像の最適化

`astro:assets`が提供する`<Image />`コンポーネントを使用すると、画像の最適化、リサイズ、WebPなどのモダンなフォーマットでの配信を自動的に行うことができます。

## クリティカルアセットのプリロード

フォントやクリティカルCSSをプリロードすることで、First Contentful Paint（FCP）を大幅に改善できます。

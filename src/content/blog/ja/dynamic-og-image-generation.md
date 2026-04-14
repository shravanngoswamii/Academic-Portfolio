---
title: 'AstroPaperブログ記事における動的OG画像生成'
description: 'Astroにおける動的Open Graph画像生成の概要を解説します。'
pubDate: '2026-04-02'
authors:
  - simone-de-beauvoir
toc: true
tags:
  - astro
  - SEO
---

Open Graph画像は、ソーシャルメディアでの共有において非常に重要な役割を果たします。AstroScholarでは、これらの画像を自動的に生成することができます。

## 仕組み

ブログ記事のフロントマターに`heroImage`が明示的に定義されていない場合、AstroScholarは記事のタイトルやメタデータに基づいて画像を動的に生成します。

これにより、Twitter、LinkedIn、Facebookなどのプラットフォームで共有する際、すべての記事が美しく表示されるようになります。

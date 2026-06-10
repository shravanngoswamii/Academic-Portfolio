---
title: 'AstroScholar थीम को कैसे कॉन्फ़िगर करें'
description: 'AstroScholar थीम को कॉन्फ़िगर करने की एक व्यापक मार्गदर्शिका।'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

AstroScholar थीम को कॉन्फ़िगर करना सरल है। इस मार्गदर्शिका में, हम `consts.ts` कॉन्फ़िगरेशन, नेविगेशन, और विभिन्न संग्रहों में सामग्री जोड़ने की प्रक्रिया पर चर्चा करेंगे।

## शुरुआत करें

सबसे पहले, सुनिश्चित करें कि आपने `npm install` चलाकर आवश्यक डिपेंडेंसीज़ इंस्टॉल कर ली हैं।

फिर, `src/consts.ts` खोलें और डिफ़ॉल्ट साइट शीर्षक, विवरण और सोशल लिंक्स को संशोधित करें।

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## लेखक जोड़ना

आप `src/content/data/authors.json` फ़ाइल में लेखकों का प्रबंधन कर सकते हैं। प्रत्येक लेखक के पास एक `id`, `name`, और वैकल्पिक रूप से `avatar`, `url`, तथा `affiliation` होना चाहिए।

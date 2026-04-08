---
title: 'How to add LaTeX Equations in Astro blog posts'
description: 'Learn how to easily embed LaTeX math equations in your markdown and MDX files.'
pubDate: 'Apr 09 2026'
authors:
  - friedrich-nietzsche
toc: true
tags:
  - markdown
  - latex
  - tutorial
---

Embedding mathematical formulas is crucial for academic writing. Here is how you can do it in AstroScholar.

## Inline Equations

You can add inline equations using standard LaTeX syntax. For instance, the equation for a line is $y = mx + c$, and the Pythagorean theorem is $a^2 + b^2 = c^2$. You can even include Greek letters like $\alpha$, $\beta$, and $\gamma$ directly in the flow of your text.

## Block Equations

For more complex formulas, use block equations. These are centered and given their own line.

Einstein's famous mass-energy equivalence equation is defined as:

$$E = mc^2$$

You can also write more complex formulas, such as the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Matrices

You can also render matrices cleanly:

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

### Integrals and Summations

Calculus equations look great when rendered in block format:

$$ \int_{a}^{b} x^2 dx $$

$$ \sum_{n=1}^{\infty} 2^{-n} = 1 $$

### Advanced Formatting

You can use standard LaTeX commands to format equations, align multiple equations, and more:

$$
\begin{aligned}
f(x) &= (x+a)(x+b) \\
     &= x^2 + (a+b)x + ab
\end{aligned}
$$

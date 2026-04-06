<h1 align="center">Academic Portfolio</h1>

<p align="center">
	A clean, modern Astro portfolio template for researchers, professors, students, and academic teams.
</p>

## Why This Template

Most portfolio templates look generic.
This one is built for academic storytelling:

- Blog posts for ideas, notes, and essays
- Project pages for research work
- Publications section from BibTeX
- Team and author profiles
- Search and generated OG images

Built with Astro for speed, static output, and straightforward deployment.

## What You Get

- Astro + MDX content workflow
- Blog with table of contents and reading-friendly layout
- Projects and publications pages
- Team page and author data model
- RSS feed and sitemap generation
- Search indexing via Pagefind
- GitHub Pages deployment workflow
- PR preview deployment workflow

## Lighthouse

<p align="center">
	<img src=".github/lighthouse-score.png" alt="Lighthouse score showing 100 across all categories" width="900" />
</p>

## Quick Start

1. Clone the repository.
2. Install dependencies.
3. Run the dev server.

```bash
npm install
npm run dev
```

Then open http://localhost:4321/Academic-Portfolio

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run astro -- <command>` | Run Astro CLI commands |

## Customization Guide

Update these files first:

- `src/consts.ts`: site title and global constants
- `src/data/authors.json`: author profiles
- `src/data/projects.json`: project entries
- `src/data/publications.bib`: publication list
- `src/content/blog/*.md`: blog posts
- `src/styles/global.css`: theme and typography

Layout and components:

- `src/layouts/BlogPost.astro`: post layout
- `src/components/Header.astro`: top navigation
- `src/components/Footer.astro`: footer

## Deployment

This repo is ready for GitHub Pages.

- `main` branch deploys via `.github/workflows/website-deploy.yml`
- Pull requests deploy preview sites via `.github/workflows/preview.yml`

Base path is configured in `astro.config.mjs`:

- default: `/Academic-Portfolio`
- PR preview: `/Academic-Portfolio/pr-previews/<PR_NUMBER>`

## Project Structure

```text
src/
	components/      Reusable UI components
	content/blog/    Markdown blog content
	data/            Authors, projects, publications
	layouts/         Page layouts
	pages/           Route files
	styles/          Global styles
	utils/           Utility helpers
public/
	fonts/           Webfonts and static assets
```

## Community

- Contributing guide: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Code of conduct: [.github/CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
- Security policy: [.github/SECURITY.md](.github/SECURITY.md)
- Pull request template: [.github/pull_request_template.md](.github/pull_request_template.md)

## Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](contact@shravangoswami.com). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## License

Licensed under the MIT [LICENSE](LICENSE), Copyright © 2026

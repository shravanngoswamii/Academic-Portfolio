import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			authors: z.array(z.string()).optional(), // References 'id' in authors.json
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		heroImage: image().optional(),
		link: z.string().optional(),
		status: z.enum(['Active', 'Completed']).default('Active'),
		year: z.number(),
		authors: z.array(z.string()).optional(), // References 'id' in authors.json
	}),
});

export const collections = { blog, projects };
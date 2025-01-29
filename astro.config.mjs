// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://reblocks.redotengine.org',
	integrations: [
		starlight({
			title: 'ReBlocks',
			editLink: {
				baseUrl: 'https://github.com/Redot-Experimental/reblocks-docs/tree/master/src/content/docs',
			},
			logo: {
				src: './src/assets/Reblocksv2.svg',
			  },
			  customCss: [
				'./src/styles/inter.css',
				'./src/styles/redot.css',
			],

			social: {
				github: 'https://github.com/Redot-Experimental/ReBlocks',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

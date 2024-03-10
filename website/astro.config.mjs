import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = "https://spacedragon.dovahkiin.xyz";

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'SpaceDragon',
			social: {
				github: 'https://github.com/altie122-youtube',
			},
			editLink: {
        baseUrl: 'https://github.com/altie122-youtube/spacedragon/edit/main/docs/',
      },
			sidebar: [
				{
					label: 'Start here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/en/getting-started' },
						{ label: 'Install Astro using the SpaceDragon CLI', link: '/en/install' },
					],
				},
				{
					label: 'What\'s Next?',
					// Autogenerate a group of links for the 'guides' directory.
					autogenerate: { directory: '/en/next-steps' },
				},
				{
					label: 'Other',
					// Autogenerate a group of links for the 'guides' directory.
					autogenerate: { directory: '/en/other' },
				},
			],
			// Set English as the default language for this site.
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
      },
		}),
	],
});

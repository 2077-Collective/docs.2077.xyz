import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://docs.2077.xyz',
	integrations: [
		starlight({
			title: '2077\'s Contributing Guide',
            logo: {
                light: './src/assets/full-logo-light.svg',
                dark: './src/assets/full-logo-dark.svg',
                replacesTitle: true,
            },
			social: {
				github: 'https://github.com/2077-Collective',
				discord: 'https://discord.gg/2077Collective',
			},
            customCss: [
                '@fontsource-variable/orbitron',
                './src/styles/global.css'
            ],
			sidebar: [
                {
                    label: 'About us',
                    items: [
                        {
                            label: 'Mission',
                            link: '/get-started/about-us/mission',
                        },
                        {
                            label: 'Contact us',
                            link: '/get-started/about-us/contact-us',
                        }
                    ]
                },
                {
                    label: 'Community management',
                    items: [
                        {
                            label: 'Code of Conduct',
                            link: '/get-started/community-management/code-of-conduct',
                        },
                        {
                            label: 'Follow us',
                            link: '/get-started/community-management/follow-us',
                        },
                        {
                            label: 'Get involved',
                            link: '/get-started/community-management/get-involved',
                        },
                    ]
                },
                {
                    label: 'For Contributors',
                    items: [
                        {
                            label: 'Get started',
                            link: '/get-started/contributors/get-started',
                        },
                        {
                            label: 'Squads',
                            link: '/get-started/contributors/squads',
                        },
                    ]
                },
                {
                    label: 'Design and Branding',
                    items: [
                        {
                            label: 'Introduction',
                            link: '/get-started/design/introduction',
                        },
                        {
                            label: 'Brand Assets and Guidelines',
                            link: '/get-started/design/guidelines',
                        },
                        {
                            label: 'Brand assets',
                            link: '/get-started/design/brand-assets',
                        },
                        {
                            label: 'Contests',
                            link: '/get-started/design/contests',
                        }
                    ]
                },
                {
                    label: 'Developers',
                    items: [
                        {
                            label: 'Technologies',
                            link: '/get-started/developers/technologies',
                        },
                        {
                            label: 'Style Guide',
                            link: '/get-started/developers/style-guide',
                        },
                        {
                            label: 'Git repositories',
                            link: '/get-started/developers/repositories',
                        },
                    ]
                },
                {
                    label: 'Marketing & Business Development',
                    items: [
                        {
                            label: 'Objectives',
                            link: '/get-started/marketing-bd/objectives',
                        },
                        {
                            label: 'Collaboration',
                            link: '/get-started/marketing-bd/collaboration',
                        },
                        {
                            label: 'Business Development',
                            link: '/get-started/marketing-bd/business-development',
                        },
                    ]
                },
                {
                    label: 'Research',
                    items: [
                        {
                            label: 'Guidelines',
                            link: '/get-started/research',
                        }
                    ]
                },
                {
                    label: 'Social Media',
                    items: [
                        {
                            label: 'Introduction',
                            link: '/get-started/social-media/introduction',
                        },
                        {
                            label: 'Our Channels',
                            link: '/get-started/social-media/follow-us',
                        },
                        {
                            label: 'Content Calendar',
                            link: '/get-started/social-media/content-calendar',
                        },
                    ]
                },
                {
                    label: 'Videographers',
                    items: [
                        {
                            label: 'Guidelines',
                            link: '/get-started/videographers',
                        }
                    ]
                },
                {
                    label: 'Writing',
                    items: [
                        {
                            label: 'Guidelines',
                            link: '/get-started/writing/guidelines',
                        },
                        {
                            label: 'Contests',
                            link: '/get-started/writing/contests',
                        },
                        {
                            label: 'Content Calendar',
                            link: '/get-started/writing/content-calendar',
                        },
                    ],
                },
			],
		}),
	],
});

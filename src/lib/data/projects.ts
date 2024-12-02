import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-svelte',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'This is my personal portfolio site that you are surfiiing. I hope you like it!',
		links: [{ to: 'https://users.it.teithe.gr/~it154608', label: 'Site' }, {to: 'https://github.com/Kontses/My-Personal-Site', label: 'GitHub'} ],
		logo: Assets.Site,
		name: 'My Personal Portfolio',
		period: {
			from: new Date(2024, 10, 26)
		},
		skills: getSkills('svelte', 'ts', 'html', 'css', 'javascript', 'sass'),
		type: 'Portofolio Website'
	},
	{
		slug: 'adroid-app',
		color: '#ff3e00',
		description:
			'A fanmade made app',
		shortDescription:
			'The Android App for finding every KCHC artist.',
		links: [{ to: 'https://github.com/GSmyrlis/KCHC_219_App', label: 'GitHub' }],
		logo: Assets.Unknown,		//kchc logo
		name: 'KCHC Adroid App',
		period: {
			from: new Date(2023, 10, 14)
		},
		skills: getSkills('c#', 'json', '.NET', 'Xamarin'), //TODO
		type: 'Android Application'
	},
	{
		slug: 'game',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'This is my personal portfolio site that you are surfiiing. I hope you like it!',
		links: [{to: 'https://github.com/Kontses/My-Personal-Site', label: 'CORE'} ],
		logo: Assets.Site,
		name: 'My Personal Portfolio',
		period: {
			from: new Date(2024, 10, 26)
		},
		skills: getSkills('svelte', 'ts', 'html', 'css', 'javascript', 'sass'),
		type: 'Portofolio Website',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';

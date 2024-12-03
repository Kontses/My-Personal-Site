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
			'This is my personal portfolio website that you are surfiiing, I hope you like it!',
		links: [{ to: 'https://users.it.teithe.gr/~it154608', label: 'Site' }, {to: 'https://github.com/Kontses/My-Personal-Site', label: 'GitHub'} ],
		logo: Assets.Site,
		name: 'Portofolio',
		period: {
			from: new Date(2024, 10, 26)
		},
		skills: getSkills('svelte', 'ts', 'html', 'css', 'javascript', 'sass'),
		type: 'My Personal Website'
	},
	{
		slug: 'adroid-app',
		color: 'white',
		description:
			'A fanmade made app',
		shortDescription:
			'The Android App for finding every KCHC artist.',
		links: [{ to: 'https://github.com/GSmyrlis/KCHC_219_App', label: 'GitHub' }],
		logo: Assets.kchc,
		name: 'KCHC App',
		period: {
			from: new Date(2023, 10, 14)
		},
		skills: getSkills('c#', 'json', '.NET', 'xamarin'),
		type: 'Android Application'
	},
	{
		slug: 'game',
		color: 'blue',
		description:
			'An one month project!',
		shortDescription:
			'An indie third-person action role-playing game!',
		links: [{to: 'https://www.coregames.com/games/652fb7/daaank-souls', label: 'CORE'} ],
		logo: Assets.core,
		name: 'Dank Souls',
		period: {
			from: new Date(2023, 9, 3), to: new Date(2023, 10, 2)
		},
		skills: getSkills('unreal','lua'),
		type: 'Indie Game',
		screenshots: [
			{
				label: 'Screen 1',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_0_3aFUZBIgbD9pMqw83Tf1Sf_B1AF3BB56ED524231F190843FDA14878D75AAD5D.jpg'
			},
			{
				label: 'Screen 2',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_1_3aFUZBIgbD9pMqw83Tf1Sf_20D11048A32C23E8CECFCF2D347D07B3884D694F.jpg'
			},
			{
				label: 'Screen 3',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_2_3aFUZBIgbD9pMqw83Tf1Sf_8DF61E93C598E2B3A07B207901576A772612BA33.jpg'
			},
			{
				label: 'Screen 4',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_3_3aFUZBIgbD9pMqw83Tf1Sf_A0C0E932766C25F8401334E258F4AF9B2ACE2DBF.jpg'
			}
		]
	},
	{
		slug: '3d-portofolio',
		color: 'orange',
		description:
			'A fanmade made app',
		shortDescription:
			'Portofolio of 3D models created on Blender.',
		links: [],
		logo: Assets.blender,
		name: '3D Modeling',
		period: {
			from: new Date(2022, 5, 30), to: new Date(2022, 4, 31)
		},
		skills: getSkills(''),
		type: 'Blender Portofolio',
		screenshots: [
			{
				label: 'Model 1',
				src: './static/Blender Portofolio/Obj_1.jpg'	// TODO
			},
			{
				label: 'Model 2',								// TODO
				src: ''
			},
			{
				label: 'Model 3',								// TODO
				src: ''
			}
		]
	}
];

export const title = 'Projects';

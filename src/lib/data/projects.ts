import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'portofolio',
		color: '#5e95e3',
		description:
			'This is my personal portfolio website that you are surfing on right now. Its purpose is my personal journey as a developer, a collection of my career projects that have gotten me to where I am, and a showcase of my web development skills.<br><br>The website is built mainly with the svelte library and the use of typescript. It required good knowledge of HTML for formatting, CSS and Sass for style, and JavaScript for script.',
		shortDescription:
			'This is my personal portfolio website that you are surfiiing on, I hope you like it!',
		links: [{ to: 'https://users.it.teithe.gr/~it154608', label: 'Site' }, {to: 'https://github.com/Kontses/My-Personal-Site', label: 'GitHub'} ],
		logo: Assets.Site,
		name: 'Portofolio',
		period: {
			from: new Date(2024, 10, 26)
		},
		skills: getSkills('svelte', 'ts', 'html', 'css', 'js', 'sass'),
		type: 'My Personal Website'
	},
	{
		slug: 'kchc-app',
		color: 'white',
		description:
			'KCHC app is an application created to record both the new artists that are emerging in the alternative scene of Katerini, and to preserve its history, with old music bands, even with records that have been found and do not exist on music platforms.<br><br>The application contains a list of artists, all the information found about them and a music player to play the rare archive found and not available elsewhere on the internet.<br><br>The app was created using C# and Xamarin in .NET Framework in collaboration with another colleague and fan of Katerinian music scene.',
		shortDescription:
			'The Android App for finding every KCHC artist.',
		links: [{ to: 'https://github.com/GSmyrlis/KCHC_219_App', label: 'GitHub' }],
		logo: Assets.kchc,
		name: 'KCHC',
		period: {
			from: new Date(2023, 10, 14)
		},
		skills: getSkills('csharp', 'json', '.NET', 'xamarin'),
		type: 'Android Application'
	},
	{
		slug: 'dank souls',
		color: 'blue',
		description:
			'Dank Souls is an indie game project inspired by the (obvious) Dark Souls in a more simplified form mainly to get in touch with the game develoment.<br><br>It\'s built on the Core Engine with graphics using Unreal Machine and the scripts written in Lua.',
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
		slug: 'blender-portofolio',
		color: 'orange',
		description:
			'To create an animation video I had create 3 objects in Blender from the scratch, with the modeling, the rigging till the camerra movement at the end.',
		shortDescription:
			'Portofolio of 3D models created in Blender.',
		links: [],
		logo: Assets.blender,
		name: '3D Modeling',
		period: {
			from: new Date(2022, 4, 30), to: new Date(2022, 5, 29)// TODO
		},
		skills: getSkills('blender'),
		type: 'Blender Portofolio',
		screenshots: [
			{
				label: 'Model 1',
				src: './Blender Portofolio/Obj_1.jpg'			// TODO
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

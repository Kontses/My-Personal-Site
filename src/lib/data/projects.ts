import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';
import { MediaType } from '../types';

export const items: Array<Project> = [
	{
		slug: 'nbg-analytics',
		color: '#52aac7ff',
		description:
			'A modern web application for the analysis and visualization of banking transactions from the National Bank of Greece (NBG). The application allows users to upload Excel files (.xlsx) exported from e-banking and view statistics and graphs.',
		shortDescription:
			'A modern web application for the analysis and visualization of banking transactions from the National Bank of Greece (NBG).',
		links: [{ to: 'https://nbg-analytics.vercel.app/', label: 'Site' },
		{ to: 'https://github.com/Kontses/NBG-Analytics', label: 'GitHub' }],
		logo: `${base}/nbg-icon.png`,
		name: 'NBG Analytics',
		period: {
			from: new Date(2025, 11, 29), to: new Date(2025, 11, 30)
		},
		skills: getSkills('ts', 'react', 'css', 'excel'),
		type: 'Web Applications',
		screenshots: [
			{
				label: 'Screenshot',
				src: `${base}/Screenshots/nbg_1.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Screenshot',
				src: `${base}/Screenshots/nbg_2.jpg`,
				type: MediaType.Image
			}
		]
	},
	{
		slug: 'bookfainder',
		color: '#7c1515ff',
		description:
			'Book Fainder is an intelligent book recommendation system that allows users to describe their desired book in natural language (Prompt), such as: "I want Greek poetry".<br><br>The application will select the most suitable book from the database based on relevance, quality and user intent.<br><br>Users can save their favorite books in personal lists (public or private) and add their friends.',
		shortDescription:
			'Discover your next book with AI. Describe what you\'re looking for and get personalized book recommendations from real book data.',
		links: [{ to: 'https://www.bookfainder.com/', label: 'Site' },
		{ to: 'https://github.com/Kontses/Book-Fainder', label: 'GitHub' }],
		logo: `${base}/book-fainder.png`,
		name: 'Book Fainder',
		period: {
			from: new Date(2025, 10, 1), to: new Date(2025, 11, 29)
		},
		skills: getSkills('ts', 'react', 'css', 'supabase'),
		type: 'Web Applications',
		screenshots: [
			{
				label: 'Screenshot',
				src: `${base}/Screenshots/book_fainder_1.png`,
				type: MediaType.Image
			},
			{
				label: 'Screenshot',
				src: `${base}/Screenshots/book_fainder_2.png`,
				type: MediaType.Image
			}
		]
	},
	{
		slug: 'afc',
		color: '#21157cff',
		description:
			'A modern, fast and offline web application for reporting and monitoring faults in ATIMs and GATEs systems.<br><br>Designed to facilitate the daily workflow of field engineers, providing fast data entry, automatic suggestions and powerful reporting capabilities.',
		shortDescription:
			'A modern, fast, and offline-capable web application for reporting and monitoring faults in ATIMs and GATEs systems.',
		links: [{ to: 'https://afc-report.vercel.app/', label: 'Site' },
		{ to: 'https://afc-report.vercel.app/dashboard', label: 'Dashboard' },
		{ to: 'https://github.com/Kontses/AFC-Report', label: 'GitHub' }],
		logo: `${base}/traxis_logo_2.png`,
		name: 'AFC Report',
		period: {
			from: new Date(2025, 11, 8), to: new Date(2025, 11, 28)
		},
		skills: getSkills('ts', 'react', 'css', 'Excel'),
		type: 'Web Applications',
		screenshots: [
			{
				label: 'Form',
				src: `${base}/Screenshots/afc_1.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Dashboard',
				src: `${base}/Screenshots/afc_2.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Dashboard',
				src: `${base}/Screenshots/afc_3.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Data',
				src: `${base}/Screenshots/afc_4.jpg`,
				type: MediaType.Image
			}
		]
	},
	{
		slug: 'escape',
		color: '#751111FF',
		description:
			'Escape is a website for a music team with music/video streaming capabilities and blog features. It is built with React, TypeScript, and Tailwind CSS.',
		shortDescription:
			'A website for a music team with music/video streaming capabilities and blog features.',
		links: [{ to: 'https://aztek-smoky.vercel.app/', label: 'Site' },
		{ to: 'https://github.com/Kontses/Escape', label: 'GitHub' }],
		logo: `${base}/escape.png`,
		name: 'Escape',
		period: {
			from: new Date(2025, 5, 26), to: new Date(2025, 9, 3)
		},
		skills: getSkills('ts', 'js', 'react', 'css', 'mdx'),
		type: 'Web Applications',
		screenshots: []
	},
	{
		slug: '3D-Reverb',
		color: '#5e95e3',
		description:
			'This is a 3D reverb plugin made with the JUCE DSP module. It is a reverb plugin that allows you to create a 3D reverb effect with Height, Width, and Depth parameters, and a Spectrum Visualizer via Fast Fourier Transform method to see the effect in real time.',
		shortDescription:
			'This is a 3D reverb plugin made with the JUCE DSP module.',
		links: [{ to: 'https://github.com/Kontses/3D-Reverb', label: 'GitHub' }],
		logo: `${base}/3D-Reverb.png`,
		name: '3D Reverb',
		period: {
			from: new Date(2025, 1, 1), to: new Date(2025, 3, 14)
		},
		skills: getSkills('juce', 'c++'),
		type: 'VST Plugin',
		screenshots: [
			/*	{
					label: 'Screenshot',
					src: `${base}/3D-Reverb.png`,
					type: MediaType.Image
				},	*/
			{
				label: 'Video',
				src: `${base}/3d-reverb-drums-demo.mp4`,
				type: MediaType.Video,
				thumbnailSrc: `${base}/3D-Reverb.png`
			}
		]
	},
	{
		slug: 'laterna',
		color: 'purple',
		description:
			'This is an real-time streaming platform similar to Spotify without counting plays of tracks and listeners with the aim of not comparing artists to each other.<br><br>- Frontend: React with TypeScript, Vite, Tailwind CSS, Shadcn UI, Three.js<br>- Backend: Node.js with Express, Node-cron, Express Fileupload<br>- Database: MongoDB<br>- Authentication: Custom JWT<br>- File Storage: Cloudinary<br>- Real-time communication: Socket.io',
		shortDescription:
			'This is a Spotify similar application in React and Node.js',
		links: [{ to: 'https://laterna-git-master-kontses-projects.vercel.app/', label: 'Site' }, { to: 'https://github.com/Kontses/Laterna', label: 'GitHub' }],
		logo: `${base}/laterna-logo.png`,
		name: 'Laterna',
		period: {
			from: new Date(2025, 4, 29), to: new Date(2025, 5, 26)
		},
		skills: getSkills('react', 'ts', 'js', 'css', 'threejs', 'nodejs', 'socketio', 'mongodb'),
		type: 'Web Applications'
	},
	/*	{
		slug: 'Countdown',
		color: 'purple',
		description:
			'A beautiful and modern web application for creating countdown timers for your important events!<br><br>This project is built with:<ul><li>Frontend: React 18 + TypeScript</li><li>Build Tool: Vite</li><li>Styling: Tailwind CSS + shadcn/ui</li><li>Database: Supabase (PostgreSQL)</li><li>Deployment: Vercel</li><li>Icons: Lucide React</li></ul>',
		shortDescription:
			'A beautiful and modern web application for creating countdown timers for your important events!',
		links: [{ to: 'https://countdown-opal-five.vercel.app//', label: 'Site' },
		{ to: 'https://github.com/Kontses/Countdown', label: 'GitHub' }],
		logo: `${base}/countdown.png`,
		name: 'Countdown',
		period: {
			from: new Date(2025, 7, 18), to: new Date(2025, 7, 18)
		},
		skills: getSkills('ts', 'js', 'react', 'vite', 'tailwind', 'css', 'nodejs','supabase'),
		type: 'Web Applications'
	},*/
	{
		slug: 'Metro Manuals',
		color: 'blue',
		description:
			'An Android application for scanning QR codes, viewing and management manuals (PDF) in an industrial environment.',
		shortDescription:
			'An Android application for scanning QR codes, viewing and management manuals (PDF) in an industrial environment.',
		links: [{ to: 'https://github.com/Kontses/DocFlutter/releases/tag/v0.1', label: 'GitHub' }],
		logo: `${base}/metro-manuals.png`,
		name: 'Metro Manuals',
		period: {
			from: new Date(2025, 4, 1), to: new Date(2025, 4, 22)
		},
		skills: getSkills('dart', 'flutter', 'c++', 'firebase'),
		type: 'Android Application',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: `${base}/Screenshots/1.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Screenshot 2',
				src: `${base}/Screenshots/2.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Screenshot 3',
				src: `${base}/Screenshots/3.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Screenshot 4',
				src: `${base}/Screenshots/4.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Screenshot 5',
				src: `${base}/Screenshots/5.jpg`,
				type: MediaType.Image
			}
		]
	},
	{
		slug: 'portofolio',
		color: '#5e95e3',
		description:
			'This is my personal portfolio website that you are surfing on right now. Its purpose is my personal journey as a developer, a collection of my career projects that have gotten me to where I am, and a showcase of my web development skills.<br><br>The website is built mainly with the svelte library and the use of typescript. It required good knowledge of HTML for formatting, CSS and Sass for style, and JavaScript for script.',
		shortDescription:
			'This is my personal portfolio website that you are surfiiing on, I hope you like it!',
		links: [{ to: 'https://kontses.github.io/My-Personal-Site/', label: 'Site' },
		{ to: 'https://github.com/Kontses/My-Personal-Site', label: 'GitHub' }],
		logo: Assets.Site,
		name: 'Portofolio',
		period: {
			from: new Date(2024, 10, 27), to: new Date(2024, 11, 9)
		},
		skills: getSkills('svelte', 'ts', 'html', 'css', 'js', 'sass'),
		type: 'Personal Website',
		screenshots: [
			{
				label: 'Screenshot',
				src: `${base}/Screenshots/whyfi.png`,
				type: MediaType.Image
			}
		]
	},
	{
		slug: 'Whyfi',
		color: 'yellow',
		description:
			'Whyfi is a graphical user interface (GUI) application for Windows, written in Python using the PyQt5 library. The purpose of the application is to scan for available Wi-Fi networks, display their basic information (SSID, BSSID, Signal Strength, Security) and allow you to connect to them, as well as retrieve passwords for saved network profiles.',
		shortDescription:
			'Scan and display all available Wi-Fi networks and show passwords.',
		links: [{ to: 'https://github.com/Kontses/Whyfi', label: 'GitHub' }],
		logo: `${base}/Screenshots/whyfi.png`,
		name: 'Whyfi',
		period: {
			from: new Date(2025, 5, 18), to: new Date(2025, 5, 18)
		},
		skills: getSkills('html', 'python'),
		type: 'Security Application',
		screenshots: [
			{
				label: 'Screenshot',
				src: `${base}/Screenshots/whyfi.png`,
				type: MediaType.Image
			}
		]
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
			from: new Date(2023, 10, 14), to: new Date(2024, 9, 30)
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
		links: [{ to: 'https://www.coregames.com/games/652fb7/daaank-souls', label: 'CORE' }],
		logo: Assets.core,
		name: 'Dank Souls',
		period: {
			from: new Date(2023, 9, 3), to: new Date(2023, 10, 2)
		},
		skills: getSkills('unreal', 'lua'),
		type: 'Indie Game',
		screenshots: [
			{
				label: 'Screen 1',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_0_3aFUZBIgbD9pMqw83Tf1Sf_B1AF3BB56ED524231F190843FDA14878D75AAD5D.jpg',
				type: MediaType.Image
			},
			{
				label: 'Screen 2',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_1_3aFUZBIgbD9pMqw83Tf1Sf_20D11048A32C23E8CECFCF2D347D07B3884D694F.jpg',
				type: MediaType.Image
			},
			{
				label: 'Screen 3',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_2_3aFUZBIgbD9pMqw83Tf1Sf_8DF61E93C598E2B3A07B207901576A772612BA33.jpg',
				type: MediaType.Image
			},
			{
				label: 'Screen 4',
				src: 'https://manticoreprod-ms.azureedge.net/screenshots/652fb77f8c5c48868b8708ef3783777a_3_3aFUZBIgbD9pMqw83Tf1Sf_A0C0E932766C25F8401334E258F4AF9B2ACE2DBF.jpg',
				type: MediaType.Image
			}
		]
	},
	{
		slug: 'blender-portofolio',
		color: 'orange',
		description:
			'To create an animation video I had create 3 objects in Blender from the scratch, with the modeling, the rigging till the camera movement at the end.',
		shortDescription:
			'Portofolio of 3D models created in Blender.',
		links: [],
		logo: Assets.blender,
		name: '3D Modeling',
		period: {
			from: new Date(2022, 4, 30), to: new Date(2022, 5, 29)
		},
		skills: getSkills('blender'),
		type: 'Blender Portofolio',
		screenshots: [
			{
				label: 'Model 1',
				src: `${base}/Blender/Obj_1.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Model 2',
				src: `${base}/Blender/Obj_2.jpg`,
				type: MediaType.Image
			},
			{
				label: 'Model 3',
				src: `${base}/Blender/Obj_3.jpg`,
				type: MediaType.Image
			}
		]
	}
];

export const title = 'Projects';

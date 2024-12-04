import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'traxis',
		company: 'Traxis Engineering',
		description: 'The ATS Support Engineer is a full-time role based for the Metro of Thessaloniki. Daily tasks include supporting the Automatic Train Supervision (ATS) systems, troubleshooting technical problems, carrying out system maintenance and ensuring the smooth operation of the railway systems at Metro\'s Operations Control Centre (OCC).',
		contract: ContractType.Contract,
		type: 'ATS Support Engineer',
		location: 'Thessaloniki',
		period: { from: new Date( 2024, 10, 26) },
		skills: getSkills('unix'),
		name: 'IT Support Engineer',
		color: 'red',
		links: [{ to: 'https://traxis.gr/', label: 'Traxis' }],
		logo: Assets.Traxis,
		shortDescription: 'Support Engineer for Automatic Train Supervision (ATS) system at Metro of Thessaloniki.'
	},
	{	/*	freelance istoselides
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},	
	{	*/
		slug: 'artsound',
		company: 'Artsound & Lights',
		description: 'I was at Artsound & Lights for the six-month internship established by the university. It was my first work experience working with code, from the university\'s classrooms, in a hands-on work environment with other co-workers and deadlines. The website is an e-shop mainly for audio equipment and lights, built in wordpress by choice of the boss, using several e-commerce plugins.<br><br>It needed HTML knowledge for a specific lay out, css understanding for style, and a lot of XML usage and table editing for linking products and other vendors to the shop.',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Thessaloniki',
		period: { from: new Date(2023, 3, 1), to: new Date(2023, 9, 10) },
		skills: getSkills('wordpress', 'html', 'css', 'xml'),
		name: 'Web Developer',
		color: 'yellow',
		links: [{ to: 'https://artsound.gr/', label: 'Artsound & Lights' }],
		logo: Assets.Artsound,
		shortDescription: 'E-shop development.'
	},	/*
	{			isws na to kratisw pioo code based
		slug: 'lifeguard',
		company: 'Orfeas Blue Resort',
		description: '',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Thessaloniki',
		period: { from: new Date(2023, 3, 1), to: new Date(2023, 9, 10) },
		skills: getSkills('wordpress', 'html', 'css', 'xml'),
		name: 'Junior Developer',
		color: 'yellow',
		links: [{ to: 'https://artsound.gr/', label: 'Artsound & Lights' }],
		logo: Assets.Artsound,
		shortDescription: 'E-shop development.'
	}	*/
];

export const title = 'Experience';

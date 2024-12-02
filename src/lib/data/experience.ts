import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Traxis Engineering',
		description: 'The ATS Support Engineer is a full-time role based in the city of Thessaloniki, within the Metro Station. Daily tasks include supporting the Automatic Train Supervision (ATS) systems, troubleshooting technical problems, carrying out system maintenance and ensuring the smooth operation of the railway systems at Metro\'s Operations Control Centre (OCC).',
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
		slug: 'web-developer-junior',
		company: 'Artsound & Lights',
		description: 'Στην Artsound & Lights βρέθηκα για την εξάμηνη πρακτική που μου καθιερωθηκε από το πανεπιστήμιο. Ηταν η πρώη μου εργασιακή εμπειρία που ασχολήθηκα με τονν κώδικα, από τα εγαστήριο του πανεπιστημίου, σε ένα πραματικό εργασιακό περιβαλλόν με άλλους συναδέλφους και deadlines.',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Thessaloniki',
		period: { from: new Date(2023, 3, 1), to: new Date(2023, 9, 10) },
		skills: getSkills('wordpress', 'html', 'css', 'xml'),
		name: 'Junior Developer',
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

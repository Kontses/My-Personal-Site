import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Traxis Engineering',
		description: 'The ATS Support Engineer is a full-time role based in the city of Thessaloniki, within the Metro Station. Daily tasks include supporting the Automatic Train Supervision (ATS) systems, troubleshooting technical problems, carrying out system maintenance and ensuring the smooth operation of the railway systems at Metro\'s Operations Control Centre (OCC).',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Thessaloniki',
		period: { from: new Date() },
		skills: getSkills('ts', 'js', 'unix'),						//unix
		name: 'IT Support Engineer',
		color: 'red',
		links: [],
		logo: Assets.Traxis,
		shortDescription: 'Support Engineer for Automatic Train Supervision (ATS) system at Metro of Thessaloniki.'
	},
	{
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
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';

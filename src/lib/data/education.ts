import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BSc on Department of Information and Electronic Engineering',
		description: '',
		location: 'Thessaloniki, Greece',
		logo: Assets.Unknown, 													// TODO
		name: '',
		organization: 'International Hellenic University',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) }, 		// TODO
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java']
	},
	{
		degree: ' Diploma in Classical Saxophone',
		description: '',
		location: 'Thessaloniki, Greece',
		logo: Assets.Unknown, 													// TODO
		name: '',
		organization: 'Conservatory of Stavroupolis',
		period: { from: new Date(2016, 1, 1), to: new Date(2018, 5, 1) },		// TODO
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Saxophone', 'Music Theory']
	},
	{
		degree: ' Studying ',
		description: '',
		location: 'Katerini, Greece',
		logo: Assets.Unknown, 													// TODO
		name: '',
		organization: 'Music School of Katerini',
		period: { from: new Date(2006, 0, 1), to: new Date(2018, 5, 1) },		// TODO
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Saxophone', 'Music Theory']
	}
];

export const title = 'Education';

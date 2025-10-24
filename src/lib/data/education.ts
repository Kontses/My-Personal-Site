import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BSc on Department of Information and Electronic Engineering',
		description: '',
		location: 'Thessaloniki, Greece',
		logo: Assets.IHU,
		name: '',
		organization: 'International Hellenic University',
		period: { from: new Date(2016, 1, 4), to: new Date(2025, 1, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithm', 'Assembly', 'C++', 'C#', 'Java', 'Python', 'Prolog', 'SQL', ]
	},
	{
		degree: ' Diploma in Classical Saxophone',
		description: '',
		location: 'Thessaloniki, Greece',
		logo: Assets.ConservatoryOfStavroupolis,
		name: '',
		organization: 'Conservatory of Stavroupolis',
		period: { from: new Date(2015, 8, 6	), to: new Date(2022, 1, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Saxophone', 'Music Theory']
	},
	{
		degree: ' School ',
		description: 'opa opa re',
		location: 'Katerini, Greece',
		logo: Assets.MusicSchoolOfKaterini,
		name: '',
		organization: 'Music School of Katerini',
		period: { from: new Date(2009, 9, 2), to: new Date(2015, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Saxophone', 'Music Theory']
	}
];

export const title = 'Education';

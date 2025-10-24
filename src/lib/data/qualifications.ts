import Assets from './assets';
import type { Qualification } from '../types';

export const items: Array<Qualification> = [
	{
		degree: 'Θαλής',
		description: '',
		logo: Assets.eme,
		name: '',
		organization: 'Hellenic Mathematical Society',
		period: { from: new Date(2012, 9) },
		shortDescription: 'Honorary Diploma in the 73rd Panhellenic Student Mathematical Competition',
		slug: 'thaleis',
		subjects: ['Mathematics']
	},
	{
		degree: 'Kangaroo',
		description: '',
		logo: Assets.kagouro,
		name: '',
		organization: 'International Mathematics Competition',
		period: { from: new Date(2011, 2) },
		shortDescription: 'Distinction Award',
		slug: 'kagouro-2011',
		subjects: ['Mathematics']
	},
	{
		degree: 'Kangaroo',
		description: '',
		logo: Assets.kagouro,
		name: '',
		organization: 'International Mathematics Competition',
		period: { from: new Date(2010, 2) },
		shortDescription: 'Distinction Award',
		slug: 'kagouro-2010',
		subjects: ['Mathematics']
	},
	{
		degree: 'Kangaroo',
		description: '',
		logo: Assets.kagouro,
		name: '',
		organization: 'International Mathematics Competition',
		period: { from: new Date(2009, 2) },
		shortDescription: 'Distinction Award',
		slug: 'kagouro-2009',
		subjects: ['Mathematics']
	},
	{
		degree: 'Ο μικρός Ευκλείδης',
		description: '',
		logo: Assets.eme,
		name: '',
		organization: 'Hellenic Mathematical Society',
		period: { from: new Date(2009, 3) },
		shortDescription: '2nd Place in the Competition',
		slug: 'mikros-efklidis',
		subjects: ['Mathematics']
	}
];

export const title = 'Qualifications';

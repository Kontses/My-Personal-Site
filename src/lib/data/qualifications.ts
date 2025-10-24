import Assets from './assets';
import type { Qualification } from '../types';

export const items: Array<Qualification> = [
	{
		degree: 'Certified Svelte Developer',
		description: '',
		logo: Assets.Svelte,
		name: '',
		organization: 'Svelte Community',
		period: { from: new Date(2023, 2) },
		shortDescription: '',
		slug: 'svelte-developer',
		subjects: ['Mathematics']
	},
	{
		degree: 'Ο μικρός Ευκλείδης',
		description: '',
		logo: Assets.eme,
		name: '',
		organization: 'Hellenic Mathematical Society',
		period: { from: new Date(2009, 3) },
		shortDescription: '',
		slug: '',
		subjects: ['Mathematics']
	}
];

export const title = 'Qualifications';

import Assets from './assets';
import type { Qualification } from '../types';

export const items: Array<Qualification> = [
	{
		degree: 'Certified Svelte Developer',
		description: '',
		logo: Assets.Svelte,
		name: '',
		organization: 'Svelte Community',
		period: { from: new Date(2023, 10) },
		shortDescription: '',
		slug: 'svelte-developer',
		subjects: ['Svelte', 'SvelteKit', 'JavaScript', 'TypeScript']
	},
	{
		degree: 'Ο μικρός Ευκλείδης',
		description: '',
		logo: Assets.eme,
		name: '',
		organization: 'Hellenic Mathematical Society',
		period: { from: new Date(2009, 9) },
		shortDescription: '',
		slug: '',
		subjects: ['Mathematics']
	}
];

export const title = 'Qualifications';

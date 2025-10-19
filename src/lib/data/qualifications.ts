import Assets from './assets';
import type { Qualification } from '../types';

export const items: Array<Qualification> = [
	{
		degree: 'Certified Svelte Developer',
		description: '',
		location: 'Online',
		logo: Assets.Svelte,
		name: '',
		organization: 'Svelte Community',
		period: { from: new Date(2023, 10) },
		shortDescription: '',
		slug: 'svelte-developer',
		subjects: ['Svelte', 'SvelteKit', 'JavaScript', 'TypeScript']
	},
	{
		degree: 'Certified TypeScript Professional',
		description: '',
		location: 'Online',
		logo: Assets.TypeScript,
		name: '',
		organization: 'TypeScript Org',
		period: { from: new Date(2022, 5) },
		shortDescription: '',
		slug: 'ts-pro',
		subjects: ['TypeScript', 'JavaScript', 'OOP']
	}
];

export const title = 'Qualifications';

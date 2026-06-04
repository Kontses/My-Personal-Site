import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@riadh-adrani-theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(true);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		return $v;
	});

export const onHydrated = () => {
	const fromStore = localStorage.getItem(key);

	if (!fromStore) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			// light mode (ανοιχτόχρωμο θέμα)
			toggleTheme(false);
		} else {
			// dark mode (σκουρόχρωμο θέμα)
			toggleTheme(true);
		}
	} else {
		toggleTheme(JSON.parse(fromStore));
	}
};

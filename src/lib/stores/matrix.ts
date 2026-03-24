import { writable } from 'svelte/store';

export const isMatrixVisible = writable(false); // Default to hidden, triggered by scroll

export function toggleMatrixVisibility() {
	isMatrixVisible.update((currentValue) => !currentValue);
}

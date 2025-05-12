import { writable } from 'svelte/store';

export const isMatrixVisible = writable(false); // Default to hidden

export function toggleMatrixVisibility() {
	isMatrixVisible.update((currentValue) => !currentValue);
}

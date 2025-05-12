import { writable } from 'svelte/store';

export const isMatrixVisible = writable(true); // Default to visible

export function toggleMatrixVisibility() {
	isMatrixVisible.update((currentValue) => !currentValue);
}

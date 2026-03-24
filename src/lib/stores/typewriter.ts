import { writable } from 'svelte/store';

export const isTypewriterActive = writable(false);
export const typewriterKey = writable(0);

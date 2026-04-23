import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

export const isPlaying = writable(false);
export const volume = writable(0.5);
export const analyserStore = writable<AnalyserNode | null>(null);

let audio: HTMLAudioElement | null = null;
let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let source: MediaElementAudioSourceNode | null = null;

export const initAudio = (src: string) => {
	if (!browser || audio) return audio;

	audio = new Audio(src);
	audio.loop = true;
	audio.crossOrigin = 'anonymous';
	audio.volume = get(volume);

	audio.onplay = () => isPlaying.set(true);
	audio.onpause = () => isPlaying.set(false);

	return audio;
};

export const initAnalyzer = () => {
	if (!browser || !audio || analyser) return;

	try {
		audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
		analyser = audioContext.createAnalyser();
		analyser.fftSize = 128;

		source = audioContext.createMediaElementSource(audio);
		source.connect(analyser);
		analyser.connect(audioContext.destination);

		analyserStore.set(analyser);
	} catch (e) {
		console.error('Failed to init audio analyzer:', e);
	}
};

export const startPlaying = async () => {
	if (!audio) return;
	if (get(isPlaying)) return;

	if (!analyser) initAnalyzer();
	if (audioContext && audioContext.state === 'suspended') {
		await audioContext.resume();
	}

	try {
		await audio.play();
	} catch (e) {
		console.log('Playback blocked by browser policy.');
	}
};

export const togglePlay = async () => {
	if (!audio) return;

	if (get(isPlaying)) {
		audio.pause();
	} else {
		await startPlaying();
	}
};

export const updateVolume = (val: number) => {
	volume.set(val);
	if (audio) audio.volume = val;
};

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { isMatrixVisible } from '$lib/stores/matrix';
	import { base } from '$app/paths';
	import * as audioStore from '$lib/stores/audio';

	export let src = `${base}/clubbed%20to%20death.mp3`;

	const { isPlaying, volume, analyserStore } = audioStore;

	// Local state for visualization
	let canvas: HTMLCanvasElement;
	let animationId: number;
	let dataArray: Uint8Array;

	// Start playing when matrix becomes visible (after scroll)
	$: if ($isMatrixVisible && !$isPlaying) {
		audioStore.startPlaying();
	}

	const draw = () => {
		if (!canvas || !$analyserStore) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		animationId = requestAnimationFrame(draw);
		
		if (!dataArray || dataArray.length !== $analyserStore.frequencyBinCount) {
			dataArray = new Uint8Array($analyserStore.frequencyBinCount) as any;
		}
		
		$analyserStore.getByteFrequencyData(dataArray as any);

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const barWidth = (canvas.width / dataArray.length) * 2;
		let barHeight;
		let x = 0;

		for (let i = 0; i < dataArray.length; i++) {
			barHeight = (dataArray[i] / 255) * canvas.height;

			// Matrix green gradient
			ctx.fillStyle = '#00ff41';
			ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

			x += barWidth + 2;
		}
	};

	// Restart draw if analyser becomes available
	$: if ($analyserStore && canvas && !animationId) {
		draw();
	}

	onMount(() => {
		audioStore.initAudio(src);
		if ($analyserStore) draw();
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	});

	// Determine the volume icon based on current volume level
	$: volumeIcon = ($volume === 0 
		? "i-carbon-volume-mute" 
		: $volume < 0.5 
			? "i-carbon-volume-down" 
			: "i-carbon-volume-up") as `i-${string}-${string}`;
</script>

<div class="audio-player">
	<div class="analyzer-container" title="Audio Analyzer">
		<canvas bind:this={canvas} width="60" height="24"></canvas>
	</div>

	<button class="control-btn play-btn" on:click={audioStore.togglePlay} title={$isPlaying ? "Pause Music" : "Play Music"}>
		{#if $isPlaying}
			<UIcon icon="i-carbon-pause-outline" />
		{:else}
			<UIcon icon="i-carbon-play-outline" />
		{/if}
	</button>
	
	<div class="volume-container">
		<button class="control-btn volume-btn">
			<UIcon icon={volumeIcon} />
		</button>
		
		<div class="volume-dropdown">
			<div class="slider-wrapper">
				<input 
					type="range" 
					min="0" max="1" step="0.01" 
					value={$volume} 
					on:input={(e) => audioStore.updateVolume(parseFloat(e.currentTarget.value))} 
					class="volume-slider" 
					title="Volume"
				/>
				<div class="volume-progress" style="height: {$volume * 100}%"></div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.audio-player {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 15px;
		height: 100%;

		.analyzer-container {
			display: flex;
			align-items: center;
			canvas {
				filter: drop-shadow(0 0 3px rgba(0, 255, 65, 0.4));
				opacity: 0.9;
			}
		}

		.control-btn {
			background: transparent;
			border: none;
			color: var(--secondary-text);
			cursor: pointer;
			font-size: 1.25em;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 6px;
			border-radius: 50%;
			transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

			&:hover {
				color: #00ff41;
				background-color: rgba(0, 255, 65, 0.08);
				transform: scale(1.05);
			}

			&.play-btn {
				font-size: 1.4em;
			}
		}

		.volume-container {
			position: relative;
			display: flex;
			align-items: center;
			height: 100%;

			&:hover .volume-dropdown {
				opacity: 1;
				visibility: visible;
				transform: translateX(-50%) translateY(0);
			}
		}

		.volume-dropdown {
			position: absolute;
			top: calc(100% + 12px);
			left: 50%;
			transform: translateX(-50%) translateY(-10px);
			background: rgba(10, 10, 10, 0.9);
			backdrop-filter: blur(12px);
			border: 1px solid rgba(0, 255, 65, 0.2);
			padding: 16px 12px;
			border-radius: 20px;
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 255, 65, 0.05);
			opacity: 0;
			visibility: hidden;
			transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
			z-index: 100;

			&::after {
				content: '';
				position: absolute;
				bottom: 100%;
				left: 50%;
				transform: translateX(-50%);
				border-width: 6px;
				border-style: solid;
				border-color: transparent transparent rgba(10, 10, 10, 0.9) transparent;
			}
		}

		.slider-wrapper {
			position: relative;
			height: 80px;
			width: 4px;
			background: rgba(255, 255, 255, 0.05);
			border-radius: 2px;
			margin: 0 auto;
			overflow: hidden;

			.volume-progress {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background: linear-gradient(to top, #00ff41, #008f11);
				border-radius: 2px;
				box-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
			}
		}

		.volume-slider {
			position: absolute;
			top: -10px;
			left: 50%;
			transform: translateX(-50%);
			width: 30px;
			height: 100px;
			margin: 0;
			opacity: 0;
			cursor: pointer;
			z-index: 2;
			-webkit-appearance: slider-vertical;
			appearance: slider-vertical;
		}
	}

	@keyframes pulse {
		0% { opacity: 0.8; }
		50% { opacity: 1; }
		100% { opacity: 0.8; }
	}
</style>

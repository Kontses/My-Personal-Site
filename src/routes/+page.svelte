<script lang="ts">
	import { onMount } from 'svelte';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	// Removed MatrixRain import from here
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import { isTypewriterActive, typewriterKey } from '$lib/stores/typewriter';
	import { isMatrixVisible } from '$lib/stores/matrix';

	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { base } from '$app/paths';

	let displayedDescription = '';
	let isTyping = false;
	let timeoutId: ReturnType<typeof setTimeout>;

	let typingAudio: HTMLAudioElement;
	let nextLineAudio: HTMLAudioElement;
	let audioStarted = false;

	const ensureAudioPlays = async () => {
		if (isTyping && typingAudio && typingAudio.paused) {
			try {
				await typingAudio.play();
				audioStarted = true;

				// Warm up nextLineAudio to unlock it for later
				if (nextLineAudio) {
					const vol = nextLineAudio.volume;
					nextLineAudio.volume = 0;
					nextLineAudio
						.play()
						.then(() => {
							setTimeout(() => {
								nextLineAudio.pause();
								nextLineAudio.volume = vol;
							}, 10);
						})
						.catch(() => {});
				}
			} catch (e) {
				// Still blocked
			}
		}
	};

	const startTypewriter = async () => {
		clearTimeout(timeoutId);
		displayedDescription = '';
		let i = 0;
		const speed = 40; // ms ανά χαρακτήρα

		isTyping = true;
		$isTypewriterActive = true;
		audioStarted = false;

		// Start typing sound (loop)
		if (typingAudio) {
			typingAudio.currentTime = 0;
			typingAudio
				.play()
				.then(() => {
					audioStarted = true;
				})
				.catch((err) => {
					audioStarted = false;
					console.warn('Typing sound blocked by browser policy. Interaction required.', err);
				});
		}

		const typeWriter = () => {
			if (!isTyping) {
				if (typingAudio) typingAudio.pause();
				return;
			}

			if (i < description.length) {
				const char = description.charAt(i);

				// Play next line sound 40ms (1 check ahead) before period, punctuation or newline
				const nextChar = description.charAt(i + 1);
				if (
					(nextChar === '.' || nextChar === '!' || nextChar === '?' || nextChar === '\n') &&
					nextLineAudio
				) {
					nextLineAudio.currentTime = 0;
					nextLineAudio.play().catch(() => {});
				}

				displayedDescription += char;
				i++;
				timeoutId = setTimeout(typeWriter, speed);
			} else {
				$isTypewriterActive = false;
				isTyping = false;
				if (typingAudio) typingAudio.pause();
			}
		};

		timeoutId = setTimeout(typeWriter, 100);
	};

	$: if ($typewriterKey > 0) {
		startTypewriter();
		setTimeout(() => {
			$typewriterKey = 0;
		}, 0);
	}

	onMount(() => {
		$isMatrixVisible = false; // Disable Matrix Rain initially on the homepage
		const initTimeoutId = setTimeout(startTypewriter, 400); // Initial 400ms + 100ms = 500ms

		// Rescue logic for autoplay policy
		window.addEventListener('click', ensureAudioPlays);
		window.addEventListener('keydown', ensureAudioPlays);
		window.addEventListener('touchstart', ensureAudioPlays);

		return () => {
			isTyping = false;
			$isTypewriterActive = false;
			if (typingAudio) typingAudio.pause();
			clearTimeout(timeoutId);
			clearTimeout(initTimeoutId);
			window.removeEventListener('click', ensureAudioPlays);
			window.removeEventListener('keydown', ensureAudioPlays);
			window.removeEventListener('touchstart', ensureAudioPlays);
		};
	});

	$: if (!$isTypewriterActive && isTyping) {
		displayedDescription = description;
		isTyping = false;
		if (typingAudio) typingAudio.pause();
		clearTimeout(timeoutId);
	}

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<!-- Removed MatrixRain component from here -->
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px relative"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
		<div class="grid relative">
			<!-- Αόρατο πλήρες κείμενο για να κρατάει τον χώρο σταθερό (layout lock) -->
			<p
				class="invisible text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight col-start-1 row-start-1"
				style="white-space: pre-line;"
			>
				{description}
			</p>
			<!-- Ορατό κείμενο που πληκτρολογείται -->
			<p
				class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight col-start-1 row-start-1 z-10 m-0"
				style="white-space: pre-line;"
			>
				{displayedDescription}
				{#if isTyping && displayedDescription.length < description.length}
					<span class="cursor">|</span>
				{/if}
			</p>
		</div>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />

	<div class="scroll-down-hint">
		<div class="animate-bounce">
			<UIcon icon="i-carbon-chevron-down" classes="text-1.5em" />
		</div>
		<span class="text-0.9em font-300 tracking-wider">SCROLL DOWN</span>
	</div>
</div>

<audio bind:this={typingAudio} src={`${base}/typing%20effect.mp3`} loop />
<audio bind:this={nextLineAudio} src={`${base}/next%20line.mp3`} />

<style>
	.scroll-down-hint {
		position: absolute;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--tertiary-text);
		gap: 5px;
		opacity: 0.8;
	}

	.animate-bounce {
		animation: bounce 2s infinite;
	}

	.cursor {
		animation: blink 1s step-end infinite;
		font-weight: bold;
		color: var(--accent-text);
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
</style>

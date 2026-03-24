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

	let displayedDescription = '';
	let isTyping = false;
	let timeoutId: ReturnType<typeof setTimeout>;

	const startTypewriter = () => {
		clearTimeout(timeoutId);
		displayedDescription = '';
		let i = 0;
		const speed = 40; // ms ανά χαρακτήρα
		
		isTyping = true;
		$isTypewriterActive = true;

		const typeWriter = () => {
			if (!isTyping) return;
			
			if (i < description.length) {
				displayedDescription += description.charAt(i);
				i++;
				timeoutId = setTimeout(typeWriter, speed);
			} else {
				$isTypewriterActive = false;
				isTyping = false;
			}
		};
		
		timeoutId = setTimeout(typeWriter, 100);
	};

	$: if ($typewriterKey > 0) {
		startTypewriter();
		setTimeout(() => { $typewriterKey = 0; }, 0);
	}

	onMount(() => {
		$isMatrixVisible = false; // Disable Matrix Rain initially on the homepage
		const initTimeoutId = setTimeout(startTypewriter, 400); // Initial 400ms + 100ms = 500ms
		
		return () => {
			isTyping = false;
			$isTypewriterActive = false;
			clearTimeout(timeoutId);
			clearTimeout(initTimeoutId);
		};
	});

	$: if (!$isTypewriterActive && isTyping) {
		displayedDescription = description;
		isTyping = false;
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
			<p class="invisible text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight col-start-1 row-start-1">
				{description}
			</p>
			<!-- Ορατό κείμενο που πληκτρολογείται -->
			<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight col-start-1 row-start-1 z-10 m-0">
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
		50% { opacity: 0; }
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

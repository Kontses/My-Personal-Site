<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import MatrixRain from '$lib/components/MatrixRain/MatrixRain.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { isMatrixVisible } from '$lib/stores/matrix'; // Import the store
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { blur } from 'svelte/transition';

	// ? moved to +layout.server.ts : will be deleted when we make sure that everything is alright
	// export const prerender = true;

	const routes = [
		'/',
		'/skills',
		'/projects',
		'/experience',
		'/education',
		'/qualifications',
		'/resume'
	];

	let isVisible = true; // Control visibility manually for scroll transitions
	let lastScrollTime = 0;
	const scrollDelay = 1000; // 1 second delay between automatic navigations

	const handleScroll = async (event: WheelEvent) => {
		const now = Date.now();
		if (now - lastScrollTime < scrollDelay) return;
		// If we are already transitioning (invisible), don't trigger again
		if (!isVisible) return;

		const isScrollingDown = event.deltaY > 0;
		const isScrollingUp = event.deltaY < 0;

		const scrollTop = window.scrollY;
		const windowHeight = window.innerHeight;
		const formHeight = document.body.scrollHeight;

		// Check if we are at the bottom
		const isAtBottom = scrollTop + windowHeight >= formHeight - 5; // Tolerance
		// Check if we are at the top
		const isAtTop = scrollTop <= 5;

		const currentPath = $page.url.pathname;

		// Find current route index
		const normalizedPath =
			currentPath === `${base}/` || currentPath === base
				? '/'
				: currentPath.replace(base, '').replace(/\/$/, '');

		const currentIndex = routes.findIndex((route) => {
			if (route === '/') return normalizedPath === '' || normalizedPath === '/';
			return normalizedPath === route;
		});

		if (currentIndex === -1) return;

		let targetRoute = '';

		if (isScrollingDown && isAtBottom) {
			if (currentIndex < routes.length - 1) {
				targetRoute = routes[currentIndex + 1];
			}
		} else if (isScrollingUp && isAtTop) {
			if (currentIndex > 0) {
				targetRoute = routes[currentIndex - 1] === '/' ? '/' : routes[currentIndex - 1];
			}
		}

		if (targetRoute) {
			lastScrollTime = now;
			isVisible = false; // Trigger Fade Out
			// Wait for the transition duration + buffer
			setTimeout(async () => {
				await goto(`${base}${targetRoute}`);
				isVisible = true; // Trigger Fade In (new page)
			}, 1000); // Match this to the blur duration
		}
	};

	onMount(() => {
		onHydrated();
		window.addEventListener('wheel', handleScroll);
		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	});
</script>

<div
	class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}
	style={`background-color: ${$isMatrixVisible ? 'transparent' : 'var(--main)'};`}
>
	<MatrixRain isVisible={$isMatrixVisible} />
	<!-- Use the store value -->
	<header class="top-bar">
		<NavMenu />
		<!-- Button has been moved to NavMenu.svelte -->
	</header>
	<div class="content container">
		{#if isVisible}
			<div
				class="page-wrapper"
				in:blur={{ amount: 10, duration: 1000 }}
				out:blur={{ amount: 10, duration: 1000 }}
			>
				<slot />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.top-bar {
		display: flex; /* Kept to ensure NavMenu is correctly aligned if it's not full-width itself */
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--main);
		/* padding-right: 10px; Removed as the button is no longer a direct child */
		border-bottom: 1px solid var(--secondary);
	}

	.content {
		display: grid;
		grid-template-areas: 'main';
		flex: 1;
		padding: 0px 0px;
	}

	.page-wrapper {
		grid-area: main;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	/* Removed .matrix-toggle-button and .matrix-toggle-button.active styles */

	.body {
		margin: 0px;
		background-color: transparent; /* Changed from var(--main) to transparent */
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>

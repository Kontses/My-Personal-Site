<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import MatrixRain from '$lib/components/MatrixRain/MatrixRain.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { isMatrixVisible } from '$lib/stores/matrix'; // Import the store
	import { onMount } from 'svelte';

	// ? moved to +layout.server.ts : will be deleted when we make sure that everything is alright
	// export const prerender = true;

	onMount(() => onHydrated());
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<MatrixRain isVisible={$isMatrixVisible} /> <!-- Use the store value -->
	<header class="top-bar">
		<NavMenu />
		<!-- Button has been moved to NavMenu.svelte -->
	</header>
	<div class="content container"><slot /></div>
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
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
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

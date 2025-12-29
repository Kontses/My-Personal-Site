<script lang="ts">
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { isMatrixVisible, toggleMatrixVisibility } from '$lib/stores/matrix';
	import { items } from '@data/navbar';
	import { writable } from 'svelte/store';
	import * as HOME from '@data/home';
	import { browser } from '$app/environment';

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import Icon from '../Icon/Icon.svelte';

	$: currentRoute = $page.url.pathname;

	let expanded = false;
	const showMatrixWarning = writable(false);
	const matrixWarningMessage = writable('');

	let matrixHintTimeout: any;

	$: checkMatrixHint(currentRoute, $isMatrixVisible);

	const checkMatrixHint = (route: string, isVisible: boolean) => {
		if (!browser) return;

		const isHome = route === '/' || route === `${base}/`;

		if (!isHome || !isVisible) {
			clearTimeout(matrixHintTimeout);
			return;
		}

		const hasShownHint = localStorage.getItem('matrix-hint-shown');

		if (!hasShownHint) {
			clearTimeout(matrixHintTimeout);
			matrixHintTimeout = setTimeout(() => {
				$matrixWarningMessage = 'If the rain is too strong, you can turn it off';
				$showMatrixWarning = true;
				localStorage.setItem('matrix-hint-shown', 'true');

				setTimeout(() => {
					if ($matrixWarningMessage === 'If the rain is too strong, you can turn it off') {
						$showMatrixWarning = false;
					}
				}, 7000);
			}, 3000);
		}
	};

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};

	const handleThemeToggle = () => {
		if ($theme && $isMatrixVisible) {
			$matrixWarningMessage = "No no, we don't do that when it's rainning";
			$showMatrixWarning = true;
			setTimeout(() => ($showMatrixWarning = false), 3000); // Hide after 3 seconds
		} else {
			toggleTheme();
		}
	};

	const handleMatrixToggle = () => {
		if (!$theme && !$isMatrixVisible) {
			$matrixWarningMessage = "Don't start the rain when we are enjoying the light";
			$showMatrixWarning = true;
			setTimeout(() => ($showMatrixWarning = false), 3000); // Hide after 3 seconds
		} else {
			toggleMatrixVisibility();
		}
	};
</script>

<div class="nav-menu">
	<nav class="container flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<UIcon icon="i-carbon-code" classes="text-2em" />
			<span
				class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
				>{HOME.name} {HOME.lastName}
			</span>
		</a>
		<div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">
			{HOME.name}
			{HOME.lastName}
		</div>
		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each items as item (item.title)}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="nav-menu-item-label">{item.title}</span>
				</a>
			{/each}
		</div>
		<div
			class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"
		>
			<div class="row hidden md:flex">
				<button
					class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
					on:click={() => handleMatrixToggle()}
					title={$isMatrixVisible ? 'Hide Matrix Rain' : 'Show Matrix Rain'}
				>
					{#if $isMatrixVisible}
						<UIcon icon="i-carbon-rain" />
					{:else}
						<UIcon icon="i-carbon-cloud" />
					{/if}
				</button>
				<a
					href={`${base}/search`}
					class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"
					title="Search"
				>
					<UIcon icon="i-carbon-search" />
				</a>
				<button
					class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
					on:click={() => handleThemeToggle()}
					title={$theme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
				>
					{#if $theme}
						<UIcon icon="i-carbon-moon" />
					{:else}
						<UIcon icon="i-carbon-sun" />
					{/if}
				</button>
			</div>
			<div class="col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`nav-bar-mobile-btn col-center ${expanded ? 'nav-bar-mobile-btn-expanded' : ''}`}
					on:keydown
					on:keyup
					on:click={() => toggleExpanded()}
				/>
			</div>
		</div>
		{#if $showMatrixWarning}
			<div class="matrix-warning" class:light-theme-warning={!$theme}>{$matrixWarningMessage}</div>
		{/if}
	</nav>
	<div class={`nav-menu-mobile ${expanded ? 'nav-menu-mobile-open' : ''} md:hidden`}>
		<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
			{#each items as item}
				<a
					href={`${base}${item.to}`}
					class="nav-menu-item !text-[var(--secondary-text)] gap-5"
					on:click={() => toggleExpanded(false)}
				>
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="">{item.title}</span>
				</a>
			{/each}
		</div>
		<div class="col gap-2 m-t-7">
			<button
				class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)]"
				on:click={() => {
					handleMatrixToggle();
					toggleExpanded(false);
				}}
			>
				{#if $isMatrixVisible}
					<UIcon icon="i-carbon-rain" />
					<span>Hide Matrix Rain</span>
				{:else}
					<UIcon icon="i-carbon-cloud" />
					<span>Show Matrix Rain</span>
				{/if}
			</button>
			<a
				href={`${base}/search`}
				class="text-inherit decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]"
				on:click={() => toggleExpanded(false)}
			>
				<UIcon icon="i-carbon-search" />
				<span>Search</span>
			</a>
			<button
				class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)]"
				on:click={() => {
					handleThemeToggle();
					toggleExpanded(false);
				}}
			>
				{#if $theme}
					<UIcon icon="i-carbon-moon" />
					<span>Dark Theme</span>
				{:else}
					<UIcon icon="i-carbon-sun" />
					<span>Light Theme</span>
				{/if}
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.nav-menu {
		display: flex;
		justify-content: center; /* This will center the 'nav.container' within the .nav-menu div */
		width: 100%; /* Ensure .nav-menu takes full width of its parent (.top-bar) */
		/* position: sticky, top, z-index, height, border-bottom, background-color are handled by .top-bar in +layout.svelte */
		/* padding: 0px 10px; Removed to let the inner .container handle padding */
		height: 50px; /* Keep height for alignment if necessary, or inherit/auto */

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 10px 20px;
			color: inherit;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				background-color: var(--main-hover);
			}
		}
	}

	.nav-menu-mobile {
		z-index: -1;
		max-height: calc(100vh - 50px - 1px);
		min-height: calc(100vh - 50px - 1px);
		width: 100%;
		position: absolute;
		background-color: var(--main);
		top: 51px;
		transform: translateY(-100vh);
		transition-property: transform opacity;
		transition: 400ms ease;
		opacity: 0;

		&-open {
			opacity: 1;
			transform: translateY(0vh);
		}
	}

	.matrix-warning {
		position: absolute;
		top: 50px; /* Position below the nav bar (nav bar height is approx 50px) */
		right: 0; /* Align to the right edge of the nav bar */
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		z-index: 1000;
		text-align: center; /* Center the text inside the warning box */
		/* Adjust right and potentially add a max-width if needed for alignment */
	}

	.light-theme-warning {
		background-color: rgba(255, 255, 255, 0.9);
		color: black;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
</style>

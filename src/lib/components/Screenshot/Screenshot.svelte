<script lang="ts">
	import UIcon from '../Icon/UIcon.svelte';
	import { MediaType } from '../../types';

	export let screenshot: { src: string; label: string; type?: MediaType } | undefined = undefined;

	export let onClose = () => {
		screenshot = undefined;
	};

	$: show = typeof screenshot !== 'undefined';
</script>

{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0px top-51px bg-[#00000080] col-center p-50px"
		on:click={onClose}
		on:keydown={onClose}
		on:keypress={onClose}
		on:keyup={onClose}
		tabindex="0"
		role="button"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl max-h-[calc(100vh-151px)] overflow-auto"
			on:click={(e) => e.stopPropagation()}
			on:keydown={(e) => e.stopPropagation()}
			on:keypress={(e) => e.stopPropagation()}
			on:keyup={(e) => e.stopPropagation()}
		>
			<div class="self-end">
				<button
					class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
					on:click={onClose}
					on:keypress
					on:keyup
				>
					<UIcon icon={'i-carbon-close'} />
				</button>
			</div>
			<div class="col w-full rounded-xl max-w-full max-h-full">
				{#if screenshot?.type === MediaType.Video}
					<video class="w-full max-h-full object-contain" src={screenshot?.src} controls autoplay loop>
						<track kind="captions" srclang="en" label="English" />
						Your browser does not support the video tag.
					</video>
				{:else}
					<img class="w-full max-h-full object-contain" src={screenshot?.src} alt={screenshot?.label} />
				{/if}
			</div>
			<p
				class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
			>
				{screenshot?.label}
			</p>
		</div>
	</div>
{/if}

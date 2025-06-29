<script>
	import { data, title, lastModified } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<div class="resume-content">
				<a href={data} download>
					<Chip size={'1.25em'}>Download</Chip>
				</a>
				<p class="last-edit-text">Last Edit: {lastModified}</p>
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	.resume-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 25px;

		& > a {
			color: inherit;
		}

		.last-edit-text {
			font-size: 0.9em;
			color: #aaa;
		}
	}
</style>

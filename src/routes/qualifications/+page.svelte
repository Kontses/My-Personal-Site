<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/qualifications';
	import type { Qualification } from '$lib/types';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import { getMonthName } from '$lib/utils/helpers';

	let search = '';

	let result: Array<Qualification> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.degree.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.name.toLowerCase().includes(s) ||
				it.organization.toLowerCase().includes(s) ||
				it.subjects.some((it) => it.toLowerCase().includes(s))
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each result as qualification, index (qualification.slug)}
				{@const from = `${getMonthName(
					qualification.period.from.getMonth()
				)} ${qualification.period.from.getFullYear()}`}
				<div
					class={`flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[10px]`}
				>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" />
					</div>
					<div class="col flex-1 items-stretch">
						<Card>
							<div class="flex-1 col gap-2 items-stretch">
								<img
									src={getAssetURL(qualification.logo)}
									alt={qualification.organization}
									height="50"
									width="50"
									class="mb-5"
								/>
								<div class="text-[1.3em]">{qualification.degree}</div>
								<div>{qualification.organization}</div>
								<div class="text-[0.9em] mt-2">{qualification.shortDescription}</div>
								<div class="col text-[0.9em]">
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-calendar" />
										{from}
									</div>
									<CardDivider />
								</div>
								<div class="row flex-wrap gap-1">
									{#each qualification.subjects as subject}
										<Chip>{subject}</Chip>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>
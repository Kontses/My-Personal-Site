<script>
	import { data as cvUrl, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	export let data;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if cvUrl}
			<div class="resume-content">
				<div class="pdf-container">
					<object data={cvUrl} type="application/pdf" width="100%" height="100%" title="Resume PDF Preview">
						<p class="text-center p-5">
							Το πρόγραμμα περιήγησής σου δεν υποστηρίζει την ενσωματωμένη προβολή PDF. 
							<a href={cvUrl} class="text-[var(--accent-text)] underline" download>Κατέβασε το CV εδώ</a>.
						</p>
					</object>
				</div>

				<div class="action-footer">
					<a href={cvUrl} download class="decoration-none">
						<Chip size={'1.25em'}>
							<div class="row items-center gap-2">
								<UIcon icon="i-carbon-download" /> Download CV
							</div>
						</Chip>
					</a>
					<p class="last-edit-text">Last Edit: {data.lastModified}</p>
				</div>
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
		width: 100%;
		padding: 0 15px;
	}

	.resume-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		width: 100%;
		max-width: 900px;
		
		.pdf-container {
			width: 100%;
			height: 70vh;
			min-height: 500px;
			border-radius: 12px;
			overflow: hidden;
			box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
			border: 1px solid var(--border);
			background-color: var(--secondary);

			object {
				display: block; // Αφαιρεί το κενό κάτω από το στοιχείο
			}
		}

		.action-footer {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;

			& > a {
				color: inherit;
			}
		}

		.last-edit-text {
			font-size: 0.9em;
			color: var(--tertiary-text);
		}
	}
</style>

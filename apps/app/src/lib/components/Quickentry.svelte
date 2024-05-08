<script lang="ts">
	import { getModalStore, type CssClasses } from '@skeletonlabs/skeleton';

	export let classes: CssClasses = '';

	const modalStore = getModalStore();
	let selectedDate: string | undefined;
</script>

<div class={`card p-16 ${classes}`}>
	<div class="mb-6 flex gap-4">
		<i class="fa-solid fa-square-plus text-2xl md:text-4xl"></i>
		<h2 class="h2 font-bold">Create a quick entry</h2>
	</div>
	<form class="flex flex-col gap-4" on:submit|preventDefault={() => modalStore.close()}>
		<div>
			<label for="task">Task</label>
			<input class="input" type="text" name="task" />
		</div>
		<div>
			<label for="desc">Additional details (optional)</label>
			<input class="input" type="text" name="desc" />
		</div>
		{#if selectedDate}
			<span>Due at <span class="font-medium">{selectedDate}</span></span>
		{:else}
			<span class="font-semibold">Select a date</span>
		{/if}
		<div>
			<label for="space">Space</label>
			<select name="space" class="select">
				<option value="inbox">Inbox</option>
				<option value="school">School</option>
				<option value="dev">Development</option>
				<option value="new">+ New Space</option>
			</select>
		</div>
		<button class="variant-ghost-primary btn mx-auto">Add</button>
	</form>
</div>

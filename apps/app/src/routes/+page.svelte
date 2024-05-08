<script lang="ts">
	import { MonthView } from '@repo/ui';
	import { WeekView } from '@repo/ui';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const tasks = data.tasks;
	let week = true;
	console.log(tasks);
</script>

<h1 class="h1 font-bold">Welcome to the dashboard</h1>

<button
	class="btn variant-ghost-surface mt-8"
	on:click={() => {
		week = !week;
	}}
	>{#if week}
		Month
	{:else}
		Week
	{/if}</button
>

{#if week}
	<WeekView {tasks} classNames="card p-8 mt-4" />
{:else}
	<MonthView classNames="card p-8 mt-4" />
{/if}

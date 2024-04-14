<script lang="ts">
	import MonthView from '$lib/components/calendar/views/MonthView.svelte';
	import WeekView from '$lib/components/calendar/views/WeekView.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const tasks = data.tasks;
	let week = true;
</script>

<h1 class="h1">Welcome to the dashboard</h1>
<!-- 
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
> -->

{#if week}
	<WeekView {tasks} classNames="card p-8 mt-4" />
{:else}
	<MonthView classNames="card p-8 mt-4" />
{/if}

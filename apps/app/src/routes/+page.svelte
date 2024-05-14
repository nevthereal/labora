<script lang="ts">
	import { MonthView } from '@repo/ui';
	import { WeekView } from '@repo/ui';
	import { register } from '@tauri-apps/api/globalShortcut';

	let week = true;
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
	<WeekView classNames="card p-8 mt-4" />
{:else}
	<MonthView classNames="card p-8 mt-4" />
{/if}

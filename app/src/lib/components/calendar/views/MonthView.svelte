<script lang="ts">
	export let classNames: string = '';
	import { date, months, setOffset, weekDays } from '$lib/utils/date';
	import { cn } from '$lib/utils/merge';
</script>

<section class={cn(classNames)}>
	<div class="flex gap-4 justify-between">
		<h1 class="text-3xl mb-4 select-none">
			<span class="font-bold">
				{months[$date.month()]}
			</span>
			<span class="font-medium">
				{$date.year()}
			</span>
		</h1>
		<div class="flex gap-2">
			<button
				class="active:scale-95 duration-200 ease-in-out"
				on:click={() => setOffset('subtract', 'month')}
			>
				<i class="fa-solid fa-chevron-left"></i>
			</button>
			<button
				class="active:scale-95 duration-200 ease-in-out font-semibold select-none"
				on:click={() => setOffset('reset')}>Today</button
			>
			<button
				class="active:scale-95 duration-200 ease-in-out"
				on:click={() => setOffset('add', 'month')}
			>
				<i class="fa-solid fa-chevron-right"></i>
			</button>
		</div>
	</div>
	<div class="flex justify-center items-center select-none">
		<div class="grid grid-cols-7 grid-rows-7 gap-4 text-center text-xl">
			{#each weekDays as day}
				<span class="font-bold">{day.short}</span>
			{/each}
		</div>
	</div>
</section>

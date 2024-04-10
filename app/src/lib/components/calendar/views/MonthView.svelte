<script lang="ts">
	export let classNames: string = '';
	import { date, offset, setOffset } from '$lib/utils/date';
	import { cn } from '$lib/utils/merge';

	const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	$: manipulatedDate = $date.add($offset, 'week');
</script>

<section class={cn('size-[500px]', classNames)}>
	<div class="flex gap-4 justify-between">
		<h1 class="text-3xl mb-4 select-none">
			<span class="font-bold">
				{months[manipulatedDate.month()]}
			</span>
			<span class="font-medium">
				{manipulatedDate.year()}
			</span>
		</h1>
		<div class="flex gap-2">
			<button class="active:scale-95 duration-200 ease-in-out" on:click={() => setOffset(-1)}>
				<i class="fa-solid fa-chevron-left"></i>
			</button>
			<button
				class="active:scale-95 duration-200 ease-in-out font-semibold select-none"
				on:click={() => setOffset(0)}>Today</button
			>
			<button class="active:scale-95 duration-200 ease-in-out" on:click={() => setOffset(1)}>
				<i class="fa-solid fa-chevron-right"></i>
			</button>
		</div>
	</div>
	<div class="flex justify-center items-center select-none">
		<div class="grid grid-cols-7 grid-rows-7 gap-4 text-center text-xl">
			{#each weekDays as day}
				<span class="font-bold">{day}</span>
			{/each}
		</div>
	</div>
</section>

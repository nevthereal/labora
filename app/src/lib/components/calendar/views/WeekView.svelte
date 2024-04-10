<script lang="ts">
	import DayCell from '../cells/week/DayCell.svelte';
	import { date, offset, setOffset } from '$lib/utils/date';
	import { cn } from '$lib/utils/merge';

	export let classNames: string = '';

	const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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

<section class={cn('', classNames)}>
	<div class="w-full flex justify-between">
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
	<div class="flex">
		<div class="w-full grid grid-cols-7">
			{#each weekDays as weekDay, idx}
				<DayCell
					currentMonth={manipulatedDate.month()}
					offset={$offset}
					{weekDay}
					index={idx}
					date={$date}
				/>
			{/each}
		</div>
	</div>
</section>

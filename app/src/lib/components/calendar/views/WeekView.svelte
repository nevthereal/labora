<script lang="ts">
	import DayCell from '../cells/week/DayCell.svelte';
	import dayjs from 'dayjs';

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

	const date = dayjs();

	let offset = 0;

	const setOffset = (newOffset: number) => {
		if (newOffset === 0) {
			offset = 0;
		}
		offset += newOffset;
	};
	$: currentMonth = date.add(offset * 7, 'day').month();
</script>

<section class={classNames}>
	<div class="w-full flex justify-between">
		<h1 class="text-3xl mb-4">
			<span class="font-bold">
				{months[currentMonth]}
			</span>
			<span class="font-medium">
				{date.add(offset * 7, 'day').year()}
			</span>
		</h1>
		<div class="flex gap-2">
			<button class="active:scale-95 duration-200 ease-in-out" on:click={() => setOffset(-1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<button
				class="active:scale-95 duration-200 ease-in-out font-semibold select-none"
				on:click={() => setOffset(0)}>Today</button
			>
			<button class="active:scale-95 duration-200 ease-in-out" on:click={() => setOffset(1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
	<div class="flex">
		<div class="w-full grid grid-cols-7">
			{#each weekDays as weekDay, idx}
				<DayCell {currentMonth} {offset} {weekDay} index={idx} {date} />
			{/each}
		</div>
	</div>
</section>

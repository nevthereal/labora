<script lang="ts">
	import { cn } from '$lib/utils/merge';
	import type { Dayjs } from 'dayjs';

	export let weekDay: string;
	export let date: Dayjs;
	export let index: number;
	export let offset: number;
	export let currentMonth: number;

	const todayNum = date.day();
	$: manipulatedDate = date.add(index - todayNum + 1 + offset * 7, 'day');
</script>

<div>
	<div
		class={cn(
			'p-4 flex gap-4 items-center justify-between select-none',
			index != 0 && 'border-l border-surface-500',
			manipulatedDate.month() != currentMonth && 'text-surface-200'
		)}
	>
		<span class="font-bold text-xl">{weekDay}</span>
		<span
			class={`font-medium size-8  flex justify-center items-center rounded-full ${manipulatedDate.toDate().toString() === date.toDate().toString() && 'bg-primary-500 text-white'}`}
			>{manipulatedDate.date()}</span
		>
	</div>
</div>

<script lang="ts">
	import { date, cn } from '$lib/utils';
	import dayjs from 'dayjs';

	export let weekDay: string;
	export let index: number;
	export let currentMonth: number;

	$: manipulatedDate = $date.add(index - dayjs().day() + 1, 'days');
</script>

<div>
	<div
		class={cn(
			'p-4 flex gap-4 items-center justify-between select-none',
			$date.month() != currentMonth && 'text-surface-200',
			index != 0 && 'border-l border-surface-500'
		)}
	>
		<span class="font-bold text-xl">{weekDay}</span>
		<span
			class={`font-medium size-8  flex justify-center items-center rounded-full ${dayjs().toDate().toString() === manipulatedDate.toDate().toString() && 'bg-primary-500 text-white'}`}
			>{manipulatedDate.date()}</span
		>
	</div>
</div>

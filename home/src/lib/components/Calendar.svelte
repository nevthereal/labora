<script lang="ts">
	import { Calendar } from 'bits-ui';
	export let selectedDate: string | undefined;
</script>

<Calendar.Root
	onValueChange={(val) => (selectedDate = val?.toString().toLocaleLowerCase())}
	let:months
	let:weekdays
	weekStartsOn={1}
	class="card p-4"
>
	<Calendar.Header class="mb-4 flex items-center justify-between">
		<Calendar.PrevButton class="cursor-pointer">
			<i class="fa-solid fa-arrow-left"></i>
		</Calendar.PrevButton>
		<Calendar.Heading class="text-lg font-medium" />
		<Calendar.NextButton class="cursor-pointer">
			<i class="fa-solid fa-arrow-right"></i>
		</Calendar.NextButton>
	</Calendar.Header>
	<div class="flex flex-col">
		{#each months as month, i (i)}
			<Calendar.Grid class="mb-6">
				<Calendar.GridHead>
					<Calendar.GridRow class="mb-2 flex w-full justify-between px-4">
						{#each weekdays as day}
							<Calendar.HeadCell class="text-center">
								<div class="text-surface-200">{day.slice(0, 2)}</div>
							</Calendar.HeadCell>
						{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as weekDates}
						<Calendar.GridRow class="grid grid-cols-7">
							{#each weekDates as date}
								<Calendar.Cell {date} class="group text-center">
									<Calendar.Day {date} month={month.value} class="focus:bg-surface-50">
										{date.day}
									</Calendar.Day>
								</Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	</div>
</Calendar.Root>

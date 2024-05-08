<script lang="ts">
  import DayCell from '../cells/week/DayCell.svelte';
  import { date, months, setOffset, weekDays, cn } from '../../../utils';

  export let tasks;

  export let classNames: string = '';
</script>

<section class={cn('', classNames)}>
  <div class="w-full flex justify-between">
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
        on:click={() => setOffset('subtract', 'week')}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        class="active:scale-95 duration-200 ease-in-out font-semibold select-none"
        on:click={() => setOffset('reset')}>Today</button
      >
      <button
        class="active:scale-95 duration-200 ease-in-out"
        on:click={() => setOffset('add', 'week')}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <div class="flex">
    <div class="w-full grid grid-cols-7">
      {#each weekDays as weekDay, idx}
        <DayCell currentMonth={$date.month()} weekDay={weekDay.long} index={idx} />
      {/each}
    </div>
  </div>
</section>

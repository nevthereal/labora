<script lang="ts">
	import MonthView from '$lib/components/calendar/views/MonthView.svelte';
	import WeekView from '$lib/components/calendar/views/WeekView.svelte';
</script>

<main class="flex justify-center items-center w-screen h-screen">
	<!-- <WeekView /> -->
	<MonthView classNames="card p-6" />
</main>

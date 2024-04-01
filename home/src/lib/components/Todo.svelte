<script lang="ts">
	import type { CssClasses } from '@skeletonlabs/skeleton';

	export let classes: CssClasses = '';
	export let body: string;
	export let completed = false;

	const toggleIcon = () => {
		completed = !completed;
	};
</script>

<li class={`card flex items-center p-4 pr-9 ${classes}`}>
	<button class="btn" on:click={() => toggleIcon()}
		><i class={`${!completed ? 'fa-regular' : 'fa-solid'} fa-circle-check text-2xl`}></i></button
	>
	<p class={`text-2xl font-bold ${completed ? 'line-through' : ''}`}>
		{@html body}
	</p>
</li>

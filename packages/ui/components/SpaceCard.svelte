<script lang="ts">
	import type { CssClasses } from '@skeletonlabs/skeleton';

	export let title: string;
	export let desc: string;
	export let openTodos: number;
	export let icon: string = 'fa-solid fa-rocket';
	export let classes: CssClasses = '';
</script>

<div class={`group card p-8 duration-200 ease-in-out hover:bg-surface-700 ${classes}`}>
	<div class="flex justify-between gap-2">
		<div class="flex flex-col gap-2">
			<h1 class="h1 flex gap-4 font-black">
				<i class={`my-auto text-2xl text-surface-200 md:text-4xl ${icon}`}></i>
				{title}
			</h1>
			<p class="text-xl">{desc}</p>
			<p class="italic text-surface-200">{openTodos} open todos</p>
		</div>
		<button class="variant-ghost-surface chip mb-auto aspect-square">
			<i class="fa-solid fa-gear text-lg duration-200 ease-in-out group-hover:rotate-45"></i>
		</button>
	</div>
</div>

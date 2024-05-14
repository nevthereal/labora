<script lang="ts">
	import '../app.postcss';

	import { register } from '@tauri-apps/api/globalShortcut';
	import { confirm } from '@tauri-apps/api/dialog';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onMount(async () => {
		await register('CommandOrControl+Shift+C', () => {
			confirm('Are you sure?', 'Tauri');
		});
	});
</script>

<nav class="flex justify-between p-6">
	<a href="/" class="font-bold italic h3 text-primary-500 btn">labora</a>
	<ul class="flex gap-6 font-medium h4 text-primary-500">
		<li>Spaces</li>
		<li>Habits</li>
	</ul>
</nav>
<main class="px-6">
	<slot />
</main>

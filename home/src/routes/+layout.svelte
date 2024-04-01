<script lang="ts">
	import '../app.postcss';
	import {
		getModalStore,
		initializeStores,
		Modal,
		type ModalSettings
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, LightSwitch, storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Quickentry from '$lib/components/Quickentry.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const modalStore = getModalStore();

	const quickentry: ModalSettings = {
		type: 'component',
		component: { ref: Quickentry, props: { parent: 'Homepage' } }
	};

	onMount(() => {
		document.addEventListener('keydown', function (e) {
			if (e.ctrlKey && e.key === 'e') {
				modalStore.trigger(quickentry);
			}
		});
	});
</script>

<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<nav class="flex justify-between p-4">
			<a href="/" class="h1 btn font-bold italic">logo</a>
			<div class="my-auto flex gap-8 font-semibold">
				<a class="btn-xl" href="/pricing">Pricing</a>
				<a class="btn-xl" href="/features">Features</a>
			</div>
			<a href="https://app.taskforge.com" class="variant-ghost-primary btn my-auto font-bold"
				>Dashboard</a
			>
		</nav>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<footer class="grid grid-flow-col p-8">
			<div class="m-auto flex flex-col">
				<h1 class="h1 font-black">Labora</h1>
				<p class="font-semibold italic">Stay focused.</p>
			</div>
			<div class="m-auto flex gap-12">
				<div>
					<h4 class="h4 font-semibold">Legal</h4>
					<ul>
						<li class="text-surface-200"><a href="/terms">Terms and Conditions</a></li>
						<li class="text-surface-200"><a href="/privacy-policy">Privacy Policy</a></li>
					</ul>
				</div>
				<div>
					<h4 class="h4 font-semibold">Product</h4>
					<ul>
						<li class="text-surface-200">
							<a target="_blank" href="https://dashboard.labora.cloud">Dashboard</a>
						</li>
						<li class="text-surface-200"><a href="/pricing">Pricing</a></li>
						<li class="text-surface-200"><a href="/features">Features</a></li>
					</ul>
				</div>
				<div>
					<h4 class="h4 font-semibold">Development</h4>
					<ul>
						<li class="text-surface-200">
							<a target="_blank" href="https://github.com/nevthereal/labora">Open Source</a>
						</li>
						<li class="text-surface-200">
							<a target="_blank" href="https://x.com/BremNeville">Neville Brem</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>

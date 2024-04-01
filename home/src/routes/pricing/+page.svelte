<script lang="ts">
	const tiers: PricingTier[] = [
		{
			name: 'Free',
			price: 0,
			spaces: 3
		},
		{
			name: 'Premium',
			price: 5,
			spaces: 'Unlimited'
		}
	];
</script>

<main class="mx-auto my-16 grid max-w-[80%] grid-cols-2 justify-center gap-4">
	{#each tiers as tier}
		<div class="card p-12">
			<h1 class="h1 font-bold">{tier.name}</h1>
			<h4 class="h4 mt-2 text-surface-200">
				{tier.price != 0 ? `${tier.price} CHF / month` : 'Free forever!'}
			</h4>
			<ul class="h5 mt-2">
				<li><i class="fa-solid fa-cloud text-success-500"></i> Saved In Cloud</li>
				<li><i class="fa-solid fa-inbox text-primary-500"></i> {tier.spaces} Spaces</li>
			</ul>
		</div>
	{/each}
</main>

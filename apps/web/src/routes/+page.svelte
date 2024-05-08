<script lang="ts">
	import { SpaceCard } from '@repo/ui';
	import { Todo } from '@repo/ui';

	let completed: boolean;
</script>

<svelte:head>
	<title>Labora</title>
	<meta
		name="description"
		content="A powerful todo application that keeps you productive and focused"
	/>
</svelte:head>

<div class="flex h-[90dvh] w-screen items-center justify-center text-center">
	<div class="flex flex-col gap-4">
		<h1 class="mb-8 text-7xl font-black">Labora.</h1>
		<div class="group relative mx-auto">
			<div
				class={`absolute -left-24 top-12 z-10 flex gap-2 text-2xl font-bold opacity-0 duration-200 ease-in-out ${!completed ? 'md:group-hover:opacity-100' : ''}`}
			>
				<span>Click me</span><i
					class="fa-solid fa-hand-pointer duration-200 ease-in-out group-hover:rotate-45"
				></i>
			</div>
			<Todo
				bind:completed
				classes={`relative shadow-lg ${!completed ? 'shadow-primary-500/50 hover:shadow-primary-500/20' : 'shadow-none'}  duration-200 ease-in-out`}
				body={"Time to be <span class='gradient-text'>productive</span>"}
			/>
		</div>
		<a
			href="#about"
			class={`variant-ghost-primary btn mx-auto font-bold ${completed ? 'opacity-100' : 'opacity-0'}`}
			>Find out more</a
		>
	</div>
</div>
<main>
	<!-- About -->
	<section class="grid grid-cols-1 xl:grid-cols-2" id="about">
		<div class="flex justify-center">
			<p class="my-auto w-[60%] text-lg">
				"Labora" is a latin imperative which means "work hard!" in English. <span
					class="gradient-text font-bold">Labora</span
				> is meant to keep you productive and organized. Our goal is to get productive work accessible
				to everyone. This is why this app is, and probably will be for a long time, a web app.
			</p>
		</div>
		<div class="flex flex-col items-center justify-center gap-1">
			<i class="fa-solid fa-book gradient-text text-3xl"></i>
			<p class="font-serif text-2xl">
				<span class="font-bold">labora (lat, v.)</span>: work hard!
			</p>
		</div>
	</section>

	<section class="my-16">
		<div class="flex p-16">
			<div class="m-auto flex flex-col gap-4">
				<h1 class="h2 font-bold">
					A <span class="gradient-text font-bold">good</span> todo app
				</h1>
				<ul class="flex flex-col gap-4">
					<Todo body="Removes all distractions" completed={true} />
					<Todo body="Keeps you organized" completed={true} />
					<Todo body="Keeps you focused" completed={true} />
					<Todo body="Bloats you with unneeded features (update)" />
				</ul>
			</div>
		</div>
	</section>

	<section class="grid grid-cols-1 xl:grid-cols-2">
		<div class="m-16 flex flex-col gap-4">
			<SpaceCard title="School" desc="This is a space." openTodos={3} icon="fa-solid fa-school" />
			<SpaceCard
				title="Development"
				desc="A place for your tasks."
				openTodos={5}
				icon="fa-solid fa-code"
			/>
		</div>
		<div class="m-auto flex max-w-[90%] flex-col gap-4 xl:max-w-[60%]">
			<p class="text-xl">
				We keep you organized with using <span class="gradient-text">Spaces</span>. Spaces are like
				little containers which carry tasks.
			</p>
			<p class="text-xl">
				For creating quick entries, press <kbd class="kbd">ctrl + E</kbd>
			</p>
		</div>
	</section>

	<section class="mx-auto my-16 max-w-[90%] xl:max-w-[60%]">
		<h1 class="h1 font-bold">Let's summarize:</h1>
		<div class="my-8 grid grid-cols-1 gap-4 xl:grid-cols-3">
			<div class="bento-box col-span-2">
				<h1 class="gradient-text h1 mx-auto font-black">Web-Based</h1>
				<p class="mx-auto text-xl">Accessible for everyone</p>
			</div>
			<div class="bento-box">
				<h1 class="gradient-text h1 mx-auto font-black">0</h1>
				<p class="mx-auto text-xl">Years of experience*</p>
			</div>
			<div class="col-span-3 grid grid-cols-2 gap-4">
				<div class="bento-box">
					<h2 class="gradient-text h2 m-auto font-black">Stay organized</h2>
					<p class="m-auto">
						Stay in focus thanks to <span class="gradient-text">spaces</span>
					</p>
				</div>
				<div class="bento-box">
					<h2 class="gradient-text h2 m-auto font-black">Stay Happy</h2>
					<p class="m-auto">With daily habits</p>
				</div>
			</div>
			<div class="bento-box">
				<h2 class="gradient-text h2 m-auto font-black">Affordable</h2>
				<p class="m-auto">
					Giving you a <a class="gradient-text font-bold" href="/pricing">generous free tier</a>
				</p>
			</div>
			<div class="bento-box col-span-2">
				<h1 class="gradient-text h1 m-auto font-black">Get it done quickly</h1>
				<p class="m-auto text-lg">
					For a quick entry just press <kbd class="kbd">ctrl + E</kbd>
				</p>
			</div>
		</div>
		<p>*yet</p>
	</section>
	<section class="my-8 flex justify-center">
		<div class="card p-12">
			<h2 class="h2 mb-4 font-bold">
				Sign up for our <span class="gradient-text">newsletter</span>
			</h2>
			<div class="flex flex-col gap-4">
				<div>
					<label for="email" class="mb-2">Email</label>
					<input type="email" name="email" class="input" />
				</div>
				<div>
					<label for="how" class="mb-2">How did you hear from us?</label>
					<select name="how" class="select">
						<option value="yt">YouTube</option>
						<option value="x">X (Twitter)</option>
						<option value="friend">A friend</option>
						<option value="other">Other</option>
					</select>
				</div>
				<button class="variant-ghost-primary btn mx-auto">Sign Up!</button>
			</div>
		</div>
	</section>
</main>

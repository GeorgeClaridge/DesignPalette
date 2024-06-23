<script>
	import { ActiveColours } from './Table.js';
	import Background from '$lib/assets/Background.svg';
	import People from './People.svelte';
</script>

<div class="py-20 mx-2 md:mx-8 xl:px-64 grid grid-cols-1 md:grid-cols-2 items-center">
	<div class="Info text-center md:text-left">
		<div style:color={$ActiveColours[2]} class="Header font-bold text-6xl tracking-tight">
			TechNest
		</div>
		<div class="SubText text-xl py-4 leading-8">"Welcome to TechNest, where innovation takes flight. We specialize in crafting cutting-edge
			solutions that redefine industry standards. Join us on our journey to transform the future of
			technology."</div>
		<div class="ButtonContainer">
			<button
				style:background-color={$ActiveColours[3]}
				class="py-2 px-8 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105"
				>Join The Community</button
			>
		</div>
	</div>

	<div class="Info mt-12 md:mt-0 flex justify-center md:justify-end">
		<People></People>
	</div>
</div>

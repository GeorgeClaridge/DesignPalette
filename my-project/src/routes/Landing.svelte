<script>
	import { ActiveColours } from './Table.js';
	import Background from '$lib/assets/Background.svg';
	import People from './People.svelte';
</script>

<div class="py-20 mx-2 md:mx-8 xl:px-64 grid grid-cols-1 md:grid-cols-2 items-center">
	<div class="Info text-center md:text-left">
		<div style:color={$ActiveColours[2]} class="Header font-bold text-6xl tracking-tight">
			How Lovable
		</div>
		<div style:color={$ActiveColours[2]} class="Header font-bold text-6xl tracking-tight">
			Software is Built
		</div>
		<div class="SubText text-xl py-3">Design, build and share what makes you smile</div>
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

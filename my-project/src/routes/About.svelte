<script>
	import { ActiveColours } from './Table.js';
	import Thumb from './Thumb.svelte';
</script>

<div class="py-20 mx-2 md:mx-8 xl:px-64 grid grid-cols-1 md:grid-cols-2 items-center">
	<div class="Info">
		<div style:color={$ActiveColours[2]} class="Header font-bold text-6xl tracking-tight">
			About Us
		</div>
		<div class="SubText text-xl py-4 leading-8">
			At TechNest, we empower our employees with the freedom to explore, innovate, and excel. With
			an environment that fosters creativity and autonomy, our team members have the liberty to
			pursue their passions and drive meaningful change. Embrace your free will at TechNest and
			unleash your full potential.
		</div>
		<div class="ButtonContainer">
			<button
				style:background-color={$ActiveColours[3]}
				class="py-2 px-8 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105"
				>Learn More</button
			>
		</div>
	</div>

	<div class="Info mt-12 md:mt-0 flex justify-center md:justify-end">
		<Thumb></Thumb>
	</div>
</div>

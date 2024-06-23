<script>
	import { ActiveColours } from './Table.js';
</script>

<div class="Container" style:color={$ActiveColours[1]}>
	<div class="Header text-center font-bold text-6xl pb-8 tracking-tight" style:color={$ActiveColours[2]}>Our Services</div>

	<div
		class="Container mx-2 md:mx-8 xl:px-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
	>
		<div class="Card dropbox border-2 group">
			<div
				style:background-color={$ActiveColours[2]}
				class="flex justify-between border-b-[3px] border-black py-2 px-4 items-center"
			>
				<div class="Header text-2xl font-bold">Free</div>
				<div class="w-6 h-6 rounded-md border-black border-[3px] duration-300 rotate-45 group-hover:rotate-180" style:background-color={$ActiveColours[0]}></div>
			</div>

			<div class="m-4 leading-7 font-semibold">
				"Welcome to TechNest, where innovation takes flight. We specialize in crafting cutting-edge solutions that redefine industry standards. Join us on our journey to transform the future of technology."
			</div>

			<button
				style:background-color={$ActiveColours[3]}
				class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mx-4 mb-4"
				>Start Now</button
			>
		</div>

		<div class="Card dropbox border-2 group">
			<div
				style:background-color={$ActiveColours[3]}
				class="flex justify-between border-b-[3px] border-black py-2 px-4 items-center"
			>
				<div class="Header text-2xl font-bold">Free</div>
				<div class="w-6 h-6 rounded-md border-black border-[3px] duration-300 rotate-45 group-hover:rotate-180" style:background-color={$ActiveColours[0]}></div>
			</div>

			<div class="m-4 leading-7 font-semibold">
				"Welcome to TechNest, where innovation takes flight. We specialize in crafting cutting-edge solutions that redefine industry standards. Join us on our journey to transform the future of technology."
			</div>

			<button
				style:background-color={$ActiveColours[3]}
				class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mx-4 mb-4"
				>Start Now</button
			>
		</div>

		<div class="Card dropbox border-2 group">
			<div
				style:background-color={$ActiveColours[4]}
				class="flex justify-between border-b-[3px] border-black py-2 px-4 items-center"
			>
				<div class="Header text-2xl font-bold">Free</div>
				<div class="w-6 h-6 rounded-md border-black border-[3px] duration-300 rotate-45 group-hover:rotate-180" style:background-color={$ActiveColours[0]}></div>
			</div>

			<div class="m-4 leading-7 font-semibold">
				"Welcome to TechNest, where innovation takes flight. We specialize in crafting cutting-edge solutions that redefine industry standards. Join us on our journey to transform the future of technology."
			</div>

			<button
				style:background-color={$ActiveColours[3]}
				class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mx-4 mb-4"
				>Start Now</button
			>
		</div>
	</div>
</div>

<script>
	import { ActiveColours } from './Table.js';
</script>

<div class="navbar flex justify-between items-center py-4 px-4 md:px-8 xl:px-12">
	<div class="flex items-center">
		<div style:background-color={$ActiveColours[2]} class="w-10 h-10 mr-2 rounded-lg"></div>
		<div style:color={$ActiveColours[2]} class="text-2xl font-bold">BRAND</div>
	</div>

	<button
		style:background-color={$ActiveColours[3]}
		class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105"
		>Start Now</button
	>
</div>

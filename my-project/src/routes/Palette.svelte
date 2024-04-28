<script>
	import { TablePalette } from './Table.js';
	import { ActiveColours } from './Table.js';

	const customSlice = ($TablePalette) => $TablePalette.slice(1),
		PaletteColours = $TablePalette.map(customSlice);

	//console.table(PaletteColours)
	//console.table($TablePalette)

	let Count = 0;
	let ActivePalette = $TablePalette[Count];
	$ActiveColours = ActivePalette.slice(1, 6);

	//console.table(ActiveColours)
	//console.table(ActiveColours)

	let ActiveColoursMin = 0;
	let ActiveColoursMax = 0;

	function Increase() {
		Count++;
		ActivePalette = $TablePalette[Count];
		$ActiveColours = ActivePalette.slice(1, 6);
	}

	function Decrease() {
		Count--;
		ActivePalette = $TablePalette[Count];
		$ActiveColours = ActivePalette.slice(1, 6);
	}

	function CopyPalette(Colour) {
		navigator.clipboard.writeText(Colour);
	}
</script>

<div class="CenterBottom bottom-0">
	<div class="flex justify-between pb-4">
		<div class="Header font-bold uppercase py-2 px-4 bg-white border-2 rounded-lg">
			{ActivePalette[0]}
		</div>
		<div class="Header font-bold uppercase py-2 px-4 bg-white border-2 rounded-lg">20/20/2000</div>
	</div>

	<div
		class="flex justify-between md:items-center gap-2 py-2 px-4 md:py-4 md:px-6 bg-white border-2 rounded-lg"
	>
		<button
			class="md:mr-4 p-2 md:p-3 rounded-full border-2 active:opacity-50 hover:opacity-80 duration-200"
			style:background-color={$ActiveColours[4]}
			disabled={Count == 0}
			on:click={() => Decrease()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				fill="white"
				class="bi bi-arrow-left"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
				/>
			</svg>
		</button>

		{#each $ActiveColours as Colour}
			<button
				style:background-color={Colour}
				on:click={() => {
					CopyPalette(Colour);
				}}
				class="h-14 w-14 md:w-24 md:h-16 mx-1 md:mx-2 relative hover:-translate-y-2 duration-200 group rounded-lg border-2 active:opacity-50 active:border-green-700"
			>
				<div class="flex justify-center invisible group-hover:visible duration-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="white"
						class="bi bi-clipboard"
						viewBox="0 0 16 16"
					>
						<path
							d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"
						/>
						<path
							d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"
						/>
					</svg>
				</div>
				<div
					class="bg-black bg-opacity-15 absolute bottom-0 opacity-0 p-1 group-hover:opacity-100 duration-200"
				>
					<div class="text text-white font-bold uppercase">{Colour}</div>
				</div>
			</button>
		{/each}

		<button
			class="md:ml-4 p-2 md:p-3 rounded-full border-2 active:opacity-50 hover:opacity-80 duration-200"
			style:background-color={$ActiveColours[4]}
			disabled={Count == $TablePalette.length - 1}
			on:click={() => Increase()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				fill="white"
				class="bi bi-arrow-right"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.CenterBottom {
		position: fixed;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0 auto;
	}
</style>

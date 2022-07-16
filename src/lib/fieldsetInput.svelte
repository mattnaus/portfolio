<script>
	export let label;
	export let input = {
		id: 'amount',
		type: 'number',
		name: 'amount',
		placeholder: 'Amount in ETH'
	};
	export let symbol = false;
</script>

<fieldset class="mb-7">
	<div>
		<legend>
			<label for="amount" class="uppercase text-slate-400 font-medium text-xs mb-2 block"
				>{label}</label
			>
		</legend>
		<div class="relative w-full h-12">
			<input
				{...input}
				class="border border-slate-300 rounded-lg overflow-hidden bg-white absolute inset-0 focus:ring-2 focus:outline-0 focus:ring-pink-400 p-3 text-slate-700"
			/>
			{#if symbol}
				<div
					class="w-14 h-11.5 bg-slate-200 top-px right-px absolute rounded-r-lg flex items-center justify-center text-slate-400"
				>
					{symbol}
				</div>
			{/if}
		</div>
	</div>
</fieldset>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>

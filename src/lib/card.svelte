<script>
	import graph from '$lib/assets/graph.svg';

	export let styles;
	export let cardData = {
		type: 1,
		label: '',
		amount: 0,
		asset: '',
		value: '',
		sign: ''
	};

	console.log(cardData);

	const { type, label, sign, amount, asset, value } = cardData;
</script>

<div class="p-5 bg-white border border-slate-200 border-solid rounded-xl relative {styles}">
	<span class="uppercase text-slate-400 text-xs mb-2 block">{label}</span>
	{#if type === 1}
		<p class="text-slate-800 text-3xl font-bold mb-2">
			{amount} <span class="text-xl">{asset}</span>
		</p>
		<p class="text-slate-700 text-lg font-medium">= {value}</p>
		<img src={graph} alt="Portfolio value graph" class="absolute top-5 right-5" />
	{:else}
		<p class="text-slate-700 text-2xl font-medium">
			<span class="{sign === '+' ? 'text-teal-500' : 'text-rose-500'}  font-normal">{sign}</span
			>{amount}
		</p>
	{/if}
</div>

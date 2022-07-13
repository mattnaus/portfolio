<script>
	import arrowDown from '$lib/assets/arrow-down.svg';
	import Score from '$lib/score.svelte';
	export let score;
	export let amount;
	let amountDecimals = amount % 1;
	let temp = String(amountDecimals.toFixed(4)).split('.');
	let amountDecimalsFormatted = Number(temp[1]);
	let amountWhole = amount - amountDecimals;
	export let symbol = 'Ξ';
	export let value;
	console.log(amountDecimalsFormatted);
</script>

<li class="p-6 border-b-2 border-slate-100 flex items-center">
	<span class="bg-slate-200 rounded-full w-8 h-8 block mr-2 flex items-center justify-center">
		<img src={arrowDown} alt="Arrow down" />
	</span>
	<p class="text-pink-400 grow">
		<span class="font-bold text-slate-400"
			><span class="text-slate-800">{amountWhole}</span>.{amountDecimalsFormatted}<span
				class="font-normal">{symbol}</span
			></span
		>
		@ {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)}
	</p>
	<Score {score} />
</li>

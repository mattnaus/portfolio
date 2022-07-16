<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import arrowDown from '$lib/assets/arrow-down.svg';
	import Score from '$lib/score.svelte';

	export let score;
	export let amount;
	export let symbol = 'Ξ';
	export let value;

	let amountDecimals = amount % 1;
	let temp = String(amountDecimals.toFixed(4)).split('.');
	let amountDecimalsFormatted = Number(temp[1]);
	let amountWhole = amount - amountDecimals;
	let displayTransactions = false;
</script>

<li class="border-b-2 border-slate-100 ">
	<div
		class="flex items-center p-6 cursor-pointer"
		on:click={() => {
			displayTransactions = !displayTransactions;
		}}
	>
		<span class="bg-slate-200 rounded-full w-8 h-8 block mr-2 flex items-center justify-center">
			<img src={arrowDown} alt="Arrow down" class={displayTransactions ? '-rotate-90' : ''} />
		</span>
		<p class="text-pink-400 grow">
			<span class="font-medium text-slate-400"
				><span class="text-slate-800 font-bold">{amountWhole}</span>.{amountDecimalsFormatted}<span
					class="font-normal">{symbol}</span
				></span
			>
			@ {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)}
		</p>
		<Score {score} />
	</div>
	{#if displayTransactions}
		<div class="p-6 pt-3" transition:slide={{ duration: 600, easing: quintOut }}>
			<h4 class="text-slate-600 font-medium text-sm">Stack transactions</h4>
			<div class="transWrapper relative">
				<div class="flex items-center h-14">
					<div class="bg-pink-500 w-7 h-7 rounded-full" />
					<div class="grow flex justify-end">
						<div class="uppercase text-xs text-slate-500 font-medium text-right pr-2 w-14">in</div>
						<div class="uppercase text-xs text-slate-500 font-medium text-right pr-2 w-14">out</div>
					</div>
				</div>
				<div class="flex items-center h-14">
					<div
						class="flex items-center justify-center border bg-white border-pink-500 w-7 h-7 rounded-full text-xs text-slate-400"
					>
						1
					</div>
					<div
						class="transDetails relative ml-8 mr-14 grow flex justify-between text-xs bg-white text-slate-600 border border-slate-300 rounded-md py-3 px-2"
					>
						<div class="text-slate-500">mm/yy/yyyy</div>
						<div class="text-slate-700 font-medium">2.3456Ξ</div>
					</div>
				</div>
				<div class="flex items-center h-14">
					<div
						class="flex items-center justify-center border bg-white border-pink-500 w-7 h-7 rounded-full text-xs text-slate-400"
					>
						2
					</div>
					<div
						class="transDetails relative ml-8 grow flex justify-between text-xs bg-white text-slate-600 border border-slate-300 rounded-md py-3 px-2"
					>
						<div class="text-slate-500">mm/yy/yyyy</div>
						<div class="text-slate-700 font-medium">2.3456Ξ</div>
					</div>
				</div>
				<div class="flex items-center h-14">
					<div class="bg-pink-500 w-7 h-7 rounded-full" />
					<div class="transDetails relative bg-white ml-8">
						<div class="text-slate-400 text-xs mb-1">07/16/2022</div>
						<div class="text-slate-600 text-sm">
							ETH BALANCE: <span class="font-bold">4.56Ξ</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>

<style>
	.transWrapper {
		@apply border-r border-slate-100;
	}

	.transWrapper::before {
		content: '';
		z-index: -1;
		width: 15px;
		@apply absolute border-r border-slate-300 border-dashed bottom-5 left-0 top-5;
	}

	.transWrapper::after {
		content: '';
		z-index: -1;
		@apply absolute border-x border-slate-100 h-full w-14 right-14 top-0;
	}

	.transDetails::before {
		content: '';
		z-index: -1;
		@apply absolute top-0 -left-10 border-b border-slate-300 border-dashed h-5 w-full;
	}
</style>

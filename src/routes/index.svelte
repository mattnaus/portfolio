<script>
	export const prerender = true;
	import { fly } from 'svelte/transition';
	import Topbar from '$lib/topBar.svelte';
	import Card from '$lib/card.svelte';
	import List from '$lib/list.svelte';
	import Radiobutton from '$lib/radiobutton.svelte';
	import Button from '$lib/button.svelte';

	import plus from '$lib/assets/plus.png';
	import battery from '$lib/assets/battery.svg';
	import wifi from '$lib/assets/wifi.svg';

	let addTransVisible = true;

	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from '@rgossiaux/svelte-headlessui';

	const people = [
		{ id: 1, name: 'ETH price ↓', unavailable: false },
		{ id: 2, name: 'ETH price ↑', unavailable: false },
		{ id: 3, name: 'Amount of ETH ↓', unavailable: false },
		{ id: 4, name: 'Score ↓', unavailable: false }
	];

	let selectedPerson = people[0];

	const card1 = {
		type: 1,
		label: 'in your wallet',
		amount: 12.3456,
		asset: 'ETH',
		value: '$10,123.45'
	};

	const card2 = {
		type: 2,
		label: 'realized gains',
		sign: '+',
		amount: '$3,456'
	};
	const card3 = {
		type: 2,
		label: 'unrealized gains',
		sign: '-',
		amount: '$1,456'
	};

	const toggleAddTrans = () => {
		addTransVisible = !addTransVisible;
		console.log('click');
	};
</script>

<section
	class="overflow-fix xs:w-iphone12prow h-iphone13proh border-slate-900 xs:border-8 border-0 bg-white mx-auto xs:rounded-4xl xs:overflow-hidden xs:relative xs:shadow-3xl xs:mt-10 mt-0"
>
	<div
		class="hidden xs:flex justify-between absolute left-0 top-0 right-0 z-10 bg-slate-700 h-11 text-white font-medium"
	>
		<div class="w-28 flex items-center pl-6"><span>20:36</span></div>
		<div class="w-36 h-7 bg-slate-900 rounded-b-xl" />
		<div class="w-28 flex items-center justify-end pr-6">
			<img src={wifi} alt="Wifi icon" class="mr-2" />
			<img src={battery} alt="Battery icon" />
		</div>
	</div>

	<div class="phone xs:absolute top-10 bottom-0 right-0 left-0 overflow-x-hidden overflow-y-auto">
		<section class="bg-slate-50 p-5 border-b border-slate-200">
			<Topbar />
			<Card cardData={card1} styles="mb-5" />
			<div class="grid grid-cols-2 gap-5">
				<Card cardData={card2} />
				<Card cardData={card3} />
			</div>
		</section>

		<section class="">
			<div class="grid grid-cols-2 gap-5 items-center p-5 pt-10">
				<h3 class="text-slate-700 text-sm font-medium">Your ETH Stacks:</h3>
				<Listbox
					value={selectedPerson}
					on:change={(e) => (selectedPerson = e.detail)}
					class="text-xs relative"
				>
					<ListboxButton class="text-slate-500 bg-slate-100 px-3 py-2 rounded-xl w-full">
						<div class="flex">
							<span class="w-13 mr-1">Order by:</span>
							<div
								class="w-20 h-4 font-bold text-ellipsis overflow-hidden white-space:nowrap text-left"
							>
								{selectedPerson.name}
							</div>
						</div>
					</ListboxButton>
					<ListboxOptions
						class="absolute w-full px-5 pt-5 bg-white rounded-xl drop-shadow text-sm text-slate-600"
					>
						{#each people as person (person.id)}
							<ListboxOption value={person} disabled={person.unavailable} class="mb-5">
								{person.name}
							</ListboxOption>
						{/each}
					</ListboxOptions>
				</Listbox>
			</div>
			<List />
		</section>
	</div>
	<div class="absolute bottom-5 left-5 right-5">
		<Button type="one" on:toggleAdd={toggleAddTrans} />
	</div>
	{#if addTransVisible}
		<div
			class="absolute rounded-3xl p-5 bottom-0 left-0 right-0 bg-white shadow-up"
			transition:fly={{ y: 200, duration: 500 }}
		>
			<h3 class="text-slate-700 font-bold border-b border-slate-200 pb-5 mb-5">
				Add a transaction
			</h3>
			<form class="mb-14">
				<fieldset class="mb-7">
					<legend class="uppercase text-slate-400 font-medium text-xs mb-2">Transaction type</legend
					>
					<div class="flex items-center justify-start">
						<Radiobutton
							label="ETH bought"
							name="transaction_type"
							id="transaction_type_1"
							value="ETH bought"
							checked
						/>
						<Radiobutton
							label="ETH sold"
							name="transaction_type"
							id="transaction_type_2"
							value="ETH sold"
						/>
					</div>
				</fieldset>
				<fieldset class="mb-7">
					<div>
						<legend>
							<label for="amount" class="uppercase text-slate-400 font-medium text-xs mb-2 block"
								>Transaction date:</label
							>
						</legend>
						<div class="relative w-full h-12">
							<input
								type="string"
								id="date"
								name="date"
								placeholder="mm/dd/yyyy"
								class="border border-slate-300 rounded-lg overflow-hidden bg-white absolute inset-0 focus:ring-2 focus:outline-0 focus:ring-pink-400 p-3 text-slate-700"
							/>
						</div>
					</div>
				</fieldset>
				<fieldset class="mb-7">
					<div>
						<legend>
							<label for="amount" class="uppercase text-slate-400 font-medium text-xs mb-2 block"
								>Transaction amount:</label
							>
						</legend>
						<div class="relative w-full h-12">
							<input
								type="number"
								id="amount"
								name="amount"
								placeholder="Amount in ETH"
								class="border border-slate-300 rounded-lg overflow-hidden bg-white absolute inset-0 focus:ring-2 focus:outline-0 focus:ring-pink-400 p-3 text-slate-700"
							/>
							<div
								class="w-14 h-11.5 bg-slate-200 top-px right-px absolute rounded-r-lg flex items-center justify-center text-slate-400"
							>
								Ξ
							</div>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label for="amount" class="uppercase text-slate-400 font-medium text-xs mb-2 block"
							>Asset spot price (value of 1ETH in USD):</label
						>
						<div class="relative w-full h-12">
							<input
								type="number"
								id="price"
								name="price"
								placeholder="Value in USD"
								class="border border-slate-300 rounded-lg overflow-hidden bg-white absolute inset-0 focus:ring-2 focus:outline-0 focus:ring-pink-400 p-3 text-slate-700"
							/>
							<div
								class="w-14 h-11.5 bg-slate-200 top-px right-px absolute rounded-r-lg flex items-center justify-center text-slate-400"
							>
								$
							</div>
						</div>
					</div>
				</fieldset>
			</form>
			<div
				class="flex items-center justify-end bg-slate-50 -ml-5 -mb-5 -mr-5 p-5 border-t-2 border-slate-100"
			>
				<Button type="three" on:toggleAdd={toggleAddTrans} />
				<Button type="two" />
			</div>
		</div>
	{/if}
</section>

<style>
	.phone {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
		overflow-y: scroll;
	}

	.phone::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	@media only screen and (min-width: 440px) {
		.overflow-fix {
			transform: translateZ(0);
		}
	}

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

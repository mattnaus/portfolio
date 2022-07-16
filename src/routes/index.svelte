<script>
	export const prerender = true;
	import { fly } from 'svelte/transition';
	import Topbar from '$lib/topBar.svelte';
	import Card from '$lib/card.svelte';
	import Stacks from '$lib/stacks.svelte';
	import Radiobutton from '$lib/radiobutton.svelte';
	import Button from '$lib/button.svelte';
	import FieldsetInput from '$lib/fieldsetInput.svelte';

	import battery from '$lib/assets/battery.svg';
	import wifi from '$lib/assets/wifi.svg';

	let addTransVisible = false;

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

		<section>
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
							<ListboxOption
								value={person}
								disabled={person.unavailable}
								class="mb-5 cursor-pointer"
							>
								{person.name}
							</ListboxOption>
						{/each}
					</ListboxOptions>
				</Listbox>
			</div>
			<Stacks />
		</section>
	</div>
	<div class="absolute bottom-5 left-5 right-5">
		<Button
			type="one"
			on:toggleAdd={() => {
				addTransVisible = !addTransVisible;
			}}
		/>
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
				<FieldsetInput
					label="Transaction date:"
					input={{ id: 'date', name: 'date', type: 'string', placeholder: 'mm/dd/yyyy' }}
				/>
				<FieldsetInput
					label="Transaction amount:"
					input={{ id: 'amount', name: 'amount', type: 'number', placeholder: 'Amount in ETH' }}
					symbol="Ξ"
				/>
				<FieldsetInput
					label="Asset spot price (value of 1ETH in USD):"
					input={{ id: 'price', name: 'price', type: 'number', placeholder: 'Value in USD' }}
					symbol="$"
				/>
			</form>
			<div
				class="flex items-center justify-end bg-slate-50 -ml-5 -mb-5 -mr-5 p-5 border-t-2 border-slate-100"
			>
				<Button
					type="three"
					on:toggleAdd={() => {
						addTransVisible = !addTransVisible;
					}}
				/>
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
</style>

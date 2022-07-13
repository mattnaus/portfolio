<script>
	export const prerender = true;
	import Topbar from '$lib/topBar.svelte';
	import Card from '$lib/card.svelte';
	import arrowDown from '$lib/assets/arrow-down.svg';

	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from '@rgossiaux/svelte-headlessui';

	const people = [
		{ id: 1, name: 'ETH price ↓', unavailable: false },
		{ id: 2, name: 'ETH price ↑', unavailable: false },
		{ id: 3, name: 'Amount of ETH', unavailable: false }
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

<section class="bg-slate-50 p-5 border-b border-color-slate-200">
	<Topbar />
	<Card cardData={card1} styles="mb-5" />
	<div class="grid grid-cols-2 gap-5">
		<Card cardData={card2} />
		<Card cardData={card3} />
	</div>
</section>

<section class="p-5">
	<div class="grid grid-cols-2 gap-5 items-center">
		<h3 class="text-slate-700 text-sm font-medium">Your ETH Stacks:</h3>
		<Listbox
			value={selectedPerson}
			on:change={(e) => (selectedPerson = e.detail)}
			class="text-xs relative"
		>
			<ListboxButton class="text-slate-500 bg-slate-100 px-3 py-2 rounded-xl w-full">
				<div class="flex">
					<span class="w-13 mr-1">Order by:</span>
					<div class="w-20 h-4 font-bold text-ellipsis overflow-hidden white-space:nowrap">
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
</section>

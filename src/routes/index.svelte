<script>
	export const prerender = true;
	import Topbar from '$lib/topBar.svelte';
	import Card from '$lib/card.svelte';
	import List from '$lib/list.svelte';
	import plus from '$lib/assets/plus.png';

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
	class="w-iphone12prow h-iphone13proh border-slate-900 border-8 bg-white mx-auto rounded-4xl overflow-hidden relative shadow-3xl mt-10"
>
	<div
		class="flex justify-center absolute left-0 top-0 right-0 z-10 bg-slate-700 h-10 text-slate-50 font-medium"
	>
		<div class="grow flex items-center pl-8"><span>20:36</span></div>
		<div class="w-36 h-6 bg-slate-900 rounded-b-xl" />
		<div class="grow" />
	</div>

	<div class="phone absolute top-10 bottom-0 right-0 left-0 overflow-x-hidden overflow-y-auto">
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
	<button
		class="absolute bg-slate-900 text-white bottom-5 left-5 right-5 z-10 p-4 rounded-full shadow-3xl flex items-center justify-center"
	>
		<span>Add transactions</span>
		<span class="w-8 h-8 bg-pink-600 rounded-full ml-4 flex items-center justify-center">
			<img src={plus} alt="Plus" class="w-3 h-3" />
		</span>
	</button>
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
</style>

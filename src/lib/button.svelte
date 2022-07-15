<script>
	import plus from '$lib/assets/plus.png';
	import { createEventDispatcher } from 'svelte';

	export let type;
	const dispatch = createEventDispatcher();

	const toggleAddTrans = () => {
		dispatch('toggleAdd');
	};
</script>

{#if type === 'one'}
	<button
		class="bg-slate-900 text-white  p-4 rounded-full shadow-3xl flex items-center justify-center w-full"
		on:click={toggleAddTrans}
	>
		<span>Add transactions</span>
		<span class="w-8 h-8 bg-pink-600 rounded-full ml-4 flex items-center justify-center">
			<img src={plus} alt="Plus" class="w-3 h-3" />
		</span>
	</button>
{:else if type === 'two'}
	<button
		class="rounded-full pink-drop bg-pink-500 text-white py-4 px-8 flex items-center justify-center"
	>
		Add</button
	>
{:else if type === 'three'}
	<button class="mr-5 text-slate-500" on:click={toggleAddTrans}>Cancel & close</button>
{/if}

<style>
	.pink-drop {
		box-shadow: 0px 4px 0px 0px rgba(190, 24, 93, 0.2);
	}
</style>

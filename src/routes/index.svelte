<script context="module">
	export const prerender = true;
	import Topbar from '$lib/topBar.svelte';
</script>

<section class="bg-slate-200 p-5">
	<Topbar />
	<div class="p-5 bg-white border border-slate-200 rounded-xl">
		<label class="uppercase text-slate-400 text-xs mb-2 block">in your wallet</label>
		<p class="text-slate-800 text-3xl font-bold mb-2">
			12.3456 <span class="text-xl">ETH</span>
		</p>
		<p class="text-slate-700 text-lg font-medium">= $10,123,678</p>
	</div>
</section>

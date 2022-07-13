<script>
	export let score = 0;
</script>

<div class="flex items-center justify-center">
	<span class="w-1.5 h-2.5 {score <= -3 ? 'bg-rose-500' : 'bg-slate-200'} bg-slate-200 mr-1" />
	<span class="w-1.5 h-2.5 {score <= -2 ? 'bg-rose-500' : 'bg-slate-200'} bg-slate-200 mr-1" />
	<span class="w-1.5 h-2.5 {score <= -1 ? 'bg-rose-500' : 'bg-slate-200'} bg-slate-200 mr-1" />
	<span class="h-5 border-l border-slate-300 mr-1" />
	<span class="w-1.5 h-2.5 {score >= 1 ? 'bg-green-600' : 'bg-slate-200'} bg-slate-200 mr-1" />
	<span class="w-1.5 h-2.5 {score >= 2 ? 'bg-green-600' : 'bg-slate-200'} bg-slate-200 mr-1" />
	<span class="w-1.5 h-2.5 {score >= 3 ? 'bg-green-600' : 'bg-slate-200'} bg-slate-200 mr-1" />
</div>

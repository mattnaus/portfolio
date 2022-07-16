<script>
	export let label = '';
	export let name = '';
	export let id = '';
	export let value = '';
	export let checked = false;
</script>

<label for={id} class="uppercase relative text-slate-700 flex items-center mr-5 cursor-pointer">
	<input type="radio" {name} {id} {value} class="hidden h-0 w-0" {checked} />
	<span class="check mr-2 block w-7 h-7 border-2 border-slate-200 rounded-full" />
	{label}
</label>

<style>
	/* On mouse-over, add a grey background color */
	label:hover input ~ .check {
		@apply bg-slate-200;
	}

	/* When the radio button is checked, add a blue background */
	label input:checked ~ .check {
		@apply bg-pink-400 border-0;
	}

	/* Create the indicator (the dot/circle - hidden when not checked) */
	.check:after {
		content: '';
		@apply absolute hidden;
	}

	/* Show the indicator (dot/circle) when checked */
	label input:checked ~ .check:after {
		display: block;
	}

	/* Style the indicator (dot/circle) */
	label .check:after {
		@apply top-2 left-2 h-3 w-3 rounded-full bg-white;
	}
</style>

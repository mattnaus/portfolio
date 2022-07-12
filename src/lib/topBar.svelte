<script>
	import avatar from '$lib/assets/Avatar.svg';
	import burger from '$lib/assets/burger.svg';
</script>

<div class="flex items-center justify-between mb-10">
	<a href="#" class="text-sm text-slate-500 flex w-1/3">
		<img src={`/arrow-left.svg`} alt="Arrow left" class="mr-2" />
		HOME
	</a>
	<div class="w-1/3">
		<img src={avatar} alt="Avatar placeholder" class="m-auto" />
	</div>
	<div class="w-1/3">
		<img src={burger} alt="Burger" class="ml-auto" />
	</div>
</div>

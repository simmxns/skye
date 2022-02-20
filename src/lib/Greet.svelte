<script>
	let name = "Guess"
	function getName() {
		name = prompt()
		name = null || name;
	}
</script>

<div class="font-light text-2xl">
	<p class="block">Hi, <b class="font-medium" on:click={getName}>{name}</b> 👋</p>
</div>
<script>
	import Header from '@lib/Header.svelte'
	import Greet from '@lib/Greet.svelte'
	import Card from '@lib/Card.svelte'
	import Title from '@lib/Title.svelte';
</script>

<div id="app">
	<Header />
	<div class="pl-5 mt-5">
		<Greet />
		<Title />
	</div>
	<Card />
</div>

<style lang="postcss" global>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	#app {
		@apply 
			font-poppins
			w-full 
			h-full 
			aspect-[9/16] 
			rounded-lg 
			border 
			border-solid
			border-black
			bg-degrade
			bg-center
			bg-no-repeat
			bg-cover
			text-gray-200;
	}
</style>
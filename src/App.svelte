<script>
	import Header from '@lib/Header.svelte'
	import svg from '@assets/bg.svg'
</script>

<div id="app">
	<Header />
</div>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	#app {
		@apply 
			font-apple 
			w-full 
			h-full 
			aspect-[9/16] 
			rounded-lg 
			border 
			border-solid
			border-black
			bg-degrade
			bg-no-repeat
			bg-fixed;
	}
</style>
<script>
	import E from '@helpers/getElement'
	import { getX } from '@helpers/getX'
	import { onMount } from 'svelte'
	import { setScrollIndex } from '@helpers/weekPosition'
	
	onMount(() => {
		const index = E('#index')
		const cards = E('#cards')
	})

	function onClickHandler(param) {
		getX(event, index)
		setScrollIndex(param, cards)
	}
</script>

<div class="days">
	<div class="lettersWrapper">
		<p class="letters">S</p>
		<p class="letters">M</p>
		<p class="letters">T</p>
		<p class="letters">W</p>
		<p class="letters">T</p>
		<p class="letters">F</p>
		<p class="letters">S</p>
	</div>
	<button id="index" />
	<div class="daysWrapper">
		<button on:click={() => onClickHandler('sunday')} class="x" id="sunday" />
		<button on:click={() => onClickHandler('monday')} class="x" id="monday" />
		<button on:click={() => onClickHandler('tuesday')} class="x" id="tuesday" />
		<button on:click={() => onClickHandler('wednesday')} class="x" id="wednesday" />
		<button on:click={() => onClickHandler('thursday')} class="x" id="thursday" />
		<button on:click={() => onClickHandler('friday')} class="x" id="friday" />
		<button on:click={() => onClickHandler('saturday')} class="x" id="saturday" />
	</div>
</div>

<style lang="postcss">
	.letters {
		@apply w-[42px] h-[22px] py-1 px-4 grid place-content-center;
	}
	#index {
		@apply bg-indigo-500 opacity-100 py-1 px-4 bottom-0 rounded-2xl w-[42px] h-[22px] absolute left-0 z-10;
		transition: left 0.55s ease;
	}
	.days {
		@apply flex items-center justify-center w-[90%] mb-5 relative;
	}
	.x {
		@apply bg-indigo-400 opacity-50 py-1 px-4 rounded-full w-[42px] h-[22px] hover:opacity-50 hover:bg-indigo-500;
	}
	.lettersWrapper {
		@apply flex justify-between text-xs absolute bottom-0 w-full z-20  pointer-events-none;
	}
	.daysWrapper {
		@apply flex justify-between absolute bottom-0 w-full;
	}
</style>

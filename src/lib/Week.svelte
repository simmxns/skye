<script>
	let current = 'saturday'
	function setCurrent(curr) {
		current = curr
	}
</script>

<div class="days flex justify-between w-full mb-5 text-xs">
	<button
		class="sunday {current === 'sunday' ? 'selected' : ''}"
		on:click={() => setCurrent('sunday')}
	>
		<p>S</p>
	</button>
	<button
		class="monday {current === 'monday' ? 'selected' : ''}"
		on:click={() => setCurrent('monday')}
	>
		M
	</button>
	<button
		class="tuesday {current === 'tuesday' ? 'selected' : ''}"
		on:click={() => setCurrent('tuesday')}
	>
		T
	</button>
	<button
		class="wednesday {current === 'wednesday' ? 'selected' : ''}"
		on:click={() => setCurrent('wednesday')}
	>
		W
	</button>
	<button
		class="thursday {current === 'thursday' ? 'selected' : ''}"
		on:click={() => setCurrent('thursday')}
	>
		T
	</button>
	<button
		class="friday {current === 'friday' ? 'selected' : ''}"
		on:click={() => setCurrent('friday')}
	>
		F
	</button>
	<button
		class="saturday {current === 'saturday' ? 'selected' : ''}"
		on:click={() => setCurrent('saturday')}
	>
		S
	</button>
</div>

<style lang="postcss">
	.days {
		@apply flex items-center justify-evenly flex-row w-[88%] h-10 shadow-slate-900 rounded-md;
	}
	.sunday,
	.monday,
	.tuesday,
	.wednesday,
	.thursday,
	.friday,
	.saturday {
		@apply bg-indigo-400 opacity-50 py-1 px-4 rounded-full hover:opacity-100 hover:bg-indigo-500;
	}
	.selected {
		@apply bg-indigo-500 opacity-100;
		/* box-shadow: 0px 0px 0px 3px rgb(105 117 225); */
	}
	.letter {
		@apply opacity-50
	}
</style>

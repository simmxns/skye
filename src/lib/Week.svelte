<script>
	let current = 'sun'
	function setCurrent(curr) {
		current = curr
	}
</script>

<div class="flex justify-between w-full mb-5 px-7 text-xs">
	<button
		class="sun"
		class:selected={current === 'sun'}
		on:click={setCurrent('sun')}
	>
		S
	</button>
	<button
		class="mon"
		class:selected={current === 'mon'}
		on:click={setCurrent('mon')}
	>
		M
	</button>
	<button
		class="tue"
		class:selected={current === 'tue'}
		on:click={setCurrent('tue')}
		>
		T
	</button>
	<button
		class="wed"
		class:selected={current === 'wed'}
		on:click={setCurrent('wed')}
	>
		W
	</button>
	<button
		class="thu"
		class:selected={current === 'thu'}
		on:click={setCurrent('thu')}
	>
		T
	</button>
	<button
		class="fri"
		class:selected={current === 'fri'}
		on:click={setCurrent('fri')}
	>
		F
	</button>
	<button
		class="sat"
		class:selected={current === 'sat'}
		on:click={setCurrent('sat')}
	>
		S
	</button>
</div>

<style>
	.sun,.mon,.tue,.wed,.thu,.fri,.sat {
		opacity: 0.2;
	}
	.selected {
		opacity: 1;
	}
</style>

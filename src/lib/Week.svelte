<script>
  let current = "saturday";
</script>

<div class="days flex justify-between w-full mb-5 px-7 text-xs">
  <button
    class="sunday {current === 'sunday' ? 'selected' : ''}"
	on:click="{() => current = 'sunday'}"
  >
    S
  </button>
  <button
    class="monday {current === 'monday' ? 'selected' : ''}"
	on:click="{() => current = 'monday'}"
  >
    M
  </button>
  <button
    class="tuesday {current === 'tuesday' ? 'selected' : ''}"
	on:click="{() => current = 'tuesday'}"
  >
    T
  </button>
  <button
    class="wednesday {current === 'wednesday' ? 'selected' : ''}"
	on:click="{() => current = 'wednesday'}"
  >
    W
  </button>
  <button
    class="thursday {current === 'thursday' ? 'selected' : ''}"
	on:click="{() => current = 'thursday'}"
  >
    T
  </button>
  <button
    class="friday {current === 'friday' ? 'selected' : ''}"
	on:click="{() => current = 'friday'}"
  >
    F
  </button>
  <button
    class="saturday {current === 'saturday' ? 'selected' : ''}"
	on:click="{() => current = 'saturday'}"
  >
    S
  </button>
</div>

<style lang="postcss">
	.days{
		@apply flex items-center justify-evenly flex-row w-[88%] h-10 shadow-slate-900 rounded-md;
	}
  .sunday,
  .monday,
  .tuesday,
  .wednesday,
  .thursday,
  .friday,
  .saturday {
    opacity: 0.5;
	@apply bg-indigo-400;
	@apply py-1 px-3 rounded-full;

  }

  .sunday:hover,
  .monday:hover,
  .tuesday:hover,
  .wednesday:hover,
  .thursday:hover,
  .friday:hover,
  .saturday:hover {
	@apply bg-indigo-500;
	@apply py-1 text-xs px-4 rounded-full;
	box-shadow: 0px 0px 0px 3px rgb(105 117 225);
    opacity: 1;

	
	
  }
  .selected {
    opacity: 1;
	/* font-size: large; */
	@apply bg-indigo-400;
	@apply py-1 px-4 rounded-full;
	box-shadow: 0px 0px 0px 3px rgb(105 117 225);
  }
  .selected:hover {
	/* font-size: large; */
  }
</style>

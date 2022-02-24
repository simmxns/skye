<script>
	let current = 'sunday'
	import { onMount } from "svelte";
	onMount(() => {
		const index = document.querySelector("#index");
		
	});
	function setCurrent(curr) {
		current = curr
	}
	
	const setX = (e) => {
		const x = e.target.offsetLeft; 
		index.style.setProperty("left", `${x}px`);
		console.log(e);
	};
	function clickHanler(param){
		setX(event)
		setCurrent(param)
	}
</script>

<div class="days">
	<button on:click={() => clickHanler("sunday")} class="x {current === 'sunday' ? 'selected' : ''}" id="sunday"><p>SU</p></button>
	<button on:click={() => clickHanler("monday")} class="x {current === 'monday' ? 'selected' : ''}" id="monday"><p>MO</p></button>
	<button on:click={() => clickHanler("tuesday")} class="x {current === 'tuesday' ? 'selected' : ''}" id="tuesday"><p>TU</p></button>
	<button on:click={() => clickHanler("wednesday")} class="x {current === 'wednesday' ? 'selected' : ''}" id="wednesday"><p>WE</p></button>
	<button on:click={() => clickHanler("thursday")} class="x {current === 'thursday' ? 'selected' : ''}" id="thursday"><p>TH</p></button>
	<button on:click={() => clickHanler("friday")} class="x {current === 'friday' ? 'selected' : ''}" id="friday"><p>FR</p></button>
	<button on:click={() => clickHanler("saturday")} class="x {current === 'saturday' ? 'selected' : ''}" id="saturday"><p>SA</p></button>
	<button id="index" />
</div>

<style lang="postcss">
	p{
		@apply flex items-center justify-center;
		pointer-events: none
		/* z-index: 2 ; */

	}
  #index {
	  @apply bg-indigo-500 opacity-100 py-1 px-4 rounded-2xl;
	  position: absolute;
	  width: 45.77px;
	  height: 24px;
	  left: 0px;
	  transition: left 0.5s cubic-bezier(0.950, 0.050, 0.795, 0.035);
	  z-index: 0;
  }
  .days {
    @apply flex items-center flex-row w-[88%] h-10 shadow-slate-900 rounded-md justify-between mb-5 text-xs;
    position: relative;
  }
  .x {
    @apply bg-indigo-400 opacity-50 py-1 px-4 rounded-full hover:opacity-50 hover:bg-indigo-500;
	width: 45.77px;
	height: 24px;
	z-index: 1;

  }
  .selected {
	  transition: background-color 3s  cubic-bezier(0.950, 0.050, 0.795, 0.035);
    @apply bg-indigo-500 opacity-100;
    /* box-shadow: 0px 0px 0px 3px rgb(105 117 225); */
  }
</style>


<!-- 
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
</div> -->
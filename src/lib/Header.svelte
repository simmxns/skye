<script>
	import logo from '@assets/logo.png'
	const user = { loggedIn: false }

	function logger() {
		user.loggedIn = !user.loggedIn
	}
</script>

<header class="w-full pt-4 px-5">
	<nav class="flex items-center justify-between">
		<div class="cursor-pointer flex items-center px-4 rounded bg-black/10 h-10 shadow-lg">
			<img src={logo} alt="" class="w-[25px] h-[25px] rounded mr-3" />
			<h1>Weather</h1>
		</div>
		<div class="cursor-pointer flex items-center justify-center px-4 rounded bg-black/10 w-10 h-10 shadow-lg text-lg">
			<i class='bx bxs-user'></i>
		</div>
	</nav>
</header>

		<!--<ul class="flex align-center">
			<li class="mr-4"><a href="/map">Map</a></li>
			<li><a href="/docs">API</a></li>
		</ul>
		<div class="flex">
		<button class="text-cyan-500 text-bold mr-4">Log In</button>
		{#if user.loggedIn}
			<button 
				on:click={logger}
				class="w-[5.2rem] p-1 px-3 bg-cyan-500 text-white rounded-md"
			>
				Log Out
			</button>
		{:else}
			<button 
				on:click={logger}
				class="w-[5.2rem] p-1 px-3 bg-cyan-500 text-white rounded-md"
			>
				Sign Up
			</button>
		{/if}
		</div>-->

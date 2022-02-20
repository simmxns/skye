<script>
	import logo from '@assets/logo.png'

	const user = { loggedIn: false }

	function logger() {
		user.loggedIn = !user.loggedIn
	}
</script>

<header class="w-full py-2 px-3">
	<nav class="flex items-center justify-between">
		<div class="flex items-center justify-center rounded bg-black/10 w-9 h-9 shadow-lg">
			<i class='bx bx-chevron-left'></i>
		</div>
		<div class="flex items-center justify-center rounded bg-black/10 w-9 h-9 shadow-lg">
			<i class='bx bxs-user'></i>
		</div>
	</nav>
</header>
<!--
		<img src={logo} alt="" class="w-[25px] h-[25px]" />
		<ul class="flex align-center">
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
		</div>
-->


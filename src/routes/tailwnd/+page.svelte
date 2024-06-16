<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	const options = [
		{label: "option one"},
		{label: "option two"},
		{label: "option three"},
		{label: "option four"},
		{label: "option five"},
		{label: "option six"},
	]

	
	let mobile_menu = false;
	$:menu_class = mobile_menu ? "open" : "";

	function toggleMenu() {
		mobile_menu = !mobile_menu;
	}

</script>

<nav class="sticky top-0 bg-gradient-to-r from-slate-700 to-slate-500 flex items-center w-full">
	<div class="md:flex hidden">
	{#each options as item}
		<a class={`text-xl relative flex text-zinc-300 p-2 h-full hover:text-zinc-100 hover:bg-white/5
			transition-colors ease-in-out group`}>
			<span>{item.label}</span>
			<div class="group-hover:block hidden absolute top-full right-0 bg-slate-500 whitespace-nowrap p-2">
				<span>suboption</span>
			</div>
		</a>
	{/each}
	</div>
	<div class="md:hidden text-zinc-300 text-xl p-2 ml-auto flex items-center">
		<button class={`group peer ${menu_class}`} on:click={toggleMenu}>
			<div class="bg-zinc-300 rounded-full top-0 h-1 w-8 group-open:rotate-45 group-open:top-2 transition-all relative"></div>
			<div class="bg-zinc-300 rounded-full h-1 w-8 mt-1 opacity-100 group-open:opacity-0 transition-all"></div>
			<div class="bg-zinc-300 rounded-full top-0 h-1 w-8 mt-1 group-open:-rotate-45 group-open:-top-2 transition-all relative"></div>
		</button>
		<div class="peer-open:block hidden absolute top-full bg-gradient-to-r from-slate-700 to-slate-500 w-full left-0">Mobile menu</div>
	</div>

</nav>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>
<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p><p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p><p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p><p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p><p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p><p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p><p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>
<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

<p>
	elo
</p>

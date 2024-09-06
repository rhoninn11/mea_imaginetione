
<script lang="ts">
	import MenuOption from './MenuOption.svelte';

	// in future it can be done automativally checking routes in src/routes
    const options = [
		{label: "home", href: "/"},
		{label: "about", href: "/about"},
		{label: "twnd", href: "/twnd"},
		{label: "sverdle", href: "/sverdle"},
		{label: "nodes", href: "/nodes"},
		{label: "tunnel", href: "/tunnel"},
	]
	
	let mobile_menu = false;
	$:menu_class = mobile_menu ? "open" : "";

	function toggleMenu() {
		mobile_menu = !mobile_menu;
	}
	
</script>

<nav class="sticky top-0 bg-background flex items-center w-full">
	<div class="md:flex hidden">
	{#each options as item}
		<MenuOption href={item.href} label={item.label}>
			<span>suboption</span>
		</MenuOption>
	{/each}
	</div>
	<div class="md:hidden text-foreground text-xl p-2 ml-auto flex items-center">
		<button class={`group peer ${menu_class}`} on:click={toggleMenu}>
			<div class="bg-foreground rounded-full top-0 h-1 w-8 group-open:rotate-45 group-open:top-2 transition-all relative"></div>
			<div class="bg-foreground rounded-full h-1 w-8 mt-1 opacity-100 group-open:opacity-0 transition-all"></div>
			<div class="bg-foreground rounded-full top-0 h-1 w-8 mt-1 group-open:-rotate-45 group-open:-top-2 transition-all relative"></div>
		</button>
		<div class="peer-open:block hidden absolute top-full bg-background w-full left-0 border p-2">Mobile menu</div>
	</div>

</nav>
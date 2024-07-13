
<script lang="ts">
	import { page } from '$app/stores';

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
	
	const tw_selected = "bg-foreground text-background"
	function link_active_tw(url: string, active_url: string) {
		let this_page_url = active_url
		return url === this_page_url ? tw_selected : ""
	}

	$: active_page = $page.url.pathname

</script>

<nav class="sticky top-0 bg-background flex items-center w-full">
	<div class="md:flex hidden">
	{#each options as item}
		<a class={`text-xl relative flex text-foreground p-2 h-full hover:bg-accent hover:text-foreground
			ease-in-out group ${link_active_tw(item.href, active_page)} transition-colors`} href={item.href}>
			<span>{item.label}</span>
			<div class="group-hover:block hidden absolute top-full right-0 text whitespace-nowrap p-2 border">
				<span>suboption</span>
			</div>
		</a>
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
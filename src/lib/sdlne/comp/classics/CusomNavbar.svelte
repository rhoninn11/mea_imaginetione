
<script lang="ts">
	import { page } from '$app/stores';

	// <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
	// 			<a href="/">Home</a>
	// 		</li>
	// 		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
	// 			<a href="/about">About</a>
	// 		</li>
	// 		<li aria-current={$page.url.pathname === '/tailwnd' ? 'page' : undefined}>
	// 			<a href="/tailwnd">tailwnd</a>
	// 		</li>
	// 		<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
	// 			<a href="/sverdle">Sverdle</a>
	// 		</li>
	// 		<li aria-current={$page.url.pathname === '/nodes' ? 'page' : undefined}>
	// 			<a href="/nodes">Nodes</a>
	// 		</li>
	// 		<li aria-current={$page.url.pathname === '/tunnel' ? 'page' : undefined}>
	// 			<a href="/tunnel">Tunnel</a>
	// 		</li>

    const options = [
		{label: "home", href: "/"},
		{label: "option two", href: "/"},
		{label: "twnd", href: "/twnd"},
		{label: "option four", href: "/"},
		{label: "option five", href: "/"},
		{label: "option six", href: "/"},
	]
	
	let mobile_menu = false;
	$:menu_class = mobile_menu ? "open" : "";

	function toggleMenu() {
		mobile_menu = !mobile_menu;
	}
	
	const tw_selected = "bg-slate-800"
	function link_active_tw(url: string) {
		let this_page_url = $page.url.pathname
		return url === this_page_url ? tw_selected : ""
	}


</script>

<nav class="sticky top-0 bg-slate-700 flex items-center w-full">
	<div class="md:flex hidden">
	{#each options as item}
		<a class={`text-xl relative flex text-zinc-300 p-2 h-full hover:text-zinc-100 hover:bg-white/5
			ease-in-out group ${link_active_tw(item.href)} transition-colors`} href={item.href}>
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
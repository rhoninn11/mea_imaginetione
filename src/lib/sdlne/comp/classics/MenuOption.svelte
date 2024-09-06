
<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = "/"
	export let label: string = "/"


	const tw_selected = "border-dotted border-4 border-foreground"
	function link_active_tw(url: string, active_url: string) {
		let this_page_url = active_url
		return url === this_page_url ? tw_selected : ""
	}

	$: active_page = $page.url.pathname

</script>


<a class={`text-xl border-foreground relative flex text-foreground p-2 pt-3 h-full hover:bg-accent hover:text-foreground
	ease-in-out group ${link_active_tw(href, active_page)} transition-colors`} {href}>
	<span>{label}</span>
	<div class="group-hover:block hidden absolute top-full left-0 text whitespace-nowrap p-2 border">
		<slot />
	</div>
</a>

<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import { ModeWatcher } from 'mode-watcher';

	import CusomNavbar from '$lib/sdlne/comp/classics/CusomNavbar.svelte';
</script>

<div class="flex flex-col min-h-[100vh] bg-background">
	<div>
		<!-- <Header/> -->
		<CusomNavbar/>
	</div>

	<main class="text-foreground">
		<slot></slot>
	</main>
	<ModeWatcher/>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>



<style>

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
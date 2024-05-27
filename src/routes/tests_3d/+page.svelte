<svelte:head>
	<title>tests_3d</title>
	<meta name="description" content="tree js playground" />
</svelte:head>

<script lang='ts'>
	import { Canvas } from '@threlte/core';
	import type { Size } from '@threlte/core';
	// import Scene from 'sdlne/basic_scene/Scene.svelte'
	import Scene from 'sdlne/xr_scene/Scene.svelte'
    import { VRButton } from '@threlte/xr';
	import CountButton from 'sdlne/components/CountButton.svelte';

	let general_size: Size = {width: 500, height: 500}
	let is_vr = true

	let count = 0;
	$: items_repr = Array(count).fill("click");

    function handleClick() {
        count += 1;
    }
</script>


<div class="text-column">
	<!-- <CountButton/> -->
	<button on:click={handleClick}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
	<Canvas size={{width: 500, height: 500 }}>
		<Scene />
	</Canvas>
	{#if is_vr}
		<VRButton/>
	{/if}
	
	{#each items_repr as item}
	<p>
		jakiś prosty tekst {item}
	</p>
	{/each}

	
</div>

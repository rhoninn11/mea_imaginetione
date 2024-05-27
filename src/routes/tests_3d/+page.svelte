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

	const resolution = 512*2;
	let size: Size = {width: resolution, height: resolution}
	let is_vr = true

	let count = 0;
	$: items_repr = Array(count).fill("click");

    function set_count(cnt: number) {
        count = cnt
    }
</script>


<div class="text-column">
	<CountButton notify={set_count}/>
	<Canvas {size}>
		<Scene />
	</Canvas>
	{#if is_vr}
		<VRButton/>
	{/if}
	
</div>

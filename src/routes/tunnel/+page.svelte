<svelte:head>
	<title>tests_3d</title>
	<meta name="description" content="tree js playground" />
</svelte:head>

<script lang='ts'>
	import { Canvas } from '@threlte/core';
	import type { Size } from '@threlte/core';

	// import BasicScene from '$lib/sdlne/scenes/BasicScene.svelte'
	import TunelScene from '$lib/sdlne/scenes/SceneForTunner.svelte'
    import { VRButton } from '@threlte/xr';
	import CountButton from '$lib/sdlne/comp/classics/CountButton.svelte';

	const resolution = 512*2;
	let width = resolution
	let height = resolution
	$: size = {width, height}
	let is_vr = true

	let count = 0;
	$: items_repr = Array(count).fill("click");
	// $: console.log("size is: ", width, " ", height)

    function set_count(cnt: number) {
        count = cnt
    }
</script>


<CountButton notify={set_count}/>
<div class="filling"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<Canvas {size}>
		<TunelScene />
	</Canvas>
</div>
{#if is_vr}
	<VRButton/>
{/if}

<style>
.filling {
	flex-grow: 1;
}
</style>

	

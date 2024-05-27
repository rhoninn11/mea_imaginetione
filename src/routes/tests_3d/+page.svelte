<svelte:head>
	<title>tests_3d</title>
	<meta name="description" content="tree js playground" />
</svelte:head>

<script lang='ts'>
	import { Canvas } from '@threlte/core';
	import type { Size } from '@threlte/core';
	import Scene from 'sdlne/basic_scene/Scene.svelte'

	let general_size: Size = {width: 500, height: 500}
</script>


<div class="text-column">
	<h1>Here will be some experimention with tree in svelte</h1>

	<Canvas size={{width: 500, height: 500 }}>
		<Scene />
	</Canvas>
	
</div>

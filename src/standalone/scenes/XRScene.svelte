<script>
	import { T, useTask } from "@threlte/core";
	import { spring } from "svelte/motion";
	import { interactivity } from "@threlte/extras";
	import {
		useTexture,
		RoundedBoxGeometry,
		OrbitControls,
	} from "@threlte/extras";
	import { XR } from "@threlte/xr";
	import textture_file from "$lib/assets/icon.png";
	import Nav2D from "sdlne/components/Nav2D.svelte";
	import SplineCurve from "sdlne/components/SplineCurve.svelte";
	import { nodes } from "sdlne/stores/nodes";
	import { mouse_world_space } from "sdlne/stores/NavStore";

	import MovableElement from "sdlne/components/MovableElement.svelte";
	import MultipleSplines from "sdlne/components/MultipleSplines.svelte";

	interactivity();
	const obj_scale = spring(1);

	const generated_image = useTexture(textture_file);
	// const generated_image = undefined
	let rotation = 0;
	let phase = 0;
	const radius = 1;

	$: pos_on_circle = {
		x: Math.cos(phase) * radius,
		y: Math.sin(phase) * radius,
	};

	useTask((delta) => {
		rotation += delta;
		phase += delta;
	});
</script>

<XR />

<T.AmbientLight />

<T.DirectionalLight position.y={10} position.z={10} />

<Nav2D></Nav2D>

<MultipleSplines/>

<T.Mesh position.y={1.8} rotation.x={rotation} rotation.y={rotation}>
	<RoundedBoxGeometry args={[0.2, 0.2, 0.2]} />
	<T.MeshStandardMaterial color="orange" />
</T.Mesh>

{#each $nodes as pos, i}
	<MovableElement {pos} {rotation} update_pos={() => nodes.modify_pos(i)}/>
{/each}

<T.Mesh scale={0.25} position.y={1.8+pos_on_circle.y} position.z={pos_on_circle.x} position.x={1}>
	<T.BoxGeometry args={[2, 2, 2]} />
	{#if $generated_image}
		<T.MeshBasicMaterial map={$generated_image} />
	{:else}
		<T.MeshBasicMaterial color="hotpink" />
	{/if}
</T.Mesh>

<T.Mesh>
	<T.CylinderGeometry args={[3, 0.01]} />
	<T.MeshStandardMaterial color="turquoise" />
</T.Mesh>

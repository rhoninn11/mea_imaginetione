<script lang="ts">
	import { T, useTask } from "@threlte/core";
	import { spring } from "svelte/motion";
	import { interactivity } from "@threlte/extras";
	import {
		useTexture,
		RoundedBoxGeometry,
		OrbitControls,
	} from "@threlte/extras";
	import { XR, Hand, Controller, type XRHandEvent, type XRControllerEvent } from '@threlte/xr'
	import textture_file from "$lib/assets/img/icon.png";
	import Nav2D from "$lib/sdlne/comp/3d/Nav2D.svelte";
	import SplineCurve from "$lib/sdlne/comp/3d/SplineCurve.svelte";
	import { nodes } from "$lib/sdlne/stores/nodes";
	import { mouse_world_space } from "$lib/sdlne/stores/NavStore";

	import MovableElement from "$lib/sdlne/comp/3d/MovableElement.svelte";
	import MultipleSplines from "$lib/sdlne/comp/3d/MultipleSplines.svelte";
	import ShadedElement from "$lib/sdlne/comp/3d/ShadedElement.svelte";
	import NeonTunnel from "$lib/sdlne/comp/3d/NeonTunnel.svelte";
	import XrControls from "$lib/sdlne/comp/xr/XrControls.svelte";


    const handleEvent = (event: XRHandEvent, name: string) => {
        console.log(name, 'Hand', event)
    }

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

<XrControls/>

<T.DirectionalLight position.y={10} position.z={10} />

<Nav2D></Nav2D>

<MultipleSplines/>

<T.Mesh position.y={1.8} rotation.x={rotation} rotation.y={rotation}>
	<RoundedBoxGeometry args={[0.2, 0.2, 0.2]} />
	<T.MeshStandardMaterial color="orange" />
</T.Mesh>

<ShadedElement position={[4, 5, 0]}/>

{#each $nodes as pos, i}
	<MovableElement {pos} id={i}
	 	update_pos={() => nodes.modify_pos(i)}
/>
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

<NeonTunnel/>

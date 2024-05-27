<script lang="ts">
	import { T } from "@threlte/core";
	import { useTask } from "@threlte/core";
	import { BoxGeometry, Mesh, Vector3 } from "three";

	const moveSpeed = 5;
	const zoomSpeed = 50;

	let up = 0;
	let down = 0;
	let left = 0;
	let right = 0;
	let zoom_out = 0;
	let zoom_in = 0;

	// $: console.log(`up: ${up}, down: ${down}, left: ${left}, right: ${right}`);

	function onKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case "s":
				down = 1;
				break;
			case "w":
				up = 1;
				break;
			case "a":
				left = 1;
				break;
			case "d":
				right = 1;
				break;
			case "q":
				zoom_out = 1;
				break;
			case "e":
				zoom_in = 1;
				break;
			default:
				break;
		}
	}

	function onKeyUp(e: KeyboardEvent) {
		switch (e.key) {
			case "s":
				down = 0;
				break;
			case "w":
				up = 0;
				break;
			case "a":
				left = 0;
				break;
			case "d":
				right = 0;
				break;
			case "q":
				zoom_out = 0;
				break;
			case "e":
				zoom_in = 0;
				break;
			default:
				break;
		}
	}

	
	// $: console.log(
	// 	`+++ vector value is x:${vec.x.toFixed(3)} y:${vec.y.toFixed(3)} z:${vec.z.toFixed(3)}`,
	// );
	
	let vec = new Vector3(0.0, 0.0, 0.0);
	useTask((delta) => {
		let delta_rl = (right - left) * moveSpeed * delta;
		let delta_ud = (up - down) * moveSpeed * delta;
		let delta_zoom = (zoom_in - zoom_out) * zoomSpeed * delta;
		vec.x += delta_rl;
		vec.y += delta_ud;
		vec.z += delta_zoom;

		// console.log(`+++ delta_rl:${delta_rl} delta_ud:${delta_ud}`);
	});
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup={onKeyUp} />

<T.Group position.y={vec.y} position.x={vec.x}>
	<T.Mesh position.y={2.8} scale={0.1}>
		<T.BoxGeometry />
		<T.MeshStandardMaterial color="blue" />
	</T.Mesh>
	<T.OrthographicCamera
		makeDefault
		position.y={1.8}
		position.z={100}
		zoom={160+vec.z}
	>
		<!-- <OrbitControls target={[0, 0, 0]} enablePan={false} enableZoom={false} /> -->
	</T.OrthographicCamera>
</T.Group>

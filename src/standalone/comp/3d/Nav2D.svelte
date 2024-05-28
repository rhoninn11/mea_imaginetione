<script lang="ts">
	import { T } from "@threlte/core";
	import { useTask } from "@threlte/core";
	import { BoxGeometry, Mesh, Vector3 } from "three";
	import { interactivity } from "@threlte/extras";
	import { nodes } from 'sdlne/stores/nodes'
	import { mouse_screan_space, mouse_world_space } from "sdlne/stores/NavStore";
	import { mouse_move_update, mouse_move_end } from "sdlne/stores/NavStore";

	interactivity();

	const moveSpeed = 5;
	const zoomSpeed = 50;

	let zoom_out = 0;
	let zoom_in = 0;
	let pan = 0;
	let mouse_pos = { x: 0, y: 0 };
	let pan_start = { x: 0, y: 0 };


	let vec_pre = new Vector3(0.0, 0.0, 0.0);
	let vec_post = new Vector3(0.0, 0.0, 0.0);

	function start_paning_motion() {
		if (pan) return;
		pan = 1;
		pan_start.x = $mouse_screan_space.x;
		pan_start.y = $mouse_screan_space.y;
	}

	function stop_paning_motion() {
		pan = 0;
		vec_pre.x = vec_post.x;
		vec_pre.y = vec_post.y;
	}


	function onKeyDown(e: KeyboardEvent) {
		console.log("key pressed", e.key);
		switch (e.key) {
			case "q":
				zoom_out = 1;
				break;
			case "e":
				zoom_in = 1;
				break;
			case " ":
				start_paning_motion()
				break;
			default:
				break;
		}
	}

	function onKeyUp(e: KeyboardEvent) {
		switch (e.key) {
			case "q":
				zoom_out = 0;
				break;
			case "e":
				zoom_in = 0;
				break;
			case " ":
				stop_paning_motion()
				break;
			default:
				break;
		}
	}

	function screanSpaceProbe(e: MouseEvent) {
		mouse_pos.x = e.clientX;
		mouse_pos.y = e.clientY;

		mouse_screan_space.set(mouse_pos);
	}
	function worldSpaceProbe(pointer: Vector3) {
		let ver_2d = { x: pointer.x, y: pointer.y };
		mouse_world_space.set(ver_2d);
	}
	function mouseMoveProbe() {
		if ($mouse_move_update){
			// console.log("+++ cos tu niby się powinno dziać");
			$mouse_move_update();
		}
	}
	function mouseEndProbe() {
		if ($mouse_move_end){
			// console.log("+++ a teraz nastąpił koniec");
			$mouse_move_end();
		}
	}

	function spaw_new_node() {
		nodes.add_new_pos();
	}


	
	useTask((delta: number) => {
		if (pan) {
			let delta_rl = (mouse_pos.x - pan_start.x) * 0.01;
			let delta_ud = (mouse_pos.y - pan_start.y) * 0.01;
			vec_post.x = vec_pre.x - delta_rl;
			vec_post.y = vec_pre.y + delta_ud;
		}
		
		if (zoom_in || zoom_out){
			let delta_zoom = (zoom_in - zoom_out) * zoomSpeed * delta;
			vec_post.z += delta_zoom;
			console.log(`+++ delta_zoom:${delta_zoom}`);
		}

		// console.log(`+++ delta_rl:${delta_rl} delta_ud:${delta_ud}`);
	});
</script>

<svelte:window 
	on:keydown|preventDefault={onKeyDown} 
	on:keyup={onKeyUp} 
	on:mousemove={screanSpaceProbe}
	on:mousemove={mouseMoveProbe}
	on:mouseup={mouseEndProbe}/>

<T.Group position.y={vec_post.y} position.x={vec_post.x}>
	<T.Mesh scale={0.1} position.z={20}>
		<T.BoxGeometry />
		<T.MeshStandardMaterial color="blue" />
	</T.Mesh>
	
	<T.Mesh visible={false}
		position.z={50}
		scale.z={0.1} scale.x={1000} scale.y={1000}
		on:dblclick={(e) => spaw_new_node()}
		on:pointermove={(e) => worldSpaceProbe(e.point)}
	>
		<T.BoxGeometry />
		<T.MeshStandardMaterial color="blue" />
	</T.Mesh>

	<T.OrthographicCamera
		makeDefault
		position.z={100}
		zoom={80+vec_post.z}
	>
		<!-- <OrbitControls target={[0, 0, 0]} enablePan={false} enableZoom={false} /> -->
	</T.OrthographicCamera>
</T.Group>

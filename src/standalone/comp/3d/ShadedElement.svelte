<script lang="ts">
    import { T } from "@threlte/core";
    import vertexShader from "$lib/assets/shaders/simple/vert.glsl?raw";
    import fragmentShader from "$lib/assets/shaders/simple/frag.glsl?raw";
    export let position = [0, 0, 0 ];
</script>

<T.Mesh {position}>
    <T.BoxGeometry args={[2, 1, 1]} />
	<T.ShaderMaterial 
        {vertexShader} {fragmentShader}
    />
</T.Mesh>

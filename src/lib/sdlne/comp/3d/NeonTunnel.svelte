<script lang="ts">
    import { T } from "@threlte/core";
    import { useTask } from "@threlte/core";

    function makeArr(elem_count: number, step_val: number) {
        var arr = [];
        for (var i = 0; i < elem_count; i++) {
            arr.push((step_val * i));
        }
        return arr;
    }
    function random_color() {
        let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    let depth_pos = makeArr(50, 0.2);
    
    let glob_pos = [3, -3, 0];
    let phase = 0;
    useTask((delta) => {
        phase += delta;
    });

    let simple_angle = 3.14*0.01
    $: glob_rot = [simple_angle + phase, phase, 0];
</script>

<T.Group position={glob_pos} rotation={glob_rot}>
    <!-- planes spaned in one line -->
    {#each depth_pos as pos}
        <T.Mesh position.z={-pos}>
            <T.PlaneGeometry args={[1, 1]} />
            <T.MeshBasicMaterial color={random_color()} />
        </T.Mesh>
    {/each}
</T.Group>

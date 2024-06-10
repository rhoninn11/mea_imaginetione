<script lang="ts">
    import { T } from "@threlte/core";

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
</script>

<T.Group>
    <!-- planes spaned in one line -->
    {#each depth_pos as pos}
        <T.Mesh position={[0, 0, -pos]}>
            <T.PlaneGeometry args={[1, 1]} />
            <T.MeshBasicMaterial color={random_color()} />
        </T.Mesh>
    {/each}
</T.Group>

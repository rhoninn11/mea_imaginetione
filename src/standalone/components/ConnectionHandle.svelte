<script lang="ts">
    import { T } from "@threlte/core";
    import { interactivity } from "@threlte/extras";
    import type { IntersectionEvent } from "@threlte/extras";
    

    export let size = 0.1;
    export let pos = { x: 0, y: 0, z: 0.1 };
    export let vertical = false;

    interactivity();

    let color = "white";
    $: y_offset = vertical ? Math.sign(pos.y)*0.5*size : 0;
    $: x_offset = !vertical ? Math.sign(pos.x)*0.5*size : 0;
    // math sing
    Math.sign(pos.x)
    $: pos_adjust = [pos.x + x_offset, pos.y + y_offset, pos.z]

    function start_connection(e: IntersectionEvent<PointerEvent>) {
        console.log("+++ mouse down on connection handle");
        e.stopPropagation();
    }

</script>

<!-- want to activitiy on hover -->
<T.Mesh position={pos_adjust}
    on:pointerover={(e) => color = "red"}
    on:pointerout={(e) => color = "white"}
    on:pointerdown={start_connection}
>
    <T.BoxGeometry args={[size, size, pos.z]} />
    <T.MeshStandardMaterial color={color}/>
</T.Mesh>
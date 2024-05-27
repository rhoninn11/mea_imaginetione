<script lang="ts">
    import { T } from "@threlte/core";
    import { RoundedBoxGeometry, interactivity } from "@threlte/extras";

    export let pos = { x: 0, y: 0 };
    export let rotation = 0;
    export let update_pos = () => console.log("local value");

    let held = 0;
</script>

<T.Mesh position.y={pos.y} position.x={pos.x}

    on:pointerdown={() => {
        held = 1;
        console.log("pointerdown");
    }}

    on:pointerup={() => {
        if (held) {
            held = 0;
            console.log("pointerup");
        }
        held = 0;
        console.log("pointerup");
    }}

    on:pointermove={(e) => {
        if (held) {
            console.log("pointermove");
            update_pos();
            console.log("+++ should be updateing")
        }
    }}
>
    <RoundedBoxGeometry args={[0.8, 0.5, 0.2]} />
    <T.MeshStandardMaterial color="orange" />
</T.Mesh>
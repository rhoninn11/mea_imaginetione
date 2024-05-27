<script lang="ts">
    import { T } from "@threlte/core";
    import { RoundedBoxGeometry, interactivity } from "@threlte/extras";
    import { mouse_move_update, mouse_move_end } from 'sdlne/stores/NavStore'

    export let pos = { x: 0, y: 0 };
    export let rotation = 0;
    export let update_pos = () => console.log("local value");

    let held = 0;
    function drag_stop() {
        if (held) {
            mouse_move_update.set(undefined)
            mouse_move_end.set(undefined)
            held = 0;
        }
    }

    function drag_update() {
        if (held) {
            update_pos();
        }
    }

    function drag_start() {
        if (!$mouse_move_update && !$mouse_move_end){
            mouse_move_update.set(drag_update)
            mouse_move_end.set(drag_stop)
            held = 1;
        }
    }


</script>

<T.Mesh position.y={pos.y} position.x={pos.x}
    on:pointerdown={drag_start}
>
    <RoundedBoxGeometry args={[0.8, 0.5, 0.2]} />
    <T.MeshStandardMaterial color="orange" />
</T.Mesh>
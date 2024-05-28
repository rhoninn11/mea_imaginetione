<script lang="ts">
    import { T } from "@threlte/core";
    import { RoundedBoxGeometry, interactivity, Text } from "@threlte/extras";
    import { mouse_move_update, mouse_move_end } from "sdlne/stores/NavStore";
    import { unselectHandler } from "sdlne/stores/editStore";
    import ConnectionHandle from "sdlne/comp/3d/ConnectionHandle.svelte";

    export let pos = { x: 0, y: 0 };
    export let update_pos = () => console.log("local value");
    export let id: number;

    let held = 0;

    function drag_stop() {
        if (held) {
            mouse_move_update.set(undefined);
            mouse_move_end.set(undefined);
            held = 0;
        }
    }

    function drag_update() {
        if (held) {
            update_pos();
        }
    }

    function drag_start() {
        if (!$mouse_move_update && !$mouse_move_end) {
            mouse_move_update.set(drag_update);
            mouse_move_end.set(drag_stop);
            held = 1;
        }
    }

    let selected = false;

    function deselect() {
        selected = false;
    }

    function on_select() {
        if ($unselectHandler) {
            $unselectHandler();
        }
        selected = true;
        unselectHandler.set(deselect);
    }

    function on_mouse_down() {
        console.log("+++ mouse down on movable element")
        on_select()
        drag_start();
    }

    const frame_width = 0.05;

    const size_x = 0.8;
    const size_y = 0.8;
    const size_x_frame = size_x + frame_width;
    const size_y_frame = size_y + frame_width;
    const size_z = 0.2;

    const handle_size = 0.1;

    
</script>

<!-- <T.Mesh position.y={pos.y} position.x={pos.x}
    on:pointerdown={drag_start}
>
    <RoundedBoxGeometry args={[0.8, 0.5, 0.2]} />
    <T.MeshStandardMaterial color="orange" />
</T.Mesh> -->
<T.Group position.y={pos.y} position.x={pos.x}>
    <ConnectionHandle pos={{x: size_x/2, y: 0, z: 0.1}}/>
    <ConnectionHandle pos={{x: -size_x/2, y: 0, z: 0.1}}/>
    <ConnectionHandle pos={{x: 0, y: size_y/2, z: 0.1}} vertical/>
    <ConnectionHandle pos={{x: 0, y: -size_y/2, z: 0.1}} vertical/>

    <T.Mesh position.z={-0.1}>
        <T.BoxGeometry args={[size_x_frame, size_y_frame, size_z]} />
        <T.MeshStandardMaterial color={selected ? "black" : "orange"}/>
    </T.Mesh>
    <T.Mesh on:pointerdown={on_mouse_down}>
        <T.BoxGeometry args={[size_x, size_y, size_z]} />
        <T.MeshStandardMaterial color="orange" />
    </T.Mesh>


    <Text position.z={1} text={`#${id}`} anchorX='center', anchorY='middle'>
        <T.MeshStandardMaterial color="black" />
    </Text>
</T.Group>

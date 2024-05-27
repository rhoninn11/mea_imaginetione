import { writable } from 'svelte/store';

import { mouse_world_space} from 'sdlne/stores/NavStore'

type NodePos = {
    x: number;
    y: number;
}
const HARD_NODE_LIMIT = 10

function createNodes() {
	const { subscribe, set, update } = writable<Array<NodePos>>([]);

    let world_space_ref = {x: 0, y: 0};
    mouse_world_space.subscribe((val) => {
        world_space_ref = val;
    });

    function add_new_pos() {
        update((current) => {
            if (current.length < HARD_NODE_LIMIT) {
                current.push({x: world_space_ref.x, y: world_space_ref.y});
                console.log("new added")
            }
            return current
        });
    }

    function modify_pos(idx: number) {
        update((current) => {
            current[idx] = {x: world_space_ref.x, y: world_space_ref.y};
            return current
        });
    }

	return {
		subscribe,
		add_new_pos,
        modify_pos
	};
}

export const nodes = createNodes();
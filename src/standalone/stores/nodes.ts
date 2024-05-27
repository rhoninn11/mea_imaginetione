import { writable } from 'svelte/store';

type NodePos = {
    x: number;
    y: number;
}
const HARD_NODE_LIMIT = 10

function createNodes() {
	const { subscribe, set, update } = writable<Array<NodePos>>([]);


    function add_new_pos(x: number, y:number) {
        update((current) => {
            if (current.length < HARD_NODE_LIMIT) {
                current.push({x, y});
                console.log("new added")
            }
            return current
        });
    }

    function modify_pos(idx: number, x: number, y: number) {
        update((current) => {
            current[idx] = {x, y};
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

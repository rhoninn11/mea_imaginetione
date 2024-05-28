
import { writable, derived } from 'svelte/store';
import type { EmptyFunc } from 'sdlne/types';

export const mouse_screan_space = writable({x: 0, y: 0});
export const mouse_world_space = writable({x: 0, y: 0});


export const mouse_move_update = writable<EmptyFunc | undefined>(undefined);
export const mouse_move_end = writable<EmptyFunc | undefined>(undefined);

derived(mouse_screan_space, ($mouse_screan_space, set, update) => {
    const {x, y} = $mouse_screan_space;
    set({x: x / 2, y: y / 2});
})



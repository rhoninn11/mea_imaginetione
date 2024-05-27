
import { writable, derived } from 'svelte/store';

export const mouse_screan_space = writable({x: 0, y: 0});
export const mouse_world_space = writable({x: 0, y: 0});

derived(mouse_screan_space, ($mouse_screan_space, set, update) => {
    const {x, y} = $mouse_screan_space;
    set({x: x / 2, y: y / 2});
})



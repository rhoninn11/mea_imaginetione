
import { writable } from 'svelte/store';

export const mouse_screan_space = writable({x: 0, y: 0});
export const mouse_world_space = writable({x: 0, y: 0});
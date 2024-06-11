import { writable } from "svelte/store";
import type { EmptyFunc } from "sdlne/types";

export const unselectHandler = writable<EmptyFunc | undefined>(undefined)
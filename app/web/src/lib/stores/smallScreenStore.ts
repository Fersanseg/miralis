import { writable, type Writable } from "svelte/store";

const isSmallScreen:Writable<boolean> = writable(false);

export default isSmallScreen;
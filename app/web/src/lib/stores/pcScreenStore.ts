import { writable, type Writable } from "svelte/store";

const isPcScreen:Writable<boolean> = writable(false);

export default isPcScreen;
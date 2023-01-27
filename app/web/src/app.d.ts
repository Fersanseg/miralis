// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface Locals {
		pb: import('pocketbase').default,
		user: any,
		traits: Array<import('$lib/pocketbase-types').TraitsRecord>
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

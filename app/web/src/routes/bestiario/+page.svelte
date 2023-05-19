<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Table from '$lib/components/Table.svelte';
	import type { CreaturesResponse } from '$lib/pocketbase-types';
	import type { PageData } from './$types';

	export let data: PageData;
	let list: Array<CreaturesResponse> = data.list;
	const isAdmin = data.isAdmin;

	function routeTo(url: string | URL, event: any) {
		if (!isAdmin || (event.target.localName === 'td' && event.target.cellIndex !== 0)) {
			goto(url);
		}
	}

	const columns = ["hidden", "name", "family", "level", "rarity", "size", "traits"];
</script>

<div class="overflow-x-auto py-0">
	<p class="text-sm lg:text-base p-5 lg:pt-0 opacity-70">
		Aunque el texto descriptivo de cada criatura tiene validez por sí mismo, las mecánicas de juego
		expuestas en cada entrada de esta tabla se entienden mejor con el contexto de este <a
			href="/reglas/monster-parts"
			class="link">sistema de reglas</a
		> alternativo
	</p>

	<Table columns={columns} dataRows={list} isAdmin={isAdmin} checkboxColumn={"hidden"} allowRouting={true}/>
</div>

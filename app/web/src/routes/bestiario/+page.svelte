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

	let sortInfo = { column: 'name', descending: false };
	if (browser) {
		sortInfo = JSON.parse(
			sessionStorage.getItem('sort') || '{"column": "name", "descending": false}'
		);
	}

	function handleSort(column: string) {
		sortInfo = {
			column: column,
			descending: sortInfo.column === column ? !sortInfo.descending : false
		};

		const sortedList = list.sort((x: any, y: any) => {
			const a = x[column];
			const b = y[column];

			return sortInfo.descending
				? b.localeCompare(a, undefined, { numeric: true })
				: a.localeCompare(b, undefined, { numeric: true });
		});

		list = sortedList;
	}

	function highlightArrow(column: string, desc: boolean) {
		return sortInfo.column == column && !desc ? 'text-white' : '';
	}

	async function toggleHidden(record: CreaturesResponse, currentState: boolean) {
		const updatedState = !currentState;
		await fetch('/bestiario', {
			method: 'PUT',
			body: JSON.stringify({ record: record, hidden: updatedState })
		});
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

	<Table columns={columns} dataRows={list} isAdmin={isAdmin} checkboxColumn={"hidden"}/>
</div>

<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
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
</script>

<div class="overflow-x-auto py-0">
	<p class="text-sm lg:text-base p-5 lg:pt-0 opacity-70">
		Aunque el texto descriptivo de cada criatura tiene validez por sí mismo, las mecánicas de juego
		expuestas en cada entrada de esta tabla se entienden mejor con el contexto de este <a
			href="/reglas/monster-parts"
			class="link">sistema de reglas</a
		> alternativo
	</p>
	<table class="table table-compact w-full">
		<tr class="bg-base-200 select-none cursor-pointer">
			{#if isAdmin}
				<th>
					<div>
						<span>Hidden</span>
					</div>
				</th>
			{/if}
			<th on:click={() => handleSort('name')}>
				<div class="flex items-center">
					Criatura
					<div class="inline-block ml-3 text-base">
						<span class={highlightArrow('name', sortInfo.descending)}>&#9650</span>
						<span class={highlightArrow('name', !sortInfo.descending)}>&#9660</span>
					</div>
				</div>
			</th>
			<th on:click={() => handleSort('family')}>
				<div class="flex items-center">
					Familia
					<div class="inline-block ml-3 text-base">
						<span class={highlightArrow('family', sortInfo.descending)}>&#9650</span>
						<span class={highlightArrow('family', !sortInfo.descending)}>&#9660</span>
					</div>
				</div>
			</th>
			<th on:click={() => handleSort('level')}>
				<div class="flex items-center">
					Nivel
					<div class="inline-block ml-3 text-base">
						<span class={highlightArrow('level', sortInfo.descending)}>&#9650</span>
						<span class={highlightArrow('level', !sortInfo.descending)}>&#9660</span>
					</div>
				</div>
			</th>
			<th on:click={() => handleSort('rarity')}>
				<div class="flex items-center">
					Rareza
					<div class="inline-block ml-3 text-base">
						<span class={highlightArrow('rarity', sortInfo.descending)}>&#9650</span>
						<span class={highlightArrow('rarity', !sortInfo.descending)}>&#9660</span>
					</div>
				</div>
			</th>
			<th on:click={() => handleSort('size')}>
				<div class="flex items-center">
					Tamaño
					<div class="inline-block ml-3 text-base">
						<span class={highlightArrow('size', sortInfo.descending)}>&#9650</span>
						<span class={highlightArrow('size', !sortInfo.descending)}>&#9660</span>
					</div>
				</div>
			</th>
			<th>Traits</th>
		</tr>
		{#each list as item}
			{#if isAdmin || !item.hidden}
				<tr
					class="transition-all cursor-pointer hover:bg-slate-400 hover:bg-opacity-20"
					on:click={(e) => routeTo(`/bestiario/${item.id}`, e)}
				>
					{#if isAdmin}
						<td>
							<input
								type="checkbox"
								checked={item.hidden}
								on:change={() => toggleHidden(item, Boolean(item.hidden))}
							/>
						</td>
					{/if}
					<td>{item.name}</td>
					<td>{item.family || '-'}</td>
					<td>{item.level}</td>
					<td>{item.rarity}</td>
					<td>{item.size}</td>
					<td>{item.traits || '-'}</td>
				</tr>
			{/if}
		{/each}
	</table>
</div>

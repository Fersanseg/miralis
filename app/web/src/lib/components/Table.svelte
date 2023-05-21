<script lang=ts>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { Utils } from "$lib/utils";
	import type { CreaturesResponse } from "$lib/pocketbase-types";
	import { empty } from "svelte/internal";
	import { page } from "$app/stores";

	const columnOrder = ["hidden", "name", "ability", "family", "level", "skill", "feat", "rarity", "size", "traits"];
    export let dataRows: any[];
	/** The names of the columns that will be displayed as table headers. If the table includes a checkbox column, the 'checkboxColumn' property MUST be specified and its name must be included in this property. */
    export let columns: string[];
	export let isAdmin: boolean;
	/** 'false' by default. 'false' if the table doesn't have a checkbox column; otherwise, you must pass the name that you want the checkbox column to be displayed as in this property, AND include it in the 'columns' array. */
	export let checkboxColumn: false | string = false;
	export let allowRouting: boolean = false;

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

		const sortedList = dataRows.sort((x: any, y: any) => {
			const a = x[column];
			const b = y[column];

			return sortInfo.descending
				? b.localeCompare(a, undefined, { numeric: true })
				: a.localeCompare(b, undefined, { numeric: true });
		});

		dataRows = sortedList;
	}

	function highlightArrow(column: string, desc: boolean) {
		return sortInfo.column == column && !desc ? 'text-white' : '';
	}

	function getValuesToPrint(row: object): ArrayLike<[string, any]> {
		const unorderedFields = Object.entries(row).filter(f => columns.includes(f[0]));
		const orderedFields = unorderedFields.sort((a: any, b: any) => {
			const aIndex = columnOrder.indexOf(a[0]);
			const bIndex = columnOrder.indexOf(b[0]);
			
			return aIndex - bIndex;
		})
		
		return orderedFields;
	}

	async function toggleHidden(record: CreaturesResponse, currentState: boolean) {
		const updatedState = !currentState;
		await fetch('/bestiario', {
			method: 'PUT',
			body: JSON.stringify({ record: record, hidden: updatedState })
		});
	}

	function routeTo(url: string | URL, event: any) {
		if (!isAdmin || (event.target.localName === 'td' && event.target.cellIndex !== 0)) {
			goto(url);
		}
	}
</script>

<table class="table table-compact w-full">
    <!-- HEADER ROW -->
    <tr class="bg-base-200 select-none cursor-pointer">
        {#each columns as column }
			{#if isAdmin && checkboxColumn && column.toUpperCase() === checkboxColumn.toUpperCase()}
				<th>
					<div class="flex items-center">
						<span>{Utils.capitalizeFirstLetter(column)}</span>
					</div>
				</th>
			{:else if column.toUpperCase() !== checkboxColumn.toString().toUpperCase()}
				<th on:click={() => handleSort(column)}>
					<div class="flex items-center">
						<span>{Utils.capitalizeFirstLetter(column)}</span>
						<div class="inline-block ml-3 text-base">
							<span class={highlightArrow(column, sortInfo.descending)}>&#9650</span>
							<span class={highlightArrow(column, !sortInfo.descending)}>&#9660</span>
						</div>
					</div>
				</th>
			{/if}
        {/each}
    </tr>

    <!-- TABLE BODY -->
    {#each dataRows as row }
		{#if isAdmin || !row[checkboxColumn.toString().toLowerCase()] }
			<tr
				on:click={allowRouting 
					? (e) => routeTo(`${$page.route.id}/${row['id']}`, e) 
					: () => {}}
				class="transition-all cursor-pointer hover:bg-slate-400 hover:bg-opacity-20"
			>
			{#each getValuesToPrint(row) as field }
				{#if isAdmin && checkboxColumn && field[0].toUpperCase() === checkboxColumn.toUpperCase()}
					<td>
						<input type="checkbox" checked={field[1]} on:change={() => toggleHidden(row, Boolean(field[1]))}>
					</td>
				{:else if field[0].toUpperCase() !== checkboxColumn.toString().toUpperCase()}
					<td>{field[1]}</td>	
				{/if}
			{/each}
		</tr>
		{/if}
    {/each}
</table>
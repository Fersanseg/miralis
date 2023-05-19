<script lang=ts>
	import Table from "$lib/components/Table.svelte";
	import type { BackgroundsResponse } from "$lib/pocketbase-types";
	import type { PageData } from "./$types";
    
    export let data: PageData;
    const backgrounds: BackgroundsResponse[] = data.backgrounds;
    const isAdmin: boolean = data.isAdmin;

    const columns = ["name", "ability", "skill", "feat", "rarity"];
</script>

<Table columns={columns} dataRows={backgrounds} isAdmin={isAdmin} allowRouting={true}/>
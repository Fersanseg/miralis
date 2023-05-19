<script lang=ts>
	import Table from "$lib/components/Table.svelte";
	import { Utils } from "$lib/utils";
	import type { PageData } from "./$types";
	import type { BackgroundRow } from "./I-background";
    
    export let data: PageData;
    let dummyRows: BackgroundRow[] = [
        {
            name: "OPM",
            ability: "strength", 
            skill: "ahtletics", 
            feat: "one-inch punch",
            rarity: "Common"
        },
        {
            name: "Mago",
            ability: "int", 
            skill: "arcana", 
            feat: "megavolt",
            rarity: "Uncommon"
        },
    ]

    const columns = Object.keys(dummyRows[0]);
    const isAdmin = true; //TEMP
    // type Columns = Array<keyof BackgroundRow>;
    // const columns: Columns = Object.keys({} as BackgroundRow) as Columns;
</script>

<Table columns={columns} dataRows={dummyRows} isAdmin={isAdmin}/>
<script lang="ts">
	import Trait from '$lib/components/trait.svelte';
    import type { BackgroundsResponse, TraitsRecord } from '$lib/pocketbase-types';
	import type { PageData } from './$types';
    
    export let data: PageData;
    const bg: BackgroundsResponse = data.bg;
    const traitList: TraitsRecord[] = data.traits as TraitsRecord[];
    const rarityTrait: TraitsRecord = traitList.find(t => t.trait === bg.rarity) as TraitsRecord;
</script>

<div class="mainContent">
    <h1 class="text-2xl md:text-5xl font-bold mb-8">
        {bg.name}
    </h1>
    <div class="mb-3 text-lg">
        {#if bg.rarity }
            <Trait trait={rarityTrait}/>
        {/if}
        <span class="ml-4"><b>Habilidades: </b>{bg.skill}</span>
        <span class="ml-6"><b>Características: </b>{bg.ability.replace(", ", " o ")} + uno a elegir</span>
    </div>
    <div class="text-lg">
        <span><b>Dote: </b><a href={bg.feat_link} class="link" target="_blank" rel="noopener noreferrer">{bg.feat}</a></span>
    </div>
    
    <hr class="my-3">
    
    <div class="text-lg">
        {bg.description}
    </div>
</div>
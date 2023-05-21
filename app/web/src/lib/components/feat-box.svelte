<script lang="ts">
	import type { FeatBoxProps } from "$lib/interfaces";
	import Trait from "./trait.svelte";
	import type { TraitsRecord } from "$lib/pocketbase-types";
	import { defaultTraitRecordArray } from "$lib/constants";
  
  export let props: FeatBoxProps;
  export let traitsList: Array<TraitsRecord> = defaultTraitRecordArray;
  const featTraits = props.traits?.split(", ");
  const filteredTraitsList = traitsList.filter(t => featTraits?.includes(t.trait));
</script>

<div class="flex flex-col bg-base-200 border border-black m-5 pt-3 md:p-5 p-5 text-sm md:text-lg">
  <div class="flex justify-between mb-2 md:mb-5">
    <h3 class="text-2xl font-bold md:text-3xl ml-5">
      {props.name}
    </h3>
    {#if props.typeAndLevel }
      <h3 class="text-2xl font-bold md:text-3xl mr-10">
        {props.typeAndLevel}
      </h3>
    {/if}
  </div>

  {#if traitsList != defaultTraitRecordArray}
    <div class="mb-3 md:mb-5">
      {#each filteredTraitsList as trait}
        <Trait trait={trait}/>
      {/each}
    </div>
  {/if}
  {#if props.prerequisites}
    <span class="mb-3 md:mb-5">
      <b>Prerequisitos: </b> {props.prerequisites}
    </span>
  {/if}

  <p>
    {props.description}
  </p>
</div>
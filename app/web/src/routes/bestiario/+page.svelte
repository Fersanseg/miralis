<script lang="ts">
  import { goto } from "$app/navigation";
	import type { CreaturesRecord } from "$lib/pocketbase-types";
  import type { PageData } from "./$types";

  export let data: PageData;
  const list: CreaturesRecord[] = data.list;

  function routeTo(url: string | URL) {
    goto(url);
  }
</script>

<div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <tr class="bg-base-200">
      <th>Criatura</th>
      <th>Familia</th>
      <th>Nivel</th>
      <th>Rareza</th>
      <th>Tamaño</th>
      <th>Traits</th>
    </tr>
    {#each list as item}
      <tr class="transition-all cursor-pointer hover:bg-slate-400 hover:bg-opacity-20" 
          on:click={() => routeTo(`/bestiario/${item.name.toLowerCase()}`)}>
        <td>{item.name}</td>
        <td>{item.family || "-"}</td>
        <td>{item.level}</td>
        <td>{item.rarity}</td>
        <td>{item.size}</td>
        <td>{item.traits || "-"}</td>
      </tr>
    {/each}
</table>
</div>

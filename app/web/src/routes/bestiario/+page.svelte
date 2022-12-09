<script lang="ts">
  import { goto } from "$app/navigation";
import { list } from "postcss";
  import type { PageData } from "./$types";

  export let data: PageData;

  function routeTo(url: string | URL) {
    goto(url);
  }
</script>

<div class="overflow-x-auto">
<table class="table table-compact w-full">
  <tr>
    <th>Criatura</th>
    <th>Familia</th>
    <th>Nivel</th>
    <th>Rareza</th>
    <th>Tamaño</th>
    <th>Traits</th>
  </tr>
  {#each data.list as item}
    <tr class="hover" on:click={() => routeTo(`/bestiario/${item.name.toLowerCase()}`)}>
      <td>{item.name}</td>
      <td>test</td>
    </tr>
  {/each}
</table>
</div>

{#each data.list as item}
  <a href={`/bestiario/${item.name.toLowerCase()}`}>{item.name}</a>
  <img src={item.image} alt={`${item.name} img`}>
{/each}
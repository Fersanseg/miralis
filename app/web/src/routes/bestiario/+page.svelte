<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#each data.list as item}
  <a href={`/bestiario/${item.name.toLowerCase()}`}>{item.name}</a>
  <img src={item.image} alt={`${item.name} img`}>
{/each}
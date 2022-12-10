<script lang="ts">
	import { PARTS_BULK, PARTS_VALUE } from "$lib/constants";
	import type { CreaturesRecord } from "$lib/pocketbase-types";
	import { Utils } from "$lib/utils";
	import type { PageData } from "./$types";

  export let data: PageData;
  const creature: CreaturesRecord = data.creature;
</script>

<!-- main container -->
<div class="flex flex-col max-w-7xl p-8 bg-base-200 bg-opacity-40 rounded-xl">
  <!-- first row: (name, level, img) & descr -->
  <div class="flex">
    <!-- name, level, img -->
    <div>
      <h1 class="grid- text-4xl font-bold">
        {creature.name.toUpperCase()}
      </h1>
      <h2 class="text-2xl font-bold">
        {`Nivel ${creature.level}`}
      </h2>
      <img class="max-w-xs mr-6" src="{creature.image}" alt={`${creature.name}.jpg`}>
    </div>
    <!-- descr -->
    <p class="fluff mb-8">
      {creature.description}
    </p>
  </div>
  <!-- monster parts info list -->
  <ul class="list-disc ml-14">
    <li>
      <b>Cantidad de partes</b> (en condiciones normales): {`${creature.partsValue}gp` || PARTS_VALUE[creature.level.toString()]}
    </li>
    <li>
      <b>Bulk partes: </b>{creature.partsBulk || PARTS_BULK[creature.size]}
    </li>
    <li>
      <b>Propiedades imbuidas válidas: </b>{Utils.sanitizeBarString(creature.properties)}
    </li>
    {#if creature.skills}
    <li>
      <b>Habilidades: </b>{Utils.sanitizeBarString(creature.skills)}
    </li>
    {/if}
    <li>
      <b>Tiene hechizos: </b>{creature.hasSpells ? "Sí" : "No"}
    </li>
  </ul>
</div>
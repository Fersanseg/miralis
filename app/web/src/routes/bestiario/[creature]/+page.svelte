<script lang="ts">
	import { PARTS_BULK, PARTS_VALUE, PROPERTIES, PROPERTY_COLOR } from "$lib/constants";
	import type { CreaturesRecord } from "$lib/pocketbase-types";
	import { Utils } from "$lib/utils";
	import type { PageData } from "./$types";

  export let data: PageData;
  const creature: CreaturesRecord = data.creature;
  let clickedProp: string  = "";
  
  function openModal(property: string) {
    const modal = <HTMLDialogElement>document.getElementById("modal");
    clickedProp = property;
    modal.showModal();
  }

  function closeModal() {
    const modal = <HTMLDialogElement>document.getElementById("modal");

      modal.close();
  }
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
      {`"${creature.description}"`}
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
        <b>Propiedades imbuidas válidas: </b>
        {#each Utils.splitCreatureProperties(creature.properties) as prop}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="mr-2 mb-2 inline-block cursor-pointer shadow-md"
          on:click={() => openModal(Utils.truncate(prop, "(").trim())}>
          <span class={PROPERTY_COLOR[Utils.truncate(prop, "(").trim()]} 
            style="text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3); padding: 0.2rem; border-style: solid; border-width: 2px; border-radius:0.5rem;">
            {prop}
          </span>
        </div>
        {/each}
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

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <dialog id="modal" class="p-0 bg-base-100 rounded-xl max-w-6xl max-h-[50rem]" 
    on:click|self={() => closeModal()}>
    <div class="p-10">
      {@html PROPERTIES[Utils.truncate(clickedProp, "(").trim()]}
    </div>
  </dialog>

<style>

  dialog::backdrop {
    background-color: rgb(0, 0, 0, 0.4);
    height: 100vh;
    width: 100vw;
  }

  .shown {
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    background-color: rgb(0, 0, 0, 0.4);
  }

  .collapsed {
    display: none;
  }

  .z2 {
    z-index: 2;
  }
</style>
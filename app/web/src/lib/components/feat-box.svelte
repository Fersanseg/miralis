<script lang="ts">
  export let name: string;
  export let typeAndLevel: string = ""
  export let traits: string = "";
  export let prerequisites: string = ""
  export let description: string;
</script>

<div class="flex flex-col bg-base-200 border border-black m-5 pt-3 md:p-5 p-5 text-sm md:text-lg">
  <div class="flex justify-between mb-2 md:mb-5">
    <h3 class="text-2xl md:text-3xl ml-5">
      {name}
    </h3>
    <h3 class="text-2xl md:text-3xl mr-10">
      {typeAndLevel}
    </h3>
  </div>

  {#if traits}
    <div class="mb-3 md:mb-5">
      Traits: {traits}
    </div>
  {/if}
  {#if prerequisites}
    <span class="mb-3 md:mb-5">
      <b>Prerequisitos: </b> {prerequisites}
    </span>
  {/if}

  <p>
    {description}
  </p>
</div>
<script lang="ts">
	import type { FeatBoxProps, SectionButtonConfig } from "$lib/interfaces";
	import SectionButtonContent from "./section-button-content.svelte";

  export let text: string;
  export let type: "image"|"text"|"feat";
  export let content: any;
  export let config: SectionButtonConfig = {};
  let showContent: boolean = false;

</script>

<div class="flex flex-col">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex w-full h-fit my-4" on:click={() => showContent = !showContent}>
    <hr class="relative border-slate-700 w-full self-center"/>
    <button class="btn btn-outline mx-4" on:click>{text}</button>
    <hr class="relative border-slate-700 w-full self-center"/>
  </div>

  {#if showContent}
    <SectionButtonContent type={type} content={content} config={config}/>
  {/if}
</div>
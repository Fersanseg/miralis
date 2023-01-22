<script lang=ts>
	import type { FeatBoxProps, SectionButtonConfig } from "$lib/interfaces";
	import { fade, slide } from "svelte/transition";
	import FeatBox from "./feat-box.svelte";

   export let type: "image"|"text"|"feat";
   export let content: any;
   export let config: SectionButtonConfig = {};
</script>

{#if type === "image" }
  <div class="w-fit self-center" transition:slide={{duration: 400}}>
    <img 
      class="max-w-[15rem] lg:max-w-xs mt-1 min-h-max" 
      src={content.toString()} alt={`${content}.webp`}
      transition:fade={{duration: 200, delay: 0}} 
    />
  </div>
{:else if type === "text"}
  <div transition:slide={{duration: 400}}>
    <p class="{config["fluffText"] ? "fluff" : ""} mb-8" transition:fade={{duration: 200, delay: 0}}>
      {content}
    </p>
  </div>
{:else if type === "feat"}
  <div transition:slide={{duration: 400}}>
    <div transition:fade={{duration: 200, delay: 0}}>
      <FeatBox 
        props={content}
        />
    </div>
  </div>
{:else}
  <img 
    class="max-w-[15rem] lg:max-w-xs mt-1 min-h-max" 
    src="/images/error_icon.png" alt={`Error`}
    transition:fade={{duration: 200, delay: 0}} 
  />
{/if}
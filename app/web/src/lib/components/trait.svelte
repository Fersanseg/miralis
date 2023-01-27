<script lang="ts">
	import type { TraitsRecord } from "$lib/pocketbase-types";

  export let trait: TraitsRecord;
</script>

<span 
  class="bg-emerald-200 border-[3px]  border-blue-700 border-opacity-80 rounded-md 
    mx-1 px-1.5 cursor-default
    tooltip tooltip-bottom"
  data-tip={trait.description}
  >
  {trait.trait}
</span>
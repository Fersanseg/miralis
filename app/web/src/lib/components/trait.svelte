<script lang="ts">
	import type { TraitsRecord } from "$lib/pocketbase-types";

  export let trait: TraitsRecord;
  let boxColors: string;
  switch (trait.trait) {
    case "Uncommon":
      boxColors = "bg-orange-500 border-yellow-400 text-white font-bold"
      break;
    default: 
      boxColors = "bg-emerald-200 border-blue-700"
  }
</script>

<span 
  class="{boxColors} border-[3px] border-opacity-80 rounded-md 
    mx-1 px-1.5 cursor-default
    tooltip tooltip-bottom"
  data-tip={trait.description}
  >
  {trait.trait}
</span>
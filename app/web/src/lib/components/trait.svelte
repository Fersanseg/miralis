<script lang="ts">
	import { TRAITS } from "$lib/constants";

  export let trait: string;
</script>

<span 
  class="bg-emerald-200 border-[3px]  border-blue-700 border-opacity-80 rounded-md 
    mx-1 px-1.5 cursor-default
    tooltip tooltip-bottom"
  data-tip={TRAITS[trait]}
  >
  {trait}
</span>
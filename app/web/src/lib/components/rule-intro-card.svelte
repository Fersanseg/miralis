<script lang="ts">
  export let ruleName: string;
  export let ruleText: string;
  export let ruleRouteTo: string;
</script>

<a href="{ruleRouteTo}"
  class="flex flex-col bg-base-200 rounded-xl p-4 shadow-md
  transition-all duration-200 ease-in-out hover:bg-green-300 hover:bg-opacity-90 hover:scale-101">
  <h1 class="text-xl sm:text-2xl font-bold mb-2">{ruleName}</h1>
  <p class="text-sm sm:text-base">{ruleText}</p>
</a>
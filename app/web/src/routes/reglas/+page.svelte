<script>
	import RuleIntroCard from "$lib/components/rule-intro-card.svelte";
  import { RULES } from "$lib/rules";

</script>

<div class="p-10 lg:p-0">
  {#each RULES as item}
    <RuleIntroCard ruleName={item.name} ruleText={item.text} ruleRouteTo={`/reglas/${item.routeTo}`}/>
  {/each}
</div>
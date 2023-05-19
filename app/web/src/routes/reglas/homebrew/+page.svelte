<script lang=ts>
	import RuleIntroCard from "$lib/components/rule-intro-card.svelte";
    import { HOMEBREW_CATEGORIES } from "./homebrew-types";     
</script>

<div>
    {#each HOMEBREW_CATEGORIES as item }
        <RuleIntroCard ruleName={item.name} ruleText={item.text} ruleRouteTo={item.routeTo}></RuleIntroCard>
    {/each}
</div>
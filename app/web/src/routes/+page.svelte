<script>
	import HomeCard from "$lib/components/home-card.svelte";
	
	const cards = [
		{
			imgUrl: '/images/libro.jpg',
			title: 'Bestiario',
			text: 'Un registro de criaturas fantásticas, rellenado a medida que son descubiertas y catalogadas. Incluye información básica y posibles usos prácticos de sus restos para el aventurero medio.',
			routeTo: '/bestiario'
		}, 
		{
			imgUrl: '/images/taller.jpg',
			title: 'Reglas',
			text: 'Una colección de reglas nuevas, alternativas y/o ampliadas, de acuerdo a mis preferencias personales.',
			routeTo: '/reglas'
		}
	]
</script>

<div class="grid grid-cols-2 gap-28">
	{#each cards as card}
		<HomeCard data={card}/>
	{/each}
</div>
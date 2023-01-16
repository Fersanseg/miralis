<script>
  import { REFINING_COST_OTHERS, REFINING_COST_WEAPONS_ARMOR } from '$lib/constants'
</script>

<h1 class="section-title mb-6">En construcción</h1>
<div class="flex gap-20 mb-10">
  <table class="table table-compact">
    <tr><th colspan="2">Coste para refinar armas y armaduras</th></tr>
    <tr>
      <th>Nivel</th>
      <th>Valor</th>
    </tr>
    {#each REFINING_COST_WEAPONS_ARMOR as value, index}
    <tr>
      <td>{index+1}</td>
      <td>{`${value}gp`}</td>
    </tr>
    {/each}
  </table>

  <table class="table table-compact">
    <tr><th colspan="2">Coste para refinar (escudos, habilidad, Percepción)</th></tr>
    <tr>
      <th>Nivel</th>
      <th>Valor</th>
    </tr>
    {#each REFINING_COST_OTHERS as value, index}
    <tr>
      <td>{index+1}</td>
      <td>{`${value}gp`}</td>
    </tr>
    {/each}
  </table>
</div>


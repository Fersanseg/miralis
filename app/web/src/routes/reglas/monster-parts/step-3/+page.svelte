<script lang="ts">
  import { PROPERTIES, PROPERTY_COLOR, REFINING_COST_OTHERS, REFINING_COST_WEAPONS_ARMOR } from "$lib/constants";
	import { Utils } from "$lib/utils";
	import FeatBox from "$lib/components/feat-box.svelte";
  import isPcScreen from "$lib/stores/pcScreenStore";
	import SectionButton from "$lib/components/section-button.svelte";
	import { slide } from "svelte/transition";

  const props = Object.keys(PROPERTIES);
  let clickedProp: string  = "";
  let contentToShow: string = "";

  function openModal(property: string) {
    const modal = <HTMLDialogElement>document.getElementById("modal");
    clickedProp = property;
    modal.showModal();
  }
  
  function closeModal() {
    const modal = <HTMLDialogElement>document.getElementById("modal");

    modal.close();
  }

  function handleShow(element: string) {
    contentToShow = element === contentToShow ? "" : element;
  }
</script>

<div class="max-w-7xl bg-base-200 bg-opacity-40 md:rounded-xl px-10 pt-6 pb-10 shadow-md">
  <h1 class="text-3xl md:text-5xl font-bold mb-6">IMBUIR OBJETOS</h1>
  <div class="text-base md:text-lg">
    {#if !$isPcScreen}
      <img src="/images/page-imgs/imbue.webp" alt="Intro"
        class="float-right max-w-2xl mx-5 mb-5 row-span-2"/>
    {/if}

    <div class="flex justify-center border-base-200 border-2 max-w-xs max-h-44 m-5 py-2 text-lg">
      <a href={"#"} class="link" on:click|preventDefault={() => Utils.scrollTo('#properties')}>Saltar a propiedades</a>
    </div>
    <p>
      Una vez hayas extraído partes útiles del cadáver de un monstruo (o hayas conseguido materiales por otros medios menos violentos), podrás imbuir tus objetos con propiedades especiales. El proceso es sencillo: añadir partes de monstruos que cumplan los prerequisitos de la propiedad que se quiere imbuir. Por ejemplo, si quieres imbuir una propiedad de hielo, tienes que usar partes de un monstruo que tenga habilidades que tengan que ver con el frío o el hielo. 
    </p>

    <br/>
    <p>
      Algunos objetos, como armas y armaduras, pueden imbuirse con varias propiedades diferentes e independientes. Esto significa que cada propiedad puede tener niveles diferentes, y cada una puede tener un valor total en gp de partes imbuidas diferente, que hay que anotar por separado. Las partes de monstruo que se usen para imbuir una propiedad no cuentan para otra propiedad diferente, incluso si las propiedades son del mismo tipo (fuego, ácido…). 
    </p>

    <br/>
    <p>
      No hay necesidad de llevar un registro de qué partes/monstruos concretos son los utilizados para mejorar un objeto, pero puede resultar interesante tomar nota de las criaturas para darle personalidad al objeto y convertirlo en algo único, propio y característico de su propietario. Por ejemplo, una espada imbuida con energía de fuego y hielo por las partes de dragones rojos y blancos respectivamente, podría tener un nombre como “Témpano ardiente” o “Hoja del Fuego Helado”, en vez de “espada +1 etc etc” 
    </p>

    <br>
    <p>
      A continuación se presentan dos tablas con el valor de partes necesario para aumentar el nivel de una propiedad imbuida. Cuantas más partes se usen en esa propiedad, más nivel alcanzará y mayores los beneficios que da esa propiedad. Una propiedad nunca puede tener un nivel mayor que tu nivel. Puedes seguir contribuyendo partes de monstruo en una propiedad que ya esté en el nivel máximo que puede alcanzar, hasta un máximo del valor necesario para subirla al siguiente nivel. De esta forma, cuando subas de nivel, la propiedad imbuida podrá subir de nivel automáticamente. Un objeto que tenga una o más propiedades imbuidas tendrá un nivel igual al nivel más alto de entre sus propiedades imbuidas. Muchas de las propiedades imbuidas tienen varias opciones o “caminos”, diferentes propiedades dentro de un mismo tipo, lo cual permite que uno pueda personalizar su objeto como más le guste. 
    </p>

    <div class="grid grid-cols-2 clear-both mt-4">
      <table class="table table-compact">
        <tr><th colspan="2" class="">
          <span>
            Coste refinar 
          </span>
          <br/>
          <span>
            Armas/Armaduras
          </span>
        </th></tr>
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
        <tr>
          <th colspan="2">
          <span>
            Coste refinar
          </span>
          <br/>
          <span>
            Escudos, Habilidad, Percepción
          </span>
          </th>
        </tr>
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

    {#if $isPcScreen}
      <SectionButton
        text="Ejemplo imbuir"
        type="feat"
        content={{
          name: "EJEMPLO: CÓMO IMBUIR PROPIEDADES",
          description: "El guerrero de nivel 7 de nuestro grupo de ejemplo ha perdido su arma favorita hace poco, y ha decidido crear una impresionante espada larga a partir del diente de un tiranosaurio que acaban de derrotar. Al ser nivel suficiente, el guerrero puede imbuir una propiedad en su arma, así que decide que lo único mejor que una espada hecha con el diente de un tiranosaurio, es una espada hecha con el diente de un tiranosaurio cubierta de fuego; y hace poco derrotaron a un par de escorpiones de magma, que se acabaron convirtiendo en 280gp en partes de escorpión. Como el escorpión tiene el rasgo “fire” o un ataque o hechizo que haga daño de fuego (de hecho cumple las dos), el guerrero imbuye todas sus partes en una propiedad de fuego para su espada. El guerrero tiene tres opciones para elegir, y elige el camino de “poder”. Imbuir 250gp en partes eleva el nivel de esta nueva propiedad hasta nivel 6, y cubre la espada de llamas, dándole 1d4 puntos de daño de fuego adicionales en ataques. El objeto final quedaría de la siguiente manera: espada larga +1 de golpe poder ígneo (6) (+1 striking fire might (6) longsword) hecha de dientes de tiranosaurio. "  
        }}
      />
    {:else}
    <FeatBox 
      props={{
        name: "EJEMPLO: CÓMO IMBUIR PROPIEDADES",
        description: "El guerrero de nivel 7 de nuestro grupo de ejemplo ha perdido su arma favorita hace poco, y ha decidido crear una impresionante espada larga a partir del diente de un tiranosaurio que acaban de derrotar. Al ser nivel suficiente, el guerrero puede imbuir una propiedad en su arma, así que decide que lo único mejor que una espada hecha con el diente de un tiranosaurio, es una espada hecha con el diente de un tiranosaurio cubierta de fuego; y hace poco derrotaron a un par de escorpiones de magma, que se acabaron convirtiendo en 280gp en partes de escorpión. Como el escorpión tiene el rasgo “fire” o un ataque o hechizo que haga daño de fuego (de hecho cumple las dos), el guerrero imbuye todas sus partes en una propiedad de fuego para su espada. El guerrero tiene tres opciones para elegir, y elige el camino de “poder”. Imbuir 250gp en partes eleva el nivel de esta nueva propiedad hasta nivel 6, y cubre la espada de llamas, dándole 1d4 puntos de daño de fuego adicionales en ataques. El objeto final quedaría de la siguiente manera: espada larga +1 de golpe poder ígneo (6) (+1 striking fire might (6) longsword) hecha de dientes de tiranosaurio. "  
      }}
    />
    {/if}
    <h3 class="text-xl font-bold mb-2">Propiedades imbuidas</h3>
    <p>
      Las siguientes propiedades imbuidas se pueden elegir al imbuir una propiedad con partes de un monstruo que cumplan los requisitos. En ocasiones una propiedad imbuida da la posibilidad de lanzar un hechizo en específico. En este caso, el objeto gana una activación, con los rasgos de comando e Interacción, con un coste de acciones igual al del hechizo. La DC de cualquier efecto de una propiedad imbuida está basada en el nivel del objeto, usando la siguiente tabla. Si el objeto necesita hacer un ataque de hechizo o una tirada para contrarrestar un efecto, el modificador es igual a esta DC - 10. 
    </p>
    <br/>
    <table class="table table-compact mx-auto">
      <tr>
        <th><b>Nivel</b></th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
      </tr>
      <tr>
        <th><b>DC</b></th>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td>34</td>
        <td>35</td>
        <td>37</td>
        <td>38</td>
        <td>41</td>
        <td>43</td>
      </tr>
    </table>

    <br/>
    <p>
      Algunas propiedades imbuidas, especialmente las de armas, tienen múltiples caminos, diferentes formas en las que personalizar el progreso del objeto. Estos caminos son “<b>magia</b>” (énfasis en hechizos temáticos), “<b>poder</b>” (énfasis en daño directo), y “<b>técnica</b>” (énfasis en efectos especiales y daño prolongado). Si el arma es capaz de tener varias propiedades imbuidas, se le puede imbuir la misma propiedad más de una vez, siempre que se elija un camino diferente en dicha propiedad cada vez. 
    </p>

    <br/>
    <p>
      Para usar una habilidad activada de un objeto imbuido, como un arma, tienes que blandir o vestir el objeto. Los efectos son acumulativos: por ejemplo, para hacer el arma ígnea definitiva, podrías imbuirla con los 3 caminos de esta propiedad: magia, poder y técnica ígneos. Combinarías el daño de fuego y daño persistente que te dan los tres caminos para determinar los efectos totales del arma: esto significa que teóricamente podrías hacer 5d10 puntos de daño persistente en un golpe crítico. 
    </p>

    <hr id="properties"/>
    <div class="flex flex-col p-5">
      {#each props as prop}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span class={`${PROPERTY_COLOR[Utils.truncate(prop, "(").trim()]} mb-2 text-center cursor-pointer`}
          style="text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3); padding: 0.2rem; border-style: solid; border-width: 2px; border-radius:0.5rem;"
          on:click={() => openModal(Utils.truncate(prop, "(").trim())}
          >
        {prop}
        </span>
      {/each}
    </div>
  </div>
</div>

<!-- ////////////////////////////////////////////////////////// MODAL -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog id="modal" class="p-0 windowMargins bg-base-100 rounded-xl max-w-6xl max-h-[50rem]" 
  on:click|self={() => closeModal()}>
  <div class="p-10">
    {@html PROPERTIES[Utils.truncate(clickedProp, "(").trim()]}
  </div>
</dialog>

<style>
  @media only screen and (max-width: 1280px) {
    .windowMargins {
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    }
  }
</style>
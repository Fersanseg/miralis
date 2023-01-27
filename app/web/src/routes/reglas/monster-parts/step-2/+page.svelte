<script lang="ts">
  import FeatBox from "$lib/components/feat-box.svelte";
  import isSmallScreen from "$lib/stores/smallScreenStore";
  import isPcScreen from "$lib/stores/pcScreenStore";
	import SectionButton from "$lib/components/section-button.svelte";
	import { Utils } from "$lib/utils";
	import type { PageData } from "./$types";
	import type { TraitsRecord } from "$lib/pocketbase-types";

  export let data: PageData;
  let traitsList: Array<TraitsRecord> = data.traits as Array<TraitsRecord>;
</script>

<div class="max-w-7xl bg-base-200 bg-opacity-40 md:rounded-xl px-10 pt-6 pb-10 shadow-md">
  <h1 class="text-3xl md:text-5xl font-bold mb-6">RECOLECTAR INGREDIENTES</h1>
  <div class="text-base md:text-lg">
    {#if !$isPcScreen}
      <img src="/images/page-imgs/carve.webp" alt="Intro"
        class="float-left max-w-2xl mx-5 mb-5 row-span-2"/>
    {/if}

    <p>
      Desollar, recolectar y extraer ingredientes es el primer paso en la creación de un poderoso arma o armadura a partir de los restos de una criatura.
    </p>
    <br/>
    <p>
      Generalmente, tras un combate los PCs pueden emplear 10 minutos en extraer las partes más valiosas de los monstruos que han derrotado. Se asume que los PCs son suficientemente competentes en estas técnicas como para tener éxito en la tarea, pero los detalles se dejan en manos del jugador: si no tiene sentido que su personaje sepa cómo descuartizar un monstruo, un jugador puede simplemente rolear que no sabe cómo hacerlo; o aunque el éxito en esta tarea es automático, uno podría rolear que trabajar con un monstruo en concreto requiere de especial cuidado y atención para no cometer fallos. Este sistema promueve encarecidamente que los jugadores acepten e impulsen el roleplay.
    </p>
    <br/>
    <p>
      Un PC puede usar tiempo de descanso para tratar de extraer más materiales aún del cuerpo de un monstruo concreto (ver <a href={'#'} class="link" on:click|preventDefault={() => Utils.scrollTo("#carveMore")}>Extraer más partes</a>). El tiempo que se necesita para extraer partes normalmente no varía con el tamaño o cantidad de los monstruos, aunque para criaturas especialmente grandes o cantidades muy grandes de monstruos, podrían ser necesarios sucesivos plazos de 10 minutos para su total extracción.
    </p>
    <br/>
    <p>
      Las partes de un monstruo varían en su peso dependiendo del monstruo del que se originan, pero generalmente tienden a ocupar mucho. Puede haber casos concretos que varíen, pero la siguiente tabla es, generalmente, una buena línea de base a seguir para determinar el peso de las partes de un monstruo. 
    </p>
    
    <table class="table table-compact my-4 mx-auto clear-both">
      <tr>
        <th>Tamaño de la criatura</th>
        <th>Peso de las partes</th>
      </tr>
      <tr>
        <td>Pequeño</td>
        <td>L</td>
      </tr>
      <tr>
        <td>Mediano</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Grande</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Enorme</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Inmenso</td>
        <td>8</td>
      </tr>
    </table>
    
    <p>
      Muchas de las partes obtenidas con este sistema son provenientes de descuartizar el cuerpo de un monstruo, pero la mayoría de las campañas incluirán oponentes que no son fuente de dichas partes útiles (como por ejemplo, humanoides). En su lugar, puede que estos enemigos lleven consigo objetos refinados o hechos con materiales de monstruos, que luego los PCs pueden desmantelar en sus partes componentes para usarlas en su propio equipo.
    </p>

    {#if !$isSmallScreen}
      <div class="flex flex-col items-center text-center border border-black float-right max-w-sm p-3 mx-4 mb-5 bg-emerald-200">
        <h3 class="text-2xl font-bold mb-2">¿Qué es un monstruo?</h3>
        <p>
          El sistema funciona sin importar cual sea la definición de "monstruo" que uno tenga, pero en la mayoría de los casos, razas y ancestrías jugables como humanos, elfos y orcos no son fuente de partes (excepto para gurpos inmorales que quieran vestirse con la piel de sus enemigos y cosas por el estilo). Del mismo modo, matar a un ángel para extraer materiales de su cadáver técnicamente funciona con este sistema, pero muchos grupos se opondrían al asesinato de un ser de bien puro. En resoluciones diplomáticas, un ángel u otra criatura similar podría estar dispuesto a ofrecer voluntariamente alguna pluma, escama o similares a aquellos que sean dignos y virtuosos. El sistema sólo trabaja con el valor de las partes, no su cantidad: perfectamente podría ser que "una pluma de ángel libremente dada tenga más poder que mil violentamente arrancadas".
        </p>
      </div>
    {:else}
      <SectionButton
        text="¿Qué es un monstruo?"
        type="text"
        content='El sistema funciona sin importar cual sea la definición de "monstruo" que uno tenga, pero en la mayoría de los casos, razas y ancestrías jugables como humanos, elfos y orcos no son fuente de partes (excepto para gurpos inmorales que quieran vestirse con la piel de sus enemigos y cosas por el estilo). Del mismo modo, matar a un ángel para extraer materiales de su cadáver técnicamente funciona con este sistema, pero muchos grupos se opondrían al asesinato de un ser de bien puro. En resoluciones diplomáticas, un ángel u otra criatura similar podría estar dispuesto a ofrecer voluntariamente alguna pluma, escama o similares a aquellos que sean dignos y virtuosos. El sistema sólo trabaja con el valor de las partes, no su cantidad: perfectamente podría ser que "una pluma de ángel libremente dada tenga más poder que mil violentamente arrancadas"'
      />
    {/if}

    <br/>
    <p>
      Cuando los PCs extraen partes de un monstruo, obtienen materiales con un valor determinado: por ejemplo, “40gp de partes de troll”. El valor de las partes obtenidas es determinado por el GM. A efectos mecánicos no tiene importancia el qué son concretamente estas partes, pero se anima al jugador a rolearlo dependiendo de qué es lo que quiere fabricar o hacer con esos materiales: por ejemplo, en su inventario puede que aparezcan “40gp de partes de troll”, pero que cuando extrajo esos materiales, su personaje decidiera “despellejar a la criatura para guardar su piel y coser una armadura con ella”. Este valor puede dividirse como sea necesario: por ejemplo, si el anterior personaje creara un objeto usando 14gp de sus partes de troll, le quedarían 26gp en partes. 
    </p>
    <br/>

    <h3 id="carveMore" class="text-xl font-bold mb-2">Extraer más partes</h3>
    <p>
      Un PC con una habilidad de Lore apropiada (por ejemplo, Dragon Lore cuando se trabaja con un dragón) puede utilizar tiempo de descanso despiezando cuidadosamente a la criatura para obtener más partes, incrementando el valor obtenido de esa criatura. Para ello se usan las reglas para “<a href="https://2e.aonprd.com/Actions.aspx?ID=23" class="link" target="_blank" rel="noreferrer">ganarse el sueldo</a>”, utilizando una tarea del mismo nivel que el de la criatura. En un fallo crítico, o una vez se hayan adquirido partes por un valor del doble de lo obtenido originalmente, esa criatura no puede dar más: el PC ha agotado todo lo que se puede conseguir de ese monstruo.
      Cualquier personaje que esté interesado en esta tarea puede invertir en la siguiente dote de habilidad: 
    </p>

    <div class="clear-both">
      <FeatBox
        props={{
          name: "Carroñero",
          typeAndLevel: "Dote 1",
          traits: "General, Skill",
          prerequisites: "Entrenado en Supervivencia",
          description: "Eres particularmente bueno aprovechando todo lo que se puede sacar del cuerpo de las criaturas que derrotas. Puedes usar Supervivencia para Ganarte el sueldo al extraer partes de monstruos. Si decides usar una habilidad de Lore apropiada, obtienes un +1 circunstancial a la tirada. Este bonus aumenta a +2 si eres maestro en Supervivencia. "
        }}
        traitsList={traitsList}
      />
    </div>

    <h3 class="text-xl font-bold mb-2">Intercambiar partes</h3>
    <p>
      Los materiales de monstruos generalmente no están a la venta en el mercado libre, y un PC las puede vender a la mitad del valor listado, si es que consigue venderlas. Pero nada impide a alguien intercambiar materiales con otros aventureros que se encuentren en la carretera que también busquen deshacerse de sus propios materiales. 
    </p>
    <br/>
    
    <h3 class="text-xl font-bold mb-2">Trampas</h3>
    <p>
      UNo sólo los monstruos que uno combate son fuentes de partes: se pueden extraer materiales de cualquier trampa o aparición con una forma o manifestación física, como si fueran criaturas (por ejemplo, para una mejora que necesite partes de una “criatura con un ataque que haga daño cortante”, podría usarse “la hoja de la guadaña” que formaba la trampa que se acaba de desmantelar). 
    </p>
  </div>
</div>
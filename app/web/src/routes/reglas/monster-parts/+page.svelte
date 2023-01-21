<script>
  import isPcScreen from "$lib/stores/pcScreenStore";
	import { Utils } from "$lib/utils";
</script>

<div class="max-w-7xl bg-base-200 bg-opacity-40 md:rounded-xl px-10 pt-6 pb-10 shadow-md">
  <h1 class="text-3xl md:text-5xl font-bold mb-6">PARTES DE MONSTRUOS</h1>
  <div class="grid lg:grid-cols-[1fr_min-content] xl:grid-rows-2">
    <p class="text-lg mb-3">
      Este sistema de Partes de Monstruos permite a los PCs mejorar sus armas y armaduras utilizando trozos, partes y materiales de los enemigos que derrotan. Estas mejoras se pueden usar de dos formas: refinar el objeto, mejorando sus propiedades fundamentales, e imbuirlo con propiedades cada vez más poderosas, que pueden ramificarse en diferentes tipos. Cuanto más se refine un arma o armadura, más se puede imbuir, pero para adquirir estas mejoras los PCs tienen que derrotar monstruos con partes que cumplan los prerequisitos (es difícil crear una espada cubierta de fuego con el corazón de un gigante de hielo). 
    </p>
    {#if !$isPcScreen}
      <img src="/images/page-imgs/mp-intro.webp" alt="Intro"
        class="max-w-sm mx-5 mb-5 row-span-2"/>
      <div class="flex flex-col justify-evenly border-base-200 border-2 max-w-xs max-h-44 m-5 pl-5 text-lg">
        <a href={"#"} class="link" on:click|preventDefault={() => Utils.scrollTo('#step1')}>Paso 1: Matar monstruos</a>
        <a href={"#"} class="link" on:click|preventDefault={() => Utils.scrollTo('#step2')}>Paso 2: Conseguir ingredientes</a>
        <a href={"#"} class="link" on:click|preventDefault={() => Utils.scrollTo('#step3')}>Paso 3: Imbuir objetos</a>
      </div>
    {/if}
  </div>

  <hr/>

  <div class="flex flex-col items-center text-center">
    <div class="flex flex-col items-center">
      <h2 id="step1" class="text-3xl font-bold mt-4">Paso 1: Matar monstruos</h2>
      {#if !$isPcScreen}
        <img src="/images/page-imgs/step-1.webp" alt="Paso 1: Matar monstruos"
          class="max-w-3xl mb-6"  
        >
      {/if}
      <p class="text-lg mb-4">
        Simple: mata monstruos, consigue sus partes. Normalmente habría que matar a estos monstruos primero, pero en ocasiones o en grupos más pacíficos se pueden encontrar otras soluciones, como partes de monstruos como recompensa tras una misión, o como criaturas que ofrecen materiales de forma libre y voluntaria.
      </p>
    </div>
  
    <hr class="self-stretch"/>

    <a href="./monster-parts/step-2" class="flex flex-col p-4 cursor-pointer items-center transition-all duration-200 hover:bg-base-200 hover:bg-opacity-70">
      <h2 id="step2" class="text-3xl font-bold mt-4">Paso 2: Conseguir ingredientes</h2>
      {#if !$isPcScreen}
        <img src="/images/page-imgs/step-2.webp" alt="Paso 2: Conseguir ingredientes"
          class="max-w-3xl mb-6"  
        >
      {/if}
      <p class="text-lg mb-4">
        Lo siguiente es recolectar los ingredientes de los monstruos derrotados. El GM te dirá cuánto valen las partes que has conseguido, además de su peso. Para evitar cargar muchos materiales (y no tener que llevar la cuenta de todos ellos), puede que te interese usarlos en el momento, pero puedes guardarlos tanto tiempo como quieras.
      </p>
    </a>
  
    <hr class="self-stretch"/>

    <a href="./monster-parts/step-3" class="flex flex-col p-4 cursor-pointer items-center transition-all duration-200 hover:bg-base-200 hover:bg-opacity-70">
      <h2 id="step3" class="text-3xl font-bold mt-4">Paso 3: Imbuir objetos</h2>
      {#if !$isPcScreen}
        <img src="/images/page-imgs/step-3.webp" alt="Paso 3: Imbuir objetos"
          class="max-w-3xl mb-6"  
        >
      {/if}
      <p class="text-lg mb-4">
        Imbuir un objeto es cuando las cosas se ponen interesantes. A medida que subes de nivel, eventualmente tus objetos ganan la posibilidad de ser imbuidos con propiedades especiales, y algunos incluso pueden ser imbuidos varias veces con diferentes propiedades. Puedes imbuir un objeto usando partes de monstruos que cumplen los requisitos de la propiedad que va a ser imbuida. Por ejemplo, para imbuir un objeto con fuego, se necesitan partes de un monstruo hecho o fuertemente asociado con el fuego, o con habilidades relacionadas con el fuego. Cuando la propiedad alcanza ciertos umbrales de valor al imbuirla, ésta subirá de nivel, potencialmente incrementando sus poderes y beneficios. No puedes imbuir una propiedad hasta un nivel superior que el tuyo propio.
      </p>
    </a>
  </div>
</div>
export const ACIDO_PROP = `
  <h1 class="text-2xl font-bold">ACÍDICO</h1>
  <p><b>Traits: </b>Acid, Evocation, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "acid" o un ataque o hechizo que haga daño ácido</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con ácido cáustico</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Al imbuir con esta propiedad por primera vez, elige si los hechizos otorgados son arcanos o primigenios.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=3" target="_blank">acid splash</a>, 
      aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=565" target="_blank">acidic burst</a>, 
        una vez al día.
    </li>
    <li>Lv 6: El hechizo acidic burst aumenta a nivel 2, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=2" target="_blank">acid arrow</a>, 
        O <i>acidic burst</i> una vez al día, pero no los dos.
    </li>
    <li>Lv 8: El hechizo acidic burst aumenta a nivel 3, y el arma puede lanzar <i>acid arrow</i> y <i>acidic burst</i> una vez al día cada uno.</li>
    <li>Lv 10: Los ataques con este arma hacen 1 punto de daño ácido adicional.</li>
    <li>Lv 12: El hechizo <i>acid arrow</i> aumenta a nivel 4, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=564" target="_blank">acid storm</a>, 
        una vez al día.
    </li>
    <li>Lv 14: El daño ácido adicional aumenta a 1d4.</li>
    <li>Lv 16: El hechizo <i>acid arrow</i> aumenta a nivel 6, y <i>acid storm</i> aumenta a nivel 7.</li>
    <li>Lv 18: El daño ácido adicional aumenta a 1d6.</li>
    <li>Lv 20: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=313" target="_blank">storm of vengeance</a>, 
        una vez al día pero sólo puedes elegir el efecto de lluvia ácida, y puedes elegirlo varias veces seguidas. 
    </li>
  </ul><hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño ácido adicional.</li>
    <li>Lv 6: El daño ácido adicional aumenta a 1d4.</li>
    <li>Lv 8: El daño ácido adicional aumenta a 1d6. En un golpe crítico, la armadura del objetivo (si la tiene) sufre 3d6 puntos de daño ácido (antes de aplicar Dureza). Si el objetivo tiene un escudo levantado, es el escudo el que recibe este daño.</li>
    <li>Lv 12: El daño ácido inflingido por la propiedad imbuida “acídica” ignora resistencias.</li>
    <li>Lv 14: El daño ácido inflingido a armaduras o escudos en un golpe crítico aumenta a 6d6.</li>
    <li>Lv 18: El daño ácido adicional aumenta a 1d8.</li>
    <li>Lv 20: En un golpe con éxito, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño ácido hasta el principio de tu siguiente turno. Este efecto es acumulativo.</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA.</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño de ácido persistente.</li>
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño de ácido adicional.</li>
    <li>Lv 8: El daño de ácido persistente aumenta a 1d6. En un golpe crítico, la armadura del objetivo (si la tiene) sufre 3d6 puntos de daño ácido (antes de aplicar Dureza). Si el objetivo tiene un escudo levantado, es el escudo el que recibe este daño.</li>
    <li>Lv 12: El daño de ácido inflingido por la propiedad imbuída “acídica” ignora resistencias.</li>
    <li>Lv 14: El daño de ácido persistente aumenta a 1d8.</li>
    <li>Lv 16: Cada vez que un enemigo (o su armadura o escudo) reciba daño de ácido persistente de esta propiedad, su Dureza y resistencias se reducen en 1. Este efecto es acumulativo.</li>
    <li>Lv 18: El daño de ácido persistente aumenta a 1d10.</li>
    <li>Lv 20: En un golpe crítico, el ácido ataca a los órganos del enemigo, que queda 
      <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=10" target="_blank">drenado</a> 1
    </li> 
  </ul>
`;

export const ALADO_PROP = `
  <h1 class="text-2xl font-bold">ALADO</h1>
  <p><b>Traits: </b>Magical, Transmutation</p>
  <p><b>Tipo: </b>Armadura</p>
  <p><b>Partes: </b>La criatura debe tener tener velocidad de Vuelo</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes la armadura con alas que sobresalen de la espalda. Al imbuir con esta propiedad por primera vez, elige si los hechizos otorgados son arcanos o primigenios</p>
  <hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 6: La armadura lanza 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=111" target="_blank">feather fall </a>
      sobre ti automáticamente cuando caigas. Este efecto sólo puede activarse una vez por hora.
    </li>
    <li>Lv 8: La armadura puede lanzar feather fall una vez cada 10 minutos en vez de cada hora</li>
    <li>Lv 10: La armadura puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=111" target="_blank">fly</a> 
      sobre ti una vez al día.
    </li>
    <li>Lv 14: La armadura puede lanzar <i>fly</i> una vez por hora en vez de una vez al día.</li>
    <li>Lv 16: Puedes hacer que la armadura lance <i>fly</i> sobre ti a nivel 7 en vez de a nivel 4. Si lo haces, la armadura no puede lanzar <i>fly</i> hasta dentro de 1 día.</li>
    <li>Lv 18: Ganas una velocidad de Vuelo permanente igual a tu velocidad.</li>
    <li>Lv 20: La armadura puede lanzar <i>fly</i> a nivel 4 sobre un aliado, una vez por hora.</li>
  </ul>
`;

export const AMALGAMADO_PROP = `
  <h1 class="text-2xl font-bold">AMALGAMADO</h1>
  <p><b>Traits: </b>Evocation, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>No hay requisitos, puedes usar cualquier parte de cualquier monstruo</p>
  <hr/>
  <p><b>Efecto: </b>A veces simplemente no encuentras suficientes partes del mismo tipo para imbuir tu arma en condiciones, pero aún así la quieres imbuir con algo. Al no tener un punto en común que las una, esta amalgama de partes no da beneficios tan significativos como otras propiedades… pero al menos puedes usar cualquier parte que te encuentres</p>
  <hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los golpes con este arma hacen 1 punto de daño adicional. Cada vez que hagas daño, tira 1d6: en un 1, el daño adicional es ácido. En un 2, es frío. En un 3, es eléctrico. En un 4, es de fuego. En un 5, es negativo. En un 6, es sónico</li>
    <li>Lv 6: El daño adicional aumenta a 1d4</li>
    <li>Lv 8: El daño adicional aumenta a 1d6</li>
    <li>Lv 12: El daño adicional hecho por este arma ignora resistencias</li>
    <li>Lv 18: El daño adicional aumenta a 1d8</li>
    <li>Lv 20: En un golpe con este arma, antes de aplicar el daño adicional, el objetivo gana debilidad 2 a ese tipo de daño hasta el principio de tu siguiente turno. Este efecto es acumulativo.</li>
  </ul>
`;

export const BENIGNO_PROP = `
  <h1 class="text-2xl font-bold">BENIGNO</h1>
  <p><b>Traits: </b>Good, Evocation, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "good" o un ataque o hechizo que haga daño benigno</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con bien virtuoso para traer justicia contra tus retorcidos enemigos</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Los hechizos otorgados por esta propiedad son siempre divinos.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=84" target="_blank">divine lance</a>, 
        haciendo sólo daño benigno aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=238" target="_blank">protection</a>, 
        una vez al día, protegiendo sólo contra el mal.
    </li>
    <li>Lv 8: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=269" target="_blank">searing light</a>, 
        una vez al día.
    </li>
    <li>Lv 10: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=86" target="_blank">divine wrath</a>
        (daño benigno) una vez al día.
    </li>
    <li>Lv 12: Los ataques con este arma hacen 1 punto de daño benigno adicional.</li>
    <li>Lv 14: El daño benigno adicional aumenta a 1d4.</li>
    <li>Lv 16: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=82" target="_blank">divine decree</a>
        (benigno) una vez al día. El hechizo <i>divine wrath</i> aumenta a nivel 5.
    </li>
    <li>Lv 18: El daño benigno adicional aumenta a 1d6.</li>
    <li>Lv 20: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=81" target="_blank">divine aura</a>
        (daño benigno) una vez al día. El hechizo <i>divine decree</i> aumenta a nivel 8, y el hechizo <i>divine wrath</i> aumenta a nivel 7.
    </li>
  </ul><hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño benigno adicional.</li>
    <li>Lv 8: El daño benigno adicional aumenta a 1d4.</li>
    <li>Lv 10: El daño benigno adicional aumenta a 1d6.</li>
    <li>Lv 12: En un ataque crítico contra una criatura maligna, el objetivo sufre una penalización por status de -1 a sus ataques contra otras criaturas que no sean tú mismo hasta el final de tu siguiente turno.</li>
    <li>Lv 14: El daño benigno inflingido por esta propiedad ignora resistencias.</li>
    <li>Lv 18: El daño benigno adicional aumenta a 1d8.</li>
    <li>Lv 20: En un golpe con éxito, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño benigno hasta el principio de tu siguiente turno (o la aumenta si ya tenía). Este efecto es acumulativo. </li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA.</b></p>
  <ul class="ml-8">
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño de benigno adicional.</li>
    <li>Lv 8: Los ataques con este arma hacen 1 punto de daño de benigno persistente.</li>
    <li>Lv 10: El daño de benigno persistente aumenta a 1d6.</li>
    <li>Lv 12: En un ataque crítico contra una criatura maligna, el objetivo sufre una penalización por status de -1 a sus ataques contra otras criaturas que no sean tú mismo hasta el final de tu siguiente turno.</li>
    <li>Lv 14: El daño benigno inflingido por esta propiedad (incluyendo daño persistente) ignora resistencias.</li>
    <li>Lv 16: En un ataque crítico contra una criatura maligna, si el objetivo ataca y daña a otra criatura aparte de ti, quedan 
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=16" target="_blank">desprevenidos</a> 
      ante tus ataques con el arma imbuida hasta el final de tu siguiente turno.
    </li>
    <li>Lv 18: El daño de benigno persistente aumenta a 1d10.</li>
    <li>Lv 20: El daño benigno de este arma castiga a los pecadores que dañen al inocente. Cada vez que una criatura maligna que esté sufriendo daño benigno persistente por esta propiedad imbuida ataque y dañe a otra criatura aparte de ti, sufre los 1d10 de daño benigno persistente inmediatamente, y después puede intentar la tirada básica para liberarse de este daño que normalmente ocurre al final de su turno.</li> 
  </ul>
`;

export const CARISMATICO_PROP = `
  <h1 class="text-2xl font-bold">CARISMÁTICO</h1>
  <p><b>Traits: </b>Enchantment, Magical</p>
  <p><b>Tipo: </b>Objeto de habilidad (habilidad basada en Carisma)</p>
  <p><b>Partes: </b>La criatura debe tener Carisma como su mayor o segundo mayor modificador de característica.</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el objeto con carisma desbordante</p>
  <hr/>
  <ul class="ml-8">
    <li>Lv 8: El objeto puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=149" target="_blank">heroism</a>, 
        como hechizo oculto
    </li>
    <li>Lv 14: El hechizo <i>heroism</i> aumenta a nivel 6</li>
    <li>Lv 17: Cuando invistes el objeto, incrementas tu puntuación de Carisma en 2 o la aumentas a 18, lo que resulte en una puntuación más alta. El objeto gana el rasgo “apex”.</li>
    <li>Lv 20: El hechizo <i>heroism</i> aumenta a nivel 9</li>
  </ul>
`;

export const CAOTICO_PROP = `
  <h1 class="text-2xl font-bold">CAÓTICO</h1>
  <p><b>Traits: </b>Chaotic, Evocation, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "caótico" o un ataque o hechizo que haga daño caótico</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con caos y anarquía para acabar con el rígido orden</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Los hechizos otorgados por esta propiedad son siempre divinos.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=84" target="_blank">divine lance</a>, 
      haciendo sólo daño caótico, aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=238" target="_blank">protection</a>, 
        una vez al día, protegiendo sólo contra la ley (daño legal).
    </li>
    <li>Lv 8: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=269" target="_blank">searing light</a>, 
        una vez al día, excepto que el daño base es ácido en vez de fuego, y hace daño caótico adicional contra celestiales, monitores y avernales legales en vez de daño benigno contra no muertos y avernales. Tiene los rasgos “chaotic” y “acid” en vez de “good” y “fire”.
    </li>
    <li>Lv 10: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=86" target="_blank">divine wrath</a>
        (daño caótico) una vez al día.
    </li>
    <li>Lv 12: Los ataques con este arma hacen 1 punto de daño caótico adicional.</li>
    <li>Lv 14: Cuando hagas daño caótico con esta propiedad, haz una tirada básica con DC 11. En un éxito, el daño adicional aumenta de 1 a 4.</li>
    <li>Lv 16: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=82" target="_blank">divine decree</a>
        (caótico) una vez al día. El hechizo <i>divine wrath</i> aumenta a nivel 5.
    </li>
    <li>Lv 18: Cuando hagas una tirada básica para aumentar el daño caótico adicional, un éxito aumenta el daño a 6 en vez de 4.</li>
    <li>Lv 20: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=81" target="_blank">divine aura</a>
        (daño caótico) una vez al día. El hechizo <i>divine decree</i> aumenta a nivel 8, y el hechizo <i>divine wrath</i> aumenta a nivel 7.
    </li>
  </ul><hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño caótico adicional.</li>
    <li>Lv 8: Cuando hagas daño caótico con esta propiedad, haz una tirada básica con DC 11. En un éxito, el daño adicional aumenta de 1 a 4.</li>
    <li>Lv 10: Cuando hagas una tirada básica para aumentar el daño caótico adicional, un éxito aumenta el daño a 6 en vez de 4.</li>
    <li>Lv 12: En un ataque crítico contra una criatura legal, queda
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=37" target="_blank">estupefacta</a> 
      1 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 14: El daño caótico inflingido por esta propiedad ignora resistencias.</li>
    <li>Lv 18: Cuando hagas una tirada básica para aumentar el daño caótico adicional, un éxito aumenta el daño a 8 en vez de 6.</li>
    <li>Lv 20: En un golpe con éxito contra una criatura legal, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño caótico hasta el principio de tu siguiente turno (o la aumenta si ya tenía). Este efecto es acumulativo</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA.</b></p>
  <ul class="ml-8">
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño caótico adicional.</li>
    <li>Lv 8: Los ataques con este arma hacen 1 punto de daño caótico persistente.</li>
    <li>Lv 10: Cuando hagas daño caótico con esta propiedad, haz una tirada básica con DC 11. En un éxito, el daño adicional aumenta de 1 a 6.</li>
    <li>Lv 12: En un ataque crítico contra una criatura legal, queda
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=37" target="_blank">estupefacta</a> 
      1 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 14: El daño caótico inflingido por esta propiedad (incluyendo daño persistente) ignora resistencias.</li>
    <li>Lv 16: En un ataque crítico contra una criatura legal, queda
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=37" target="_blank">estupefacta</a> 
      2 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 18: Cuando hagas una tirada básica para aumentar el daño caótico adicional, un éxito aumenta el daño a 10 en vez de 6.</li>
    <li>Lv 20: En un ataque crítico contra una criatura legal, tras quedar estupefacta 2, la criatura tiene que superar una tirada de Voluntad o quedar 
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=5" target="_blank">confundida</a> 
      durante 1 turno.
    </li> 
  </ul>
`;

export const DE_FUERZA_PROP = `
  <h1 class="text-2xl font-bold">DE FUERZA</h1>
  <p><b>Traits: </b>Evocation, Force, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "force" o un ataque o hechizo que haga daño de fuerza</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con fuerza pura</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Al imbuir con esta propiedad por primera vez, elige si los hechizos otorgados son arcanos, divinos u ocultos.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=280" target="_blank">shield</a>, 
      aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=180" target="_blank">magic missile</a>, 
        una vez al día.
    </li>
    <li>Lv 6: El hechizo <i>magic missile</i> aumenta a nivel 2, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=306" target="_blank">spiritual weapon</a>, 
        O <i>magic missile</i> una vez al día, pero no los dos.
    </li>
    <li>Lv 8: El hechizo <i>magic missile</i> aumenta a nivel 3, y el arma puede lanzar <i>magic missile</i> y <i>spiritual weapon</i> una vez al día cada uno.</li>
    <li>Lv 10: Los ataques con este arma hacen 1 punto de daño de fuerza adicional.</li>
    <li>Lv 12: El hechizo <i>spiritual weapon</i> aumenta a nivel 4, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=305" target="_blank">spiritual weapon</a>, 
        una vez al día.
    </li>
    <li>Lv 14: El daño de fuerza adicional aumenta a 1d4.</li>
    <li>Lv 16: El hechizo <i>magic missile</i> aumenta a nivel 5, <i>spiritual weapon</i> aumenta a nivel 6, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=301" target="_blank">spirit blast</a> 
      una vez al día, pero deja de poder lanzar <i>spiritual weapon</i>
    </li>
    <li>Lv 18: El daño de fuerza adicional aumenta a 1d6.</li>
    <li>Lv 20: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=303" target="_blank">spirit song</a>, 
        una vez al día.
    </li>
  </ul>
  <hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño de fuerza adicional.</li>
    <li>Lv 6: El daño de fuerza adicional aumenta a 1d4.</li>
    <li>Lv 8: El daño de fuerza adicional aumenta a 1d6.</li>
    <li>Lv 10: En un golpe crítico, puedes forzar al objetivo a intentar una tirada de salvación de Fortaleza o ser empujado 5ft.</li>
    <li>Lv 12: El daño de fuerza inflingido por la propiedad imbuida "De Fuerza" ignora resistencias.</li>
    <li>Lv 16: En un golpe crítico, si el objetivo falla la tirada de salvación, es empujado 10ft.</li>
    <li>Lv 18: El daño de fuerza adicional aumenta a 1d8.</li>
    <li>Lv 20: En un golpe con éxito, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño de fuerza hasta el principio de tu siguiente turno. Este efecto es acumulativo.</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA.</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño de fuerza persistente.</li>
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño de fuerza adicional.</li>
    <li>Lv 8: En un golpe crítico, puedes forzar al objetivo a intentar una tirada de salvación de Fortaleza o ser empujado 5ft.</li>
    <li>Lv 10: El daño de fuerza adicional aumenta a 1d6.</li>
    <li>Lv 12: El daño de fuerza inflingido por la propiedad imbuída “de Fuerza” ignora resistencias (incluyendo daño persistente).</li>
    <li>Lv 14: En un golpe crítico, si el objetivo falla la tirada de salvación, es empujado 10ft.</li>
    <li>Lv 16: Los enemigos afectados por el daño de fuerza persistente de esta propiedad son empujados en todas las direcciones, dejándoles 
      <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=16" target="_blank">desprevenidos</a>.
    </li>
    <li>Lv 18: En un golpe crítico, si el objetivo falla la tirada de salvación, es empujado 20ft.</li>
    <li>Lv 20: Al final del turno de un enemigo que esté siendo afectado por el daño de fuerza persistente de esta propiedad, tiene que superar una tirada de Fortaleza o ser 
      <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=31" target="_blank">derribados</a>. 
    </li> 
  </ul>
`;

export const DIESTRO_PROP = `
  <h1 class="text-2xl font-bold">DIESTRO</h1>
  <p><b>Traits: </b>Magical, Transmutation</p>
  <p><b>Tipo: </b>Objeto de habilidad (habilidad basada en Destreza)</p>
  <p><b>Partes: </b>La criatura debe tener Destreza como su mayor o segundo mayor modificador de característica.</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el objeto con hábil destreza</p>
  <hr/>
  <ul class="ml-8">
    <li>Lv 8: Una vez al día, puedes usar una acción (Interacción) para ganar un bonus por status de +10 a todas tus velocidades durante 10 minutos.</li>
    <li>Lv 14: La bonificación a tus velocidades aumenta a +20 pies y mientras dure el efecto, ganas los efectos de 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=371" target="_blank">water walk</a>
    </li>
    <li>Lv 17: Cuando invistes el objeto, incrementas tu puntuación de Destreza en 2 o la aumentas a 18, lo que resulte en una puntuación más alta. El objeto gana el rasgo “apex”.</li>
    <li>Lv 20: La bonificación a tus velocidades aumenta a +30 pies y mientras dure el efecto, ganas los efectos de <i>water walk</i> y 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=6" target="_blank">air walk</a>
    </li>
  </ul>
`;

export const FLAGELANTE_PROP = `
  <h1 class="text-2xl font-bold">FLAGELANTE</h1>
  <p><b>Traits: </b>Evocation, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo tiene que ser del mismo tipo que elegiste para esta propiedad o, a discreción del GM, de un tipo que sea anatema para el tipo de criaturas que elegiste para esta propiedad (como por ejemplo usar partes de celestiales para combatir contra avernales).</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con energía engendrada por la derrota de la criatura cuyas partes residen en el arma, o energías anatemáticas a un tipo de criatura concreto, para hacer el arma especialmente efectiva contra un tipo de criaturas. Cuando creas un arma flagelante, elige aberración, animal, astral, avernal, bestia, celestial, cieno, constructo, dragón, elemental, espíritu, etéreo, feérico, gigante, monitor, negativo, no muerto, positivo, sueño, tiempo, o plantas Y hongos. A partir de aquí, esta elección se llamará “el “tipo flagelante” del arma. </p>
  <hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 2: Los golpes con este arma hacen 1 punto de daño adicional del tipo de daño del arma contra criaturas del tipo flagelante del arma.</li>
    <li>Lv 4: El daño adicional contra criaturas del tipo flagelante aumenta a 1d4.</li>
    <li>Lv 6: El daño adicional contra criaturas del tipo flagelante aumenta a 1d6. En un golpe crítico drenas la fuerza vital de la criatura de ese tipo, dejándola 
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=37" target="_blank">debilitada</a> 
      1 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 10: El daño base del arma ignora los primeros 5 puntos de resistencia contra criaturas del tipo flagelante.</li>
    <li>Lv 14: El arma puede acabar directamente con criaturas del tipo flagelante. En un golpe crítico, en lugar de estar debilitado 1 hasta el final de tu siguiente turno, el objetivo tiene que intentar una tirada de Fortaleza. En un éxito crítico queda debilitado 1 hasta el final de tu siguiente turno; en un éxito queda debilitado 2; en un fallo queda debilitado 3 y en un fallo crítico, es destruida por completo. Este efecto tiene el rasgo “incapacitation”.</li>
    <li>Lv 16: El daño adicional contra criaturas del tipo flagelante aumenta a 1d8.</li>
    <li>Lv 20: El daño adicional contra criaturas del tipo flagelante aumenta a 1d10.</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA.</b></p>
  <ul class="ml-8">
    <li>Lv 2: Los golpes con este arma causan sangrado profuso contra criaturas del tipo flagelante del arma. Los golpes con este arma hacen 1 punto de daño por sangrado persistente. * Lv 4: Los golpes con este arma hacen 1 punto de daño adicional del tipo de daño base del arma contra criaturas del tipo flagelante. * Lv 6: En un golpe crítico drenas la fuerza vital de la criatura de ese tipo, dejándola debilitada 1 hasta el final de tu siguiente turno.</li>
    <li>Lv 10: El daño base del arma ignora los primeros 5 puntos de resistencia contra criaturas del tipo flagelante, y el daño por sangrado persistente ignora la inmunidad del objetivo.</li>
    <li>Lv 12: El daño por sangrado persistente contra una criatura del tipo flagelante aumenta a 1d8</li>
    <li>Lv 14: El arma puede acabar directamente con criaturas del tipo flagelante. En un golpe crítico, en lugar de estar debilitado 1 hasta el final de tu siguiente turno, el objetivo tiene que intentar una tirada de Fortaleza. En un éxito crítico queda debilitado 1 hasta el final de tu siguiente turno; en un éxito queda debilitado 2; en un fallo queda debilitado 3 y en un fallo crítico, es destruida por completo. Este efecto tiene el rasgo “incapacitation”.</li>
    <li>Lv 16: El daño por sangrado persistente contra una criatura del tipo flagelante aumenta a 1d10.</li>
    <li>Lv 20: La hemorragia continúa drenando la fuerza de la criatura del tipo flagelante. La condición de debilitado en un golpe crítico dura mientras dura el daño por sangrado persistente o hasta el final de tu siguiente turno, lo que sea más largo. </li> 
  </ul>
`;

export const FORTIFICADA_PROP = `
  <h1 class="text-2xl font-bold">FORTIFICADA</h1>
  <p><b>Traits: </b>Abjuration, Magical</p>
  <p><b>Tipo: </b>Armadura (debe ser media o pesada)</p>
  <p><b>Partes: </b>La criatura debe tener resistencia o inmunidad al daño de precisión o golpes críticos.</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con poderosas fortificaciones para rechazar ataques mortales. Esto hace la armadura más densa, incrementando su Bulk en 1 y la Fuerza necesaria para reducir sus penalizaciones en 2.</p>
  <p>Cuando la propiedad sea nivel 6, siempre que sufras un golpe crítico, puedes intentar una tirada básica de DC 20. En un éxito, el golpe se convierte en un ataque normal. La DC de la tirada se reduce en 1 a nivel 8, y se sigue reduciendo en 1 por cada dos niveles por encima de eso, hasta un mínimo de DC 13 a nivel 20. </p>
`;

export const GALVANICO_PROP = `
  <h1 class="text-2xl font-bold">GALVÁNICO</h1>
  <p><b>Traits: </b>Electricity, Force, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "electricity" o un ataque o hechizo que haga daño eléctrico</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con electricidad fulminante</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Al imbuir con esta propiedad por primera vez, elige si los hechizos otorgados son arcanos o primigenios.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=97" target="_blank">electric arc</a>, 
      aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=283" target="_blank">shocking grasp</a>, 
        una vez al día.
    </li>
    <li>Lv 6: El hechizo <i>shocking grasp</i> aumenta a nivel 2.</li>
    <li>Lv 8: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=701" target="_blank">lightning bolt</a>,
      una vez al día.
    </li>
    <li>Lv 10: Los ataques con este arma hacen 1 punto de daño eléctrico adicional.</li>
    <li>Lv 12: El hechizo <i>lightning bolt</i> aumenta a nivel 4, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=701" target="_blank">lightning storm</a>, 
        una vez al día.
    </li>
    <li>Lv 14: El daño eléctrico adicional aumenta a 1d4.</li>
    <li>Lv 16: El arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=301" target="_blank">chain lightning</a> 
      pero deja de poder lanzar <i>lightning bolt</i>. Los hechizos <i>shocking grasp</i> y <i>lightning storm</i> aumentan a nivel 6.
    </li>
    <li>Lv 18: El daño eléctrico adicional aumenta a 1d6.</li>
    <li>Lv 20: El hechizo <i>chain lightning</i> aumenta a nivel 9, y los hechizos <i>lightning storm</i> y <i>shocking grasp</i> aumentan a nivel 7.</li>
  </ul>
  <hr/>
  <p><b>CAMINO PODER</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño eléctrico adicional.</li>
    <li>Lv 6: El daño eléctrico adicional aumenta a 1d4.</li>
    <li>Lv 8: El daño eléctrico adicional aumenta a 1d6. En un golpe crítico, un chispazo sale del objetivo hacia un máximo de 2 otras criaturas a 10 pies de distancia, que sufren este mismo daño adicional.</li>
    <li>Lv 12: El daño eléctrico inflingido por la propiedad imbuida "Galvánico" ignora resistencias.</li>
    <li>Lv 14: Las dos criaturas adicionales que sufren daño en un golpe crítico pueden estar hasta a 20 pies de distancia.</li>
    <li>Lv 18: El daño eléctrico adicional aumenta a 1d8.</li>
    <li>Lv 20: En un golpe con éxito, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño eléctrico hasta el principio de tu siguiente turno. Este efecto es acumulativo.</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño eléctrico persistente.</li>
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño eléctrico adicional.</li>
    <li>Lv 8: El daño eléctrico persistente aumenta a 1d6. En un golpe crítico, un chispazo sale del objetivo hacia un máximo de 2 otras criaturas a 10 pies de distancia, que sufren este mismo daño adicional.</li>
    <li>Lv 12: El daño eléctrico inflingido por la propiedad imbuída "Galvánico" ignora resistencias (incluyendo daño persistente).</li>
    <li>Lv 14: El daño eléctrico persistente aumenta a 1d8.</li>
    <li>Lv 16: En un golpe crítico, el chispazo salta a hasta 4 otras criaturas, que pueden estar hasta a 20 pies del objetivo.</li>
    <li>Lv 18: El daño eléctrico persistente aumenta a 1d10.</li>
    <li>Lv 20: Las criaturas que sufran daño eléctrico persistente por esta propiedad se vuelven magnéticos. Los ataques con armas de metal contra esa criatura reciben un +1 circunstancial a dar hasta que la criatura deje de recibir daño eléctrico persistente. </li> 
  </ul>
`;

export const GELIDO_PROP = `
  <h1 class="text-2xl font-bold">GÉLIDO</h1>
  <p><b>Traits: </b>Cold, Force, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "cold" o un ataque o hechizo que haga daño frío</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con frío mordiente</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Al imbuir con esta propiedad por primera vez, elige si los hechizos otorgados son arcanos o primigenios.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=245" target="_blank">ray of frost</a>, 
      aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=678" target="_blank">chilling spray</a>, 
        una vez al día.
    </li>
    <li>Lv 6: El hechizo <i>chilling spray</i> aumenta a nivel 2.</li>
    <li>Lv 8: Los ataques con este arma hacen 1 punto de daño frío adicional.</li>
    <li>Lv 10: El arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=695" target="_blank">ice storm</a>, 
      una vez al día.
    </li>
    <li>Lv 12: El hechizo <i>chilling spray</i> aumenta a nivel 3, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=47" target="_blank">cone of cold</a>, 
        una vez al día.
    </li>
    <li>Lv 14: El daño frío adicional aumenta a 1d4.</li>
    <li>Lv 16: Los hechizos <i>chilling spray</i>, <i>cone of cold</i> y <i>ice storm</i> aumentan a nivel 6.</li>
    <li>Lv 18: El daño frío adicional aumenta a 1d6.</li>
    <li>Lv 20: El arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=224" target="_blank">polar ray</a>, 
        a nivel 9 una vez al día.
    </li>
  </ul>
  <hr/>
  <p><b>CAMINO PODER</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño frío adicional.</li>
    <li>Lv 6: El daño frío adicional aumenta a 1d4.</li>
    <li>Lv 8: El daño frío adicional aumenta a 1d6. En un golpe crítico, el objetivo tiene que superar una tirada de Fortaleza o quedar 
    <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=35" target="_blank">ralentizado</a> 
      1 hasta en final de tu siguiente turno.
    </li>
    <li>Lv 12: El daño frío inflingido por la propiedad imbuida "Gélido" ignora resistencias.</li>
    <li>Lv 14: En un golpe crítico, el objetivo recibe una penalización por status de 10 pies a su velocidad durante 1 ronda, además de sus otros efectos.</li>
    <li>Lv 18: El daño frío adicional aumenta a 1d8.</li>
    <li>Lv 20: En un golpe con éxito, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño frío hasta el principio de tu siguiente turno. Este efecto es acumulativo.</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño frío persistente.</li>
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño frío adicional.</li>
    <li>Lv 8: En un golpe crítico, el objetivo tiene que superar una tirada de Fortaleza o quedar 
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=35" target="_blank">ralentizado</a> 
      1 hasta en final de tu siguiente turno, y la penalización a su velocidad aumenta a 10 pies.
    </li>
    <li>Lv 12: El daño frío inflingido por la propiedad imbuída "Gélido" ignora resistencias (incluyendo daño persistente).</li>
    <li>Lv 14: La penalización a la velocidad dura mientras dure el daño persistente.</li>
    <li>Lv 16: Los enemigos adyacentes a una superficie que sufran un fallo crítico contra el efecto ralentizador quedan congelados contra esa superficie (generalmente el suelo), quedando inmobilizados hasta que Escapen.</li>
    <li>Lv 18: El daño frío persistente aumenta a 1d4.</li>
    <li>Lv 20: La penalización a la velocidad aumenta a 15 pies.</li> 
  </ul>
`;

export const HECHIZADO_PROP = `
  <h1 class="text-2xl font-bold">HECHIZADO</h1>
  <p><b>Traits: </b>Magical</p>
  <p><b>Tipo: </b>Objeto de habilidad</p>
  <p><b>Partes: </b>La criatura debe tener la habilidad correspondiente al objeto o tiene que poder lanzar el hechizo elegido.</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el objeto con un hechizo mágico. Puedes usar uno de los hechizos sugeridos para la habilidad del objeto o hablar con el GM para elegir otro. El hechizo no debe ser uno con una duración particularmente larga, como 
    <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=177" target="_blank">mage hand</a>, y no debería ser uno que sólo afecte al lanzador, como <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=345" target="_blank">true strike</a>. 
    Elige una tradición mágica que tenga el hechizo elegido; el objeto lanza el hechizo elegido usando esa tradición (arcano, divino, etc).</p>
  <p>A nivel 4 puedes imbuir un hechizo de nivel 1. A nivel 6, y cada 2 niveles, puedes imbuir un hechizo de 1 nivel superior, y si eliges un hechizo que el objeto ya poseía, éste aumenta al nuevo nivel máximo que el objeto puede lanzar. Hechizos sugeridos para cada habilidad: </p>
  <ul class="ml-8">
    <li><b>Acrobatics</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=111" target="_blank">feather fall</a>
    </li>
    <li><b>Arcana</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=180" target="_blank">magic missile</a>
    </li>
    <li><b>Athletics</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=167" target="_blank">jump</a>
    </li>
    <li><b>Crafting</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=189" target="_blank">mending</a>
    </li>
    <li><b>Deception</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=159" target="_blank">illusory disguise</a>
    </li>
    <li><b>Diplomacy</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=34" target="_blank">charm</a>
    </li>
    <li><b>Lore</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=584" target="_blank">share lore</a> 
      (lore asociado con el objeto).
    </li>
    <li><b>Medicine</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=148" target="_blank">heal</a>
    </li>
    <li><b>Nature</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=325" target="_blank">summon plant or fungus</a>
    </li>
    <li><b>Occltism</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=553" target="_blank">object reading</a>
    </li>
    <li><b>Performance</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=104" target="_blank">enthrall</a>
    </li>
    <li><b>Religion</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=25" target="_blank">bless</a>
    </li>
    <li><b>Society</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=195" target="_blank">mindlink</a>
    </li>
    <li><b>Stealth</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=164" target="_blank">invisibility</a>
    </li>
    <li><b>Survival</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=99" target="_blank">endure elements</a>
    </li>
    <li><b>Thievery</b>: 
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=168" target="_blank">knock</a>
    </li>
  </ul>
`;

export const HERCÚLEO_PROP = `
  <h1 class="text-2xl font-bold">HERCÚLEO</h1>
  <p><b>Traits: </b>Magical, Transmutation</p>
  <p><b>Tipo: </b>Objeto de habilidad (Athletics)</p>
  <p><b>Partes: </b>La criatura debe tener Fuerza como su mayor o segundo mayor modificador de característica.</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el objeto con fuerza feroz</p>
  <hr/>
  <ul class="ml-8">
    <li>Lv 8: El objeto puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=94" target="_blank">earthbind</a>
      una vez al día como hechizo primigenio.
    </li>
    <li>Lv 14: El objeto puede lanzar earthbind una vez por hora en vez de una vez por día.</li>
    <li>Lv 17: Cuando invistes el objeto, incrementas tu puntuación de Fuerza en 2 o la aumentas a 18, lo que resulte en una puntuación más alta. El objeto gana el rasgo “apex”.</li>
    <li>Lv 20: El objeto puede lanzar <i>earthbind</i> una vez por minuto en vez de una vez por hora.</li>
  </ul>
`;

export const IGNEO_PROP = `
  <h1 class="text-2xl font-bold">íGNEO</h1>
  <p><b>Traits: </b>Fire, Force, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "fire" o un ataque o hechizo que haga daño de fuego</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con fuego achicharrante</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Al imbuir con esta propiedad por primera vez, elige si los hechizos otorgados son arcanos o primigenios.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=236" target="_blank">produce flame</a>, 
      aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=30" target="_blank">burning hands</a>, 
        una vez al día.
    </li>
    <li>Lv 6: El hechizo <i>burning hands</i> aumenta a nivel 2.</li>
    <li>Lv 8: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=121" target="_blank">flaming sphere</a>
        y <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=119" target="_blank">fireball</a>
      una vez al día cada uno, pero ya no puede lanzar burning hands.
    </li>
    <li>Lv 10: Los ataques con este arma hacen 1 punto de daño de fuego adicional.</li>
    <li>Lv 12: Los hechizos <i>fireball</i> y <i>flaming sphere</i> aumentan a nivel 4, y el arma puede lanzar
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=362" target="_blank">wall of fire</a>, 
        una vez al día.
    </li>
    <li>Lv 14: El daño de fuego adicional aumenta a 1d4.</li>
    <li>Lv 16: Los hechizos <i>fireball</i>, <i>flaming sphere</i> y <i>wall of fire</i> aumentan a nivel 6</li>
    <li>Lv 18: El daño de fuego adicional aumenta a 1d6.</li>
    <li>Lv 20: El arma puede lanzar
      <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=191" target="_blank">meteor swarm</a> 
    una vez al día
    </li>
  </ul>
  <hr/>
  <p><b>CAMINO PODER</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño de fuego adicional.</li>
    <li>Lv 6: El daño de fuego adicional aumenta a 1d4.</li>
    <li>Lv 8: El daño de fuego adicional aumenta a 1d6. En un golpe crítico, el objetivo sufre 1d10 de daño de fuego persistente.</li>
    <li>Lv 12: El daño de fuego inflingido por la propiedad imbuida "Ígneo" (incluído el daño persistente) ignora resistencias.</li>
    <li>Lv 14: El daño de fuego persistente aumenta a 2d10.</li>
    <li>Lv 18: El daño de fuego adicional aumenta a 1d8.</li>
    <li>Lv 20: En un golpe con éxito, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño de fuego hasta el principio de tu siguiente turno. Este efecto es acumulativo.</li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA</b></p>
  <ul class="ml-8">
    <li>Lv 4: Los ataques con este arma hacen 1 punto de daño de fuego persistente.</li>
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño de fuego adicional.</li>
    <li>Lv 8: El daño persistente aumenta a 1d6. En un golpe crítico, el objetivo sufre 1d10 de daño de fuego persistente (este daño persistente es acumulativo con el daño normal, y como es normal, sólo se añade tras doblar el daño persistente regular en un crítico).</li>
    <li>Lv 12: El daño de fuego inflingido por la propiedad imbuída "Ígneo" ignora resistencias (incluyendo daño persistente).</li>
    <li>Lv 14: El daño de fuego persistente aumenta a 1d8.</li>
    <li>Lv 16: Los enemigos afectados por daño de fuego persistente de esta propiedad imbuida están 
      <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=16" target="_blank">distraídos</a>
    </li>
    <li>Lv 18: El daño de fuego persistente aumenta a 1d10.</li>
    <li>Lv 20: Al final del turno de un enemigo que arda con el daño persistente de esta propiedad, todos los enemigos adyacentes empiezan a arder, sufriendo el mismo daño persistente.</li> 
  </ul>
`;

export const INTELIGENTE_PROP = `
  <h1 class="text-2xl font-bold">INTELIGENTE</h1>
  <p><b>Traits: </b>Divination, Magical</p>
  <p><b>Tipo: </b>Objeto de habilidad (habilidad basada en Inteligencia)</p>
  <p><b>Partes: </b>La criatura debe tener Inteligencia como su mayor o segundo mayor modificador de característica.</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el objeto con carisma desbordante</p>
  <hr/>
  <ul class="ml-8">
    <li>Lv 8: El objeto puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=156" target="_blank">hypercognition</a>, 
        como hechizo oculto
    </li>
    <li>Lv 14: El objeto puede lanzar <i>hypercognition</i> una vez por hora en vez de una vez por día.</li>
    <li>Lv 17: Cuando invistes el objeto, incrementas tu puntuación de Inteligencia en 2 o la aumentas a 18, lo que resulte en una puntuación más alta. El objeto gana el rasgo “apex”.</li>
    <li>Lv 20: El objeto puede lanzar <i>hypercognition</i> una vez por minuto en vez de una vez por hora.</li>
  </ul>
`;

export const LEGAL_PROP = `
  <h1 class="text-2xl font-bold">LEGAL</h1>
  <p><b>Traits: </b>Evocation, Lawful, Magical</p>
  <p><b>Tipo: </b>Arma</p>
  <p><b>Partes: </b>El monstruo debe tener el rasgo "lawful" o un ataque o hechizo que haga daño legal</p>
  <hr/>
  <p><b>Efecto: </b>Imbuyes el arma con orden puro para acabar con el caos mercurial</p>
  <hr/>
  <p><b>CAMINO MAGIA. </b>Los hechizos otorgados por esta propiedad son siempre divinos.</p>
  <ul class="ml-8">
    <li>Lv 2: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=84" target="_blank">divine lance</a>, 
      haciendo sólo daño legal, aumentado hasta la mitad de su nivel redondeando hacia arriba.
    </li>
    <li>Lv 4: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=238" target="_blank">protection</a>, 
        una vez al día, protegiendo sólo contra el caos (daño caótico).
    </li>
    <li>Lv 8: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=269" target="_blank">searing light</a>, 
        una vez al día, excepto que el daño base es eléctrico en vez de fuego, y hace daño legal adicional contra celestiales, monitores y avernales caóticos en vez de daño benigno contra no muertos y avernales. Tiene los rasgos “lawful” y “electric” en vez de “good” y “fire”.
    </li>
    <li>Lv 10: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=86" target="_blank">divine wrath</a>
        (daño legal) una vez al día.
    </li>
    <li>Lv 12: Los ataques con este arma hacen 1 punto de daño legal adicional.</li>
    <li>Lv 14: El daño legal adicional aumenta a 2.</li>
    <li>Lv 16: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=82" target="_blank">divine decree</a>
        (legal) una vez al día. El hechizo <i>divine wrath</i> aumenta a nivel 5.
    </li>
    <li>Lv 18: El daño legal adicional aumenta a 3.</li>
    <li>Lv 20: El arma puede lanzar 
        <a class="link" href="https://2e.aonprd.com/Spells.aspx?ID=81" target="_blank">divine aura</a>
        (daño legal) una vez al día. El hechizo <i>divine decree</i> aumenta a nivel 8, y el hechizo <i>divine wrath</i> aumenta a nivel 7.
    </li>
  </ul><hr/>
  <p><b>CAMINO PODER.</b></p>
  <ul class="ml-8">
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño legal adicional.</li>
    <li>Lv 8: El daño legal adicional aumenta a 2.</li>
    <li>Lv 10: El daño legal adicional aumenta a 3.</li>
    <li>Lv 12: En un ataque crítico contra una criatura caótica, queda
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=3" target="_blank">torpe</a> 
      1 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 14: El daño legal inflingido por esta propiedad ignora resistencias.</li>
    <li>Lv 18: El daño legal adicional aumenta a 5.</li>
    <li>Lv 20: En un golpe con éxito contra una criatura caótica, antes de aplicar el daño, el objetivo sufre debilidad 2 al daño legal hasta el principio de tu siguiente turno (o la aumenta si ya tenía). Este efecto es acumulativo. </li>  
  </ul>
  <hr/>
  <p><b>CAMINO TÉCNICA.</b></p>
  <ul class="ml-8">
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño legal adicional.</li>
    <li>Lv 8: Los ataques con este arma hacen 1 punto de daño legal persistente.</li>
    <li>Lv 10: El daño legal persistente aumenta a 3.</li>
    <li>Lv 12: En un ataque crítico contra una criatura legal, queda
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=3" target="_blank">torpe</a> 
      1 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 14: El daño legal inflingido por esta propiedad (incluyendo daño persistente) ignora resistencias.</li>
    <li>Lv 16: En un ataque crítico contra una criatura caótica, queda        
        <a class="link" href="https://2e.aonprd.com/Conditions.aspx?ID=3" target="_blank">torpe</a> 
      2 hasta el final de tu siguiente turno.
    </li>
    <li>Lv 18: El daño legal persistente aumenta a 5.</li>
    <li>Lv 20: En un golpe crítico, comandas orden sobre el caos. Puedes ordenar al objetivo que se acerque a ti, alejarse de ti (como si estuviera huyendo), soltar lo que tenga en las manos, tirarse al suelo, o quedarse quieto en el sitio. No puede Demorar acciones o tomar reacciones hasta que haya obedecido tu orden. El efecto depende de la tirada de salvación de Voluntad. En un éxito la criatura no sufre ningún efecto; en un fallo, la criatura tiene que usar su primera acción en obedecer tu orden; y en un fallo crítico, el objetivo tiene que usar todas sus acciones en su próximo turno para obedecer tu orden. Este efecto tiene los rasgos “auditory”, “enchantment”, “linguistic”, y “mental”. </li> 
  </ul>
`;
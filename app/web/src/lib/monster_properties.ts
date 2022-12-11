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
  <p><b>CAMINO PODER.</b></p>
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
    <li>Lv 6: Los ataques con este arma hacen 1 punto de daño de caótico adicional.</li>
    <li>Lv 8: Los ataques con este arma hacen 1 punto de daño de caótico persistente.</li>
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
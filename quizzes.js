// Banco de preguntas por clase.
window.QUIZZES = {
 "1": {
  "titulo": "¿Entendiste a Zenón?",
  "qs": [
   {
    "q": "Aquiles da infinitos pasos para alcanzar a la tortuga. ¿Cuánto tiempo le lleva?",
    "opts": [
     "Infinito: nunca la alcanza",
     "Un tiempo finito: la alcanza",
     "Depende de la velocidad de la tortuga"
    ],
    "ok": 1,
    "fb": "Infinitos pasos cuyos tiempos se achican pueden sumar un total finito."
   },
   {
    "q": "La suma ½ + ¼ + ⅛ + … (infinitos términos) da…",
    "opts": [
     "Infinito",
     "Un número mayor que 1",
     "Exactamente 1"
    ],
    "ok": 2,
    "fb": "Las sumas parciales se acercan a 1 sin pasarlo: el límite es 1."
   },
   {
    "q": "¿Dónde estaba el error del razonamiento de Zenón?",
    "opts": [
     "En suponer que infinitos pasos = tiempo infinito",
     "En la velocidad de Aquiles",
     "No hay error"
    ],
    "ok": 0,
    "fb": "\"Infinitas etapas\" no implica \"duración infinita\"."
   },
   {
    "q": "La herramienta que resuelve esto con rigor es…",
    "opts": [
     "La derivada",
     "El límite",
     "El teorema de Pitágoras"
    ],
    "ok": 1,
    "fb": "El concepto de límite define a qué número converge la suma."
   }
  ]
 },
 "2": {
  "titulo": "¿Cuántos infinitos hay?",
  "qs": [
   {
    "q": "En el Hotel de Hilbert (infinitas piezas, todas ocupadas) llega 1 huésped. ¿Hay lugar?",
    "opts": [
     "No, está lleno",
     "Sí: cada uno pasa a la pieza siguiente (n→n+1)",
     "Solo si alguien se va"
    ],
    "ok": 1,
    "fb": "Con infinitas piezas, correr a todos una pieza libera la 1."
   },
   {
    "q": "¿Tienen los naturales ℕ y los pares la misma cantidad de elementos?",
    "opts": [
     "No, los pares son la mitad",
     "Sí: hay una biyección n↔2n",
     "No se puede comparar"
    ],
    "ok": 1,
    "fb": "Dos conjuntos infinitos tienen igual cardinal si existe biyección entre ellos."
   },
   {
    "q": "Un conjunto es \"numerable\" cuando…",
    "opts": [
     "Es finito",
     "Se puede poner en biyección con ℕ",
     "Tiene menos de un millón de elementos"
    ],
    "ok": 1,
    "fb": "Numerable = se puede listar 1.º, 2.º, 3.º… (biyección con ℕ)."
   },
   {
    "q": "Los números racionales ℚ son…",
    "opts": [
     "Más que ℕ",
     "Numerables (igual cardinal que ℕ)",
     "No numerables"
    ],
    "ok": 1,
    "fb": "ℚ es numerable: se pueden enumerar en zig-zag. (ℝ no lo es.)"
   }
  ]
 },
 "3": {
  "titulo": "¿Por qué √2 es irracional?",
  "qs": [
   {
    "q": "La demostración de que √2 es irracional usa…",
    "opts": [
     "Un ejemplo",
     "Reducción al absurdo",
     "Una calculadora"
    ],
    "ok": 1,
    "fb": "Se supone √2 = p/q irreducible y se llega a una contradicción."
   },
   {
    "q": "Si √2 = p/q (irreducible) ⇒ p² = 2q². Esto obliga a que p sea…",
    "opts": [
     "Impar",
     "Par",
     "Primo"
    ],
    "ok": 1,
    "fb": "p² par ⇒ p par. Luego q también resulta par: contradice \"irreducible\"."
   },
   {
    "q": "¿Qué representa geométricamente √2?",
    "opts": [
     "El área de un cuadrado de lado 2",
     "La diagonal de un cuadrado de lado 1",
     "El perímetro de un triángulo"
    ],
    "ok": 1,
    "fb": "Diagonal² = 1² + 1² = 2 ⇒ diagonal = √2."
   },
   {
    "q": "La expansión decimal de √2…",
    "opts": [
     "Termina",
     "Es periódica",
     "No termina ni es periódica"
    ],
    "ok": 2,
    "fb": "Los irracionales tienen desarrollo decimal infinito y no periódico."
   }
  ]
 },
 "4": {
  "titulo": "¿Qué significa estar cerca?",
  "qs": [
   {
    "q": "|x − 3| < 2 describe…",
    "opts": [
     "Los x entre 1 y 5",
     "Solo x = 3",
     "Los x mayores que 2"
    ],
    "ok": 0,
    "fb": "Distancia de x a 3 menor que 2: el intervalo (1, 5)."
   },
   {
    "q": "Un \"entorno de centro a y radio ε\" es el intervalo…",
    "opts": [
     "[a, a+ε]",
     "(a−ε, a+ε)",
     "(0, ε)"
    ],
    "ok": 1,
    "fb": "Entorno = (a−ε, a+ε): los puntos a distancia menor que ε de a."
   },
   {
    "q": "|x| representa…",
    "opts": [
     "El doble de x",
     "La distancia de x al 0",
     "El cuadrado de x"
    ],
    "ok": 1,
    "fb": "El valor absoluto es la distancia al origen."
   },
   {
    "q": "El intervalo [2, 5) incluye…",
    "opts": [
     "2 y 5",
     "2 pero no 5",
     "5 pero no 2"
    ],
    "ok": 1,
    "fb": "Corchete = incluye; paréntesis = excluye."
   }
  ]
 },
 "5": {
  "titulo": "Relaciones y funciones",
  "qs": [
   {
    "q": "Una relación es función cuando…",
    "opts": [
     "Cada entrada tiene exactamente una salida",
     "Tiene muchas salidas por entrada",
     "Es una recta"
    ],
    "ok": 0,
    "fb": "Función: a cada x le corresponde un único y."
   },
   {
    "q": "El \"criterio de la recta vertical\" sirve para…",
    "opts": [
     "Medir la pendiente",
     "Ver si una gráfica es función",
     "Calcular el área"
    ],
    "ok": 1,
    "fb": "Si una vertical corta la gráfica en más de un punto, no es función."
   },
   {
    "q": "Galileo descubrió que en la caída la distancia es proporcional a…",
    "opts": [
     "El tiempo t",
     "El cuadrado del tiempo t²",
     "La velocidad"
    ],
    "ok": 1,
    "fb": "d = ½gt²: la distancia crece con el cuadrado del tiempo."
   },
   {
    "q": "En d = ½gt², la variable independiente es…",
    "opts": [
     "d",
     "t",
     "g"
    ],
    "ok": 1,
    "fb": "El tiempo t es la entrada; la distancia d es la salida."
   }
  ]
 },
 "6": {
  "titulo": "La máquina f(x)",
  "qs": [
   {
    "q": "En f(x) = 2x + 1, ¿cuánto vale f(3)?",
    "opts": [
     "5",
     "7",
     "6"
    ],
    "ok": 1,
    "fb": "f(3) = 2·3 + 1 = 7."
   },
   {
    "q": "El dominio de una función es…",
    "opts": [
     "El conjunto de salidas posibles",
     "El conjunto de entradas válidas",
     "La pendiente"
    ],
    "ok": 1,
    "fb": "Dominio = valores de x que se pueden meter en la máquina."
   },
   {
    "q": "La imagen (o recorrido) es…",
    "opts": [
     "Los valores de y que efectivamente salen",
     "Todos los reales siempre",
     "El punto de corte"
    ],
    "ok": 0,
    "fb": "Imagen = conjunto de salidas que la función realmente alcanza."
   },
   {
    "q": "Para f(x) = 1/x, el dominio excluye…",
    "opts": [
     "x = 1",
     "x = 0",
     "los negativos"
    ],
    "ok": 1,
    "fb": "No se puede dividir por 0: x = 0 queda fuera del dominio."
   }
  ]
 },
 "7": {
  "titulo": "Llaves y cerraduras",
  "qs": [
   {
    "q": "Una función es INYECTIVA si…",
    "opts": [
     "Cada salida viene de a lo sumo una entrada",
     "Cubre todo el codominio",
     "Es creciente"
    ],
    "ok": 0,
    "fb": "Inyectiva: entradas distintas → salidas distintas (una llave por cerradura)."
   },
   {
    "q": "Una función es SOBREYECTIVA si…",
    "opts": [
     "No repite salidas",
     "Toda cerradura tiene su llave (cubre el codominio)",
     "Pasa por el origen"
    ],
    "ok": 1,
    "fb": "Sobreyectiva: la imagen es todo el codominio."
   },
   {
    "q": "Biyectiva significa…",
    "opts": [
     "Inyectiva y sobreyectiva a la vez",
     "Solo inyectiva",
     "Que tiene asíntotas"
    ],
    "ok": 0,
    "fb": "Biyectiva = inyectiva + sobreyectiva: emparejamiento perfecto."
   },
   {
    "q": "¿Qué funciones tienen inversa?",
    "opts": [
     "Todas",
     "Solo las biyectivas",
     "Solo las lineales"
    ],
    "ok": 1,
    "fb": "Una función tiene inversa si y solo si es biyectiva."
   }
  ]
 },
 "8": {
  "titulo": "El código César",
  "qs": [
   {
    "q": "Cifrar con César sumando 3 y luego descifrar restando 3 es un ejemplo de…",
    "opts": [
     "Composición que da la identidad: f⁻¹∘f",
     "Una función cuadrática",
     "Una relación que no es función"
    ],
    "ok": 0,
    "fb": "Descifrar es la función inversa: f⁻¹(f(x)) = x."
   },
   {
    "q": "La función inversa f⁻¹ \"deshace\" lo que hace f. Para que exista, f debe ser…",
    "opts": [
     "Par",
     "Biyectiva",
     "Constante"
    ],
    "ok": 1,
    "fb": "Solo las biyectivas tienen inversa."
   },
   {
    "q": "(g∘f)(x) significa…",
    "opts": [
     "Primero g, después f",
     "Primero f, después g",
     "f por g"
    ],
    "ok": 1,
    "fb": "Composición: se aplica f y al resultado se le aplica g."
   },
   {
    "q": "f(x) = x³ es una función…",
    "opts": [
     "Par",
     "Impar",
     "Ni par ni impar"
    ],
    "ok": 1,
    "fb": "Impar: f(−x) = −f(x). Su gráfica es simétrica respecto al origen."
   }
  ]
 },
 "9": {
  "titulo": "La línea recta",
  "qs": [
   {
    "q": "En y = mx + b, la pendiente es…",
    "opts": [
     "b",
     "m",
     "x"
    ],
    "ok": 1,
    "fb": "m es la pendiente; b es la ordenada al origen."
   },
   {
    "q": "La pendiente m se interpreta como…",
    "opts": [
     "El cociente Δy/Δx (cuánto sube por cada paso horizontal)",
     "El punto donde corta el eje y",
     "El área bajo la recta"
    ],
    "ok": 0,
    "fb": "Pendiente = cociente incremental Δy/Δx."
   },
   {
    "q": "Si m = 0, la recta es…",
    "opts": [
     "Vertical",
     "Horizontal",
     "Una parábola"
    ],
    "ok": 1,
    "fb": "Pendiente 0 ⇒ y = b constante: recta horizontal."
   },
   {
    "q": "Diferencia entre función lineal (y = mx) y afín (y = mx + b)…",
    "opts": [
     "La afín pasa siempre por el origen",
     "La lineal pasa por el origen; la afín está corrida b",
     "Son lo mismo"
    ],
    "ok": 1,
    "fb": "Lineal: b = 0 (pasa por (0,0)). Afín: b ≠ 0."
   }
  ]
 },
 "10": {
  "titulo": "¿Cómo se mide la Tierra con un palo?",
  "qs": [
   {
    "q": "Eratóstenes midió un ángulo de sombra de 7,2° en Alejandría. ¿Por qué multiplicó la distancia entre las ciudades por 50 para hallar la circunferencia?",
    "opts": [
     "Porque 7,2° es 1/50 de los 360° de una vuelta completa, así que la distancia es 1/50 de toda la circunferencia",
     "Porque la Tierra tiene 50 veces el tamaño de Egipto",
     "Porque 50 es la cantidad de días que tardaban los caminantes en ir de una ciudad a la otra"
    ],
    "ok": 0,
    "fb": "Exacto: 360°/7,2° = 50. Si el arco entre ciudades abarca 1/50 de la vuelta, toda la circunferencia es 50 veces esa distancia. Es pura proporción."
   },
   {
    "q": "En un triángulo rectángulo formado por un palo y su sombra, ¿qué razón trigonométrica relaciona la sombra (opuesto) con la altura del palo (adyacente)?",
    "opts": [
     "El seno",
     "El coseno",
     "La tangente"
    ],
    "ok": 2,
    "fb": "La tangente: tan θ = cateto opuesto / cateto adyacente = sombra / altura. Por eso con el largo de la sombra y la altura del palo se obtiene el ángulo del Sol."
   },
   {
    "q": "Si en vez de un palo de 1 metro usás uno de 3 metros con el Sol en el mismo ángulo, ¿qué pasa con la tangente de ese ángulo?",
    "opts": [
     "Se triplica, porque el palo es tres veces más alto",
     "Es la misma: la razón depende solo del ángulo, no del tamaño del triángulo",
     "Se reduce a un tercio"
    ],
    "ok": 1,
    "fb": "Sigue igual. Los dos triángulos son semejantes (mismos ángulos), así que la razón opuesto/adyacente es idéntica. Por eso un palo cualquiera sirve para medir el planeta."
   },
   {
    "q": "Eratóstenes razonó que, si la Tierra fuera plana, ambas ciudades tendrían la misma sombra. ¿Qué supuesto sobre los rayos del Sol hace falta para que su método funcione?",
    "opts": [
     "Que los rayos del Sol son paralelos entre sí al llegar a la Tierra",
     "Que el Sol gira alrededor de la Tierra",
     "Que el Sol está infinitamente lejos de Siena pero cerca de Alejandría"
    ],
    "ok": 0,
    "fb": "Justo: como los rayos llegan paralelos, la diferencia de sombras entre las dos ciudades solo puede deberse a la curvatura, y el ángulo de la sombra coincide con el ángulo central entre las ciudades."
   }
  ]
 },
 "11": {
  "titulo": "Quiz: Los navegantes y la ley del coseno",
  "qs": [
   {
    "q": "Un triángulo tiene lados 5 y 7 con un ángulo de 60° entre ellos. ¿Cuánto mide el tercer lado?",
    "opts": [
     "≈ 8,6 (con Pitágoras)",
     "≈ 6,2 (con la ley del coseno)",
     "≈ 12 (sumando los lados)"
    ],
    "ok": 1,
    "fb": "c² = 25 + 49 − 2·5·7·cos(60°) = 74 − 35 = 39, así que c ≈ 6,2. Pitágoras (8,6) está mal porque el ángulo no es de 90°."
   },
   {
    "q": "¿Qué le pasa a la ley del coseno cuando el ángulo C vale 90°?",
    "opts": [
     "Se vuelve imposible de calcular",
     "Se reduce a c² = a² + b², el teorema de Pitágoras",
     "El lado c se hace cero"
    ],
    "ok": 1,
    "fb": "Como cos(90°) = 0, el término −2ab·cos(C) se anula y queda c² = a² + b². Pitágoras es un caso particular de la ley del coseno."
   },
   {
    "q": "Si el ángulo C es mayor que 90° (obtuso), ¿qué pasa con el lado opuesto c?",
    "opts": [
     "Queda más largo que con un ángulo recto",
     "Queda más corto que con un ángulo recto",
     "No cambia"
    ],
    "ok": 0,
    "fb": "Con C obtuso, cos(C) es negativo, así que −2ab·cos(C) suma en vez de restar: c crece. Cuanto más abierto el ángulo, más lejos quedan los extremos."
   },
   {
    "q": "¿Por qué los navegantes podían ubicarse midiendo ángulos a dos faros de distancia conocida?",
    "opts": [
     "Porque tres ángulos cualesquiera determinan un triángulo",
     "Porque con los datos justos (lados y ángulos) el triángulo queda completamente determinado",
     "Porque todos los triángulos del mar son rectángulos"
    ],
    "ok": 1,
    "fb": "Un triángulo queda determinado con tres datos bien elegidos (como dos ángulos y un lado). Tres ángulos solos no alcanzan: dan la forma pero no el tamaño."
   }
  ]
 },
 "12": {
  "titulo": "Órbitas, polares y funciones periódicas",
  "qs": [
   {
    "q": "¿Qué forma tienen las órbitas de los planetas según Kepler (1609)?",
    "opts": [
     "Círculos perfectos con el Sol en el centro",
     "Elipses con el Sol en uno de los focos",
     "Espirales que se cierran"
    ],
    "ok": 1,
    "fb": "La herejía de Kepler fue abandonar el círculo: las órbitas son elipses y el Sol ocupa un foco, no el centro."
   },
   {
    "q": "En coordenadas polares un punto se ubica con…",
    "opts": [
     "Su distancia al origen r y su ángulo θ",
     "Sus coordenadas x e y",
     "Su pendiente y su ordenada al origen"
    ],
    "ok": 0,
    "fb": "En polares damos (r, θ): qué tan lejos del origen y en qué ángulo. Para órbitas y radares es el lenguaje natural."
   },
   {
    "q": "Si un punto está a r = 2 y θ = 60°, ¿cuál es su coordenada x?",
    "opts": [
     "x = 2·sen 60° ≈ 1,73",
     "x = 2·cos 60° = 1",
     "x = 2 + 60"
    ],
    "ok": 1,
    "fb": "La conversión es x = r·cos θ = 2·cos 60° = 2·(0,5) = 1. (Y y = r·sen θ ≈ 1,73.)"
   },
   {
    "q": "¿Entre qué valores está siempre el seno de cualquier ángulo?",
    "opts": [
     "Entre 0 y el tamaño del ángulo",
     "Entre −1 y 1",
     "Puede ser cualquier número real"
    ],
    "ok": 1,
    "fb": "sen θ es la altura de un punto en la circunferencia de radio 1: nunca supera 1 ni baja de −1. Por eso sen(120°)=√3/2≈0,87, no 1,5."
   }
  ]
 },
 "13": {
  "titulo": "Quiz: la parábola y el óptimo",
  "qs": [
   {
    "q": "¿Por qué la trayectoria de la bala es una parábola y no una recta?",
    "opts": [
     "Porque combina un avance parejo hacia adelante con una caída acelerada (∝ t²)",
     "Porque el cañón apunta en diagonal",
     "Porque la bala pierde velocidad de forma constante"
    ],
    "ok": 0,
    "fb": "Galileo lo mostró: el proyectil tiene dos movimientos a la vez, uno horizontal parejo y uno vertical acelerado. Su suma da una curva cuadrática, y = ax² + bx + c."
   },
   {
    "q": "Sin rozamiento, ¿a qué ángulo de disparo la bala llega MÁS lejos?",
    "opts": [
     "A 90°, lo más vertical posible",
     "A 45°",
     "A 10°, casi rasante"
    ],
    "ok": 1,
    "fb": "A 45° se equilibran el avance horizontal y el tiempo en el aire: alcance máximo. A 90° la bala sube y cae en el mismo lugar (alcance casi cero). Buscar ese ángulo es buscar el máximo de una función, no ir al extremo."
   },
   {
    "q": "En la parábola y = ax² + bx, ¿qué representa el vértice del tiro?",
    "opts": [
     "El punto donde la bala toca el suelo",
     "La altura máxima que alcanza la bala",
     "La velocidad inicial del disparo"
    ],
    "ok": 1,
    "fb": "El vértice está en x = −b/(2a). Como a<0 la parábola abre hacia abajo, así que el vértice es el punto más alto: la altura máxima del tiro."
   },
   {
    "q": "En el applet viste que 30° y 60° dan el mismo alcance. ¿Por qué?",
    "opts": [
     "Porque son ángulos complementarios (suman 90°) y R(θ)=v₀²·sen(2θ)/g",
     "Porque la velocidad es la misma",
     "Porque a esos ángulos la bala no tiene altura máxima"
    ],
    "ok": 0,
    "fb": "El alcance depende de sen(2θ), y sen(2·30°)=sen(60°)=sen(2·60°)=sen(120°). Ángulos que suman 90° comparten alcance; el máximo cae justo en el medio, 45°."
   }
  ]
 },
 "14": {
  "titulo": "Bernoulli, el interés compuesto y el número e",
  "qs": [
   {
    "q": "En el applet, al subir n (capitalizaciones por año) el monto (1+1/n)ⁿ…",
    "opts": [
     "Crece sin tope, se dispara al infinito",
     "Sube cada vez menos y se acerca a un límite ≈ 2,718",
     "Baja hasta llegar a 1",
     "Se queda clavado en 2 para siempre"
    ],
    "ok": 1,
    "fb": "Exacto: cada capitalización extra aporta cada vez menos. El monto se amontona contra e ≈ 2,71828 y nunca lo pasa. Infinitas veces no dan infinita plata."
   },
   {
    "q": "Ese número ≈ 2,71828 contra el que choca la curva es…",
    "opts": [
     "El número π",
     "El número e (base de la exponencial)",
     "El número áureo φ",
     "Simplemente 2,75 redondeado"
    ],
    "ok": 1,
    "fb": "Es e, que Euler bautizó así. Bernoulli lo encontró hacia 1683 estudiando justo el interés compuesto: el límite de (1+1/n)ⁿ cuando n crece."
   },
   {
    "q": "¿Qué tiene en común esto con la paradoja de Zenón (½+¼+⅛+…)?",
    "opts": [
     "Que ambos dan infinito",
     "Que son un proceso infinito con resultado finito (un límite)",
     "Que ninguno tiene solución",
     "Que los dos crecen de forma lineal"
    ],
    "ok": 1,
    "fb": "Igual que la serie de Zenón sumaba infinitos términos y daba 1, acá infinitas capitalizaciones dan un total finito: e. Proceso infinito, resultado finito."
   },
   {
    "q": "Diferencia entre crecer «+5 unidades por mes» y «+5% por mes»:",
    "opts": [
     "Son lo mismo escrito distinto",
     "Lo primero es lineal (suma fija); lo segundo es exponencial (multiplica, se dispara)",
     "Lo segundo siempre crece más lento",
     "Ambos cortan el eje y en el mismo punto"
    ],
    "ok": 1,
    "fb": "Lo lineal suma siempre lo mismo; lo exponencial multiplica siempre por lo mismo, así que crece proporcional a su propio tamaño y, a la larga, supera a cualquier potencia. La intuición lineal nos engaña."
   }
  ]
 },
 "15": {
  "titulo": "Quiz: la síntesis de Fourier",
  "qs": [
   {
    "q": "¿Qué afirmó Joseph Fourier alrededor de 1807, estudiando la conducción del calor?",
    "opts": [
     "Que toda función periódica se puede escribir como una suma de senos y cosenos",
     "Que el sonido viaja más rápido que la luz",
     "Que solo las ondas suaves se pueden sumar"
    ],
    "ok": 0,
    "fb": "Exacto. Fourier mostró que cualquier señal periódica —por más quebrada que sea— es una suma de senos y cosenos. Lagrange y otros se resistieron a creerlo."
   },
   {
    "q": "En el applet, al sumar el fundamental sen(x) con armónicos impares de amplitud 1/n (1/3, 1/5, 1/7…), ¿qué forma empieza a tener la curva verde?",
    "opts": [
     "Sigue siendo un seno puro idéntico",
     "Una onda cuadrada, con escalones y esquinas",
     "Una línea recta horizontal"
    ],
    "ok": 1,
    "fb": "Sí. Apilando senos suaves aparecen esquinas: la onda cuadrada. Curvas suaves construyen una forma con esquinas. Eso es la síntesis de Fourier término a término."
   },
   {
    "q": "Un diapasón y una vocal cantada. ¿Cuál es un seno casi puro y cuál una suma de muchos armónicos?",
    "opts": [
     "El diapasón es una suma de muchos; la vocal es un seno puro",
     "El diapasón es un seno casi puro; la vocal es una suma de muchos senos",
     "Los dos son senos puros idénticos"
    ],
    "ok": 1,
    "fb": "Correcto. El diapasón da una nota pura (un seno). La voz es una onda compleja: muchos senos de distintas frecuencias y amplitudes sonando juntos, como muestra su espectro."
   },
   {
    "q": "Una IA dice: «un sonido complejo como una voz humana no se puede descomponer en notas puras, es demasiado irregular». ¿Está bien?",
    "opts": [
     "Sí, solo los sonidos simples se descomponen en senos",
     "No: es al revés, los sonidos complejos son los que necesitan más senos para armarse",
     "Sí, la irregularidad impide cualquier descomposición"
    ],
    "ok": 1,
    "fb": "La IA niega el teorema central. Justamente las señales complejas se descomponen en muchísimos senos: cuanto más irregular, más componentes. Sobre esa idea funcionan el MP3 y el reconocimiento de voz."
   }
  ]
 },
 "16": {
  "titulo": "Quiz: Heaviside y las funciones por partes",
  "qs": [
   {
    "q": "La función escalón de Heaviside H(t) vale...",
    "opts": [
     "Siempre 1, sin importar t",
     "0 si t < 0 y 1 si t ≥ 0",
     "t si t es positivo y 0 si no"
    ],
    "ok": 1,
    "fb": "Exacto: H(t) modela un interruptor. Antes del instante 0 vale 0 (apagado) y desde 0 vale 1 (encendido). El cambio es instantáneo: un salto."
   },
   {
    "q": "¿Cuánto vale la parte entera (piso) ⌊2,9⌋?",
    "opts": [
     "3, porque 2,9 redondea a 3",
     "2, el mayor entero que no supera a 2,9",
     "2,9"
    ],
    "ok": 1,
    "fb": "El piso NO redondea: es el mayor entero que no se pasa de x. Como 2,9 no llega a 3, ⌊2,9⌋ = 2."
   },
   {
    "q": "En el salto de H(t) en t = 0, ¿qué pasa con los valores por izquierda y por derecha?",
    "opts": [
     "Coinciden: ambos valen 1",
     "No coinciden: por izquierda tiende a 0 y por derecha a 1",
     "Ambos valen 0"
    ],
    "ok": 1,
    "fb": "Justo eso. Por izquierda la función tiende a 0 y por derecha a 1: no coinciden, hay salto y la función es discontinua. Esa pregunta del borde abre el límite."
   },
   {
    "q": "La rampa máx(0, x) —la ReLU de las redes neuronales— en su codo es...",
    "opts": [
     "Discontinua: pega un salto",
     "Continua, aunque tiene un quiebre",
     "Igual al escalón de Heaviside"
    ],
    "ok": 1,
    "fb": "Correcto: la rampa no salta. Por izquierda y por derecha tiende al mismo valor (0), así que es continua, solo que con un quiebre. Distinto del escalón, que sí salta."
   }
  ]
 },
 "17": {
  "titulo": "Quiz: el límite y el cierre de Zenón",
  "qs": [
   {
    "q": "La suma parcial de n términos de ½+¼+⅛+… es 1 − 1/2ⁿ. En el applet, al achicar el margen ε, ¿qué pasaba con el N de pasos necesarios?",
    "opts": [
     "Se mantenía siempre en el mismo valor",
     "Hacía falta un N cada vez más grande, pero siempre existía uno que alcanzaba",
     "Llegaba un ε tan chico que ya ningún N alcanzaba",
     "El N se hacía cero"
    ],
    "ok": 1,
    "fb": "Exacto: por chico que elijas ε, siempre hay un N a partir del cual 1/2ⁿ < ε. Ese «para cualquier ε existe un N» es la idea de límite de Weierstrass: tan cerca como quieras."
   },
   {
    "q": "Una IA dice: «la suma ½+¼+⅛+… nunca llega exactamente a 1, siempre falta un pedacito, así que da aproximadamente 1». ¿Está bien?",
    "opts": [
     "Sí, las sumas parciales nunca alcanzan el 1, entonces el resultado es aproximado",
     "No: confunde las sumas parciales (que nunca llegan) con la suma infinita, que es el límite y vale exactamente 1",
     "Sí, porque 1/2ⁿ nunca es cero",
     "No, en realidad la suma se pasa de 1"
    ],
    "ok": 1,
    "fb": "La IA mezcla dos cosas. Las sumas parciales nunca llegan a 1, cierto. Pero la suma infinita es el LÍMITE de esas sumas, y vale 1 con igualdad, no «casi». «Acercarse tanto como se quiera» define el valor exacto."
   },
   {
    "q": "¿Por qué podemos afirmar que ese límite existe y es un número real?",
    "opts": [
     "Porque las sumas crecen pero están acotadas por 1, y la completitud de los reales garantiza el destino",
     "Porque alguien lo calculó con una computadora",
     "Porque 1 es un número entero",
     "Porque la serie tiene infinitos términos"
    ],
    "ok": 0,
    "fb": "Las sumas crecen y nunca pasan de 1: están acotadas. La completitud de los reales (no hay huecos) asegura que ese «destino» existe y es real. Sin completitud, el límite podría caer en un agujero. Todo el año se enlaza acá."
   },
   {
    "q": "¿Dónde estuvo exactamente el error de Zenón al decir que Aquiles nunca alcanza a la tortuga?",
    "opts": [
     "Se equivocó en una cuenta de fracciones",
     "Supuso que dar infinitos pasos exige infinito tiempo, pero los infinitos tiempos ½+¼+⅛+… suman un tiempo finito",
     "Aquiles en realidad da finitos pasos",
     "La tortuga se mueve más rápido de lo que él creía"
    ],
    "ok": 1,
    "fb": "Justo ahí: Zenón creyó que infinitos pasos requieren infinito tiempo. Pero los infinitos tiempos ½+¼+⅛+… tienen límite finito (1). Aquiles da infinitos pasos en tiempo finito y alcanza a la tortuga. Recién en el siglo XIX, con el límite, se pudo decir con rigor."
   }
  ]
 },
 "18": {
  "titulo": "Quiz: asíntotas y comportamiento asintótico",
  "qs": [
   {
    "q": "En la función 1/x, ¿qué pasa cuando x crece (10, 100, 1000…)?",
    "opts": [
     "1/x crece sin tope hacia el infinito",
     "1/x se acerca a 0 tanto como quieras, pero nunca llega a valer 0",
     "1/x se vuelve negativo"
    ],
    "ok": 1,
    "fb": "Exacto: 1/10 = 0,1; 1/100 = 0,01; 1/1000 = 0,001… cada vez más chico, acercándose a 0 sin tocarlo. La recta y = 0 es su asíntota horizontal: el valor al que tiende a lo lejos."
   },
   {
    "q": "Una asíntota vertical aparece, típicamente, donde…",
    "opts": [
     "La curva corta al eje x",
     "El denominador se anula y la función se dispara al infinito",
     "La función vale exactamente cero"
    ],
    "ok": 1,
    "fb": "Justo. En 1/x el denominador se anula en x = 0: ahí la función no existe y se dispara. Por eso x = 0 es asíntota vertical. Es el dominio de la clase 6 reapareciendo."
   },
   {
    "q": "Para f(x) = (2x+1)/(x+3), ¿a qué valor tiende cuando x → ∞ (asíntota horizontal)?",
    "opts": [
     "A 3, donde se anula el denominador",
     "A 2, el cociente de los coeficientes de x",
     "A 0 siempre, como toda racional"
    ],
    "ok": 1,
    "fb": "Cuando x es enorme, el +1 y el +3 pesan poquísimo frente a los términos en x: f(x) ≈ 2x/x = 2. La asíntota horizontal es y = 2 (y la vertical, x = −3, donde se anula el denominador)."
   },
   {
    "q": "Una IA dice: «si una curva se acerca infinitamente a una recta, en algún punto la termina tocando». ¿Está bien?",
    "opts": [
     "Sí, acercarse infinitamente obliga a tocar en algún momento",
     "No: asíntota significa justamente «que no coinciden»; se acerca tanto como quieras sin tocarla nunca",
     "Sí, pero solo en las funciones racionales"
    ],
    "ok": 1,
    "fb": "La IA cae en la trampa intuitiva, el mismo error que confunde el límite con «llegar». Asíntota viene del griego «que no coinciden»: 1/x nunca vale 0, así que jamás toca y = 0. Acercarse sin llegar es posible, y es la idea central."
   }
  ]
 },
 "19": {
  "titulo": "½ + ¼ + ⅛ + … = ?",
  "qs": [
   {
    "q": "¿A cuánto suma la serie ½ + ¼ + ⅛ + …?",
    "opts": [
     "A 1, exactamente",
     "A un número apenas menor que 1",
     "A infinito, porque hay infinitos términos"
    ],
    "ok": 0,
    "fb": "Exacto: la suma es 1, con igualdad. Las sumas parciales valen 1 − 1/2ⁿ y su límite es 1. La igualdad es exacta, no aproximada."
   },
   {
    "q": "Con n términos siempre falta un pedacito 1/2ⁿ para llegar a 1. ¿Por qué entonces la suma vale 1?",
    "opts": [
     "Porque la calculadora redondea ese pedacito a cero",
     "Porque 1 es el límite: el pedacito se hace tan chico como uno quiera, y los reales no tienen huecos",
     "Porque en realidad solo da casi 1, nunca 1 del todo"
    ],
    "ok": 1,
    "fb": "La igualdad no depende de redondeos: vale porque 1 es el límite de las sumas parciales y la completitud de los reales garantiza que ese límite existe. Una respuesta correcta con razonamiento de redondeo igual está mal."
   },
   {
    "q": "¿Cómo deshace el límite la paradoja de Zenón?",
    "opts": [
     "Demostrando que Aquiles en realidad da finitos pasos",
     "Mostrando que infinitos pasos pueden sumar un tiempo finito, así Aquiles alcanza a la tortuga",
     "Negando que el movimiento exista"
    ],
    "ok": 1,
    "fb": "El error de Zenón fue creer que «infinitos pasos» implica «tiempo infinito». La suma de infinitos tiempos cada vez menores es finita: por eso Aquiles llega."
   },
   {
    "q": "La serie 1 + 2 + 4 + 8 + … no converge, pero ½ + ¼ + ⅛ + … sí. ¿Qué las distingue?",
    "opts": [
     "La razón: si cada término es la mitad del anterior (razón <1) converge; si se duplica (razón >1) diverge",
     "Que una empieza en ½ y la otra en 1",
     "Nada, ambas dan infinito si sumás suficientes términos"
    ],
    "ok": 0,
    "fb": "Lo decisivo es la razón. Con razón menor que 1 (acá ½) los términos se achican y la suma tiene límite; con razón mayor o igual a 1 los términos no se achican y la suma crece sin tope."
   }
  ]
 },
 "20": {
  "titulo": "Quiz: parábola, vértice y discriminante",
  "qs": [
   {
    "q": "En f(x) = a·x² + b·x + c, ¿cuál es la coordenada x del vértice (y del eje de simetría)?",
    "opts": [
     "h = −b/(2a)",
     "h = c/a",
     "h = b² − 4ac"
    ],
    "ok": 0,
    "fb": "El vértice está en h = −b/(2a), y la parábola es simétrica respecto de la recta vertical x = h. La k se obtiene evaluando f(h)."
   },
   {
    "q": "Si el discriminante Δ = b² − 4ac es negativo, ¿cuántas raíces reales tiene la cuadrática?",
    "opts": [
     "Dos siempre, por ser grado 2",
     "Ninguna real: la parábola no toca el eje x",
     "Una raíz doble"
    ],
    "ok": 1,
    "fb": "Con Δ < 0 no hay raíces reales: la parábola no cruza el eje x (como x² + 1). Con Δ = 0 hay una raíz doble y con Δ > 0 hay dos. El grado 2 no garantiza dos cortes reales."
   },
   {
    "q": "¿Qué forma de la cuadrática te muestra de un vistazo las raíces?",
    "opts": [
     "General: ax² + bx + c",
     "Vértice: a(x − h)² + k",
     "Factorizada: a(x − r₁)(x − r₂)"
    ],
    "ok": 2,
    "fb": "La forma factorizada a(x − r₁)(x − r₂) exhibe las raíces r₁ y r₂. La de vértice muestra (h, k) y la general muestra la ordenada al origen c. Misma función, distinta cara."
   },
   {
    "q": "Si a < 0, la parábola abre hacia abajo. ¿Qué es entonces su vértice?",
    "opts": [
     "Un mínimo de la función",
     "Un máximo de la función",
     "Una raíz de la función"
    ],
    "ok": 1,
    "fb": "Con a < 0 abre hacia abajo, así que el vértice es el punto más alto: un máximo. Por eso resuelve problemas de óptimo como el de la verdulería (maximizar la ganancia)."
   }
  ]
 },
 "21": {
  "titulo": "¿Cuánto entendiste de las polinómicas?",
  "qs": [
   {
    "q": "¿Cuántas raíces reales puede tener, a lo sumo, un polinomio de grado 5?",
    "opts": [
     "Exactamente 5 siempre",
     "A lo sumo 5",
     "A lo sumo 10"
    ],
    "ok": 1,
    "fb": "A lo sumo n: un grado 5 puede tener menos, porque algunas raíces pueden repetirse o ser complejas. Por ejemplo x⁵ + x tiene una sola raíz real."
   },
   {
    "q": "En f(x) = (x − 2)²(x + 1), ¿qué pasa en x = 2?",
    "opts": [
     "La curva cruza el eje x",
     "La curva lo toca y rebota sin cruzar",
     "No es raíz"
    ],
    "ok": 1,
    "fb": "El factor (x − 2) aparece al cuadrado: multiplicidad par. Multiplicidad par toca y rebota; impar cruza. En x = −1 (multiplicidad 1) sí cruza."
   },
   {
    "q": "¿Hacia dónde van las ramas de un polinomio de grado par con coeficiente principal positivo?",
    "opts": [
     "Las dos para arriba (+∞)",
     "Una para arriba y otra para abajo",
     "Las dos para abajo (−∞)"
    ],
    "ok": 0,
    "fb": "Grado par: las dos ramas van para el mismo lado. Con coeficiente principal positivo, ambas suben a +∞. El término de mayor grado manda en los extremos."
   },
   {
    "q": "¿Cuál es el polinomio de grado 3 con raíces −2, 0 y 3?",
    "opts": [
     "(x + 2)(x − 3)",
     "x(x + 2)(x − 3)",
     "x²(x + 2)(x − 3)"
    ],
    "ok": 1,
    "fb": "Cada raíz r da un factor (x − r): la raíz 0 da el factor x, −2 da (x + 2) y 3 da (x − 3). El producto x(x + 2)(x − 3) es de grado 3, justo lo pedido."
   }
  ]
 },
 "22": {
  "titulo": "Potencia, raíz y dominio",
  "qs": [
   {
    "q": "¿Por qué √x solo acepta x ≥ 0, pero ∛x acepta cualquier real?",
    "opts": [
     "Porque √ es más difícil de calcular que ∛",
     "Porque la raíz de índice par exige radicando ≥ 0, mientras que la de índice impar no (∛(−8) = −2)",
     "Porque √x no es una función potencial y ∛x sí"
    ],
    "ok": 1,
    "fb": "Es el índice lo que decide. Índice par (√, ⁴√): el radicando debe ser ≥ 0, dominio [0, +∞). Índice impar (∛): acepta negativos, ∛(−8) = −2, dominio todo ℝ."
   },
   {
    "q": "Para x = −3, ¿cuánto vale √((−3)²)?",
    "opts": [
     "−3, porque la raíz y el cuadrado se cancelan",
     "3, porque √(x²) = |x| y la raíz devuelve el valor no negativo",
     "No existe, porque hay un número negativo adentro"
    ],
    "ok": 1,
    "fb": "√((−3)²) = √9 = 3 = |−3|. La regla es √(x²) = |x|, no x: el cuadrado borra el signo y la raíz devuelve siempre el valor no negativo. Cancelar «automáticamente» es el error clásico."
   },
   {
    "q": "Activaste «inversa» y viste √x como reflejo de x² sobre y = x. ¿Qué significa esa simetría?",
    "opts": [
     "Que √x y x² son la misma función escrita distinto",
     "Que √x es la inversa de x² (con dominio recortado a x ≥ 0): una deshace lo que hace la otra",
     "Que las dos curvas se cruzan en el origen por casualidad"
    ],
    "ok": 1,
    "fb": "El reflejo sobre y = x es la marca gráfica de la función inversa (la llave y la cerradura). √x deshace x²: 3 → 9 → 3. Pero x² no es inyectiva (3 y −3 dan 9), por eso hay que recortar su dominio a x ≥ 0 para invertirla."
   },
   {
    "q": "En f(x) = xᵃ, ¿qué pasa con la curva cuando el exponente a está entre 0 y 1 (como a = ½)?",
    "opts": [
     "Crece cada vez más rápido, como una exponencial",
     "Crece pero cada vez más despacio (cóncava): la forma típica de una raíz",
     "Es una recta que pasa por el origen"
    ],
    "ok": 1,
    "fb": "Con 0 < a < 1 la función crece cada vez más lento: es cóncava, la forma de √x. Con a > 1 (como x² o x³) crece cada vez más rápido. Con a = 1 es la recta y = x."
   }
  ]
 },
 "23": {
  "titulo": "Quiz: funciones racionales y homográficas",
  "qs": [
   {
    "q": "En la homográfica f(x) = (a·x + b)/(c·x + d), ¿dónde está la asíntota vertical?",
    "opts": [
     "En x = a/c, el cociente de los coeficientes de x",
     "En x = −d/c, donde se anula el denominador",
     "En y = 0, como en toda función racional"
    ],
    "ok": 1,
    "fb": "Exacto: la asíntota vertical aparece donde el denominador c·x + d se hace 0, o sea x = −d/c. Ahí la división se rompe, el punto se saca del dominio y la curva se dispara a ±∞. El a/c es la HORIZONTAL, no la vertical."
   },
   {
    "q": "¿A qué valor tiende (a·x + b)/(c·x + d) cuando x → ±∞ (asíntota horizontal)?",
    "opts": [
     "A a/c, porque a lo lejos b y d pesan poco frente a los términos en x",
     "A −d/c, donde se anula el denominador",
     "A b/d, el cociente de los términos independientes"
    ],
    "ok": 0,
    "fb": "Justo. Cuando x es enorme, b y d casi no cuentan al lado de a·x y c·x, así que f(x) ≈ a·x/(c·x) = a/c. Esa recta y = a/c es el techo (o piso) al que se acerca sin tocar."
   },
   {
    "q": "Para f(x) = (x + 1)/(x − 2), ¿cuál es su DOMINIO y dónde vale 0?",
    "opts": [
     "Dominio ℝ − {2}; vale 0 en x = −1",
     "Dominio ℝ − {−1}; vale 0 en x = 2",
     "Dominio todos los reales; nunca vale 0"
    ],
    "ok": 0,
    "fb": "Bien distinguido: la función NO está definida donde se anula el denominador (x = 2), así que el dominio es ℝ − {2}. Y vale 0 donde se anula el NUMERADOR (x = −1), porque ahí f(−1) = 0/(−3) = 0. Son dos preguntas distintas: ¡no confundir el cero con el agujero!"
   },
   {
    "q": "Una IA dice: «el dominio de (x + 1)/(x − 2) son todos los reales menos x = −1, porque ahí el numerador da 0». ¿Está bien?",
    "opts": [
     "Sí, donde el numerador es 0 la función se rompe",
     "No: en x = −1 la función vale 0 (existe); lo que rompe el dominio es x = 2, donde se anula el DENOMINADOR",
     "Sí, hay que sacar tanto x = −1 como x = 2"
    ],
    "ok": 1,
    "fb": "La IA confundió las dos cosas. En x = −1 el numerador es 0 pero la división por −3 está perfecta: f(−1) = 0, la función existe. Lo único que rompe el dominio es dividir por cero, en x = 2. Dominio = ℝ − {2}. Validar es separar «dónde vale 0» de «dónde no existe»."
   }
  ]
 },
 "24": {
  "titulo": "Quiz: exponencial, logaritmo e inversas",
  "qs": [
   {
    "q": "¿Qué significa exactamente log₂(1024) = 10?",
    "opts": [
     "Que 2 elevado a la 10 da 1024, o sea: ¿cuántas veces hay que duplicar para llegar a 1024?",
     "Que 1024 dividido 2 da 10",
     "Que 2 por 10 da 1024"
    ],
    "ok": 0,
    "fb": "Exacto: el logaritmo responde «¿a qué exponente elevo la base para obtener este número?». Como 2¹⁰ = 1024, log₂(1024) = 10. Es el exponente, nada más."
   },
   {
    "q": "En el applet, log_a(x) es el reflejo de aˣ sobre la recta y = x. ¿Qué le pasa al dominio y la imagen al pasar de la exponencial a su inversa?",
    "opts": [
     "Quedan igual: ambas valen para todo número real",
     "Se intercambian: aˣ tiene imagen (0, +∞), así que log_a(x) tiene dominio (0, +∞) y solo existe para x > 0",
     "Las dos solo existen para x positivo"
    ],
    "ok": 1,
    "fb": "Justo eso. Como son inversas, intercambian dominio e imagen. La exponencial nunca da un valor ≤ 0, por eso el logaritmo solo acepta entradas positivas: no hay log de 0 ni de negativos."
   },
   {
    "q": "Una IA aplica una propiedad: «log(2 + 3) = log(2) + log(3)». ¿Está bien?",
    "opts": [
     "Sí, el logaritmo siempre reparte sobre la suma",
     "No: la propiedad real es log(a·b) = log(a) + log(b); el log convierte el PRODUCTO en suma, no la suma",
     "Sí, porque 2 + 3 = 5 y el log de 5 existe"
    ],
    "ok": 1,
    "fb": "Mal. El log parte productos, no sumas. log(2+3) = log(5) ≈ 0,70, pero log(2) + log(3) = log(6) ≈ 0,78. Distintos. Lo que sí vale es log(2·3) = log(2) + log(3). Es un error clásico que la IA copia porque «se parece» a la propiedad verdadera."
   },
   {
    "q": "Un terremoto de magnitud 7 vs. uno de 5 en escala Richter (logarítmica, base 10). ¿Cuántas veces más fuerte es?",
    "opts": [
     "1,4 veces, porque 7 es un 40% más que 5",
     "2 veces, porque 7 − 5 = 2",
     "100 veces, porque cada unidad multiplica por 10 y son 2 unidades (10×10)"
    ],
    "ok": 2,
    "fb": "En una escala logarítmica cada unidad significa multiplicar por 10. Dos unidades son 10×10 = 100 veces más. Por eso un 7 no es «un poco más» que un 5: es cien veces más fuerte. Leer mal un eje logarítmico oculta diferencias enormes."
   }
  ]
 },
 "25": {
  "titulo": "¿Por qué sen²x + cos²x siempre da 1?",
  "qs": [
   {
    "q": "En el círculo de radio 1, el punto a un ángulo θ es (cos θ, sen θ). ¿De dónde sale que sen²θ + cos²θ = 1?",
    "opts": [
     "Es una definición que hay que memorizar, sin demostración",
     "Es el teorema de Pitágoras: los catetos cos θ y sen θ tienen como hipotenusa el radio, que vale 1",
     "Vale solo para algunos ángulos especiales como 30°, 45° y 60°"
    ],
    "ok": 1,
    "fb": "Justo. Los catetos del triángulo son cos θ (horizontal) y sen θ (vertical), y la hipotenusa es el radio = 1. Pitágoras: cos²θ + sen²θ = 1². Por eso vale para CUALQUIER ángulo: es Pitágoras escondido en el círculo."
   },
   {
    "q": "¿Cuál es la diferencia entre una identidad como sen²x + cos²x = 1 y una ecuación como sen x = 1/2?",
    "opts": [
     "La identidad vale para todo x; la ecuación vale solo para ciertos x",
     "Son lo mismo, solo cambia la letra que se usa",
     "La identidad tiene una sola solución y la ecuación tiene infinitas"
    ],
    "ok": 0,
    "fb": "Eso es. La identidad es una igualdad que se cumple para TODO ángulo (siempre pasa). La ecuación pregunta qué ángulos concretos la cumplen (pasa a veces). Confundirlas es como confundir «esto siempre pasa» con «esto pasa a veces»."
   },
   {
    "q": "Si sen x = 0,6 y x es un ángulo agudo, ¿cuánto vale cos x?",
    "opts": [
     "0,4, porque 1 − 0,6 = 0,4",
     "0,8, porque cos x = √(1 − 0,6²) = √0,64",
     "No se puede saber sin una calculadora de ángulos"
    ],
    "ok": 1,
    "fb": "Correcto. De la identidad: cos²x = 1 − sen²x = 1 − 0,36 = 0,64, así que cos x = √0,64 = 0,8. Se aclara «agudo» porque si no, cos x también podría ser −0,8 (en el segundo cuadrante el coseno es negativo)."
   },
   {
    "q": "Una IA dice que sen x = 1/2 tiene una única solución, x = 30°. ¿Está bien?",
    "opts": [
     "Sí, 30° es el ángulo cuyo seno vale 1/2",
     "No: en una vuelta ya hay dos (30° y 150°), y por la periodicidad hay infinitas (±360°·k)",
     "No, porque sen x = 1/2 no tiene ninguna solución"
    ],
    "ok": 1,
    "fb": "La IA se queda con la primera que encuentra. En el círculo hay dos puntos a la misma altura: 30° y 150°. Y como el seno se repite cada vuelta, sumando ±360°·k aparecen infinitas soluciones. El error típico: tratar una ecuación trigonométrica como si tuviera una sola raíz."
   }
  ]
 },
 "26": {
  "titulo": "Sucesiones: ¿hacia dónde van?",
  "qs": [
   {
    "q": "¿Por qué una sucesión se grafica con puntos sueltos y no con una curva continua?",
    "opts": [
     "Porque su dominio son solo los naturales 1, 2, 3, …, no todos los reales",
     "Porque siempre tiene infinitos términos",
     "Por una convención para que se vea más prolijo"
    ],
    "ok": 0,
    "fb": "Una sucesión es una función a: ℕ → ℝ. Como su dominio es discreto (un término por cada natural), entre n=2 y n=3 no hay nada: por eso son puntos sueltos y no una curva."
   },
   {
    "q": "En aₙ = 1/n los puntos se acercan a 0 al crecer n. ¿La sucesión llega alguna vez exactamente a 0?",
    "opts": [
     "Sí, a partir de un n bastante grande vale 0",
     "No: 1/n es positivo para todo n, tiende a 0 pero nunca lo alcanza",
     "Sí, cuando n llega a infinito vale 0"
    ],
    "ok": 1,
    "fb": "Acercarse no es llegar. 1/1000000 es chiquísimo pero positivo, y nunca será 0. El límite es 0, pero ningún término lo toca. Justo el malentendido que el concepto de límite viene a corregir."
   },
   {
    "q": "¿Cuál es la diferencia entre una progresión aritmética y una geométrica?",
    "opts": [
     "La aritmética suma siempre lo mismo (es la recta sobre ℕ); la geométrica multiplica siempre por lo mismo (la exponencial sobre ℕ)",
     "La aritmética crece y la geométrica decrece siempre",
     "No hay diferencia real, son dos nombres para lo mismo"
    ],
    "ok": 0,
    "fb": "Aritmética: aₙ = a₁ + (n−1)·d, se suma una diferencia constante (la pendiente sobre ℕ). Geométrica: aₙ = a₁·rⁿ⁻¹, se multiplica por una razón constante (lo exponencial sobre ℕ)."
   },
   {
    "q": "La sucesión aₙ = (−1)ⁿ da 1, −1, 1, −1, … ¿Converge?",
    "opts": [
     "Sí, converge a 0 porque es el promedio",
     "Sí, converge a 1 y a −1 a la vez",
     "No: salta entre dos valores y nunca se queda cerca de uno solo, así que diverge"
    ],
    "ok": 2,
    "fb": "Para converger, los términos tienen que amontonarse cerca de UN número. Acá oscilan eternamente entre 1 y −1 sin estabilizarse: no hay límite, la sucesión diverge."
   }
  ]
 }
};

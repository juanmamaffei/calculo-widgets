// Banco de preguntas por clase. Cada quiz: 4 preguntas, opción correcta (ok) + feedback (fb).
window.QUIZZES = {
  1: { titulo: '¿Entendiste a Zenón?', qs: [
    { q: 'Aquiles da infinitos pasos para alcanzar a la tortuga. ¿Cuánto tiempo le lleva?', opts: ['Infinito: nunca la alcanza', 'Un tiempo finito: la alcanza', 'Depende de la velocidad de la tortuga'], ok: 1, fb: 'Infinitos pasos cuyos tiempos se achican pueden sumar un total finito.' },
    { q: 'La suma ½ + ¼ + ⅛ + … (infinitos términos) da…', opts: ['Infinito', 'Un número mayor que 1', 'Exactamente 1'], ok: 2, fb: 'Las sumas parciales se acercan a 1 sin pasarlo: el límite es 1.' },
    { q: '¿Dónde estaba el error del razonamiento de Zenón?', opts: ['En suponer que infinitos pasos = tiempo infinito', 'En la velocidad de Aquiles', 'No hay error'], ok: 0, fb: '"Infinitas etapas" no implica "duración infinita".' },
    { q: 'La herramienta que resuelve esto con rigor es…', opts: ['La derivada', 'El límite', 'El teorema de Pitágoras'], ok: 1, fb: 'El concepto de límite define a qué número converge la suma.' },
  ]},
  2: { titulo: '¿Cuántos infinitos hay?', qs: [
    { q: 'En el Hotel de Hilbert (infinitas piezas, todas ocupadas) llega 1 huésped. ¿Hay lugar?', opts: ['No, está lleno', 'Sí: cada uno pasa a la pieza siguiente (n→n+1)', 'Solo si alguien se va'], ok: 1, fb: 'Con infinitas piezas, correr a todos una pieza libera la 1.' },
    { q: '¿Tienen los naturales ℕ y los pares la misma cantidad de elementos?', opts: ['No, los pares son la mitad', 'Sí: hay una biyección n↔2n', 'No se puede comparar'], ok: 1, fb: 'Dos conjuntos infinitos tienen igual cardinal si existe biyección entre ellos.' },
    { q: 'Un conjunto es "numerable" cuando…', opts: ['Es finito', 'Se puede poner en biyección con ℕ', 'Tiene menos de un millón de elementos'], ok: 1, fb: 'Numerable = se puede listar 1.º, 2.º, 3.º… (biyección con ℕ).' },
    { q: 'Los números racionales ℚ son…', opts: ['Más que ℕ', 'Numerables (igual cardinal que ℕ)', 'No numerables'], ok: 1, fb: 'ℚ es numerable: se pueden enumerar en zig-zag. (ℝ no lo es.)' },
  ]},
  3: { titulo: '¿Por qué √2 es irracional?', qs: [
    { q: 'La demostración de que √2 es irracional usa…', opts: ['Un ejemplo', 'Reducción al absurdo', 'Una calculadora'], ok: 1, fb: 'Se supone √2 = p/q irreducible y se llega a una contradicción.' },
    { q: 'Si √2 = p/q (irreducible) ⇒ p² = 2q². Esto obliga a que p sea…', opts: ['Impar', 'Par', 'Primo'], ok: 1, fb: 'p² par ⇒ p par. Luego q también resulta par: contradice "irreducible".' },
    { q: '¿Qué representa geométricamente √2?', opts: ['El área de un cuadrado de lado 2', 'La diagonal de un cuadrado de lado 1', 'El perímetro de un triángulo'], ok: 1, fb: 'Diagonal² = 1² + 1² = 2 ⇒ diagonal = √2.' },
    { q: 'La expansión decimal de √2…', opts: ['Termina', 'Es periódica', 'No termina ni es periódica'], ok: 2, fb: 'Los irracionales tienen desarrollo decimal infinito y no periódico.' },
  ]},
  4: { titulo: '¿Qué significa estar cerca?', qs: [
    { q: '|x − 3| < 2 describe…', opts: ['Los x entre 1 y 5', 'Solo x = 3', 'Los x mayores que 2'], ok: 0, fb: 'Distancia de x a 3 menor que 2: el intervalo (1, 5).' },
    { q: 'Un "entorno de centro a y radio ε" es el intervalo…', opts: ['[a, a+ε]', '(a−ε, a+ε)', '(0, ε)'], ok: 1, fb: 'Entorno = (a−ε, a+ε): los puntos a distancia menor que ε de a.' },
    { q: '|x| representa…', opts: ['El doble de x', 'La distancia de x al 0', 'El cuadrado de x'], ok: 1, fb: 'El valor absoluto es la distancia al origen.' },
    { q: 'El intervalo [2, 5) incluye…', opts: ['2 y 5', '2 pero no 5', '5 pero no 2'], ok: 1, fb: 'Corchete = incluye; paréntesis = excluye.' },
  ]},
  5: { titulo: 'Relaciones y funciones', qs: [
    { q: 'Una relación es función cuando…', opts: ['Cada entrada tiene exactamente una salida', 'Tiene muchas salidas por entrada', 'Es una recta'], ok: 0, fb: 'Función: a cada x le corresponde un único y.' },
    { q: 'El "criterio de la recta vertical" sirve para…', opts: ['Medir la pendiente', 'Ver si una gráfica es función', 'Calcular el área'], ok: 1, fb: 'Si una vertical corta la gráfica en más de un punto, no es función.' },
    { q: 'Galileo descubrió que en la caída la distancia es proporcional a…', opts: ['El tiempo t', 'El cuadrado del tiempo t²', 'La velocidad'], ok: 1, fb: 'd = ½gt²: la distancia crece con el cuadrado del tiempo.' },
    { q: 'En d = ½gt², la variable independiente es…', opts: ['d', 't', 'g'], ok: 1, fb: 'El tiempo t es la entrada; la distancia d es la salida.' },
  ]},
  6: { titulo: 'La máquina f(x)', qs: [
    { q: 'En f(x) = 2x + 1, ¿cuánto vale f(3)?', opts: ['5', '7', '6'], ok: 1, fb: 'f(3) = 2·3 + 1 = 7.' },
    { q: 'El dominio de una función es…', opts: ['El conjunto de salidas posibles', 'El conjunto de entradas válidas', 'La pendiente'], ok: 1, fb: 'Dominio = valores de x que se pueden meter en la máquina.' },
    { q: 'La imagen (o recorrido) es…', opts: ['Los valores de y que efectivamente salen', 'Todos los reales siempre', 'El punto de corte'], ok: 0, fb: 'Imagen = conjunto de salidas que la función realmente alcanza.' },
    { q: 'Para f(x) = 1/x, el dominio excluye…', opts: ['x = 1', 'x = 0', 'los negativos'], ok: 1, fb: 'No se puede dividir por 0: x = 0 queda fuera del dominio.' },
  ]},
  7: { titulo: 'Llaves y cerraduras', qs: [
    { q: 'Una función es INYECTIVA si…', opts: ['Cada salida viene de a lo sumo una entrada', 'Cubre todo el codominio', 'Es creciente'], ok: 0, fb: 'Inyectiva: entradas distintas → salidas distintas (una llave por cerradura).' },
    { q: 'Una función es SOBREYECTIVA si…', opts: ['No repite salidas', 'Toda cerradura tiene su llave (cubre el codominio)', 'Pasa por el origen'], ok: 1, fb: 'Sobreyectiva: la imagen es todo el codominio.' },
    { q: 'Biyectiva significa…', opts: ['Inyectiva y sobreyectiva a la vez', 'Solo inyectiva', 'Que tiene asíntotas'], ok: 0, fb: 'Biyectiva = inyectiva + sobreyectiva: emparejamiento perfecto.' },
    { q: '¿Qué funciones tienen inversa?', opts: ['Todas', 'Solo las biyectivas', 'Solo las lineales'], ok: 1, fb: 'Una función tiene inversa si y solo si es biyectiva.' },
  ]},
  8: { titulo: 'El código César', qs: [
    { q: 'Cifrar con César sumando 3 y luego descifrar restando 3 es un ejemplo de…', opts: ['Composición que da la identidad: f⁻¹∘f', 'Una función cuadrática', 'Una relación que no es función'], ok: 0, fb: 'Descifrar es la función inversa: f⁻¹(f(x)) = x.' },
    { q: 'La función inversa f⁻¹ "deshace" lo que hace f. Para que exista, f debe ser…', opts: ['Par', 'Biyectiva', 'Constante'], ok: 1, fb: 'Solo las biyectivas tienen inversa.' },
    { q: '(g∘f)(x) significa…', opts: ['Primero g, después f', 'Primero f, después g', 'f por g'], ok: 1, fb: 'Composición: se aplica f y al resultado se le aplica g.' },
    { q: 'f(x) = x³ es una función…', opts: ['Par', 'Impar', 'Ni par ni impar'], ok: 1, fb: 'Impar: f(−x) = −f(x). Su gráfica es simétrica respecto al origen.' },
  ]},
  9: { titulo: 'La línea recta', qs: [
    { q: 'En y = mx + b, la pendiente es…', opts: ['b', 'm', 'x'], ok: 1, fb: 'm es la pendiente; b es la ordenada al origen.' },
    { q: 'La pendiente m se interpreta como…', opts: ['El cociente Δy/Δx (cuánto sube por cada paso horizontal)', 'El punto donde corta el eje y', 'El área bajo la recta'], ok: 0, fb: 'Pendiente = cociente incremental Δy/Δx.' },
    { q: 'Si m = 0, la recta es…', opts: ['Vertical', 'Horizontal', 'Una parábola'], ok: 1, fb: 'Pendiente 0 ⇒ y = b constante: recta horizontal.' },
    { q: 'Diferencia entre función lineal (y = mx) y afín (y = mx + b)…', opts: ['La afín pasa siempre por el origen', 'La lineal pasa por el origen; la afín está corrida b', 'Son lo mismo'], ok: 1, fb: 'Lineal: b = 0 (pasa por (0,0)). Afín: b ≠ 0.' },
  ]},
};

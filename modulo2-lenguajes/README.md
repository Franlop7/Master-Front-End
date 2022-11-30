# Modulo 2 - Lenguajes

## 1. Array operations

### Head

Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

`const head = (/* array */) => {}; // Implementation here.`

### Tail

Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

`const tail = (/* array */) => {}; // Implementation here.`

### Init

Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

`const init = (/* array */) => {}; // Implementation here.`

### Last

Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.

`const last = (/* array */) => {}; // Implementation here.`

## 2. Concat

Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

### Opcional

Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

## 3. Clone Merge

### Clone

Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:

`function clone(source) { // Implementation here. }`

### Merge

Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

Por ejemplo, dados estos 2 objetos:

```js
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
```

el resultado de mezclar `a` sobre `b` sería:

`merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}`

TIP: Puedes usar la función "clone" del apartado A.

```js
function merge(source, target) {
// Implementation here.
}
```
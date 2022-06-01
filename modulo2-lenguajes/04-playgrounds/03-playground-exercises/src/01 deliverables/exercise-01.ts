console.log("************** DELIVERABLE 01 *********************");

// 1. Array operations

// Head

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.
// Utiliza destructuring.

const myArray: string[] = ["uno", "dos", "tres", "cuatro", "cinco"];

const head = ([first]: string[]) => first;
console.log("El primer elemento de su Array es: ", head(myArray));

// Tail

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.
// Utiliza rest operator.

const tail = ([, ...rest]: string[]) => rest;
console.log(
  "Aqui tiene todos los elemenos del array menos el primero",
  tail(myArray)
);

// Init

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
// Utiliza los métodos que ofrece Array.prototype.

const init = (arr: Array<string>): Array<string> =>
  arr.slice(0, arr.length - 1);
console.log("Aqui el Array sin el ultimo elemento: ", init(myArray));

// Last

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arr: Array<string>): string => arr[arr.length - 1];
console.log("Aqui el ultimo elemento del array: ", last(myArray));

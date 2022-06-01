console.log("************** DELIVERABLE 02 *********************");

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos.
// Utiliza rest / spread operators.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["uno", "dos", "tres", "cuatro", "cinco"];
const arr3 = [6, 7, 8, 9, 10];

const concat = <T, A>(a: Array<T>, b: Array<A>): Array<T | A> => [...a, ...b];
console.log("Resultado de los array concatenado: ", concat(arr1, arr2));

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const multiConcat = (...args) => [...args];
console.log("Resultado de multiples entradas de arrays mas de 2: ", multiConcat(...arr1, ...arr2, ...arr3));


// const multConcat = <T extends any[]>(...arg: T): Concat2<T> => {
//   type Concat2<T extends any[][]> = T[number] extends (infer R)[] ? R[] : never;

//   console.log(
//     "Resultado de multiples entradas de arrays mas de 2: ",
//     multConcat(arr1, arr2, arr3)
//   );
// };

// type Concat2<T extends any[][]> = T[number] extends (infer R)[] ? R[] : never;

// declare function multiConcat<T extends any[]>(...arg: T): Concat2<T>;

// // const result = multiConcat(arr1, arr2, arr3);

// const result = multiConcat([1,2,3],["a", "b", "c"]);

// console.log(result);

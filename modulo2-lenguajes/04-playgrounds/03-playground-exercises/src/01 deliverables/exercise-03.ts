console.log("************** DELIVERABLE 03 *********************");

// 3. Clone Merge

// Clone

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las
//  propiedades de source:

const myObj = {
    name: "Fran",
    surname: "Lopez",
    city: "Malaga"
};

console.log("Este es el objeto donde parte: ", myObj);

function clone(source: object): object {
    return {...source};
}


const copyMyObj: object = clone(myObj);

console.log("Esta es la copia del objeto: ", copyMyObj);
console.log("¿Los dos objetos son iguales? ", copyMyObj === myObj);
console.log("¿Tiene los dos objetos las mismas propiedades? ", copyMyObj["name"] === myObj["name"]);


// Merge

// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con 
// todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe 
// a target.

// Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// el resultado de mezclar a sobre b sería:

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

// TIP: Puedes usar la función "clone" del apartado A.

function merge(source: object, target: object): object {
    return {
        ...target,
        ...source
    }
}

console.log("El resultado del Merge de estos dos objetos es: ", merge(a, b));
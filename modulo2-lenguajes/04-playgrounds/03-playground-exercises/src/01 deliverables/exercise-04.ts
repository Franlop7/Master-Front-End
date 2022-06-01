console.log("************** DELIVERABLE 04 *********************");

// 4. Read Books

// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no 
// dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir 
// el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

interface Book {
    title: string;
    isRead: boolean;
};


function isBookRead(books: Array<Book>, titleToSearch: string): boolean {
    const bookFound = books.find(singleBook => singleBook.title === titleToSearch);
    return bookFound !== undefined ? bookFound.isRead : false;
}

// Ejemplo

const books: Array<Book> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


// Opcional

// Utiliza Typescript para añadir los tipos adecuados.
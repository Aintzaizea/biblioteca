class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = "disponible";
    }
    prestar() {
        this._prestado = "prestado"
    }
    devolver() {
        this._prestado = "disponible"
    }
    getEstado() {
        return this._prestado
    }

}
const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "12345");
libro.prestar(); //aquí esté prestado
console.log(`El libro ${libro.titulo} está ${libro.getEstado()} "lo prestamos"` );
libro.devolver(); //aquí lo devolvemos
console.log(`El libro ${libro.titulo} está ${libro.getEstado()} "lo devolvemos"`);


class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = []; //array vacío para añadir los  libros con push
    }
    agregarLibro(libro) {
        this.libros.push(libro); // añadimos libro al array
    }

    buscarPorISBN(isbn) {
        return this.libros.find(libro => libro.isbn === isbn) //buscamos por isbn
    }
    prestarLibro(isbn) {
        const libro = this.buscarPorISBN(isbn);
        if (libro) {
            libro.prestar();
        } else {
            console.log("No existe libro con ese ISBN. Vuelve a intentarlo");

        }
    }
    devolverLibro(isbn) {
        const libro = this.buscarPorISBN(isbn); 
        if (libro) {
            libro.devolver();
        } else {
            console.log("No existe libro con ese ISBN. Vuelve a intentarlo");

        }
    }
    mostrarLibros() {
        this.libros.forEach(libro => { //recorremos el array de libros
            console.log(`${libro.titulo} - ${libro.autor}: ${libro.getEstado()}`);

        });
    }
}

const biblio = new Biblioteca("Biblioteca Abetxuko");
const libro1 = new Libro("Los huérfanos", "Carmen Mola", "12348")
biblio.agregarLibro(libro1); //agregamos  libro al array
console.log(biblio.libros); //vemos el array con el libro incluido
console.log(biblio.buscarPorISBN("12348")); //buscamos por ISBN
biblio.prestarLibro("12348"); //prestamos el libro
console.log(libro1.getEstado()); //vemos que está prestado
biblio.mostrarLibros(); // aquí vemos los libros y su estado (prestado o disponible)
biblio.devolverLibro("12348"); //devolvemos libro
console.log(libro1.getEstado()); //aquí sale que está disponible
biblio.mostrarLibros(); //volvemos a ver el estado de los libros
biblio.prestarLibro("12349"); // no existe el libro



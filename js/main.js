class Libro {
    constructor (titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = "disponible";
    }
    prestar (){
        this._prestado = "prestado"
    }
    devolver(){
        this._prestado ="disponible"
    }
    getEstado(){
        return this._prestado
    };

}
const libro = new Libro ("Cien años de soledad","Gabriel García Márquez", "12345");
libro.prestar();
console.log(`El libro ${libro.titulo} está ${libro.getEstado()}`);
libro.devolver();
console.log(`El libro ${libro.titulo} está ${libro.getEstado()}`);


class Biblioteca {
    constructor(nombre, libros) {
        this.nombre = nombre;
        this.libros = libros;
    }
    agregarLibro(libro){}
    buscarPorISBN(isbn){}
    prestarLibro(isbn){}
    devolverLibro(isbn){}
    mostrarLibros(){}
}



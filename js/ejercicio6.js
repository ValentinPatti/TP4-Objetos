/*Crear un objeto “libro” que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

const biblioteca = [];

const generarISBN = () => Math.floor(Math.random() * 10000000000);

let continuar = true;

while (continuar) {
  let titulo = prompt(
    "Introduce el título del libro:",
  );

  // Si el usuario cancela sale del bucle
  if (titulo === null) {
    continuar = false;
    break;
  }

  let autor = prompt(`Introduce el autor de "${titulo}":`);
  let paginas = parseInt(prompt(`¿Cuántas páginas tiene "${titulo}"?`));

  // Validamos que las páginas sean un número válido
  if (isNaN(paginas)) {
    alert("Por favor, introduce un número válido para las páginas");
    continue; //el continue hace que vuelva al inicio y no se guarde el libro que se estaba cargando para que no tenga NaN en paginas
  }

  const nuevoLibro = {
    isbn: generarISBN(),
    titulo: titulo,
    autor: autor,
    numPaginas: paginas,

    mostrarLibro: function () {
      console.log(
        `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${paginas} páginas`,
      );
    },
  };

  biblioteca.push(nuevoLibro);
  alert(`El libro ${titulo}, fue agregado a la biblioteca`);
}

if (biblioteca.length > 0) {
    console.log('Resumen de la biblioteca')

    let libroMasLargo = biblioteca[0];

    biblioteca.forEach(libro => {
        libro.mostrarLibro();
        if (libro.numPaginas > libroMasLargo.numPaginas) {
            libroMasLargo = libro;
        }
    })

    console.log(`El libro con más páginas es "${libroMasLargo.titulo}" con ${libroMasLargo.numPaginas} páginas.`);
} else {
    console.log('No hay libros')
}


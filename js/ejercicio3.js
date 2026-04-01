//Escribe un programa para que permita crear objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

function crearRectangulo(alto, ancho) {
  return {
    alto: alto, //la primera es la propiedad y la segunda es el valor del parametro
    ancho: ancho,

    // setAlto: function (nuevoAlto) {
    //   this.alto = nuevoAlto;
    // },
    // setAncho: function (nuevoAncho) {
    //   this.ancho = nuevoAncho;
    // },

    mostrarPropiedades: function () {
      console.log(
        `Dimensiones: ${this.alto} de alto y ${this.ancho} de ancho.`,
      );
    },
    calcularArea: function () {
      return this.alto * this.ancho;
    },
    calcularPerimetro: function () {
      return 2 * (this.alto + this.ancho);
    },
  };
}

const miRectangulo = crearRectangulo(5, 8);

miRectangulo.mostrarPropiedades();
console.log("Área:", miRectangulo.calcularArea());

miRectangulo.setAlto();
console.log("Nuevo Perímetro:", miRectangulo.calcularPerimetro());
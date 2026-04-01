/* Escribe un programa para crear objetos ”producto”. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Crea tres objetos “producto” y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos.
*/

function producto(codigo, nombre, precio) {
  this.codigo = codigo;
  this.nombre = nombre;
  this.precio = precio;

  this.imprimirDatos = function () {
    console.log(
      `Codigo: ${this.codigo} | Nombre: ${this.nombre} | Precio: ${this.precio}`,
    );
  };
}

const producto1 = new producto("01", "teclado", 25);
const producto2 = new producto("02", "mouse", 15);
const producto3 = new producto("03", "monitor", 100);
//se usa el new antes de la funcion para que cree un objeto literal vacio

const listaProductos = [producto1, producto2, producto3];

console.log("Productos Seleccionados");

for (let i = 0; i < listaProductos.length; i++) {
  listaProductos[i].imprimirDatos();
}

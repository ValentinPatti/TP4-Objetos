/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta. 
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad; //se usa el this para modificar la propiedad saldo
      console.log(
        `Ingresaste $${cantidad}. Tu saldo actual es de $${this.saldo}`,
      );
    } else {
      console.log("La cantidad ingresada debe ser positiva");
    }
  },

  extraer(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Has extraido: $${cantidad}, tu saldo actual es $${this.saldo}`,
      );
    } else {
      console.log("fondos insuficientes");
    }
  },

  informar() {
    return `Titular de la cuenta: ${this.titular} Saldo actual: $${this.saldo}`;
  },
};

console.log(cuenta.informar());
cuenta.ingresar(500);
cuenta.extraer(150);
console.log(cuenta.informar());
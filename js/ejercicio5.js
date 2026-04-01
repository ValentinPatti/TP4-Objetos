/* Crea un objeto “persona” que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

const persona = {
  nombre: prompt("Ingresa tu nombre: "),
  edad: parseInt(prompt("Ingresa tu edad: ")),
  dni: "",
  sexo: prompt("Ingresa tu sexo (M = mujer, H = hombre)"),
  peso: parseFloat(prompt("Ingresa tu peso (en kg): ")),
  altura: parseFloat(prompt("Ingresa tu altura (en cm): ")),
  anioNacimiento: parseInt(prompt("Ingresa tu año de nacimiento: ")),

  mostrarGeneracion: function () {
    let generación = "";
    let rasgo = "";
    
    //pongo el true para que pueda evaluar entre los años, sino el switch buscaria el numero exacto y no un rango
    switch (true) {
      case 1930 <= this.anioNacimiento && this.anioNacimiento <= 1948:
        generación = "Silent Generation";
        rasgo = "Austeridad";
        break;
      case 1949 <= this.anioNacimiento && this.anioNacimiento <= 1968:
        generación = "Generacion Baby Boom";
        rasgo = "Ambición";
        break;
      case 1969 <= this.anioNacimiento && this.anioNacimiento <= 1980:
        generación = "Generacion X";
        rasgo = "Obsesión por el éxito";
        break;
      case 1981 <= this.anioNacimiento && this.anioNacimiento <= 1993:
        generación = "Generacion Y";
        rasgo = "Frustración";
        break;
      case 1994 <= this.anioNacimiento && this.anioNacimiento <= 2010:
        generación = "Generacion Z";
        rasgo = "Irreverencia";
        break;
      case 2011 <= this.anioNacimiento && this.anioNacimiento <= 2024:
        generación = "Generacion Alfa";
        rasgo = "Hiperconectividad";
        break;
      case 2025 <= this.anioNacimiento && this.anioNacimiento <= 2039:
        generación = "Generacion Beta";
        rasgo = "Adaptabilidad";
        break;

      default:
        generación = "Generacion no registrada";
        rasgo = "Rasgo desconocido";
        break;
    }
    return `Pertenece a la ${generación}. Rasgo: ${rasgo}`;
  },

  esMayorDeEdad: function () {
    return this.edad >= 18
      ? `${this.nombre} es mayor de edad`
      : `${this.nombre} es menor de edad`;
  },

  mostrarDatos: function () {
    return `
    INFORMACION GENERAL
    Nombre: ${this.nombre}
    Edad: ${this.edad}
    DNI: ${this.dni}
    Sexo: ${this.sexo} 
    Peso: ${this.peso} kg
    Altura: ${this.altura} cm
    Año de Nacimiento: ${this.anioNacimiento}
    `;
  },

  generarDNI: function () {
    this.dni = Math.floor(10000000 + Math.random() * 90000000);
  },
};

persona.generarDNI();
alert(persona.mostrarDatos());
alert(persona.esMayorDeEdad());
alert(persona.mostrarGeneracion());

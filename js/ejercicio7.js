//Nos piden realizar una agenda telefónica de contactos.

//Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

//!Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

//Las acciones que se pueden realizar con la agenda serán los siguientes:

//!-aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar más contactos indicar por pantalla.
//!-existeContacto(Contacto): indica si el contacto pasado existe o no.
//!-listarContactos(): Lista toda la agenda
//!-buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
//?-eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
//!-agendaLlena(): indica si la agenda está llena.
//?-huecosLibres(): indica cuántos contactos más podemos ingresar.

//Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y/o  por consola.

const agenda = [];
let maxContactos = 0;

function crearAgenda() {
  const tamaño = prompt(
    "¿Deseas definir un tamaño para la agenda? (S/N). Por defecto es 10:",
  );
  if (tamaño && tamaño.toLowerCase() === "s") {
    maxContactos = parseInt(prompt("Introduce el tamaño de la agenda:"));
  } else {
    maxContactos = 10;
  }
  console.log(`Agenda creada con capacidad para ${maxContactos} contactos.`);
}

function agendaLlena() {
  return agenda.length >= maxContactos;
}

function aniadirContacto(nombre, telefono) {
  if (agendaLlena()) {
    alert("Error: La agenda está llena, no se pueden añadir más contactos.");
    return;
  }

  const nuevoContacto = {
    nombre: nombre.toLowerCase(),
    telefono: telefono,
  };

  if (existeContacto(nuevoContacto)) {
    alert("El contacto ya existe con ese nombre.");
  } else {
    agenda.push(nuevoContacto);
    console.log(`El contacto "${nombre}" se añadió a la agenda.`);
  }
}

function existeContacto(contacto) {
  // Buscamos si algún elemento del array tiene el mismo nombre con .some
  return agenda.some(
    (contactoExistente) =>
      contactoExistente.nombre === contacto.nombre.toLowerCase(),
  );
}

function listarContactos() {
  if (agenda.length === 0) {
    console.log("La agenda esta vacía");
    return;
  }
  console.log("LISTA DE CONTACTOS");
  agenda.forEach((contacto) => {
    console.log(`Nombre: ${contacto.nombre} | Teléfono: ${contacto.telefono}`);
  });
}

function buscarContacto(nombre) {
  const encontrado = agenda.find(
    (contacto) => contacto.nombre === nombre.toLowerCase(),
  );
  if (encontrado) {
    alert(`El teléfono de ${nombre} es: ${encontrado.telefono}`);
  } else {
    alert("Contacto no encontrado.");
  }
}

function eliminarContacto(nombre) {
    const indice = agenda.findIndex(contacto => contacto.nombre === nombre.toLowerCase());
    if (indice !== -1) {
        agenda.splice(indice, 1);
        alert(`Contacto "${nombre}" eliminado correctamente.`);
    } else {
        alert("No se pudo eliminar: El contacto no existe.");
    }
}

function huecosLibres() {
    const libres = maxContactos - agenda.length;
    alert(`Quedan ${libres} huecos libres.`);
    return libres;
}
function ejecutarMenu() {
  crearAgenda();
  let opcion = "";

  while (opcion !== 8) {
    opcion = parseInt(
      prompt(`
            MENU AGENDA --- Elige una opción:
            1. Añadir contacto
            2. Existe contacto
            3. Listar contactos
            4. Buscar contacto (por nombre)
            5. Eliminar contacto
            6. Agenda llena?
            7. Huecos libres?
            8. Salir
            `),
    );

    switch (opcion) {
      case "1":
        let nombre = prompt("Introduce el nombre del contacto:");
        let telefono = parseInt(prompt("Ingresa el teléfono del contacto:"));
        if (nombre && telefono) aniadirContacto(nombre, telefono);
        break;
      case "2":
        let nombreExistente = prompt("Ingrese el nombre a verificar:");
        if (existeContacto({ nombre: nombreExistente })) {
          alert("El contacto ya esta registrado");
        } else {
          alert("No existe el contacto");
        }
        break;
      case "3":
        listarContactos();
        break;
      case "4":
        let nombreABuscar = prompt("Nombre a buscar:");
        buscarContacto(nombreABuscar);
        break;
      case "5":
        let nombreEliminar = prompt("Nombre a eliminar:");
        eliminarContacto(nombreEliminar);
        break;
      case "6":
        alert(agendaLlena() 
        ? "La agenda está LLENA." 
        : "Aún hay espacio.");
        break;
      case "7":
        huecosLibres();
        break;
      case "8":
        alert('Saliendo de la agenda...')
        break;
      default:
        alert('Opcion invalida')
        break;
    }
  }
}

ejecutarMenu();

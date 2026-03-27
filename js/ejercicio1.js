//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: "rojo",
    marca: "Lamborghini",
    modelo: "Murcielago",

    encender(){
        return console.log('El auto esta encendido')
    },
    apagar(){
        return console.log('El auto esta apagado')
    }
}

auto.encender()
auto.apagar()
//Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

const rectangulo = {
    alto: 0,
    ancho: 0,

    alto(altoIngresado){
        alto += altoIngresado
    },
    ancho(anchoIngresado){
        this.ancho += anchoIngresado
    }
}

rectangulo.alto()
rectangulo.ancho()
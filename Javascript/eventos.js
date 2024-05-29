function pulsarBoton() {
    alert("Has pulsado el botón");
}

function sumar() {
    //var cajaDeTextoNumero1 = document.getElementById("numero1"); //elemento entero, no solo el numero
    var cajaDeTextoNumero1 = document.querySelector("#numero1");
    //var cajaDeTextoNumero2 = document.getElementById("numero2");
    var cajaDeTextoNumero2 = document.querySelector("#numero2");

    //var resultado = document.getElementById("resultado");
    var resultado = document.querySelector("#resultado");
    resultado.classList.add("rojo");

    var numero1 = parseInt(cajaDeTextoNumero1.value);
    var numero2 = parseInt(cajaDeTextoNumero2.value);
    
    var resultadoSuma = (numero1+numero2)

    if (isNaN(numero1 + numero2)) {
        resultadoSuma = "no es un número"
    }

    console.log("información: " + (numero1 + numero2));
    //devuelve un texto, por eso hay que convertirlo

    resultado.innerHTML = resultadoSuma
    

}

function ponerRojo() {
    resultado.classList.remove("verde");
    resultado.classList.add("rojo");
}

function ponerVerde() {
    resultado.classList.remove("rojo");
    resultado.classList.add("verde");
}
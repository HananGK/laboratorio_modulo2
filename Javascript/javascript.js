/*
tipos de datos
string = texto
numericos enteros o decimales
booleanos o lógicos = true o false/ 0 o 1/ sí o no
array
*/
/*
var
ambito de vida global, dura lo que dura la aplicación, es el más extenso

let
ambito de vida cerrado, usar y tirar

const
variable que no puede cambiar de valor durante la vida de un objeto, ej pi
*/

/*
operadores
aritméticos
+
-
*
/
% mod
= asignación
lógicos 
> gt
< lt
>= ge
<= le
== eq solo compara valor
=== eq compara valor y tipo

3=="3" true
3==="3" false

! not eq negacion
!= diferente en valor (<> en otros lenguajes)
!== diferente en valor y tipo
texto
*/

function suma(a, b) {
    var resultado = a + b;
    console.log("el resultado  es: " + resultado)
    return resultado
}

console.log(suma(3, 5)+17)

//error NaN Not a Number

//se puede cambiar el tipo de una variable
edad = 35
console.log(edad)
edad = "Pepe"
console.log(edad)

function operadores() {
    a="3";
    b=3;
    console.log(a==b)
    console.log(a===b)
    console.log(a!=b)
    console.log(a!==b)
}

operadores();

function bucles() {
    /*condicionales
    if (condicion) {
        si es true 
        .....
        ....
        .....
    }
    */
   
    var a = 3

    if (a===3) {
        console.log("a es igual a 3");
    }
    else {
        console.log("a no es igual a 3");
    }

    /*bucle for
    for (valor de inicio; condicion para seguir; incremento o decremento)
    i = i+1 --> i++ o ++i
    i = i-1 --> i-- o --i
    i = i+5 --> i+=5
        */
    
    //b=a++;
    //console.log("valor de a: " + a); //4
    //console.log("valor de b: " + b); //3

    b=++a;
    console.log("valor de a2: " + a); //4
    console.log("valor de b2: " + b); //4

    var nombre = "Hanan";

    for (i=0; i<nombre.length; i++) {
       console.log(nombre.charAt(i)); 
    }


    /*
    bucle while
    while (condicion) {
        .....
        ....
        .....
    }
    */

    c=4
    while(c>40) {
        console.log("con while: " + c);
        c++;
    }

    // bucle do while 
    do {
        console.log("con do while: " + c);
    } while (c>40);

    
        console.log("resto:" + c%5)
}

bucles();


for (i==0; i<=100; i++){
    if (i%2==0){
        console.log(i);
    }
}

var j=0;
function numerosDivisores(numeroFinal) {
    for (j=0; j<numeroFinal; j++) {
        if (j%2==0) {
            console.log(j);
        }
    }
}


numerosDivisores(50);
console.log("j vale: " + j);

//Numeros primos
function numerosPrimos(numero) {
    for (var i=2; i<numero; i++) {
        if (numero%i==0) {
            console.log(i + " no es primo");
        }
        else {
            console.log(i + " es primo");
        }
    }
}

numerosPrimos(100);

window.alert("Hola mundo"); //o alert("hola mundo");

confirm("¿Estas seguro?"); //devuelve booleano

//no se pueden decorar
//ENTRADA
let nombreIngresado = (prompt("Ingrese su nombre"));
//DATO
let saludo = "hola "
//PROCESO
let holaNombre = saludo + nombreIngresado;
console.log("Ey " + holaNombre);

//ENTRADA
let numeroIngresado = parseInt (prompt ("ingrese un numero"));
//DATO
let numero2 = 3
//PROCESO
let suNumeroEs = numeroIngresado + numero2;
console.log("Su numero es " + suNumeroEs)

let usuario = (prompt("Ingrese su nombre de usuario"));
if (usuario == "franco"){
    alert("ingreso el nombre correcto");
} else{
    alert("el nombre de usuario es incorrecto");

}

//IF ANIDADOS

let precioProducto = Number (prompt("ingrese el precio del producto"));

if (precioProducto < 20){
    console.log("el precio del producto es menor a 20 pesos");
} else if (precioProducto < 50){
    console.log("el precio ingresado es menor que 50 pesos");
} else if (precioProducto < 100){
    console.log("el precio ingresado es menor que 100");
}  else{
    console.log("el precio ingresado es mayor que 100");
}

//VARIABLES BOOLEANAS

let edad = Number (prompt("ingrese su edad"));
const ESMAYOR = (edad >= 18);

if (ESMAYOR) {
    alert("bienvenido/a a la clase N°2")
} else{
    alert("Debes ser mayor de edad para la clase N°2");
}
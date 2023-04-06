
// //ENTRADA
// let nombreIngresado = (prompt("Ingrese su nombre"));
// //DATO
// let saludo = "hola "
// //PROCESO
// let holaNombre = saludo + nombreIngresado;
// console.log("Ey " + holaNombre);

// //ENTRADA
// let numeroIngresado = parseInt (prompt ("ingrese un numero"));
// //DATO
// let numero2 = 3
// //PROCESO
// let suNumeroEs = numeroIngresado + numero2;
// console.log("Su numero es " + suNumeroEs)

// let usuario = (prompt("Ingrese su nombre de usuario"));
// if (usuario == "franco"){
//     alert("ingreso el nombre correcto");
// } else{
//     alert("el nombre de usuario es incorrecto");

// }

// //IF ANIDADOS

// let precioProducto = Number (prompt("ingrese el precio del producto"));

// if (precioProducto < 20){
//     console.log("el precio del producto es menor a 20 pesos");
// } else if (precioProducto < 50){
//     console.log("el precio ingresado es menor que 50 pesos");
// } else if (precioProducto < 100){
//     console.log("el precio ingresado es menor que 100");
// }  else{
//     console.log("el precio ingresado es mayor que 100");
// }

// //VARIABLES BOOLEANAS

// let edad = Number (prompt("ingrese su edad"));
// const ESMAYOR = (edad >= 18);

// if (ESMAYOR) {
//     alert("bienvenido/a a la clase N°2")
// } else{
//     alert("Debes ser mayor de edad para la clase N°2");
// }

// //OPERADORES LOGICOS

// let suNumero = Number (prompt("Ingrese su numero"));

// if (suNumero >= 1000){
//     alert ("El numero ingresado es correcto");
// } else {
//     alert ("Su numero no es valido");
// }

// let salude = prompt ("ingrese su saludo");

// if ((salude == "hola") || (salude == "buenas")){
//     alert ("Hola, gracias por tu saludo");
// } else{
//     alert("Ey! debes saludar para poder ingresar");
// }

// let saludo = prompt ("Ingrese su saludo");
// let nombre = prompt ("Ingrese su nombre");

// if ((saludo == "hola") && (nombre == "franco")){
//     alert ("Bienvenido, acceso concedido");
// } else{
//     alert("Acceso denegado");
// }

// CICLOS FOR
    //incremento

// for (let i= 1; i <=4; i++){
//     console.log("vuelta N°: " + i);
// }

    //DECREMENTO

// for (let i= 4; i>=1;i--){
//     console.log ("vuelta N°: " + i);
// }

//TURNERA

// for (let i= 1; i<=20; i++){
//     let ingresarNombre = prompt ("Ingresar Nombre: ");
//     alert("turno N° " + " " + i + " Nombre: " + ingresarNombre);
// }

// CICLO WHILE

// let entrada = prompt("Ingrese un dato");

// while (entrada != "ESC"){
//     alert("El usuario ingreso: " + entrada);
//     entrada = prompt("Ingrese otro dato: ");
// }

// LA PALABRA CORRECTA

// let palabra = "";

// while (palabra != "hola"){
//     palabra = prompt ("Ingrese la palabra correcta");
// }

// alert("Ingresaste la palabra correcta!");

// CICLO DO WHILE

let otroNumero = 0;

do{
    otroNumero = prompt ("Ingrese un numero");
    console.log(otroNumero);
} while (parseInt(otroNumero));
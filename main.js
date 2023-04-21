
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

// let palabra = ("");

// while (palabra != "hola"){
//     palabra = prompt ("Ingrese la palabra correcta");
// }

// alert("Ingresaste la palabra correcta!");

// CICLO DO WHILE

// let otroNumero = 0;

// do{
//     otroNumero = prompt ("Ingrese un numero");
//     console.log(otroNumero);
// } while (parseInt(otroNumero));

//SENTENCIA SWITCH

// let color = prompt("Ingrese un color primario");

// switch (color){

//     case "rojo":
//     alert("Seleccionaste el color rojo.");
// break;

// case "azul":
//     alert("Seleccionaste el color azul.");
// break;

// case "amarillo":
//     alert("Seleccionaste el color amarillo.");
// break;

// default:
//     alert("El color ingresado no es valido.");
// break;
// }

/*-------------CLASE 04-------------*/

// FUNCIONES

// DECLARAMOS LA FUNCION

// function saludar (){
//     console.log("Hola coders");
// }

// // LLAMAR A LA FUNCION
// saludar()

// function solicitarNombre (){
//     let nombreIngresado = prompt ("Ingrese su nombre: ");
//     alert("El nombre ingresado es: " + nombreIngresado);
// }

// // PUEDO LLAMAR A LA FUNCION CUANTAS VECES QUIERA
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();


//FUNCIONES CON PARAMETROS

// function conParametros (parametro1, parametro2){
//     console.log(parametro1 + " " + parametro2);
// }

// conParametros("Hello", "Peter");
// conParametros("Como", "estas?");

// let resultado = 0;

// function sumar(primerNumero, segundoNumero){
//     resultado = primerNumero + segundoNumero;
// }

// function mostrar (mensaje){
//     console.log(mensaje);
// }

// sumar(20,50);
// mostrar(resultado);

// EJERCICIO PRACTICO FUNCIONES

// function calculadora (primerNumero, operacion, segundoNumero){

//     switch(operacion){
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }

// console.log(calculadora(20, "*", 5));
// console.log(calculadora(20, "/", 5));


//AMBITO O SCOPE

// let resultado = 0; //VARIABLE GLOBAL

// function sumar (primerNumero, segundoNumero){
//     //VARIABLE LOCAL VIVE Y MUERE EN SU AMBITO
//     let resultado = primerNumero + segundoNumero;
//     console.log(resultado);
// }

// sumar (20, 30);

//FUNCIONES ANONIMAS

// const sumar = function (a,b);{
//     return a + b;
// }

// console.log(sumar(1000,2000));

//FUNCIONES FLECHA

// const sumar = (a,b) => a + b;

/*-------------CLASE 05-------------*/

//OBJETOS

// let nombre = "Homero";
// let edad = 39;
// let calle = "Av. Siempreviva 742";

//Las variables anteriores estan relacionadas, y por lo tanto, podria agruparlas en un objeto

// const persona1 = {
//     nombre: "Homero",
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// };

// // console.log(persona1);

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.calle);

// // INSTANCIO EL OBJETO USUARIO

// const usuario = {
//     nombre: "Natalia",
//     apellido: "Saravia",
//     edad: 40,
//     //defino la propiedad como un string
//     "pais": "Colombia",
//     esPremium: true,

//     domicilio:{
//         ciudad: "Posadas",
//         direccion: "Centenario 921",
//         cp: 300
//     },

//     //METODOS, LO QUE EL OBJETO PUEDE O SABE HACER
//     //FORMA LARGA DE DECLARAR UN METODO/FUNCION EN JS

//     sayHello: function (){
//         console.log("Hola mi apellido es:" + usuario.apellido);
//     },

//     // FORMA ABREVIADA DE DECLARAR UN METODO/FUNCTION
//     diHola (){
//         console.log("Mi nombre es:" + usuario.nombre);
//     }
// }

// //ASINGNO AL OBJETO USUARIO UN NUEVO PAR PROPIEDAD-VALOR
// usuario.equipo = "Racing";

// usuario.diHola();
// usuario.sayHello();

// console.log(usuario);

// //PARA ACCEDER A LA PROPIEDAD DEFINIDA COMO STRING, UTILIZO LOS CORCHETES []

// console.log(usuario["pais"]);

// //OBJETO VACIO

// const user = {};

// console.log(user);

// user.nombre = "Macarena";
// user.apellido = "Villalba";
// user.rol = "Developer";
// user.team = "Pymes";

// console.log(user);


//FUNCION CONSTRUCTURA

// function Persona (nombre, edad, calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;

//     //Metodo personalizado
//     this.hablar = function (){
//         console.log("Hola Soy " + this.nombre);
//     }
// }

// const persona2 = new Persona ("Homero", 39, "Av. Siempreviva 742");
// const persona3 = new Persona ("Marge", 36, "Av. Siempreviva 742");
// const persona4 = new Persona ("Mggie", 1, "Av. Siempreviva 742");

// persona2.hablar();
// persona3.hablar();
// persona4.hablar();

// METODOS EN OBJETOS JS

// let cadena = "HOLA CODER";

// console.log(cadena.length);
// console.log(cadena.toUpperCase());
// console.log(cadena.toLowerCase());

// // CLASE EN EMC6

// class Usuario {
//     constructor (nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
// }

// const usuario1 = new Usuario ("Magali", "Nieva", 30);
// console.log(usuario1);

// // IN Y FOR IN
// console.log("calle" in usuario1);

// // QUE ES THIS

// const auto = {
//     nombre: "Fuego",
//     marca: "Renault",
//     presentacion (){
//         console.log(this.nombre);
//     },

//     //NUEVO OBJETO LOGAN
//     logan: {
//         nombre: "Logan",
//         presentacion (){
//             //THIS AQUI ADQUIERE OTRO VALOR
//             console.log(this.nombre);
//         },
//     }
// }

// auto.presentacion();
// auto.logan.presentacion();

//EJEMPLO PRACTICO

// class Producto {
//     constructor(nombre,precio){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }

//     //METODOS
//     sumaIva (){
//         console.log(this.precio = this.precio * 1.21);
//     }

//     vender (){
//         console.log(this.vendido = true);
//     }
// }

// //CONSTRUYO DIFERENTES OBJETOS A PARTIR DE LA CLASE PRODUCTO
// const producto1 = new Producto ("arroz", "500");
// const producto2 = new Producto ("fideo", "600");

// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();

/*-------------CLASE 06-----------*/

//ARRAYS

// const arrayA = [];
// console.log( typeof arrayA);

// //arrays de números
// const arrayB = [1,2,3,4,5];

// //arrays de string
// const arrayC = ["C1", "C2","C3"];

// //arrays de booleanos

// const arrayD = [true, false, true, false, false];

// //arrays de mixto

// const arrayE= [true, 1, "Marta", 1.5, "Jorge", true];

// //ACCEDO A LOS ELEMENTOS DEL ARRAY
// console.log(arrayE[5]);

// //RECORREMOS UN ARRAY
// const productos = ["harina", 500, "sku302", true, "pureza", "disco"];

// // for (let i=0; i < 6; i++){
// //   alert(productos[i]);
// // }

// for (let i= 0; i < productos.length; i++){
//   alert(productos[i]);
// }

//METODOS DE LOS ARRAYS

const productos = ["harina", 500, "sku302", true, "pureza", "disco"];


// //METODO/PROPIEDAD PARA CONOCER EL TAMAÑO DEL ARRAY
// console.log(productos.length);

// //AGREGAR ELEMENTOS AL FINAL DEL ARRAY (PUSH)
// productos.push("leudante");

// console.log(productos);
// productos.push(200);
// console.log(productos);

// //AGREGAR ELEMENTOS AL INICIO DEL ARRAY (UNSHIFT)
// productos.unshift("1kg");
// console.log(productos);
// console.log(productos.length);

// //QUITAR ELEMENTO AL INICIO DEL ARRAY (SHIFT)
// productos.shift();
// console.log(productos);

// //QUITAR ELEMENTO AL FINAL DEL ARRAY (POP)
// productos.pop();
// console.log(productos);


// //QUITAR UNO O MAS ELEMENTOS DEL ARRAY (SPLICE)
// productos.splice(1,2);
// console.log(productos);

// productos.splice(1,2);
// console.log(productos);

// //EL METODO JOIN SIRVE PARA SEPARAR ELEMENTOS
// console.log(productos.join("----"));
// console.log(productos.join("*"));

// //EL METODO CONCAT SIRVE PARA CONCATENAR ARRAYS
// const cervezas = ["Brahma", "Estela", "Quilmes", "Andes"];

// // const masVendidos = cervezas.concat(productos);
// // console.log(masVendidos);

// //EL METODO INDEXOF SIRVE PARA CONOCER LA POSICION DE UN ELEMENTO DENTRO DEL ARRAY
// console.log(cervezas.indexOf("Quilmes"));

// //EL METODO INCLUDES SIRVE PARA SABER SI UN ELEMENTO ESTÁ O NO DENTRO DEL ARRAY
// console.log(cervezas.includes("patagonia"));

//EL METODO REVERSE INVIERTE LAS POSICIONES DE LOS ELEMENTOS DEL ARRAY
// cervezas.reverse();
// console.log(cervezas);

// //EJEMPLO APLICADO: CARGAR ENTRADAS

// const listaNombres = [];
// let cantidad = 5;

// //cargamos las nombres en el array mediante 

// console.log(listaNombres);

// do{
//   //pedimos que se ingrese el nombre
//   let entrada = prompt ("Ingresar nombre: ");
//   //vamos guardando cada ingreso al final del array
//   listaNombres.push(entrada.toUpperCase());
//   console.log(listaNombres.length);
// } while (listaNombres.length != cantidad)

// // console.log(listaNombres);

// const nuevaLista = listaNombres.concat (["ANA", "EMMA"]);


// alert(nuevaLista.join("\n"));

//EJEMPLO APLICADO: ELIMINAR CUALQUIER ELEMENTO
// const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

// console.log(nombres);

// //recibo el elemento a borrar por parámetro

// const eliminar = (nombre) => {
// //busco su indice en el array
//     let index = nombres.indexOf(nombre);

// //si existe el indíce, o sea, es distinto de - 1, lo borramos con splice
//     if (index != -1) {
//         nombres.splice(index, 1);
//     }
// }

// eliminar("Pedro");
// console.log(nombres);

/*-------------CLASE 07-----------*/
/*-------------FUNCIONES DE ORDEN SUPERIOR-----------*/

//ABSTRACCION
//LA MISMA FUNCION, PERO SIRVE PARA CALCULAR CUALQUIER RANGO

// function sumarRangos(min,max) {
//     let total = 0;

//     for (let i = min; i <= max; i++) {
//         total += i;
//     }
//     return total;
// }



// console.log(sumarRangos(1,10)); //55
// console.log(sumarRangos(2,8)); //35
// console.log(sumarRangos(2,4)); //9

// let sumarEntreDosYCuatro = sumarRangos(2,4);
// console.log(sumarEntreDosYCuatro);

//RETORNAR FUNCIONES

// function mayorQue (n){
//     return (m) => m > n;
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(21));//TRUE
// console.log(mayorQueDiez(8));//FALSE

//RETORNAR FUNCIONES II

function asignarOperacion (op){
    if (op=="sumar"){
        return (a,b) => a + b;
    } else if (op=="restar"){
        return (a,b) => a - b;
    }
}

let suma = asignarOperacion ("sumar");
let resta = asignarOperacion ("restar");

console.log(suma(10,20));
console.log(resta(5,2));
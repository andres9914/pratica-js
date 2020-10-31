document.write("<br>");
//[0] es el primer elemento de una matriz . [1] es el segundo. Los índices de matriz comienzan con 0 .
//Una matriz es un tipo especial de objeto. Una matriz usa números para acceder a sus elementos y un objeto usa nombres para acceder a sus miembros.
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
/*Las matrices de JavaScript son dinámicas, por lo que puede declarar una matriz y no pasar ningún argumento con el constructor Array(). Luego puede agregar los elementos de forma dinámica.*/
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";
//Puede agregar tantos elementos como necesite.
//Array Literal//
var courses = ["HTML", "CSS", "JS"];
//La propiedad de longitud
/* Las matrices JavaScript tienen útiles propiedades y métodos integrados. Una serie's longitud propiedad devuelve el número de elementos de TI. */
document.write(courses.length);
//salida 3
//Combinando matrices
//El método concat() de JavaScript le permite unir matrices y crear una matriz completamente nueva.Ejemplo:
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
//La operación concat no afecta a las matrices c1 y c2 ; devuelve la concatenación resultante como una nueva matriz.
document.write("<br>" + "<br>");
//Matrices asociativas
/*Si bien muchos lenguajes de programación admiten matrices con índices con nombre (texto en lugar de números), llamadas matrices asociativas , JavaScript no . Sin embargo, aún puede usar la sintaxis de matriz nombrada , que producirá un objeto .
Por ejemplo:*/
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
//Outputs "46"
/*Ahora, la persona se trata como un objeto , en lugar de ser una matriz. Los índices nombrados "nombre" y "edad" se convierten en propiedades del objeto persona .*/
/*Como la matriz de personas se trata como un objeto , los métodos y propiedades de la matriz estándar producirán resultados incorrectos. Por ejemplo, person.length devolverá 0.*/
//Si usa un índice con nombre, JavaScript redefinirá la matriz a un objeto estándar.
document.write("<br>" + "<br>");
//Objeto Math (metematica)
document.write(Math.sqrt(81));
//Objeto Date (Fecha)
/* JavaScript cuenta los meses del 0 al 11. Enero es 0 y diciembre es 11.
Los objetos de fecha son estáticos, en lugar de dinámicos. El tiempo de la computadora avanza, pero los objetos de fecha no cambian, una vez creados.*/
var d = new Date();
//d stores the current date and time
/*
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000);

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88, 5, 11, 11, 42, 0, 0);
/*
//Reloj
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);
*/
document.write("<br>" + "<br>");
//setInterval//
/*El método setInterval () llama a una función o evalúa una expresión a intervalos específicos (en milisegundos). Continuará llamando a la función hasta que se llame a clearInterval () o se cierre la ventana. Por ejemplo:*/
/*
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);
clearInterval(myAlert, 0);
*/
//Escriba el nombre de la función sin paréntesis al pasarlo al método setInterval.
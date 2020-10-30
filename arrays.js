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
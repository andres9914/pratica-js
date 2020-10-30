/*Colocar un JavaScript en un archivo externo tiene las siguientes ventajas:
- Separa HTML y código.
- Hace que HTML y JavaScript sean más fáciles de leer y mantener.
- Los archivos JavaScript en caché pueden acelerar la carga de la página.*/
//alert("¡otro cuadro de alerta! :V");

//LOOP'S
for (i = 1; i <= 5; i++) {
    document.write(i + "<br>");
}
document.write("<br>");
//while condicional
var x = 1;
while (x <= 5) {
    document.write(x + "<br>");
    x = x + 1;
}
document.write("<br>");
//Do While
var i = 20;
do {
    document.write(i + "<br />");
    i++;
} while (i <= 25);
document.write("<br>");
//Puede usar la palabra clave return para devolver algún valor inmediatamente desde el bucle dentro de una función. Esto también romperá el bucle.
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    document.write(i + "<br />");
}
document.write("<br>");
//El valor 5 no se imprime, porque continua omite esa iteración del ciclo.

for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}

document.write("<br>");

var sum = 0;
for (i = 4; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    sum += i;
}
document.write(sum);
document.write("<br>");
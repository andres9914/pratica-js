document.write("<br>" + "<br>");
//El objeto del documento
/* Como body es un elemento del DOM , podemos acceder a él usando el objeto de documento y cambiar el contenido de la propiedad innerHTML. */
document.body.innerHTML = "Algún texto";
/* La propiedad innerHTML se puede utilizar en casi todos los elementos HTML para cambiar su contenido. */

//Seleccionar elementos
/* Todos los elementos HTML son objetos . Y como sabemos, todo objeto tiene propiedades y métodos. */
// busca el elemento por ID
document.getElementById("uno")
    // busca elementos por clase
document.getElementsByClassName("dos")
    // busca el elemento por tag
document.getElementsByTagName("h5")


/* El método getElementsByClassName () devuelve una colección de todos los elementos del documento con el nombre de clase especificado. Por ejemplo, si nuestra página HTML contiene tres elementos con class = "demo", el siguiente código devolverá todos esos elementos como una matriz : */
/*
var arr = document.getElementsByClassName("pratica");
//accessing the second element
arr[1].innerHTML = "Hi";
*/
/* De manera similar, el método getElementsByTagName devuelve todos los elementos del nombre de etiqueta especificado como una matriz . El siguiente ejemplo obtiene todos los elementos de párrafo de la página y cambia su contenido: */
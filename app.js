// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
En este desafío, desarrollarás una aplicación que permita a los usuarios 
ingresar nombres de amigos en una lista para luego realizar un sorteo 
aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón 
"Adicionar". Los nombres ingresados se mostrarán en una lista visible 
en la página, y al finalizar, un botón "Sortear Amigo" seleccionará 
uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo
 de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

*Validar entrada: Si el campo de texto está vacío, el programa mostrará una
 alerta pidiendo un nombre válido.

*Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo
 del campo de entrada.

*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará
 aleatoriamente un nombre de la lista y se mostrará en la página.
*/

//Crear arreglo para guardar los nombres
let arrayNombres = [];

//función para escuchar cuando el botón es clicado
function agregarAmigo() {
  let valorAmigo = document.getElementById("amigo").value;
  //console.log(valorAmigo);
  try {
    if (valorAmigo != "") {
      arrayNombres.push(valorAmigo);
      //Limpiamos entrada
      document.querySelector("#amigo").value = "";

      //Llamo la función actualizaListaAmigos
      actualizaListaAmigos();
    } else {
      alert("Debe ingresar al menos un caracter");
    }
  } catch (error) {
    alert(error);
    alert("Ingrese un valor válido");
  }
}
// Iterar sobre el arreglo y agregar cada amigo como <li>
function actualizaListaAmigos() {
  //Seleccionar la lista
  let listaAmigos = document.getElementById("listaAmigos");
  //Limpiar la lista
  listaAmigos.innerHTML = "";
  //Iterar sobre el arreglo
  arrayNombres.forEach((amigo) => {
    //Crea el elemento o etiqueta <li>
    let li = document.createElement("li");
    //Lleva el valor que recorre de la lista o función amigo a la etiqueta li
    li.textContent = amigo;
    //Agrego el contenido de li y el amigo a la lista
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  try {
    //verificamos que no este vacio el arreglo
    if (arrayNombres.length === 0) {
      alert("No tienes amigos para sortear!");
    } else {
        //Guardamos el tamaño del arreglo
      let longitudArreglo = arrayNombres.length;
      //Seleccionar un índice aleatorio del arreglo
      let indice = Math.floor(Math.random() * longitudArreglo) + 1;
        //Agregamos el nombre del amigo secreto según su indice
      let amigoSecreto = arrayNombres[indice - 1];

      //Mostrar amigo secreto y eliminar del arreglo
      ResultadoAmigoSecreto(amigoSecreto, indice - 1);
    }
  } catch (error) {
    alert(error);
  }
}

// Iterar sobre el arreglo y agregar cada amigo como <li>
function ResultadoAmigoSecreto(amigoSecreto, posicion) {
  //Seleccionar la lista
  let listaAmigoSecreto = document.getElementById("resultado");
  //Limpiar la lista
  listaAmigoSecreto.innerHTML = "";
  //Crea el elemento o etiqueta <li>
  let li = document.createElement("li");
  //Lleva el valor del amigo secreto a li
  li.textContent = amigoSecreto;
  //Agrego el contenido de li y el amigo a la lista
  listaAmigoSecreto.appendChild(li);
  //Eliminar amigo del arreglo
  let elementoEliminado = arrayNombres.splice(posicion, 1);
  //Actualizamos la lista de amigos para que el usuario identifique quienes quedan
  actualizaListaAmigos();
}

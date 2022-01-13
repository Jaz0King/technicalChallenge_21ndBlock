import {traerDatos} from "./modules/data.js"
traerDatos()
//document.addEventListener('DOMContentLoaded',traerDatos,false)
//Función para activar el calendario del modal
$(function() {
  $('#datepicker').datepicker();
});
$(function() {
  $('#datepicker2').datepicker();
});

// Botones de regreso a listas de propósitos y salida 
const btnListas = document.getElementById('btnListas')
const btnReturn = document.getElementById('btnReturn')
const listaP = localStorage['objectToPass']
 

  //Pinta dinamicamente el nombre de la lista de propósitos
if (listaP == 'personal') {
  let titleP = document.getElementById('tipoLista')
  titleP.innerHTML = `<h2> PERSONALES </h2>` 
} else {
  if (listaP == 'profesional') {
      let titleP = document.getElementById('tipoLista')
      titleP.innerHTML = `<h2> PROFESIONALES </h2>`
      
  } else {
    if (listaP == 'relaciones') {
      let titleP = document.getElementById('tipoLista')
      titleP.innerHTML = `<h2> RELACIONES </h2>`
    }  else {
      if (listaP == 'familia') {
       
        let titleP = document.getElementById('tipoLista')
        titleP.innerHTML = `<h2> FAMILIARES </h2>`
      } else {
          if (listaP == 'salud') {
            let titleP = document.getElementById('tipoLista')
            titleP.innerHTML = `<h2> SALUD Y APRENDIZAJE </h2>`
          }
        }
    }
  }
}


btnReturn.addEventListener('click', () => {
    window.location.href = "./logIn.html"
  })

btnListas.addEventListener('click', () => {
    window.location.href = "./listas.html"
  })

  

// Funcionalidad para introducir Nuevo Propósito a la lista

// Funcionalidad para pintar dinámicamente la Lista de propósitos

// Funcionalidad para abrir el modal de cada propósitos 
// Funcionalidad para marcar las tareas ya echas


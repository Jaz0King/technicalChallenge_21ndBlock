import {saveTask, getTask, onGetTask} from './modules/data.js';
const taskForm = document.getElementById("task-form")
const taskCont = document.getElementById('task-container')

//Evento para arrancar la app al cargar la página
window.addEventListener('DOMContentLoaded', async () => {
    onGetTask((querySnapshot)=> {

    let html = ''
    //Mostrar las tareas dinámicamente
    querySnapshot.forEach(doc =>{
        const prop = doc.data()
        prop.id = doc.id
        html += `
        <tbody id="tab">
        <tr id="tab1">
          <th scope="row" id="enu">${prop.fechaIni} </th>
          <td value="${prop}" data-bs-target="#staticBackdrop${prop.id}"> ${prop.nombre} </td>
          <td> 
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${prop.id}">
              Ver Mas
            </button> 
          </td>
        </tr>
      </tbody>
                           
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop${prop.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">${prop.nombre} </h3>
              </div>
              <div class="modal-body">
              <ul class="list-group list-group-flush">
             <li class="list-group-item"><b>Descripción:</b> ${prop.description} </li>
             <li class="list-group-item"><b>Fecha de Inicio:</b> ${prop.fechaIni} </li>
             <li class="list-group-item"><b>Fecha límite:</b> ${prop.fechaFin} </li>
             </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="done">Cumplido</button>
              </div>
            </div>
          </div>
        </div>   
        </div>
     </div> `    
        
    })

    taskCont.innerHTML = html
})
})

// Función para guardar los datos ingresados 
taskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = taskForm['title']
    const description = taskForm['descrip']
    const fechaIni = taskForm['fechaProp']
    //const fechaFin = taskForm['fechaPropCard']

    saveTask(title.value, description.value, fechaIni.value)

    taskForm.reset()

})

// Función para llamar el calendario
$(function() {
    $('#datepicker').datepicker();
  });
  $(function() {
    $('#datepicker2').datepicker();
  });

// Botones de regreso a listas de propósitos y salida 
const btnListas = document.getElementById('btnListas')
const btnReturn = document.getElementById('btnReturn')
export const listaP = localStorage['objectToPass']
 

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

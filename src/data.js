
var listaP = localStorage['objectToPass']
const db = firebase.firestore();
//Se declaran los arreglos para añadir los registros 

var crearProp = document.getElementById('btnCrear')
crearProp.addEventListener('click', async (e)=> {
 e.preventDefault();
 const obj = {
       nombre: document.getElementById('nombreProp').value,
       descripcion: document.getElementById('descProp').value     
 }

 traerDatos()  
 obj.lista = listaP;
 //console.log(obj)
 await saveObj(obj);
 alert('PROPÓSITO AÑADIDO')
 setTimeout(() => {
  alert('clean')
  window.location.href = "./index.html"
 }, 1100)
 

})

export const saveObj = (obj) => {
 db.collection(listaP).doc().set(obj);
 console.log(obj) 
}

//import * as module from "./app.js"
//Se declaran los arreglos para añadir los registros 
let arrProp = []
let dataRegistro = []


var onGetData = (callback) => db.collection(listaP).onSnapshot(callback)

export async function traerDatos() {
  onGetData((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       let nuevoProp = doc.data()
        nuevoProp.id = doc.id
     //console.log(nuevoProp)
      dataRegistro.push(nuevoProp)
      
    })
     //se pasa la data de firebasea una variable 
    arrProp = dataRegistro
    console.log(arrProp)
    pintarProp()
  })
}

  // Funcionalidad para pintar dinámicamente la Lista de propósitos
let pintarProp = () => {
  document.getElementById('contTable').innerHTML = " "; 
    console.log(arrProp.length)
     for (let prop of arrProp) {
         document.getElementById("contTable").innerHTML += `
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
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
                            <h5 class="modal-title"  id="staticBackdropLabel"> ${prop.nombre} </h5>
                          </div>
                          <div class="modal-body">
                          <ul class="list-group list-group-flush">
                         <li class="list-group-item"><b>Descripción:</b> ${prop.descripcion} </li>
                         </ul>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Cumplido</button>
                          </div>
                        </div>
                      </div>
                    </div>   
                    </div>
                 </div> ` 
      }
      
  }

   
  
  




  

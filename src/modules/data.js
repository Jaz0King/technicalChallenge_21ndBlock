const listaP = localStorage['objectToPass']             //Variable para traer los datos de la pantalla listas 
const db = firebase.firestore();                         //Variable para traer los datos de la base de datos 
const crearProp = document.getElementById('btnCrear') 
const number = document.getElementById('enu')
//Se declaran los arreglos para añadir los registros    
let arrProp = []       
let dataRegistro = []
let contador = 0


const onGetData = (callback) => db.collection(listaP).onSnapshot(callback)


crearProp.addEventListener('click', async (e)=> {
 e.preventDefault();
 const obj = {
       nombre: document.getElementById('nombreProp').value,
       descripcion: document.getElementById('descProp').value,
       fecha: document.getElementById('fechaProp').value,
       fechaFin: document.getElementById('fechaPropCad').value,

 }

 traerDatos()  
 obj.lista = listaP;
 
 //console.log(obj)
 await saveObj(obj);
 
 setTimeout(() => {
  alert('PROPÓSITO AÑADIDO')
  window.location.href = "./index.html"
 }, 800)
 
})

export const saveObj = (obj) => {
 db.collection(listaP).doc().set(obj);
 console.log(obj) 
}


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
    //console.log(arrProp)
    pintarProp()
  })
}




  // Funcionalidad para pintar dinámicamente la Lista de propósitos
let pintarProp = () => {
  
  document.getElementById('contTable').innerHTML = " "; 
   // console.log(arrProp.length)
     for (let prop of arrProp) {
         document.getElementById("contTable").innerHTML += `
                  <tbody>
                    <tr>
                      <th scope="row" id="enu">${prop.fecha} </th>
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
                         <li class="list-group-item"><b>Fecha de Inicio:</b> ${prop.fecha} </li>
                         <li class="list-group-item"><b>Fecha límite:</b> ${prop.fechaFin} </li>
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

   
  
  




  

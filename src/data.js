//Se declaran los arreglos para añadir los registros 
let arrProp =[]

const db = firebase.firestore();

const onGetData = (callback) => db.collection(ListaP).onSnapshot(callback)

export async function traerDatos() {
    onGetData((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         let nuevoProp = doc.data()
          nuevoProp.id = doc.id
       //console.log(visitante)
        dataRegistro.push(nuevoProp)
      })
             //se pasa la data de firebasea una variable 
      arrProp = dataRegistro
      console.log(arrProp)
      pintarProp()
  
    })
  }

// Funcionalidad para pintar dinámicamente la Lista de propósitos
function pintarProp() {
    //console.log(arrProp.length);

    for (let prop of arrProp) {
        document.getElementById("contTable").innerHTML += `
                <div class="card" style="width: 18rem;">
                 <h4 class="card-header" value="${prop}" data-bs-target="#staticBackdrop${prop.id}"> ${prop.nombre} ${prop.fecha} </h4>
                  <div class="card-body">
                   <!-- Button trigger modal -->
                   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${prop.id}">
                     Ver Mas
                   </button>
                   
                   <!-- Modal -->
                   <div class="modal fade" id="staticBackdrop${prop.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                     <div class="modal-dialog">
                       <div class="modal-content">
                         <div class="modal-header">
                           <h5 class="modal-title"  id="staticBackdropLabel"> ${prop.nombre} </h5>
                         </div>
                         <div class="modal-body">
                         <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Compañía:</b> ${prop.descripcion}</li>
                        <li class="list-group-item"><b>Motivo:</b> ${prop.fecha}</li>
                        </ul>
                         </div>
                         <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                           <button type="button" class="btn btn-primary">Check-Out</button>
                         </div>
                       </div>
                     </div>
                   </div>   
                   </div>
                </div> ` 
      }
    }

   
  
  




  

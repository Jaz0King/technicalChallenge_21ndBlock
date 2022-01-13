const listaP = localStorage['objectToPass']             //Variable para traer los datos de la pantalla listas 
const db = firebase.firestore();                         //Variable para traer los datos de la base de datos 
const crearProp = document.getElementById('btnCrear') 

//Se declaran los arreglos para añadir los registros    
let arrProp = []       
let dataRegistro = []

//Variable para traer la data de firebase
const onGetData = (callback) => db.collection(listaP).onSnapshot(callback)

//Función para capturar los datos 
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
  alert('¡PROPÓSITO AÑADIDO, AHORA ES UN RETO!')
  window.location.href = "./index.html"
 }, 500)
 
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

// Funcionalidad para pintar dinámicamente el propósito la Lista de propósitos
const pintarProp = () => {
  
  document.getElementById('contTable').innerHTML = " "; 
   // console.log(arrProp.length)
  
     for (let prop of arrProp) {
         document.getElementById("contTable").innerHTML += `
                  <tbody id="tab">
                    <tr id="tab1">
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
                          <h3 class="modal-title" id="exampleModalLabel">${prop.nombre} </h3>
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
                            <button type="button" class="btn btn-primary" id="done">Cumplido</button>
                          </div>
                        </div>
                      </div>
                    </div>   
                    </div>
                 </div> ` 
      } 
      const logrado = document.getElementById('done')
      logrado.addEventListener('click', () =>{
        
        logrado.innerHTML = `
        <audio autoplay><source src="../assets/audio/avengers.mp3" type="video/mp4"></audio>
        `
        alert("¡FELICIDADES! Estoy muy orgulloso de tí, sabía que lo lograrías.")
        let bgc = document.getElementById('tab1')
        bgc.style.color = "#dc3545"
        
      })
      
  }

   
  
  




  

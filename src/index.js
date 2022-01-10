
// Botones de regreso a listas de propósitos y salida 
var btnListas = document.getElementById('btnListas')
var btnReturn = document.getElementById('btnReturn')
var listaP = localStorage['objectToPass']

var db = firebase.firestore();


var crearProp = document.getElementById('btnCrear');
crearProp.addEventListener('click', async (e)=> {
  e.preventDefault();
  const obj = {
        nombre: document.getElementById('nombreProp').value,
        descripcion: document.getElementById('descProp').value
        //fecha: document.getElementById('fecha').value,
        //motivacion: document.getElementById('motivacion').value
    
}

traerDatos()
  obj.lista = listaP;
  //console.log(obj)
  await saveObj(obj);
  alert("PROPÓSITO AÑADIDO");
      //--- window.location.href = "./index.html";
})

const saveObj = (obj) => {
  db.collection(listaP).doc().set(obj);
  console.log(obj)
}

//Se declaran los arreglos para añadir los registros 
let arrProp = []
let dataRegistro = []

var onGetData = (callback) => db.collection(listaP).onSnapshot(callback)

async function traerDatos() {
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
function pintarProp() {
    console.log(arrProp.length);

    for (let prop of arrProp) {
        document.getElementById("contTable").innerHTML += `
        <table class="table table-dark table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td value="${prop}" data-bs-target="#staticBackdrop${prop.id}"> ${prop.nombre} ${prop.fecha} </td>
                            <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${prop.id}">
                            Ver Mas
                          </button> 
                          </td>
                          </tr>
                        </tbody>
                      </table> 
                                      
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
    window.location.href = "./login.html"
  })

btnListas.addEventListener('click', () => {
    window.location.href = "./listas.html"
  })

  

// Funcionalidad para introducir Nuevo Propósito a la lista

// Funcionalidad para pintar dinámicamente la Lista de propósitos

// Funcionalidad para abrir el modal de cada propósitos 
// Funcionalidad para marcar las tareas ya echas


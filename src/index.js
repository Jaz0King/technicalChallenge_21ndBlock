// Botones de regreso a listas de propósitos y salida 
var btnListas = document.getElementById('btnListas')
var btnReturn = document.getElementById('btnReturn')
var btnNuevoP = document.getElementById('btnNuevoP')
var modal = document.getElementById('modal')
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
registrarProp()
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

//-----Iterar datos de JSON------
const registrar = "../data/listas.json"
let listasP = [];

const registrarProp = () => {
fetch(registrar)
.then((response) => response.json())
.then((data) => {
    listasP.push(data);
    console.log(listasP);

    for (const lista in listasP[0].Listas) {
        console.log(lista)
    }
    })
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


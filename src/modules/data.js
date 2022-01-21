  // Import funciones de firebase por SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getFirestore, 
           collection, 
           addDoc, 
           getDocs,
           deleteDoc,
           onSnapshot,
           getDoc,
           updateDoc,
          doc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
  import { listaP } from "../index.js"        

  const firebaseConfig = {
    apiKey: "AIzaSyC578jfsE2ia0sleabnRua4kbYlBtcDOtI",
    authDomain: "tareas-7f3ee.firebaseapp.com",
    projectId: "tareas-7f3ee",
    storageBucket: "tareas-7f3ee.appspot.com",
    messagingSenderId: "620012180202",
    appId: "1:620012180202:web:b63b743a0459ef40ecfd93"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firestore
  const db = getFirestore();
  //-------Cloud Funclions--------//
  // Funcion para agregar datos a firebase
  export const saveTask = (nombre,description, fechaIni) => addDoc(collection(db,listaP), {nombre, description, fechaIni});
  // Funcion para traer Datos de firebase
  export const getTask = () => getDocs(collection(db,listaP));
  // Funcion para actualizar los datos cuando cambien
  export const onGetTask = (callback) => onSnapshot(collection(db,listaP),callback);
  // Funcion para eliminar propósito 
  export const deleteTask = id => deleteDoc(doc(db, listaP, id));
  // Funcion para editar propósito 
  export const editTask = id => getDoc(doc(db, listaP, id));
  // Función para actualizar los datos del propósito
  export const updateTask = (id, newFields) => updateDoc(doc(db, listaP, id),newFields);




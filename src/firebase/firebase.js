// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  limit,
  orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfZtormf-pOrcFw1rzCPibExUKbx3fwJ0",
  authDomain: "mariano-ecommerce.firebaseapp.com",
  projectId: "mariano-ecommerce",
  storageBucket: "mariano-ecommerce.appspot.com",
  messagingSenderId: "29267135637",
  appId: "1:29267135637:web:4965f54644597238bcdf9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

export async function sendOrden(orden) {
  const ordersCollection = collection(db, 'ordenes');
  const docRef = await addDoc(ordersCollection, orden);
  console.log('docRef generado: ' + JSON.stringify(docRef));
  console.log('id generado: ' + docRef.id);
  return true;
}

export async function sendProduct(product) {
  const ordersCollection = collection(db, 'categorias');
  const docRef = await addDoc(ordersCollection, product);
  console.log('docRef generado: ' + JSON.stringify(docRef));
  console.log('id generado: ' + docRef.id);
  alert('Nuevo pedido recibido, id: ' + docRef.id);
}

export async function getProductos(catId) {
  const q = query(collection(db, 'productos'), where("id", "==", catId));
  const response = await getDocs(q);
  const listaProductos = [];
  response.forEach((docu) => listaProductos.push({ id: docu.id, ...docu.data() }));
  //console.log('lista:'+listaProductos)
  return listaProductos;

}

export async function getOrdenes(email) {

  const q = query(collection(db, 'ordenes'), where("email", "==", email));
  const response = await getDocs(q);
  const listaOrdenes = [];
  response.forEach((docu) => listaOrdenes.push({ id: docu.id, ...docu.data() }));
  //console.log('lista:'+listaProductos)

  return listaOrdenes;

}


export async function getProductosOrdenados(catId, orden) {
  const q = query(collection(db, 'productos'), where("id", "==", catId));
  const response = await getDocs(q);
  const listaProductos = [];
  response.forEach((docu) => listaProductos.push({ id: docu.id, ...docu.data() }));
  //console.log('lista:'+listaProductos)
  listaProductos.map((productos) => {
    productos.items.sort((a, b) => {
      switch (orden) {
        case 'price_asc':
          if (a.price > b.price) {
            return -1;
          }
          break;
        case 'price_desc':
          if (a.price < b.price) {

            return -1;
          }
          break;
        case 'title_asc':
          if (a.title > b.title) {
            return -1;
          }
          break;
        case 'title_desc':
          if (a.title < b.title) {
            return -1;
          }
          break;

        default:
      }

    })

  })
  return listaProductos;

}


export async function buscarProductos(txtBusqueda) {

  const q = query(collection(db, 'productos'));
  const response = await getDocs(q);
  const listaProductos = [];
  const listaFinal = [];
  response.forEach((docu) => listaProductos.push({ id: docu.id, ...docu.data() }));

 
  listaProductos.map((productos) => {
    productos.items.map((producto) => {
      if(producto.title.toLowerCase().includes(txtBusqueda.toLowerCase())) {
        listaFinal.push(producto)
      }
    })
  })

  return listaFinal;
}




export async function getCategorias() {
  const q = query(collection(db, 'categorias'));
  const response = await getDocs(q);
  const listaCategorias = [];
  response.forEach((docu) => listaCategorias.push({ id: docu.id, ...docu.data() }));
  //console.log('lista:'+listaCategorias)
  return listaCategorias;
}
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponent from './components/home/HomeComponent'
import SingleProduct from './components/product/SingleProduct'
import ContactComponent from './components/contact/ContactComponent'

import NavBarComponent from './components/NavBar/NavBarComponent';
import ProductsComponent from './components/products/ProductsComponent';

import FooterComponent from './components/footer/FooterComponent'
import SearchComponent from './components/search/SearchComponent'
import FormComponent from './components/search/FormComponent'
import { ShoppingComponent } from './components/shopping/ShoppingComponent'
import { ShoppingProvider } from './context/ShoppingContext';
import './assets/font.css';
import { OrdenesComponent } from './components/shopping/OrdenesComponent'

function App() {
  const [cont, setCont] = useState(0);
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);


  //agregar al carrito
  const agregar = () => {

    setCont(cont + 1);//contador para el cartWidget
    console.log('agregar: ' + cont)

  }

  const buscar = (cadena) => {

    setBusqueda(cadena);
    console.log(busqueda)

  }


  return (
    <>
      <ShoppingProvider>
        <BrowserRouter>
          <NavBarComponent cantArticulos={cont} buscar={buscar} />
          


            <Routes>

              <Route exact path='/' element={<HomeComponent />} />
              <Route exact path='/products/:catId/:catNom' element={<ProductsComponent agregar={agregar} />} />
              <Route exact path='/search/:txtBusqueda' element={<SearchComponent agregar={agregar} cont={cont} />} />
              <Route exact path='/product/:prodId/:catId' element={<SingleProduct agregar={agregar} cont={cont} />} />
              <Route exact path='/contact' element={<ContactComponent />} />
              <Route exact path='/shopping' element={<ShoppingComponent />} />
              <Route exact path='/ordenes' element={<OrdenesComponent />} />

            </Routes>

          <FooterComponent />
        </BrowserRouter>

      </ShoppingProvider>

    </>
  )
}

export default App
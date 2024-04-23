import React from 'react'
//import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidgetComponent'
import { Link } from "react-router-dom";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ShoppingContext } from "../../context/ShoppingContext";
import SignInComponent from '../signIn/SignInComponent';
import { getCategorias } from '../../firebase/firebase';

export default function NavBarComponent({ cantArticulos, buscar, cadena }) {
  const [busqueda, setBusqueda] = useState('');
  const [myCategories, setMyCategories] = useState([])
  const [compras, setCompras, cantidad, setCantidad] = useContext(ShoppingContext);


  const imgEstilo = {
    width: '150px',
    height: '42px',

    marginLeft: '10px'
  }
  const linkStyle = {
    margin: "0.25rem",
    textDecoration: "none",
    color: 'white',


  };

  const dropStyle = {
    margin: "0.5rem",
    textDecoration: "none",

    fontSize: '11px',
    fontWeight: '300',

  };

  const btnStyle = {
    marginRight: "0.1rem",
    color: 'black',
    border: 'none',
    width: '100%'

  };
  const faEstilo = {

    textDecoration: "none",
    color: 'white',
    fontSize: '16px',
  }

  const headerEstilo = {
    width: '100%',

    transition: '0.5s',
    objectFit: 'cover',

  }

  const pEstilo = {
    height: '14px',
    width: '11px',
    position: 'absolute',
    fontSize: '10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    textAlign: 'center'


  }

  const dropScroll = {
    height: 'auto',
    maxHeight: '200px',
    overflowX: 'hidden',
    width: '250px'
  }


  useEffect(() => {


    document.addEventListener("scroll", e => {

      let scrolled = document.scrollingElement.scrollTop;

      let aux = parseInt(scrolled);

      let opacidad = (900 - aux) / 800;

     
      console.log('op: ' + parseInt(opacidad))
      if (opacidad <= 1) {
     
        document.getElementById("navBusqueda").style.opacity =0;
        document.getElementById("header").style.transform = 'scale(0.85)';
        document.getElementById("navPrincipal").style.borderTopLeftRadius = '1em 1em';
        document.getElementById("navPrincipal").style.borderTopRightRadius = '1em 1em';
        document.getElementById("navPrincipal").style.borderBottomRightRadius = '1em 1em';
        document.getElementById("navPrincipal").style.borderBottomLeftRadius = '1em 1em';
        document.getElementById("navBusqueda").style.borderTopLeftRadius = '1em 1em';
        document.getElementById("navBusqueda").style.borderTopRightRadius = '1em 1em';
        document.getElementById("navBusqueda").style.borderBottomRightRadius = '1em 1em';
        document.getElementById("navBusqueda").style.borderBottomLeftRadius = '1em 1em';
      }
      else  {
        
        document.getElementById("navBusqueda").style.transition = 'opacity 1s'; 
        document.getElementById("navBusqueda").style.opacity =1;

        document.getElementById("header").style.transform = 'scale(1)';
        document.getElementById("navPrincipal").style.borderTopLeftRadius = '0em 0em';
        document.getElementById("navPrincipal").style.borderTopRightRadius = '0em 0em';
        document.getElementById("navPrincipal").style.borderBottomRightRadius = '0em 0em';
        document.getElementById("navPrincipal").style.borderBottomLeftRadius = '0em 0em';
        document.getElementById("navBusqueda").style.borderTopLeftRadius = '0em 0em';
        document.getElementById("navBusqueda").style.borderTopRightRadius = '0em 0em';
        document.getElementById("navBusqueda").style.borderBottomRightRadius = '0em 0em';
        document.getElementById("navBusqueda").style.borderBottomLeftRadius = '0em 0em';
      }






      //style={{padding: '14px 24px'}}


    })

    obtenerCategorias();

    if (localStorage.getItem('cantidad') != null) {

      localStorage.setItem('firstLoadDone', 1);
      var array = localStorage.getItem('compras');

      setCompras(JSON.parse(array));
      setCantidad(parseInt(localStorage.getItem('cantidad')))
    }

  }, []);

  async function obtenerCategorias() {

    const categorias = await getCategorias();


    setMyCategories(categorias);
    console.log('myProds: ' + myCategories)

  }



  const cargarBusqueda = () => {
    document.getElementById('txtBusqueda').addEventListener('keyup', function (e) {
      if (e.keyCode === 13) {

        if (busqueda != '') {
          document.getElementById("linkBuscar").click();
        }

      } else {
        setBusqueda(e.target.value)
      }

    });
    //  document.getElementById("btnBuscar").click();

  }


  const crearNavbar = (id) => {

    switch (id) {
      case 'MLU1648':
        return false;
        break;
      case 'MLU1144':
        return false;
        break;
      case 'MLU1000':
        return false;
        break;
      case 'MLU1051':
        return false;
        break;
      default:
        return true;
    }

  }




  return (
    <>

      <header id='header' style={headerEstilo} className="fixed-top">

        <nav id='navPrincipal' className="navbar navbar-expand-lg bg-dark shadow-lg" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#"> <Link style={linkStyle} to={'/'}><img style={imgEstilo} src={'https://raw.githubusercontent.com/MarianoBB1988/EntregaFinal-MarianoBastarreix/main/src/assets/logo.png'} /></Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">


              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link active" href="#"> <Link style={linkStyle} to={'/'}>Home</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> <Link style={linkStyle} to={'/products/MLU1051/Celulares y telefonía/'}>Celulares y telefonía</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> <Link style={linkStyle} to={'/products/MLU1648/Informática/'}>Informática</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/products/MLU1144/Consolas y video juegos/'}>Consolas y video juegos</Link></a>
                </li>


                <li className="nav-item">
                  <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/products/MLU1000/Electrónica y audio/'}>Electrónica y audio</Link></a>
                </li>

                <li >
                  <NavDropdown
                    id="dropdown-button-drop-end"
                    menuVariant="dark"
                    title={
                      <span style={dropStyle}>Otras categorias</span>

                    }
                  ><ul style={dropScroll}>
                      {myCategories.map((categoria) => (
                        crearNavbar(categoria.id) &&

                        <NavDropdown.Item style={{ fontSize: '12px' }} href=""><Link style={linkStyle} to={'/products/' + categoria.id + '/' + categoria.name}>{categoria.name}</Link></NavDropdown.Item>

                      ))}
                    </ul>
                  </NavDropdown>
                </li>


              </ul>
              <a href='#' title='Contacto' style={faEstilo} onMouseOver={({ target }) => target.style.color = "yellow"} onMouseOut={({ target }) => target.style.color = "white"}><Link style={faEstilo} to={'/contact'}>&nbsp; &nbsp;&nbsp;&nbsp;<FaEnvelope /> &nbsp;&nbsp; &nbsp;</Link></a>&nbsp;


              <a style={faEstilo} title='Compras' className='text-white '>  <CartWidget />{isNaN(parseInt(localStorage.getItem('cantidad'))) ? '' : <span style={pEstilo}>{cantidad} </span>}</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <SignInComponent />
            </div>

          </div>

        </nav>

        <nav className="navbar navbar-expand-lg" id='navBusqueda' style={{ backgroundColor: '#f8d303' }} data-bs-theme="dark">
          <div className="container">

            <div className="collapse navbar-collapse " id="navbarSupportedContent">



              <ul className="me-auto mb-4 mb-lg-0 col-lg-12 ">
                <div className="input-group" >
                  <input style={dropStyle} id="txtBusqueda" onClick={cargarBusqueda} onChange={cargarBusqueda} type="search" className="form-control rounded" placeholder="🔍    Que estas buscando?     " aria-label="Search" aria-describedby="search-addon" />
                <button className='bg-transparent' style={{border:'0px'}}>  <Link style={{ color: 'black', fontSize: '16px' }} id='linkBuscar' to={'/search/' + busqueda}><FaSearch onMouseOver={({ target }) => target.style.color = "yellow"} onMouseOut={({ target }) => target.style.color = "black"} style={btnStyle} />
                  </Link>
                  </button>
                </div>
              </ul>



            </div>

          </div>

        </nav>

      </header>

      <br></br>
      <br></br>
      <br></br>
      <br></br>






    </>

  )
}

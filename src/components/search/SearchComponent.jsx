import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Fade from 'react-bootstrap/Fade';
import ReactLoading from "react-loading";
import CardComponent from "../products/CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShoppingContext } from "../../context/ShoppingContext";
import HistoryComponent from "../products/HistoryComponent";
import { buscarProductos, getProductos, getProductosOrdenados } from '../../firebase/firebase';
import { sendProduct } from '../../firebase/firebase';

export default function SearchComponent({ agregar }) {
  const [myProds, setMyProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();
  const { catNom } = useParams();
  const { txtBusqueda } = useParams();
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  //const [largo, setLargo] = useState(0)

  const [compras, setCompras, cantidad, setCantidad, vistos, setVistos] = useContext(ShoppingContext);

  const cardEstilo = {
    width: '288px'

  }


  const btnEstilo = {
    backgroundColor: '#ac2bac'
  }



  async function obtenerProductos() {


    const productos = await buscarProductos(txtBusqueda);
    /* const productos = await filterMaxPrice(7); */


    setMyProds(productos);
    console.log('productos: ' + myProds)

  }


  async function obtenerProductosOrdenados(orden) {

    const productos = await getProductosOrdenados(catId, orden);
    /* const productos = await filterMaxPrice(7); */


    setMyProds(productos);


  }

  const mostrarVistos = () => {
   
    {
      document.getElementById('carrusel').style.display = 'hidden'

    }
  }

  useEffect(() => {
    obtenerProductos();

    setLoading(false);
  }, catId);




  const ordenar = (e) => {

    obtenerProductosOrdenados(e.target.value)

  }




  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>




      <div className="container">


        <div className="row">
          <h4>{catNom}</h4>
          <div className="col-md">

          </div>

          <div className="col-md-1" style={{ fontSize: '12px', color: '#61615C' }}>

          </div>
          <h4>Resultado de la búsqueda: {txtBusqueda}</h4>

        </div>
        <hr className="hr" />


        <div className="row row-cols-3 g-3">
          {loading ? (
            <ReactLoading type="bubbles" color="yellow" height="20%" width="20%" />
          ) : (




            myProds.map((producto) => (

              <CardComponent key={producto.id} product={producto} cat={catId} agr={agregar} />
            ))






          )}

        </div>
        <br></br >

      </div>


    </>
  );

}

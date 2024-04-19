import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Fade from 'react-bootstrap/Fade';
import ReactLoading from "react-loading";
import CardComponent from "./CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShoppingContext } from "../../context/ShoppingContext";
import HistoryComponent from "./HistoryComponent";
import { getProductos, getProductosOrdenados } from '../../firebase/firebase';
import { sendProduct } from '../../firebase/firebase';

export default function ProductsComponent({ agregar }) {
  const [myProds, setMyProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();
  const { txtBusqueda } = useParams();
  const { catNom } = useParams();
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
    console.log('categoria:' + catId)
    const productos = await getProductos(catId);
    /* const productos = await filterMaxPrice(7); */


    setMyProds(productos);


  }

  
  async function obtenerProductosOrdenados(orden) {
    console.log('categoria:' + catId)
    const productos = await getProductosOrdenados(catId,orden);
    /* const productos = await filterMaxPrice(7); */


    setMyProds(productos);


  }

  const mostrarVistos = () => {
    alert()
    {
      document.getElementById('carrusel').style.display = 'hidden'

    }
  }
  useEffect(() => {
    obtenerProductos();

    const timer = setTimeout(() => {

      setLoading(false);
      console.log('La carga ha finalizado!');
    }, 1000);

    //cleanUp
    return () => clearTimeout(timer);
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
          <div className="col-md-2" style={{ fontSize: '12px', color: '#61615C' }}>
            <p> {myProds.map((prod) => prod.items.length)} artículos &nbsp; <div className="vr"></div>&nbsp;&nbsp; Ordenar:</p>
          </div>
          <div className="col-md-2">

            <select className="form-select form-select-sm" name="cant" id="cant" onChange={ordenar} style={{ fontSize: '10px', color: '#61615C' }}>
              <option value="Recomendados">Recomendados</option>
              <option value="price_asc">Mayor precio</option>
              <option value="price_desc">Menor Precio</option>
              <option value="title_desc">A-Z</option>
              <option value="title_asc">Z-A</option>
            </select>
          </div>

        </div>
        <hr className="hr" />



        {loading ? (
          <ReactLoading type="bubbles" color="yellow" height="20%" width="20%" />
        ) : (
          myProds.map((prod) => (

            <div className="row row-cols-3 g-3">

              {prod.items.map((producto) => (

                <CardComponent key={producto.id} product={producto} cat={catId} agr={agregar} />

              ))}

            </div>

          ))

        )}


        <br></br >
        <div id='carrusel'>
          <hr className="hr" />

          {vistos.length > 0 ? <h6>Ultimos artículos visitados</h6> : <h6></h6>}

          <Carousel

            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}

            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >


            {vistos.map((visto) => (
              <div>

                <HistoryComponent key={visto.id_prod} visto={visto} cat={catId} />


              </div>

            ))}

          </Carousel>

        </div>
      </div>


    </>
  );

}

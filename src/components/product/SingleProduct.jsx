import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Fade from 'react-bootstrap/Fade';
import FsLightbox from "fslightbox-react";
import { ShoppingContext } from "../../context/ShoppingContext";
import { getProductos } from '../../firebase/firebase';

export default function SingleProduct({ agregar, cont }) {
    const [open, setOpen] = useState(false);

    const [contador, setContador] = useState(cont);
    const { prodId } = useParams();
    const { catId } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [compras, setCompras, cantidad, setCantidad, vistos, setVistos] = useContext(ShoppingContext);
    console.log('id: ' + prodId + catId);

    const [lightboxController, setLightboxController] = useState({
        toggler: false,

    });

    async function agregarCarrito(compra) {
        setCompras([...compras, { id: compra.id, title: compra.title, price: compra.price, thumbnail: compra.thumbnail, currency_id: compra.currency_id }])
        // props.agr()
        console.log(compra)
    };

    const agregarVistos = ((compra) => {
        setVistos([...vistos, { id: compra.id, title: compra.title, price: compra.price, thumbnail: compra.thumbnail, currency_id: compra.currency_id }])
        // props.agr()
        console.log('vistos:' + vistos)
    });



    function abrirLigthbox(ruta) {
        console.log( 'ruta: ' + ruta)
        setLightboxController({
            toggler: !lightboxController.toggler,
            ruta: ruta
        });
    }

    const imgEstilo = {
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const linkStyle = {

        textDecoration: "none",

        fontSize: '12px',
    };


    const mostrar = new Promise(() => {

        setTimeout(() => {


            setOpen(true)
            // reject('Error en servidor');

        }, 1000);

    });

    async function obtenerProductos() {
        console.log('categoria:' + catId)
        const productos = await getProductos(catId);
        /* const productos = await filterMaxPrice(7); */


        setProducts(productos);


    }

    useEffect(() => {

        obtenerProductos();


    }, prodId);

    const suplantar = ((unaCadena) => {
        if (unaCadena = 'new') {
            return 'nuevo';
        } else {
            return 'usado';
        }
    })

    const ruta = ((categoria) => {
        switch (categoria) {
            case 'MLU1051':
                return 'Celulares y telefonía';
                break;
            case 'MLU1648':
                return 'Informática';
                break;
            case 'MLU1144':
                return 'Consolas y video juegos';
                break;
            case 'MLU1000':
                return 'Electrónica y audio';
                break;
        }

    })





    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="container">
                
            <FsLightbox
                toggler={lightboxController.toggler}

                sources={[lightboxController.ruta]}
            />
          
                <Fade in={open}>

                    <div className="row " >
                        <div className="col-8 "> <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" href="#"> <Link style={linkStyle} to={'javascript:history.back()'}>Volver &nbsp; | &nbsp;  </Link> </a>
                            <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" href="#" style={linkStyle}> <Link style={linkStyle} to={'/'}>Home</Link> /</a>
                            <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" href="#"> <Link style={linkStyle} to={'/products/' + catId}>{ruta(catId)}</Link></a><br></br>
                        </div>

                    </div>
                </Fade>

                {products.map((prod) => (

                    prod.items.map((producto) => (

                        producto.id_prod === prodId &&

                        <Fade in={open}>

                            <div className="card shadow" >

                                <p className="card-header">Detalles del producto</p>

                                <div className="row" >
                                    <div className="card-body col-1">
                                    </div>
                                    <div className="card-body col-4"  >
                                        <a href="#" onClick={() => abrirLigthbox('https://http2.mlstatic.com/D_' + producto.thumbnail_id + '-O.webb')}><img className="img-fluid" alt="Responsive image" style={imgEstilo} src={'http://http2.mlstatic.com/D_' + producto.thumbnail_id + '-O.webb'} /></a>

                                    </div>
                                    <div className="card-body col-4">

                                        <p className="card-text">{producto.title}</p>
                                        <h4 className="card-title">{producto.currency_id} <strong>{producto.price}</strong></h4>
                                        <h6>Valoración: </h6>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStarHalfAlt /></i>
                                        <i><FaRegStar /></i>
                                        <br></br>
                                        <br></br>
                                        <h6 className="card-title">Disponibles: <strong>{producto.available_quantity}</strong></h6>
                                        <h6 className="card-title">Condición: <strong>{suplantar(producto.condition)}</strong></h6><br></br>

                                        <div className="d-grid gap-2">
                                            <button className="btn btn-secondary" type="button" data-mdb-ripple-init onClick={() => { agregarCarrito(producto) }} >Agregar al carrito</button>
                                            <button className="btn btn-dark " type="button" data-mdb-ripple-init>Comprar ahora</button>
                                        </div>
                                    </div>

                                    <div className="card-body col-1">
                                    </div>

                                </div>
                            </div>

                        </Fade>

                    ))



                )
                )}
            </div>
<br></br><br></br><br></br>

        </>
    );

}


import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";
import { FaShoppingBag } from "react-icons/fa";


export default function CardComponent(props) {

  const [compras, setCompras, cantidad, setCantidad, vistos, setVistos] = useContext(ShoppingContext);

  const [contador, setContador] = useState(0);

  const imgEstilo = {
    width:'35%',
    height:'100%',
    transition:'0.5s',
    objectFit:'cover'

  }
  const zoomEstilo={
  
  }


  useEffect(() => {
  
    localStorage.setItem('compras', JSON.stringify(compras));
    localStorage.setItem('cantidad',cantidad);
    

 });

   function agregarVistos() {

    let i = 0;
    vistos.map((visto) => {
      if (visto.id === props.product.id_prod) {
        i++;
      }
    }
    );
    if (i === 0) {
      setVistos([...vistos, { id_prod: props.product.id_prod, title: props.product.title, price: props.product.price, thumbnail: props.product.thumbnail, currency_id: props.product.currency_id }])
      console.log('vistos:' + vistos)
    }
  }

  



  function agregarCarrito() {

    let cant = 0;
    console.log(cantidad)
    if (cantidad === 0) {
      
      setCompras([...compras, { id_prod: props.product.id_prod, cantidad: 1, title: props.product.title, price: props.product.price, thumbnail: props.product.thumbnail, currency_id: props.product.currency_id }])
    } else {
      
      const artModificado = compras.map((compra) => {

        if (compra.id_prod === props.product.id_prod) {
          cant = compra.cantidad + 1
          const auxCompras = [...compras];
          const compraMod = auxCompras.find(
            c => c.id_prod === compra.id_prod,

          );
          compraMod.cantidad = cant;
          setCompras(auxCompras);

        }

      })
      console.log(compras)
      if (cant == 0) {
        setCompras([...compras, { id_prod: props.product.id_prod, cantidad: 1, title: props.product.title, price: props.product.price, thumbnail: props.product.thumbnail, currency_id: props.product.currency_id }])

      }
    }
    setCantidad(cantidad + 1)
    console.log('compras: ' + compras)
    localStorage.setItem('compras', JSON.stringify(compras));
    localStorage.setItem('cantidad',cantidad);

    //localStorage.setItem('temp', JSON.stringify(compras));
    console.log('cantidad:' + compras.length)

  }

  return (
    <>


      <div className="col" >
        <div className="card shadow" >
          <Link style={{backgroundColor:'white'}} className="btn btn-link btn-light" onClick={agregarVistos} to={'/product/' + props.product.id_prod + '/' + props.cat}><img  onMouseOver={({ target }) => target.style.transform= 'scale(1.1)'} onMouseOut={({ target }) =>target.style.transform= 'scale(1)'} style={imgEstilo} src={props.product.thumbnail} className="card-img-top"
            alt="imagen" /></Link>

          <div className="card-body">

            <p className="card-text" style={{ fontSize: '13px' }}>
              {props.product.title}
            </p>
            <h5 className="card-title">{props.product.currency_id} <strong>{props.product.price}</strong></h5>
           
            <div className="d-grid gap-2 ">
              <button type="button" className="btn btn-dark" style={{ fontSize: '13px' }} data-mdb-ripple-init onClick={agregarCarrito} ><FaShoppingBag style={{ fontSize: '11px' }} />&nbsp; &nbsp;Agregar al carrito</button>
            </div>


          </div>
        </div>

      </div>
    </>
  );

}

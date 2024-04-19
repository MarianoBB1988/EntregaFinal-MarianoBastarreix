import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";

export default function HistoryComponent(props) {
console.log ('history: ' + props.visto.id_prod)
  const [contador, setContador] = useState(0);

  const imgEstilo = {
    width: '30%',

  }


  return (
    <>


      <div className="col-11">
        <div className="card shadow">
          <a href='#' className="btn btn-light btn-link" data-mdb-ripple-init data-mdb-ripple-color="dark"><Link to={'/product/' + props.visto.id_prod + '/' + props.cat}><img style={imgEstilo} src={props.visto.thumbnail} className="card-img-top"
            alt="imagen" /></Link></a>

          <div className="card-body">

            <p className="card-text" style={{ fontSize: '12px' }}>
              {props.visto.title}
            </p>
            <h6 className="card-title">{props.visto.currency_id} <strong>{props.visto.price}</strong></h6>
           

          </div>
        </div>

      </div>
      <br></br>  <br></br>
    </>
  );

}

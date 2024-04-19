import React, { useContext, useState, useEffect } from "react";
import { FaCheckCircle, FaTrashAlt, FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { ShoppingContext } from "../../context/ShoppingContext";
import { sendOrden } from '../../firebase/firebase';
import FormLoginComponent from "../signIn/FormLoginComponent";
import Toast from 'react-bootstrap/Toast';
import ConfirmComponent from "./ConfirmComponent";
import { Link } from "react-router-dom";

export const ShoppingComponent = () => {
    const [compras, setCompras, cantidad, setCantidad] = useContext(ShoppingContext);
    let total = 0;
    const [totales, setTotales] = useState(0);
    const [Loginmodal, setLoginModal] = useState(false);
    const [Confirmmodal, setConfirmModal] = useState(false);
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);


    const imgEstilo = {
        width: '75%',
    }

    const linkStyle = {

        textDecoration: "none",

        fontSize: '12px',
    };


    useEffect(() => {
        if(localStorage.getItem('compras')){
            var array = localStorage.getItem('compras');
            // Se parsea para poder ser usado en js con JSON.parse :)
            setCompras(JSON.parse(array));
            setCantidad(parseInt(localStorage.getItem('cantidad')))
        }
       


    }, []);


    function insertarOrden() {
        let fecha=new Date().toDateString()
        if (localStorage.getItem("email")) {
            const newOrden = {
                
                email: localStorage.getItem("email"),

                compras,
                total: total.toFixed(2),
                fecha: new Date().toLocaleString( { timeZoneName: 'short' }).toString(),
            };
            if (sendOrden(newOrden)) {
                setCompras([])
                setCantidad(0)
                localStorage.removeItem('compras')
                localStorage.removeItem('cantidad')
                setShowA(true)
            }

        } else {
            setLoginModal(true);
        }

    }



    const cambioMoneda = (precio, moneda, cantidad) => {

        if (moneda === 'UYU') {
            precio = precio / 38;
            total = total + precio * cantidad
            return (precio.toFixed(2)) * cantidad;

        } else {
            total = total + precio * cantidad
            return precio * cantidad;
        }

    }

   

    return (
        <>
<br></br><br></br>
            <div className="container">

                <Toast show={showA} className="bg-warning" onClose={ toggleShowA} style={{ width: '80%', position: 'absolute' }}>

                    <Toast.Header >
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2 bg-warning"
                            alt=""
                        />
                        <strong className="me-auto"><h3> <FaCheckCircle />  &nbsp;Muchas gracias por su compra</h3></strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Su compra se ha realizado con éxito!</Toast.Body>
                </Toast>
<br></br><br></br><br></br>

                {compras.length < 1 ? (<h6 id="mensaje" style={{ color: '#685757' }}>No has agregado ningún artículo a tu compra</h6> )


                    : (

                        <>


                         
                            <section>
                                <div class="row justify-content-md-center" style={{ fontSize: '20px' }}>

                                    <div class="col">
                                        Métodos de pago: &nbsp; <SiMercadopago style={{ fontSize: '40px' }} />&nbsp;&nbsp;<FaCcMastercard style={{ fontSize: '40px' }} />&nbsp;&nbsp;
                                        <FaCcVisa style={{ fontSize: '40px' }} /> &nbsp;<FaCcPaypal style={{ fontSize: '40px' }} />
                                    </div>

                                </div>
                                <br></br>
                                <table className="table" id='tablaCompras' style={{ fontSize: '12px' }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Artículos</th>
                                            <th scope="col"></th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    {compras.map((compra) => (

                                        <tbody >
                                            <tr>
                                                <td><img style={imgEstilo} src={compra.thumbnail} className="card-img-top"
                                                    alt="imagen" /></td>
                                                <td>{compra.title}</td>
                                                <td>{compra.cantidad}</td>
                                                <td style={{ width: '100px' }}>USD {cambioMoneda(compra.price, compra.currency_id, compra.cantidad)}</td>
                                                <td><a href="#eliminar" style={{ color: 'black' }} key={compra.id_prod} onClick={() => {
                                                    if (compra.cantidad === 1) {
                                                        setCompras(
                                                            compras.filter(c =>
                                                                c.id_prod !== compra.id_prod
                                                            )
                                                        );
                                                    } else {
                                                        compra.cantidad = compra.cantidad - 1
                                                        setCompras(compras)
                                                    }

                                                    setCantidad(cantidad - 1)
                                                }}

                                                ><FaTrashAlt /></a><p></p><p></p></td>
                                            </tr>
                                        </tbody>

                                    ))}
                                </table>
                                <br></br>
                                <p style={{ fontSize: '14px' }}><strong>Importe total:</strong> USD <strong>{total.toFixed(2)}</strong></p>

                                <button type="button" className="btn btn-dark" data-mdb-ripple-init onClick={insertarOrden}>Finalizar compra</button>

                            </section >

                            <FormLoginComponent modal={Loginmodal} setModal={setLoginModal} />
                            <ConfirmComponent modal={Confirmmodal} setModal={setConfirmModal} />
                        </>
                    )}
                     <br></br>
                     
            </div>
            <br></br>

       <br></br><br></br><br></br><br></br><br></br>
          <div className="container">  <Link style={linkStyle} to={'javascript:history.back()'}>⬅️Volver &nbsp;&nbsp;  </Link></div>
          <br></br> <br></br> <br></br>
        </>

    );
};

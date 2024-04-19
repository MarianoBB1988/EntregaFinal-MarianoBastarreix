import React, { useContext, useState, useEffect } from "react";
import { FaCheckCircle, FaTrashAlt, FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { ShoppingContext } from "../../context/ShoppingContext";
import { sendOrden, getOrdenes } from '../../firebase/firebase';
import FormLoginComponent from "../signIn/FormLoginComponent";
import Toast from 'react-bootstrap/Toast';
import ConfirmComponent from "./ConfirmComponent";
import { Link } from "react-router-dom";

export const OrdenesComponent = () => {
    const [cantidad, setCantidad] = useContext(ShoppingContext);
    let total = 0;
    let aux = [];
    const [totales, setTotales] = useState(0);
    const [ordenes, setOrdenes] = useState([]);
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
    }
    async function obtenerOrdenes() {

        const listaOrdenes = await getOrdenes(localStorage.getItem('email'));
        /* const productos = await filterMaxPrice(7); */
        setOrdenes(listaOrdenes);
    }

    useEffect(() => {
        obtenerOrdenes()
        if (localStorage.getItem('compras')) {
            var array = localStorage.getItem('compras');
            // Se parsea para poder ser usado en js con JSON.parse :)

            setCantidad(parseInt(localStorage.getItem('cantidad')))
        }



    }, []);


    function insertarOrden() {
        if (localStorage.getItem("email")) {
            const newOrden = {
                cliente: {
                    email: localStorage.getItem("email"),
                },
                compras,
                total: total.toFixed(2),
                date: new Date(),
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

               
                <br></br><br></br><br></br>

                {ordenes.length < 1 ? (<h6 id="mensaje" style={{ color: '#685757' }}>No has realizado ninguna compra</h6>)


                    : (

                        <>



                            <section>
                                <div class="row justify-content-md-center" style={{ fontSize: '20px' }}>

                                    <div class="col">
                                     Compras realizadas por: &nbsp;{localStorage.getItem('email')}
                                    </div>

                                </div>
                                <br></br>

                                {ordenes.map((orden) => (
                                    <div>
                                        <section style={{ backgroundColor: '#212529', color: 'white', fixed: 'float' }}>
                                            <p style={{ border: '5px' }}><strong>Fecha de la orden: </strong> {orden.fecha}</p>
                                        </section>
                                        
                                        <table className="table" id='tablaCompras' style={{ fontSize: '12px' }}>

                                            <thead>
                                                <tr>
                                                    <th scope="col">Artículos</th>
                                                    <th scope="col"></th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Precio</th>

                                                </tr>
                                            </thead>

                                            {orden.compras.map((compra) => (

                                                <tbody >
                                                    <tr>
                                                        <td><img style={imgEstilo} src={compra.thumbnail} className="card-img-top"
                                                            alt="imagen" /></td>
                                                        <td>{compra.title}</td>
                                                        <td>{compra.cantidad}</td>
                                                        <td style={{ width: '100px' }}>USD {cambioMoneda(compra.price, compra.currency_id, compra.cantidad)}</td>

                                                    </tr>
                                                </tbody>

                                            ))}

                                        </table>
                                      
                                        <h4 style={{ border: '5px' }}>Costo total de la orden: USD <strong>{orden.total}</strong></h4>
                                        <br></br>
                                       

                                    </div>
                                ))}

                         
                                <p style={{ fontSize: '14px' }}><strong>Importe total de la órdenes:</strong> USD <strong>{total.toFixed(2)}</strong></p>

                              

                            </section >

                            <FormLoginComponent modal={Loginmodal} setModal={setLoginModal} />
                            <ConfirmComponent modal={Confirmmodal} setModal={setConfirmModal} />
                        </>
                    )}
                <br></br>

            </div>
         

            <div className="container">  <Link style={linkStyle} to={'javascript:history.back()'}>⬅️Volver &nbsp;&nbsp;  </Link></div>
            <br></br> <br></br> <br></br>
        </>

    );
};

import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignInComponent from "./SignInComponent";

export default function FormLoginComponent({modal, setModal}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loginModal, setLoginModal] = useState();

    useEffect(() => {
      
        if (modal===true){
            setLoginModal(true)
            handleShow()
        }else{
            handleClose()
        }
      

    });

    const cerrarModal=()=>{
        setModal(false)
    }

    const separadorEstilo = {

        alignItems: 'center',
        color: '#a7a4a4',
        display: 'flex',
        margin: '25px 0',
    }
    const lineaEstilo = {
        backgroundColor: '#ccc',
        flexGrow: 5,
        height: '1px',
    }

    const logoEstilo = {
        width: '150px',
        height: '42px',

        marginLeft: '10px'
    }
    const orEstilo = {

        flexGrow: 1,
        margin: '0 15px',
        textAlign: 'center',
        fontSize: '12px'

    }
    
    return (
        <>
        
             <Modal show={show} onHide={cerrarModal}>
                <Modal.Header closeButton onClick={cerrarModal}>
                    <Modal.Title ><h6>Iniciar sesión</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <img style={logoEstilo} src={window.location.origin + '/src/assets/logo_bk.png'} />
                        <br></br><br></br>
                        <div className="mb-3">

                            <input
                                type="email" style={{ fontSize: '13px' }}
                                className="form-control"
                                placeholder="Ingresa tu email"
                            />
                        </div>
                        <div className="mb-3">

                            <input style={{ fontSize: '13px' }}
                                type="password"
                                className="form-control"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label style={{ fontSize: '12px' }} className="custom-control-label" htmlFor="customCheck1">
                                    Recordarme
                                </label>
                            </div>
                        </div>
                        <div className="d-grid" >
                            <button style={{ fontSize: '13px' }} type="submit" className="btn btn-dark">
                                Continuar
                            </button>
                        </div>
                        <br></br>
                        <p className="forgot-password text-right" style={{ fontSize: '13px' }}>
                            <a href="#">Olvidaste tu contraseña?</a> <button style={{ fontSize: '13px' }} type="button" class="btn btn-light" >Registrarse</button>
                        </p>


                        <div style={separadorEstilo} className="or-container"><div style={lineaEstilo} className="line-separator"></div> <div style={orEstilo} className="or-label">or</div><div style={lineaEstilo} className="line-separator"></div></div>

                        <div className="d-grid">
                            <a className="btn btn-light" style={{ fontSize: '13px' }} href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Inciciar sesión con Google</a>
                       <SignInComponent />
                        </div>

                        <br></br>
                    </form>

                </Modal.Body>

            </Modal>
        </>
    );

}

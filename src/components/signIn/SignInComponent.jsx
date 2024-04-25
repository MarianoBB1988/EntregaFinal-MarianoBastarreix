import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase"
import { FaUser, FaShoppingBag, FaSignOutAlt, FaRegClock  } from "react-icons/fa";
import { useState, useEffect } from "react";
import HomeComponent from "../home/HomeComponent"
import NavDropdown from 'react-bootstrap/NavDropdown';
import {signOut} from "firebase/auth";
import { Link } from "react-router-dom";

export default function SignInComponent() {
    const [login, setLogin] = useState("");
    const [avatar, setAvatar] = useState("");

    const faEstilo = {

        textDecoration: "none",
        color: 'white',
        icon: "a",
        fontSize:'14px'
    }

    const linkStyle = {

        textDecoration: "none",
        color:'white',
        fontSize: '12px',
    }

    useEffect(() => {
        setLogin(localStorage.getItem("email"));
        setAvatar(localStorage.getItem("photoURL"));
    });

       
        const logIn = () => {
           
            signInWithPopup(auth, provider).then((data) => {
                setLogin(data.user.email);
                setAvatar(data.user.photoURL)
              
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("photoURL", data.user.photoURL);
              
            });

        };


        const logOut = () => {
           signOut(auth).then(() => {
            console.log("Signed out successfully")
        }).catch((error) => {
        
        });
                localStorage.removeItem("email");
                localStorage.removeItem("photoURL");
                location.href ="/";
        

        };

        return (
            <>
                
                {login ? 
                <NavDropdown
                    id="Avatar"
                
                    title={
                        <img src={avatar} className="rounded-circle"
                        height="35" alt="Avatar" loading="lazy" />}

                  >
                    <ul>




                    <NavDropdown.Item style={{ fontSize: '12px' }}  href=""><FaRegClock /> &nbsp;  Historial</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: '12px' }}><Link style={linkStyle} to={'/ordenes/'}><FaShoppingBag /> &nbsp;  Compras realizadas</Link></NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: '12px' }} href="" onClick={logOut}><FaSignOutAlt />&nbsp;Cerrar sesión</NavDropdown.Item>
                    </ul>
                  </NavDropdown>

                   
                    : <a href='#' onClick={logIn} title='Login' style={faEstilo} onMouseOver={({ target }) => target.style.color = "yellow"} onMouseOut={({ target }) => target.style.color = "white"}> &nbsp; <FaUser /> &nbsp; &nbsp;</a>}

            </>
        );

    
}

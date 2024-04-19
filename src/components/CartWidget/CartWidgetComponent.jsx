import React from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidgetComponent() {

 

  const linkStyle = {

    textDecoration: "none",
    color: 'white'
  
};

  return (
    <>
      <a style={linkStyle} href='#' onMouseOver={({ target }) => target.style.color = "yellow"} onMouseOut={({ target }) => target.style.color = "white"}>
      <Link style={linkStyle} to={'/shopping'}> <FaShoppingCart /></Link>
     
      </a>

    </>
  )
}



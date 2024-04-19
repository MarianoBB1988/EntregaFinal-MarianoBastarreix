import React from 'react'


export default function HrefComponent ({condicion}) {
 
    //retornamos cada item con el nombre recibido como props al igual que un mensaje a mostrar al usuario.
    
  
    return (
      <>
      {condicion==='MLU1051' ? 'prueba' : 'error'};
      <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/products/'+categoria.id}>{categoria.name}</Link></a>
      </>
    )
  }


import React, { createContext, useState, useEffect } from "react";

export const ShoppingContext = createContext(null);

export const ShoppingProvider = ({ children }) => {
  const [compras, setCompras] = useState([]);

  const [cantidad, setCantidad] = useState(0);
  const [vistos, setVistos]= useState([]);
  


  return (
    
    <ShoppingContext.Provider value={[compras, setCompras, cantidad, setCantidad, vistos, setVistos]}>
      {children}
    </ShoppingContext.Provider>
  );
};

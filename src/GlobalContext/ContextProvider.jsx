'use client'
import React, { createContext, useState } from 'react';
export const GlobalContext = createContext()
const ContextProvider = ({children}) => {
    const [cart,setCart]=useState([])
    const data ={cart,setCart}
    return (
        <GlobalContext.Provider value={data}>
{children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider;
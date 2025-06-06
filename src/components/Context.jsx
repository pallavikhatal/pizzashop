import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function CartProvider({children})
{
    const [cart, setCart] = useState([])

    useEffect(()=>{
        console.log('rendered');
    },[cart])

    return(
        <Context.Provider value={{cart,setCart}}>
            {children}
        </Context.Provider>
    )
}
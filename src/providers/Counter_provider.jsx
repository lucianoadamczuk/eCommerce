import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Counter_context = createContext()

export const Counter_provider = ({children}) => {

    const [counterQuantity, setConunterQuantity] = useState(1)

    const location = useLocation()

    useEffect(() => {
        if(location.pathname !== "details/:id"){
            setConunterQuantity(1)
        }
    }, [location.pathname])
    


    return(
        <Counter_context.Provider value={{counterQuantity, setConunterQuantity}}>
            {children}
        </Counter_context.Provider>
    )
}
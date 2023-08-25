import { createContext, useState } from "react";

export const Page_shopping_context = createContext()

export const Page_shopping_provider = ({children}) => {

    const [array_productsToBuy, setArray_productsToBuy] = useState([])

    return(
        <Page_shopping_context.Provider value={{array_productsToBuy, setArray_productsToBuy}}>
            {children}
        </Page_shopping_context.Provider>
    )
}
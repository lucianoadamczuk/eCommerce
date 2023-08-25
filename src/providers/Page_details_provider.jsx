import { createContext, useContext, useEffect, useState } from "react";
import { DB_products } from "../databases/DB_products";
import { useParams } from "react-router-dom";

export const Page_details_context = createContext()

export const Page_details_provider = ({children}) => {

    // Database
    const {databaseProducts} = useContext(DB_products)
    
    // array
    const [unifiedArray, setUnifiedArray] = useState()

    // product to see
    const [productID_forDetails, setProductID_forDetails] = useState()

    // Data found to be displayed
    const [dataToShow, setDataToShow] = useState()


    // Due to the database is an array of objects i have to merged them in one to be able to find the one which fit with the ID to search
    useEffect(() => {

        const merged_databaseProducts = Object.values(databaseProducts)
        setUnifiedArray(merged_databaseProducts.reduce((accumulator, currentValue) => {
        for (const key in currentValue) {
            if (Array.isArray(currentValue[key])) {
                accumulator = accumulator.concat(currentValue[key]);
            }
        }
            return accumulator;
        }, []))

        setDataToShow(unifiedArray)

    }, [])

    // set data
    useEffect(() => {
        setDataToShow(unifiedArray?.find(item => item.id === productID_forDetails))
    }, [productID_forDetails])
    

    const [productColor, setProductColor] = useState()
    const [productSize, setProductSize] = useState()
    const [productQuantity, setProductQuantity] = useState()
    const [productPrice, setProductPrice] = useState()

    
    return(
        <Page_details_context.Provider value={
                {
                    dataToShow, setProductID_forDetails,
                    productColor, setProductColor, 
                    productSize, setProductSize, 
                    productQuantity, setProductQuantity, 
                    productPrice, setProductPrice
                }
            }>
            {children}
        </Page_details_context.Provider>
    )
}
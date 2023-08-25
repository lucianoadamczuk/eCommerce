import { createContext, useContext, useEffect, useState } from "react";
import { DB_products } from "../databases/DB_products";

export const Page_showroom_context = createContext()

export const Page_showroom_provider = ({children}) => {

    const {databaseProducts} = useContext(DB_products)

    const data_men = {
        images: [
            "/images/page_men/img-0.jpg", 
            "/images/page_men/img-1.jpg", 
            "/images/page_men/img-2.jpg",
            "/images/page_men/img-3.jpg",
            "/images/page_men/img-4.jpg",
        ],
        title: "Men",
        paragraph: "Dressing with style is a way to express your personality and demonstrate your self-confidence. By carefully choosing your clothing and accessories, you can show the world who you are and what matters to you. Men's fashion is full of options, from formal to casual wear, and each piece provides you with the opportunity to create a unique and authentic look. Find your style and let your clothes speak for you.",
        products: {
            shirts: databaseProducts.men.shirts,
            pants: databaseProducts.men.pants,
            shoes: databaseProducts.men.shoes,
        },
        banner: {
            text: "gilgamesh for him",
            image: "/images/banners/page_men.jpg"
        }
    }

    const data_women = {
        images: [
            "/images/page_women/img-0.jpg", 
            "/images/page_women/img-1.jpg", 
            "/images/page_women/img-2.jpg",
            "/images/page_women/img-3.jpg",
            "/images/page_women/img-4.jpg",
        ],
        title: "Women",
        paragraph: "Fashion is one of the best ways to express your creativity and personal style. The clothing and accessories you wear can completely change your appearance and make you feel more confident and powerful. Women's fashion is extremely varied and there are endless possibilities to create unique looks. Dress with style and feel beautiful!",
        products: {
            shirts: databaseProducts.women.shirts,
            pants: databaseProducts.women.pants,
            shoes: databaseProducts.women.shoes,
        },
        banner: {
            text: "gilgamesh for her",
            image: "/images/banners/page_women.jpg"
        }
    }

    const data_youngs = {
        images: [
            "/images/page_youngs/img-0.jpg", 
            "/images/page_youngs/img-1.jpg", 
            "/images/page_youngs/img-2.jpg",
            "/images/page_youngs/img-3.jpg",
            "/images/page_youngs/img-4.jpg",
        ],
        title: "Youngs",
        paragraph: "Clothing is a form of expression and, for many young people, a way to showcase their personality. Whether it's something simple and casual or more elegant, clothing can be a way to present oneself to the world as they are, without the need to compare or compete with others. At the end of the day, the most important thing is to feel good in one's own skin and enjoy the fun and creativity that fashion can offer.",
        products: {
            shirts: databaseProducts.youngs.shirts,
            pants: databaseProducts.youngs.pants,
            shoes: databaseProducts.youngs.shoes,
        },
        banner: {
            text: "gilgamesh for them",
            image: "/images/banners/page_youngs.jpg"
        }
    }

    const [dataToShow, setDataToShow] = useState(data_men)
    const [paramValue, setParamValue] = useState()
    
    useEffect(() => {
        if(paramValue === "men"){
            setDataToShow(data_men)
        }
        else if(paramValue === "women"){
            setDataToShow(data_women)
        }
        else if(paramValue === "youngs"){
            setDataToShow(data_youngs)
        }
    }, [paramValue])
    
    
    return(
        <Page_showroom_context.Provider value={{dataToShow, setParamValue}}>
            {children}
        </Page_showroom_context.Provider>
    )
}
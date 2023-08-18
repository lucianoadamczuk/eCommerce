import { createContext } from "react";

export const Page_home_context = createContext()

export const Page_home_provider = ({children}) => {

    const pageContent = {

        sections: [
            {
                title: "Fashion Forward: Where Style Meets Expression",
                paragraph: "We believe that fashion is a way of personal and artistic expression, and Gilgamesh is designed to help you stand out in any situation. Whether you're looking for a garment that reflects your unique personality or simply want something that makes you feel incredibly stylish and elegant, we have something for you.",
            },
            {
                title: "Create and inspire",
                paragraph: "Where imagination blossoms into reality, and passion ignites the sparks of innovation. With every creation, we carve a path of endless possibilities, leaving a trail of inspiration in our wake.",
                buttons: [
                    {text: "Find what you want"},
                    {text: "Style consultings"}
                ]
            }
        ],

        cards_withHover: [
            {image: "/images/cards/w-hover/home-0.jpg", text: "Be free", },
            {image: "/images/cards/w-hover/home-1.jpg", text: "Stay comfortable", },
            {image: "/images/cards/w-hover/home-2.jpg", text: "Explore your creativity", },
            {image: "/images/cards/w-hover/home-3.jpg", text: "Find who you are!", }
        ],

        cards: [
            {   
                image: "/images/cards/home-0.jpg", 
                text: "We want you to feel special and unique, and to know that your clothes are an extension of your personality and style."
            },
            {   
                image: "/images/cards/home-1.jpg",
                text: "Our brand is an expression of our passion for fashion and we believe in the power of fashion to inspire and transform. We are excited to share our work with all those who seek perfection in their style."
            },
            {   
                image: "/images/cards/home-2.jpg",
                text: "Elegance is not just about dressing well, but about the way you move through life, leaving an indelible mark on the minds of those who know you."
            }
        ],

        banners:[
            {image: "images/banners/page_home.jpg", text: "We love dressing you well"}
        ],

    }

    return(
        <Page_home_context.Provider value={{pageContent}}>
            {children}
        </Page_home_context.Provider>
    )
}
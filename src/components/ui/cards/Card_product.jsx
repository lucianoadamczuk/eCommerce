import { useState } from "react"
import { Icon_plusSign } from "../../../icons"
import { useNavigate } from "react-router-dom"

export const Card_product = ({ id, imgURL, title, price, stock}) => {

    const [index, setIndex] = useState(0)

    const navigate = useNavigate()

    const isMobile = window.innerWidth <= 768;

    function handleClick(){
        if(isMobile){
            if(index === 0){
                setIndex(1)
            }else{
                setIndex(0)
            }
        }
    }
    
    return(
            <article className=" shadow-lg shadow-muted" 
                onClick={() => handleClick()}
                onMouseOver={!isMobile  ? () => setIndex(1) : null } 
                onMouseLeave={!isMobile ? () => setIndex(0) : null } 
            >

                <div className=" relative">
                    <img src={imgURL[index]} alt="" className=" w-full h-64 object-cover object-center"/>

                    <div className="  w-8 h-8  absolute top-3 right-0 flex justify-center items-center cursor-pointer rounded-s-lg bg-primary hover:bg-secondary" onClick={() => navigate(`/details/${id}`)}>
                        <Icon_plusSign/>
                    </div>
                </div>

                <section className=" h-32  flex flex-col justify-around items-center">
                    <p className=" text-2xl uppercase"> {title} </p>
                    <p> ${price} </p>
                    <p className=" text-xs text-muted"> Stock: {stock} </p>
                </section>

            </article>

    )
}
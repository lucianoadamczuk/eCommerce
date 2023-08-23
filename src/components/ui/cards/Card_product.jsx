import { useState } from "react"
import { Icon_plusSign } from "../../../icons"

export const Card_product = ({imgURL, title, price, stock}) => {

    const [index, setIndex] = useState(0)

    return(
        <article className=" shadow-lg shadow-muted" onMouseOver={() => setIndex(1)} onMouseLeave={() => setIndex(0)} >

            <div className=" relative">
                <img src={imgURL[index]} alt="" className=" w-full h-64 object-cover object-center"/>

                <div className="  w-8 h-8  absolute top-3 right-0 flex justify-center items-center cursor-pointer rounded-s-lg bg-primary hover:bg-secondary">
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
import { useState } from "react"
import { Animate_backToFront, Animate_fadeIn, Animate_rotate } from "../../../animations"

export const Card_withHover = ({backgroundImage, text}) => {

    const [isHover, setIsHover] = useState()

    return(
        <Animate_fadeIn>
            <Animate_backToFront>
                <Animate_rotate>
                    <article className=" h-96 m-2 bg-cover bg-center " style={{backgroundImage: `url(${backgroundImage})`}} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

                        <div className={` h-full pb-10 flex justify-center items-end bg-dark  ${isHover ? "bg-opacity-80 " : "bg-opacity-20"} `} >

                            { isHover && <p className=" text-3xl uppercase text-light animate-bounce"> {text} </p> }
                            
                        </div>

                    </article>
                </Animate_rotate>
            </Animate_backToFront>
        </Animate_fadeIn>
    )
}
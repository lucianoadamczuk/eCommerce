import { Animate_fadeIn, Animate_rightToLeft } from "../../../animations"

export const Card_withText = ({backgroundImage, inverted, text}) => {
    return(
        <Animate_fadeIn>
            <Animate_rightToLeft>
                <article className=" lg:grid lg:grid-cols-2 shadow-lg shadow-muted">

                    <section className={` h-80  bg-cover bg-center ${inverted && "lg:order-2"} `} style={{backgroundImage: `url(${backgroundImage})`}}></section>

                    <section className={`p-10 flex justify-center items-center ${inverted && "lg:order-1"} `}>
                        <p> {text} </p>
                    </section>

                </article>
            </Animate_rightToLeft>
        </Animate_fadeIn>
    )
}
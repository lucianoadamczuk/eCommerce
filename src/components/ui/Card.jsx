export const Card = ({backgroundImage, inverted, text}) => {
    return(
        <article className=" lg:grid lg:grid-cols-2 shadow-lg shadow-muted">

            <section className={` h-80  bg-cover bg-center ${inverted && "lg:order-2"} `} style={{backgroundImage: `url(${backgroundImage})`}}></section>

            <section className={`p-10 flex justify-center items-center ${inverted && "lg:order-1"} `}>
                <p> {text} </p>
            </section>

        </article>
    )
}
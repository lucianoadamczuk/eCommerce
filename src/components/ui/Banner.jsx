export const Banner = ({backgroundImage, text}) => {
    return(
        <article className=" h-60 bg-cover bg-center bg-fixed " style={{backgroundImage: `url(${backgroundImage})`}}>

            <section className=" h-full pb-10 flex justify-center items-end bg-dark bg-opacity-50">

                    <p className="  text-2xl text-center uppercase text-light"> {text} </p>

            </section>
            
        </article>
    )
}
export const Interface_centered = ({dark, title, paragraph, children}) => {
    return(
        <article className={`py-20   ${dark === true && "bg-dark" } `} >

            <section className=" container space-y-5">

                <h5 className={ ` text-5xl font-bold text-center ${dark === true? " text-primary " : " text-secondary"} ` } > {title} </h5>
                <p className={` text-center ${dark === true? " text-light " : "text-dark"}` } > {paragraph} </p>

                <div className=" container space-y-10">
                    {children}
                </div>

            </section>

        </article>
    )
}
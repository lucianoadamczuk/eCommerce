import { Animate_fadeIn, Animate_rightToLeft } from "../../animations"
import { Button } from "../ui"

export const Header = () => {
    return(
        <header className=" bg-cover bg-center " style={{height: "90vh", backgroundImage: "url(images/header/home-0.jpg)" }}  >
            
            <article className="  h-full pb-10 bg-dark bg-opacity-70 flex ">

                    <section className=" container  h-full flex flex-col justify-end  ">
                        <Animate_fadeIn>
                            <Animate_rightToLeft>
                                <div className="lg:w-3/4">
                                    <h3 className=" text-5xl font-bold uppercase tracking-wider text-primary "> Fashion is calling </h3>
                                    <p className=" text-2xl text-light"> Answer with Style </p>
                                    
                                    <div className=" mt-5">
                                        <Button text="Market" />
                                        <Button text="Live the experience" />
                                    </div>
                                </div>
                            </Animate_rightToLeft>
                        </Animate_fadeIn>
                    </section>

            </article>

        </header>
    )
}
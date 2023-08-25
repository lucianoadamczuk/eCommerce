import { Button_2 } from "../ui"

export const Modal = ({open, text, onClick_1, onClick_2}) => {
    if(open){
        return(
            <article className=" w-full h-full fixed top-0 left-0 flex justify-center items-center bg-dark bg-opacity-80">

                <section className=" w-80 h-60 p-5 flex flex-col justify-center gap-5 bg-white rounded-md">

                    <div>
                        <h4 className=" font-bold text-xl">Ey! Do you want to add:</h4>
                        <p> {text} </p>
                    </div>

                    <div className=" lg:flex justify-center ">
                        <Button_2
                            dark={true}
                            text="Yes, i do want"
                            onClick={onClick_1}
                        />

                        <Button_2
                            text="No, i don't "
                            onClick={onClick_2}
                        />
                    </div>
                </section>

            </article>
        )
    }
}
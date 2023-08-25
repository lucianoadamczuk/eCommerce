import { useContext } from "react"
import { Button_3 } from "../ui"
import { Counter_context } from "../../providers"

export const Widget_counter = () => {

    const {counterQuantity, setConunterQuantity} = useContext(Counter_context)

    return(
        <article className=" flex items-center space-x-2">

            <Button_3 text="<" onClick={() => { 
                if(counterQuantity > 1){
                    setConunterQuantity(prevState => (prevState - 1))
                }} 
            }/>

            <p className=" font-normal"> {counterQuantity} </p>

            <Button_3 text=">" onClick={() => setConunterQuantity(prevState => (prevState + 1))} />

        </article>
    )
}
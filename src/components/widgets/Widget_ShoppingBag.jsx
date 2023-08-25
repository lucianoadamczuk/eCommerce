import { useContext } from "react"
import { Icon_bag } from "../../icons"
import { Page_shopping_context } from "../../providers"
import { useNavigate } from "react-router-dom"

export const Widget_shoppingBag = () => {

    const {array_productsToBuy} = useContext(Page_shopping_context)

    const navigate = useNavigate()

    return(
        <article className=" relative cursor-pointer" onClick={() => navigate("/shopping")} >
            <Icon_bag/>
            <div className=" w-5 h-5 absolute -top-2 -right-2 flex justify-center items-center bg-secondary rounded-full">
                <p className=" text-xs text-light"> {array_productsToBuy.length} </p>
            </div>
        </article>
    )
}
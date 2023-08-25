import { useContext } from "react"
import { Page_shopping_context } from "../providers"
import { Icon_trash } from "../icons"
import { Button_2 } from "../components/ui"
import { useNavigate } from "react-router-dom"

export const Page_shopping = () => {

    const {array_productsToBuy, setArray_productsToBuy} = useContext(Page_shopping_context)

    function delateAllProducts(){
        setArray_productsToBuy([])
    }

    function delateThisProduct(index){
        const refreshedArray = [...array_productsToBuy]
        refreshedArray.splice(index, 1)
        setArray_productsToBuy(refreshedArray)
    }   

    const navigate = useNavigate()

    if(array_productsToBuy.length === 0){
        return(
            <article className=" min-h-screen flex justify-center items-center">
                <section className=" flex flex-col items-center ">

                    <p className=" text-xl text-center ">You don't have products to buy yet</p>

                    <Button_2 
                        text="Go back"
                        dark={true}
                        onClick={() => navigate(-1)}
                    />

                </section>
            </article>
        )
    }

    return(
        <article className=" pt-32 container ">

            <section className=" py-1 grid grid-cols-5 text-center bg-dark rounded-t-lg font-bold text-primary">
                <p> Name </p>
                <p> Color </p>
                <p> Size </p>
                <p> Price </p>
                <div className=" flex justify-center">
                    <Icon_trash onClick={() => delateAllProducts()}/>
                </div>
            </section>

            {
                array_productsToBuy && (

                    array_productsToBuy.map((product, index) => (
                        <div className=" py-5 grid grid-cols-5 items-center border-b-2 border-muted text-sm text-center"> 
                            <p> {product.name}  </p>
                            <p> {product.color} </p>
                            <p> {product.size} </p>
                            <p> {product.price} </p>
                            <div className=" flex justify-center">
                                <Icon_trash onClick={() => delateThisProduct(index)} />
                            </div>
                        </div>
                    ))

                )
            }

        </article>
    )
}
import { useContext, useEffect, useState } from "react"
import { Button_2, Button_3 } from "../components/ui"
import { Counter_context, Page_details_context, Page_shopping_context } from "../providers"
import {  useNavigate, useParams } from "react-router-dom"
import { Widget_counter } from "../components/widgets"
import { Modal } from "../components/others"
import { Container_pages } from "../containers/Container_pages"


export const Page_details = () => {

    // it gets the product ID writen in the params and send it to the Page_details_provider to find the product
    const {setProductID_forDetails} = useContext(Page_details_context)

    const param = useParams()
    const {id} = param

    useEffect(() => {
        setProductID_forDetails(id)
    }, [id])
    
    // -

    // It multiplies the price according to the quantity of products that the user wishes
    const {counterQuantity} = useContext(Counter_context)

    // data to display and to store information about the product to buy
    const {
        dataToShow,
        productColor, setProductColor,
        productSize, setProductSize, 
        productPrice, setProductPrice
    } = useContext(Page_details_context)


    // When the product is not 100% customized the user will see this alert
    const [text, setText] = useState("")

    function alert(){
        if(productColor === undefined && productSize === undefined){
            setText("You have to choose a color and a size")
        } else if(productColor === undefined){
            setText("You have to choose a color")
        } else if(productSize === undefined){
            setText("You have to choose a size")
        } 

        setTimeout(() => {
            setText("")
        }, 2000);
    }
    // 

    // To paint the button selected
    const [isThisColorSelected, setIsThisColorSelected] = useState()
    const [selectedColorIndex, setSelectedColorIndex] = useState();
    function chooseColor(option, index){
        setProductColor(option)
        setSelectedColorIndex(index)
        setIsThisColorSelected(true)
    }

    // To paint the button selected
    const [isThisSizeSelected, setIsThisSizeSelected] = useState()
    const [selectedSizeIndex, setSelectedSizeIndex] = useState();
    function chooseSize(option, index){
        setProductSize(option)
        setSelectedSizeIndex(index)
        setIsThisSizeSelected(true)
    }

    // Related to the Modal
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal(){
        if(productColor && productSize){
            setIsModalOpen(true)
        }
    }


    // Save, add to bag and redirect
    const {setArray_productsToBuy} = useContext(Page_shopping_context)
    const navigate = useNavigate()
    function saveAndRedirect(){

        setArray_productsToBuy(prevState => [
            ...prevState, 
            {
                name: dataToShow.title, 
                color: productColor, 
                size: productSize, 
                price: productPrice
            }
        ])

        navigate("/shopping")

    }


    // Related to animation
    const [imageIndex, setImageIndex] = useState(0)


        return(
            <Container_pages conditionBeforeDisplay={dataToShow}>
                <article className=" pt-32 container grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    
                    {/* images */}
                    <article className=" p-3 flex gap-5 items-end bg-center bg-cover" style={{height: "70vh", backgroundImage: `url(${dataToShow?.imgURL[imageIndex]})`}}>
                        
                        {
                            dataToShow?.imgURL.map((img, index) => (
                                <img src={img} key={index} className=" w-20 h-20 rounded-lg shadow-lg shadow-muted cursor-pointer hover:scale-90" onClick={() => setImageIndex(index)} />
                            ))
                        }

                    </article>

                    {/* options */}
                    <article className=" lg:p-10">

                        <section className=" p-8 flex flex-col justify-around gap-5 rounded-xl shadow-muted shadow-lg">

                            {/* product customization */}
                            <section className=" space-y-5">

                                <div>
                                    <p className=" font-bold">Available Colors:</p>
                                    {
                                        dataToShow?.availableColors?.map((option, index) =>  (
                                            <Button_3 
                                                key={index} 
                                                text={option} 
                                                small={true} 
                                                dark={index === selectedColorIndex}
                                                onClick={() => chooseColor(option, index) }
                                            />
                                        ))
                                    }
                                </div>

                                <div>
                                    <p className=" font-bold">Available Sizes:</p>
                                    {
                                        dataToShow?.availableSizes?.map((option, index) =>  (
                                            <Button_3 
                                                key={index}
                                                text={option} 
                                                small={true} 
                                                dark={index === selectedSizeIndex}
                                                onClick={() => chooseSize(option, index)}
                                            />
                                        ))
                                    }
                                </div>
                                
                                <div className=" font-bold">
                                    <p>How many do you want?: </p>
                                    <Widget_counter/>
                                </div>
                            </section>
                            
                            {/* Text, button and price */}
                            <section >
                                <p className=" h-5 text-xs animate-bounce text-danger"> {text} </p>

                                <div className=" flex flex-col items-center ">

                                    <p> <span> <b>Price:</b> </span>  ${dataToShow?.price * counterQuantity} </p>

                                    <Button_2 
                                        dark={true} 
                                        text="add"
                                        onClick={() => {
                                            alert()
                                            setProductPrice(dataToShow.price * counterQuantity)
                                            openModal()
                                        } }
                                    />
                                    
                                </div>
                            </section>

                        </section>

                    </article>

                    <Modal
                        open={isModalOpen}
                        text={ <> {counterQuantity + " " + dataToShow?.title + "color " + productColor + " and size " + productSize + " for " + productPrice} </> }
                        onClick_1={() => saveAndRedirect() }
                        onClick_2={() => setIsModalOpen(false)}
                    />

                </article>
            </Container_pages>
        )

}
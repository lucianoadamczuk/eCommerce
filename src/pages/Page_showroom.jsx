import { useContext, useEffect } from "react"
import { Banner, Carousel_fade } from "../components/ui"
import { Page_showroom_context } from "../providers"
import { Container_carousel_responsive } from "../containers/Container_carousel_responsive"
import { useParams } from "react-router-dom"
import { Container_pages } from "../containers/Container_pages"

export const Page_showroom = () => {

    const {setParamValue, dataToShow} = useContext(Page_showroom_context)

    const {category} = useParams()
    
    useEffect(() => {
        setParamValue(category)
    }, [category])
    

    return(
        <Container_pages conditionBeforeDisplay={dataToShow}>
            <article className=" container pt-32 grid grid-cols-1 lg:grid-cols-2 gap-5 " >

                    <div style={{height:"75vh"}}>
                        <Carousel_fade dataToShow={dataToShow.images} />
                    </div>

                    <div className=" flex flex-col justify-center gap-2 ">

                        <div className=" w-fit py-2 px-9 bg-dark ">
                            <h5 className=" text-5xl font-bold uppercase tracking-widest animate-pulse text-primary"> 
                                {dataToShow.title} 
                            </h5>
                        </div>

                        <p> {dataToShow.paragraph} </p>

                    </div>

            </article>

            <article className=" container mt-20 space-y-10">

                <Container_carousel_responsive text="Shirts" dataToShow={dataToShow?.products?.shirts} />

                <Container_carousel_responsive text="Pants" dataToShow={dataToShow?.products?.pants}/>

                <Container_carousel_responsive text="Shoes" dataToShow={dataToShow?.products?.shoes}/> 

            </article>

            <Banner backgroundImage={dataToShow?.banner.image} text={dataToShow?.banner?.text} />

        </Container_pages>
    )
}
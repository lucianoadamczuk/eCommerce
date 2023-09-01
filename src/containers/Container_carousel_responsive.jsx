import { Animate_fadeIn, Animate_rightToLeft } from "../animations"
import { Carousel_responsive } from "../components/ui"

export const Container_carousel_responsive = ({text, dataToShow}) => {
    return(
        <article className=" space-y-2">
            <Animate_fadeIn>
                <Animate_rightToLeft>
                    <h5 className=" font-bold text-5xl uppercase tracking-widest text-secondary"> {text} </h5>
                </Animate_rightToLeft>
            </Animate_fadeIn>
            
            <Carousel_responsive dataToShow={dataToShow}/>
        </article>
    )
}
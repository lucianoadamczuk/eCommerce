import { useContext } from "react"
import { Header } from "../components/layout"
import { Banner, Button_2, Card, Card_withHover, Carousel_responsive } from "../components/ui"
import { Container_pages } from "../containers/Container_pages"
import { Page_home_context } from "../providers"
import { Interface_centered } from "../interfaces"
import { Container_carousel_responsive } from "../containers/Container_carousel_responsive"


export const Page_home = () => {

    const {pageContent, popularProducts, newProducts} = useContext(Page_home_context)


    return(
        <Container_pages conditionBeforeDisplay={pageContent && popularProducts && newProducts}>

            <Header/>

            <Interface_centered
                dark={true}
                title={pageContent.sections[0].title}
                paragraph={pageContent.sections[0].paragraph}
            >

                <section className=" grid grid-cols-1">

                    <div className=" grid lg:grid-cols-2 ">
                        <Card_withHover backgroundImage={pageContent.cards_withHover[0].image} text={pageContent.cards_withHover[0].text} />
                        <Card_withHover backgroundImage={pageContent.cards_withHover[1].image} text={pageContent.cards_withHover[1].text} />
                    </div>
                        <Card_withHover backgroundImage={pageContent.cards_withHover[2].image} text={pageContent.cards_withHover[2].text}/>
                        <Card_withHover backgroundImage={pageContent.cards_withHover[3].image} text={pageContent.cards_withHover[3].text}/>
                </section>

            </Interface_centered>

            <Interface_centered>
                <Container_carousel_responsive text="Populars" dataToShow={popularProducts?.slice(0, 10)} />
                <Container_carousel_responsive text="News" dataToShow={newProducts?.slice(0, 10)} />
            </Interface_centered>

            <Interface_centered
                title={pageContent.sections[1].title}
                paragraph={pageContent.sections[1].paragraph}
            >
                
                <Card text={pageContent.cards[0].text} backgroundImage={pageContent.cards[0].image} />
                <Card text={pageContent.cards[1].text} backgroundImage={pageContent.cards[1].image} inverted={true}/>
                <Card text={pageContent.cards[2].text} backgroundImage={pageContent.cards[2].image} />

                <div className=" md:flex justify-center ">
                    <Button_2 
                        dark={true}
                        text={pageContent.sections[1].buttons[0].text}
                    />
                    <Button_2 
                        text={pageContent.sections[1].buttons[1].text}
                    />
                </div>

            </Interface_centered>

            <Banner backgroundImage={pageContent.banners[0].image} text={pageContent.banners[0].text} />

        </Container_pages>
    )
}
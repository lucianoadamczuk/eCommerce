import { Spinner } from "../components/others"

export const Container_pages = ({ conditionBeforeDisplay, children}) => {


    if(conditionBeforeDisplay === undefined){
        return(
            <article className=" min-h-screen flex justify-center items-center">
            <Spinner/>
            </article>
        )
    }

    if(conditionBeforeDisplay){
        return(
            <article>
                {children}
            </article>
        )
    }
    
}
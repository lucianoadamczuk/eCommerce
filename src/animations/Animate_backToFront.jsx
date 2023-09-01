import {isMobile} from "react-device-detect"
import {motion} from "framer-motion"


export const Animate_backToFront = ({children}) => {

    if(isMobile){
        return(
            <div> {children} </div>
        )
    }

    return(
        <motion.div initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 0.8}} viewport={{once:true}} >
            {children}
        </motion.div>
    )
}
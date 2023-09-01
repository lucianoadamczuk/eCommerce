import {motion} from "framer-motion"
import { isMobile } from "react-device-detect"

export const Animate_rightToLeft = ({children}) => {


    if(isMobile){
        return(
            <div> {children} </div>
        )
    }

    return(
        <motion.div initial={{ x: 100 }} whileInView={{ x: 0}} transition={{duration: 0.5}} viewport={{once: true}} >
            {children}
        </motion.div>
    )
}
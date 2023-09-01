import {motion} from "framer-motion"
import { isMobile } from "react-device-detect"

export const Animate_rotate = ({children})  => {

    if(isMobile){
        return(
            <div> {children} </div>
        )
    }

    return(
        <motion.div initial={{rotate: 20}} whileInView={{rotate: 0}} transition={{duration: 0.8}} viewport={{once: true}}  >
            {children}
        </motion.div>
    )
}
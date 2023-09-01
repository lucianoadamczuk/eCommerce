import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

export const Animate_fadeIn = ({children}) => {

    if(isMobile){
        return(
            <div> {children} </div>
        )
    }

    return(
        <motion.div initial={{opacity: 0.2}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}} >
            {children}
        </motion.div>
    )
}
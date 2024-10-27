
import { background, height, mountAnim } from "./anim"
import styles from "./style.module.scss"
import { motion } from "framer-motion"

export default function(){
    return(
        <div className={styles.stairs}>
            {
                [...Array(5)].map((_,index) => {
                    return <Stair key={index} index={index}/>
                })
            }
        </div>
    )
}

const Stair = ({ index }) => {
    return <motion.div
    variants={height}
    {...mountAnim}
    custom={4-index}
    className={styles.stair}
    >
    </motion.div>
}

const Background = () => {
    return <motion.div
    variants={background}
    {...mountAnim}
    className={styles.background}
    >

    </motion.div>
}
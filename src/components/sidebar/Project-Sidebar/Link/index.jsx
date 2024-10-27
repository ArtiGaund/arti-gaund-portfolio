import Link from "next/link"
import styles from "./style.module.scss"
import { motion } from "framer-motion"
export default function link({ data, index}){
    const { title, description, images } = data
    return(
        <motion.div
        variants={rotateX}
        {...mountAnim}
        custom={index}
        className={styles.el}
        >
            <Link href="/">{title}</Link>
        </motion.div>
    )
}
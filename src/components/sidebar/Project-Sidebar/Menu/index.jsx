
import { motion } from "framer-motion"
import Link from "../Link"
import styles from "./style.module.scss"

const menu = [
    {
        title: "Web Projects",
        description: "To See All Web Projects in detail",
        images: []
    },
    {
        title: "Android Projects",
        description: "From Here You Can Navigate To All Apps",
        images: []
    },
    {
        title: "Machine Learning Projects",
        description: "Done Some Projects In Machine Learning",
        images: []
    }
]

export default function({ closeMenu }){
    return(
        // <div className={styles.menu}>
        //     <div className={styles.header}>
        //         <motion.svg
        //         variants={slideLeft}
        //         {...mountAnim}
        //         onClick={() => {closeMenu()}}
        //         width="68"
        //         height="68"
        //         viewBox="0 0 68 68"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <path d="M1.5 1.5L67 67" stroke="white"/>
        //             <path d="M66.5 1L0.999997 66.5" stroke="white"/>
        //         </motion.svg>
        //     </div>

        //     <div className={styles.body}>
        //         {
        //             menu.map( (el, index) => {
        //                 return <Link data={el} index={index} key={index}/>
        //             })
        //         }
        //     </div>
        // </div>
        <></>
    )
}
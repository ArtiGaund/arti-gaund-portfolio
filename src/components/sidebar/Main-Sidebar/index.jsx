'use client'

import { useState } from "react"

import styles from './style.module.scss'

export default function(){

    const [ isActive, setIsActive ] = useState(false)

    return(
        <div className="w-80 bg-purple-800 text-white z-20 p-5 ml-10 mt-10 rounded-lg relative">
            <div className="flex flex-row">
                <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
                <div className="flex-1">Projects</div>
                <div className="flex-1">|</div>
                <div className="">Portfolio</div>
            </div>
                
        </div>
    )
}
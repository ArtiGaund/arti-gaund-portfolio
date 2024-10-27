"use client"

import { useState } from "react"
import Burger from "./Burger"
import { AnimatePresence } from "framer-motion"
import Stairs from "./Stairs"
import Menu from "./Menu"


export default function (){
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)

    return(
        <div>
            <Burger openMenu={() => setMenuIsOpen(true)}/>
            {/* AnimatePresence hook from framer motion allow us to force the component to trigger its exit 
            animation before being unmouted */}
            <AnimatePresence mode="wait">
                {
                    menuIsOpen && <>
                    <Stairs />
                    <Menu closeMenu={() => setMenuIsOpen(false)}/>
                    </>
                }
            </AnimatePresence>
        </div>
    )
}
'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button2 from './Button2';
// import styles from '../../styles/header.scss';
import Nav from './Nav';

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="header2">
            <motion.div 
                className="menu2"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button2 isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}
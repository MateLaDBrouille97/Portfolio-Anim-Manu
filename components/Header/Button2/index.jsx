import { motion } from 'framer-motion';
// import styles from '../../../styles/button.scss';

export default function Button2({isActive, toggleMenu}) {
  return (
    <div className="button2">
        <motion.div 
            className="slider"
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className="el"
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className="el"
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({label}) {
    return (    
        <div className="perspectiveText">
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}
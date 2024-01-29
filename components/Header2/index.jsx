'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function Header2() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const navContainer = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"});
                gsap.to(navContainer.current, { opacity: 0, duration: 0.25, ease: "power1.out" });
            },
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false));
                gsap.to(navContainer.current, { opacity: 1, duration: 0.25, ease: "power1.out" });
            }
            }
        })
    }, [])

   

    return (
        <>
        <div ref={header} className="header4">
            <div className="logo4">
                <p className="copyright"> 
                <Link href="/" legacyBehavior>
                ©
                </Link>
               
                </p>
                <div className="name4">
                    <p className="codeBy">Code by</p>
                    <Link href="/" legacyBehavior>
                        <p className="dennis">Manuel</p>
                    </Link>
                    <Link href="/" legacyBehavior>
                    <p className="snellenberg">Labridy</p>
                    </Link>
                </div>
            </div>
            <div ref={navContainer} className="nav4">
            <Magnetic>
                    <div className="el4">
                    <Link href="/about" legacyBehavior>
                            <a>About</a>
                    </Link>
                        <div className="indicator4"></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className="el4">
                    <Link href="/works" legacyBehavior>
                         <a>Works</a>
                    </Link>
                       
                        <div className="indicator4"></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className="el4">
                    <Link href="/service" legacyBehavior>
                            <a>Services</a>
                    </Link>
                        <div className="indicator4"></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className="el4">
                    <Link href="/contact" legacyBehavior>
                         <a>Contact</a>
                    </Link>
                        <div className="indicator4"></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className="headerButtonContainer2">
            <Rounded onClick={() => {setIsActive(!isActive)}} className="button4">
                <div className={`burger2 ${isActive ? "burgerActive2" : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
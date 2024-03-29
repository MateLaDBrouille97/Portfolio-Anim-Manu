"use client";

// import styles from './style.module.scss';
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import React from "react";
import Link from "next/link";

export default function Contact({ user }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div style={{ y }} ref={container} className="contact">
      <div className="body">
        <div className="title">
          <span>
            <div className="imageContainer2">
              {user && <Image fill={true} alt={"image"} src={user?.image} />}
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className="buttonContainer">
            <Link href="/contact" legacyBehavior>
              <Rounded backgroundColor={"#334BD3"} className="button4">
                <p>Get in touch</p>
              </Rounded>
            </Link>
          </motion.div>
          {/* <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg> */}
        </div>
        <div className="nav">
          <Rounded>
            <p>{user?.email}</p>
          </Rounded>
          <Rounded>
            <p>+1 514 ### ##92</p>
          </Rounded>
        </div>
        <div className="info">
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3></h3>
              <p>## ### ### ###</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              {/* <Magnetic>
                                <p>Awwwards</p>
                            </Magnetic> */}
            </span>
            <Link href="https://www.instagram.com/oto.mata33/" legacyBehavior>
              <Magnetic>
                <p>Instagram</p>
              </Magnetic>
            </Link>
            {/* <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic> */}
            <Link
              href="https://www.linkedin.com/in/manuel-thomas-labridy-70220a3a"
              
            >
              <Magnetic>
                <p>Linkedin</p>
              </Magnetic>{" "}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

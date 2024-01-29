// import styles from './style.module.scss';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import React from "react";
import Link from "next/link";

export default function Description({ user }) {
  const phrase =
    "ELEVATE BRANDS IN THE DIGITAL AGE, LET'S REDEFINE THE NORM WITH A DASH OF WIT AND INNOVATION!";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="description">
      <div className="body">
        <p>
          {phrase
            .split(" ")
            .slice(0, 6)
            .map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="about__mask"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          {phrase
            .split(" ")
            .slice(6)
            .map((word, index) => {
              return (
                <span key={index} className="mask2">
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="about__mask"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
        </p>
        
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className="description__title2">
            {user?.descriptionLong}
          </motion.p>
        

        <div data-scroll data-scroll-speed={0.1}>
        <Link href="/about">
          <Rounded className="button3">
              <p>About me</p>
          </Rounded>
          </Link>
        </div>
      </div>
    </div>
  );
}

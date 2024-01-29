// import styles from './style.module.scss';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import React from "react";
import Link from "next/link";

export default function Citation2() {
  const phrase =
    "ELEVATE BRANDS IN THE DIGITAL AGE, LET'S REDEFINE THE NORM WITH A DASH OF WIT AND INNOVATION!";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="description3">
      <div className="body3">
        <p>
          {phrase.split(" ").slice(0,6).map((word, index) => {
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
          {phrase.split(" ").slice(6).map((word, index) => {
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
        
      </div>
    </div>
  );
}

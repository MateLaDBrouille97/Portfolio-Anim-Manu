// import styles from './style.module.scss';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import React from "react";
import Link from "next/link";

export default function Citation3() {
  const phrase =
    "I PRIORITIZE UNDERSTANDING USER GOALS, TASKS, EXPECTATIONS, AND PRODUCT-RELATED ISSUES TO ENHANCE DIGITAL PROJECT DEVELOPMENT.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="description4">
      <div className="body4">
        <p>
          
          {phrase.split(" ").map((word, index) => {
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

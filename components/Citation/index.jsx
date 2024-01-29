"use client";

import React,{ useState } from "react";
import Link from "next/link";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Image from "next/image";

export default function CitationPage() {
  const phrase =
    "WITH A DIVERSE BACKGROUND, I AIM TO MERGE MY EXPERTISE IN BIOLOGY, WEB DEVELOPMENT, AND DATA ANALYSIS TO CRAFT PRACTICAL AND VALUABLE TOOLS.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className="about4">
      <div className="body2">
        <p>
          {phrase
            .split(" ")
            .slice(0, 11)
            .map((word, index) => {
              return (
                <span key={index} className="mask6">
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
            .slice(11)
            .map((word, index) => {
              return (
                <span key={index} className="mask3">
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

"use client";

import React,{ useState } from "react";
import Link from "next/link";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Image from "next/image";

export default function About({ user1 }) {
  const phrase =
    "THOUGH NOT INITIALLY DRAWN TO LABORATORY WORK, I DISCOVERED A PASSION FOR WORKING WITH DATA AND ALGORITHMS.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    
    <div ref={description} className="about3">
      <div className="body">
        
        <p>
          {phrase
            .split(" ")
            .slice(0, 7)
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
            .slice(7)
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
        <div className="about__container">
          <motion.p
            variants={opacity}
            animate={isInView ? "open" : "closed"}
            className="about__textLong"
          >
            I was born and raised on an island in French West Indies called
            Martinique. Upon entering college in 2008, I found myself uncertain
            about my future path. Initially contemplating a career in either
            Architecture or Medicine, I ultimately chose Biology. Though not
            initially drawn to laboratory work, I discovered a passion for
            working with data and algorithms. Before transitioning into the
            realms of web development and data architecture, I pursued a career
            as a biologist and continue to serve as a data analyst.I started my
            web developer journey by learn C/C++ and JAVA then ReactJs. In my
            role as a junior web developer, I found joy in the creative aspects
            of the work, as well as the repetitive nature of handling data.
            Since then, I have applied my skills as a web developer and data
            analyst, collaborating with various companies and clients on both
            full-time and contract assignments, working on platforms like #####
            and c#########d. With a diverse background, I aim to merge my
            expertise in biology, web development, and data analysis to craft
            practical and valuable tools.
          </motion.p>
          <div className="about__image">
             <Image src={user1?.image} width={400} height={400} alt="background"  />
          </div>
        </div>
      </div>
    </div>
  );
}

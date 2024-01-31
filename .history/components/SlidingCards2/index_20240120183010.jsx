"use client";

import React, { useRef } from "react";

import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSkillsContext } from "@/contexts/SkillContext";
import SectionHeading from "../section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function SlidingCards2({data,title}) {
  const { ref } = useSectionInView("Skills");
  
  return (
    <>
      <MainStyled>
      
       
          <section
            id="skills"
            ref={ref}
            className="scroll-mt-28 mb-10  bg-white "

          >
           <SectionHeading>{title}</SectionHeading> 
            
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mx-[20%] slidingCard_container ">
              {data?.map((skill, index) => (
                <motion.li
                  className="bg-white/60 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 slidingCard_text"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </section>
      

        {/* <SectionLayout>
            <HorizontalWrapper height="40rem" direction={1400}>
              <div className="cards" style={{ right: 0 }}>
                {skillsFE.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      title={card.name}
                      // description={card.description}
                      // image={card.image}
                    />
                  );
                })}
              </div>
            </HorizontalWrapper>
          </SectionLayout> */}

        {/* <SectionLayout>
            <HorizontalWrapper height="40rem" direction={-1400}>
              <div className="cards" style={{ right: 0 }}>
                {skillsDB.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      title={card.name}
                      // description={card.description}
                      // image={card.image}
                    />
                  );
                })}
              </div>
            </HorizontalWrapper>
          </SectionLayout> */}
      </MainStyled>
    </>
  );
}


const sizes = {
  mobileS: "320px",
  mobileM: "380px",
  mobileL: "450px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const MainStyled = styled.main`
  
  min-height:80vh;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
 
  @media ${devices.desktop} {
   
    max-width:2560px;
    width:100%;
   
  }

  @media ${devices.laptopL} {
    
    max-width:1440px;
    width:100%;
    margin-top:0px;
   
  }

  @media ${devices.laptop} {
  
    max-width:1040px;
    width:100%;
    margin-top:10px;
  
  }

  @media ${devices.tablet} {
    
    max-width:768px;
    width:100%;
    margin-top:20px;
  }

  @media ${devices.mobileL} {
   
    max-width:450px;
    width:100%;
    margin-top:20px;

  }

  @media ${devices.mobileM} {
   
    max-width:375px;
    width:100%;
    margin-top:-20px;
   
  }

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;

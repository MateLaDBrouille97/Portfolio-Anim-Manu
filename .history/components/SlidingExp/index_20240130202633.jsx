"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import SectionHeading from "@/components/section-heading";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Landmark,GraduationCap } from "lucide-react";
import { useQualiContext } from "@/contexts/QualificationContext";
// import { useTheme } from "@/context/theme-context";

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

export default function SlidingExp({qual}) {
  const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();
  // const { edu, exp, qual, qual2 } = useQualiContext();
 const qual2= qual.sort((a, b) => new Date(b.calendarBegin) - new Date(a.calendarBegin));


  return (
    <>
      <MainStyled>
        <section
          id="experience"
          ref={ref}
          className="scroll-mt-28 mb-28 sm:mb-40 bg-white slidingExp_container"
        >
          <SectionHeading>My experience</SectionHeading>
         {qual2&& <VerticalTimeline visible={true}  >
            {
              qual2?.map((item, index) => (
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                    visible
                    className="md:w-[680px] lg:w-[850px]"
                    contentStyle={{
                      background:" rgba(250, 250, 250, 1)", 
                      color: '#000000',
                      boxShadow: "none",
                      border: "1px solid  rgba(250, 250, 250, 1)",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgba(33, 150, 243,1)' 
                    }}
                    date={new Date(item.calendarBegin).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    icon={item.type=="EXPERIENCE"?<Landmark />:<GraduationCap/>}
                    iconStyle={{
                      background:
                      '#fff9', color: item.type=="EXPERIENCE"?'rgba(214, 2, 30, 1)':"rgba(2, 133, 214, 1)"
                        ,
                      fontSize: "1.5rem",
                    }}
                  >
                    <h3 className="font-semibold capitalize">{item.name}</h3>
                    {/* <p className="font-normal !mt-0">{item.type}</p> */}
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                      {item.institute}
                    </p>
                  </VerticalTimelineElement>
                </React.Fragment>
              ))}
          </VerticalTimeline>}
        </section>
      </MainStyled>
    </>
  );
}

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
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

  min-height: 100vh;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  

  @media ${devices.desktop} {
    
    margin-bottom: 25rem;
    max-width:2560px;
    width:100%;
   
  }

  @media ${devices.laptopL} {
    
    margin-bottom: 25rem;
    max-width:1440px;
    width:100%;
   
  }

  @media ${devices.laptop} {
   
    margin-bottom: 25rem;
   
    max-width:1040px;
    width:100%;
    
  
  }

  @media ${devices.tablet} {
   
    margin-bottom: 30rem;
    max-width:768px;
    width:100%;
  }

  @media ${devices.mobileL} {
    
    margin-bottom: 30rem;
    max-width:450px;
    width:100%;
  }

 


  }
`;

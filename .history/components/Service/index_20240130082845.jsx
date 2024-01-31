// import styles from './style.module.scss';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import Rounded from "../../common/RoundedButton";
import React from "react";
import Link from "next/link";
import { useServiceContext } from "@/contexts/ServiceContext";
import {services } from "../../lib/data"

export default function Service() {
  // const { services } = useServiceContext();

  return (
    <div className="container10">
      <div className="row1">
        <div className="flex-col">
          <h2>
            I can help you with <span className="animate-dot">.</span>
            <span className="animate-dot">.</span>
            <span className="animate-dot">.</span>
          </h2>
        </div>
      </div>
     { services &&<div className="row2">
       
        {services.map((service, index) => {
          return (
          <div className="flex-col2" key={index}>
              <h5>{index + 1}</h5>
              <div className="stripe"></div>
              <h4>{service.firstName}</h4>
              <p>{service.description}</p>
            </div>
            );
          
        })}
      </div>}
    </div>
  );
}

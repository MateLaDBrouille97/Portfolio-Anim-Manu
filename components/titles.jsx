// import styles from './style.module.scss';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Rounded from "../common/RoundedButton";
import React from "react";
import Link from "next/link";

export default function Title({title}) {
  
  return (
    <div >
      <div className="titles__top" >{title}</div>
    </div>
  );
}

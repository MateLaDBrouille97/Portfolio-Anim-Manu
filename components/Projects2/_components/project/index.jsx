"use client";
import React from "react";
import Link from "next/link";
// import styles from './style.module.css';

export default function Project2({ index,id, title, type, setModal }) {
  return (
    <Link href={`/work/${id}`}>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="project5"
      >
        <h3>{title}</h3>
        <p>{type}</p>
      </div>
    </Link>
  );
}

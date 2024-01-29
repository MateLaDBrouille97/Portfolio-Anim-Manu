"use client";
import Link from "next/link";
import React from "react";
// import styles from './style.module.css';

export default function index({ index,id, title, type, setModal }) {
  return (
    <Link href={`/work/${id}`}>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="project4"
      >
        <h2>{title}</h2>
        <p>{type}</p>
      </div>
    </Link>
  );
}

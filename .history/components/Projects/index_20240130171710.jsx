"use client";
// import styles from './page.module.css'
import React,{ useState,useEffect } from "react";
import Project from "../../components/Projects/_components/project";
import ModalProject from "../../components/Projects/_components/modal";
import { usePortfolioContext } from "@/contexts/PortfolioContext";
import Link from "next/link";
import Rounded from "../../common/RoundedButton";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function Projects({portfolio}) {
  const { data } = usePortfolioContext();
  const [dataSort, setDataSort] = useState([]);

  useEffect(() => {
    const data1 = data.sort((a, b) => {
      if (b.createdAt > a.createdAt) return 1;
      if (b.createdAt < a.createdAt) return -1;
      return 0;
    });

    setDataSort(data1);
  }, [data]);

  const [modal, setModal] = useState({ active: false });

  return (
    <main className="main7">
       <p className="latest-works4">Latest Works</p>
      <div className="body7">
       
        {portfolio.slice(0, 4).map((project, index) => {
          return (
            <Project
            id={project.id}
              index={index}
              title={project.title}
              type={project.type}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <ModalProject modal={modal} projects={portfolio} />  
    </main>
  );
}

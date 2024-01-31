"use client";
// import styles from './page.module.css'
import React, { useState, useEffect } from "react";
import Project2 from "../../components/Projects2/_components/project";
import ModalProject from "../../components/Projects/_components/modal";
// import { usePortfolioContext } from "@/contexts/PortfolioContext";
import { projectNav } from "../../public/WorkData";
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

export default function Projects2({portfolio,AI,APP,WEB,DATA}) {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  // const { dbUser, image, cv } = useUserContext();
  const [active, setActive] = useState(0);
  // const { data, portfolioApp, portfolioWeb, portfolioAi, portfolioSci } =
  //   usePortfolioContext();
  const [dataSort, setDataSort] = useState([]);

  const [modal, setModal] = useState({ active: false });

  // useEffect(() => {
  //   const data1 = data.sort((a, b) => {
  //     if (b.createdAt > a.createdAt) return 1;
  //     if (b.createdAt < a.createdAt) return -1;
  //     return 0;
  //   });

  //   setDataSort(data1);
  // }, [data]);

  useEffect(() => {
    if (item?.name === "all") {

      setProjects(portfolio);
    } else if (item?.name == "data_analysis") {
      
      setProjects(DATA);
    } else if (item.name == "ai") {
      setProjects(AI);
    } else if (item?.name == "web") {
      setProjects(WEB);
    } else if (item?.name == "app") {
      setProjects(APP);
    }
  }, [item,portfolio,AI,DATA,WEB,APP]);



  const handleClick = (category, index) => {
    setItem({ name: category.toLowerCase() });
    setActive(index);
  };

  return (
    <main className="main11">
      <div className="work__filters ">
        {projectNav.map((category, index) => (
          <span
            onClick={() => handleClick(category.name, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {category.name}
          </span>
        ))}
      </div>
      <div className="body11">
        {portfolio &&
          projects.slice(0, 9).map((project, index) => {
            return (
              <Project2
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

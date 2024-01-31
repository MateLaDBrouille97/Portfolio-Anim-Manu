"use client"


import React,{useEffect, useState} from "react";
import Contact from "@/components/Contact";
import WorkItem from "../_components/workItem"
import { useParams, useRouter } from "next/navigation";



const ProjectsPage = () => {


  const params=useParams();
  const [user,setUser]=useState<any>()
  const [portfolio,setPortfolio]=useState<any>()
  const [portfolio2,setPortfolio2]=useState<any>()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/author');
        const author = await response.json();
        setUser(author);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);


  useEffect(() => {
    const fetchPortf = async () => {
      try {
        const response = await fetch(`/api/author/portfolioId?workId=${params.workId}`);
        const portfolio = await response.json();
        setPortfolio(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortf();
  }, []);


  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const portfolio = await response.json();
        setPortfolio2(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolio();
  }, []);


  console.log("test1",portfolio)
  console.log("test2",portfolio2)



  return (
    <div>
       <WorkItem work={portfolio} portfolio2={portfolio2}/>
      <Contact user={user}/>
    </div>
  );
};

export default ProjectsPage;
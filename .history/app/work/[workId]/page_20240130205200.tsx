"use client"


import React,{useEffect, useState} from "react";
import Contact from "@/components/Contact";
import WorkItem from "../_components/workItem"
import { useParams, useRouter } from "next/navigation";



const ProjectsPage = () => {


  const params=useParams();
  const [user,setUser]=useState<any>()
  const [portfolio,setPortfolio]=useState<any>()

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
        const response = await fetch(`/api/author/porfolioId?workId=${params.workId}`);
        const portfolio = await response.json();
        setPortfolio(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortf();
  }, []);




  return (
    <div>
       <WorkItem portfolio={portfolio}/>
      <Contact user={user}/>
    </div>
  );
};

export default ProjectsPage;
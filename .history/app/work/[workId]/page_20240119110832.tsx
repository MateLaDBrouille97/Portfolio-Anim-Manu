"use client"


import React,{useEffect, useState} from "react";
import Contact from "@/components/Contact";
import WorkItem from "../_components/workItem"



const ProjectsPage = () => {

  const [user,setUser]=useState<any>()

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




  return (
    <div>
       <WorkItem/>
      <Contact user={user}/>
    </div>
  );
};

export default ProjectsPage;
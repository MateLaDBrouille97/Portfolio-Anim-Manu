"use client"


import React,{useEffect, useState} from "react";
import Projects2 from "../../components/Projects2";
import Contact from "@/components/Contact";
import Title from "../../components/titles";


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
       <Title title="LATEST PROJECTS"/>
      <Projects2/>
      <Contact user={user}/>
    </div>
  );
};

export default ProjectsPage;
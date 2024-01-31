"use client"


import React,{useEffect, useState} from "react";
import Projects2 from "../../components/Projects2";
import Contact from "@/components/Contact";
import Title from "../../components/titles";


const ProjectsPage = () => {

  const [user,setUser]=useState<any>()
  const [portfolio,setPortfolio]=useState<any>([])
  const [portfolioAI,setPortfolioAI]=useState<any>([])
  const [portfolioAPP,setPortfolioAPP]=useState<any>([])
  const [portfolioWEB,setPortfolioWEB]=useState<any>([])
  const [portfolioDATA,setPortfolioDATA]=useState<any>([])


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
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const portfolio = await response.json();
        setPortfolio(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolio();
  }, []);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio/getAI');
        const portfolio = await response.json();
        setPortfolioAI(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
       <Title title="LATEST PROJECTS"/>
      <Projects2 portfolio={portfolio} AI={portfolioAI}/>
      <Contact user={user}/>
    </div>
  );
};

export default ProjectsPage;
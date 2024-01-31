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
    const fetchAiPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio/specific/Ai');
        const portfolio = await response.json();
        setPortfolioAI(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAiPortfolio();

  }, []);

  useEffect(() => {
    const fetchWebPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio/specific/WEB');
        const portfolio = await response.json();
        setPortfolioWEB(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWebPortfolio();

  }, []);

  useEffect(() => {
    const fetchAPPPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio/specific/APP');
        const portfolio = await response.json();
        setPortfolioAPP(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAPPPortfolio();

  }, []);

  useEffect(() => {
    const fetchDATAPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio/specific/DATA');
        const portfolio = await response.json();
        setPortfolioAPP(portfolio);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDATAPortfolio();

  }, []);

  
  return (
    <div>
       <Title title="LATEST PROJECTS"/>
      <Projects2 portfolio={portfolio} AI={portfolioAI} WEB={portfolioWEB} APP={portfolioAPP} DATA={portfolioDATA}/>
      <Contact user={user}/>
    </div>
  );
};

export default ProjectsPage;
"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { PortfolioPost } from "../src/models";
// import { useUserContext } from "./UserContext";
import React from 'react';
import { listPortfolioPosts} from "../src/graphql/queries"
import { API, graphqlOperation } from 'aws-amplify';

const PortfolioContext = createContext({});

const PortfolioContextProvider = ({ children }) => {

    const{dbUser}=useUserContext();
    const userId="b342b8ab-ca2f-46d1-aa45-8e87cd49ed04"
    const[portfolioApp,setPortfolioApp]=useState([]);
    const[portfolioWeb,setPortfolioWeb]=useState([]);
    const[portfolioSci,setPortfolioSci]=useState([]);
    const[portfolioAi,setPortfolioAi]=useState([]);
    const [data,setData]= useState([]);

    useEffect(()=>{
        const fetchPort= async () => {

          const port = await DataStore.query(PortfolioPost,u=>u.userID.eq("b342b8ab-ca2f-46d1-aa45-8e87cd49ed04"))
          setData(port);
          
          // const portfolio = await API.graphql({ query: listPortfolioPosts });
          // setData(portfolio?.data?.listPortfolioPosts?.items);
          // DataStore.query(PortfolioPost,p=>p.userID.eq(dbUser?.id)).then(ports=>setData(ports));
          const folio1 =data?.filter(d=>d.type=="APP");setPortfolioApp(folio1);
          const folio2 =data?.filter(d=>d.type=="WEB");setPortfolioWeb(folio2);
          const folio3 =data?.filter(d=>d.type=="DATA_ANALYSIS");setPortfolioSci(folio3);
          const folio4 =data?.filter(d=>d.type=="AI");setPortfolioAi(folio4);
          // DataStore.query(PortfolioPost,p=>p.type.eq("APP")).then(port=>setPortfolioApp(port));
          // DataStore.query(PortfolioPost,p=>p.type.eq("WEB")).then(port=>setPortfolioWeb(port));
          // DataStore.query(PortfolioPost,p=>p.type.eq("SCIENCE")).then(port=>setPortfolioSci(port));
          
        }
        fetchPort();
    },[data, dbUser])

console.log(data);

 return (
    <PortfolioContext.Provider 
       value={{
        portfolioApp,
        portfolioWeb,
        setPortfolioApp,
        setPortfolioWeb,
        portfolioSci,
        setPortfolioSci,
        data,
        setData,
        portfolioAi,
        setPortfolioAi,
         }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;

export const usePortfolioContext = () => useContext(PortfolioContext);
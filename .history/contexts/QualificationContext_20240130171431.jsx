
"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Qualification } from "../src/models";
// import { useUserContext } from "./UserContext";
import React from 'react';
import { listQualifications} from "../src/graphql/queries"
import { API, graphqlOperation } from 'aws-amplify';
import { generateClient } from "@aws-amplify/api";

const client = generateClient()

const QualiContext = createContext({});
const userId="c2a3d3c4-78ac-41ee-bd4f-c38c48fb6d68"
const QualiContextProvider = ({ children }) => {

    // const{dbUser}=useUserContext();
    const [edu,setEdu]=useState([]);
    const [exp,setExp]=useState([]);
    const [qual,setQual]=useState([]);
    const [qual2,setQual2]=useState([]);
  

    useEffect(()=>{
        const fetchQual= async ()=>{
          // const qualifs = await API.graphql({ query: listQualifications });

          // setQual(qualifs?.data?.listQualifications?.items);

          
          const qua = await DataStore.query(Qualification,q=>q.userID.eq(userId));
          setQual(qua);

          const sortedQual = qual.sort((a, b) => new Date(b.calendarBegin)-new Date(a.calendarBegin));
          setQual2(sortedQual)
          const quals1=qual.filter(q=>q.type=="EDUCATION");
          const sortedEdu = quals1.sort((a, b) => new Date(b.calendarBegin)-new Date(a.calendarBegin));
          setEdu(sortedEdu);

          const quals2=qual.filter(q=>q.type=="EXPERIENCE");
          const sortedExp = quals2.sort((a, b) =>new Date(b.calendarBegin)-new Date(a.calendarBegin));
          setExp(sortedExp);
          // await DataStore.query(Qualification,q=>q.type.eq("EDUCATION")).then(quals=>setEdu(quals));
          // await DataStore.query(Qualification,q=>q.type.eq("EXPERIENCE")).then(quals=>setExp(quals)); 
        }
        fetchQual();
    },[qual,dbUser])

   

 return (
    <QualiContext.Provider value={{ edu,exp,setEdu,setExp,qual,setQual,qual2 }}>
      {children}
    </QualiContext.Provider>
  );
};

export default QualiContextProvider;

export const useQualiContext = () => useContext(QualiContext);
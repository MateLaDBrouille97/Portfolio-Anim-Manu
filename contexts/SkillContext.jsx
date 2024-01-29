"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { Skill} from "../src/models";
import { useUserContext } from "./UserContext";
import React from 'react';
import { listSkills} from "../src/graphql/queries"
import { API, graphqlOperation,DataStore} from 'aws-amplify';
import { generateClient } from "@aws-amplify/api";

const client = generateClient()

const SkillsContext = createContext({});
const userId="c2a3d3c4-78ac-41ee-bd4f-c38c48fb6d68"

const SkillsContextProvider = ({ children }) => {

 const {dbUser}=useUserContext();
 const[skillsBE,setSkillsBE]=useState([]);
 const[skillsFE,setSkillsFE]=useState([]);
 const[skillsDB,setSkillsDB]=useState([]);
 const [data,setData]=useState([]);


 useEffect(()=>{
  const fetchSkill = async()=>{
    const skills = await API.graphql({ query: listSkills });
    // console.log("test",skills)

    // List all items
// const allSkills = await client.graphql({
//   query: listSkills
// });


    // await DataStore.query(Skill,u=>u.userID.eq(userId)).then(ports=>setData(ports));
    setData(skills?.data?.listSkills?.items)
    // await DataStore.query(Skill,u=>u.userID.eq(userId)).then(ports=>setData(ports));
    const skills1 =data?.filter(d=>d.type=="BACKEND");setSkillsBE(skills1);
    const skills2 =data?.filter(d=>d.type=="FRONTEND");setSkillsFE(skills2);
    const skills3 =data?.filter(d=>d.type=="DATABASE");setSkillsDB(skills3);
    // await DataStore.query(Skill,(skill)=>skill.type.eq("BACKEND")).then(skills=>setSkillsBE(skills));
    // await DataStore.query(Skill,(skill)=>skill.type.eq("FRONTEND")).then(skills=>setSkillsFE(skills));
    // await DataStore.query(Skill,(skill)=>skill.type.eq("DATABASE")).then(skills=>setSkillsDB(skills));
  }
  fetchSkill();
 },[data, dbUser])



 
 return (
    <SkillsContext.Provider value={{ data,skillsBE,skillsFE,skillsDB }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;

export const useSkillsContext = () => useContext(SkillsContext);
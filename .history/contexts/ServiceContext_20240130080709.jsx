"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Service } from "../src/models";
import { useUserContext } from "./UserContext";
import React from 'react';
import { listServices} from "../src/graphql/queries"
import { API, graphqlOperation } from 'aws-amplify';

const ServiceContext = createContext({});

const ServiceContextProvider = ({ children }) => {

    const {dbUser}=useUserContext();
    const [services,setServices]= useState([]);

    useEffect(()=>{
        const fetchService = async ()=>{
        //  const services= await DataStore.query(BlogPost,u=>u.userID.eq(userId)).then(ports=>setData(ports));
          // const services = await API.graphql({ query: listServices });
          // setServices(services?.data?.listServices?.items)
          const services=await DataStore.query(Service,(s)=>s.userID.eq(dbUser?.id)).then(services=>setServices(services));
          setServices(services);
        }
        fetchService();
    },[dbUser]);

    console.log(services)


    return (
        <ServiceContext.Provider value={{services,setServices }}>
          {children}
        </ServiceContext.Provider>
      );
}

export default ServiceContextProvider;

export const useServiceContext = () => useContext(ServiceContext);

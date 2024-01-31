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
          const services = await API.graphql({ query: listServices });
          setServices(services?.data?.listServices?.items)
          // await DataStore.query(Service,(s)=>s.userID.eq(dbUser?.id)).then(services=>setServices(services))    
        }
        fetchService();
    },[dbUser]);


    return (
        <ServiceContext.Provider value={{services,setServices }}>
          {children}
        </ServiceContext.Provider>
      );
}

export default ServiceContextProvider;

export const useServiceContext = () => useContext(ServiceContext);

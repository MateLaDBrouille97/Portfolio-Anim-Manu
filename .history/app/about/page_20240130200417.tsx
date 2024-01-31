"use client";


import SlidingCards from "@/components/SlidingCards";
import SlidingExp from "@/components/SlidingExp";
import React, { useEffect, useState } from "react";
import About from "../../components/About";
import Contact from "@/components/Contact";
import Citation from "../../components/Citation"



const ContactPage = () => {

  const [user, setUser] = useState<any>();
  const [qual, setQual] = useState<any>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/author");
        const author = await response.json();
        setUser(author);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchQual = async () => {
      try {
        const response = await fetch("/api/qualification");
        const qualification = await response.json();
        setUser(qualification);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQual();
  }, []);



  return (
    <div>
      <About user1={user}/>
      <SlidingCards />
      <Citation/>
      <SlidingExp qual={qual}/>
      <Contact user={user} />
    </div>
  );
};

export default ContactPage;

"use client";


import SlidingCards from "@/components/SlidingCards";
import SlidingExp from "@/components/SlidingExp";
import React, { useEffect, useState } from "react";
import AboutPage from "../../components/About";
import Contact from "@/components/Contact";
import Citation2 from "../../components/Citation2"
import Citation3 from "../../components/Citation3"
import Service from "../../components/Service"


const ServicePage = () => {

  const [user, setUser] = useState<any>();

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


  return (
    <div className="main justify-center items-center px-[2vw]">
      <Citation2 />
      <Service/>
      <Citation3/>
      <Contact user={user} />
    </div>
  );
};

export default ServicePage;

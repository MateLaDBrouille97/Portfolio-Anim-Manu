"use client";

import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import menuItems from "@/utils/menuItems";
import Link from "next/link";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navVariants } from "@/utils/animation";
import { useGlobalContext } from "@/utils/globalContext";
import Header from "../../components/Header";
// import { getAuthor } from "@/actions/getAuthor";

function Navigation() {
  const [activeMenu, setActiveMenu] = React.useState(0);

  const context = useGlobalContext();
  const { handleToggle } = context;
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

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    
      <motion.nav
        className="navigation"
        variants={navVariants}
        // initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <ul className="nav-items ">
          {user && (
            <Image
              src={user.image}
              alt="logo"
              width={45}
              height={45}
              style={{
                objectFit: "contain",
                backgroundColor: "#f2f6ff",
                borderRadius: "50%",
                padding: ".3rem",
              }}
            />
          )}

          {menuItems.map((item, index: number) => {
            return (
              <li
                key={item.id}
                className={`nav-items__item ${
                  activeMenu === index && "active-menu"
                }`}
                onClick={() => {
                  setActiveMenu(index);
                }}
              >
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Header />
        {/* <Button
        text="Contact"
        bg="#A855F7"
        modifier="white"
        borderRadius="60px"
        padding="1.2rem 2rem"
        hover="true"
        onClick={handleToggle}
      /> */}
      </motion.nav>
    
  );
}

export default Navigation;

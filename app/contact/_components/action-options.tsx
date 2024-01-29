"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="
    flex
    items-center
    md:justify-end
    md:space-x-6
    sm:px-10
    
    "
    >
      <div className="flex xl:space-x-6">

        <Link href="/pricing" className=" xl:flex items-center hidden">
          <div className="font-light sm:text-base md:text-lg flex">Pricing</div>
        </Link>

        <Link href="/sign-up" className=" xl:flex items-center hidden text-md ">
          <div className="font-light flex  sm:text-base md:text-lg ">
            Sign In
          </div>
        </Link>
      </div>

      <div className="flex lg:space-x-4 items-center">
        <Link href="/sign-up">
          <Button className="hidden md:flex text-md font-light rounded-[40px] border-4 border-indigo-300/90 py-6 bg-[#567cdd] hover:scale-110 hover:bg-white-500 transition-all duration-300 shadow-md hover:shadow-indigo-300">
            Get Lloyd for Free
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button className="hidden text-[#5681dd] text-md font-light bg-[#eff0ff] p-6  rounded-[40px] hover:scale-110 hover:bg-white-500 transition-all duration-300 shadow-md md:hidden lg:flex hover:shadow-indigo-300 ">
            Contact Sales
          </Button>
        </Link>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
             bg-[#5688dd]
             p-3
             rounded-full
             xl:hidden
             "
        >
          <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="bg-[#eff0ff] p-3 rounded-full xl:hidden"
        >
          <AlignJustify className="h-6 w-6 text-[#5688dd] items-center justify-center rounded-full" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;

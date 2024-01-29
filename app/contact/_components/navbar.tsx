import Link from "next/link";
// import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import ActionButtons from "./action-options";

export const Navbar = () => {
  return (
    <div
      className=" flex  justify-center pr-10 md:px-20 sticky top-0 left-0 z-50 bg-white h-20"
    >
      <div className="md:max-w-screen-1xl mx-auto flex items-center xs:w-[600px] md:w-[1200px] justify-between  navbar_config">
        {/* <Logo /> */}
        <div
          className=" flex items-center md:justify-end md:space-x-6 sm:px-10 "
        >
          <ActionButtons/>
        </div>
      </div>
    </div>
  );
};

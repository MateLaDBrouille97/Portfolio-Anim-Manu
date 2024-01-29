import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden">
      <div className="flex flex-col xl:space-y-10 items-center">
        <Link href="/pricing" className=" xl:flex items-center ">
          <div className="font-bold sm:text-lg md:text-lg flex my-4">Pricing</div>
        </Link>

        <Link href="/sign-up" className=" xl:flex items-center text-md ">
          <div className="font-bold flex  sm:text-lg md:text-lg my-4">
            Sign In
          </div>
        </Link>
      </div>

      <div className="flex flex-col lg:space-x-4 items-center">
        <Link href="/sign-up">
          <Button className="  md:flex text-md font-light  rounded-[40px] border-4 border-indigo-300/90 py-6 bg-[#567cdd] hover:scale-110 hover:bg-white-500 transition-all duration-300 shadow-md hover:shadow-indigo-300 my-4">
            Get Lloyd for Free
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button className=" text-[#5681dd] text-md font-light bg-[#eff0ff] p-6  rounded-[40px] hover:scale-110 hover:bg-white-500 transition-all duration-300 shadow-md lg:flex hover:shadow-indigo-300 my-4">
            Contact Sales
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;

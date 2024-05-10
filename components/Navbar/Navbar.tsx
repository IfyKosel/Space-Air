import React from "react";
import Image from "next/image";
import Search from "@/components/Navbar/assets/search.svg";
import Bell from "@/components/Navbar/assets/notification.svg";
import Admin from "@/components/Navbar/assets/adminImage.svg";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-[3.8rem] bg-white flex items-center sticky z-[1000]">
      <div className="flex justify-between items-center w-full px-10">
        <div className="flex gap-4 bg-[#F5F6FA] border border-[#D5D5D5] px-6 py-2 ml-3 rounded-3xl">
          <Image src={Search} alt="Search" className="w-auto" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-0 text-[#202224] text-sm"
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex justify-center items-center">
            <Image src={Bell} alt="Bell" className="w-auto" />
          </div>
          <div className="flex gap-4">
            <Image src={Admin} alt="Admin" className="w-auto" />
            <div className="flex flex-col justify-evenly">
              <h3 className="text-[#404040] text-sm font-bold capitalize">
                moni roy
              </h3>
              <p className="text-[#565656] text-xs font-semibold">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

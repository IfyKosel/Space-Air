"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Airpocket.svg";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { SidebarItemProps } from "@/types/types";

type Props = {};

const Sidebar = (props: Props) => {
  const sideBarItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Bookings",
      href: "/bookings",
    },
    {
      title: "User",
      href: "/user",
    },
    {
      title: "MySite",
      href: "/mySite",
    },
    {
      title: "Roles & Permission",
      href: "/roles&permission",
    },
  ];

  return (
    <div className="flex flex-col bg-white h-screen w-[15rem] sticky gap-2 top-0">
      <div className="flex justify-center items-center h-[3.8rem] mb-3">
        <Image src={logo} alt="logo" className="w-auto" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center gap-1 border-b borer-[#E0E0E0] pb-5">
          {sideBarItems.map((item, index) => {
            return <SidebarItem key={index} item={item} />;
          })}
        </div>
        <div className="flex flex-col items-center border-t border-[#E0E0E0] h-[17vh]">
          <button className="flex items-center cursor-pointer py-[10px] px-[22px] w-44 rounded-[6px] bg-transparent text-[#202224]">
            <span className="text-sm font-semibold">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ item }: { item: SidebarItemProps }) => {
  const pathName = usePathname();
  const isActive = pathName === item.href;

  return (
    <Link href={item.href}>
      <button
        className={classNames(
          "flex",
          "items-center",
          "cursor-pointer",
          "py-[10px]",
          "px-[22px]",
          "w-44",
          "rounded-[6px]",
          {
            "bg-[#4880FF] text-white": isActive,
            "bg-transparent text-[#202224] hover:bg-[#4880FF]": !isActive,
          }
        )}
      >
        <span className="text-sm font-semibold">{item.title}</span>
      </button>
    </Link>
  );
};

export default Sidebar;

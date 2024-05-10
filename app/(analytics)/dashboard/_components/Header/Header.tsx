import Image from "next/image";
import React from "react";
import Profit from "@/app/(analytics)/dashboard/assets/Profit.svg";
import Loss from "@/app/(analytics)/dashboard/assets/Loss.svg";
import { HeaderStatProps } from "@/types/types";

type Props = {};

const Header = (props: Props) => {
  const headerStat: HeaderStatProps[] = [
    {
      title: "flight worth",
      amount: "N23,689,908",
      icon: Profit,
      percent: "8.5%",
    },
    {
      title: "all travels",
      amount: "689",
      icon: Loss,
      percent: "8.5%",
    },
    {
      title: "bookings",
      amount: "689",
      icon: Profit,
      percent: "8.5%",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5">
      {headerStat.map((detail, index) => {
        return (
          <div key={index} className="w-fit text-[#202224] font-nunito">
            <div className="bg-white px-3 py-2 min-w-[10rem] max-h-[88px] rounded-[6px] flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <p className="capitalize">{detail.title}</p>
                <p className="text-xs font-semibold">Year</p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <h1 className="font-bold text-[28px] leading-7">
                  {detail.amount}
                </h1>
                <div className="flex items-center bg-[#00B69B0D] px-2 py-1 gap-1 rounded-[4px]">
                  <Image src={detail.icon} alt="Profit" className="w-auto" />
                  <span className="text-[10px] font-semibold">
                    {detail.percent}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;

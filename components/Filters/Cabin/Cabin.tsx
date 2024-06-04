"use client";
import React, { useState } from "react";
import { CabinOptionProps } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Dropdown from "@/components/Filters/assets/Dropdown.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const Cabin = (props: Props) => {
  const [selectedCabin, setSelectedCabin] = useState<string[]>([]);

  const cabinOptions: CabinOptionProps[] = [
    {
      key: "economy",
      text: "Economy",
    },
    {
      key: "premiumEconomy",
      text: "Premium Economy",
    },
    {
      key: "businessClass",
      text: "Business Class",
    },
    {
      key: "firstClass",
      text: "First Class",
    },
  ];

  const handleClick = (key: string) => {
    setSelectedCabin((prevSelected) => {
      if (prevSelected.includes(key)) {
        return prevSelected.filter((selectedId) => selectedId !== key);
      } else {
        return [...prevSelected, key];
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-fit sm:w-[120px] flex gap-1 sm:gap-2 font-semibold border-none text-xs sm:text-sm"
        >
          <span>Cabin</span>
          <Image
            src={Dropdown}
            alt="Dropdown"
            width={24}
            height={24}
            className="w-4 sm:auto"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[16px] absolute -top-3 -left-10">
        <div className="text-[#202224] w-[31rem] font-nunito">
          <div className="px-5 pb-1.5">
            <h1 className="text-lg font-bold mt-2">Select Cabin</h1>
            <div className="flex flex-wrap gap-3 py-5">
              {cabinOptions.map((cabin, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleClick(cabin.key)}
                    type="submit"
                    className={`border-[0.6px] border-[#979797] rounded-[20px] w-[9rem] text-sm text-start px-2.5 py-1.5 font-semibold ${
                      selectedCabin.includes(cabin.key) &&
                      "text-white bg-[#4880FF]"
                    }`}
                  >
                    {cabin.text}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="border-t-[0.4px] border-[#979797] pt-3 px-5">
            <p className="text-xs text-[#434343]">
              *You can choose multiple Cabin
            </p>
            <div className="flex justify-center w-full py-4">
              <button
                type="button"
                className="text-white bg-[#4880FF] rounded-[6px] py-2 px-8 text-xs font-bold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cabin;

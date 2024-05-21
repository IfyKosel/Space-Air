import React from "react";
import { FlightOptionProps } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Dropdown from "@/components/Filters/assets/Dropdown.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const Flight = (props: Props) => {
  const flightOptions: FlightOptionProps[] = [
    {
      key: "local",
      text: "Local",
    },
    {
      key: "international",
      text: "International",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[120px] flex justify-between font-semibold border-none"
        >
          <span>Flight</span>
          <Image src={Dropdown} alt="Dropdown" width={24} height={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[16px] absolute -top-3 -left-10">
        <div className="text-[#202224] w-[11.7rem] font-nunito">
          <div className="px-5  pb-1.5">
            <h1 className="text-lg font-bold mt-2">Select Flight</h1>
            <div className="flex flex-wrap gap-3 py-5">
              {flightOptions.map((flight, index) => {
                return (
                  <button
                    key={index}
                    type="submit"
                    className="border-[0.6px] border-[#979797] rounded-[20px] w-[9rem] bg-transparent text-sm text-start px-3.5 py-1.5 font-semibold"
                  >
                    {flight.text}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="border-t-[0.4px] border-[#979797]">
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

export default Flight;

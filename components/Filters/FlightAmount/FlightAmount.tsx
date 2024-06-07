import React, { useEffect, useState } from "react";
import { FilterObject } from "@/types/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Dropdown from "@/components/Filters/assets/Dropdown.svg";

type Props = {};

const FlightAmount = () => {
  return (
    <div>
      <div className="flex items-center h-full ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-fit sm:w-[150px] flex gap-1 sm:gap-2 font-semibold border-none text-sm"
            >
              <span>Flight Amount</span>
              <Image
                src={Dropdown}
                alt="Dropdown"
                width={24}
                height={24}
                className="w-4 sm:w-auto"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-[8px] absolute -top-3 -left-10 font-light text-lg">
            <DropdownMenuItem>Lowest</DropdownMenuItem>
            <DropdownMenuItem>Highest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FlightAmount;

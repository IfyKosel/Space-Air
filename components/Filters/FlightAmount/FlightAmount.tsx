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

type Props = {
  filters: FilterObject | null;
  setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
};

const FlightAmount = () => {
  const [selectedOption, setSelectedOption] = useState("");
  //   useEffect(() => {
  //     const updatedFilters = { ...filters, role: selectedOption };
  //     setFilters(updatedFilters); // Update parent filter object
  //   }, [selectedOption]);

  return (
    <div>
      <div className="flex items-center h-full ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[150px] flex justify-between font-semibold border-none"
            >
              <span>Flight Amount</span>
              <Image src={Dropdown} alt="Dropdown" width={24} height={24} />
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

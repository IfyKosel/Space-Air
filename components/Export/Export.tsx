import React from "react";
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

const Export = (props: Props) => {
  return (
    <div>
      <div className="flex items-center h-full ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-fit flex gap-1 font-semibold border-[0.6px] border-[#D5D5D5] bg-[#F9F9FB] rounded-[6px] h-12 md:h-16 text-xs sm:text-sm"
            >
              <span>Export</span>
              <Image
                src={Dropdown}
                alt="Dropdown"
                width={24}
                height={24}
                className="w-4 sm:auto"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-[8px] absolute -top-3 -left-10">
            <DropdownMenuItem>Pdf</DropdownMenuItem>
            <DropdownMenuItem>Xls</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Export;

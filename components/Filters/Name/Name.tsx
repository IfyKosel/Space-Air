import React, { useEffect, useState } from "react";
import { FilterObject } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Dropdown from "@/components/Filters/assets/Dropdown.svg";

type Props = {};

const Name = () => {
  return (
    <div>
      <div className="flex items-center h-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[120px] flex justify-between font-semibold border-none"
            >
              <span>Name</span>
              <Image src={Dropdown} alt="Dropdown" width={24} height={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-[8px] absolute -top-3 -left-10">
            <DropdownMenuLabel>Choose name</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>John</DropdownMenuItem>
            <DropdownMenuItem>Jane</DropdownMenuItem>
            <DropdownMenuItem>Jude</DropdownMenuItem>
            <DropdownMenuItem>Joan</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Name;

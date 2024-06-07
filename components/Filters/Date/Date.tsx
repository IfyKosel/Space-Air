"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import Dropdown from "@/components/Filters/assets/Dropdown.svg";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

type Props = {};

const DatePicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild className="h-full">
          <Button
            variant={"outline"}
            className={cn(
              "w-fit gap-1 sm:gap-2 flex font-semibold border-none text-sm",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>Date</span>}
            <Image
              src={Dropdown}
              alt="Dropdown"
              width={24}
              height={24}
              className="w-4 sm:auto"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white rounded-[14px] absolute -top-3 -left-10">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
          <div className="w-full flex justify-center pb-3">
            <button
              type="button"
              className="bg-[#4880FF] text-white rounded-[6px] px-7 py-2 text-xs font-bold"
            >
              Apply Now
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;

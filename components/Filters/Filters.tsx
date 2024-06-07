import React from "react";
import DatePicker from "./Date/Date";
import Name from "./Name/Name";
import FlightAmount from "./FlightAmount/FlightAmount";
import Cabin from "./Cabin/Cabin";
import Payment from "./Payment/Payment";
import Flight from "./Flight/Flight";
import FilterIcon from "@/components/Filters/assets/Filter.svg";
import ResetIcon from "@/components/Filters/assets/Reset.svg";
import Image from "next/image";

type Props = {
  defaultFilters: {
    date?: string;
    name?: string;
    flightAmount?: string;
    cabin?: string;
    flight?: string;
    payment?: string;
  }[];
};
2;

const Filters = ({ defaultFilters }: Props) => {
  const stepToRender = (key: string | undefined) => {
    switch (key) {
      case "date":
        return <DatePicker />;
      case "flightAmount":
        return <FlightAmount />;
      case "name":
        return <Name />;
      case "cabin":
        return <Cabin />;
      case "flight":
        return <Flight />;
      case "payment":
        return <Payment />;

      default:
        break;
    }
  };
  return (
    <main>
      <div className="flex rounded-[6px] border-[0.6px] border-[#D5D5D5] w-fit items-center bg-[#F9F9FB]">
        <div className="px-2 h-12 md:h-16 flex justify-center items-center w-10 sm:w-auto">
          <Image
            src={FilterIcon}
            alt="filter"
            width={19}
            height={22}
            className="w-5 sm:w-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap ">
          {defaultFilters &&
            defaultFilters.map((filter, index) => {
              return (
                <div
                  key={index}
                  className="border-l-[0.6px] border-b-[0.6px] sm:border-b-0 border-[#D5D5D5]  h-12 md:h-16 flex items-center"
                >
                  {stepToRender(filter.name)}
                </div>
              );
            })}

          <button className="flex items-center h-12 md:h-16 border-l-[0.6px] border-t-0 sm:border-t-[0.6px] lg:border-t-0 border-[#D5D5D5] gap-1 font-semibold px-4 w-full lg:w-fit">
            <Image
              src={ResetIcon}
              alt="Reset"
              width={18}
              height={18}
              className="w-4 sm:auto"
            />
            <span className="text-[#EA0234] text-sm">Reset Filter</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Filters;

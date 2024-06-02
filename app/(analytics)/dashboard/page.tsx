"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Header from "./_components/Header/Header";
import { dashboardRow } from "@/Utils/constant";
import DataTable from "@/components/Table/DataTable";
import { dashboardCol } from "@/components/Table/columns";
import CabinChart from "@/components/Charts/CabinChart/CabinChart";
import FlightChart from "@/components/Charts/FlightChart/FlightChart";
import { OptionSelectProps, YearProps } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

const Dashboard = () => {
  const optionSelectOption: OptionSelectProps[] = [
    {
      key: "cabin",
      text: "Cabin",
    },
    {
      key: "flight",
      text: "Flight",
    },
  ];

  const year: YearProps[] = [
    {
      id: "1",
      title: "2017",
    },
    { id: "2", title: "2018" },
    { id: "3", title: "2019" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("cabin");
  const [currentTab, setCurrentTab] = useState<string>("cabin");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value.toLowerCase());
  };

  const chartToRender = useCallback(
    (key: string): React.JSX.Element | null => {
      switch (key) {
        case "cabin":
          return <CabinChart />;

        case "flight":
          return <FlightChart />;
        default:
          return null;
      }
    },
    [selectedOption]
  );

  return (
    <div className="p-5 border-[#E0E0E0] border-l-[1.2px] h-full font-nunito text-[#202224]">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[22px] sm:text-3xl">Dashboard</h1>
        <Header />
        <div className="bg-white p-5">
          <div className=" flex justify-between">
            <select
              className="border-[none] outline-none rounded text-[17px] sm:text-[21px] lg:text-[23.14px] font-bold w-[5.75rem] sm:w-28 lg:w-auto mb-1"
              onChange={handleSelectChange}
            >
              {optionSelectOption.map((option) => (
                <option className="" key={option.key}>
                  {option.text}
                </option>
              ))}
            </select>

            <select className="flex sm:gap-4 lg:gap-8 bg-[#F6F6F6] rounded-[4px] sm:px-1 py-1 ">
              {year.map((year) => (
                <option
                  className="text-xs sm:text-sm lg:text-base rounded-[2px] px-2 lg:px-4 outline-none"
                  disabled={currentTab == year.title}
                  key={year.id}
                >
                  {year.title}
                </option>
              ))}
            </select>
          </div>
          <div className="">{chartToRender(selectedOption)}</div>
        </div>

        <div className="bg-white p-5 flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold mb-6">
            Recent Bookings
          </h1>
          <DataTable columns={dashboardCol} data={dashboardRow} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

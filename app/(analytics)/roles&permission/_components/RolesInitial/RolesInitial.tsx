"use client";
import React from "react";
import Filter from "@/components/Filters/Filters";
import Export from "@/components/Export/Export";
import DataTable from "@/components/Table/DataTable";
import { userRow } from "@/Utils/constant";
import { userCol } from "@/components/Table/columns";
import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};

const RolesInitial = ({ onClick }: Props) => {
  const rolesFilters = [
    { id: 1, name: "date" },
    { id: 2, name: "name" },
    { id: 3, name: "flightAmount" },
  ];

  return (
    <div className="text-[#202224] text-sm font-nunito">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[22px] sm:text-3xl">User</h1>

        <div className="flex justify-between gap-8 w-full h-fit">
          <Filter defaultFilters={rolesFilters} />
          <div className="flex flex-col sm:flex-row flex-wrap justify-end w-fit h-full gap-2 border border-transparent">
            <Export />
            <Button
              onClick={onClick}
              className="w-fit h-12 md:h-16 text-center text-white bg-[#4880FF] outline-none font-nunito text-xs sm:text-sm rounded-[6px]"
            >
              New User
            </Button>
          </div>
        </div>

        <div className="bg-white">
          <DataTable columns={userCol} data={userRow} />
        </div>
      </div>
    </div>
  );
};

export default RolesInitial;

"use client";

import React from "react";
import Filter from "@/components/Filters/Filters";
import Export from "@/components/Export/Export";
import DataTable from "@/components/Table/DataTable";
import { userRow } from "@/Utils/constant";
import { userCol } from "@/components/Table/columns";
import NewUser from "./_components/NewUser/NewUser";

type Props = {};

const User = (props: Props) => {
  const userFilters = [
    { id: 1, name: "date" },
    { id: 2, name: "name" },
    { id: 3, name: "flightAmount" },
  ];

  return (
    <div className="py-6 px-4 text-[#202224] text-sm font-nunito">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[22px] sm:text-3xl">Users</h1>

        <div className="flex justify-between gap-8 w-full h-fit">
          <Filter defaultFilters={userFilters} />
          <div className="flex flex-col sm:flex-row flex-wrap justify-end w-fit h-full gap-2 border border-transparent">
            <Export />
            <NewUser />
          </div>
        </div>

        <div className="bg-white min-h-[50vh]">
          <DataTable columns={userCol} data={userRow} />
        </div>
      </div>
    </div>
  );
};

export default User;

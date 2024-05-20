"use client";

import React from "react";
import Filter from "@/components/Filters/Filters";
import Export from "@/components/Export/Export";
import NewUser from "@/components/NewUser/NewUser";
import DataTable from "@/components/Table/DataTable";
import { userRow } from "@/Utils/constant";
import { userCol } from "@/components/Table/columns";

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
        <h1 className="font-bold text-3xl">Users</h1>

        <div className="flex justify-between w-full items-center h-16">
          <Filter defaultFilters={userFilters} />
          <div className="flex h-full gap-2">
            <Export />
            <NewUser />
          </div>
        </div>

        <div className="bg-white">
          <DataTable columns={userCol} data={userRow} />
        </div>
      </div>
    </div>
  );
};

export default User;

"use client";
import React, { useState } from "react";
import Column1 from "./_components/Column1/Column1";
import Column2 from "./_components/Column2/Column2";
import Reviews from "./_components/Reviews/Reviews";
import Footer from "./_components/Footer/Footer";
import DataTable from "@/components/Table/DataTable";
import { userCol } from "@/components/Table/columns";
import { userRow } from "@/Utils/constant";
import Cabin from "@/components/Filters/Cabin/Cabin";

type Props = {};

const MySite = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<string>("column1");

  const handleClickPage = (item: string) => {
    setSelectedPage(item);
  };
  const pageOption = [
    {
      key: "column1",
      page: "Column",
      pageNumber: "1",
    },
    {
      key: "column2",
      page: "Column",
      pageNumber: "2",
    },
    {
      key: "reviews",
      page: "Reviews",
    },
    {
      key: "footer",
      page: "Footer",
    },
  ];

  const stepToRender = (key: string) => {
    switch (key) {
      case "column1":
        return <Column1 />;
      case "column2":
        return <Column2 />;
      case "reviews":
        return <Reviews />;
      case "footer":
        return <Footer />;
      default:
        break;
    }
  };

  return (
    <div className="p-5 text-[#202224]">
      <h1 className="font-bold text-[22px] sm:text-3xl mb-5">MySites</h1>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-[1] flex-col bg-white p-3 sm:p-5 border-[#B9B9B9] border-[0.5px] rounded-[8px] h-fit md:h-[100vh] w-fit mx-auto md:mx-0">
          <p className="font-bold mb-3 sm:mb-5 text-sm sm:text-base">Columns</p>
          <div className="flex flex-wrap md:flex-col">
            {pageOption.map(({ key, page, pageNumber }) => {
              const isActive = selectedPage === key;
              return (
                <span
                  onClick={() => handleClickPage(key)}
                  key={key}
                  className={`text-xs sm:text-sm cursor-pointer font-semibold px-2 sm:px-4 py-2 sm:py-3 flex justify-between gap-3 md:gap-1 ${
                    isActive && "text-[#4880FF] bg-[#487fff4c] rounded"
                  }`}
                >
                  <span>{page}</span>
                  <span>{pageNumber}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex-[3] bg-white p-5 border-[#B9B9B9] border-[0.5px] rounded-[8px] w-full">
          {stepToRender(selectedPage)}
        </div>
      </div>
      {/* <DataTable columns={userCol} data={userRow} />
      <Cabin /> */}
    </div>
  );
};

export default MySite;

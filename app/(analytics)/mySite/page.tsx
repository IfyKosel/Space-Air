"use client";
import React, { useState } from "react";
import Column1 from "./_components/Column1/Column1";
import Column2 from "./_components/Column2/Column2";
import Reviews from "./_components/Reviews/Reviews";
import Footer from "./_components/Footer/Footer";

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
      <h1 className="font-bold text-3xl mb-5">MySites</h1>

      <div className="flex gap-5">
        <div className="flex flex-col bg-white p-5 border-[#B9B9B9] border-[0.5px] rounded-[8px] max-h-[30rem] w-fit">
          <p className="font-bold mb-5">Columns</p>
          {pageOption.map(({ key, page, pageNumber }) => {
            const isActive = selectedPage === key;
            return (
              <span
                onClick={() => handleClickPage(key)}
                key={key}
                className={`text-sm cursor-pointer font-semibold w-[13rem] px-4 py-3 flex justify-between ${
                  isActive && "text-[#4880FF] bg-[#487fff4c] rounded"
                }`}
              >
                <span>{page}</span>
                <span>{pageNumber}</span>
              </span>
            );
          })}
        </div>
        <div className="bg-white p-5 border-[#B9B9B9] border-[0.5px] rounded-[8px] w-full">
          {stepToRender(selectedPage)}
        </div>
      </div>
    </div>
  );
};

export default MySite;

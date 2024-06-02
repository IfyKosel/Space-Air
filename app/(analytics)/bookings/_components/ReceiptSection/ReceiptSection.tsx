import React from "react";

type Props = {};

const ReceiptSection = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-end gap-5">
      <div className="flex gap-6">
        <div className="flex flex-col gap-2 w-fit text-xs md:text-sm text-end">
          <p className="text-[#868686] ">Price per adult</p>
          <p className="text-[#4880FF]">NGN 11,470,154</p>
        </div>
        <div className="flex flex-col gap-2 w-fit text-xs md:text-sm text-end">
          <p className="text-[#868686] ">Price per Child</p>
          <p className="text-[#4880FF]">NGN 11,470,154</p>
        </div>
      </div>
      <div>
        <p className="text-xs md:text-sm text-[#4880FF] pr-4 min-[500px]:pr-0">
          Payment NGN 34,410,462
        </p>
      </div>
    </div>
  );
};

export default ReceiptSection;

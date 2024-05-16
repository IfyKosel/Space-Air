import { Button } from "@/components/ui/button";
import { FilterObject } from "@/types/types";

import Image from "next/image";
import ResetIcon from "@/components/Filters/assets/Reset.svg";

import React, { useEffect, useState } from "react";

type Props = {};

const Reset = () => {
  return (
    <div className="flex items-center h-full border-l-[0.6px] border-[#D5D5D5]">
      <Button
        variant="outline"
        className="flex gap-1 font-semibold border-none px-4"
      >
        <Image src={ResetIcon} alt="Reset" width={18} height={18} />
        <span className="text-[#EA0234]">Reset Filter</span>
      </Button>
    </div>
  );
};

export default Reset;

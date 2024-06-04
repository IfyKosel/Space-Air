import React from "react";
import { PaymentOptionProps } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Dropdown from "@/components/Filters/assets/Dropdown.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const Payment = (props: Props) => {
  const paymentOptions: PaymentOptionProps[] = [
    {
      key: "confirmed",
      text: "Confirmed",
    },
    {
      key: "pending",
      text: "Pending",
    },
    {
      key: "rejected",
      text: "Rejected",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-fit sm:w-[120px] flex gap-1 sm:gap-2 font-semibold border-none text-xs sm:text-sm"
        >
          <span>Payment</span>
          <Image
            src={Dropdown}
            alt="Dropdown"
            width={24}
            height={24}
            className="w-4 sm:auto"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[16px] absolute -top-3 -left-10">
        <div className="text-[#202224] w-[21.5rem] font-nunito">
          <div className="px-5 pb-1.5">
            <h1 className="text-lg font-bold mt-2">Payment</h1>
            <div className="flex flex-wrap gap-3 py-5">
              {paymentOptions.map((payment, index) => {
                return (
                  <button
                    key={index}
                    type="submit"
                    className="border-[0.6px] border-[#979797] rounded-[20px] w-[9rem] bg-transparent text-sm text-start px-3.5 py-1.5 font-semibold"
                  >
                    {payment.text}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full py-4 px-5 border-t-[0.4px] border-[#979797]">
            <button
              type="button"
              className="text-white bg-[#4880FF] rounded-[6px] py-2 px-8 text-xs font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Payment;

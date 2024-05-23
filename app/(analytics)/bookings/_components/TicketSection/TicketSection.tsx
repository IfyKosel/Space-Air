import Image from "next/image";
import React from "react";
import Tick from "@/app/(analytics)/bookings/assets/GreenTick.svg";

type Props = {};

const TicketSection = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-5 text-xs sm:text-sm">
        <div className="w-fit flex sm:flex-col gap-1">
          <p className="text-[#606060]">Reservation Number</p>
          <p className="text-[#202020]">123456</p>
        </div>
        <div className="w-fit flex sm:flex-col gap-1">
          <p className="text-[#606060]">Ticket Number</p>
          <p className="text-[#202020]">123456789123</p>
        </div>
        <div className="w-fit flex sm:flex-col gap-1">
          <p className="text-[#606060]">Booking Date</p>
          <p className="text-[#202020]">Saturday, August 27, 2023 Sep 18</p>
        </div>
        <div className="w-fit flex sm:flex-col gap-1">
          <p className="text-[#606060]">Flight Time</p>
          <p className="text-[#202020]">15:30</p>
        </div>
        <div className="w-fit flex sm:flex-col gap-1">
          <p className="text-[#606060]">Condition</p>
          <div className="flex items-center gap-1">
            <Image src={Tick} alt="Tick" width={16} height={16} />
            <p className="text-[#00966D]">Accepted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;

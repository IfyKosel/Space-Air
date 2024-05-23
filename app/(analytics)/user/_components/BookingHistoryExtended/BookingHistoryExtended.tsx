import { FlightDetailsProps } from "@/types/types";
import React from "react";

type Props = {};

const BookingHistoryExtended = (props: Props) => {
  const flightDetails: FlightDetailsProps = [
    {
      id: "1",
      passportNumber: "1234567897",
      dob: "25/04/2025",
      passengerName: "Mrs.shiva.arghavan",
    },
    {
      id: "2",
      passportNumber: "1234567898",
      dob: "25/04/2025",
      passengerName: "Mrs.shiva.arghavan",
    },
    {
      id: "3",
      passportNumber: "1234567899",
      dob: "25/04/2025",
      passengerName: "Mrs.shiva.arghavan",
    },
  ];

  return (
    <div className="flex justify-between w-full pb-5">
      <div className="flex flex-col gap-4">
        {flightDetails.map((detail) => {
          return (
            <div key={detail.id} className="flex text-xs sm:text-sm gap-7">
              <div className="w-fit text-end flex flex-col gap-1">
                <p className="text-[#606060]">Passport Number</p>
                <p className="text-[#202020]">{detail.passportNumber}</p>
              </div>
              <div className="w-fit text-end flex flex-col gap-1">
                <p className="text-[#606060]">Date of Birth</p>
                <p className="text-[#202020]">{detail.dob}</p>
              </div>
              <div className="w-fit text-end flex flex-col gap-1">
                <p className="text-[#606060]">Passenger&apos;s Name</p>
                <p className="text-[#202020]">{detail.passengerName}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col text-xs sm:text-sm items-end justify-end">
        <div className="w-fit h-full text-end flex flex-col gap-1 justify-center">
          <p className="text-[#606060]">Flight Class</p>
          <p className="text-[#202020]">Business</p>
        </div>
        <div className="w-fit h-fit text-end flex flex-col gap-1">
          <p className="text-[#606060]">Flight Number</p>
          <p className="text-[#202020]">165</p>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryExtended;

import { UserDetailsProps } from "@/types/types";
import React from "react";

type Props = {};

const UserSection = (props: Props) => {
  const userDetails: UserDetailsProps = [
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
    <div>
      <div className="flex flex-col gap-4">
        {userDetails.map((detail) => {
          return (
            <div key={detail.id} className="flex text-xs md:text-sm gap-7">
              <div className="w-fit text-end flex flex-col gap-1">
                <p className="text-[#606060]">Passport Number</p>
                <p className="text-[#202020]">{detail.passportNumber}</p>
              </div>
              <div className="w-fit text-end flex flex-col gap-1">
                <p className="text-[#606060]">Date of Birth</p>
                <p className="text-[#202020]">{detail.dob}</p>
              </div>
              <div className="w-fit text-end flex flex-col gap-1  pr-4 min-[450px]:pr-0">
                <p className="text-[#606060]">Passenger&apos;s Name</p>
                <p className="text-[#202020]">{detail.passengerName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserSection;

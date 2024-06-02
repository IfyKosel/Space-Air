import Image from "next/image";
import React from "react";
import ArrowDown from "@/app/(analytics)/bookings/assets/ArrowDown.svg";
import Airplane from "@/app/(analytics)/bookings/assets/Airplane.svg";
import Receipt from "@/app/(analytics)/bookings/assets/Receipt.svg";
import Ticket from "@/app/(analytics)/bookings/assets/Ticket.svg";
import User from "@/app/(analytics)/bookings/assets/User.svg";
import AirplaneSection from "../AirplaneSection/AirplaneSection";
import ReceiptSection from "../ReceiptSection/ReceiptSection";
import TicketSection from "../TicketSection/TicketSection";
import UserSection from "../UserSection/UserSection";
import { BookingSectionProps } from "@/types/types";

type Props = {};

const BookingPayment = (props: Props) => {
  const bookingSection: BookingSectionProps[] = [
    {
      image: Ticket,
      title: "Ticket",
      component: <TicketSection />,
    },
    {
      image: User,
      title: "User",
      component: <UserSection />,
    },
    {
      image: Airplane,
      title: "Airplane",
      component: <AirplaneSection />,
    },
    {
      image: Receipt,
      title: "Receipt",
      component: <ReceiptSection />,
    },
  ];

  return (
    <div className="p-7">
      <div className="bg-white border border-[#CBCBCB] rounded-[8px]">
        {bookingSection.map((section, index) => {
          return (
            <div
              key={index}
              className={`flex h-full ${
                index !== bookingSection.length - 1 && "border-b"
              }`}
            >
              <div className="flex justify-center items-center w-[3.5rem] sm:w-[6.5rem] lg:w-[10rem] border-r">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={32}
                  height={32}
                  className="w-5 sm:w-7 lg:w-8"
                />
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-5 overflow-x-auto w-full">
                {section.component}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="flex gap-1 justify-center items-center text-white text-xs md:text-sm w-[80%] md:w-[50%] bg-[#4880FF] px-4 py-2 rounded-[6px]"
        >
          <Image
            src={ArrowDown}
            alt="Download"
            width={16}
            height={16}
            className="w-[14px] md:w-auto"
          />
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default BookingPayment;

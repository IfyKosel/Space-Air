import React, { useState } from "react";
import { availableFlight } from "@/Utils/constant";
import Image from "next/image";
import Gulf from "@/components/Filters/assets/Gulf.svg";
import Flight from "@/components/Filters/assets/Flight.svg";
import BookingHistoryExtended from "../BookingHistoryExtended/BookingHistoryExtended";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const BookingHistory = (props: Props) => {
  const [open, setOpen] = useState<{ [key: string]: string }>({});

  const handleClick = (id: any) => {
    const changeText = open[id] === "Less" ? "More" : "Less";
    setOpen({ ...open, [id]: changeText });
  };

  return (
    <div>
      <article className="w-full overflow-x-auto">
        {availableFlight?.map((flight) => (
          <section
            key={flight.id}
            className="flex items-center border-[1.5px] rounded-[6px] w-full justify-between min-h-[6.5rem] relative"
          >
            <div className="w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value={flight.id}>
                  <div className="flex justify-between items-center w-full px-4 h-[6.25rem]">
                    <div className="w-[65%] flex justify-around items-center">
                      <div className="flex flex-col gap-1 items-center">
                        <Image
                          src={Gulf}
                          alt="airline Logo"
                          height={18}
                          width={18}
                        />
                        <span className="text-[10px] sm:text-xs text-[#868686]">
                          {flight.airline}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs md:text-sm font-bold">
                          {flight.departureTime}
                        </span>
                        <p className="text-[10px] md:text-xs text-[#868686]">
                          {flight.departure}
                        </p>
                      </div>

                      <div className="flex flex-col gap-1 items-center justify-center">
                        <span className="text-[#868686] text-center text-xs md:text-sm">
                          {flight.estimatedTime}
                        </span>
                        <Image
                          src={Flight}
                          alt="Flight"
                          height={70}
                          width={100}
                        />
                        <span className="text-[#868686] text-center text-[10px] md:text-xs">
                          {flight.desc}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs md:text-sm font-bold">
                          {flight.arrivalTime}
                        </span>
                        <p className="text-[10px] md:text-xs text-[#868686]">
                          {flight.destination}
                        </p>
                      </div>
                    </div>
                    <div className="w-[27%]">
                      <div className="flex flex-col">
                        <div className="flex flex-col justify-center gap-2 items-end text-end text-[#4880FF]">
                          <p className="text-[10px] sm:text-xs">
                            Payment NGN 3,142.456
                          </p>
                          <AccordionTrigger
                            onClick={() => handleClick(flight.id)}
                            className="py-0 w-fit underline text-[10px]"
                          >
                            {open[flight.id] || "More"}
                          </AccordionTrigger>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AccordionContent>
                    <div className="px-4">
                      <div className="flex gap-4 text-xs sm:text-sm mb-7">
                        <div className="w-fit flex flex-col gap-1">
                          <p className="text-[#606060]">Reservation Number</p>
                          <p className="text-[#202020]">
                            {flight.reservationNumber}
                          </p>
                        </div>
                        <div className="w-fit flex flex-col gap-1">
                          <p className="text-[#606060]">Ticket Number</p>
                          <p className="text-[#202020]">
                            {flight.ticketNumber}
                          </p>
                        </div>
                        <div className="w-fit flex flex-col gap-1">
                          <p className="text-[#606060]">Booking Date</p>
                          <p className="text-[#202020]">{flight.bookingDate}</p>
                        </div>
                        <div className="w-fit flex flex-col gap-1">
                          <p className="text-[#606060]">Flight Time</p>
                          <p className="text-[#202020]">{flight.flightTime}</p>
                        </div>
                      </div>
                      <BookingHistoryExtended />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <p className="absolute text-[#00B69B] text-[10px] top-1 left-1">
              {flight.status}
            </p>
          </section>
        ))}
      </article>
    </div>
  );
};

export default BookingHistory;

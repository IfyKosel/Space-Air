import React from "react";
import { AvailableFlightProps } from "@/types/types";
import Image from "next/image";
import Gulf from "@/components/Filters/assets/Gulf.svg";
import Flight from "@/components/Filters/assets/Flight.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {};

const BookingHistory = (props: Props) => {
  const availableFlight: AvailableFlightProps = [
    {
      id: "1",
      airline: "Arik Air",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai(DXB)",
      estimatedTime: "01:20 mins",
      desc: "20kg",
      price: "₦",
      status: "Confirmed",
    },
    {
      id: "2",
      airline: "Fly Emirates",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg",
      price: "₦",
      status: "Confirmed",
    },
    {
      id: "3",
      airline: "quartar Airways",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg",
      price: "₦",
      status: "Confirmed",
    },
  ];
  return (
    <div>
      <article className="w-full overflow-x-auto">
        {availableFlight?.map((flight) => (
          <section
            key={flight.id}
            className="flex items-center border-[1.5px] rounded-[6px] w-full justify-between h-[6.5rem] relative"
          >
            <div className="flex justify-between items-center w-full px-4">
              <div className="w-[65%] flex justify-around items-center">
                <div className="flex flex-col gap-1 items-center">
                  <Image src={Gulf} alt="airline Logo" height={30} width={30} />
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
                  <Image src={Flight} alt="Flight" height={70} width={100} />
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
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2 items-end text-end text-[#4880FF]">
                    <p className="text-[10px] sm:text-xs">
                      Payment NGN 3,142.456
                    </p>
                    <p>
                      <button className="w-fit underline text-[10px]">
                        More
                      </button>
                    </p>
                  </div>
                </div>
              </div>
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

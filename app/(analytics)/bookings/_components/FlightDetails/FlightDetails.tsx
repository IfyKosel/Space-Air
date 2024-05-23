import React from "react";
import Image from "next/image";
import Flight from "@/components/Filters/assets/Flight.svg";
import Oman from "@/app/(analytics)/bookings/assets/Oman.svg";
import Timer from "@/app/(analytics)/bookings/assets/Timer.svg";
import Weight from "@/app/(analytics)/bookings/assets/Weight.svg";

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <article className="w-full">
      <div className="w-full">
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-around items-center h-fit">
            <div className="flex flex-col gap-1 items-center">
              <Image src={Oman} alt="airline Logo" height={45} width={45} />
              <span className="text-[10px] sm:text-xs text-[#868686]">
                Oman Air
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-xs md:text-sm font-bold">2:50</span>
              <p className="text-[10px] md:text-xs text-[#868686]">
                Instanbul-(SAW)
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="flex">
                <Image src={Timer} alt="Time" width={14} height={14} />
                <span className="text-[#868686] text-center text-xs md:text-sm">
                  19:00
                </span>
              </div>
              <Image src={Flight} alt="Flight" height={70} width={100} />
              <div className="flex">
                <Image src={Weight} alt="Weight" width={14} height={14} />
                <span className="text-[#868686] text-center text-[10px] md:text-xs">
                  20kg
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs md:text-sm font-bold">21:15</span>
              <p className="text-[10px] md:text-xs text-[#868686]">
                Dubai(DXB)
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-sm">Monday, September 6</p>
            </div>
          </div>
          <div className="w-full flex justify-between text-[#1D91CC] text-[10px] sm:text-xs">
            <div className="bg-[#E8F4FA] px-2 py-1 rounded-[8px]">Economy</div>
            <p className="">Payment NGN 34,410,462</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FlightDetails;

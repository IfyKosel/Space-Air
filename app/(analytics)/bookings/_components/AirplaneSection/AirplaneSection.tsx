import React from "react";
import Image from "next/image";
import Flight from "@/components/Filters/assets/Flight.svg";
import Gulf from "@/components/Filters/assets/Gulf.svg";
import Timer from "@/app/(analytics)/bookings/assets/Timer.svg";
import Weight from "@/app/(analytics)/bookings/assets/Weight.svg";

type Props = {};

const AirplaneSection = (props: Props) => {
  return (
    <article className="w-full">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex justify-between px-3 items-center h-fit">
          <div className="flex flex-col gap-1 items-center">
            <Image src={Gulf} alt="airline Logo" height={45} width={45} />
            <span className="text-[10px] sm:text-xs text-[#868686]">
              Gulf Air
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-center">
              <span className="text-xs md:text-sm font-bold">2:50</span>
              <p className="text-[10px] md:text-xs text-[#868686]">
                Instanbul-(SAW)
              </p>
            </div>
            <p className="text-sm text-[#202020]">
              6 Shahrivar, 1402_2023Sep18
            </p>
            <div className="flex justify-start">
              <div className="flex flex-col gap-2">
                <p className="text-[#868686] text-start text-xs md:text-sm">
                  Departure
                </p>
                <p className="text-sm text-[#202020]">
                  Istanbul, Istanbul Airport
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="flex gap-1 items-center">
              <span className="text-[#868686] text-center text-xs md:text-sm">
                19:00
              </span>
              <Image src={Timer} alt="Time" width={14} height={14} />
            </div>
            <Image src={Flight} alt="Flight" height={70} width={100} />
            <div className="flex items-center gap-1">
              <span className="text-[#868686] text-center text-[10px] md:text-xs">
                20kg
              </span>
              <Image src={Weight} alt="Weight" width={14} height={14} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs md:text-sm font-bold">21:15</span>
              <p className="text-[10px] md:text-xs text-[#868686]">
                Dubai(DXB)
              </p>
            </div>
            <p className="text-sm text-[#202020]">
              6 Shahrivar, 1402_2023Sep18
            </p>
            <div className="flex justify-end">
              <div className="flex flex-col gap-2 w-fit">
                <p className="text-[#868686] text-xs md:text-sm">Destination</p>
                <p className="text-sm text-[#202020]">Dubai, Dubai Airport</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-6 px-5">
          <div className="flex flex-col gap-2 w-fit text-xs md:text-sm text-end">
            <p className="text-[#868686] ">Flight Class</p>
            <p className="text-sm text-[#202020]">Business</p>
          </div>
          <div className="flex flex-col gap-2 w-fit text-xs md:text-sm text-end">
            <p className="text-[#868686] ">Flight Number</p>
            <p className="text-sm text-[#202020]">165</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AirplaneSection;

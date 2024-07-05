"use client";
import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import PassengerForm from "../PassengerForm/PassengerForm";
import FlightDetails from "../FlightDetails/FlightDetails";
import { storeItem } from "@/Utils/localStorage";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const NewBooking = ({ setSelectedPage }: Props) => {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <div className="bg-white border-[1.5px] rounded-[6px] p-4">
        <FlightDetails />
      </div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="bg-white border-[1.5px] rounded-[6px] p-4">
          <h2 className="text-[#404040] text-sm font-bold mb-5">
            Contact Information
          </h2>
          <ContactInfo register={register} />
        </div>

        <div className="bg-white border-[1.5px] rounded-[6px] px-4 pt-4">
          <div className="border-b-[0.8px] border-[#EDEDED] pt-1">
            <h2 className="text-[#404040] text-sm font-bold mb-5">
              Passenger Details
            </h2>
          </div>
          <PassengerForm register={register} />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white text-sm mt-4 w-[80%] sm:w-[50%] bg-[#4880FF] px-4 py-2 rounded-[6px]"
          >
            Book Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBooking;

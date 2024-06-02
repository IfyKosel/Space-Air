"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const ContactInfo = (props: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <label htmlFor="Username" className="relative w-full block">
          <input
            type="text"
            id="FirstName"
            {...register("first_name")}
            className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2 bg-transparent placeholder-transparent outline-none"
            placeholder="FirstName"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            FirstName
          </span>
        </label>
        <label htmlFor="PhoneNumber" className="relative w-full block">
          <input
            type="text"
            id="lastname"
            {...register("last_name")}
            className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2 bg-transparent placeholder-transparent outline-none"
            placeholder="lastname"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            PhoneNumber
          </span>
        </label>
        <label htmlFor="PhoneNumber" className="relative w-full block">
          <input
            type="text"
            id="PhoneNumber"
            {...register("phone")}
            className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2 bg-transparent placeholder-transparent outline-none"
            placeholder="PhoneNumber"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Phone Number
          </span>
        </label>
        <label htmlFor="email" className="relative w-full block">
          <input
            type="email"
            id="email"
            {...register("email")}
            className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2 bg-transparent placeholder-transparent outline-none"
            placeholder="email"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Email
          </span>
        </label>
      </form>
    </div>
  );
};

export default ContactInfo;

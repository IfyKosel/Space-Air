"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const UserInformation = (props: Props) => {
  //   const [phoneNumber, setPhoneNumber] = useState("");
  const { register, handleSubmit } = useForm();

  //   const handleChangePhoneNumber = (value: string) => {
  //     setPhoneNumber(value);
  //   };

  const handleOnSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="px-5">
      <form
        className="pt-2 flex flex-col gap-7"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="grid sm:grid-cols-2 gap-7 sm:gap-10">
          <Input
            label="first name"
            idName="first_name"
            type="text"
            name="first_name"
            register={register}
          />
          <Input
            label="last name"
            idName="last-name"
            type="text"
            name="last_name"
            register={register}
          />
        </div>
        <div className="relative">
          <PhoneInput
            country={"ng"}
            containerClass="peer"
            placeholder="+234 8000000000"
            // value={phoneNumber}
            // onChange={handleChangePhoneNumber}
            inputClass="outline-none border-[#CBCBCB] border !h-10 !w-full bg-cyan-300 !rounded-[6px] focus:border-[#1D91CC] focus:text-[#1D91CC] focus:text-sm px-4"
          />
          <label className="text-[#CBCBCB] text-[14px] bg-[#ffffff] px-1 absolute top-0 left-7 capitalize font-avant peer-focus:text-[#1D91CC] translate-y-[-50%]">
            phone number
          </label>
        </div>
        <Input
          label="email address"
          idName="email"
          type="email"
          name="email"
          register={register}
        />
        <Input
          label="gender"
          idName="gender"
          type="text"
          name="gender"
          register={register}
        />
        <Input
          label="address 1"
          idName="address1"
          type="text"
          name="address1"
          register={register}
        />
        <Input
          label="addresss 2 (Optional)"
          idName="address2"
          type="text"
          name="address2"
          register={register}
        />
        <Input
          label="state"
          idName="state"
          type="text"
          name="state"
          register={register}
        />
        <Input
          label="country"
          idName="country"
          type="text"
          name="country"
          register={register}
        />

        <button
          type="submit"
          className="rounded-[8px] bg-[#4880FF] py-2 px-12 font-avant text-white w-fit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserInformation;

import React from "react";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";

type Props = {};

const UserInformation = (props: Props) => {
  const { register, reset, handleSubmit } = useForm();
  return (
    <div className="px-5">
      <form className="pt-2 flex flex-col gap-7">
        <div className="grid sm:grid-cols-2 gap-7 sm:gap-10">
          <Input label="first name" idName="first_name" type="text" />
          <Input label="last name" idName="last-name" type="text" />
        </div>
        <div className="relative">
          <PhoneInput
            country={"ng"}
            containerClass="peer"
            placeholder="+234 8000000000"
            // {...register("phone")}
            inputClass="outline-none border-[#CBCBCB] border !h-10 !w-full bg-cyan-300 !rounded-[6px] focus:border-[#1D91CC] focus:text-[#1D91CC] focus:text-sm px-4"
          />
          <label className="text-[#CBCBCB] text-[14px] bg-[#ffffff] px-1 absolute top-0 left-7 capitalize font-avant peer-focus:text-[#1D91CC] translate-y-[-50%]">
            phone number
          </label>
        </div>
        <Input label="email address" idName="email" type="email" />
        <Input label="gender" idName="gender" type="text" />
        <Input label="address 1" idName="address1" type="text" />
        <Input label="addresss 2 (Optional)" idName="address2" type="text" />
        <Input label="state" idName="state" type="text" />
        <Input label="country" idName="country" type="text" />

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

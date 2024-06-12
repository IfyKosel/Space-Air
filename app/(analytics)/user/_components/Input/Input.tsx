import { NewUser } from "@/types/types";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  idName: string;
  type: string;
  name: string;
  register: UseFormRegister<NewUser>;
};

const Input = ({ label, idName, type, name, register }: Props) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={idName}
        {...register(name)}
        className="peer outline-none border-[#CBCBCB] border h-10 w-full bg-white rounded-[6px] focus:border-[#1D91CC] focus:text-[#1D91CC] focus:text-sm px-4"
      />
      <label
        htmlFor={idName}
        className="text-[#CBCBCB] text-[14px] bg-white px-1 absolute -top-[1px] left-7 capitalize font-avant peer-focus:text-[#1D91CC] translate-y-[-50%]"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

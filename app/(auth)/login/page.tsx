"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OvalTL from "@/app/(auth)/login/assets/OvaltopL.svg";
import OvalTR from "@/app/(auth)/login/assets/OvaltopR.svg";
import OvalBL from "@/app/(auth)/login/assets/OvalbottomL.svg";
import OvalBR from "@/app/(auth)/login/assets/OvalbottomR.svg";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const Login = (props: Props) => {
  const { register, handleSubmit, getValues, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    reset();
    console.log(formData);
  };

  return (
    <div className="bg-[#4880FF] w-full h-screen flex items-center justify-center relative">
      <div className="bg-white text-[#202224] w-[80%] sm:w-[28rem] px-7 sm:px-8 py-12 rounded-2xl z-[200] font-avant">
        <div className="text-center mb-5">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Login to Account
          </h2>
          <p className="text-xs sm:text-sm">
            Please enter your email and password to continue
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-5 text-xs sm:text-sm"
        >
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" className="">
              Email address:
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="esteban_schller@gmail.com"
              className="bg-[#F1F4F9] outline-none border border-[#D8D8D8] rounded-[5px] text-[#B9B9B9] w-full px-3 py-2"
            />
          </div>
          <div>
            <div className="flex flex-col gap-2 font-nunito">
              <div className="flex justify-between">
                <label htmlFor="password" className="">
                  Password
                </label>
                <p>Forget Password?</p>
              </div>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="Password"
                className="bg-[#F1F4F9] outline-none border border-[#D8D8D8] rounded-[5px] text-[#B9B9B9] w-full px-3 py-2"
              />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <input type="checkbox" id="check" {...register("checkbox")} />
              <label htmlFor="check">Remember Password</label>
            </div>
          </div>
          <div className="flex flex-col items-center w-full text-center gap-2">
            <button
              type="submit"
              className="bg-[#4880FF] w-[80%] rounded-[6px] py-3 text-white"
            >
              Sign In
            </button>
            <p>
              Don't have an account?{" "}
              <Link href="" className="text-[#4880FF] underline">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Image
        src={OvalTL}
        alt="Oval vector"
        className="w-[40%] absolute top-0 left-0"
      />
      <Image
        src={OvalTR}
        alt="Oval vector"
        className="w-[35%] absolute top-0 right-0"
      />
      <Image
        src={OvalBL}
        alt="Oval vector"
        className="w-[35%] absolute bottom-0 left-0"
      />
      <Image
        src={OvalBR}
        alt="Oval vector"
        className="w-[35%] absolute bottom-0 right-0"
      />
    </div>
  );
};

export default Login;

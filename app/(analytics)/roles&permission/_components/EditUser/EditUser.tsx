"use client";
import Image from "next/image";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Divider from "@/app/(analytics)/roles&permission/assets/Divider.svg";

type Props = {};

const EditUser = (props: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white p-3 sm:p-6 border-[#B9B9B9] border-[0.5px] rounded-[8px] h-fit">
      <div className="flex mb-16 md:ml-6 mt-2 md:mt-5 text-sm sm:text-base">
        <p className="font-bold">User ID:</p>
        <span>892736120</span>
      </div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="flex-[5] py-5 sm:py-9">
            <p className="text-[#606060] mb-3 text-sm sm:text-base">Role</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label
                  htmlFor="first_name"
                  className="text-[#606060] font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  {...register("first_name")}
                  placeholder="Enter your first name"
                  className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA] md:max-w-[22rem]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label
                  htmlFor="last_name"
                  className="text-[#606060] font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  {...register("last_name")}
                  placeholder="Enter your last name"
                  className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA] md:max-w-[22rem]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label
                  htmlFor="department"
                  className="text-[#606060] font-semibold"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  {...register("department")}
                  placeholder="Enter your email"
                  className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA] md:max-w-[22rem]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label
                  htmlFor="phone_number"
                  className="text-[#606060] font-semibold"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  {...register("phone_number")}
                  placeholder="Enter your  phone numbers"
                  className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA] md:max-w-[22rem]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label htmlFor="email" className="text-[#606060] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA] md:max-w-[22rem]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label
                  htmlFor="password"
                  className="text-[#606060] font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="Create New Password"
                  className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA] md:max-w-[22rem]"
                />
              </div>
            </div>
          </div>

          <div className="flex-[2] w-full flex">
            <Image
              src={Divider}
              alt="Divider"
              width={10}
              height={10}
              className="w-auto h-full hidden sm:block"
            />
            <div className="flex justify-center py-5 sm:py-9 w-full">
              <div className="w-fit h-full flex flex-col gap-6 sm:gap-[15%] md:gap-0 md:justify-between lg:pr-4 pb-4">
                <p className="text-[#606060] mb-3 text-sm sm:text-base">
                  Permission
                </p>
                <div className="flex flex-col text-[#2c2222] gap-4">
                  <label
                    htmlFor="dashboard"
                    className="flex text-[#A6A6A6] items-center gap-2 text-xs sm:text-sm cursor-pointer w-fit"
                  >
                    <input
                      type="checkbox"
                      id="dashboard"
                      {...register("dashboard")}
                      className="appearance-none border-[0.6px] border-[#D5D5D5] outline-none rounded bg-[#F5F6FA] h-6 w-6 checked:bg-[#4880FF] checked:border-[4px] checked:border-[#D5D5D5]"
                    />
                    Dashboard
                  </label>
                  <label
                    htmlFor="bookings"
                    className="flex text-[#A6A6A6] items-center gap-2 text-xs sm:text-sm cursor-pointer w-fit"
                  >
                    <input
                      type="checkbox"
                      id="bookings"
                      {...register("bookings")}
                      className="appearance-none border-[0.6px] border-[#D5D5D5] outline-none rounded bg-[#F5F6FA] h-6 w-6 checked:bg-[#4880FF] checked:border-[4px] checked:border-[#D5D5D5]"
                    />
                    Bookings
                  </label>
                  <label
                    htmlFor="user"
                    className="flex text-[#A6A6A6] items-center gap-2 text-xs sm:text-sm cursor-pointer w-fit"
                  >
                    <input
                      type="checkbox"
                      id="user"
                      {...register("user")}
                      className="appearance-none border-[0.6px] border-[#D5D5D5] outline-none rounded bg-[#F5F6FA] h-6 w-6 checked:bg-[#4880FF] checked:border-[4px] checked:border-[#D5D5D5]"
                    />
                    User
                  </label>
                  <label
                    htmlFor="mySites"
                    className="flex text-[#A6A6A6] items-center gap-2 text-xs sm:text-sm cursor-pointer w-fit"
                  >
                    <input
                      type="checkbox"
                      id="mySites"
                      {...register("mySites")}
                      className="appearance-none border-[0.6px] border-[#D5D5D5] outline-none rounded bg-[#F5F6FA] h-6 w-6 checked:bg-[#4880FF] checked:border-[4px] checked:border-[#D5D5D5]"
                    />
                    MySites
                  </label>
                  <label
                    htmlFor="admin_permission"
                    className="flex text-[#A6A6A6] items-center gap-2 text-xs sm:text-sm cursor-pointer w-fit"
                  >
                    <input
                      type="checkbox"
                      id="admin_permission"
                      {...register("admin_permission")}
                      className="appearance-none border-[0.6px] border-[#D5D5D5] outline-none rounded bg-[#F5F6FA] h-6 w-6 checked:bg-[#4880FF] checked:border-[4px] checked:border-[#D5D5D5]"
                    />
                    Admin Permission
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 md:mt-16 flex justify-center">
          <button
            type="submit"
            className="text-white text-xs sm:text-sm w-[70%] md:w-[30%] bg-[#4880FF] px-4 py-2 rounded-[6px]"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

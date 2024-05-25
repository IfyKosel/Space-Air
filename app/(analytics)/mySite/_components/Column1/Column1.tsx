"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Island from "@/app/(analytics)/mySite/assets/Island.svg";
import Bridge from "@/app/(analytics)/mySite/assets/Brigde.svg";
import Rubble from "@/app/(analytics)/mySite/assets/Rubble.svg";
import Dubai from "@/app/(analytics)/mySite/assets/Dubai.svg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { EventColumnProps } from "@/types/types";

type Props = {};

const Column1 = (props: Props) => {
  const { register, handleSubmit, getValues, reset } = useForm();
  const [file, setFile] = useState<File>();

  //   const [selectedImage, setSelectedImage] = useState<
  //     string | ArrayBuffer | null
  //   >(null);

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     // Check if a file was selected
  //     if (file) {
  //       // Use FileReader to read the file and convert it to a data URL
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setSelectedImage(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    reset();
    console.log(formData);
  };

  const eventColumn: EventColumnProps[] = [
    {
      image: Island,
      event_title: "The best swimming season",
      button_description: "Buying Kish flight tickets",
    },
    {
      image: Bridge,
      event_title: "Travel to Türkiye",
      button_description: "Buying Turkish flight tickets",
    },
    {
      image: Rubble,
      event_title: "A world of history and art",
      button_description: "Enter event name",
    },
    {
      image: Dubai,
      event_title: "Wonder in the desert",
      button_description: "Buying Dubai flight tickets",
    },
  ];
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <button type="button" className="bg-blue-500 px-5 text-white">
          upload
        </button>
      </div>
      <p className="font-bold mb-5">Column 1</p>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="header" className="text-[#606060] font-semibold">
              Header
            </label>
            <input
              type="text"
              id="header"
              {...register("header")}
              placeholder="Plan your vacation"
              className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm ">
            <label htmlFor="header" className="text-[#606060] font-semibold">
              Sub - Header
            </label>
            <textarea
              rows={4}
              {...register("sub_header")}
              placeholder="Tempora facere doloribus id aut. Ea maiores esse accusantium laboriosam. Quos commodi non assumenda quam illum. Id omnis saepe corrupti incidunt qui sed delectus. Eaque minus ducimus."
              className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
            />
          </div>
        </div>
        <div>
          <p className="font-bold mb-5">Column Events</p>
          <div className="flex flex-col gap-7">
            {eventColumn.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <Image src={item.image} alt="Island" className="w-auto" />
                    {/* {selectedImage && (
                      <div>
                        <img
                          src={selectedImage.toString()}
                          alt="Uploaded Image"
                        />
                      </div>
                    )} */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <p className="text-center text-[#A6A6A6] text-sm cursor-pointer">
                          Click to replace image
                        </p>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-[400px]">
                        <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4 text-end w-fit">
                          x
                        </AlertDialogCancel>
                        <input
                          type="file"
                          accept="image/*"
                          //   onChange={handleImageChange}
                        />
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  {/* <input type="file" name="" id="" className="" /> */}
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-2 text-sm">
                      <label
                        htmlFor="event"
                        className="text-[#606060] font-semibold"
                      >
                        Event title
                      </label>
                      <input
                        type="text"
                        id="event"
                        {...register("event_title")}
                        placeholder={item.event_title}
                        className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-sm ">
                      <label
                        htmlFor="description"
                        className="text-[#606060] font-semibold"
                      >
                        Button Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        {...register("button_description")}
                        placeholder={item.button_description}
                        className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 md:mt-20 flex justify-center md:block">
          <button
            type="submit"
            className="text-white text-sm w-[70%] md:w-[35%] bg-[#4880FF] px-4 py-2 md:ml-8 rounded-[6px]"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Column1;

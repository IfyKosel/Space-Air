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
import { UploadDropzone } from "@/Utils/uploadthing";

type Props = {};

const Column1 = (props: Props) => {
  const [imageUrl1, setImageUrl1] = useState(Island);
  const [imageUrl2, setImageUrl2] = useState(Bridge);
  const [imageUrl3, setImageUrl3] = useState(Rubble);
  const [imageUrl4, setImageUrl4] = useState(Dubai);

  const { register, handleSubmit, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    data.imageUrls = { imageUrl1, imageUrl2, imageUrl3, imageUrl4 };
    console.log(data);
    reset();
  };

  return (
    <div>
      <p className="font-bold mb-5 text-sm sm:text-base">Column 1</p>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-xs sm:text-sm">
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
          <div className="flex flex-col gap-2 text-xs sm:text-sm ">
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
          <p className="font-bold mb-5 text-sm sm:text-base">Column Events</p>
          <div className="flex flex-col gap-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image
                  src={imageUrl1}
                  alt="Island"
                  width={1000}
                  height={1500}
                  className="w-auto h-auto rounded"
                />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <p className="text-center text-[#A6A6A6] text-xs sm:text-sm cursor-pointer">
                      Click to replace image
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-[85%] sm:max-w-[400px] flex flex-col gap-1 !rounded-[10px] py-5">
                    <div className="flex justify-between items-start px-5">
                      <p className="sm:text-lg font-bold mb-0">Media Upload</p>
                      <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4 text-end w-fit mt-0">
                        x
                      </AlertDialogCancel>
                    </div>
                    <div className="relative flex flex-col items-center max-h-[80vh] overflow-y-auto pl-5">
                      <UploadDropzone
                        endpoint="imageUploader"
                        appearance={{
                          button: {
                            background: "blue",
                            borderRadius: "6px",
                            color: "#ffffff",
                            fontSize: "14px",
                          },
                        }}
                        className="h-[10rem] p-1 mt-0 w-full"
                        onClientUploadComplete={(res) => {
                          setImageUrl1(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          console.log(`ERROR! ${error.message}`);
                        }}
                      />
                      <Image
                        src={imageUrl1}
                        alt="Image1"
                        width={1000}
                        height={1500}
                        className="w-auto h-auto"
                      />
                      <AlertDialogCancel className="text-white text-xs sm:text-sm bg-[#4880FF] w-full py-1.5 border-none rounded-[6px] outline-none !mt-7">
                        Confirm Image
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 text-xs sm:text-sm">
                  <label
                    htmlFor="event"
                    className="text-[#606060] font-semibold"
                  >
                    Event title
                  </label>
                  <input
                    type="text"
                    id="event"
                    {...register("event_title1")}
                    placeholder="The best swimming season"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
                <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                  <label
                    htmlFor="description"
                    className="text-[#606060] font-semibold"
                  >
                    Button Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    {...register("button_description1")}
                    placeholder="Buying Kish flight tickets"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image
                  src={imageUrl2}
                  alt="Image2"
                  width={1000}
                  height={1500}
                  className="w-auto h-auto rounded"
                />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <p className="text-center text-[#A6A6A6] text-xs sm:text-sm cursor-pointer">
                      Click to replace image
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-[85%] sm:max-w-[400px] flex flex-col gap-1 !rounded-[10px] py-5">
                    <div className="flex justify-between items-start px-5">
                      <p className="sm:text-lg font-bold mb-0">Media Upload</p>
                      <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4 text-end w-fit mt-0">
                        x
                      </AlertDialogCancel>
                    </div>
                    <div className="relative flex flex-col items-center max-h-[80vh] overflow-y-auto pl-5">
                      <UploadDropzone
                        endpoint="imageUploader"
                        appearance={{
                          button: {
                            background: "blue",
                            borderRadius: "6px",
                            color: "#ffffff",
                            fontSize: "14px",
                          },
                        }}
                        className="h-[10rem] p-1 mt-0 w-full"
                        onClientUploadComplete={(res) => {
                          setImageUrl2(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          console.log(`ERROR! ${error.message}`);
                        }}
                      />
                      <Image
                        src={imageUrl2}
                        alt="Image2"
                        width={1000}
                        height={1500}
                        className="w-auto h-auto"
                      />
                      <AlertDialogCancel className="text-white text-xs sm:text-sm bg-[#4880FF] w-full py-1.5 border-none rounded-[6px] outline-none !mt-7">
                        Confirm Image
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 text-xs sm:text-sm">
                  <label
                    htmlFor="event"
                    className="text-[#606060] font-semibold"
                  >
                    Event title
                  </label>
                  <input
                    type="text"
                    id="event"
                    {...register("event_title2")}
                    placeholder="Travel to Türkiye"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
                <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                  <label
                    htmlFor="description"
                    className="text-[#606060] font-semibold"
                  >
                    Button Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    {...register("button_description2")}
                    placeholder="Buying Turkish flight tickets"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image
                  src={imageUrl3}
                  alt="image3"
                  width={1000}
                  height={1500}
                  className="w-auto h-auto"
                />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <p className="text-center text-[#A6A6A6] text-xs sm:text-sm cursor-pointer">
                      Click to replace image
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-[85%] sm:max-w-[400px] flex flex-col gap-1 !rounded-[10px] py-5">
                    <div className="flex justify-between items-start px-5">
                      <p className="sm:text-lg font-bold mb-0">Media Upload</p>
                      <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4 text-end w-fit mt-0">
                        x
                      </AlertDialogCancel>
                    </div>
                    <div className="relative flex flex-col items-center max-h-[80vh] overflow-y-auto pl-5">
                      <UploadDropzone
                        endpoint="imageUploader"
                        appearance={{
                          button: {
                            background: "blue",
                            borderRadius: "6px",
                            color: "#ffffff",
                            fontSize: "14px",
                          },
                        }}
                        className="h-[10rem] p-1 mt-0 w-full"
                        onClientUploadComplete={(res) => {
                          setImageUrl3(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          console.log(`ERROR! ${error.message}`);
                        }}
                      />
                      <Image
                        src={imageUrl3}
                        alt="Image3"
                        width={1000}
                        height={1500}
                        className="w-auto h-auto"
                      />
                      <AlertDialogCancel className="text-white text-xs sm:text-sm bg-[#4880FF] w-full py-1.5 border-none rounded-[6px] outline-none !mt-7">
                        Confirm Image
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 text-xs sm:text-sm">
                  <label
                    htmlFor="event"
                    className="text-[#606060] font-semibold"
                  >
                    Event title
                  </label>
                  <input
                    type="text"
                    id="event"
                    {...register("event_title3")}
                    placeholder="A world of history and art"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
                <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                  <label
                    htmlFor="description"
                    className="text-[#606060] font-semibold"
                  >
                    Button Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    {...register("button_description3")}
                    placeholder="Enter event name"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image
                  src={imageUrl4}
                  alt="Island"
                  width={1000}
                  height={1500}
                  className="w-auto h-auto"
                />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <p className="text-center text-[#A6A6A6] text-xs sm:text-sm cursor-pointer">
                      Click to replace image
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-[85%] sm:max-w-[400px] flex flex-col gap-1 !rounded-[10px] py-5">
                    <div className="flex justify-between items-start px-5">
                      <p className="sm:text-lg font-bold mb-0">Media Upload</p>
                      <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4 text-end w-fit mt-0">
                        x
                      </AlertDialogCancel>
                    </div>
                    <div className="relative flex flex-col items-center max-h-[80vh] overflow-y-auto pl-5">
                      <UploadDropzone
                        endpoint="imageUploader"
                        appearance={{
                          button: {
                            background: "blue",
                            borderRadius: "6px",
                            color: "#ffffff",
                            fontSize: "14px",
                          },
                        }}
                        className="h-[10rem] p-1 mt-0 w-full"
                        onClientUploadComplete={(res) => {
                          setImageUrl4(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          console.log(`ERROR! ${error.message}`);
                        }}
                      />
                      <Image
                        src={imageUrl4}
                        alt="Image4"
                        width={1000}
                        height={1500}
                        className="w-auto h-auto"
                      />
                      <AlertDialogCancel className="text-white text-xs sm:text-sm bg-[#4880FF] w-full py-1.5 border-none rounded-[6px] outline-none !mt-7">
                        Confirm Image
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 text-xs sm:text-sm">
                  <label
                    htmlFor="event"
                    className="text-[#606060] font-semibold"
                  >
                    Event title
                  </label>
                  <input
                    type="text"
                    id="event"
                    {...register("event_title4")}
                    placeholder="Wonder in the desert"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
                <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                  <label
                    htmlFor="description"
                    className="text-[#606060] font-semibold"
                  >
                    Button Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    {...register("button_description4")}
                    placeholder="Buying Dubai flight tickets"
                    className="border-[0.6px] border-[#D5D5D5] p-4 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20 flex justify-center md:block">
          <button
            type="submit"
            className="text-white text-xs sm:text-sm w-[70%] md:w-[35%] bg-[#4880FF] px-4 py-2 md:ml-8 rounded-[6px]"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Column1;

"use client";
import React, { ChangeEvent, useState } from "react";
import Camera from "@/app/(analytics)/mySite/assets/Camera.svg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FieldValues, useForm } from "react-hook-form";
import StarOn from "@/app/(analytics)/mySite/assets/StarOn.svg";
import StarOff from "@/app/(analytics)/mySite/assets/StarOff.svg";
import Image from "next/image";

type Props = {};

const AddReview = (props: Props) => {
  const [addImage, setAddImage] = useState(Camera);
  const [rating, setRating] = useState<number>(0);
  const { register, handleSubmit, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    data.photo = addImage;
    data.ratings = rating;
    console.log(data);
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size < 2 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setAddImage(result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild className="cursor-pointer">
          <p className="font-bold text-sm sm:text-base text-[#4379EE]">
            Add Review
          </p>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[80%] sm:max-w-[800px] px-2 sm:px-6 lg:px-10">
          <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4 w-fit absolute right-2 top-0 md:top-2">
            x
          </AlertDialogCancel>
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="px-5 sm:px-7 py-3"
          >
            <div className="flex flex-col justify-center items-center mb-2">
              {addImage && (
                <Image
                  src={addImage}
                  alt="Image3"
                  width={1000}
                  height={1500}
                  className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] rounded-[50%]"
                />
              )}
              <div className="">
                <input
                  type="file"
                  id="fileInput"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer text-[#4379EE] text-sm"
                >
                  Upload Photo
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                <label htmlFor="name" className="text-[#606060] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="border-[0.6px] border-[#D5D5D5] p-3 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                <label
                  htmlFor="country"
                  className="text-[#606060] font-semibold"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  {...register("country")}
                  className="border-[0.6px] border-[#D5D5D5] p-3 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label
                  htmlFor="review"
                  className="text-[#606060] font-semibold"
                >
                  Review
                </label>
                <textarea
                  rows={4}
                  {...register("review")}
                  className="border-[0.6px] border-[#D5D5D5] p-3 outline-none rounded text-[#A6A6A6] bg-[#F5F6FA]"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm ">
                <label className="text-[#606060] font-semibold">Ratings</label>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <Image
                        key={index}
                        src={starValue <= rating ? StarOn : StarOff}
                        alt="StarOff"
                        width={20}
                        height={20}
                        onClick={() => handleStarClick(starValue)}
                        className="cursor-pointer"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20 flex justify-center">
              <AlertDialogAction
                type="submit"
                className="text-white text-xs sm:text-sm w-[50%] md:w-[35%] bg-[#4880FF] px-4 py-2 rounded-[6px]"
              >
                Add Ratings
              </AlertDialogAction>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddReview;

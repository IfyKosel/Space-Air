import Image from "next/image";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Jacob from "@/app/(analytics)/mySite/assets/Jacob.svg";
import StarOn from "@/app/(analytics)/mySite/assets/StarOn.svg";
import Edit from "@/app/(analytics)/mySite/assets/Edit.svg";
import Delete from "@/app/(analytics)/mySite/assets/Delete.svg";
import AddReview from "../AddReview/AddReview";
import { ReviewDetailsProps } from "@/types/types";

type Props = {};

const Reviews = (props: Props) => {
  const { register, handleSubmit, reset, getValues } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    console.log(formData);
    // console.log(data);
    reset();
  };

  const reviewDetails: ReviewDetailsProps[] = [
    {
      photo: Jacob,
      name: "Carolyn Jacobson",
      country: "Brazil",
      review:
        "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a",
      ratings: 5,
    },
    {
      photo: Jacob,
      name: "Carolyn Jacobson",
      country: "Brazil",
      review:
        "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a",
      ratings: 5,
    },
    {
      photo: Jacob,
      name: "Carolyn Jacobson",
      country: "Brazil",
      review:
        "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a",
      ratings: 5,
    },
    {
      photo: Jacob,
      name: "Carolyn Jacobson",
      country: "Brazil",
      review:
        "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a",
      ratings: 5,
    },
  ];

  return (
    <div>
      <p className="font-bold mb-5">Review</p>
      <form className="flex flex-col gap-8">
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
      </form>
      <div className="mt-9">
        <div className="flex justify-between mb-12">
          <p className="font-bold text-sm sm:text-base">Reviews</p>
          <AddReview />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {reviewDetails.map((item, index) => {
            return (
              <div className="flex gap-2">
                <div className="bg-white rounded-[14px] relative shadow-[3px_3px_26px_0px_rgba(0,0,0,0.16)] py-4 px-1 min-h-[10rem] flex flex-col justify-between gap-5">
                  <Image
                    src={item.photo}
                    alt="Jacob"
                    width={52}
                    height={52}
                    className="rounded-[50%] absolute left-[45%] -top-[36px]"
                  />
                  <p className="text-center text-[#283841] text-xs font-medium mt-1">
                    {item.review}
                  </p>
                  <div className="flex flex-col min-[420px]:flex-row justify-between gap-3">
                    <div className="flex gap-2">
                      {[...Array(item.ratings)].map((_, index) => {
                        return (
                          <Image
                            key={index}
                            src={StarOn}
                            alt="StarOn"
                            width={20}
                            height={20}
                          />
                        );
                      })}
                    </div>
                    <div className="flex flex-col font-sans">
                      <h3 className="text-[#283841] font-bold capitalize ">
                        {item.name}
                      </h3>
                      <p className="text-[#28384199] text-xs capitalize">
                        {item.country}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-[3rem]">
                  <Image src={Edit} alt="Edit" width={18} height={18} />
                  <Image src={Delete} alt="Delete" width={14} height={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

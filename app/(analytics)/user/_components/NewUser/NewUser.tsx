import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import UserInformation from "../UserInformation/UserInformation";
import BookingHistory from "../BookingHistory/BookingHistory";

type Props = {};

const NewUser = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<string>("userInformation");

  const handleClickPage = (item: string) => {
    setSelectedPage(item);
  };
  const pageOption = [
    {
      key: "userInformation",
      page: "User Information",
    },
    {
      key: "bookingHistory",
      page: "Booking History",
    },
  ];

  const stepToRender = (key: string) => {
    switch (key) {
      case "userInformation":
        return <UserInformation />;

      case "bookingHistory":
        return <BookingHistory />;
      default:
        break;
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-fit h-full text-center text-white bg-[#4880FF] outline-none font-nunito text-sm rounded-[6px]">
          New User
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[600px]">
        <div className="bg-[#03C3F814] p-5 flex justify-between items-center">
          <div className="flex gap-5">
            {pageOption.map(({ key, page }) => {
              const isActive = selectedPage === key;
              return (
                <span
                  onClick={() => handleClickPage(key)}
                  key={key}
                  className={`text-[#333333] text-xl font-avant cursor-pointer ${
                    isActive && "font-bold underline"
                  }`}
                >
                  {page}
                </span>
              );
            })}
          </div>
          <AlertDialogCancel className="px-1 py-0 h-fit font-bold border-none hover:outline rounded-[3px] leading-4">
            x
          </AlertDialogCancel>
        </div>
        <div className="h-[70vh] overflow-y-scroll py-5">
          {stepToRender(selectedPage)}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewUser;

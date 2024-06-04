import Export from "@/components/Export/Export";
import Filters from "@/components/Filters/Filters";
import React from "react";
import { bookingsRow } from "@/Utils/constant";
import { bookingsCol } from "@/components/Table/columns";
import DataTable from "@/components/Table/DataTable";
import NewBooking from "../NewBooking/NewBooking";
import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};

const BookingsInitial = ({ onClick }: Props) => {
  const bookingsFilters = [
    { id: 1, name: "date" },
    { id: 4, name: "cabin" },
    { id: 5, name: "flight" },
    { id: 6, name: "payment" },
  ];

  return (
    <div className="py-6 px-4 text-[#202224] text-sm font-nunito">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">Bookings</h1>

        <div className="flex justify-between w-full lg:items-center h-fit gap-8">
          <Filters defaultFilters={bookingsFilters} />
          <div className="flex flex-col sm:flex-row flex-wrap justify-end w-fit h-full gap-2 border border-transparent">
            <Export />
            <Button
              onClick={onClick}
              className="w-fit h-12 md:h-16 text-xs sm:text-sm text-center text-white bg-[#4880FF] outline-none font-nunito rounded-[6px]"
            >
              New Booking
            </Button>
          </div>
        </div>

        <div className="bg-white min-h-[40rem] rounded-br-xl rounded-bl-xl">
          <DataTable columns={bookingsCol} data={bookingsRow} />
        </div>
      </div>
    </div>
  );
};

export default BookingsInitial;

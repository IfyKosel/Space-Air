import Cabin from "@/components/Filters/Cabin/Cabin";
import Flight from "@/components/Filters/Flight/Flight";
import Payment from "@/components/Filters/Payment/Payment";
import React from "react";

type Props = {};

const Bookings = (props: Props) => {
  return (
    <div>
      Bookings page
      <Cabin />
      <Flight />
      <Payment />
    </div>
  );
};

export default Bookings;

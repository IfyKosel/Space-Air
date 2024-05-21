import Cabin from "@/components/Filters/Cabin/Cabin";
import Flight from "@/components/Filters/Flight/Flight";
import React from "react";

type Props = {};

const Bookings = (props: Props) => {
  return (
    <div>
      Bookings page
      <Cabin />
      <Flight />
    </div>
  );
};

export default Bookings;

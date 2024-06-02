"use client";
import React, { useState } from "react";
import BookingsInitial from "./_components/BookingsInitial/BookingsInitial";
import NewBooking from "./_components/NewBooking/NewBooking";
import BookingPayment from "./_components/BookingPayment/BookingPayment";

type Props = {};

const Bookings = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<string>("newBooking");

  const handleClickPage = (item: string) => {
    setSelectedPage(item);
  };
  const pageOption = [
    {
      key: "bookingsInitial",
      page: "User Information",
    },
    {
      key: "newBooking",
      page: "Booking History",
    },
  ];

  const stepToRender = (key: string) => {
    switch (key) {
      case "bookingsInitial":
        return <BookingsInitial />;
      case "newBooking":
        return <NewBooking />;
      case "bookingPayment":
        return <BookingPayment />;
      default:
        break;
    }
  };
  return <div>{stepToRender(selectedPage)}</div>;
};

export default Bookings;

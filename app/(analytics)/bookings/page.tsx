// export function useStep(steps: ReactElement[]) {
//   const [currentStep, setCurrentStep] = useState(0);

//   function next() {
//     setCurrentStep((i) => {
//       if (i >= steps.length - 1) return i;
//       return i + 1;
//     });
//   }

//   function back() {
//     setCurrentStep((i) => {
//       if (i <= 0) return i;
//       return i - 1;
//     });
//   }

//   function goTo(index: number) {
//     setCurrentStep(index);
//   }

//   return {
//     currentStep,
//     step: steps[currentStep],
//     goTo,
//     next,
//     back,
//   };
// }

"use client";
import React, { ReactElement, useState } from "react";
import BookingsInitial from "./_components/BookingsInitial/BookingsInitial";
import NewBooking from "./_components/NewBooking/NewBooking";
import BookingPayment from "./_components/BookingPayment/BookingPayment";

type Props = {};

const Bookings = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<string>("bookingsInitial");

  const handleNewBookingButton = () => {
    setSelectedPage("newBooking");
  };

  const handleBookFlight = () => {
    setSelectedPage("bookingPayment");
  };

  const stepToRender = (key: string) => {
    switch (key) {
      case "bookingsInitial":
        return <BookingsInitial onClick={handleNewBookingButton} />;
      case "newBooking":
        return <NewBooking onClick={handleBookFlight} />;
      case "bookingPayment":
        return <BookingPayment />;
      default:
        break;
    }
  };
  return <div>{stepToRender(selectedPage)}</div>;
};

export default Bookings;

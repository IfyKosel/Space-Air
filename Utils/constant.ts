import { AvailableFlightProps } from "@/types/types";

export const dashboardRow = [
	{
	bookingId: "892736120",
	departure: "LOC, 12th May 2024 - 13:00",
	destination: "NIA, 12th May 2024 - 15:30",
	pas: 3,
	trip: "Round-Trip",
	cabin: "Economy, Business",
	payment: "Confirmed",
	},
	{
	bookingId: "892736120",
	departure: "LOC, 12th May 2024 - 13:00",
	destination: "NIA, 12th May 2024 - 15:30",
	pas: 5,
	trip: "One-way",
	cabin: "Economy, Business",
	payment: "Pending",
	},
	{
	bookingId: "892736120",
	departure: "LOC, 12th May 2024 - 13:00",
	destination: "NIA, 12th May 2024 - 15:30",
	pas: 2,
	trip: "Round-Trip",
	cabin: "Economy, Business",
	payment: "Cancelled",
	},
]

export const userRow = [
	{
	date: "12:30PM 12-03-2024",
	userID: "892736120",
	firstName: "Joe",
	lastName: "Milikili",
	phone: "08023121314",
	email: "joedoe@gmail.com",
	bookings: "8",
	},
	{
	date: "12:30PM 12-03-2024",
	userID: "892736120",
	firstName: "Joe",
	lastName: "Milikili",
	phone: "08023121314",
	email: "joedoe@gmail.com",
	bookings: "8",
	},
	{
	date: "12:30PM 12-03-2024",
	userID: "892736120",
	firstName: "Joe",
	lastName: "Milikili",
	phone: "08023121314",
	email: "joedoe@gmail.com",
	bookings: "8",
	},
]

export const bookingsRow = [
	{
	bookingDate: "12:30PM 12-03-2024",
	bookingId: "892736120",
	departure: "LOC, 12th May 2024 - 13:00",
	destination: "NIA, 12th May 2024 - 15:30",
	pas: 3,
	trip: "Round-Trip",
	cabin: "Economy, Business",
	payment: "Confirmed",
	bookingStatus: "a"
	},
	{
	bookingDate: "12:30PM 12-03-2024",
	bookingId: "892736120",
	departure: "LOC, 12th May 2024 - 13:00",
	destination: "NIA, 12th May 2024 - 15:30",
	pas: 5,
	trip: "One-way",
	cabin: "Economy, Business",
	payment: "Pending",
	bookingStatus: "a"
	},
	{
	bookingDate: "12:30PM 12-03-2024",
	bookingId: "892736120",
	departure: "LOC, 12th May 2024 - 13:00",
	destination: "NIA, 12th May 2024 - 15:30",
	pas: 2,
	trip: "Round-Trip",
	cabin: "Economy, Business",
	payment: "Cancelled",
	bookingStatus: "a"
	},
]

export const availableFlight: AvailableFlightProps = [
    {
      id: "1",
      airline: "Arik Air",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai(DXB)",
      estimatedTime: "01:20 mins",
      desc: "20kg",
      price: "₦",
      reservationNumber: "123456",
      ticketNumber: "123456789123",
      bookingDate: "Saturday, August 27, 2023 Sep 18",
      flightTime: "15:30",
      status: "Confirmed",
    },
    {
      id: "2",
      airline: "Fly Emirates",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg",
      price: "₦",
      reservationNumber: "123456",
      ticketNumber: "123456789123",
      bookingDate: "Saturday, August 27, 2023 Sep 18",
      flightTime: "15:30",
      status: "Confirmed",
    },
    {
      id: "3",
      airline: "quartar Airways",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg",
      price: "₦",
      reservationNumber: "123456",
      ticketNumber: "123456789123",
      bookingDate: "Saturday, August 27, 2023 Sep 18",
      flightTime: "15:30",
      status: "Confirmed",
    },
  ];

  
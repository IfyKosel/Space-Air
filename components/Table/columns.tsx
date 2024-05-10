"use client";
import { DashboardRowProps } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import Menu from "@/components/Table/assest/menu.svg";

export const dashboardCol: ColumnDef<DashboardRowProps>[] = [
  {
    header: "Booking ID",
    accessorKey: "bookingId",
    cell: ({ row }) => <div className="">{row.getValue("bookingId")}</div>,
  },
  {
    header: "Departure",
    accessorKey: "departure",
    cell: ({ row }) => <div className="">{row.getValue("departure")}</div>,
  },
  {
    header: "Destination",
    accessorKey: "destination",
    cell: ({ row }) => <div className="">{row.getValue("destination")}</div>,
  },
  {
    header: () => (
      <div className="text-start w-9 text-ellipsis overflow-hidden capitalize">
        passs
      </div>
    ),
    accessorKey: "pas",
    cell: ({ row }) => {
      const number = parseFloat(row.getValue("pas"));
      const formatted = new Intl.NumberFormat("en-US").format(number);
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    header: "Trip",
    accessorKey: "trip",
    cell: ({ row }) => <div className="capitalize">{row.getValue("trip")}</div>,
  },
  {
    header: "Cabin",
    accessorKey: "cabin",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("cabin")}</div>
    ),
  },
  {
    header: "Payment",
    accessorKey: "payment",
    cell: ({ row }) => (
      <div className="capitalize">
        <button
          type="button"
          className="bg-[#00B69B] text-white w-[7rem] py-[6px] rounded-[20px]"
        >
          {row.getValue("payment")}
        </button>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Image src={Menu} alt="Menu" className="w-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.bookingId)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

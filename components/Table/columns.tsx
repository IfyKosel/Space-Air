"use client";
import {
  DashboardRowProps,
  UserRowProps,
  BookingsRowProps,
} from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import {
  BookingsDropdown,
  DashboardDropdown,
  RolesPermissionDropdown,
  UserDropdown,
} from "../Dropdown/Dropdown";
import EditUser from "@/app/(analytics)/roles&permission/_components/EditUser/EditUser";

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

      return <DashboardDropdown />;
    },
  },
];

export const userCol: ColumnDef<UserRowProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ row }) => <div className="">{row.getValue("date")}</div>,
  },
  {
    header: "User ID",
    accessorKey: "userID",
    cell: ({ row }) => <div className="">{row.getValue("userID")}</div>,
  },
  {
    header: "First Name",
    accessorKey: "firstName",
    cell: ({ row }) => <div className="">{row.getValue("firstName")}</div>,
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
  },
  {
    header: "Phone Number",
    accessorKey: "phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    header: "Bookings",
    accessorKey: "bookings",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bookings")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div>
          <UserDropdown />
        </div>
      );
    },
  },
];

export const bookingsCol: ColumnDef<BookingsRowProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Booking Date",
    accessorKey: "bookingDate",
    cell: ({ row }) => <div className="">{row.getValue("bookingDate")}</div>,
  },
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
    header: () => (
      <div className="flex text-center w-[6rem]">Payment Status</div>
    ),
    accessorKey: "payment",
    cell: ({ row }) => (
      <div className="capitalize">
        <button
          type="button"
          className="bg-[#00B69B] text-white w-[6.5rem] py-[6px] rounded-[20px]"
        >
          {row.getValue("payment")}
        </button>
      </div>
    ),
  },
  {
    header: () => (
      <div className="flex text-center w-[3rem]">Booking Status</div>
    ),
    accessorKey: "bookingStatus",
    cell: ({ row }) => (
      <div className="capitalize flex justify-center w-full">
        <button
          type="button"
          disabled
          className="bg-[#00B69B] text-white w-4 h-4 rounded-[50%] relative"
        >
          <span className="sr-only">{row.getValue("bookingStatus")}</span>
        </button>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return <BookingsDropdown />;
    },
  },
];

export const RolesPermissionCol: ColumnDef<UserRowProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ row }) => <div className="">{row.getValue("date")}</div>,
  },
  {
    header: "User ID",
    accessorKey: "userID",
    cell: ({ row }) => <div className="">{row.getValue("userID")}</div>,
  },
  {
    header: "First Name",
    accessorKey: "firstName",
    cell: ({ row }) => <div className="">{row.getValue("firstName")}</div>,
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
  },
  {
    header: "Phone Number",
    accessorKey: "phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    header: "Bookings",
    accessorKey: "bookings",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bookings")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      //   function onClickView(): void {
      // 	return <EditUser />;
      //   }

      return <RolesPermissionDropdown />;
    },
  },
];

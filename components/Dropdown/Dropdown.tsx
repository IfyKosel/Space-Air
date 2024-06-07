"use client";
import React, { useState } from "react";
import Image from "next/image";
import Menu from "@/components/Table/assest/menu.svg";

export const DashboardDropdown = () => {
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDashboardDropdown(!showDashboardDropdown)}
        className="h-8 w-8 p-0 outline-none"
      >
        <span className="sr-only">Open menu</span>
        <Image src={Menu} alt="Menu" className="w-auto" />
      </button>
      {showDashboardDropdown && (
        <div className="bg-white rounded-[6px] p-4 absolute z-[100] right-4 w-24 shadow-[0_3px_6px_rgba(0,0,0,0.15)]">
          <ul className="flex flex-col gap-4">
            <li>View</li>
            <li>Delete</li>
            <li>Block</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const BookingsDropdown = () => {
  const [showBookingsDropdown, setShowBookingsDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowBookingsDropdown(!showBookingsDropdown)}
        className="h-8 w-8 p-0 outline-none"
      >
        <span className="sr-only">Open menu</span>
        <Image src={Menu} alt="Menu" className="w-auto" />
      </button>
      {showBookingsDropdown && (
        <div className="bg-white rounded-[6px] p-4 absolute z-[100] right-4 w-24 shadow-[0_3px_6px_rgba(0,0,0,0.15)]">
          <ul className="flex flex-col gap-4">
            <li>View</li>
            <li>Delete</li>
            <li>Block</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const UserDropdown = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowUserDropdown(!showUserDropdown)}
        className="h-8 w-8 p-0 outline-none"
      >
        <span className="sr-only">Open menu</span>
        <Image src={Menu} alt="Menu" className="w-auto" />
      </button>
      {showUserDropdown && (
        <div className="bg-white rounded-[6px] p-4 absolute z-[100] right-4 w-24 shadow-[0_3px_6px_rgba(0,0,0,0.15)]">
          <ul className="flex flex-col gap-4">
            <li>View</li>
            <li>Delete</li>
            <li>Block</li>
          </ul>
        </div>
      )}
    </div>
  );
};

// type Props = {
// 	onClickView: () => void
// }
export const RolesPermissionDropdown = ({ onClickView }: any) => {
  const [showRolesPermissionDropdown, setShowRolesPermissionDropdown] =
    useState(false);

  return (
    <div className="relative">
      <button
        onClick={() =>
          setShowRolesPermissionDropdown(!showRolesPermissionDropdown)
        }
        className="h-8 w-8 p-0 outline-none"
      >
        <span className="sr-only">Open menu</span>
        <Image src={Menu} alt="Menu" className="w-auto" />
      </button>
      {showRolesPermissionDropdown && (
        <div className="bg-white rounded-[6px] p-4 absolute z-[100] right-4 w-24 shadow-[0_3px_6px_rgba(0,0,0,0.15)]">
          <ul className="flex flex-col gap-4">
            <li onClick={onClickView}>View</li>
            <li>Delete</li>
            <li>Block</li>
          </ul>
        </div>
      )}
    </div>
  );
};

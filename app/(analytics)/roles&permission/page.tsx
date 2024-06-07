"use client";
import React, { useState } from "react";
import AddUser from "./_components/AddUser/AddUser";
import RolesInitial from "./_components/RolesInitial/RolesInitial";
import EditUser from "./_components/EditUser/EditUser";

type Props = {};

const RolesPermisssion = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<string>("rolesInitial");

  const openNewUser = () => {
    setSelectedPage("addUser");
  };

  const handleDelete = () => {
    setSelectedPage("bookingPayment");
  };

  const stepToRender = (key: string) => {
    switch (key) {
      case "rolesInitial":
        return <RolesInitial onClick={openNewUser} />;
      case "addUser":
        return <AddUser />;
      case "editUser":
        return <EditUser />;
      default:
        break;
    }
  };

  return <div className="py-6 px-4">{stepToRender(selectedPage)}</div>;
};

export default RolesPermisssion;

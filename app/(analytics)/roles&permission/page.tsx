import React from "react";
import AddUser from "./_components/AddUser/AddUser";

type Props = {};

const RolesPermisssion = (props: Props) => {
  return (
    <div className="p-5">
      Roles and Permisssion page
      <AddUser />
    </div>
  );
};

export default RolesPermisssion;

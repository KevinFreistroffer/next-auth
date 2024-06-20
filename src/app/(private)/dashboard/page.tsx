import React from "react";
import { logout } from "../../auth/auth";
import LogoutButton from "./logout";

const Dashboard: React.FC = async () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Add your dashboard content here */}
      <LogoutButton />
    </div>
  );
};

export default Dashboard;

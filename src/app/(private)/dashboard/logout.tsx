"use client";

import React from "react";
import { logout } from "../../auth/auth";

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    // Add your logout logic here
    // For example, you can clear the user session or redirect to a login page
  };

  return <button onClick={async () => await logout()}>Log out</button>;
};

export default LogoutButton;

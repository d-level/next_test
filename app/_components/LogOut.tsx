"use client";

import {signOut} from "next-auth/react";

import "@/styles/_components/LogOut.css"

export default function LogOut() {
  async function handleLogOut() {
    await signOut({
      redirectTo: "/login",
    });
  }

  return (
    <button className="logOut" onClick={handleLogOut}>
      {/* <i className="pi pi-sign-out logOut__icon"></i> */}

      Se déconnecter
    </button>
  );
}
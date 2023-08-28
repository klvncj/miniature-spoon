"use client";
import { SignUp } from "@/components/SignUp";
import React from "react";
const user = {
  name: "Kelvin Chijioke",
  email: "ckelvin196gmail.com",
  seller: false,
};
function page() {
  return <>{user.seller ? <span>Kelvin</span> : <SignUp />}</>;
}

export default page;

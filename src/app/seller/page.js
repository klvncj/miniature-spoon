"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Seller from "./Seller";
const user = {
  name: "Kelvin Chijioke",
  email: "ckelvin196gmail.com",
  seller: true,
};
function Page() {
  const router = useRouter();
  return <>{user.seller ? <Seller/>: [router.push("/signup")]}</>;
}

export default Page;

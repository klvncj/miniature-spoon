"use client";
import React from "react";
import { useRouter } from "next/navigation";
const user = {
  name: "Kelvin Chijioke",
  email: "ckelvin196gmail.com",
  seller: false,
};
function Page() {
  const router = useRouter();
  return <>{user.seller ? <span>Kelvin</span> : [router.push("/signup")]}</>;
}

export default Page;

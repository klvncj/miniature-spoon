"use client";
import React from "react";
import ProfileNav from "./ProfileNav";
import { Breadcrumbs } from "@material-tailwind/react";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <ProfileNav />
      <Breadcrumbs className="bg-white">
        <a href="/" className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <a href="/profile" className="opacity-60">
          <span>Profile</span>
        </a>
      </Breadcrumbs>
      <main>
        {/* contain the update data info thr user info 
         if the user is a verified seller there would be a verified seller badge next to thne users name 
          then a link for the users to go and view their listings or create a new one */}
      </main>
      <Footer />
    </>
  );
}

export default page;

"use-client";
import React from "react";
import Image from "next/image";
import logo from "../asset/images//png-transparent-airbnb-logo-san-francisco-travel-hotel-airbnb-logo-text-trademark-logo-removebg-preview.png";
import { HiSearch } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { TbHomePlus } from "react-icons/tb";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between md:grid md:grid-cols-3  bg-white shadow-md p-3 md:px-10">
      {/* Left  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          alt="logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center border-2 py-2 px-4 rounded-lg gap-2">
        <input
          type="text"
          placeholder="search"
          className="outline-none text-black text-lg flex-grow w-[100%]"
        />
        <span className="hidden md:flex items-center cursor-pointer bg-[#252525] p-2 rounded-full">
          <HiSearch size={20} color="white" />
        </span>
      </div>
      {/* Right  */}
      <div className="text-black flex items-center justify-end space-x-4">
        <div className="hidden justify-center items-center gap-4 md:flex">
          <Icon icon={<TbHomePlus size={28} />} />
          <Icon icon={<BiSolidUserCircle size={35} />} />
        </div>
        <div className="flex md:hidden">
          <Icon icon={<BiMenu size={28} />} />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Icon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

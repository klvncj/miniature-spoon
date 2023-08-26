import React from "react";
import FlatList from "./FlatList";
import { MdApartment, MdMeetingRoom } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { RiBuilding2Fill } from "react-icons/ri";
import Listing from "./Listing";

const item = [
  { name: "Apartments", icon: <MdApartment size={28} /> },
  { name: "Home", icon: <BiBuildings size={28} /> },
  { name: "Lodge", icon: <BsBuilding size={28} /> },
  { name: "Quaters", icon: <RiBuilding2Fill size={28} /> },
  { name: "Rooms", icon: <MdMeetingRoom size={28} /> },
];
const Banner = () => {
  return (
    <>
      <FlatList items={item} />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-3">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </main>
    </>
  );
};

export default Banner;

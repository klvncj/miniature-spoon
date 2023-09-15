import React from "react";
import FlatList from "./FlatList";
import { MdApartment, MdMeetingRoom } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { Carousel } from "@material-tailwind/react";
import { RiBuilding2Fill } from "react-icons/ri";
import Listing from "./Listing";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
const item = [
  { name: "Apartments", icon: <MdApartment size={28} /> },
  { name: "Home", icon: <BiBuildings size={28} /> },
  { name: "Lodge", icon: <BsBuilding size={28} /> },
  { name: "Quaters", icon: <RiBuilding2Fill size={28} /> },
  { name: "Rooms", icon: <MdMeetingRoom size={28} /> },
];
const Content = () => {
  const rooms = [
    {
      title: "Room To Rent Pay Yearly",
      location: "ifite",
      price: 1000000,
      rating: 4.5,
      seller: "Kelvin",
    },
    {
      title: "Room To Rent Pay Yearly",
      location: "ifite",
      price: 1000000,
      rating: 4.5,
      seller: "Kelvin",
    },
    {
      title: "Room To Rent Pay Yearly",
      location: "ifite",
      price: 1000000,
      rating: 4.5,
      seller: "Kelvin",
    },
    {
      title: "Room To Rent Pay Yearly",
      location: "ifite",
      price: 1000000,
      rating: 4.5,
      seller: "Kelvin",
    },
  ];
  const data = [
    {
      label: "Apartments",
      value: "apartment",
      icon: <MdApartment size={28} />,
      desc: (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-3">
          <Listing location="Apartment" />
          <Listing location="Apartment" />
          <Listing location="Apartment" />
          <Listing location="Apartment" />
        </main>
      ),
    },
    {
      label: "Home",
      value: "home",
      icon: <BiBuildings size={28} />,
      desc: (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-3">
          <Listing location="Home" />
          <Listing location="Home" />
          <Listing location="Home" />
          <Listing location="Home" />
        </main>
      ),
    },

    {
      label: "Lodge",
      value: "lodge",
      icon: <BsBuilding size={28} />,
      desc: (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-3">
          <Listing location="Lodge" />
          <Listing location="Lodge" />
          <Listing location="Lodge" />
          <Listing location="Lodge" />
        </main>
      ),
    },

    {
      label: "Quaters",
      value: "quaters",
      icon: <RiBuilding2Fill size={28} />,
      desc: (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-3">
          <Listing location="Quaters" />
          <Listing location="Quaters" />
          <Listing location="Quaters" />
          <Listing location="Quaters" />
        </main>
      ),
    },

    {
      label: "Rooms",
      value: "rooms",
      icon: <MdMeetingRoom size={28} />,
      desc: (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-3">
          {rooms.map((room, index) => (
            <Listing
              key={index}
              title={room.title}
              location={room.location}
              price={room.price}
              rating={room.rating}
              seller={room.seller}
            />
          ))}
        </main>
      ),
    },
  ];

  return (
    <>
      <Tabs id="custom-animation" value="apartment">
        <TabsHeader className="overflow-x-scroll no-scrollbar">
          {data.map(({ label, icon, value }) => (
            <Tab key={value} value={value}>
              {/* <FlatList items={item} /> */}
              <span
                key={value}
                className="flex items-center justify-center flex-col p-4 bg-transparent rounded-lg md:rounded-md  cursor-pointer"
              >
                <span>{icon}</span>
                <span className="font-mono font-bold mb-0">{label}</span>
              </span>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default Content;

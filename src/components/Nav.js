import React from "react";
import Image from "next/image";
import logo from "../asset/images//png-transparent-airbnb-logo-san-francisco-travel-hotel-airbnb-logo-text-trademark-logo-removebg-preview.png";
import { HiSearch, HiInbox } from "react-icons/hi";
import { HiInboxArrowDown } from "react-icons/hi2";
const { BiSolidHelpCircle, BiUserPlus, BiLockAlt } = require("react-icons/bi");

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { ImUsers } from "react-icons/im";
import { BiMenu } from "react-icons/bi";
import {} from "@material-tailwind/react";
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function Nav() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  let user = true;
  return (
    <>
      <nav className="sticky top-0  flex justify-between  p-2 mx-auto z-50 shadow-md bg-white">
        {/* Logo  */}
        <div className="flex justify-start mx-2">
          <Image src={logo} alt="logo" width={90} objectFit="contain" />
        </div>
        {/* Search  */}
        <div className="hidden md:flex items-center justify-center rounded-md p-2 w-[60vh]">
          <Input
            label="Search"
            className="outline-none w-[100%]"
            type="text"
            icon={
              <HiSearch
                onClick={() => {
                  console.log("Search....");
                }}
              />
            }
          />
        </div>
        {/* Mobile Search  */}
        <div className="flex items-center justify-center mx-auto md:hidden z-50 col-span-2">
          <Input
            label="Search"
            icon={
              <HiSearch
                onClick={() => {
                  console.log("Search Mobile...");
                }}
              />
            }
          />
        </div>
        {/* Profile  */}
        <div className="hidden md:flex justify-end">
          <menu handler={<BiMenu />} />
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <ProfileMenu />
            ) : (
              <Chip className=" flex items-center mr-4" value="Guest" />
            )}
          </div>
        </div>
        {/* Menu Bar For Mobile  */}
        <div className="flex items-center md:hidden justify-end z-50 mr-2">
          <Menu>
            <MenuHandler>
              <BiMenu size={25} />
            </MenuHandler>
            <MenuList className="mt-[4.2rem] ml-60 fixed z-40">
              {user ? (
                <>
                  <MenuItem className="flex items-center gap-2 ">
                    <Avatar
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="avatar"
                      size="sm"
                    />
                    <Typography variant="small" className="font-normal">
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <HiInboxArrowDown />
                    <Typography variant="small" className="font-normal">
                      Inbox
                    </Typography>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem className="flex items-center gap-2">
                    <BiUserPlus />
                    <Typography variant="small" className="font-normal">
                      Sign Up
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <BiLockAlt />
                    <Typography variant="small" className="font-normal">
                      Login
                    </Typography>
                  </MenuItem>
                </>
              )}
              <hr className="my-2 border-blue-gray-50" />
              <MenuItem className="flex items-center gap-2">
                <BiSolidHelpCircle size={20} />
                <Typography variant="small" className="font-normal">
                  Help
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </>
  );
}

export default Nav;

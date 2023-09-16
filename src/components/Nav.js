import React from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import logo from "../asset/images//png-transparent-airbnb-logo-san-francisco-travel-hotel-airbnb-logo-text-trademark-logo-removebg-preview.png";
import { HiSearch } from "react-icons/hi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { useRouter } from "next/navigation";
const { BiSolidHelpCircle, BiUserPlus, BiLockAlt } = require("react-icons/bi");
import { FiLogOut } from "react-icons/fi";
import { Auth } from "firebase/auth";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { BiMenu } from "react-icons/bi";
import { BsFillHouseAddFill } from "react-icons/bs";
import Link from "next/link";
import { signOut, signInAnonymously } from "firebase/auth";
import { auth } from "@/config/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "@/app/context/Context";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    link: "profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    link: "profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    link: "contact",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    link: "help",
    icon: LifebuoyIcon,
  },
];

const logout = async () => {
  try {
    await signOut(auth);
    toast.info("Logged Out");
  } catch (error) {
    console.error(error);
  }
};
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
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem key={label} onClick={closeMenu}>
              <a href={`/${link}`} className="flex items-center gap-2 rounded">
                {React.createElement(icon, {
                  className: `h-4 w-4 `,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={"inherit"}
                >
                  {label}
                </Typography>
              </a>
            </MenuItem>
          );
        })}
        <MenuItem
          className="flex items-center gap-2 rounded"
          onClick={() => {
            logout;
          }}
        >
          {React.createElement(PowerIcon, {
            className: `h-4 w-4 `,
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={"inherit"}
          >
            SignOut
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
const user = true;
function Nav({}) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const signinGuest = async () => {
    try {
      const guest = await signInAnonymously(auth);

      toast.success("Signed In");
    } catch {
      toast.error("Sign in failed");
    }
  };

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  const router = useRouter();
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
                className="cursor-pointer"
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
                className="cursor-pointer"
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
              <>
                <ProfileMenu />
              </>
            ) : (
              <>
                <a href="/seller">
                  <Chip
                    value="Become a seller"
                    variant="ghost"
                    color="teal"
                    className="flex items-center"
                  />
                </a>
                <Chip
                  className=" flex items-center mr-4 cursor-pointer"
                  value="Guest"
                  onClick={signinGuest}
                />
              </>
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
                      <a href="/profile" className="opacity-60">
                        <span>Profile</span>
                      </a>
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <HiInboxArrowDown />
                    <Typography variant="small" className="font-normal">
                      Inbox
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    className="flex items-center gap-2"
                    onClick={logout}
                  >
                    <FiLogOut />
                    logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem className="flex items-center gap-2">
                    <Link className="flex items-center gap-2" href="/signup">
                      <BiUserPlus />
                      <Typography variant="small" className="font-normal">
                        Sign Up
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <a href="/login" className="flex items-center gap-2">
                      <BiLockAlt />
                      <Typography variant="small" className="font-normal">
                        Login
                      </Typography>
                    </a>
                  </MenuItem>
                </>
              )}
              <MenuItem className="flex items-center gap-2">
                <BsFillHouseAddFill />
                <Typography varient="h6" className="font-normal">
                  Become A Seller
                </Typography>
              </MenuItem>
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
      <ToastContainer />
    </>
  );
}

export default Nav;

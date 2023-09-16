import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
const user = false;

function ProfileNav() {
  return (
    <header>
      <nav className="flex items-center justify-between px-auto h-16  shadow-md">
        <div className="flex mx-4 items-center">
          <Image src="" alt="Logo" objectFit="contain" />
        </div>
        <div className="flex items-center justify-around mx-4 md:w-56 w-auto gap-3">
          {user ? user.Displayname : "User Not Found"}
          <div>
            <FaUser />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ProfileNav;

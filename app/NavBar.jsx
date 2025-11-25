import React from "react";
import logo from "../public/Logo.png";
import Image from "next/image";
import profile from "../public/Profile.png";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMicrophoneOn, CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div>
      <div className="flex gap-8 justify-between px-7 py-4 h-24 items-center">
        <div className="flex w-[330px] h-12">
          <Image src={logo} alt="logo" width={150} />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex text-gray-400 gap-[47px]">
          <div className="hover:border rounded-2xl bg-gray-100 flex items-center justify-center px-2">
            <CiSearch className="text-2xl text-gray-500" />
            <input type="text" className="outline-none w-[300px] h-12 p-4" />
            <CiMicrophoneOn className="text-2xl"/>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <LuSquareArrowOutUpRight />
            <p>Browse</p>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="flex items-center gap-12 text-gray-500">
          <TiMessages className="text-2xl" />
          <IoNotificationsOutline className="text-2xl" />
          <div className="h-12 w-12">
            <Image src={profile} alt="person" width={100} height={100} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

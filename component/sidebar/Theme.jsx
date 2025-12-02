import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { MdOutlineWbSunny } from "react-icons/md";

const Theme = () => {
  return (
    <div className="bg-[#E8EDF2] w-[206px] h-[53px] grid grid-cols-3 rounded-2xl">
      <div className="  pt-4  pl-[19px] col-span-2">
        <div className=" flex gap-1 border-r-2 border-white">
          <IoMoonOutline className="text-[#C6CBD9] w-4 h-4" />
          <div className="bg-[#C6CBD9] w-12 h-4 rounded-xl flex items-center justify-end">
            <button className="bg-[#7364DB] w-6 h-6 rounded-full"></button>
          </div>
          <MdOutlineWbSunny className="text-[#EC8C56] w-4 h-4" />
        </div>
      </div>
      <div className=" pt-4 pl-[19px] text-[#7E7E8F]">
        <LiaExpandArrowsAltSolid />
      </div>
    </div>
  );
};

export default Theme;

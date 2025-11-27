import Image from "next/image";
import React from "react";
import icon from "@/public/icons.png"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Card = () => {
  return (

      <div className="w-[265px] rounded-2xl bg-white p-4">
        <div className="text-[12px] font-normal pb-6 text-[#9A9AAF] flex justify-between">
          Total sells
          <HiOutlineDotsVertical className="text-sm" />
        </div>
        <div className="flex justify-between pb-3.5">
          <div className="flex items-center gap-2">
            <Image src={icon} alt="icon" className="w-8 h-8" />
            <p className="font-bold text-[16px]">$126.500</p>
          </div>
          <div className="text-[#50D1B2] flex items-center gap-2">
            <LuSquareArrowOutUpRight />
            34.7%
          </div>
        </div>
        <div className="text-[#9A9AAF]">Compared to Jan 2022</div>
      </div>
  );
};

export default Card;

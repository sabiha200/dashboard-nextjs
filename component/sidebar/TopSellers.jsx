import React from "react";
import seller1 from "@/public/img.png";
import seller2 from "@/public/img2.png";
import seller3 from "@/public/img3.png";
import seller4 from "@/public/img4.png";
import Image from "next/image";
import { LuCirclePlus } from "react-icons/lu";

const TopSellers = () => {
  return (
    <div className="py-5 flex flex-col gap-3 border-b-2 border-gray-300">
      <h2 className="text-black font-bold">Top Sellers</h2>
      <div className="flex items-center justify-center pl-16">
        <div className="h-9 w-9 rounded-full bg-[#7364DB] text-center flex items-center justify-center relative">
        <div className="h-9 w-9 absolute top-0 -left-7">
          <div className="h-9 w-9 absolute top-0 -left-7">
            <div className="h-9 w-9 absolute top-0 -left-7">
              <div className="h-9 w-9 absolute top-0 -left-7">
                <Image src={seller1} alt="seller" />
              </div>
              <Image src={seller2} alt="seller" />
            </div>
            <Image src={seller3} alt="seller" />
          </div>
          <Image src={seller4} alt="seller" />
        </div>
        <LuCirclePlus className="text-xl" />
      </div>
      </div>
    </div>
  );
};

export default TopSellers;

import Image from "next/image";
import React from "react";
import image from "@/public/img3.png";

const BestSellers = () => {
  return (
    <div className="bg-white">
      <h1 className="font-semibold text-[16px]">Best Sellers</h1>
      <div className="flex items-center justify-between">
        <div className="flex ">
          <Image src={image} alt="seller" className="w-10 h-10" />
          <div className=" ">
            <h3 className="text-[#07070C] text-sm font-normal">Esther Howard</h3>
            <h3 className="text-[#9A9AAF] font-normal text-[12px]">Louis Vuitton </h3>
          </div>
        </div>

        <div className="">
          <div className="text-[#07070C] text-sm font-semibold">$778.35</div>
          <div className="text-[#9A9AAF] font-normal text-[12px]">1258 sales</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

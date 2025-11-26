import Image from "next/image";
import React from "react";
import sofa from "@/public/sofa.png";
import circles from "@/public/circles.png";
import vector from "@/public/Vector.png";

const Upgrade = () => {
  return (
    <div className="py-9">
      <div className="w-[206px] h-[294px] rounded-xl bg-[#E8EDF2] flex flex-col gap-[21.5px] relative">
        <div className="pt-10 pl-[31px] pr-[49px]">
          <Image src={sofa} alt="image" />
        </div>
        <div className="absolute bottom-28 right-2">
            <Image src={circles} alt="circles"/>
        </div>
        <div className="absolute top-6 left-9">
            <Image src={vector} alt="circles"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p  className="w-36 text-center text-[16px]">
            Unlock more information now by Upgrade to <span className="font-bold">PRO</span>
          </p>
          <div className="bg-[#7364DB] text-white text-sm font-semibold w-[122px] h-9 flex items-center justify-center rounded-lg">Upgrade Now</div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;

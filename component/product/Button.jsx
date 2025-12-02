"use client";
import React, { useState } from "react";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import Breadcramp from "@/component/utils/Breadcramp";
import ProductGridPage from "../../component/product/ProductGrid";
import ProductListPage from "../../component/product/ProductList";

const Button = () => {
  const [showitem, setshowitem] = useState(<ProductListPage />);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 pb-5">
          <h1 className="font-bold text-[28px]">All Products</h1>
          <Breadcramp />
        </div>
        <div className=" flex flex-col">
          <div className="flex bg-gray-50 w-[154px] h-[43px] items-center justify-center ">
            <div
              onClick={() => setshowitem(<ProductListPage />)}
              className="flex items-center justify-center gap-1 text-[#8083A3] hover:bg-[#7364DB] h-[43px] w-[77px] hover:text-white rounded-l-xl"
            >
              {" "}
              <CiGrid2H /> List{" "}
            </div>
            <div
              onClick={() => setshowitem(<ProductGridPage />)}
              className="flex items-center justify-center gap-1  h-[43px] w-[77px] text-[#8083A3] hover:bg-[#7364DB] rounded-r-xl hover:text-white"
            >
              <IoGridOutline /> Grid{" "}
            </div>
          </div>
        </div>
        
      </div>
      <div className=" ">{showitem}</div>
    </div>
  );
};

export default Button;


import React from "react";
import Card from '@/component/dashboard/Card'
import SalesPerformanceCard from '@/component/dashboard/SalesPerformanceCard'
import BestSellers from'@/component/dashboard/BestSellers'

const page = () => {
  return (
    <div className="w-full bg-[#F5F5FA]">
      <div className="py-8 px-7">
        <h1 className="font-bold text-[28px]">Dashboard</h1>
        <div className="flex gap-[24.8px]">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="grid grid-cols-3 pt-6.5 gap-4.5">
          <div className="col-span-2">
            <SalesPerformanceCard/>
          </div>
          <div>
            <BestSellers/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default page;

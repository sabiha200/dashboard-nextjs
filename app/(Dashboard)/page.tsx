import React from "react";
import Breadcramp from "@/component/utils/Breadcramp";
import Card from "@/component/dashboard/Card";
import SalesPerformanceCard from "@/component/dashboard/SalesPerformanceCard";
import BestSellers from "@/component/dashboard/BestSellers";
import RecentPurchases from "@/component/dashboard/Purchaase/RecentParchase";
import MarketOverviewChart from "@/component/dashboard/MarketOverview";
import VisitsBySourceChart from "@/component/dashboard/VisitsBySourceChart";
import TotalRevenueChart from "@/component/dashboard/TotalRevenueChart";
import Footer from "@/app/Footer";

const page = () => {
  return (
    <div className="w-full bg-[#F5F5FA]">
      <div className="py-8 px-7">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[28px]">Dashboard</h1>
          <Breadcramp />
        </div>
        <div className="flex gap-[24.8px] pt-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid grid-cols-3 pt-6.5 gap-4.5">
          <div className="col-span-2">
            <SalesPerformanceCard />
          </div>
          <div>
            <BestSellers />
          </div>
        </div>
        <div className="pt-6.5">
          <RecentPurchases />
        </div>
        <div className="grid grid-cols-3 pt-6.5 gap-12">
          <div>
            <MarketOverviewChart />
          </div>
          <div>
            <VisitsBySourceChart />
          </div>
          <div>
            <TotalRevenueChart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

import DashboardCard from "@/adminComponent/DashboardCard";
import Navbar from "@/adminComponent/Navbar";
import Sidebar from "@/adminComponent/Sidebar";
import React from "react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Page = () => {


  return (
    <div className="w-full flex flex-col relative">
      <div className="fixed z-10 w-full flex justify-center items-center gap-4 h-16 bg-white shadow-md border-b border-gray-300">
        <Navbar />
      </div>
      <div className="relative top-16 w-full flex">
        <div className="flex justify-center items-center gap-4">
          <Sidebar />
        </div>
        <div className="flex justify-start items-start gap-4 p-6">
          <DashboardCard />
        </div>
      </div>
    </div>
  );
};

export default Page;

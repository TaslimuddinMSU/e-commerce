"use client"
import DashboardCard from "@/adminComponent/DashboardCard";
import Navbar from "@/adminComponent/Navbar";
import Sidebar from "@/adminComponent/Sidebar";
import React, { useEffect, useState } from "react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import ProductModal from "./Form/ProductModal";
import Table from "./Table";

const Page = () => {
  useEffect(() => {
    // Safe to access `window` or browser-only stuff here
  }, []);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col relative bg-[#6c757d12] min-h-screen">
      <div className="fixed z-10 w-full flex justify-center items-center gap-4 h-16 bg-white shadow-md border-b border-gray-300">
        <Navbar />
      </div>
      <div className="flex pt-16">
        <Sidebar />
        <div className="w-full flex flex-wrap ml-[12rem] sm:ml-[14rem] p-6">
          <div className="w-full min-h-10 flex justify-between ">
            <span className="text-xl font-bold">All Product</span>
            <button onClick={handleOpenModal}
              className="text-sm bg-transparent hover:bg-blue-500 text-blue-500 font-normal hover:text-white py-2 px-6
             border border-blue-500 hover:border-transparent rounded flex justify-center items-center">
              <span className="text-xl">+</span><span className="ml-1">Add Product</span>
            </button>
          </div>

          <div className="w-[90%] my-4 sm:my-8">
            <Table />
          </div>
        </div>
      </div>
      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Page;

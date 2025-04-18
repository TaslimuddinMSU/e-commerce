"use client"
import Navbar from "@/adminComponent/Navbar";
import Sidebar from "@/adminComponent/Sidebar";
import React, { useEffect, useState } from "react";
import CategoryModal from './Form/CategoryModal';

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
            <span className="text-xl font-bold">Categories</span>
            <button onClick={handleOpenModal}
              className="text-sm bg-transparent hover:bg-blue-500 text-blue-500 font-normal hover:text-white py-2 px-6
             border border-blue-500 hover:border-transparent rounded flex justify-center items-center">
              <span className="text-xl">+</span><span className="ml-1">Add Category</span>
            </button>
          </div>
        </div>
      </div>
      <CategoryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Page;

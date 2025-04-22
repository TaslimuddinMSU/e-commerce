import Link from 'next/link';
import React from 'react';
import {
    FaTachometerAlt,   
    FaListAlt,         
    FaShoppingCart,    
    FaBlog,            
    FaTags,           
    FaUsers,           
    FaCommentDots      
  } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="fixed h-screen bg-white shadow overflow-y-auto w-[16rem]">
            <div className="text-xl font-bold text-green-500 mb-10 px-5 py-6">Organic Food</div>
            <ul className="space-y-4 px-8 mt-18 text-gray-700">
                <li className='flex'>
                    <Link href="/dashboard" className="flex items-center gap-4 hover:text-red-300 transition-colors cursor-pointer">
                       <FaTachometerAlt/><span>Dashboard</span>
                    </Link>
                </li>
                <li className='flex'>
                    <Link href="/dashboard/categories" className="flex items-center gap-4 hover:text-red-300 transition-colors cursor-pointer">
                    <FaListAlt/> <span>Categories</span>
                    </Link>
                </li>
                <li className='flex'>
                    <Link href="/dashboard/all-products" className="flex items-center gap-4 hover:text-red-300 transition-colors cursor-pointer">
                       <FaShoppingCart/> <span>Products</span>
                    </Link>
                </li>
                <li className='flex'>
                    <Link href="/dashboard/all-blogs" className="flex items-center gap-4 hover:text-red-300 transition-colors cursor-pointer">
                       <FaBlog/> <span>Blogs</span>
                    </Link>
                </li >
                <li className='flex'>
                    <Link href="/dashboard/offers" className="flex items-center gap-4 hover:text-red-300 transition-colors cursor-pointer">
                       <FaTags/> <span>Offers</span>
                    </Link>
                </li>
                <li className='flex hover:text-red-300'>
                    <Link href="/dashboard/users" className="flex items-center gap-4 transition-colors cursor-pointer">
                       <FaUsers /> <span>Users</span>
                    </Link>
                </li>
                <li className='flex hover:text-red-300'>
                    <Link href="/dashboard/comments" className="flex items-center gap-4 transition-colors cursor-pointer">
                       <FaCommentDots/> <span>Comments</span>
                    </Link>
                </li>
            </ul>


        </div>
    );
};

export default Sidebar;

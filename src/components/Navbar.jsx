'use client';
import { useState } from 'react';
import { Menu, X, Search,  Bookmark, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import NavLogo from "@/assets/icons/food-icon.png";
import Link from 'next/link';
import {FaShoppingCart, FaUser } from 'react-icons/fa';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-6 sm:px-6 md:px-8 lg:px-10 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Link href= "/" className="text-2xl font-bold flex items-center gap-2">
                    <Image src={NavLogo} alt="Logo" width={50} height={50} />
                    <span className="text-green-500">Organic Foods</span>
                </Link>
            </div>
            <div className='hidden gap-4 sm:flex'>
                <Link href={"/"} className='text-black-500'>HOME</Link>
                <div className="text-black cursor-pointer">PAGES</div>
            </div>
            <div className="hidden md:flex lg:flex flex-grow max-w-xl border rounded-lg overflow-hidden">
                <select className="bg-gray-100 p-3 border-r outline-none hidden lg:flex">
                    <option>All Categories</option>
                </select>
                <input
                    type="text"
                    placeholder="Search for more than 20,000 products"
                    className="flex-grow p-2 outline-none md:w-[80%] lg:w-[100%]"
                />
                <button className="px-3 bg-green-500 text-white">
                    <Search size={20} />
                </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
                <Link href="" className='hover:rounded-[8px] hover:px-3 py-2 hover:border-gray-500 flex gap-2 justify-center items-center border border-transparent'>
                <FaUser size={25} />Taslim
                </Link>
                <Link href=""><Bookmark size={25} /></Link>
                <Link href=""><FaShoppingCart size={25} className='text-yellow'/></Link>
            </div>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-50 
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'} 
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
            transition-all duration-300 ease-in-out lg:hidden`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className={`fixed left-0 top-0 h-full bg-white w-64 
                            shadow-lg transform transition-transform duration-300 ease-in-out`}
                    >
                        <div className='p-4 w-full flex items-center justify-between gap-6'>
                            <span>MENU</span>
                        <button onClick={() => setIsMenuOpen(false)} className=" flex justify-end">
                            <X size={24} />
                        </button>
                        </div>
                        <ul className="px-4 space-y-4 overflow-y-auto h-full">
                            {['Fruits and Vegetables', 'Dairy and Eggs','Fruits and Vegetables', 'Dairy and Eggs',
                             'Meat and Poultry', 'Seafood', 'Bakery and Bread', 'Canned Goods', 'Frozen Foods', 
                             'Pasta and Rice', 'Breakfast Foods', 'Snacks and Chips'].map((item, index) => (
                                <li key={index} className="py-2 border-b border-b-black text-gray-700 hover:text-green-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </nav>
    );
}

export default Navbar;

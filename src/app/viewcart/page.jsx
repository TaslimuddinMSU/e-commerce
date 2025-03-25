import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { cartItem } from '@/utils/Data';

const Viewcart = () => {
    return (
        <>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className=" mt-3 p-4">
                <div className="max-w-4xl mx-auto bg-white p-4 shadow">
                    {/* Delivery Info */}
                    <div className="border-b pb-4 mb-5">
                        <div className="flex justify-between items-start flex-col sm:flex-col md:flex-row lg:flex-row gap-5">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Deliver to: <span className="font-semibold">Taslim Ansari, 700102</span>
                                </p>
                                <p className="text-gray-500 text-sm">MB 201, Mahishbathan, Salt Lake, Sector V, Mahishbathan...</p>
                            </div>
                            <button className="text-white text-sm py-2 px-4 bg-slate-600 hover:bg-slate-700 transition duration-300">
                                Change
                            </button>
                        </div>

                    </div>

                    {/* Product Details */}
                    {cartItem.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 py-4">
                            <div className='flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row'>
                                <div className="flex gap-4">
                                    {/* Product Image */}
                                    <div className="w-20 h-auto sm:w-28 md:w-36 lg:w-44">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={100}
                                            height={96}
                                            className="rounded w-full h-auto"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-col">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-600 pt-2">
                                            Seller: <span className="text-blue-600">{item.seller}</span> <span className="text-yellow-500">✔️</span>
                                        </p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <span className="line-through text-gray-500 text-sm">₹{item.originalPrice.toFixed(2)}</span>
                                            <span className="text-lg font-bold">₹{item.discountedPrice.toFixed(2)}</span>
                                            <span className="text-green-600 text-sm">{item.discount}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 self-start">
                                    Delivery in 2 days, Thu | <span className="line-through">₹40</span> <span className="text-green-600">Free</span>
                                </p>
                            </div>

                            {/* Quantity and Actions */}
                            <div className="flex justify-between items-center flex-col sm:flex-col md:flex-row lg:flex-row gap-5">
                                <div className="flex items-center space-x-2">
                                    <button className="border px-3 py-1">-</button>
                                    <span className="px-4">1</span>
                                    <button className="border px-3 py-1">+</button>
                                </div>
                                <div className="flex space-x-6 text-blue-600 text-sm">
                                    <button className="bg-[#EAB308] text-white py-2 px-4 hover:bg-yellow-600 transition duration-300">Save for later</button>
                                    <button className="bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition duration-300">Remove</button>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>

                {/* Place Order Button */}
                <div className="max-w-4xl mx-auto bg-white p-4 shadow my-8 text-center">
                    <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-300">PLACE ORDER</button>
                </div>
            </div>

            <div className="w-full py-2">
                <Footer />
            </div>
        </>
    );
};

export default Viewcart;

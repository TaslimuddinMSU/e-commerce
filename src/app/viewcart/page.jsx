'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { cartItem } from '@/utils/Data';

const Viewcart = () => {
    const [quantities, setQuantities] = useState(cartItem.map(() => 1));
    const [totalItem, setTotalItem] = useState(cartItem.length);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate total price on mount or when quantities change
        const total = cartItem.reduce((acc, item, index) => {
            return acc + item.discountedPrice * quantities[index];
        }, 0);
        setTotalPrice(total);
    }, [quantities]);

    const increaseItemHandle = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] += 1;
        setQuantities(updatedQuantities);
        setTotalItem(totalItem + 1);
    };

    const decreaseItemHandle = (index) => {
        const updatedQuantities = [...quantities];
        if (updatedQuantities[index] > 1) {
            updatedQuantities[index] -= 1;
            setQuantities(updatedQuantities);
            setTotalItem(totalItem - 1);
        }
    };

    const handleRemoveItem = (index) => {
        const updatedQuantities = [...quantities];
        const removedQuantity = updatedQuantities[index];
        updatedQuantities.splice(index, 1);
        cartItem.splice(index, 1); 

        setQuantities(updatedQuantities);
        setTotalItem(totalItem - removedQuantity);
    };

    return (
        <>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className="mt-3 p-4">
                <div className="max-w-4xl mx-auto bg-white p-4 shadow">

                    {/* Delivery Info */}
                    <div className="border-b pb-4 mb-5">
                        <div className="flex justify-between items-start flex-col sm:flex-col md:flex-row lg:flex-row gap-5">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Deliver to: <span className="font-semibold">Taslim Ansari, 700102</span>
                                </p>
                                <p className="text-gray-500 text-sm">MB 201, Mahishbathan, Salt Lake, Sector V...</p>
                            </div>
                            <button className="text-white rounded text-sm py-2 px-4 bg-slate-600 hover:bg-slate-700 transition duration-300">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Product Details */}
                    {cartItem.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 py-4">
                            <div className='flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row'>
                                <div className="flex gap-4">
                                    <div className="w-20 h-auto sm:w-28 md:w-36 lg:w-44">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={100}
                                            height={96}
                                            className="rounded w-full h-auto"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-600 pt-2">
                                            Seller: <span className="text-blue-600">{item.seller}</span> <span className="text-yellow-500">✔️</span>
                                        </p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <span className="line-through text-gray-500 text-sm">₹{item.originalPrice.toFixed(2)}</span>
                                            <span className="text-lg font-bold">₹{(item.discountedPrice * quantities[index]).toFixed(2)}</span>
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
                                    <button className="border px-3 py-1 rounded hover:bg-gray-100" onClick={() => decreaseItemHandle(index)}>-</button>
                                    <span className="px-4">{quantities[index]}</span>
                                    <button className="border px-3 py-1 rounded hover:bg-gray-100" onClick={() => increaseItemHandle(index)}>+</button>
                                </div>
                                <div className="flex space-x-6 text-blue-600 text-sm">
                                    <button className="bg-[#EAB308] rounded text-white py-2 px-4 hover:bg-yellow-600 transition duration-300">Save for later</button>
                                    <button
                                        className="bg-red-600 rounded text-white py-2 px-4 hover:bg-red-700 transition duration-300"
                                        onClick={() => handleRemoveItem(index)}
                                    >Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Place Order Button */}
                <div className="max-w-4xl mx-auto bg-white p-4 shadow my-8 flex justify-between items-center">
                    <div><span className='text-lg font-medium'>Total ({totalItem} items):</span> ₹{totalPrice.toFixed(2)}</div>
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

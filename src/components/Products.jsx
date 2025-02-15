'use client'
import Image from "next/image";
import React from "react";
import { useRef, useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import AddToCart from "@/components/AddToCart"
import Link from "next/link";
const Products = ({ products }) => {

    const [allItemsToCart, setAllItemsToCart] = useState([]);

    const handleAddItems = (id) => {
        const item = products.find((prod) => prod.id === id);
        if (item) {
            setAllItemsToCart((prevItems) => [...prevItems, item]);
        }
    }
    console.log("handleAddItems", allItemsToCart)
    const handleRemoveItems = (id) => {
        console.log("handleRemoveItems", id)
    }

    return (
        <div className="w-full relative flex items-center justify-center">
            <div className="w-full flex gap-8 overflow-x-auto p-4 hide_scrollbar scroll-snap">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative group border rounded-lg shadow-lg w-64 flex-shrink-0 scroll-snap-center cursor-pointer transition-transform duration-300 group-hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-full h-auto p-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                width={100}
                                height={100}

                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                            <div className="flex items-center space-x-1 text-yellow-500">
                                {"★".repeat(product.rating)}
                                <span className="text-gray-500">({product.reviews})</span>
                            </div>
                            <div className="flex items-baseline justify-between space-x-2">
                                <div className="flex gap-3">
                                    <span className="text-gray-400 line-through">
                                        ₹{product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-lg font-bold text-green-600">
                                        ₹{product.discountedPrice.toFixed(2)}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-red-500">
                                    ({product.discount})
                                </span>
                            </div>
                            <div className="w-full flex gap-3 items-center justify-between pt-2">
                                {/* <div className="w-[70px] flex items-center gap-2">
                                    <button className="px-2 py-1 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-200"
                                        onClick={() => handleRemoveItems(product.id)}
                                    >-</button>
                                    <span className="text-sm text-slate-950">{allItemsToCart.length}</span>
                                    <button onClick={ () => handleAddItems(product.id)} className="px-2 py-1 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-200">+</button>
                                </div> */}
                                <button onClick={() => handleAddItems(product.id)}
                                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm">
                                    {/* <span className="text-center"><FaShoppingCart/></span>  */}
                                    <span className="text-sm text-white">Add to Cart</span>
                                </button>
                                <Link href={`/${product.id}`} className="w-full flex items-center justify-center bg-yellow-500 hover:bg-black text-white p-2 rounded-md text-sm">
                                    <span className="text-sm text-white">View Detail</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Products;

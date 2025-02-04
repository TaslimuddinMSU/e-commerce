'use client'
import Image from "next/image";
import React from "react";
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AddToCart from "@/components/AddToCart"
import { products } from "@/utils/Data";
const Products = () => {
    // const products = [
    //     {
    //         "id": 1,
    //         "name": "Fresh Salmon",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Imported Italian Spaghetti Pasta",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Granny Smith Apples",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Organic 2% Reduced Fat Milk",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Greek Style Plain Yogurt",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Greek Style Plain Yogurt",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     }, 
    //     {
    //         "id": 5,
    //         "name": "Greek Style Plain Yogurt",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     }, 
    //     {
    //         "id": 5,
    //         "name": "Greek Style Plain Yogurt",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Greek Style Plain Yogurt",
    //         "image": "/product-thumb-6.png",
    //         "rating": 5,
    //         "reviews": 222,
    //         "originalPrice": 24.0,
    //         "discountedPrice": 18.0,
    //         "discount": "10% OFF"
    //     }
    // ]

    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);


    return (
        <div className="w-full relative flex items-center justify-center">
            <div className="w-full flex gap-8 overflow-x-auto p-4 hide_scrollbar scroll-snap">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative group border rounded-lg shadow-lg w-64 flex-shrink-0 scroll-snap-center cursor-pointer"
                    >
                        {/* Product Image */}
                        <div className="flex items-center justify-center w-full h-auto p-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="h-48 w-full object-cover"
                                width={100}
                                height={100}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                            <div className="flex items-center space-x-1 text-yellow-500">
                                {"★".repeat(product.rating)}
                                <span className="text-gray-500">({product.reviews})</span>
                            </div>
                            <div className="flex items-baseline justify-between space-x-2">
                                <div className="flex gap-3">
                                    <span className="text-gray-400 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-lg font-bold text-green-600">
                                        ${product.discountedPrice.toFixed(2)}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-red-500">
                                    ({product.discount})
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Products;

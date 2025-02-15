'use client'
import React from 'react'
import Title from './Title'
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Products from './Products';
import { products } from "@/utils/Data";

const FeaturedProducts = () => {
    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);


    const scrollLeft = () => {
        console.log('Left')
    };

    const scrollRight = () => {
        console.log('Right')
    };

    return (
        <div className="px-3 sm:px-6 py-2 sm:py-8">
            <div className="flex justify-between items-center mb-4">
                <Title title='Featured products' />
                <div className='flex justify-center items-center flex-end gap-2'>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View More</button>
                    <button
                        onClick={scrollLeft}
                        className={`hover:bg-green-500 bg-gray-200 p-2 rounded-[10px] shadow-md ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isAtStart}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`hover:bg-green-500 bg-gray-200 p-2 rounded-[10px] shadow-md ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isAtEnd}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
            <Products products = {products}/>   
            </div>
        </div>
    )
}

export default FeaturedProducts
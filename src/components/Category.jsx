'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {categories} from "@/utils/categories";
import Title from './Title';

const Category = () => {
    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const scrollWidth = scrollRef.current.scrollWidth;
            const clientWidth = scrollRef.current.clientWidth;

            // Check if we're at the start or end
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Set up scroll position checking
    useEffect(() => {
        const interval = setInterval(checkScrollPosition, 100);
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="px-3 sm:px-6 py-2 sm:py-8">
            <div className="flex justify-between items-center mb-4">
                <Title title='Category' />
                <div className='flex justify-center items-center flex-end gap-2'>
                    <button className="hidden sm:block md:block bg-green-500 text-white px-4 py-2 rounded-lg">View More</button>
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

            <div className="relative flex items-center justify-center">
                <div
                    ref={scrollRef}
                    className="flex space-x-7 overflow-x-auto py-2 hide_scrollbar"
                >
                    {categories.map((category, index) => (
                        <Link href={`/category`} key={index} className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-[100px] h-[100px] 
                            sm:w-[150px] sm:h-[150px] bg-gray-300 rounded-full overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <p className="text-center mt-2 medium-text">{category.name}</p>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;

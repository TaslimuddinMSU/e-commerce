'use client';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
    { name: 'Fruits & Veges', image: '/org-banner-4.jpg' },
    { name: 'Breads & Sweets', image: '/org-banner-4.jpg' },
    { name: 'Fruits & Veges', image: '/org-banner-4.jpg' },
    { name: 'Beverages', image: '/org-banner-4.jpg' },
    { name: 'Meat Products', image: '/org-banner-4.jpg' },
    { name: 'Breads', image: '/org-banner-4.jpg' },
    { name: 'Fruits & Veges', image: '/org-banner-4.jpg' },
    { name: 'Breads & Sweets', image: '/org-banner-4.jpg' },
    { name: 'Beverages', image: '/org-banner-4.jpg' },
    { name: 'Meat Products', image: '/org-banner-4.jpg' },
    { name: 'Breads', image: '/org-banner-4.jpg' },
    { name: 'Fruits & Veges', image: '/org-banner-4.jpg' },
    { name: 'Breads & Sweets', image: '/org-banner-4.jpg' },
    { name: 'Beverages', image: '/org-banner-4.jpg' },
    { name: 'Meat Products', image: '/org-banner-4.jpg' },
    { name: 'Breads', image: '/org-banner-4.jpg' },
    { name: 'Fruits & Veges', image: '/org-banner-4.jpg' },
    { name: 'Breads & Sweets', image: '/org-banner-4.jpg' },
];

const Category = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="px-6 py-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Category</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View All</button>
            </div>

            <div className="relative flex items-center justify-center">
                {/* Left Scroll Button */}
                <button onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
                >
                    <FaChevronLeft />
                </button>
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide p-2"
                >
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center min-w-[120px]">
                            <div className="w-28 h-28 bg-gray-300 rounded-full overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-center mt-2 text-md font-bold">{category.name}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default Category

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { products } from '@/utils/Data';

const CategoryCard = () => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="flex space-x-7 gap-4  overflow-x-auto px-4 py-8 hide_scrollbar">
                {products.map((ele, index) => (
                    <Link
                        key={index}
                        href={`/category/${ele.category}`}
                        className="relative group border rounded-lg shadow-lg w-60 h-60 flex-shrink-0 
                        scroll-snap-center cursor-pointer transition-transform duration-300 hover:scale-100"
                    >
                        <div className="relative w-full h-2/3 p-6">
                            <Image
                                src={ele.image}
                                alt={ele.name}
                                fill
                                className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="h-1/3 p-2 flex items-center justify-center">
                            <h3 className="text-md font-semibold text-center truncate">{ele.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;

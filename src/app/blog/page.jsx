import React from 'react';
import { blog } from '@/utils/blog';
import BlogCard from '@/components/BlogCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const Blogs = () => {
    return (
        <>
            <div className='w-full'>
                <Navbar />
            </div>

            <div className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/blog-banner.webp')" }}>
                <div className="flex items-end justify-start h-full bg-black bg-opacity-50">
                    <h2 className="text-white text-4xl font-bold p-6">Blog</h2>
                </div>
            </div>

            <div className='w-full pt-4 pb-4 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 px-4 lg:px-6' >
                <BlogCard blog={blog} />

                <div className='w-full flex justify-center items-center'>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg 
                    mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">View More</button>
                </div>
            </div>

            <div className='w-full'>
                <Footer />
            </div>
        </>
    )
}

export default Blogs;